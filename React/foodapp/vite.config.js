import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api/edamam": {
        target: "https://api.edamam.com",
        changeOrigin: true,
        rewrite: (path) =>
          path.replace(/^\/api\/edamam/, "/api/food-database/v2/parser"),
      },
    },
  },
});
