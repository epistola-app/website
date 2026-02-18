---
title: "Build Your First Epistola Document Pipeline"
description: "Spin up a production-ready document generation pipeline with Epistola. Learn the fastest path from templates and data models to audited PDF, DOCX, and HTML deliverables."
date: 2026-02-10
author: "Epistola Team"
cover: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200&h=630&fit=crop&q=80"
tags: ["getting-started", "docops", "document-generation", "tutorial"]
---

## Introduction

Need to move from hand-edited documents to predictable, compliant outputs? This guide walks through the quickest way to ship an Epistola-powered document generation pipeline. In less than an hour you will: install the toolkit, connect a data source, design a reusable template, render PDF/DOCX/HTML outputs, and wire everything into your delivery workflow.

## Prerequisites

Before you start, make sure you have:

- **Node.js 18+** and **pnpm** for local tooling
- **Git** for versioning templates and configuration
- **Epistola account** with API access (trial or enterprise)
- **Sample dataset** (JSON, CSV, SQL, or API) you want to merge into documents
- **Brand assets** (fonts, logos) if you plan to match an existing style guide

## 1. Install the Epistola Toolkit

Clone the starter repo that bundles CLI scripts, render adapters, and preview UI:

```bash
git clone https://github.com/epistola-app/docgen-starter.git
cd docgen-starter
pnpm install
```

Run the local preview workspace:

```bash
pnpm dev
# http://localhost:4321 hosts template previews and data inspectors
```

## 2. Authenticate with Epistola

Create a service token in the Epistola dashboard, then store it as `.env.local`:

```ini
EPISTOLA_API_KEY=ep_live_xxx
EPISTOLA_WORKSPACE_ID=ws_123
```

The CLI automatically picks up these values when running renders or publishing templates.

## 3. Map Your Data Model

Every document should read from a typed payload. Define a schema under `src/models/`:

```ts
// src/models/order-confirmation.ts
export interface OrderConfirmation {
  orderNumber: string;
  placedAt: string;
  customer: {
    name: string;
    email: string;
    billingAddress: Address;
  };
  lineItems: Array<{ sku: string; name: string; qty: number; total: number }>;
  totals: { subtotal: number; tax: number; grandTotal: number };
}
```

This schema powers type-safe mock generators, automated validation, and lint hints inside your editor.

## 4. Design a Template

Epistola supports Liquid, Nunjucks, and MJML. Drop templates into `src/templates/`:

```liquid
---
name: order-confirmation
outputs:
  - pdf
  - html
---
<header>
  <img src="{{ assets.logo }}" alt="{{ brand.name }}" />
  <h1>Order {{ orderNumber }}</h1>
</header>

<section>
  <p>Hi {{ customer.name }}, thanks for your purchase on {{ placedAt | date: "%B %d" }}.</p>
  <table>
    {% for item in lineItems %}
    <tr>
      <td>{{ item.name }}</td>
      <td>{{ item.qty }} x {{ item.total | money }}</td>
    </tr>
    {% endfor %}
  </table>
  <p>Total: {{ totals.grandTotal | money }}</p>
</section>
```

Use the Preview panel to hot-reload templates as you tweak layout and typography. Upload fonts or reference hosted assets through the `assets` helper.

## 5. Connect a Data Source

Epistola can hydrate documents from static fixtures, REST APIs, SQL queries, or message queues. Configure connectors in `epistola.config.ts`:

```ts
export default defineConfig({
  datasets: {
    orderConfirmation: {
      source: 'postgres',
      connection: process.env.DATABASE_URL,
      query: 'select * from orders where id = $1',
      parameters: ['orderId'],
    },
  },
});
```

For rapid prototyping, drop JSON files under `fixtures/` and register them as mock datasets.

## 6. Generate Your First Document

Run the CLI with a dataset reference:

```bash
pnpm epistola generate order-confirmation \
  --data orderConfirmation:fixtures/order-1098.json \
  --out ./artifacts/order-1098
```

The command outputs PDF, DOCX, and HTML alongside a render manifest:

```
artifacts/order-1098/
├── order-confirmation.pdf
├── order-confirmation.docx
├── order-confirmation.html
└── manifest.json
```

Inspect `manifest.json` to view metadata (hashes, render time, template version) for audit trails.

## 7. Add Automated Validation

Use Playwright or Vitest to regression-test generated documents. Example snapshot test:

```ts
import { renderDocument } from '../test/utils/render';

test('totals match line items', async () => {
  const doc = await renderDocument('order-confirmation', 'order-1098');
  expect(doc.data.totals.grandTotal).toBeCloseTo(
    doc.data.lineItems.reduce((sum, item) => sum + item.total, 0)
  );
});
```

Pair data assertions with pixel snapshots (PDF to PNG) to catch layout regressions before promotion.

## 8. Publish and Automate

When you're satisfied with QA, publish the template version:

```bash
pnpm epistola templates publish order-confirmation --env=production
```

Wire it into your workflow using webhooks or the API:

```bash
curl -X POST https://api.epistola.app/v1/renders \
  -H "Authorization: Bearer $EPISTOLA_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
        "template": "order-confirmation@2",
        "data": { "orderId": "ord_1098" },
        "outputs": ["pdf", "email"],
        "delivery": { "email": { "to": "{{customer.email}}" } }
      }'
```

Automation tips:

- Use message queues (SQS, Kafka, NATS) to batch render large jobs
- Configure retries and dead-letter topics for resilience
- Store output URLs on your core objects for traceability

## 9. Observability and Governance

Epistola ships with:

- **Render analytics**: duration, throughput, error types
- **Version ledger**: who changed what, diff previews
- **PII controls**: redaction on logs, granular encryption

Push render metrics into Datadog/Prometheus via the telemetry webhook to keep DocOps in your standard observability toolkit.

## 10. Troubleshooting

| Issue | Likely Cause | Fix |
| --- | --- | --- |
| Blank PDF pages | Absolute positioning without page context | Use `@page` CSS and avoid negative margins |
| Missing assets | External logo blocked | Upload assets into Epistola storage or sign URLs |
| Encoding issues | Source data not UTF-8 | Normalize to UTF-8 before ingestion |
| Slow renders | Large datasets or unoptimized loops | Paginate data, pre-compute aggregates |

## Next Steps

- Add dynamic sections (clauses, disclosures) using conditional blocks
- Introduce localization with i18n dictionaries and fallback logic
- Combine outputs (email + PDF) into orchestrated playbooks triggered by CRM events
- Explore the design tokens article on this blog for advanced theming techniques

Document generation becomes predictable once every template, data path, and deployment is versioned. Epistola handles the plumbing so your team can focus on the narrative.
