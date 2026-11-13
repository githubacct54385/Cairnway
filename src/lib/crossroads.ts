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
