<p align="center">
  <img src="branding/logo-512.png" width="120" alt="Ancient Paths logo: a road leading to a cross">
</p>

# Cairnway

**Cairnway is a website for learning Christian history and what the churches teach, with every claim traced to a
source.** It is for anyone who wants to understand where the faith came from, whatever they believe, and to check the
evidence for themselves.

The site has two sections:

- **Ancient Paths (`/history`)**: a scrolling timeline of Christian history, one era at a time, starting with the first
  century (the Apostolic Age). Each era lists its people, events and sources, and each claim has a citation. Where
  historians disagree, the page names the views and who holds them.
- **Crossroads (`/crossroads`)**: an early preview. It answers questions such as baptism by showing what each church
  says in its own catechism or confession, with the document and the scripture it cites. Crossroads reports what
  churches officially teach today; the history section traces what happened.

The site also has a search page, a page listing every source and its license, and a form for reporting corrections.

> **Status:** early work in progress, and the site is not yet public (`prelaunch: true` in `src/config.ts`). Pages marked
> "Draft" have not yet been reviewed against their sources. Pages are first drafted with the help of an AI and then
> checked against their sources; each era's banner says what has been checked so far.

## Who it is for

- Readers who want a clear, sourced overview of Christian history and doctrine.
- Students and teachers who need the primary sources and their licenses in one place.
- Anyone who spots an error or a missing source and wants to suggest a correction. See [CONTRIBUTING.md](CONTRIBUTING.md).

## What it is not

- It is not a scholarly authority. It summarizes published sources and points to them.
- It does not present one church's teaching as the whole story. Each section attributes views to the people or traditions
  that hold them.

## How it is built

- [Astro](https://astro.build) with TypeScript, producing a fully static site
- [GSAP](https://gsap.com) with ScrollTrigger for the scroll animation (it respects reduced-motion settings)
- [Pagefind](https://pagefind.app) for search, built from the generated pages
- Content as Markdown files in `src/content/eras/`, validated by a schema in `src/content.config.ts`
- A [Cloudflare Worker](https://developers.cloudflare.com/workers/) in `worker/` for the report form and admin tasks,
  protected by Cloudflare Turnstile

## Run it locally

You need Node.js 22 or newer.

```sh
npm install
npm run dev        # development server (search is not available here)
npm run build      # production build plus the search index, in ./dist
npm run preview    # serve the production build locally
```

## Project layout

```
src/content/eras/   one Markdown file per era (frontmatter holds people, events and sources)
src/pages/          home, history and crossroads pages, search, sources and permissions
src/layouts/        shared page layout
src/scripts/        scroll animation
src/config.ts       site names, descriptions and the prelaunch flag
worker/             Cloudflare Worker: report form and admin
scripts/cite.py     prints a cited passage from downloaded source texts, for checking citations
SOURCES.md          log of every source and its license
docs/               deployment, launch and review notes
```

## Contributing

Suggestions and corrections are welcome. See [CONTRIBUTING.md](CONTRIBUTING.md). Reviews happen as time permits.

## Licenses

- Code: [MIT](LICENSE)
- Original text: [CC BY 4.0](CONTENT-LICENSE.md)
- Third-party material keeps its own license, listed in [SOURCES.md](SOURCES.md)

This site summarizes published sources and is not itself a scholarly authority. It is made by a Christian, with the aim of
presenting the evidence fairly; see the About page (`src/pages/about.astro`).
