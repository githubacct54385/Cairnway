import type { APIRoute } from 'astro';

// Built from the site address (SITE_URL, see astro.config.mjs) so the Sitemap line follows the site if it moves to a real domain.
export const GET: APIRoute = ({ site }) => {
  const sitemap = new URL('/sitemap-index.xml', site);
  const body = `# Crawling is allowed. The "prelaunch" flag in src/config.ts is off, so pages no longer carry a noindex tag.
User-agent: *
Allow: /
Disallow: /history/review/
Disallow: /review/
Disallow: /admin/

Sitemap: ${sitemap.href}
`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
