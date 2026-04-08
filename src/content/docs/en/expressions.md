---
title: "Expressions"
description: "Three expression languages — JSONata, JavaScript, Simple Path — with live evaluation and inline chip rendering."
section: "editor"
sortOrder: 12
---

## Expressions

Expressions connect template content to data. Each expression is stored in all three supported languages, and the rendering engine evaluates the one matching the configured default.

### Expression languages

#### Simple Path

Lightweight dot-path traversal for straightforward data access:

```
recipientName
address.city
items[0].description
```

Best for direct property lookups without transformation.

#### JSONata

The default expression language, using the Dashjoin implementation. Supports paths, filters, aggregations, and formatting:

```
$uppercase(recipientName)
$sum(items.amount)
$now('[D] [MNn] [Y]')
items[price > 100].description
```

#### JavaScript

GraalJS-sandboxed JavaScript for complex logic. No file system or network access is available:

```javascript
data.items.filter(i => i.amount > 100).length
new Date(data.decisionDate).toLocaleDateString('nl-NL')
```

### Where expressions are used

- **Text interpolation** — `{{expression}}` within rich text blocks, rendered as inline chips
- **Conditional visibility** — Determines whether a conditional block is shown or hidden
- **Loop iteration** — Defines the array that a loop block iterates over
- **Table cell values** — Binds data table columns to data paths

### In the UI

The expression dialog lets authors write and test expressions. It provides:

- **Live evaluation preview** — Shows the resolved value against the selected data example in real time
- **JSONata reference** — Built-in documentation for JSONata syntax and functions
- **Language selector** — Switch between Simple Path, JSONata, and JavaScript
