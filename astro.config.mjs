// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightThemeFlexoki from "starlight-theme-flexoki";
import starlightOpenAPI, { openAPISidebarGroups } from "starlight-openapi";
import starlightLinksValidator from "starlight-links-validator";
import tailwindcss from "@tailwindcss/vite";

const EPISTOLA_OPENAPI_SCHEMA_URL =
  "https://raw.githubusercontent.com/epistola-app/epistola-suite/refs/heads/main/modules/api-spec/src/main/resources/openapi/epistola-api.yaml";


// https://astro.build/config
export default defineConfig({
  base: import.meta.env.NODE_ENV === "development" ? "/" : "/website/",
  site: "https://epistola-app.github.io",
  integrations: [
    starlight({
      customCss: ["./src/styles/custom.css"],
      plugins: [
        starlightLinksValidator(),
        starlightThemeFlexoki(),
        starlightOpenAPI([
          {
            base: "docs/api",
            schema: EPISTOLA_OPENAPI_SCHEMA_URL,
          },
        ]),
      ],
      title: "Epistola Suite Documentation",
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/epistola-app/epistola-suite",
        },
      ],
      sidebar: [
        {
          label: "Getting Started",
          items: [
            { label: "Overview", slug: "docs" },
            { label: "Installation", slug: "docs/guides/installation" },
          ],
        },
        {
          label: "Guides",
          items: [
            { label: "Brand Guide", slug: "docs/guides/brandguide" },
            { label: "Editor", slug: "docs/guides/editor" },
            { label: "HTMX Integration", slug: "docs/guides/htmx" },
            { label: "Testing", slug: "docs/guides/testing" },
            { label: "GitHub Workflows", slug: "docs/guides/github" },
            { label: "SBOM", slug: "docs/guides/sbom" },
          ],
        },
        ...openAPISidebarGroups,
        {
          label: "Architecture",
          items: [
            { label: "System Overview", slug: "docs/architecture/overview" },
            { label: "Domain Models", slug: "docs/architecture/domain" },
            { label: "CQRS Pattern", slug: "docs/architecture/cqrs" },
          ],
        },
        {
          label: "Project",
          items: [{ label: "Roadmap", slug: "docs/guides/roadmap" }],
        },
      ],
    }),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});