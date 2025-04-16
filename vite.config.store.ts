
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// Store module configuration
export default defineConfig({
  build: {
    outDir: "dist/store",
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
  // Use the store entry point
  define: {
    'process.env.MODULE': JSON.stringify('store')
  },
  server: {
    host: "::",
    port: 8082,
  },
});
