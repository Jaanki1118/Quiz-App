import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Quiz-App/',    // 👈 ADD THIS LINE
  plugins: [react()],
})
