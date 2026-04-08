---
title: "Valtimo Plugin Overzicht"
description: "Wat de Valtimo Epistola-plugin is en hoe deze GZAC/Valtimo koppelt aan Epistola."
plugin: "valtimo"
sortOrder: 1
---

## Wat is de Valtimo Epistola Plugin?

De Valtimo Epistola Plugin koppelt [Valtimo](https://www.valtimo.nl/) (GZAC) zaakafhandeling aan Epistola-documentgeneratie. Procesontwerpers kunnen documentgeneratie direct toevoegen aan BPMN-workflows — zonder maatwerk.

## Wat biedt het

De plugin voegt drie BPMN-servicetaakacties toe aan Valtimo:

- **Document genereren** — dien een asynchroon documentgeneratieverzoek in bij Epistola
- **Jobstatus controleren** — controleer de status van een generatiejob
- **Document downloaden** — haal de voltooide PDF op

Deze acties kunnen in elk BPMN-proces worden gecombineerd om documenten op het juiste moment te genereren.

## Hoe het werkt

1. Een procesontwerper configureert de plugin met het Epistola API-endpoint en credentials
2. BPMN-servicetaken gebruiken de pluginacties om generatie te starten
3. Zaakgegevens worden via value resolvers aan templatevelden gekoppeld
4. Documenten worden asynchroon gegenereerd en teruggekoppeld aan het wachtende proces
5. Het voltooide document kan worden gedownload, opgeslagen of doorgestuurd

## Gerelateerde documentatie

- [Configuratie](/nl/integrations/valtimo-configuration) — stel de pluginverbinding in
- [Documentgeneratieactie](/nl/integrations/valtimo-generate-action) — configureer de belangrijkste BPMN-actie
- [Datamapping](/nl/integrations/valtimo-data-mapping) — koppel zaakgegevens aan templatevelden
- [Async Patronen & BPMN](/nl/integrations/valtimo-async-patterns) — aanbevolen procespatronen
