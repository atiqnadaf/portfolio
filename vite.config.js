import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/portfolio/',

  plugins: [react()],

  build: {
    chunkSizeWarningLimit: 900,
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom'],
          motion: ['framer-motion'],
          scroll: ['lenis'],
          three: ['three', '@react-three/fiber'],
        },
      },
    },
  },

  server: {
    host: '127.0.0.1',
    port: 5173,
  },
});
