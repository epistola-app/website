---
title: "Bouw Je Eerste Epistola Document Pipeline"
description: "Start een productie-klare documentgeneratie pipeline met Epistola. Leer het snelste pad van templates en datamodellen naar ge-auditeerde PDF, DOCX, en HTML deliverables."
date: 2026-02-10
author: "Epistola Team"
cover: "/blog/placeholder-pipeline.svg"
tags: ["getting-started", "docops", "document-generation", "tutorial"]
locale: nl
---

## Introductie

Moet je over van hand-bewerkte documenten naar voorspelbare, compliant outputs? Deze gids loopt door de snelste manier om een Epistola-gedreven documentgeneratie pipeline te lanceren. In minder dan een uur zul je: de toolkit installeren, een data bron verbinden, een herbruikbare template ontwerpen, PDF/DOCX/HTML outputs renderen, en alles in je levering workflow inbedden.

## Vereisten

Voordat je begint, zorg ervoor dat je hebt:

- **Node.js 18+** en **pnpm** voor lokale tooling
- **Git** voor versiebeheer van templates en configuratie
- **Epistola account** met API toegang (trial of enterprise)
- **Sample dataset** (JSON, CSV, SQL, of API) die je wilt mergen in documenten
- **Brand assets** (fonts, logos) als je van plan bent om een bestaande style guide te matchen

## 1. Installeer de Epistola Toolkit

Clone de starter repo die CLI scripts, render adapters, en preview UI bundelt:

```bash
git clone https://github.com/epistola-app/docgen-starter.git
cd docgen-starter
pnpm install
```

Run de lokale preview workspace:

```bash
pnpm dev
# http://localhost:4321 host template previews en data inspectors
```

## 2. Authenticeer met Epistola

Maak een service token in het Epistola dashboard, en sla het op als `.env.local`:

```ini
EPISTOLA_API_KEY=ep_live_xxx
EPISTOLA_WORKSPACE_ID=ws_123
```

De CLI pikt deze waarden automatisch op bij het runnen van renders of publiceren van templates.

## 3. Map Je Data Model

Elk document zou moeten lezen van een typed payload. Definieer een schema onder `src/models/`:

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

Dit schema powert type-safe mock generators, geautomatiseerde validatie, en lint hints in je editor.

## 4. Ontwerp een Template

Epistola ondersteunt Liquid, Nunjucks, en MJML. Drop templates in `src/templates/`:

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
  <p>Hi {{ customer.name }}, bedankt voor je aankoop op {{ placedAt | date: "%B %d" }}.</p>
  <table>
    {% for item in lineItems %}
    <tr>
      <td>{{ item.name }}</td>
      <td>{{ item.qty }} x {{ item.total | money }}</td>
    </tr>
    {% endfor %}
  </table>
  <p>Totaal: {{ totals.grandTotal | money }}</p>
</section>
```

Gebruik het Preview panel om hot-reload templates terwijl je layout en typografie tweak. Upload fonts of refereer aan gehoste assets via de `assets` helper.

## 5. Verbind een Data Bron

Epistola kan documenten hydraten van statische fixtures, REST APIs, SQL queries, of message queues. Configureer connectors in `epistola.config.ts`:

```ts
export default defineConfig({
  datasets: {
    orderConfirmation: {
      source: "postgres",
      connection: process.env.DATABASE_URL,
      query: "select * from orders where id = $1",
      parameters: ["orderId"],
    },
  },
});
```

Voor snel prototyping, drop JSON files onder `fixtures/` en registreer ze als mock datasets.

## 6. Genereer Je Eerste Document

Run de CLI met een dataset referentie:

```bash
pnpm epistola generate order-confirmation \
  --data orderConfirmation:fixtures/order-1098.json \
  --out ./artifacts/order-1098
```

Het commando output PDF, DOCX, en HTML naast een render manifest:

```
artifacts/order-1098/
├── order-confirmation.pdf
├── order-confirmation.docx
├── order-confirmation.html
└── manifest.json
```

Inspecteer `manifest.json` om metadata (hashes, render tijd, template versie) te zien voor audit trails.

## 7. Voeg Geautomatiseerde Validatie Toe

Gebruik Playwright of Vitest om regression-test gegenereerde documenten. Voorbeeld snapshot test:

```ts
import { renderDocument } from "../test/utils/render";

test("totals match line items", async () => {
  const doc = await renderDocument("order-confirmation", "order-1098");
  expect(doc.data.totals.grandTotal).toBeCloseTo(doc.data.lineItems.reduce((sum, item) => sum + item.total, 0));
});
```

Koppel data assertions met pixel snapshots (PDF naar PNG) om layout regressies te vangen voor promotie.

## 8. Publiceer en Automatiseer

Wanneer je tevreden bent met QA, publiceer de template versie:

```bash
pnpm epistola templates publish order-confirmation --env=production
```

Koppel het in je workflow met webhooks of de API:

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

Automatisering tips:

- Gebruik message queues (SQS, Kafka, NATS) om grote jobs te batchen
- Configureer retries en dead-letter topics voor resilience
- Sla output URLs op je core objecten op voor traceability

## 9. Observability en Governance

Epistola levert:

- **Render analytics**: duur, throughput, error types
- **Version ledger**: wie veranderde wat, diff previews
- **PII controls**: redaction op logs, granulaire encryptie

Push render metrics naar Datadog/Prometheus via de telemetry webhook om DocOps in je standaard observability toolkit te houden.

## 10. Troubleshooting

| Probleem           | Waarschijnlijke Oorzaak                              | Oplossing                                              |
| --------------- | ----------------------------------------- | ------------------------------------------------ |
| Lege PDF pagina's | Absolute positionering zonder page context | Gebruik `@page` CSS en vermijd negatieve margins       |
| Ontbrekende assets  | Extern logo geblokkeerd                     | Upload assets in Epistola storage of sign URLs |
| Encoding issues | Bron data niet UTF-8                     | Normaliseer naar UTF-8 voor ingestion              |
| Trage renders    | Grote datasets of niet-geoptimaliseerde loops       | Paginateer data, pre-compute aggregates            |

## Volgende Stappen

- Voeg dynamische secties (clausules, disclosures) toe met conditionele blokken
- Introduceer lokalisatie met i18n dictionaries en fallback logica
- Combineer outputs (email + PDF) in ge-orkestreerde playbooks getriggerd door CRM events
- Verken het design tokens artikel op deze blog voor advanced theming technieken

Documentgeneratie wordt voorspelbaar zodra elke template, data pad, en deployment is ge-versioneerd. Epistola handelt de plumbing af zodat je team zich kan focussen op het narratief.
