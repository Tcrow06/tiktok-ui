import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    tailwindcss(),
  ],

  server: {
    port: 3030
  },
  preview: {
    port: 8080
  },
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "src"), 
    },
  },
  
})

