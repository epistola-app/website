---
title: "Resultaten en fouten afhandelen"
description: "Hoe het werkproces omgaat met voltooide documenten, mislukte generaties en terugvalgedrag."
videoUrl: ""
videoBrief: "25-second screen recording: show a running process in Valtimo waiting at the message catch event. The document completes, the process moves forward to the download step. Then show a second scenario where generation fails — the process takes the error boundary path."
posterImage: ""
sandboxCheckpointId: ""
nextUnits:
  - slug: "use-in-case"
    label: "Documenten gebruiken in een zaak"
deepLinks:
  - label: "Async Patronen & BPMN"
    url: "/nl/learn/integrations/valtimo-async-patterns"
  - label: "Valtimo Plugin Overzicht"
    url: "/nl/learn/integrations/valtimo-overview"
tags:
  - getting-started
  - integration
sortOrder: 6
---

## Generatieresultaten afhandelen

Documentgeneratie is asynchroon — het proces blokkeert niet terwijl het wacht op een PDF. In plaats daarvan wordt een berichtpatroon gebruikt om responsief te blijven.

### De asynchrone stroom

Nadat de documentgeneratie-actie is gestart, bereikt het proces een **berichtvangstgebeurtenis** en wacht. Op de achtergrond:

1. Epistola genereert het document
2. De batchpoller van de Valtimo-plugin controleert op voltooide jobs (standaard elke 30 seconden)
3. Wanneer de job voltooid is, correleert de plugin het BPMN-bericht
4. Het proces gaat verder naar de volgende stap

### Het resultaat downloaden

Na ontvangst van het bericht haalt een **document-downloaden**-servicetaak de voltooide PDF op. Het document is dan beschikbaar in de zaak voor weergave, verzending of archivering.

### Foutafhandeling

Als generatie mislukt, wordt het bericht nog steeds gecorreleerd maar met een foutstatus. Je kunt dit afhandelen met:

- **Grensgebeurtenissen** op de berichtvangst — routeer naar een foutafhandelingspad
- **Conditionele gateways** na download — controleer de status en vertakking
- **Herhalingslogica** — dien het generatieverzoek opnieuw in

### Terugvalgedrag

Voor kritieke documenten kun je het proces ontwerpen met een terugval: als automatische generatie mislukt, routeer de taak naar een medewerker die handmatig kan genereren of een alternatief template kan gebruiken.
