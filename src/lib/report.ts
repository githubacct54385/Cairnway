// What each section's report form asks and how its reports are filed. Shared by the form pages
// (src/components/ReportForm.astro) and the Worker (worker/index.ts), so the allowed values cannot drift apart.
import { CROSSROADS } from '../config';

export type Section = 'crossroads' | 'history';

export const REPO_URL = 'https://github.com/githubacct54385/ancient-paths';

export const REPORT_SECTIONS: Record<
  Section,
  {
    base: string;
    /** Section name used in issue titles and the page text. */
    name: string;
    label: string;
    kinds: string[];
    intro: string;
    aboutPrompt: string;
    /** Whether the form offers the optional "source for your suggestion" box. */
    asksSource: boolean;
    githubTemplate: string;
    githubAboutField: string;
  }
> = {
  crossroads: {
    base: CROSSROADS.base,
    name: 'Crossroads',
    label: 'crossroads',
    kinds: [
      'The summary misrepresents the document',
      'A broken or wrong source link',
      'A factual error (date, body, citation)',
      'A rights or copyright concern',
      'Something else',
    ],
    intro:
      "Tell us when a Crossroads entry misrepresents a church's document, cites the wrong source, or has a factual error.",
    aboutPrompt: 'About',
    asksSource: false,
    githubTemplate: 'crossroads-report.yml',
    githubAboutField: 'statement',
  },
  history: {
    base: '/history',
    name: 'Ancient Paths',
    label: 'content',
    kinds: [
      'A factual error (date, name, event)',
      'A missing or better source',
      'A broken source link',
      'An image or map rights concern',
      'Something else',
    ],
    intro:
      'Tell us when an Ancient Paths era gets something wrong, leaves something out, or uses a source or image it should not.',
    aboutPrompt: 'About',
    asksSource: true,
    githubTemplate: 'content-correction.yml',
    githubAboutField: 'era',
  },
};

/** The on-site report form for a section, with the page and what it is about already filled in. */
export function reportFormUrl(section: Section, about: string, path: string) {
  const q = new URLSearchParams({ page: path, about });
  return `${REPORT_SECTIONS[section].base}/report/?${q.toString()}`;
}

/** The GitHub issue form for a section, kept as a "prefer GitHub?" option under the on-site form. */
export function githubReportUrl(section: Section, about: string, path: string) {
  const s = REPORT_SECTIONS[section];
  const q = new URLSearchParams({ template: s.githubTemplate, title: `${s.name}: ${about}`.trim() });
  if (section === 'crossroads') q.set('page', path);
  if (about) q.set(s.githubAboutField, about);
  return `${REPO_URL}/issues/new?${q.toString()}`;
}
