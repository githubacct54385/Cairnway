# Launch checklist

Nothing here is done until it is ticked in the pull request that does it.

- [ ] Every era page is reviewed against its cited sources and no longer marked `draft`
- [ ] Every source, image and dataset is in `SOURCES.md` with its license and the date checked
- [ ] Sources and permissions page is complete and accurate
- [ ] Accessibility check: keyboard, screen reader, reduced motion, no-script view
- [ ] Performance check on a mid-range phone
- [x] Real domain connected (cairnway.org); `SITE_URL` set as a GitHub repository variable, and the production URL in
      `.github/workflows/deploy.yml` updated (see `docs/DEPLOY.md`)
- [x] Domain added to the Turnstile widget's hostnames
- [ ] Add `Strict-Transport-Security: max-age=31536000` to `public/_headers` once the real domain serves only HTTPS
- [ ] Staging address protected with Cloudflare Access, so it is not indexed once `prelaunch` is off
- [x] `prelaunch` set to `false` in `src/config.ts` (removes the noindex tag)
- [x] `robots.txt` allows crawling and points to the sitemap (built from `SITE_URL` in `src/pages/robots.txt.ts`)
- [ ] Footer link to GitHub issues points to this repository
- [ ] Sitemap submitted to Google and Bing search tools
- [ ] Analytics decision made (optional)
- [ ] Suggestion form for non-technical visitors connected
- [ ] Optional: legal review of the sources policy
