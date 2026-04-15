import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';

export default defineConfig({
  // The absolute domain
  site: 'https://postcards-from-nyumbani.github.io',
  
  // Notice we deleted the 'base' line completely!

  // Keep this to ensure GitHub reads your folders correctly
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