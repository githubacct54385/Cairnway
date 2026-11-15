# Security policy

## Reporting a vulnerability

Please report security problems privately, not in a public issue.

Use GitHub's private reporting: open the repository's **Security** tab and choose **Report a vulnerability**
(<https://github.com/githubacct54385/Cairnway/security/advisories/new>). Include what you found, where, and how to
reproduce it. We will acknowledge a report as soon as we can and tell you when it is fixed.

This is a small volunteer project, so we cannot promise a fixed response time or offer a bounty.

## What is in scope

- The site's code and its Cloudflare Worker, including the "report a problem" form (`worker/`).
- The deploy pipeline (`.github/workflows/`).

## What is not a vulnerability

- Mistakes in the history or Crossroads content. Please use the site's "Report a problem" form or a normal issue for those.
- Findings that need a dependency's known, unfixed advisory with no way to reach it from this site.

## Reporter privacy

The "report a problem" form emails the reporter's contact to the maintainer and does not store it. See
[docs/DEPLOY.md](docs/DEPLOY.md) for how reports are handled.
