import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  publicDir: 'public',
  base: '/',
  build: {
    outDir: 'dist', // Matches Vercel’s Output Directory
    assetsDir: 'assets', // Where Vite places assets in dist (optional, defaults to 'assets')
    emptyOutDir: true, // Ensures dist is cleaned before each build to prevent stale files
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
