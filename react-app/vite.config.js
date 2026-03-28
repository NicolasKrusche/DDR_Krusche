import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes('react') || id.includes('react-dom') || id.includes('react-router-dom')) {
            return 'vendor';
          }
        },
      },
    },
    chunkSizeWarningLimit: 500,
    cssMinify: true,
    minify: 'oxc',
    target: 'es2015',
  },
})
