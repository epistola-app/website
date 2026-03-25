// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

const basePath = process.env.DEPLOY_TARGET === "gh-pages" ? "/website" : "/";
const isProd = process.env.NODE_ENV === "production" || process.env.CI;
const siteUrl = isProd ? "https://epistola.app" : "http://localhost:4321";

export default defineConfig({
  base: basePath,
  site: siteUrl,
  i18n: {
    defaultLocale: "nl",
    locales: ["nl", "en"],
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: false,
    },
  },
  vite: {
    plugins: [
      tailwindcss({
        optimize: {
          minify: true,
        },
      }),
    ],
  },
});
