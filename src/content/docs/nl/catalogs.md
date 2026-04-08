---
title: "Catalogi"
description: "Lokale en geïmporteerde catalogi, versiebeheerde releases en resource-uitwisseling."
section: "platform"
sortOrder: 16
---

## Catalogi

Catalogi bieden een mechanisme voor het delen en distribueren van templateresources tussen tenants en organisaties.

### Lokale catalogi

Elke tenant heeft een lokale catalogus met eigen templates, stencils en thema's. De lokale catalogus is de standaard werkruimte voor template-auteurs.

### Geïmporteerde catalogi

Tenants kunnen catalogi importeren van andere organisaties of uit een centrale templatebibliotheek. Geïmporteerde catalogusitems zijn alleen-lezen binnen de importerende tenant maar kunnen als startpunt dienen:

- Importeer een stencil en voeg het in in lokale templates
- Importeer een thema en breid het uit met tenant-specifieke overschrijvingen
- Importeer een template als referentie voor het aanmaken van lokale varianten

### Versiebeheerde releases

Catalogi ondersteunen versiebeheerde releases. Een uitgever kan:

1. Een set templates, stencils en thema's cureren
2. Ze taggen als een versiebeheerde release (bijv. v1.0, v2.0)
3. De release distribueren naar geabonneerde tenants

Abonnees ontvangen de update en kunnen kiezen wanneer ze nieuwe versies adopteren.

### Resource-uitwisseling

Catalogi maken een resource-uitwisselingsmodel mogelijk waarbij centrale teams (bijv. een shared services-organisatie) standaard documenttemplates publiceren die individuele tenants consumeren en aanpassen.
