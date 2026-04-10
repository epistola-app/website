# Epistola Website

## Package manager

Use `pnpm` for all package management commands (install, add, remove, run, etc.).

## Tool versions

Tool versions are managed via `.mise.toml` (Node, pnpm, lychee). Run `mise install` after cloning.

## Global Constraints

- Run `pnpm check` BEFORE committing anything
- Run `pnpm build` to verify the full build (107+ pages)
- Run `pnpm run check:links` after building to catch dead internal links

## Tech Stack

- **Astro 5** — static site generator
- **Tailwind CSS 4** — utility-first styling with "Peach Paper" design system
- **TypeScript** — type-safe components and content schemas
- **Bilingual** — Dutch (nl, default) and English (en) with i18n prefix routing

## Site Structure

```
src/
├── components/
│   ├── ui/               # Shared UI primitives (Button, Card, Title, SidebarLayout)
│   ├── learn/            # Tour/learn components (VideoPlayer, ContentUnit, TourNav, etc.)
│   ├── docs/             # Suite docs components (DocsNav, DocsPage)
│   └── integrations/     # Integration docs components (IntegrationsNav, IntegrationsPage)
├── config/
│   ├── docs-sections.ts  # Single source of truth for docs section keys
│   └── sandbox-checkpoints.ts  # Demo launch URL mappings
├── content/
│   ├── learn/{en,nl}/    # Tour units (guided walkthrough) — .md + .demo.ts
│   ├── docs/{en,nl}/     # Suite reference docs — .md
│   ├── integrations/{en,nl}/  # Plugin guides — .md
│   ├── blog/{en,nl}/     # Blog posts — .md
│   ├── pages/{en,nl}/    # Static pages (FAQ, testimonials, legal) — .md
│   ├── product/{en,nl}/  # Product data (features, pricing) — .yaml
│   └── homepage/{en,nl}/ # Homepage section data — .yaml
├── i18n/
│   ├── index.ts          # t(), localePath(), stripLocalePrefix(), filterByLocale()
│   └── locales/{en,nl}.ts  # Translation keys (~290 per locale)
├── pages/[lang]/
│   ├── learn/            # Learn hub, tour, suite docs, integration docs
│   ├── integrations/     # Marketing page (sales-focused, links to /learn/integrations/)
│   ├── blog/             # Blog listing and posts
│   └── ...               # Other pages (features, pricing, about, contact, etc.)
├── styles/global.css     # Peach Paper design tokens (CSS custom properties)
└── public/
    └── videos/           # Generated demo videos + manifest.json
```

## Content Collections

Three main content collections serve the Learn hub:

| Collection | Schema | Purpose | Route |
|---|---|---|---|
| `learn` | title, description, videoUrl, videoBrief, videoCaptions, posterImage, sandboxCheckpointId, nextUnits, deepLinks, tags, sortOrder | Guided tour units | `/learn/tour/[slug]` |
| `docs` | title, description, section, videoUrl, videoBrief, videoCaptions, sortOrder | Suite reference docs | `/learn/suite/[slug]` |
| `integrations` | title, description, plugin, videoUrl, videoBrief, videoCaptions, sortOrder | Plugin guides | `/learn/integrations/[slug]` |

### Content conventions

- All content is bilingual: each collection has `en/` and `nl/` subdirectories
- Filenames are the URL slug (e.g., `templates.md` → `/learn/suite/templates`)
- `sortOrder` controls display order within sections/plugins
- Video metadata fields (`videoUrl`, `videoBrief`, `videoCaptions`) are shared via `videoSchema` in `content.config.ts`
- `summary` was renamed to `description` across all collections for consistency

### Tour flow

The tour tells the complete product story in 8 steps:

1. Welcome → 2. Create template → 3. Edit in editor → 4. Publish and deploy → 5. Connect to workflow → 6. Handle results → 7. Use in case → 8. End-to-end scenario

Steps 1-4 cover the Epistola Suite. Steps 5-8 cover the Valtimo/GZAC integration.

