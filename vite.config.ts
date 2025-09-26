import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: [], // Removed 'lucide-react' as it's not causing issues and 'maplibre-gl' is no longer used
  },
});