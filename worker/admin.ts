// The private reports page at /admin/. Read-only: it lists what the report form stored (see ContactRecord)
// so the maintainer can see who sent each report. Protected by a passcode (secret ADMIN_PASSCODE) until the site has
// a domain and the page can sit behind Cloudflare Access instead. See docs/DEPLOY.md.

import type { ContactRecord, Env } from './types';

const COOKIE = 'ap_admin';
const SESSION_SECONDS = 12 * 60 * 60;
const LOGIN_TRIES_PER_15_MIN = 10;
const MAX_REPORTS = 500;

const enc = new TextEncoder();
const hex = (buf: ArrayBuffer) => [...new Uint8Array(buf)].map((b) => b.toString(16).padStart(2, '0')).join('');

async function hmac(key: string, message: string) {
  const k = await crypto.subtle.importKey('raw', enc.encode(key), { name: 'HMAC', hash: 'SHA-256' }, false, ['sign']);
  return hex(await crypto.subtle.sign('HMAC', k, enc.encode(message)));
}

/** Compares two strings in time that does not depend on where they differ. */
async function sameSecret(a: string, b: string) {
  const [x, y] = await Promise.all([hmac('cmp', a), hmac('cmp', b)]);
  let diff = 0;
  for (let i = 0; i < x.length; i++) diff |= x.charCodeAt(i) ^ y.charCodeAt(i);
  return diff === 0;
}

const esc = (s: unknown) =>
  String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!);

const html = (body: string, status = 200, headers: Record<string, string> = {}) =>
  new Response(body, {
    status,
    headers: {
      'content-type': 'text/html; charset=utf-8',
      'cache-control': 'no-store',
      'x-robots-tag': 'noindex, nofollow',
      'referrer-policy': 'no-referrer',
      'content-security-policy': "default-src 'none'; style-src 'unsafe-inline'; form-action 'self'; frame-ancestors 'none'",
      ...headers,
    },
  });

const page = (title: string, inner: string) => `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="robots" content="noindex, nofollow"><title>${esc(title)}</title>
<style>
:root{color-scheme:light dark;--bg:#fbfaf7;--fg:#1b1a17;--muted:#5f5b52;--rule:#e4e0d6;--card:#fff;--accent:#7a3b1e}
@media (prefers-color-scheme:dark){:root{--bg:#141311;--fg:#f1eee6;--muted:#a8a396;--rule:#2a2824;--card:#1c1b18;--accent:#e0a37b}}
body{margin:0;background:var(--bg);color:var(--fg);font:16px/1.5 system-ui,sans-serif}
main{max-width:60rem;margin:0 auto;padding:1.5rem 1rem 3rem}
a{color:var(--accent)} h1{font-size:1.4rem;margin:.2rem 0 1rem}
.muted{color:var(--muted);font-size:.9rem}
input{font:inherit;padding:.5rem .6rem;border:1px solid var(--rule);border-radius:6px;background:var(--card);color:var(--fg)}
button{font:inherit;font-weight:600;padding:.5rem 1rem;border-radius:6px;border:1px solid var(--accent);background:var(--accent);color:var(--bg);cursor:pointer}
.row{background:var(--card);border:1px solid var(--rule);border-radius:8px;padding:.75rem 1rem;margin:.6rem 0}
.row h2{font-size:1rem;margin:0 0 .25rem} .tag{font-size:.75rem;border:1px solid var(--rule);border-radius:99px;padding:0 .5rem;margin-left:.4rem}
.err{color:#b3261e}
</style></head><body><main>${inner}</main></body></html>`;

const loginForm = (error = '') =>
  page(
    'Reports',
    `<h1>Reports</h1>${error ? `<p class="err" role="alert">${esc(error)}</p>` : ''}
<form method="post" action="/admin/login"><p><label>Passcode<br><input type="password" name="passcode" autocomplete="current-password" required autofocus></label></p><button>Sign in</button></form>`,
  );

async function sessionValue(passcode: string, expires: number) {
  return `${expires}.${await hmac(passcode, `admin-session:${expires}`)}`;
}

async function isSignedIn(request: Request, passcode: string) {
  const raw = (request.headers.get('cookie') ?? '').split(/;\s*/).find((c) => c.startsWith(`${COOKIE}=`));
  if (!raw) return false;
  const value = decodeURIComponent(raw.slice(COOKIE.length + 1));
  const expires = Number(value.split('.')[0]);
  if (!Number.isFinite(expires) || expires < Date.now() / 1000) return false;
  return sameSecret(value, await sessionValue(passcode, expires));
}

