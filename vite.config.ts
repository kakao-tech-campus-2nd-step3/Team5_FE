import path from 'path';
import { defineConfig } from 'vite';

import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@/components': path.resolve(__dirname, 'src/components'),
      '@/pages': path.resolve(__dirname, 'src/pages'),
      '@/apis': path.resolve(__dirname, 'src/apis'),
      '@/hooks': path.resolve(__dirname, 'src/hooks'),
      '@/store': path.resolve(__dirname, 'src/store'),
      '@/utils': path.resolve(__dirname, 'src/utils'),
      '@/assets': path.resolve(__dirname, 'src/assets'),
      '@/constants': path.resolve(__dirname, 'src/constants'),
      '@/config': path.resolve(__dirname, 'src/config'),
      '@/styles': path.resolve(__dirname, 'src/styles'),
    },
  },
});
