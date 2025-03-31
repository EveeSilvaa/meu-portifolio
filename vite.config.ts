import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  base: "./",
  server: {
    port: 3000, // Altere a porta se necessário
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, './src'),
    },
  },
});
