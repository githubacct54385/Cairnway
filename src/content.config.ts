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

// Crossroads: what churches officially teach. One entry per topic and church body.
// The schema is strict on purpose: an entry with no issuing body, source link, document date or rights status
// does not build. A position is published only when an official document backs it (see CHR-1).
const topics = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/crossroads/topics' }),
  schema: z.object({
    title: z.string(),
    order: z.number(),
    // The plain-language question a reader brings to this topic.
    question: z.string(),
    // Shown on the Crossroads home page; "live" topics have entries, "planned" ones are listed as coming.
    status: z.enum(['live', 'planned']).default('planned'),
    // Optional links to Ancient Paths eras (ids from the eras collection). Checked at build time.
    relatedEras: z.array(z.string()).default([]),
    // The narrower questions inside the topic, each with a fixed list of possible answers. Every church entry picks
    // one answer per question, or says the document does not address it. This is what the comparison view reads.
    questions: z
      .array(
        z.object({
          id: z.string(),
          label: z.string(), // the full question
          short: z.string(), // column heading
          answers: z
            .array(
              z.object({
                id: z.string(),
                short: z.string(), // the label inside a cell; keep to about three words
                full: z.string(), // one clear sentence, used in the grouped view
              }),
            )
            .min(1)
            .max(4),
        }),
      )
      .default([]),
  }),
});

const bodies = defineCollection({
  loader: glob({ pattern: '*.json', base: './src/content/crossroads/bodies' }),
  schema: z.object({
    name: z.string(), // the issuing body, for example "Lutheran Church-Missouri Synod"
    tradition: z.string(), // broad grouping used for browsing only, for example "Lutheran"
    order: z.number(),
    // What this body's documents are, and any limit on what they can show.
    note: z.string(),
  }),
});

const teachings = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/crossroads/teachings' }),
  schema: z.object({
    topic: z.string(), // id in topics
    body: z.string(), // id in bodies
    // Our own short summary, grounded in the document. Never presented as the church's wording.
    summary: z.string(),
    // What the document says on the narrower questions inside the topic. Each ties to a place in the document.
    points: z.array(z.object({ question: z.string(), answer: z.string(), at: z.string() })).default([]),
    // A short quotation, only where the text's rights are confirmed.
    excerpt: z.object({ text: z.string(), at: z.string() }).optional(),
    scripture: z.array(z.string()).default([]), // references the document itself cites
    scriptureNote: z.string().optional(),
    document: z.object({
      title: z.string(),
      section: z.string(),
      issuer: z.string(), // the specific body that issued or adopted it
      date: z.string(), // year or date the document was issued or adopted
      url: z.string().url(),
      edition: z.string(), // the edition or translation read, since wording and rights differ by edition
    }),
    rights: z.object({
      status: z.enum(['public-domain', 'summary-only', 'permission-recorded']),
      note: z.string(),
      checked: z.string(), // YYYY-MM-DD
    }),
    // What was and was not checked against the source. Honest and specific.
    review: z.object({ status: z.enum(['draft', 'ai-checked']), note: z.string() }),
    relatedEras: z.array(z.string()).default([]),
    // Only for churches that have several documents on one topic (the Orthodox churches have no single catechism).
    // Each document gets its own entry and row, named here, and tagged with how widely it speaks for the church.
    voice: z
      .object({
        label: z.string(), // for example "Longer Catechism (Russian Church)"
        tier: z.enum(['conciliar', 'synodical-confession', 'single-church-catechism', 'jurisdictional-statement']).optional(),
      })
      .optional(),
    // One position per question in the topic. "not-stated" means the document used does not address it; it is
    // never counted as disagreement. Set reading to true where choosing the answer is our interpretation of the
    // wording rather than the document's own statement, so the page can say so.
    positions: z
      .record(
        z.string(),
        z.object({
          answer: z.string(),
          at: z.string().optional(),
          reading: z.boolean().default(false),
        }),
      )
      .default({}),
  }),
});

export const collections = { eras, topics, bodies, teachings };
