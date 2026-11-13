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
4. Open the staging address and check the change. Links to it: the **View deployment** button on the `Deploy` run's
   page, the **Deployments** list on the repository's home page (under "staging"), or the run's summary. In the
   Cloudflare dashboard, each uploaded version is listed under the Worker's **Deployments** tab with its own preview
   link, but the staging address itself is always the one above.
5. To publish it, open the `Deploy` run in the repository's Actions tab, click **Review deployments**, tick
   **production** and click **Approve and deploy**. GitHub also notifies the reviewer when a run is waiting. The exact
   version you checked on staging becomes the live site; nothing is rebuilt.

If several changes merge before you approve, GitHub queues their runs: the newest waits behind the oldest. Approving a
run whose commit is no longer the newest on `main` deploys nothing and reports "superseded"; then approve the newest
run, which shows what staging shows. To undo a release, open the Worker's **Deployments** tab in the Cloudflare
dashboard and roll back to an earlier version.

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

## Report form (both sections)

The Worker has one endpoint, `POST /api/report` (`worker/index.ts`). The forms at `/crossroads/report/` and
`/history/report/` (one shared component, `src/components/ReportForm.astro`) send reports there, and the Worker opens a
GitHub issue labelled `from-form` plus `crossroads` or `content`, depending on the section. What each section asks lives
in `src/lib/report.ts`. The reporter's email or GitHub
username is **not** put in the public issue: it is stored in the `REPORT_CONTACTS` KV namespace under `issue:<number>`.
Until the steps below are done the report page shows a link to the GitHub issue form instead.

One-time setup:

1. **Turnstile (spam check).** Cloudflare dashboard, Turnstile, add a widget for the site's hostnames (include the
   `workers.dev` addresses, and the real domain later). Paste the **site key** into `TURNSTILE_SITE_KEY` in
   `src/config.ts`. Set the secret key:

   ```sh
   npx wrangler secret put TURNSTILE_SECRET
   ```

2. **GitHub token.** Create a fine-grained personal access token for this repository only, with the single permission
   Issues: Read and write. Set it:

   ```sh
   npx wrangler secret put GITHUB_TOKEN
   ```

   Secrets set this way apply to the Worker for every version. Rotate the token before it expires.
3. **KV namespace.** Created automatically by the first deploy (`kv_namespaces` in `wrangler.jsonc`).

### Private reports page and email notification

Two more secrets make it easy to see who sent each report. Both are optional: without them the form still works.

- **`/admin/` (reports page).** Lists every report with its issue link, kind, page, environment and the reporter's contact.
  Set a long random passcode: `npx wrangler versions secret put ADMIN_PASSCODE`. Without it `/admin/` answers "Not found".
  Sign-in lasts 12 hours and is limited to 10 tries per 15 minutes per connection. This is a stop-gap: once the site has a
  domain, put `/admin/` behind Cloudflare Access (so invited reviewers can use it) and remove the passcode.
- **Email notification (Resend).** Each report emails you the issue link and the reporter's contact. If they gave an email,
  Reply-To is their address, so you can answer from your mail app. Create a free Resend account, create an API key, then set
  `npx wrangler versions secret put RESEND_API_KEY` and `npx wrangler versions secret put NOTIFY_EMAIL` (the address of your
  Resend account: until a domain is verified, Resend only delivers mail sent from `onboarding@resend.dev` to that address).
  Resend sees each reporter's contact, so mention it in the privacy note (the form already does). When the site has a
  domain, switch to Cloudflare's own email sending.

After setting secrets with `versions secret put`, start a new staging deploy (Actions, Deploy, Run workflow) so the newest
upload carries all of them.

Reading a reporter's contact (the issue number is on the GitHub issue):

```sh
npx wrangler kv key get --binding REPORT_CONTACTS "issue:123" --remote
```

Local testing: put `TURNSTILE_SECRET` and `GITHUB_TOKEN` in a `.dev.vars` file (ignored by git) and run
`npm run build && npx wrangler dev`. Cloudflare publishes Turnstile test keys that always pass: site key
`1x00000000000000000000AA`, secret `1x0000000000000000000000000000000AA`. A dummy GitHub token makes the final step
fail with "We could not save your report", which still proves the rest of the path.

Reports sent from a preview address (`staging-…` or a per-version `1a2b3c4d-…` address on `workers.dev`) get an extra `staging` label, a `[staging]` title prefix and an "Environment: staging" line. Create the label once (`gh label create staging`). The live address and any custom domain get no mark.

Limits: five reports per connection per hour, details up to 4,000 characters.

## The site address

The build uses `SITE_URL` for the sitemap and canonical links, and falls back to the workers.dev address. Once there is
a real domain, set it as a GitHub repository variable (not a secret):

```sh
gh variable set SITE_URL --body "https://example.org"
```

## Pre-launch

The site is marked "noindex" and `public/robots.txt` blocks crawlers. See `docs/LAUNCH-CHECKLIST.md` for what to change
at launch.
