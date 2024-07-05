import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    fs: {
      allow: [
        // Allow serving font files from @fontsource directories
        '../node_modules/@fontsource/',
        '../node_modules/@fontsource/**',
        // Allow serving files from your project's root directory and its subdirectories
        './src/',
        './src/**',
      ],
    },
  },
});