Tour units link to docs via `deepLinks`, and docs auto-link back to tour units via reverse-linking in `DocsPage`.

### Docs sections

Suite docs are grouped by section, defined in `src/config/docs-sections.ts`:

- **core-concepts** — templates, variants, versions, environments, themes, stencils, data contracts, deployment matrix, version comparison
- **editor** — editor overview, block types, expressions, rich text
- **generation** — document generation, jobs, rendering
- **platform** — multi-tenancy, attributes, catalogs, assets, API overview, import/export

### Integration plugins

Integration docs are grouped by `plugin` field (free-form string). Currently: `valtimo` (5 pages). Adding a new plugin only requires content files + an i18n key for the plugin name.

## Demo Video Pipeline

Videos are generated from `.demo.ts` scripts using [demo-reel](https://github.com/whit3st/demo-reel). Each script lives next to its content file (e.g., `create-template.demo.ts` alongside `create-template.md`). Astro ignores `.demo.ts` files in content collections.

### How it works

1. A `.demo.ts` script defines browser actions (goto, click, type, wait) against the Epistola demo site
2. demo-reel runs the actions in a Docker container with Chromium, records the screen, and generates voiceover via Piper TTS
3. Output: `.mp4` video + `.vtt` subtitles + `.srt` subtitles + `.meta.json` (scene timestamps)
4. Videos go to `public/videos/` and are served as static assets

### Commands

```bash
pnpm run demo:all          # Regenerate only changed videos (hash-based detection)
pnpm run demo:all:force    # Regenerate all videos
pnpm run demo:create-template  # Run a single demo script
```

### Change detection

`scripts/generate-videos.ts` hashes each `.demo.ts` file and compares with `public/videos/manifest.json`. Only changed scripts trigger regeneration.

### Requirements

- **Docker** — for recording and voice generation
- **demo-reel Docker image** — `demo-reel:latest`
- **Demo site access** — scripts run against `https://demo.epistola.app`

### TODO

Video files are currently committed to git. When the collection grows, move them to a CDN (Cloudflare R2 or S3).

## Shared Patterns

### i18n

All user-facing strings use `t(lang, "key")`. Translation keys are in `src/i18n/locales/{en,nl}.ts` and are type-safe (TypeScript union of all keys).

Use `stripLocalePrefix(slug, locale)` to remove the locale prefix from collection slugs — never use inline `slug.replace()`.

Use `localePath(locale, "/path")` for all internal URLs.

### Components

- **SidebarLayout** (`src/components/ui/sidebar-layout.astro`) — shared layout for docs and integration pages (sidebar + content + optional footer slot)
- **DocsPage** / **IntegrationsPage** — thin wrappers around SidebarLayout with collection-specific nav and reverse-linking
- **VideoPlayer** — renders video if `videoUrl` is set, placeholder with `videoBrief` if not, poster image as fallback

### Design system

The "Peach Paper" theme is defined via CSS custom properties in `src/styles/global.css`. All components use `var(--color-peach-paper-*)` tokens — never hardcode hex colors. Light and dark themes are both supported.

### Content Security Policy

CSP is set in `src/components/layout.astro` via a meta tag. When adding new external resources, update the relevant directive (e.g., `media-src`, `img-src`, `connect-src`).

### WIP Banner

A work-in-progress banner is shown at the top of every page. To hide it in production, set `PUBLIC_SHOW_WIP_BANNER=false` as an environment variable.

## Quick Reference

| Command | Description |
|---|---|
| `pnpm dev` | Start dev server (localhost:4321) |
| `pnpm build` | Build static site to dist/ |
| `pnpm check` | Astro type checking |
| `pnpm run check:links` | Post-build dead link check (requires build first) |
| `pnpm run demo:all` | Regenerate changed demo videos |
| `pnpm run demo:all:force` | Regenerate all demo videos |
| `pnpm format` | Format all files with Prettier |
| `pnpm preview` | Preview built site locally |
