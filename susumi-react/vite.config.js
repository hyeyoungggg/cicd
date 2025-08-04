import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import fs from 'fs'

// ✅ manifest.json 복사 플러그인
function copyManifestPlugin() {
  return {
    name: 'copy-manifest',
    closeBundle() {
      const basePath = 'C:/kd/ws_java/team1_v2sbm3c_devops/src/main/resources/static/notice'
      const src = path.resolve(basePath, '.vite/manifest.json')
      const dest = path.resolve(basePath, 'assets/manifest.json')

      try {
        fs.copyFileSync(src, dest)
        console.log('✔ manifest.json copied to assets/')
      } catch (err) {
        console.error('❌ Failed to copy manifest.json:', err)
      }
    }
  }
}

export default defineConfig({
  plugins: [react(), copyManifestPlugin()],
  server: {
    port: 3000,
    proxy: {
      '/api': {
        target: 'http://localhost:9093',
        changeOrigin: true
      }
    }
  },
  build: {
    outDir: path.resolve('C:/kd/ws_java/team1_v2sbm3c_devops/src/main/resources/static/notice'),
    emptyOutDir: true,
    manifest: true,
    manifestFileName: 'assets/manifest.json',
    rollupOptions: {
      input: './index.html',
      output: {
        entryFileNames: 'assets/index.js',
        chunkFileNames: 'assets/[name].js',
        assetFileNames: ({ name }) => {
          if (name && name.endsWith('.css')) {
            return 'assets/index.css'
          }
          return 'assets/[name].[ext]'
        }
      }
    }
  }
})
