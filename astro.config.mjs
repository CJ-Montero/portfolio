import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://cj-montero.github.io',
  base: 'cj-montero.github.io',
  vite: {
    plugins: [tailwindcss()]
  }
});
