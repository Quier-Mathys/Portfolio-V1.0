import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/Portfolio-V1.0/', // 🚀 OBLIGATOIRE pour GitHub Pages
  build: {
    outDir: 'dist',
  },
  define: {
    'process.env': {}
  }
});
