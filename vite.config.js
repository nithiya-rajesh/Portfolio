import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  // Must EXACTLY match your GitHub repo name so assets resolve on GitHub Pages.
  // package.json homepage points at ".../Cybersecurity-Portfolio", so:
  base: "/Cybersecurity-Portfolio/",
})
