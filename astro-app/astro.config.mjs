import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import netlify from '@astrojs/netlify';

const isProd = process.env.NODE_ENV === 'production';

export default defineConfig({
  site: 'https://www.dr-krusche.at',
  // Avoid Netlify local config resolution during `astro dev`.
  adapter: isProd ? netlify() : undefined,
  integrations: [
    sitemap({
      changefreq: 'monthly',
      priority: 0.7,
    }),
  ],
});
