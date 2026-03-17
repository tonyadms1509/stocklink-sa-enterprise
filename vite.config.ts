import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  // Load environment variables based on current mode
  const env = loadEnv(mode, process.cwd(), '');

  return {
    base: './',   // ✅ ensures relative paths for deployment
    plugins: [react()],
    build: {
      outDir: 'dist',
      emptyOutDir: true,
      sourcemap: true   // ✅ helpful for debugging in DevTools
    },
    server: {
      port: 3000,
      host: "127.0.0.1" // ✅ local dev server
    },
    preview: {
      port: 3000,
      host: "127.0.0.1" // ✅ preview server after build
    }
  };
});
