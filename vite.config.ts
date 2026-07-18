import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import type {} from 'vite-ssg'

import { projects } from './src/data/projects'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  ssgOptions: {
    // /path/index.html so static hosts serve clean URLs
    dirStyle: 'nested',
    beastiesOptions: {
      // Critical CSS is inlined; load the full stylesheets without blocking render
      preload: 'media'
    },
    includedRoutes(paths) {
      return [
        ...paths.filter((path) => !path.includes(':')),
        ...projects.map((project) => `/detail-portofolio/${project.id}`)
      ]
    }
  }
})
