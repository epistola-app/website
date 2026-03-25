# Changelog

All notable changes to this project will be documented here.

## [Unreleased]

### Changed

- Migrated `feature-breakdown` and `price-tiers` components from `t()` calls to content collections (`product` data collection via `filterDataByLocale`).
- Migrated `about`, `privacy`, `security`, and `terms` pages from `t()` calls to content collections (`pages` content collection via `filterByLocale` with `.render()` for markdown bodies).

### Added

- Content collection files for i18n migration: 144 files across `src/content/pages/`, `src/content/product/`, and `src/content/homepage/` for both `en` and `nl` locales.
  - Pages (content/markdown): FAQs (4), testimonials (3), about sections (3), privacy (4), security (4), terms (5) per locale.
  - Product (data/YAML): feature cards (6), feature sections (5), pricing tiers (3) per locale.
  - Homepage (data/YAML): how-it-works (3), why-us (4), stats (4), hero-stats (3), docops lanes (3), built-for steps (3), architecture steps (9), integration cards (3), process steps (3) per locale.

- Full internationalization (i18n) support with Dutch (primary) and English (secondary) languages.
- Astro built-in i18n routing with `/nl/` and `/en/` URL prefixes; root `/` redirects to `/nl/`.
- Translation infrastructure: `src/i18n/` module with `t()`, `localePath()`, locale utilities, and JSON translation files (`nl.json`, `en.json`) containing ~400 translation keys.
- Language switcher in header (desktop and mobile) linking to the same page in the alternate language.
- `hreflang` alternate link tags and `og:locale` / `og:locale:alternate` meta tags for SEO.
- Dutch translations for all 3 blog posts.

### Changed

- All pages moved under `src/pages/[lang]/` with `getStaticPaths` generating both locales.
- Layout now accepts `lang` prop, sets `<html lang>`, dynamic `og:locale`, and passes locale to header/footer.
- Header and footer use translated navigation labels and locale-prefixed links.
- All ~25 content components updated to accept `lang` prop and use `t(lang, key)` for all user-facing text.
- Blog content restructured into `src/content/blog/nl/` and `src/content/blog/en/` subfolders.
- Blog listing and post pages filter by locale and use locale-aware date formatting.
- Contact form JS validation messages passed via data attributes for locale support.
- Removed hardcoded `LOCALE` and `DEFAULT_TITLE`/`DEFAULT_DESCRIPTION` from `URL-helpers.ts` (now driven by translation keys).

### Added

- Interactive architecture flow visualization on homepage showing template configuration and document generation data flows with animated JSON packets, step-by-step controls, and auto-play on scroll.
- New Epistola-branded marketing layout, hero, navigation, footer, and section components.
- Shared design tokens for the marketing experience plus updated CTA button variants.
- Renewed README describing the project + contribution workflow.

### Changed

- Replaced legacy SaaSKit imagery/copy with Epistola positioning and document-generation messaging.
- Restyled pricing, integrations, features, testimonials, and newsletter sections for consistency with the new design system.
- Navigation now links to the dedicated docs site at `docs.epistola.app` and CTA buttons support external URLs.
- The Astro `base` path now defaults to `/` in development and only switches to `/website` when `DEPLOY_TARGET=gh-pages` for GitHub Pages builds.
- Marketing copy now reflects Epistola's focus as an open-source Common Ground PDF generator with integrations into orchestrators such as GZAC and Valtimo.
- Refreshed the color system with pastel gradients and softer card treatments for a friendlier visual tone.
- Added standalone privacy, terms, and security pages that the footer links reference.
- Reframed every blog article (Document Generation Lab intro, Epistola pipeline guide, DocGen best practices, advanced theming) around Epistola's document generation workflows, DocOps guidance, and multi-brand theming, renaming the slugs/titles to match their new focus.
- Updated the homepage + features screens to highlight concrete Epistola Suite capabilities (Lit/ProseMirror editor, JSON Schema contracts, expression engines, iText renderer, multi-tenant governance, Helm/Keycloak deploys) and introduced a DocOps architecture section showing the editor → template service → render pipeline.
- FAQ and integrations copy now explain the realistic launch timeline, Common Ground-first legacy approach, compliance logging, and that packaged orchestrator connectors remain on the roadmap.
- Features page now adds a lifecycle diagram plus detailed sections covering templates, schemas/examples, feedback with screenshots, theming, and the asset manager sourced from the Epistola Suite implementation, including a dedicated variant resolver flow diagram and anchored “Learn more” buttons.
- Homepage hero + DocOps copy now emphasise that Epistola is a single-purpose document generation engine (not a document-intelligence suite).
- Hero + Deploy sections now highlight both Epistola Suite demo (`demo.epistola.app`) and the Valtimo plugin demo (`valtimo-demo.epistola.app`).

### Removed

- Starlight-powered documentation, related content collections, and custom docs styles from this repository (future docs live on a separate site).
