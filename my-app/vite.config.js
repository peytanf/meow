import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/meow/', // 👈 necessary for GitHub Pages deployment
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
  },
});
