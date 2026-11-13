import { getCollection } from 'astro:content';
import { CROSSROADS } from '../config';

const REPO = 'https://github.com/githubacct54385/ancient-paths';

/**
 * A link that opens the "report a problem" form with the page already filled in.
 * This is the interim reporting route; CHR-1 plans a web form for people without a GitHub account.
 */
export function reportUrl(page: string, path: string, statement?: string) {
  const q = new URLSearchParams({
    template: 'crossroads-report.yml',
    title: `Crossroads: ${page}`,
    page: `${path}`,
  });
  if (statement) q.set('statement', statement);
  return `${REPO}/issues/new?${q.toString()}`;
}

export const TIERS = {
  conciliar: 'Council or creed',
  'synodical-confession': 'Confession endorsed by church synods',
  'single-church-catechism': 'One church\'s catechism',
  'jurisdictional-statement': 'Statement of one jurisdiction',
} as const;

/** The part of an entry's id after the topic, for example "orthodox-longer-catechism". Used as the page anchor. */
export const entrySlug = (entry: { id: string }) => entry.id.split('/').pop()!;

export const topicPath = (id: string) => `${CROSSROADS.base}/topics/${id}/`;
export const churchPath = (id: string) => `${CROSSROADS.base}/churches/${id}/`;

/** Loads everything Crossroads shows, and fails the build if an entry points at something that does not exist. */
export async function loadCrossroads() {
  const [topics, bodies, teachings, eras] = await Promise.all([
    getCollection('topics'),
    getCollection('bodies'),
    getCollection('teachings'),
    getCollection('eras'),
  ]);
  const topicIds = new Set(topics.map((t) => t.id));
  const bodyIds = new Set(bodies.map((b) => b.id));
  const eraIds = new Set(eras.map((e) => e.id));
  for (const t of teachings) {
    if (!topicIds.has(t.data.topic)) throw new Error(`Crossroads entry ${t.id}: unknown topic "${t.data.topic}"`);
    if (!bodyIds.has(t.data.body)) throw new Error(`Crossroads entry ${t.id}: unknown church body "${t.data.body}"`);
    for (const e of t.data.relatedEras) {
      if (!eraIds.has(e)) throw new Error(`Crossroads entry ${t.id}: unknown era "${e}"`);
    }
  }
  // Several documents from one church on one topic: each needs its own voice label, and each label must be unique.
  const seen = new Map<string, number>();
  for (const t of teachings) {
    const key = `${t.data.topic}/${t.data.body}`;
    seen.set(key, (seen.get(key) ?? 0) + 1);
  }
  for (const t of teachings) {
    if ((seen.get(`${t.data.topic}/${t.data.body}`) ?? 0) > 1 && !t.data.voice) {
      throw new Error(`Crossroads entry ${t.id}: this church has several entries on the topic, so each needs a "voice" naming its document`);
    }
  }
  // Comparison data: every entry in a topic with questions must answer every question with a known answer,
  // and must point to the passage unless it says "not-stated".
  for (const topic of topics) {
    if (topic.data.questions.length === 0) continue;
    for (const t of teachings.filter((x) => x.data.topic === topic.id)) {
      for (const q of topic.data.questions) {
        const pos = t.data.positions[q.id];
        if (!pos) throw new Error(`Crossroads entry ${t.id}: no position for question "${q.id}" (use "not-stated" if the document is silent)`);
        if (pos.answer === 'not-stated') continue;
        if (!q.answers.some((a) => a.id === pos.answer)) {
          throw new Error(`Crossroads entry ${t.id}: "${pos.answer}" is not an answer to question "${q.id}"`);
        }
        if (!pos.at) throw new Error(`Crossroads entry ${t.id}: question "${q.id}" needs an "at" pointing to the passage`);
      }
      for (const id of Object.keys(t.data.positions)) {
        if (!topic.data.questions.some((q) => q.id === id)) throw new Error(`Crossroads entry ${t.id}: unknown question "${id}"`);
      }
    }
  }
  for (const t of topics) {
    for (const e of t.data.relatedEras) {
      if (!eraIds.has(e)) throw new Error(`Crossroads topic ${t.id}: unknown era "${e}"`);
    }
  }
  return {
    topics: topics.sort((a, b) => a.data.order - b.data.order),
    bodies: bodies.sort((a, b) => a.data.order - b.data.order),
    teachings,
    eras,
  };
}
