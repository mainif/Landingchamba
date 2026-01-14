import { defineConfig } from 'vite'
import path from 'path'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/',
  plugins: [
    react(),
  ],
  resolve: {
    alias: {
      // Alias @ to the src directory
      '@': path.resolve(__dirname, './src'),
    },
  },
  define: {
    'global': 'globalThis',
  },
  css: {
    postcss: './postcss.config.mjs',
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
})
