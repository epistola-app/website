---
title: "Assets"
description: "Tenant-scoped image upload with drag-and-drop, format restrictions, asset grid, and editor integration."
section: "platform"
sortOrder: 21
---

## Assets

Assets are images uploaded to tenant storage for use in document templates. They are referenced by ID in templates and resolved at render time.

### Accepted formats

- PNG, JPEG, WebP, and SVG
- Maximum file size: 5 MB per file

### Upload

The upload interface provides:

- **Drag-and-drop zone** — Drop files directly onto the upload area
- **Click-to-browse fallback** — Standard file picker for selecting files from disk

### Asset grid

Uploaded assets are displayed in a grid showing:

- **Preview thumbnail** — A visual preview of the image
- **Name** — The original filename
- **Type** — The file format (PNG, JPEG, etc.)
- **Dimensions** — Width and height in pixels
- **File size** — The size on disk

### Editor integration

In the template editor, the asset picker dialog lets authors browse and select from uploaded assets. Selected images are inserted into the template as Image blocks, referencing the asset by ID.
