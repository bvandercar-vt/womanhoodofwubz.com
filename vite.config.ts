import react from '@vitejs/plugin-react'
import { defineConfig, loadEnv } from 'vite'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
    base: '/',
    define: {
      'process.env': JSON.stringify(env),
    },
    plugins: [react()],
    build: {
      target: 'esnext',
      modulePreload: false,
    },
  }
})
