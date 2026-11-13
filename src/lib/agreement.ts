import type { CollectionEntry } from 'astro:content';

/**
 * How often two churches give the same answer, across every Crossroads question.
 *
 * A question counts for a pair only if both churches' documents answer it ("not-stated" is skipped, never counted as
 * disagreement). Where a church has several documents on a topic (the Orthodox churches), it counts as the same answer
 * if any of its documents gives the answer the other church gives.
 */
export interface Person {
  id: string;
  name: string;
  short: string;
}

export interface Pair {
  same: number;
  shared: number;
}

export interface Node {
  members: number[];
  /** Average disagreement inside the group, 0 (always agree) to 1 (never agree). Leaves are 0. */
  h: number;
  leaf?: number;
  left?: Node;
  right?: Node;
}

export function buildAgreement(
  bodies: CollectionEntry<'bodies'>[],
  topics: CollectionEntry<'topics'>[],
  teachings: CollectionEntry<'teachings'>[],
) {
  const people: Person[] = bodies.map((b) => ({ id: b.id, name: b.data.name, short: b.data.short ?? b.data.name }));
  const n = people.length;
  const pairs: Pair[][] = people.map(() => people.map(() => ({ same: 0, shared: 0 })));
  let questionCount = 0;
  let topicCount = 0;

  for (const topic of topics) {
    const questions = topic.data.questions;
    const entries = teachings.filter((t) => t.data.topic === topic.id);
    if (questions.length === 0 || entries.length === 0) continue;
    topicCount += 1;
    questionCount += questions.length;
    for (const q of questions) {
      // Each church's stated answers to this question, one per document.
      const answers = people.map((p) =>
        entries
          .filter((e) => e.data.body === p.id)
          .map((e) => e.data.positions[q.id]?.answer)
          .filter((a): a is string => !!a && a !== 'not-stated'),
      );
      for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
          if (answers[i].length === 0 || answers[j].length === 0) continue;
          const agree = answers[i].some((a) => answers[j].includes(a));
          for (const [a, b] of [[i, j], [j, i]]) {
            pairs[a][b].shared += 1;
            if (agree) pairs[a][b].same += 1;
          }
        }
      }
    }
  }

  // Pairs with nothing in common to compare count as far apart when grouping, but are shown as "no shared questions".
  const dist = (i: number, j: number) => (i === j ? 0 : pairs[i][j].shared ? 1 - pairs[i][j].same / pairs[i][j].shared : 1);

  // Average-linkage grouping: repeatedly join the two closest groups.
  let groups: Node[] = people.map((_, i) => ({ members: [i], h: 0, leaf: i }));
  while (groups.length > 1) {
    let best = { a: 0, b: 1, d: Infinity };
    for (let a = 0; a < groups.length; a++) {
      for (let b = a + 1; b < groups.length; b++) {
        let sum = 0;
        let count = 0;
        for (const x of groups[a].members) for (const y of groups[b].members) (sum += dist(x, y)), count++;
        if (sum / count < best.d) best = { a, b, d: sum / count };
      }
    }
    const left = groups[best.a];
    const right = groups[best.b];
    groups = groups.filter((_, k) => k !== best.a && k !== best.b);
    groups.push({ members: [...left.members, ...right.members], h: best.d, left, right });
  }
  const root = groups[0];
  const order: number[] = [];
  (function walk(t: Node) {
    if (t.leaf !== undefined) order.push(t.leaf);
    else (walk(t.left!), walk(t.right!));
  })(root);

  return { people, pairs, root, order, questionCount, topicCount };
}
