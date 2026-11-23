import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// The deploy workflow builds the site with SITE_URL (a GitHub repository variable) set to the real domain; this fallback is for local builds.
// "||" rather than "??" because an unset GitHub variable arrives as an empty string.
const site = process.env.SITE_URL || 'https://cairnway.org';

// Copies each column heading into a data-label attribute on the cells below it, so the
// CSS can show the heading beside each value when a table is stacked into cards on phones.
function textOf(node) {
  if (node.type === 'text') return node.value;
  return (node.children || []).map(textOf).join('');
}
function labelTableCells(node) {
  if (node.type === 'element' && node.tagName === 'table') {
    const headers = [];
    for (const child of node.children || []) {
      if (child.tagName === 'thead') {
        for (const row of child.children || []) {
          if (row.tagName === 'tr') {
            for (const th of row.children || []) {
              if (th.tagName === 'th') headers.push(textOf(th).trim());
            }
          }
        }
      }
    }
    for (const child of node.children || []) {
      if (child.tagName !== 'tbody') continue;
      for (const row of child.children || []) {
        if (row.tagName !== 'tr') continue;
        let column = 0;
        for (const cell of row.children || []) {
          if (cell.tagName === 'td') {
            cell.properties = { ...cell.properties, dataLabel: headers[column] || '' };
            column += 1;
          }
        }
      }
    }
  }
  for (const child of node.children || []) labelTableCells(child);
}
const rehypeLabelTableCells = () => (tree) => labelTableCells(tree);

export default defineConfig({
  site,
  // The reviewer-only page is kept out of the sitemap.
  integrations: [sitemap({ filter: (page) => !page.includes('/review/') })],
  build: { format: 'directory' },
  markdown: { rehypePlugins: [rehypeLabelTableCells] },
});
