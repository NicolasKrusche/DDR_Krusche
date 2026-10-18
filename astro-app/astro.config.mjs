import fs from 'node:fs';
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import netlify from '@astrojs/netlify';
import russianPages from './integrations/russian-pages.mjs';

const isProd = process.env.NODE_ENV === 'production';
const site = 'https://www.dr-krusche.at';

// Pages that are excluded from search engines (noindex) and therefore from the sitemap.
const noindexPaths = ['/impressum/', '/datenschutz/'];

// The Russian pages (/ru/...) are generated after the build, so the sitemap needs them as custom pages.
const slugs = fs
  .readdirSync(new URL('./src/pages', import.meta.url))
  .filter((f) => f.endsWith('.astro'))
  .map((f) => f.replace(/\.astro$/, ''));
const dePaths = slugs.map((s) => (s === 'index' ? '/' : `/${s}/`)).filter((p) => !noindexPaths.includes(p));
const ruPages = dePaths.map((p) => `${site}/ru${p}`);

export default defineConfig({
  site,
  // Avoid Netlify local config resolution during `astro dev`.
  adapter: isProd ? netlify() : undefined,
  integrations: [
    sitemap({
      changefreq: 'monthly',
      priority: 0.7,
      filter: (page) => !noindexPaths.some((p) => page === `${site}${p}`),
      customPages: ruPages,
      serialize(item) {
        const path = item.url.slice(site.length);
        const dePath = path.startsWith('/ru/') ? path.slice(3) : path;
        item.links = [
          { url: `${site}${dePath}`, lang: 'de' },
          { url: `${site}/ru${dePath}`, lang: 'ru' },
          { url: `${site}${dePath}`, lang: 'x-default' },
        ];
        return item;
      },
    }),
    russianPages({ site }),
  ],
});
