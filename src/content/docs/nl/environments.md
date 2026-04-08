---
title: "Omgevingen"
description: "Tenant-scoped deploymentdoelen voor versieactivering en de deploymentmatrix."
section: "core-concepts"
sortOrder: 6
---

## Omgevingen

Omgevingen zijn tenant-scoped deploymentdoelen — zoals productie, staging of ontwikkeling. Ze bepalen welke templateversie actief is voor documentgeneratie in elke context.

### Omgevingseigenschappen

Elke omgeving heeft:

- **Slug** — Een unieke identifier binnen de tenant (bijv. `productie`)
- **Naam** — Een weergavenaam (bijv. "Productie")
- **Beschrijving** — Een optionele uitleg van het doel van de omgeving

### Publiceren en activeren

Het publiceren van een versie naar een omgeving bevriest het concept en activeert het voor dat specifieke variant/omgevingspaar. De gepubliceerde versie wordt degene die gebruikt wordt wanneer documentgeneratieverzoeken die omgeving targeten.

### Omgevingen in de deploymentmatrix

Omgevingen vormen de kolommen van de deploymentmatrix op de template-detailpagina. Elke cel toont welke versie actief is voor een gegeven variant in die omgeving, wat een snelle visuele vergelijking mogelijk maakt van wat waar gedeployd is.

### In de UI

De omgevingenlijstpagina biedt:

- **Zoeken** — Filter omgevingen op naam of slug
- **Tabelweergave** — Elke rij toont de omgevingsnaam, slug en beschrijving

Omgevingen worden beheerd op tenantniveau en gedeeld over alle templates.
