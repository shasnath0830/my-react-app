import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/my-react-app/', // Adjust this if your repository name is different
  plugins: [react()],
  build: {
    outDir: 'build',
  },
})
