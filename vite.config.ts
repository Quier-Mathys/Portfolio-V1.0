import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // Définit la base des chemins en relatif pour supporter les sous-dossiers (ex: GitHub Pages)
  build: {
    outDir: 'dist',
  },
  define: {
    // Permet d'éviter le crash "process is not defined" dans le navigateur si on utilise process.env
    'process.env': {}
  }
});