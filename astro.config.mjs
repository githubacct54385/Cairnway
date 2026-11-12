import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Once the real domain exists, set SITE_URL as a GitHub repository variable (the deploy workflow builds the site).
// "||" rather than "??" because an unset GitHub variable arrives as an empty string.
const site = process.env.SITE_URL || 'https://ancient-paths.lifetrackerappweb.workers.dev';

export default defineConfig({
  site,
  integrations: [sitemap()],
  build: { format: 'directory' },
});
