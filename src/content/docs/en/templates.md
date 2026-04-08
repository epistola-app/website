---
title: "Templates"
description: "The core resource in Epistola: name, data contract, data examples, settings, and the template detail page."
section: "core-concepts"
sortOrder: 1
---

## Templates

Templates are the core resource in Epistola. A template represents a specific document type — such as a decision letter, invoice, or permit — and holds everything needed to produce it.

### What a template contains

Each template has:

- **Name** — A display name and a unique slug scoped to the tenant (e.g., `decision-letter`)
- **Data contract** — A JSON Schema (Draft 2020-12) defining the required input data structure
- **Named data examples** — Saved JSON payloads for testing and previewing the template
- **Settings** — Default theme selection and PDF/A compliance toggle

### Templates list page

The templates list page provides:

- **Search** — Filter templates by name or slug
- **Table view** — Each row shows the template name, slug, variant count, and last-modified timestamp

From here, click any template to open its detail page.

### Template detail page

The template detail page is organized into four tabs:

| Tab | Purpose |
|---|---|
| **Variants** | Manage presentation variants — create, edit, set attributes, mark default |
| **Deployments** | View and control which version is active per variant per environment |
| **Data Contract** | Edit the JSON Schema and manage named data examples |
| **Settings** | Configure the default theme and PDF/A compliance |

### Template slugs

The slug is the stable identifier used in API calls, workflow configurations, and catalog references. It is unique within a tenant and immutable once set.
