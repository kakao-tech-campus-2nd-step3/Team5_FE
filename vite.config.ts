import path from 'path';

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vitest/config';

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
      {
        find: '@/assets',
        replacement: path.resolve(__dirname, './src/assets'),
      },
      {
        find: '@/constants',
        replacement: path.resolve(__dirname, './src/constants'),
      },
      {
        find: '@/config',
        replacement: path.resolve(__dirname, './src/config'),
      },
      { find: '@/mocks', replacement: path.resolve(__dirname, './src/mocks') },
      {
        find: '@/styles',
        replacement: path.resolve(__dirname, './src/styles'),
      },
    ],
  },
  test: {
    globals: true,
    environment: 'jsdom',
    // this points to the setup file
    setupFiles: './src/setupTest.ts',
    // you might want to disable the `css: true` line, since we don't have
    // tests that rely on CSS -- and parsing CSS is slow.
    // I'm leaving it in here becasue often people want to parse CSS in tests.
    css: true,
  },
});
