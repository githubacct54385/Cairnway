// The site's Worker. Everything is served as static files from ./dist except POST /api/report (the "report a
// problem" forms, which become GitHub issues). There is no admin page: the reporter's contact is only emailed to the
// maintainer and is never stored.
// See docs/DEPLOY.md ("Report form") for the one-time setup.

import { REPORT_SECTIONS, type Section } from '../src/lib/report';
import type { ContactRecord, Env, KV } from './types';

export type { Env } from './types';

const LIMITS = { details: 4000, contact: 200, page: 200, about: 200, source: 1000 };
// Global cap on reports filed per UTC day. Only reports that were actually filed count, so a typo, a failed spam check or
// a GitHub outage never uses one up. It is approximate (KV is not atomic), which is fine for a safety valve. Preview
// (staging) addresses get a much higher allowance for testing. The per-connection burst limit is the IP_LIMITER binding.
const PER_DAY = 200;
const PER_DAY_PREVIEW = 1000;
const TURNSTILE_ACTION = 'report';
// A path: no spaces, newlines or markdown, so it cannot carry links or formatting into the issue.
const PAGE_PATTERN = /^\/[A-Za-z0-9/_.\-]*$/;

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store', 'x-content-type-options': 'nosniff' },
  });

/**
 * Puts reporter text in a fenced code block. Inside one, GitHub does not render links, #123 references, @mentions or
 * markdown, and the text cannot close the block or fake a footer (the fence is longer than any run of backticks in it).
 */
function fence(text: string) {
  const longest = Math.max(0, ...(text.match(/`+/g) ?? []).map((r) => r.length));
  const bar = '`'.repeat(Math.max(3, longest + 1));
  return `${bar}text\n${text}\n${bar}`;
}

/** One line of reporter text as inline code (no backticks, no line breaks). */
const inlineCode = (text: string) => `\`${text.replace(/[`\r\n]+/g, ' ').trim()}\``;

const isEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
const isHandle = (v: string) => /^@?[A-Za-z0-9](?:[A-Za-z0-9-]{0,38})$/.test(v);

type Clean = { section: Section; page: string; about: string; kind: string; details: string; source: string; contact: string };

function validate(input: Record<string, unknown>): Clean | string {
  const str = (k: string) => (typeof input[k] === 'string' ? (input[k] as string).trim() : '');
  const section: Section = str('section') === 'history' ? 'history' : 'crossroads';
  const cfg = REPORT_SECTIONS[section];
  const page = str('page');
  const about = str('about');
  const kind = str('kind');
  const details = str('details');
  const source = cfg.asksSource ? str('source') : '';
  const contact = str('contact');

  if (!PAGE_PATTERN.test(page) || page.length > LIMITS.page) return `The page is missing. Please open the form from a ${cfg.name} page.`;
  if (about.length > LIMITS.about) return 'The page name is too long.';
  if (!cfg.kinds.includes(kind)) return 'Please choose what kind of problem it is.';
  if (details.length < 10) return 'Please say what is wrong (at least a sentence).';
  if (details.length > LIMITS.details) return `Please keep the details under ${LIMITS.details} characters.`;
  if (source.length > LIMITS.source) return `Please keep the source under ${LIMITS.source} characters.`;
  if (!contact || contact.length > LIMITS.contact || !(isEmail(contact) || isHandle(contact))) {
    return 'Please give an email address or a GitHub username so we can reply.';
  }
  return { section, page, about, kind, details, source, contact };
}

/**
 * Reports sent from a preview address (staging-<worker>.<subdomain>.workers.dev, or a per-version preview such as
 * 1a2b3c4d-<worker>...) are marked "staging" so they are easy to tell from real ones. Any other address, including the
 * live site and a future custom domain, gets no mark, so a new domain can never be mislabeled by accident.
 */
const isPreviewHost = (hostname: string) => /^(staging|[0-9a-f]{8})-[a-z0-9-]+\.[^.]+\.workers\.dev$/.test(hostname);

