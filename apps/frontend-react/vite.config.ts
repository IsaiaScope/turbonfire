import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import mkcert from'vite-plugin-mkcert'

// NOTE https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths({ configNames: ["tsconfig.app.json"] }),
    TanStackRouterVite(),
    mkcert()
  ],
  server: {
    // open: true,
    proxy: {
      "/api": {
        target: "http://127.0.0.1:3000",
        changeOrigin: true,
      },
    },
  },
  build: {
    outDir: "../backend-hono/build-frontend",
  },
});
