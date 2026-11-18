// Checks the built site in ./dist. Run it after "npm run build" (CI does this on every pull request).
//
//   Links     every internal link, image, stylesheet and script points at a file that exists in dist, or at a
//             redirect in public/_redirects; every #fragment points at an id on the target page.
//   Headings  each page has exactly one h1, and heading levels never jump (h1 to h3 is an error).
//   Meta      each page has a <title> and a meta description, and no two pages share either one.
//
// External (https://...) links are not checked here: other sites are slow and flaky, and would make CI fail
// for reasons that have nothing to do with a change.
import { readdirSync, readFileSync, existsSync, statSync } from 'node:fs';
import { join, relative, sep } from 'node:path';

const DIST = 'dist';
if (!existsSync(DIST)) {
  console.error('No dist folder. Run "npm run build" first.');
  process.exit(2);
}

// ---- Collect pages ---------------------------------------------------------------------------
function walk(dir) {
  return readdirSync(dir).flatMap((name) => {
    const full = join(dir, name);
    return statSync(full).isDirectory() ? walk(full) : [full];
  });
}
const files = walk(DIST);
const urlOf = (file) => {
  const rel = relative(DIST, file).split(sep).join('/');
  return rel.endsWith('index.html') ? '/' + rel.slice(0, -'index.html'.length) : '/' + rel;
};
const pages = new Map(); // url -> html
for (const f of files) if (f.endsWith('.html')) pages.set(urlOf(f), readFileSync(f, 'utf8'));
const fileSet = new Set(files.map((f) => '/' + relative(DIST, f).split(sep).join('/')));

// ---- Redirects (public/_redirects): "/from  /to  301", with a trailing * as a wildcard ------------
const redirects = existsSync('public/_redirects')
  ? readFileSync('public/_redirects', 'utf8')
      .split('\n')
      .map((l) => l.trim())
      .filter((l) => l && !l.startsWith('#'))
      .map((l) => l.split(/\s+/)[0])
  : [];
const isRedirected = (path) =>
  redirects.some((r) => (r.endsWith('*') ? path.startsWith(r.slice(0, -1)) : path === r));

// ---- Helpers ---------------------------------------------------------------------------------
const decode = (s) =>
  s
    .replace(/&#x([0-9a-f]+);/gi, (_, h) => String.fromCodePoint(parseInt(h, 16)))
    .replace(/&#(\d+);/g, (_, d) => String.fromCodePoint(Number(d)))
    .replace(/&quot;/g, '"')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&amp;/g, '&');
const strip = (html) => html.replace(/<script[\s\S]*?<\/script>/gi, '').replace(/<style[\s\S]*?<\/style>/gi, '');
const text = (s) => decode(s.replace(/<[^>]*>/g, '')).replace(/\s+/g, ' ').trim();

function targetExists(path) {
  if (path.startsWith('/api/')) return true; // answered by the Worker, not by a file
  if (fileSet.has(path)) return true;
  if (path.endsWith('/') && fileSet.has(path + 'index.html')) return true;
  if (!path.endsWith('/') && !/\.[a-z0-9]+$/i.test(path)) {
    if (fileSet.has(path + '.html') || fileSet.has(path + '/index.html')) return true;
  }
  return isRedirected(path);
}

const errors = [];
const fail = (page, kind, msg) => errors.push({ page, kind, msg });

// ---- Per-page checks -------------------------------------------------------------------------
const titles = new Map();
const descriptions = new Map();

for (const [url, raw] of pages) {
  const html = strip(raw);

  // Meta
  const title = html.match(/<title>([\s\S]*?)<\/title>/i);
  const desc = html.match(/<meta\s+name="description"\s+content="([^"]*)"/i);
  if (!title || !text(title[1])) fail(url, 'meta', 'missing <title>');
  else titles.set(text(title[1]), [...(titles.get(text(title[1])) ?? []), url]);
  if (!desc || !decode(desc[1]).trim()) fail(url, 'meta', 'missing meta description');
  else descriptions.set(decode(desc[1]).trim(), [...(descriptions.get(decode(desc[1]).trim()) ?? []), url]);

  // Headings
  const headings = [...html.matchAll(/<h([1-6])[\s>][\s\S]*?<\/h\1>/gi)].map((m) => ({ level: Number(m[1]), label: text(m[0]).slice(0, 50) }));
  const h1s = headings.filter((h) => h.level === 1).length;
  if (h1s !== 1) fail(url, 'headings', `expected exactly one h1, found ${h1s}`);
  for (let i = 1; i < headings.length; i++) {
    if (headings[i].level > headings[i - 1].level + 1) {
      fail(url, 'headings', `h${headings[i - 1].level} jumps to h${headings[i].level} at "${headings[i].label}"`);
    }
  }

  // Links, images, styles and scripts
  const refs = [...html.matchAll(/<(a|link|img|script|source)\b[^>]*?\b(href|src)="([^"]*)"/gi)].map((m) => decode(m[3]));
  for (const ref of new Set(refs)) {
    if (!ref || /^(https?:|mailto:|tel:|data:|javascript:|\/\/)/i.test(ref)) continue;
    let target;
    try {
      target = new URL(ref, 'https://site.invalid' + url);
    } catch {
      fail(url, 'links', `unreadable link "${ref}"`);
      continue;
    }
    const path = decodeURI(target.pathname);
    if (!targetExists(path)) {
      fail(url, 'links', `broken link ${ref}`);
      continue;
    }
    const frag = decodeURI(target.hash.slice(1));
    if (frag) {
      const dest = path.endsWith('/') || !path.includes('.') ? (path.endsWith('/') ? path : path + '/') : path;
      const destHtml = pages.get(dest) ?? pages.get(path);
      if (destHtml && !new RegExp(`\\b(id|name)="${frag.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}"`).test(destHtml)) {
        fail(url, 'links', `#${frag} not found on ${dest} (from ${ref})`);
      }
    }
  }
}

for (const [t, urls] of titles) if (urls.length > 1) fail(urls.join(', '), 'meta', `${urls.length} pages share the title "${t}"`);
for (const [d, urls] of descriptions) {
  if (urls.length > 1) fail(urls.join(', '), 'meta', `${urls.length} pages share the meta description "${d.slice(0, 60)}..."`);
}

// ---- Report ----------------------------------------------------------------------------------
console.log(`Checked ${pages.size} pages for links, headings and meta tags.`);
if (errors.length === 0) {
  console.log('No problems found.');
  process.exit(0);
}
for (const kind of ['links', 'headings', 'meta']) {
  const list = errors.filter((e) => e.kind === kind);
  if (!list.length) continue;
  console.error(`\n${kind.toUpperCase()}: ${list.length} problem${list.length === 1 ? '' : 's'}`);
  for (const e of list) console.error(`  ${e.page}  ${e.msg}`);
}
console.error(`\n${errors.length} problem${errors.length === 1 ? '' : 's'} found.`);
process.exit(1);
