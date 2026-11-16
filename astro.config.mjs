import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Once the real domain exists, set SITE_URL as a GitHub repository variable (the deploy workflow builds the site).
// "||" rather than "??" because an unset GitHub variable arrives as an empty string.
const site = process.env.SITE_URL || 'https://cairnway.lifetrackerappweb.workers.dev';

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
