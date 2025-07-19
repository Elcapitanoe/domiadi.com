import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  base: '/',
  site: 'https://elcapitanoe.github.io',
  integrations: [tailwind()],
  build: {
    inlineStylesheets: 'always'
  },
  compressHTML: true,
  vite: {
    build: {
      cssMinify: true,
      minify: true
    }
  }
});