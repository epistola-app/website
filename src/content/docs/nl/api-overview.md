---
title: "API-overzicht"
description: "Tenant-scoped REST API met versiebeheerd mediatype, OAuth2/API-sleutelauthenticatie, rolgebaseerde toegang en resource-eindpunten."
section: "platform"
sortOrder: 22
---

## API-overzicht

Epistola stelt een REST API beschikbaar die is gedefinieerd door een OpenAPI 3.1-specificatie. Alle eindpunten zijn tenant-scoped onder `/api/tenants/{tenantId}/...`.

### Versiebeheerd mediatype

De API gebruikt een versiebeheerd mediatype voor contentonderhandeling:

```
application/vnd.epistola.v1+json
```

### Authenticatie

Vier authenticatiemethoden worden ondersteund:

| Methode | Use case |
|---|---|
| **OAuth2/OIDC** (Keycloak) | Productie single sign-on |
| **API-sleutel** (`X-API-Key`-header) | Service-naar-service-integratie |
| **JWT bearer tokens** | Directe tokenauthenticatie |
| **Formulierinlog** | Ontwikkel- en demo-omgevingen |

### Rollen

Toegangscontrole is rolgebaseerd:

| Rol | Mogelijkheden |
|---|---|
| **reader** | Templates lezen, jobs bekijken, documenten downloaden |
| **editor** | Templateconcepten aanmaken en bewerken |
| **generator** | Renderverzoeken indienen en jobs beheren |
| **manager** | Versies publiceren, omgevingen en deployments beheren |
| **tenant_control** | Tenantinstellingen, attributen en gebruikerstoegang beheren |

### Resource-eindpunten

De API biedt eindpunten voor:

- **Templates** — CRUD, lijsten en zoeken
- **Varianten** — Aanmaken, bijwerken en beheren per template
- **Versies** — Concepten aanmaken, publiceren, archiveren
- **Thema's** — CRUD en lijsten
- **Omgevingen** — CRUD en lijsten
- **Attributen** — CRUD en lijsten
- **Generatie** — Preview (synchroon), genereren (asynchroon), batch (asynchroon)
- **Jobs** — Status, lijsten, annulering
- **Documenten** — Gegenereerde documenten downloaden
- **Stencils** — CRUD, versiebeheer en gebruikstracking
