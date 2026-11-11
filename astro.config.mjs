import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Set SITE_URL in the hosting environment once the real domain exists.
const site = process.env.SITE_URL ?? 'https://ancient-paths.lifetrackerappweb.workers.dev';

export default defineConfig({
  site,
  integrations: [sitemap()],
  build: { format: 'directory' },
});
