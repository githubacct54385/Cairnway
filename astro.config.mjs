import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Once the real domain exists, set SITE_URL as a GitHub repository variable (the deploy workflow builds the site).
// "||" rather than "??" because an unset GitHub variable arrives as an empty string.
const site = process.env.SITE_URL || 'https://cairnway.lifetrackerappweb.workers.dev';

export default defineConfig({
  site,
  // The reviewer-only page is kept out of the sitemap.
  integrations: [sitemap({ filter: (page) => !page.includes('/review/') })],
  build: { format: 'directory' },
});
