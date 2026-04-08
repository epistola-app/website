---
title: "API-overzicht"
description: "REST API-structuur, versiebeheerd mediatype, authenticatie en rollen."
section: "platform"
sortOrder: 18
---

## API-overzicht

Epistola stelt een REST API beschikbaar gedefinieerd door een OpenAPI 3.1-specificatie. De API is het primaire integratiepunt voor workflow-engines, applicaties en automatisering.

### REST API-structuur

De API is georganiseerd rond resources:

- `/templates` — Template CRUD en listing
- `/templates/{slug}/variants` — Variantbeheer
- `/templates/{slug}/render` — Documentgeneratie
- `/jobs` — Jobstatus en -beheer
- `/assets` — Assetupload en -ophaling
- `/themes` — Themabeheer

### Versiebeheerd mediatype

API-versiebeheer gebruikt content negotiation via de `Accept`-header. Clients specificeren de API-versie die ze ondersteunen en de server antwoordt met de juiste representatie.

### Authenticatie

Alle API-verzoeken vereisen authenticatie via bearer tokens uitgegeven door Keycloak. Tokens bevatten de tenantcontext en gebruikersrollen, wat zorgt voor juiste scoping en autorisatie.

### Rollen

Epistola definieert verschillende rollen:

| Rol | Mogelijkheden |
|---|---|
| **Viewer** | Templates lezen en gegenereerde documenten downloaden |
| **Auteur** | Templateconcepten aanmaken en bewerken |
| **Publisher** | Versies publiceren en omgevingsactivaties beheren |
| **Admin** | Tenantinstellingen, attributen en gebruikerstoegang beheren |

Rollen worden toegewezen via Keycloak en afgedwongen op API-niveau.
