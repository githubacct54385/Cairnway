# Deploying to Cloudflare Pages

The site is static. Cloudflare Pages builds it from the `main` branch every time a pull request merges.

## One-time setup (in the Cloudflare dashboard)

1. Workers & Pages, then Create, then Pages, then Connect to Git. Choose this repository.
2. Build settings:
   - Framework preset: Astro
   - Build command: `npm run build`
   - Build output directory: `dist`
3. Environment variable: `NODE_VERSION` = `22`
4. Production branch: `main`. Preview deployments for other branches and pull requests are on by default.
5. Optional: set `SITE_URL` to the real address once there is a domain, so the sitemap and canonical links are right.

## How changes flow

1. A change is made on a branch and a pull request is opened.
2. GitHub Actions builds the site. If it passes, the pull request is squash-merged automatically.
3. Cloudflare builds `main` and publishes it. A broken build there does not take the previous version down.

## Pre-launch

The site is marked "noindex" and `public/robots.txt` blocks crawlers. See `docs/LAUNCH-CHECKLIST.md` for what to change
at launch.
