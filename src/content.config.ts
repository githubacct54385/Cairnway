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
    // Drafts are shown with a visible banner until reviewed against their sources.
    draft: z.boolean().default(true),
    // Optional: what has been checked so far, shown in the draft banner instead of the generic text.
    // Say exactly what was checked and by whom (for example, an AI or a named reviewer).
    reviewStatus: z.string().optional(),
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
