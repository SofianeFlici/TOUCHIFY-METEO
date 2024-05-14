import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

export default defineConfig({
  plugins: [svelte()],
  server: {
    fs: {
      // Allow serving files from one level up to the project root and specific node_modules
      allow: [
        '..',
        // Depending on your file structure, you might need to adjust this path.
        // This is an example to include specific paths from the error message.
        'C:/Users/zeakz/OneDrive/Bureau'
      ]
    }
  }
});
