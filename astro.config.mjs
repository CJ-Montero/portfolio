// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

const LIVE_URL = 'https://CJ-Montero.github.io';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },
  site: 'https://CJ-Montero.github.io',
  base: '/',
});
