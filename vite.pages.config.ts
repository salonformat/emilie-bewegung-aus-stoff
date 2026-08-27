import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/emilie-bewegung-aus-stoff/',
  plugins: [react()],
  build: { outDir: 'pages-dist', emptyOutDir: true },
});
