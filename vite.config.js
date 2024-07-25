import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 10000,
    proxy: {
      '/api': {
        target:  'https://new-deployment-project.onrender.com', // Use your deployed backend URL
        changeOrigin: true,
        secure: true, // Set to true if your backend uses HTTPS
      }
    }
  }
})
