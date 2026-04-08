---
title: "Create your first template"
summary: "Walk through creating a document template, understanding the detail page, and setting up variants."
videoUrl: ""
videoBrief: "20-second screen recording: click 'New Template' from the templates list, enter a name, see the template detail page appear with its four tabs (Variants, Deployments, Data Contract, Settings). End on the variant cards view."
posterImage: ""
sandboxCheckpointId: "template-created"
nextUnits:
  - slug: "edit-in-editor"
    label: "Edit in the visual editor"
  - slug: "explore-technical"
    label: "Set up variants"
deepLinks:
  - label: "Templates"
    url: "/en/learn/suite/templates"
  - label: "Variants"
    url: "/en/learn/suite/variants"
  - label: "Data Contracts"
    url: "/en/learn/suite/data-contracts"
  - label: "Environments"
    url: "/en/learn/suite/environments"
tags:
  - getting-started
sortOrder: 2
---

## Creating a template

Templates are the core building block in Epistola. Each template defines everything needed to produce a specific document type.

### Start from the templates list

Navigate to the templates page in the Epistola Suite. You'll see a searchable table of all templates in your tenant. Click **New template** to create one — give it a meaningful slug (e.g., `decision-letter`) and a display name.

### The template detail page

Once created, you land on the template detail page with four tabs:

- **Variants** — Manage presentation variants (e.g., different languages or brands). Each variant has its own layout and version history
- **Deployments** — The deployment matrix showing which version is active per variant per environment
- **Data Contract** — Edit the JSON Schema defining the data your template expects, and manage named data examples for testing
- **Settings** — Configure the default theme and toggle PDF/A compliance

### Define your data contract

Switch to the Data Contract tab and define the JSON Schema for your template. This contract describes the exact shape of the data payload — field names, types, and which fields are required. Add named data examples so you can preview the template with realistic content.

### Set up variants

Back on the Variants tab, your template starts with one default variant. Create additional variants for different languages, brands, or channels. Tag each variant with attributes (e.g., `language=nl`) so the variant resolver can automatically select the right one when documents are generated.

### Try it yourself

Use the sandbox below to create a template in a live Epistola environment.
