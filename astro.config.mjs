// @ts-check
import { defineConfig } from 'astro/config';

import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

import tailwindcss from '@tailwindcss/vite';

import cloudflare from '@astrojs/cloudflare';

import partytown from '@astrojs/partytown';

// https://astro.build/config
export default defineConfig({
  integrations: [
    mdx(),
    sitemap(),
    partytown({
      config: {
        forward: [["dataLayer.push"], ["quicklink", { preserveBehavior: true }]],
      },
    }),
  ],
  site: "https://techblog.diego.dev",

  vite: {
    plugins: [tailwindcss()],
  },

  adapter: cloudflare(),
});