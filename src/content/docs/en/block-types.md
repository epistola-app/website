---
title: "Block Types"
description: "Content, layout, logic, and page blocks: text, tables, images, containers, conditionals, loops, and more."
section: "editor"
sortOrder: 11
---

## Block Types

The Epistola editor organizes template content into blocks. Each block has a specific type that determines its behavior and rendering.

### Content blocks

| Block | Description |
|---|---|
| **Text** | Rich text with inline formatting and expression chips for dynamic data |
| **Table** | Structured table with configurable column widths. Cells support rich text and expressions |
| **Data Table** | Dynamic table bound to an array in the data. Columns are defined with data bindings; rows repeat per array item |
| **Image** | Static or dynamic image with the asset picker. Configurable sizing and alignment |
| **QR Code** | Generates a QR code from a dynamic data value |

### Layout blocks

| Block | Description |
|---|---|
| **Container** | Groups child blocks together for shared styling or conditional visibility |
| **Columns** | Side-by-side layout with configurable column widths |
| **Page Header** | Repeats at the top of every page |
| **Page Footer** | Repeats at the bottom of every page |
| **Stencil** | A reusable component inserted as a copy from the stencil library |

### Logic blocks

| Block | Description |
|---|---|
| **Conditional** | Shows or hides its child blocks based on an expression evaluation |
| **Loop** | Repeats its child blocks for each item in a data array |

### Page blocks

| Block | Description |
|---|---|
| **Page Break** | Forces a page break at that position in the document |
