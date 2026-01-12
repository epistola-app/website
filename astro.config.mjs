// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightThemeFlexoki from "starlight-theme-flexoki";
import starlightOpenAPI, { openAPISidebarGroups } from "starlight-openapi";

const EPISTOLA_OPENAPI_SCHEMA_URL =
  "https://raw.githubusercontent.com/epistola-app/epistola-suite/refs/heads/main/modules/api-spec/src/main/resources/openapi/epistola-api.yaml";


// https://astro.build/config
export default defineConfig({
  base: import.meta.env.NODE_ENV === "production" ? "/website/" : "/",
  integrations: [
    starlight({
      customCss: ["./src/styles/custom.css"],
      plugins: [
        starlightThemeFlexoki(),
        starlightOpenAPI([
          {
            base: "api",
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
            { label: "Overview", slug: "index" },
            { label: "Installation", slug: "guides/installation" },
          ],
        },
        {
          label: "Guides",
          items: [
            { label: "Brand Guide", slug: "guides/brandguide" },
            { label: "Editor", slug: "guides/editor" },
            { label: "HTMX Integration", slug: "guides/htmx" },
            { label: "Testing", slug: "guides/testing" },
            { label: "GitHub Workflows", slug: "guides/github" },
            { label: "SBOM", slug: "guides/sbom" },
          ],
        },
        ...openAPISidebarGroups,
        {
          label: "Architecture",
          items: [
            { label: "System Overview", slug: "architecture/overview" },
            { label: "Domain Models", slug: "architecture/domain" },
            { label: "CQRS Pattern", slug: "architecture/cqrs" },
          ],
        },
        {
          label: "Project",
          items: [{ label: "Roadmap", slug: "guides/roadmap" }],
        },
      ],
    }),
  ],
});
