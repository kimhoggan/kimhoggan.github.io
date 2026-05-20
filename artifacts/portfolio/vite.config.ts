import { defineConfig } from "vite";
import path from "path";

const basePath = process.env.BASE_PATH ?? "/";
const rawPort = process.env.PORT;
const port = rawPort ? Number(rawPort) : 3000;

export default defineConfig({
  base: basePath,
  root: path.resolve(import.meta.dirname),
  publicDir: "public",
  build: {
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true,
  },
  server: {
    port,
    strictPort: true,
    host: "0.0.0.0",
    allowedHosts: true,
  },
  preview: {
    port,
    host: "0.0.0.0",
    allowedHosts: true,
  },
});
