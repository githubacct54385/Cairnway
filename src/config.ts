export const SITE = {
  title: 'Ancient Paths',
  description:
    'A scrolling, source-cited timeline of Christian history, one era at a time. Starting with the first century.',
  /**
   * While true, every page is marked "noindex" so search engines do not list unfinished work.
   * Flip to false at launch, and also update public/robots.txt (see docs/LAUNCH-CHECKLIST.md).
   */
  prelaunch: true,
};

/**
 * The umbrella site that holds both sections. The name is provisional until the domain is registered
 * (see CHR-1); change it here only. Ancient Paths (SITE above) is the history section, served under /history.
 */
export const UMBRELLA = {
  name: 'Cairnway',
  description: 'Christian history and what the churches teach, each traced to its sources.',
};

/** The beliefs section: what churches officially teach. Change `base` here to change the route. */
export const CROSSROADS = {
  name: 'Crossroads',
  base: '/crossroads',
  description: 'What the churches themselves teach on the questions Christians ask, with the documents behind each answer.',
};

/**
 * Cloudflare Turnstile (the spam check on the report form). The site key is public. Create a widget in the
 * Cloudflare dashboard (Turnstile), paste its site key here, and set the secret with `wrangler secret put TURNSTILE_SECRET`.
 * While this is empty the report page shows the GitHub form instead. See docs/DEPLOY.md.
 */
export const TURNSTILE_SITE_KEY = '';
