---
title: "Documentgeneratieactie"
description: "Hoe je de generate-document BPMN-servicetaakactie configureert in Valtimo."
plugin: "valtimo"
sortOrder: 3
---

## De Generate Document-actie

Dit is de primaire pluginactie. Deze dient een asynchroon documentgeneratieverzoek in bij Epistola vanuit een BPMN-servicetaak.

## Templateselectie

Je kunt het te genereren template op drie manieren selecteren:

- **Expliciet variant-ID** — geef direct aan welke variant gebruikt moet worden
- **Attribuutgebaseerde resolutie** — geef attribuutcriteria op (bijv. taal=nl, merk=zakelijk) en laat Epistola's resolutiealgoritme de best passende variant vinden
- **Standaardvariant** — gebruik de standaardvariant van het template

## Configuratievelden

| Veld | Verplicht | Beschrijving |
|---|---|---|
| Template | Ja | Het Epistola-template om te genereren |
| Variantmodus | Ja | Hoe de variant geselecteerd wordt (expliciet, attributen of standaard) |
| Datamapping | Ja | Koppel proces-/zaakgegevens aan templatevelden |
| Omgeving | Nee | Overschrijf de doelomgeving |
| Resultaatvariabele | Ja | Procesvariabele om het verzoek-ID op te slaan |

## Datamapping

De datamapping verbindt zaak- en procesgegevens met het datacontract van het template. Zie [Datamapping](/nl/integrations/valtimo-data-mapping) voor de volledige referentie.

## Wat er na verzending gebeurt

De actie retourneert direct met een verzoek-ID. De daadwerkelijke documentgeneratie vindt asynchroon plaats. Gebruik een BPMN-berichtvangstgebeurtenis om op voltooiing te wachten — zie [Async Patronen](/nl/integrations/valtimo-async-patterns).