async function verifyTurnstile(secret: string, token: string, ip: string, hostname: string) {
  const body = new FormData();
  body.set('secret', secret);
  body.set('response', token);
  if (ip) body.set('remoteip', ip);
  const res = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', { method: 'POST', body });
  if (!res.ok) return false;
  const out = (await res.json()) as { success?: boolean; hostname?: string; action?: string };
  // The token must have been issued for this site and for this form, not replayed from another site's widget.
  return out.success === true && out.hostname === hostname && out.action === TURNSTILE_ACTION;
}

const dayKey = () => `rl:day:${new Date().toISOString().slice(0, 10)}`;

/** Has the site already filed its allowance of reports today? */
async function overDailyCap(kv: KV | undefined, limit: number) {
  if (!kv) return false;
  return Number((await kv.get(dayKey())) ?? '0') >= limit;
}

/** Counts one filed report against today's total. */
async function countReport(kv: KV | undefined) {
  if (!kv) return;
  const key = dayKey();
  const n = Number((await kv.get(key)) ?? '0');
  await kv.put(key, String(n + 1), { expirationTtl: 90000 });
}

async function handleReport(request: Request, env: Env, ctx: { waitUntil(p: Promise<unknown>): void }): Promise<Response> {
  // The reporter's contact exists only in the notification email, so the form stays off unless that email can be sent.
  if (!env.GITHUB_TOKEN || !env.TURNSTILE_SECRET || !env.RESEND_API_KEY || !env.NOTIFY_EMAIL) {
    return json({ ok: false, error: 'not-configured', message: 'The report form is not switched on yet.' }, 503);
  }

  // Browsers always send Origin on a cross-site or same-site POST; require it to be this site.
  const url = new URL(request.url);
  if (request.headers.get('origin') !== url.origin) {
    return json({ ok: false, error: 'origin', message: 'This report did not come from the site.' }, 403);
  }

  let input: Record<string, unknown>;
  try {
    const parsed = await request.json();
    if (typeof parsed !== 'object' || parsed === null || Array.isArray(parsed)) throw new Error();
    input = parsed as Record<string, unknown>;
  } catch {
    return json({ ok: false, error: 'bad-request', message: 'That did not look like a report.' }, 400);
  }

  // Honeypot: real people never fill this hidden field. Pretend it worked.
  if (typeof input.website === 'string' && input.website !== '') return json({ ok: true, reference: 'R-0000' });

  const clean = validate(input);
  if (typeof clean === 'string') return json({ ok: false, error: 'invalid', message: clean }, 400);

  const ip = request.headers.get('cf-connecting-ip') ?? '';
  const token = typeof input.turnstile === 'string' ? input.turnstile : '';
  if (!token || !(await verifyTurnstile(env.TURNSTILE_SECRET, token, ip, url.hostname))) {
    return json({ ok: false, error: 'challenge', message: 'The spam check did not pass. Please try again.' }, 400);
  }

  const staging = isPreviewHost(url.hostname);
  if (env.IP_LIMITER && ip && !(await env.IP_LIMITER.limit({ key: ip })).success) {
    return json({ ok: false, error: 'rate-limited', message: 'You are sending reports too quickly. Please wait a minute and try again.' }, 429);
  }
  if (await overDailyCap(env.RATE_LIMIT, staging ? PER_DAY_PREVIEW : PER_DAY)) {
    return json({ ok: false, error: 'rate-limited', message: 'We have received a lot of reports today. Please try again tomorrow.' }, 429);
  }

  const reference = `R-${Date.now().toString(36).toUpperCase()}`;
  const body = [
    staging ? '**Environment:** staging' : '',
    `**Page:** ${inlineCode(clean.page)}`,
    clean.about ? `**About:** ${inlineCode(clean.about)}` : '',
    `**Kind:** ${clean.kind}`,
    '',
    '### What is wrong',
    '',
    fence(clean.details),
    '',
    clean.source ? '### Source suggested' : '',
    '',
    clean.source ? fence(clean.source) : '',
    '',
    '---',
    `Reference \`${reference}\`. Submitted through the on-site form; the reporter's contact details are not stored or shown here.`,
  ]
    .filter((l, i, a) => l !== '' || a[i - 1] !== '')
    .join('\n');

  const res = await fetch(`https://api.github.com/repos/${env.GITHUB_REPO}/issues`, {
    method: 'POST',
    // A redirect (for example from a renamed repository) would turn the POST into a GET and file nothing: treat it as a failure.
    redirect: 'manual',
    headers: {
      authorization: `Bearer ${env.GITHUB_TOKEN}`,
      accept: 'application/vnd.github+json',
      'content-type': 'application/json',
      'user-agent': 'crossroads-report-form',
      'x-github-api-version': '2022-11-28',
    },
    body: JSON.stringify({
      title: `${staging ? '[staging] ' : ''}${REPORT_SECTIONS[clean.section].name} report: ${(clean.about || clean.page).slice(0, 120)}`,
      body,
      labels: [REPORT_SECTIONS[clean.section].label, 'from-form', ...(staging ? ['staging'] : [])],
    }),
  });

  if (!res.ok) {
    console.error('GitHub issue creation failed', res.status);
    return json({ ok: false, error: 'upstream', message: 'We could not save your report just now. Please try again later.' }, 502);
  }

  const issue = (await res.json().catch(() => ({}))) as { number?: unknown };
  if (typeof issue.number !== 'number' || !Number.isInteger(issue.number)) {
    console.error('GitHub answered without an issue number');
    return json({ ok: false, error: 'upstream', message: 'We could not save your report just now. Please try again later.' }, 502);
  }
  const record: ContactRecord = {
    contact: clean.contact,
    reference,
    section: clean.section,
    environment: staging ? 'staging' : 'live',
    page: clean.page,
    at: new Date().toISOString(),
    kind: clean.kind,
    about: clean.about || undefined,
  };
  await countReport(env.RATE_LIMIT);
  // Best effort: a failing mail provider must never fail a report that is already filed. The issue number is logged so
  // the report can be found on GitHub; the contact is lost if the email fails, since it is not stored anywhere.
  ctx.waitUntil(notifyMaintainer(env, issue.number, record).catch((e) => console.error(`Notification failed for issue ${issue.number}`, String(e))));
  return json({ ok: true, reference });
}

