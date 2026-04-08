---
title: "Import & Export"
description: "Export all templates as JSON and import from file with per-template result tracking."
section: "platform"
sortOrder: 20
---

## Import & Export

Epistola provides bulk import and export of template data for migration, backup, and cross-instance transfer.

### Export

Export produces a JSON file containing all templates in the tenant, including:

- Template definitions and settings
- Variants and their attributes
- Deployment configurations

The export is triggered from the admin data management page with a single download button.

### Import

Import reads a JSON file and processes each template, reporting results per item:

| Metric | Description |
|---|---|
| **Processed** | Total number of templates in the file |
| **Created** | Templates that were newly created |
| **Updated** | Templates that existed and were updated |
| **Unchanged** | Templates that matched the existing state |
| **Failed** | Templates that could not be imported (with error details) |

### In the UI

The admin data management page provides:

- **Download button** — Export all templates as a JSON file
- **File upload form** — Select a JSON file to import
- **Results summary** — After import, a summary table shows processed/created/updated/unchanged/failed counts per template
