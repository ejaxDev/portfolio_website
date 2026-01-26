import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/portfolio_website/',  // <-- Add this to fix asset paths
  plugins: [react()],
})
