// Runs after the build (see "build" in package.json). Finds every inline <script> in dist/, hashes its contents, and
// writes dist/_headers from public/_headers with the hashes filled in, so the Content-Security-Policy allows exactly the
// inline scripts the site ships and nothing injected later. Fails the build if an inline event handler (onclick="...")
// is found, because the policy would block it.
import { createHash } from 'node:crypto';
import { readFileSync, writeFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const dist = 'dist';
const walk = (dir) =>
  readdirSync(dir).flatMap((name) => {
    const p = join(dir, name);
    return statSync(p).isDirectory() ? walk(p) : [p];
  });

const hashes = new Set();
const problems = [];
for (const file of walk(dist).filter((f) => f.endsWith('.html'))) {
  const html = readFileSync(file, 'utf8');
  for (const m of html.matchAll(/<script([^>]*)>([\s\S]*?)<\/script>/g)) {
    const [, attrs, body] = m;
    if (/\bsrc=/.test(attrs) || body === '') continue;
    if (/type="application\/(ld\+)?json"/.test(attrs)) continue; // data blocks are not executed
    hashes.add(`'sha256-${createHash('sha256').update(body).digest('base64')}'`);
  }
  if (/<[a-z][^>]*\son[a-z]+=["']/i.test(html.replace(/<script[\s\S]*?<\/script>/g, ''))) problems.push(file);
}
if (problems.length) {
  console.error(`Inline event handlers are blocked by the CSP. Use addEventListener instead:\n${problems.join('\n')}`);
  process.exit(1);
}

const template = readFileSync('public/_headers', 'utf8');
writeFileSync(join(dist, '_headers'), template.replaceAll('{{SCRIPT_HASHES}}', [...hashes].sort().join(' ')));
console.log(`Wrote dist/_headers with ${hashes.size} inline script hash(es).`);
