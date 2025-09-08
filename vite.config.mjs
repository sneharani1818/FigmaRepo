import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
    plugins: [react()],
    base: "/FigmaRepo/",   // 🔥 replace with your GitHub repo name
})
