import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://postcards-from-nyumbani.github.io',
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
  
  vite: {
    // THE NEW FIX: Force Vite to treat the Obsidian symlink as a native Astro folder
    resolve: {
      preserveSymlinks: true
    },
    server: {
      fs: {
        allow: [
          '/home/kobey/Documents/Obsidian Vault',
          '.'
        ]
      }
    }
  }
});