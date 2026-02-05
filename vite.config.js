import { defineConfig } from 'vite'
import injectHTML from 'vite-plugin-html-inject'
import fullReload from 'vite-plugin-full-reload'

export default defineConfig({
  root: 'src',
  publicDir: '../public',
  plugins: [
    injectHTML(),
    fullReload(['**/*.html'])
  ],
  build: {
    outDir: '../docs',
    emptyOutDir: true,
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          let extType = assetInfo.name.split('.').at(1);
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
            extType = 'img';
          }
          return `assets/${extType}/[name]-[hash][extname]`;
        }
      }
    }
  }
})
