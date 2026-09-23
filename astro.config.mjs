// @ts-check
import { defineConfig } from 'astro/config';

import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

export default defineConfig({
  integrations: [
    mdx(),
    sitemap(),
  ],
  site: 'https://diegoriveraestefano.github.io',
  base: '/personal-blog',
});
