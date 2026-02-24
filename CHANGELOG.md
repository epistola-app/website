# Changelog

All notable changes to this project will be documented here.

## [Unreleased]

### Added
- New Epistola-branded marketing layout, hero, navigation, footer, and section components.
- Shared design tokens for the marketing experience plus updated CTA button variants.
- Renewed README describing the project + contribution workflow.

### Changed
- Replaced legacy SaaSKit imagery/copy with Epistola positioning and document-intelligence messaging.
- Restyled pricing, integrations, features, testimonials, and newsletter sections for consistency with the new design system.
- Navigation now links to the dedicated docs site at `docs.epistola.app` and CTA buttons support external URLs.
- The Astro `base` path now defaults to `/` in development and only switches to `/website` when `DEPLOY_TARGET=gh-pages` for GitHub Pages builds.
- Marketing copy now reflects Epistola's focus as an open-source Common Ground PDF generator with integrations into orchestrators such as GZAC and Valtimo.
- Refreshed the color system with pastel gradients and softer card treatments for a friendlier visual tone.
- Added standalone privacy, terms, and security pages that the footer links reference.
- Reframed every blog article (Document Generation Lab intro, Epistola pipeline guide, DocGen best practices, advanced theming) around Epistola's document generation workflows, DocOps guidance, and multi-brand theming, renaming the slugs/titles to match their new focus.
- Updated the homepage + features screens to highlight concrete Epistola Suite capabilities (Lit/ProseMirror editor, JSON Schema contracts, expression engines, iText renderer, multi-tenant governance, Helm/Keycloak deploys) and introduced a DocOps architecture section showing the editor → template service → render pipeline.

### Removed
- Starlight-powered documentation, related content collections, and custom docs styles from this repository (future docs live on a separate site).
