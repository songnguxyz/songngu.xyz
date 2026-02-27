import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    sourcemap: false,
    target: "esnext",
    minify: "esbuild",
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            if (id.includes("react")) return "vendor-react";
            if (id.includes("@icons-pack")) return "vendor-icons";
            return "vendor";
          }
        },
      },
    },
    chunkSizeWarningLimit: 1000,
  },
  esbuild: {
    drop: ["console", "debugger"],
  },
});