async function tooManyLogins(env: Env, ip: string) {
  if (!env.REPORT_CONTACTS || !ip) return false;
  const key = `rl-login:${ip}:${Math.floor(Date.now() / 900000)}`;
  const n = Number((await env.REPORT_CONTACTS.get(key)) ?? '0');
  if (n >= LOGIN_TRIES_PER_15_MIN) return true;
  await env.REPORT_CONTACTS.put(key, String(n + 1), { expirationTtl: 1000 });
  return false;
}

const contactLink = (contact: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contact)
    ? `<a href="mailto:${esc(contact)}">${esc(contact)}</a>`
    : `<a href="https://github.com/${esc(contact.replace(/^@/, ''))}" rel="noreferrer">${esc(contact)}</a>`;

async function loadReports(env: Env) {
  const kv = env.REPORT_CONTACTS!;
  const names: string[] = [];
  let cursor: string | undefined;
  do {
    const out = await kv.list({ prefix: 'issue:', cursor, limit: 1000 });
    names.push(...out.keys.map((k) => k.name));
    cursor = out.list_complete ? undefined : out.cursor;
  } while (cursor && names.length < MAX_REPORTS);

  const rows = await Promise.all(
    names.slice(0, MAX_REPORTS).map(async (name) => {
      try {
        const rec = JSON.parse((await kv.get(name)) ?? '') as ContactRecord;
        return { number: name.slice('issue:'.length), rec };
      } catch {
        return null;
      }
    }),
  );
  return rows.filter((r): r is { number: string; rec: ContactRecord } => r !== null).sort((a, b) => (b.rec.at ?? '').localeCompare(a.rec.at ?? ''));
}

async function reportsPage(env: Env) {
  if (!env.REPORT_CONTACTS) return html(page('Reports', '<h1>Reports</h1><p>The private store is not set up.</p>'), 503);
  const reports = await loadReports(env);
  const items = reports
    .map(({ number, rec }) => {
      const env_ = rec.environment === 'staging' ? '<span class="tag">staging</span>' : '';
      return `<div class="row"><h2><a href="https://github.com/${esc(env.GITHUB_REPO)}/issues/${esc(number)}" rel="noreferrer">#${esc(number)}</a>
 ${esc(rec.about || rec.page)}${env_}</h2>
<div class="muted">${esc(rec.at?.replace('T', ' ').slice(0, 16))} UTC · ${esc(rec.section)} · ${esc(rec.reference)}${rec.kind ? ` · ${esc(rec.kind)}` : ''}</div>
<div>Contact: ${contactLink(rec.contact)}</div>
<div class="muted">Page: ${esc(rec.page)}</div></div>`;
    })
    .join('');
  return html(
    page(
      'Reports',
      `<h1>Reports</h1><p class="muted">${reports.length} report${reports.length === 1 ? '' : 's'}, newest first. Contacts are private: they are never in the GitHub issue.</p>
${items || '<p>No reports yet.</p>'}
<form method="post" action="/admin/logout"><p><button>Sign out</button></p></form>`,
    ),
  );
}

export async function handleAdmin(request: Request, env: Env): Promise<Response> {
  const url = new URL(request.url);
  const passcode = env.ADMIN_PASSCODE;
  if (!passcode) return new Response('Not found', { status: 404, headers: { 'cache-control': 'no-store' } });
  const secure = url.protocol === 'https:' ? '; Secure' : '';
  const cookie = (value: string, maxAge: number) => `${COOKIE}=${encodeURIComponent(value)}; Path=/admin; HttpOnly; SameSite=Strict; Max-Age=${maxAge}${secure}`;

  if (url.pathname === '/admin/login' && request.method === 'POST') {
    const ip = request.headers.get('cf-connecting-ip') ?? '';
    if (await tooManyLogins(env, ip)) return html(loginForm('Too many attempts. Try again in a few minutes.'), 429);
    const given = String((await request.formData().catch(() => null))?.get('passcode') ?? '');
    if (!given || !(await sameSecret(given, passcode))) return html(loginForm('That passcode is not right.'), 401);
    const expires = Math.floor(Date.now() / 1000) + SESSION_SECONDS;
    return new Response(null, {
      status: 303,
      headers: { location: '/admin/', 'set-cookie': cookie(await sessionValue(passcode, expires), SESSION_SECONDS), 'cache-control': 'no-store' },
    });
  }

  if (url.pathname === '/admin/logout' && request.method === 'POST') {
    return new Response(null, { status: 303, headers: { location: '/admin/', 'set-cookie': cookie('', 0), 'cache-control': 'no-store' } });
  }

  if ((url.pathname === '/admin' || url.pathname === '/admin/') && request.method === 'GET') {
    return (await isSignedIn(request, passcode)) ? reportsPage(env) : html(loginForm());
  }
  return new Response('Not found', { status: 404, headers: { 'cache-control': 'no-store' } });
}
