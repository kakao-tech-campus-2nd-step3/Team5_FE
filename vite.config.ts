import path from 'path';
import { defineConfig } from 'vite';

import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, './src') },
      {
        find: '@/components',
        replacement: path.resolve(__dirname, './src/components'),
      },
      { find: '@/pages', replacement: path.resolve(__dirname, './src/pages') },
      { find: '@/apis', replacement: path.resolve(__dirname, './src/apis') },
      { find: '@/hooks', replacement: path.resolve(__dirname, './src/hooks') },
      { find: '@/store', replacement: path.resolve(__dirname, './src/store') },
      { find: '@/utils', replacement: path.resolve(__dirname, './src/utils') },
      { find: '@/assets', replacement: path.resolve(__dirname, './src/assets') },
      {
        find: '@/constants',
        replacement: path.resolve(__dirname, './src/constants'),
      },
      { find: '@/config', replacement: path.resolve(__dirname, './src/config') },
      { find: '@/mocks', replacement: path.resolve(__dirname, './src/mocks') },
      { find: '@/styles', replacement: path.resolve(__dirname, './src/styles') },
    ],
  },
});
