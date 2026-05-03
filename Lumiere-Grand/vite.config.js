import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

function imageCacheHeaders() {
  const imagePattern = /\.(avif|webp|png|jpe?g|gif|svg)$/i;

  const applyHeader = (req, res, next) => {
    if (req.url && imagePattern.test(req.url)) {
      res.setHeader("Cache-Control", "public, max-age=31536000, immutable");
    }
    next();
  };

  return {
    name: "image-cache-headers",
    configureServer(server) {
      server.middlewares.use(applyHeader);
    },
    configurePreviewServer(server) {
      server.middlewares.use(applyHeader);
    },
  };
}

export default defineConfig({
  plugins: [react(), imageCacheHeaders()],
  build: {
    assetsInlineLimit: 4096,
  },
});

