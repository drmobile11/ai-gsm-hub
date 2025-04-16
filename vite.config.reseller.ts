
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// Reseller module configuration
export default defineConfig({
  build: {
    outDir: "dist/reseller",
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, "index.html"),
      },
    },
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // Define environment variables properly for Vite
  define: {
    'import.meta.env.MODULE': JSON.stringify('reseller')
  },
  server: {
    host: "::",
    port: 8083,
  },
});
