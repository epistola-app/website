---
title: "Multi-tenancy"
description: "Tenant-scoped resources met slug-identifiers, data-isolatie, tenantwisselaar en per-tenant dashboards."
section: "platform"
sortOrder: 17
---

## Multi-tenancy

Epistola is standaard multi-tenant. Tenants zijn de top-level organisatie-eenheid en elke resource — templates, thema's, assets, omgevingen, attributen — is gescoped naar een tenant.

### Tenant-identifiers

Elke tenant heeft een slug-identifier: 3–63 tekens, kebab-case (bijv. `gemeente-amsterdam`). De slug verschijnt in alle API-paden en is de primaire sleutel voor tenantscoping.

### Data-isolatie

Alle resources zijn tenant-scoped. Data-isolatie wordt afgedwongen op de businesslogicalaag — er is geen cross-tenant datatoegang. Een templateslug zoals `besluitbrief` is uniek binnen een tenant maar kan onafhankelijk bestaan in andere tenants.

### In de UI

- **Tenantlijstpagina** — Een zelfstandige pagina (buiten de hoofdapplicatieshell) die alle tenants toont waartoe de gebruiker toegang heeft
- **Tenantwisselaar** — In de navigatiebalk (rechtsboven), voor snel wisselen tussen tenants zonder de applicatie te verlaten
- **Tenantdashboard** — Elke tenant heeft een eigen dashboard met statistieken en snelle-actiesnelkoppelingen voor veelvoorkomende taken
