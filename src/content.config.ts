import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Every claim on an era page should trace to a source. Each source records its license
// and the date the license was last checked (see SOURCES.md).
const source = z.object({
  title: z.string(),
  author: z.string().optional(),
  url: z.string().url().optional(),
  license: z.string(),
  checked: z.string(), // YYYY-MM-DD, or "not yet checked"
  usedFor: z.string(),
});

const eras = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/eras' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    dateRange: z.string(),
    order: z.number(),
    // Years for the homepage timeline. Bar widths are proportional to the length of each era.
    startYear: z.number(),
    endYear: z.number(),
    // Drafts are shown with a visible banner until reviewed against their sources.
    draft: z.boolean().default(true),
    // Optional: what has been checked so far, shown in the draft banner instead of the generic text.
    // Say exactly what was checked and by whom (for example, an AI or a named reviewer).
    reviewStatus: z.string().optional(),
    // Optional: the path to this era's review ledger in docs/, for example docs/REVIEW-apostolic-age.md.
    // The draft banner links to it; an era without one links to the docs folder.
    reviewLedger: z.string().optional(),
    // Optional: set once an AI model has checked every claim on the page against its sources (see the era's
    // review ledger). The banner then says what has happened: sources checked by that model in that month,
    // and no specialist review yet. Change the month whenever the page changes after the review.
    aiReview: z.object({ model: z.string(), month: z.string() }).optional(),
    // Optional maps, by id in src/data/maps.json. An era without them shows no map section.
    overviewMap: z.string().optional(),
    mapSection: z
      .object({ heading: z.string(), intro: z.string(), ids: z.array(z.string()).min(1) })
      .optional(),
    // Open review flags, shown on the homepage. Keep to the highest-risk items from the era's review ledger.
    flags: z
      .array(z.object({ text: z.string(), severity: z.enum(['high', 'medium', 'note']) }))
      .default([]),
    // Optional images from the period, shown on the page. Each needs a licence recorded in docs/IMAGES.md.
    figures: z
      .array(z.object({ image: z.string(), alt: z.string(), caption: z.string(), credit: z.string(), licence: z.string() }))
      .default([]),
    keyPeople: z
      .array(z.object({ name: z.string(), role: z.string(), summary: z.string(), source: z.string() }))
      .default([]),
    events: z
      .array(z.object({ date: z.string(), title: z.string(), summary: z.string(), source: z.string() }))
      .default([]),
    sources: z.array(source).default([]),
  }),
});

export const collections = { eras };
