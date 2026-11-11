import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  // GitHub Pages serves the site from https://<user>.github.io/currency-converter/
  base: command === 'build' ? '/currency-converter/' : '/',
  plugins: [
    react(),
    tailwindcss()
  ],
}))
