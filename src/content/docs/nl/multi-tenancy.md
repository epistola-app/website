---
title: "Multi-tenancy"
description: "Tenantscoping, data-isolatie en tenantbeheer."
section: "platform"
sortOrder: 14
---

## Multi-tenancy

Epistola is standaard multi-tenant. Elke resource — templates, thema's, assets en configuraties — is gescoped naar een tenant.

### Tenantscoping

Alle API-operaties zijn gescoped naar de geauthenticeerde tenant. Een templateslug zoals `besluitbrief` is uniek binnen een tenant maar kan onafhankelijk bestaan in andere tenants.

### Data-isolatie

Tenants zijn volledig geïsoleerd:

- **Templates** — Elke tenant beheert zijn eigen templatebibliotheek
- **Thema's** — Tenant-specifieke opmaak en branding
- **Assets** — Geüploade afbeeldingen en resources zijn tenant-gescoped
- **Configuraties** — Attributen, omgevingen en instellingen per tenant

Er is geen cross-tenant datatoegang. Het platform handhaaft isolatie op API- en databaseniveau.

### Tenantbeheer

Tenants worden beheerd via Keycloak:

- Elke tenant mapt naar een Keycloak-realm of -groep
- Gebruikers authenticeren via SSO en worden automatisch gescoped naar hun tenant
- Rolgebaseerde toegangscontrole bepaalt wie templates kan ontwerpen, publiceren en beheren

Platformbeheerders kunnen nieuwe tenants onboarden zonder extra infrastructuur te deployen.
