import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/

export default defineConfig({
  plugins: [react()],
  envDir: './src/config/environments',
  server: {
    port: 2222,
    open: true,
  },
  resolve: {
    alias: {
      '@': '/src',
    },
  },
});
