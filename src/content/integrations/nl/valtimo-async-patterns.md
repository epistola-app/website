---
title: "Async Patronen & BPMN"
description: "Aanbevolen BPMN-patronen voor asynchrone documentgeneratie met de Valtimo Epistola-plugin."
plugin: "valtimo"
videoUrl: ""
videoBrief: "30-second screen recording: show a BPMN diagram with the recommended pattern. Run the process, watch it pause at the catch event, then continue when the document completes."
sortOrder: 5
---

## Waarom asynchroon?

Documentgeneratie is een I/O-intensieve operatie. In plaats van het BPMN-proces te blokkeren tijdens het wachten op een PDF, gebruikt de plugin een asynchroon patroon: dien het verzoek in en wacht op een voltooiingssignaal.

## Aanbevolen BPMN-patroon

Het standaardpatroon gebruikt drie elementen:

```
Servicetaak (Document Genereren)
  → Berichtvangstgebeurtenis (EpistolaDocumentGenerated)
  → Servicetaak (Document Downloaden)
```

1. **Document Genereren** — dient het verzoek in, slaat het verzoek-ID op
2. **Berichtvangstgebeurtenis** — het proces wacht hier tot het document klaar is
3. **Document Downloaden** — haalt de voltooide PDF op als Base64

## Hoe voltooiing werkt

De plugin bevat een gecentraliseerde batchpoller die:

- Op een configureerbaar interval draait (standaard: 30 seconden)
- Alle openstaande generatiejobs over alle wachtende processen opvraagt
- Verzoeken per tenant groepeert voor efficiënte API-aanroepen
- Het BPMN-bericht `EpistolaDocumentGenerated` correleert wanneer een job voltooid is

Dit betekent dat individuele processen geen timers of pollinglussen nodig hebben — de plugin handelt dit centraal af.

## Foutafhandeling

Als een generatiejob mislukt, wordt het bericht nog steeds gecorreleerd maar met een foutstatus. Gebruik een BPMN-grensgebeurtenis of een conditionele gateway na de downloadstap om fouten netjes af te handelen.

## Schaalbaarheid

De batchpoller is ontworpen voor honderden gelijktijdige generatiejobs. Bij hoge belasting:

- Jobs worden per tenant gegroepeerd om API-aanroepen te minimaliseren
- Mislukte jobs worden bijgehouden met fouttellers
- Gedeeltelijke fouten blokkeren andere jobs in dezelfde batch niet

## Alternatieve patronen

Voor gebruiksscenario's die directe feedback nodig hebben (bijv. voorbeeldgeneratie), overweeg het synchrone preview-endpoint direct te gebruiken in plaats van de asynchrone pluginacties.
