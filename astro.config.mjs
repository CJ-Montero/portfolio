// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';


export default defineConfig({
  build: {
    assetsPrefix: './',
  },
  vite: {
    plugins: [tailwindcss()],
  },
  base: '/',
  site: 'https://cj-montero.github.io',
  trailingSlash: 'never', // opcional
});
