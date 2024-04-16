/// <reference types="vitest" />

import { defineConfig } from 'vite';
import analog from '@analogjs/platform';
import {extractRoutesToPrerender} from './vite-prerender.utils';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  publicDir: 'src/assets',
  build: {
    target: ['es2020'],
  },
  resolve: {
    mainFields: ['module'],
  },
  plugins: [analog(
    {
      static: true,
      prerender: {
        discover: true,
        routes: [
          '/',
          '/tutorials',
        ],
        sitemap: {
          host: 'https://dev.carlosarli.com/',
        },
      },
      nitro: {
        preset: 'netlify'
      }
    }
  )],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['src/test.ts'],
    include: ['**/*.spec.ts'],
    reporters: ['default'],
  },
  define: {
    'import.meta.vitest': mode !== 'production',
  },
}));
