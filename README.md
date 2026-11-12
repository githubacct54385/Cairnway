<p align="center">
  <img src="branding/logo-512.png" width="120" alt="Ancient Paths logo: a road leading to a cross">
</p>

# Ancient Paths

A scrolling, source-cited timeline of Christian history, one era at a time. The first release covers the first century
(the Apostolic Age). Every claim should trace to a source, and every source records its license.

> **Status:** early work in progress. Pages marked "Draft" have not yet been reviewed against their sources.

## How it is built

- [Astro](https://astro.build) with TypeScript, producing a fully static site
- [GSAP](https://gsap.com) with ScrollTrigger for the scroll animation (it respects reduced-motion settings)
- [Pagefind](https://pagefind.app) for search, built from the generated pages
- Content as Markdown files in `src/content/eras/`, validated by a schema in `src/content.config.ts`

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
src/pages/          home, era pages, search, sources and permissions
src/layouts/        shared page layout
src/scripts/        scroll animation
SOURCES.md          log of every source and its license
docs/               deployment and launch notes
```

## Contributing

Suggestions and corrections are welcome. See [CONTRIBUTING.md](CONTRIBUTING.md). Reviews happen as time permits.

## Licenses

- Code: [MIT](LICENSE)
- Original text: [CC BY 4.0](CONTENT-LICENSE.md)
- Third-party material keeps its own license, listed in [SOURCES.md](SOURCES.md)

This site summarizes published sources and is not itself a scholarly authority. It is made by a Christian, with the aim of presenting the evidence fairly; see the About page (`src/pages/about.astro`).
