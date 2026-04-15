import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';

export default defineConfig({
  // The absolute domain (dashes)
  site: 'https://postcards-from-nyumbani.github.io',
  
  // If building on GitHub, use the subfolder. If on your computer, use normal routing.
  base: process.env.GITHUB_ACTIONS ? '/postcards_from_nyumbani' : undefined,

  // THIS IS THE MISSING LINCHPIN: Forces GitHub to read folders correctly
  trailingSlash: 'always',

  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    mdx(),
  ],
  markdown: {
    shikiConfig: {
      theme: 'github-light',
    },
  },
});