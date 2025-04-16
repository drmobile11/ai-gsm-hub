
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// Admin module configuration
export default defineConfig({
  build: {
    outDir: "dist/admin",
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
  // Use the admin entry point
  define: {
    'process.env.MODULE': JSON.stringify('admin')
  },
  server: {
    host: "::",
    port: 8081,
  },
});
