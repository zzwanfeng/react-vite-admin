import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

const HOST = "0.0.0.0"

// https://vitejs.dev/config/
export default defineConfig({
  root: process.cwd(),
  base: './',
  mode: 'development',
  define: {
    'process.env': process.env,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '~': path.resolve(__dirname, "./node_modules"),
    },
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue']
  },
  server: {
    host: HOST,
    port: 9527,
    // port: process.env.PORT,
    strictPort: false,
    open: false,
    https: false,
    cors: true,
    proxy: {
      '/api': {
        //#gitignoreline_start
        target: 'xxx',
        //#gitignoreline_end
        changeOrigin: true,
        ws: true,
      },
    },
  },
  plugins: [react()],
  build: {
    outDir: 'dist',
    assetsDir: 'static',
    minify: 'terser',
    rollupOptions: {
      output: {
        manualChunks (id) {
          if (id.includes('node_modules')) {
            return id.toString().split('node_modules/')[1].split('/')[0].toString()
          }
        }
      }
    },
    terserOptions: {
      compress: {
        drop_console: process.env.VITE_APP_NAME !== 'development',
        drop_debugger: process.env.VITE_APP_NAME !== 'development'
      },
    },
    chunkSizeWarningLimit: 1000,
    reportCompressedSize: false
  },
})
