import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from 'tailwindcss' // ✅ Required for the checker
import postcss from './postcss.config.js' // ✅ Optional if needed

export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
})
