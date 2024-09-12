import { fileURLToPath, URL } from 'url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: '/web36vue/',
  resolve: {
    alias: {
      '#root': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
