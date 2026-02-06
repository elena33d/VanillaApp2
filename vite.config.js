import { defineConfig } from 'vite'
import injectHTML from 'vite-plugin-html-inject'
import fullReload from 'vite-plugin-full-reload'

export default defineConfig({
  root: 'src',
  plugins: [
    injectHTML(),
    fullReload(['**/*.html'])
  ],
  build: {
    outDir: '../dist',
    emptyOutDir: true,
  }
})
