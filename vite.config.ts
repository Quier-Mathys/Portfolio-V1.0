import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/NOM_DU_REPO_GITHUB/', // très important pour GitHub Pages
  build: {
    outDir: 'dist',
  },
  define: {
    'process.env': {}
  }
});
