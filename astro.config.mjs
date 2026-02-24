// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

const basePath = process.env.DEPLOY_TARGET === "gh-pages" ? "/website" : "/";

export default defineConfig({
  base: basePath,
  site: "https://epistola.app",
  vite: {
    plugins: [tailwindcss()],
  },
});
