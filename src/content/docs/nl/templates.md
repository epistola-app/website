---
title: "Templates"
description: "De kernresource in Epistola: naam, datacontract, datavoorbeelden, instellingen en de template-detailpagina."
section: "core-concepts"
sortOrder: 1
---

## Templates

Templates zijn de kernresource in Epistola. Een template vertegenwoordigt een specifiek documenttype — zoals een besluitbrief, factuur of vergunning — en bevat alles wat nodig is om het te produceren.

### Wat een template bevat

Elke template heeft:

- **Naam** — Een weergavenaam en een unieke slug gescoped naar de tenant (bijv. `besluitbrief`)
- **Datacontract** — Een JSON Schema (Draft 2020-12) dat de vereiste invoerdatastructuur definieert
- **Benoemde datavoorbeelden** — Opgeslagen JSON-payloads voor het testen en previewen van de template
- **Instellingen** — Standaardthemaselectie en PDF/A-compliancetoggle

### Templatelijstpagina

De templatelijstpagina biedt:

- **Zoeken** — Filter templates op naam of slug
- **Tabelweergave** — Elke rij toont de templatenaam, slug, aantal varianten en laatst-gewijzigd-tijdstempel

Klik op een template om de detailpagina te openen.

### Template-detailpagina

De template-detailpagina is georganiseerd in vier tabbladen:

| Tabblad | Doel |
|---|---|
| **Varianten** | Beheer presentatievarianten — aanmaken, bewerken, attributen instellen, standaard markeren |
| **Deployments** | Bekijk en beheer welke versie actief is per variant per omgeving |
| **Datacontract** | Bewerk het JSON Schema en beheer benoemde datavoorbeelden |
| **Instellingen** | Configureer het standaardthema en PDF/A-compliance |

### Templateslugs

De slug is de stabiele identifier die wordt gebruikt in API-aanroepen, workflowconfiguraties en catalogusreferenties. Deze is uniek binnen een tenant en onveranderlijk zodra ingesteld.
