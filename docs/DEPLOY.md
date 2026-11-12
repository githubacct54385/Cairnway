# Deploying to Cloudflare

The site is plain static files, served by a Cloudflare Worker called `ancient-paths` (see `wrangler.jsonc`).

| Address | What it shows |
| --- | --- |
| https://ancient-paths.lifetrackerappweb.workers.dev/ | **Production**: the live site |
| https://staging-ancient-paths.lifetrackerappweb.workers.dev/ | **Staging**: the newest change merged to `main`, waiting for approval |

## How changes flow

1. A change is made on a branch and a pull request is opened. Open it as a **draft** if you want to read it before it
   merges.
2. GitHub Actions builds the site (`ci.yml`). If it passes and the pull request is not a draft, it is squash-merged
   automatically. Marking a draft "Ready for review" runs the build again and merges it.
3. The `Deploy` workflow (`deploy.yml`) builds `main` and uploads it to Cloudflare as a new version, tagged with its
   commit. That version appears at the **staging** address. It is not live yet.
4. Open the staging address and check the change.
5. To publish it, open the `Deploy` run in the repository's Actions tab, click **Review deployments**, tick
   **production** and click **Approve and deploy**. GitHub also notifies the reviewer when a run is waiting. The exact
   version you checked on staging becomes the live site; nothing is rebuilt.

If several changes merge before you approve, only the newest one waits; older waiting runs are cancelled. To undo a
release, open the Worker's **Deployments** tab in the Cloudflare dashboard and roll back to an earlier version.

## One-time setup

These steps need your own accounts, so they are done by hand.

1. **Stop Cloudflare's own Git deploys.** In the Cloudflare dashboard, open Workers & Pages, then the `ancient-paths`
   Worker, then Settings, then Builds, and disconnect the Git repository. Otherwise Cloudflare keeps deploying every
   merge straight to production and skips the approval step.
2. **Create an API token.** In the Cloudflare dashboard, go to My Profile, then API Tokens, then Create Token, and use
   the **Edit Cloudflare Workers** template. Limit it to your account.
3. **Find your account ID.** It is shown on the Workers & Pages overview page, in the right-hand column.
4. **Add both to GitHub as repository secrets**, from a terminal in this repository. Each command asks you to paste the
   value, so it never appears in your shell history:

   ```sh
   gh secret set CLOUDFLARE_API_TOKEN
   gh secret set CLOUDFLARE_ACCOUNT_ID
   ```

5. **Optional: keep staging private.** In the Worker's settings, turn on Cloudflare Access for preview URLs. Then only
   people you allow can open the staging address. Do this before launch: staging and production serve the same files,
   so once the site is public, staging is not marked "noindex".

The GitHub `production` environment, with its approval rule (reviewer: the repository owner; branch: `main` only), is
set up in the repository settings, under Settings, then Environments.

## The site address

The build uses `SITE_URL` for the sitemap and canonical links, and falls back to the workers.dev address. Once there is
a real domain, set it as a GitHub repository variable (not a secret):

```sh
gh variable set SITE_URL --body "https://example.org"
```

## Pre-launch

The site is marked "noindex" and `public/robots.txt` blocks crawlers. See `docs/LAUNCH-CHECKLIST.md` for what to change
at launch.
