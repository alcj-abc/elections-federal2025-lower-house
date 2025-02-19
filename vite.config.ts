import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import path from 'path';
import url from 'url';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

export default defineConfig({
  plugins: [
    svelte({
      compilerOptions: {
        customElement: true
      }
    })
  ],
  build: {
    emptyOutDir: true,
    outDir: path.resolve(__dirname, './dist-wc'),
    lib: {
      entry: path.resolve(__dirname, './src/webcomponent/main.ts'),
      name: 'HexMap',
      formats: ['es']
    }
  }
});
