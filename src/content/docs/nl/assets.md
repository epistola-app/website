---
title: "Assets"
description: "Tenant-scoped afbeeldingsupload met slepen-en-neerzetten, formaatbeperkingen, assetraster en editorintegratie."
section: "platform"
sortOrder: 21
---

## Assets

Assets zijn afbeeldingen die zijn geüpload naar tenantopslag voor gebruik in documenttemplates. Ze worden gerefereerd op ID in templates en opgelost bij rendering.

### Geaccepteerde formaten

- PNG, JPEG, WebP en SVG
- Maximale bestandsgrootte: 5 MB per bestand

### Upload

De uploadinterface biedt:

- **Sleep-en-neerzetzone** — Sleep bestanden direct naar het uploadgebied
- **Klik-om-te-bladeren-fallback** — Standaard bestandskiezer voor het selecteren van bestanden vanaf schijf

### Assetraster

Geüploade assets worden weergegeven in een raster dat toont:

- **Voorbeeldminiatuur** — Een visuele preview van de afbeelding
- **Naam** — De originele bestandsnaam
- **Type** — Het bestandsformaat (PNG, JPEG, etc.)
- **Dimensies** — Breedte en hoogte in pixels
- **Bestandsgrootte** — De grootte op schijf

### Editorintegratie

In de templateeditor laat het asset-kiezerdialoog auteurs bladeren in en selecteren uit geüploade assets. Geselecteerde afbeeldingen worden ingevoegd in de template als Afbeeldingsblokken, verwijzend naar het asset op ID.
