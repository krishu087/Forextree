import { createServer } from "vite";
import { dirname, resolve } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

export function log(message, source = "express") {
  console.log(`${new Date().toLocaleTimeString()} [${source}] ${message}`);
}

export async function setupVite(app, server) {
  const vite = await createServer({
    server: { middlewareMode: true },
    appType: "custom",
    configFile: resolve(__dirname, "../vite.config.js"),
  });

  app.use(vite.middlewares);
}

export function serveStatic(app) {
  // Static files are already served by Vite in development.
  // This only matters in production.
  if (process.env.NODE_ENV === "production") {
    app.use(express.static(resolve(__dirname, "../public")));
  }
}