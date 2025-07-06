import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

import netlify from '@astrojs/netlify';

export default defineConfig({
  site: 'https://cj-montero.github.io',
  base: 'cj-montero.github.io',

  vite: {
    plugins: [tailwindcss()]
  },

  adapter: netlify()
});