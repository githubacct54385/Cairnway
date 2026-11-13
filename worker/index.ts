// The site's Worker. Everything is served as static files from ./dist except POST /api/report (the "report a
// problem" forms, which become GitHub issues) and /admin/ (the private reports page, worker/admin.ts).
// See docs/DEPLOY.md ("Report form") for the one-time setup.

import { REPORT_SECTIONS, type Section } from '../src/lib/report';
import { handleAdmin } from './admin';
import type { ContactRecord, Env, KV } from './types';

export type { Env } from './types';

const LIMITS = { details: 4000, contact: 200, page: 200, about: 200, source: 1000 };
const PER_IP_PER_HOUR = 5;

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store' },
  });

/** Stops "@name" in a report from pinging real GitHub users. */
const defuse = (text: string) => text.replace(/@(?=[A-Za-z0-9])/g, '@​');

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

  if (!page.startsWith('/') || page.length > LIMITS.page) return `The page is missing. Please open the form from a ${cfg.name} page.`;
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
 * live site and a future custom domain, gets no mark, so a new domain can never be mislabelled by accident.
 */
const isPreviewHost = (hostname: string) => /^(staging|[0-9a-f]{8})-[a-z0-9-]+\.[^.]+\.workers\.dev$/.test(hostname);

async function verifyTurnstile(secret: string, token: string, ip: string) {
  const body = new FormData();
  body.set('secret', secret);
  body.set('response', token);
  if (ip) body.set('remoteip', ip);
  const res = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', { method: 'POST', body });
  if (!res.ok) return false;
  const out = (await res.json()) as { success?: boolean };
  return out.success === true;
}

/** Counts reports per IP per hour in KV. Not exact (KV is eventually consistent), but enough to stop floods. */
async function overLimit(kv: KV | undefined, ip: string) {
  if (!kv || !ip) return false;
  const key = `rl:${ip}:${new Date().toISOString().slice(0, 13)}`;
  const n = Number((await kv.get(key)) ?? '0');
  if (n >= PER_IP_PER_HOUR) return true;
  await kv.put(key, String(n + 1), { expirationTtl: 3700 });
  return false;
}

async function handleReport(request: Request, env: Env, ctx: { waitUntil(p: Promise<unknown>): void }): Promise<Response> {
  if (!env.GITHUB_TOKEN || !env.TURNSTILE_SECRET) {
    return json({ ok: false, error: 'not-configured', message: 'The report form is not switched on yet.' }, 503);
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
  if (!token || !(await verifyTurnstile(env.TURNSTILE_SECRET, token, ip))) {
    return json({ ok: false, error: 'challenge', message: 'The spam check did not pass. Please try again.' }, 400);
  }

  if (await overLimit(env.REPORT_CONTACTS, ip)) {
    return json({ ok: false, error: 'rate-limited', message: 'Too many reports from your connection just now. Please try again later.' }, 429);
  }

  const reference = `R-${Date.now().toString(36).toUpperCase()}`;
  const staging = isPreviewHost(new URL(request.url).hostname);
  const body = [
    staging ? '**Environment:** staging' : '',
    `**Page:** ${clean.page}`,
    clean.about ? `**About:** ${defuse(clean.about)}` : '',
    `**Kind:** ${clean.kind}`,
    '',
    '### What is wrong',
    '',
    defuse(clean.details),
    '',
    clean.source ? '### Source suggested' : '',
    '',
    clean.source ? defuse(clean.source) : '',
    '',
    '---',
    `Reference \`${reference}\`. Submitted through the on-site form; the reporter's contact details are stored privately.`,
  ]
    .filter((l, i, a) => l !== '' || a[i - 1] !== '')
    .join('\n');

  const res = await fetch(`https://api.github.com/repos/${env.GITHUB_REPO}/issues`, {
    method: 'POST',
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

  const issue = (await res.json()) as { number: number };
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
  if (env.REPORT_CONTACTS) await env.REPORT_CONTACTS.put(`issue:${issue.number}`, JSON.stringify(record));
  // Best effort: a failing mail provider must never fail a report that is already filed.
  ctx.waitUntil(notifyMaintainer(env, issue.number, record).catch((e) => console.error('Notification failed', String(e))));
  return json({ ok: true, reference });
}

const oneLine = (s: string) => s.replace(/[\r\n]+/g, ' ');

/** Emails the maintainer the reporter's contact (which is never put in the public issue). Needs RESEND_API_KEY and NOTIFY_EMAIL. */
async function notifyMaintainer(env: Env, number: number, r: ContactRecord) {
  if (!env.RESEND_API_KEY || !env.NOTIFY_EMAIL) return;
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
    if (pathname === '/admin' || pathname.startsWith('/admin/')) return handleAdmin(request, env);
    return env.ASSETS.fetch(request);
  },
};
