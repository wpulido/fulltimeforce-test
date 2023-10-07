import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // we add a proxy to make sure every request we throw to "/api", targets to our backend route, to make sure the requests we work in the backend can be easily sent to the frontend.
  server: {
    proxy: {
      '/api/commits': {
        target: 'http://localhost:3000',
        changeOrigin: true,
      }
    }
  }
})
