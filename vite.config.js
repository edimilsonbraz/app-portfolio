import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "app-portfolio/",
  plugins: [react()],
  base: '/app-portfolio/',
})
