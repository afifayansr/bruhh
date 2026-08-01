import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    host: "0.0.0.0",
    port: 3002,
    strictPort: true,
    allowedHosts: [
      "afifayan.fun",
      "www.afifayan.fun",
      "api.afifayan.fun",
      "admin.afifayan.fun",
      "dev.afifayan.fun",
      "app.afifayan.fun",
      "cdn.afifayan.fun",
      "mail.afifayan.fun",
      "shop.afifayan.fun",
      "panel.afifayan.fun",
      "localhost",
      "127.0.0.1",
    ],
  },
  preview: {
    host: "0.0.0.0",
    port: 3002,
    strictPort: true,
    allowedHosts: [
      "afifayan.fun",
      "www.afifayan.fun",
      "api.afifayan.fun",
      "admin.afifayan.fun",
      "dev.afifayan.fun",
      "app.afifayan.fun",
      "cdn.afifayan.fun",
      "mail.afifayan.fun",
      "shop.afifayan.fun",
      "panel.afifayan.fun",
      "localhost",
      "127.0.0.1",
    ],
  },
  build: {
    outDir: "dist",
    sourcemap: false,
    chunkSizeWarningLimit: 550,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"],
          motion: ["framer-motion"],
          icons: ["lucide-react", "react-icons"],
          three: ["three"],
        },
      },
    },
  },
});