const oneLine = (s: string) => s.replace(/[\r\n]+/g, ' ');

/** Emails the maintainer the reporter's contact (which is never put in the public issue or stored). */
async function notifyMaintainer(env: Env, number: number, r: ContactRecord) {
  if (!env.RESEND_API_KEY || !env.NOTIFY_EMAIL) throw new Error('Email is not configured');
  const cfg = REPORT_SECTIONS[r.section === 'history' ? 'history' : 'crossroads'];
  const tag = r.environment === 'staging' ? '[staging] ' : '';
  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { authorization: `Bearer ${env.RESEND_API_KEY}`, 'content-type': 'application/json' },
    body: JSON.stringify({
      from: 'Cairnway reports <onboarding@resend.dev>',
      to: [env.NOTIFY_EMAIL],
      ...(isEmail(r.contact) ? { reply_to: r.contact } : {}),
      subject: oneLine(`${tag}New ${cfg.name} report #${number}: ${r.about || r.page}`).slice(0, 200),
      text: [
        `Issue: https://github.com/${env.GITHUB_REPO}/issues/${number}`,
        `Reference: ${r.reference}`,
        `Environment: ${r.environment}`,
        `Page: ${r.page}`,
        r.kind ? `Kind: ${r.kind}` : '',
        '',
        `Reporter's contact: ${r.contact}`,
        isEmail(r.contact) ? '(Reply to this email to write to them.)' : '(They gave a GitHub username, so there is no email to reply to.)',
      ]
        .filter((l, i, a) => l !== '' || a[i - 1] !== '')
        .join('\n'),
    }),
  });
  if (!res.ok) throw new Error(`Resend answered ${res.status}`);
}

export default {
  async fetch(request: Request, env: Env, ctx: { waitUntil(p: Promise<unknown>): void }): Promise<Response> {
    const { pathname } = new URL(request.url);
    if (pathname === '/api/report') {
      if (request.method !== 'POST') return json({ ok: false, error: 'method', message: 'Use POST.' }, 405);
      return handleReport(request, env, ctx);
    }
    return env.ASSETS.fetch(request);
  },
};
