import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Custom domain (gjbuilders.co.uk) is the primary host.
export default defineConfig({
  base: '/',
  plugins: [react()],
})
