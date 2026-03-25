---
title: "Waarom Epistola geen workflow bevat"
description: "Documentgeneratie en workflow zijn verschillende disciplines. Lees waarom we deze bewust gescheiden houden — en waarom dat beter is voor jou."
date: 2026-03-25
author: "Epistola Team"
tags: ["architectuur", "workflow", "integratie"]
locale: "nl"
---

## Doe één ding en doe het goed

Epistola genereert documenten. Het verstuurt ze niet, keurt ze niet goed en bepaalt niet wat de volgende stap is. Dat is de taak van je workflow-engine — en met een goede reden.

## Workflow is bedrijfsspecifiek

Elke organisatie richt processen anders in. Een bezwaarprocedure bij de ene gemeente ziet er heel anders uit dan dezelfde procedure bij een andere. Workflow-logica is inherent verbonden aan jouw specifieke context, regels en uitzonderingen.

Door workflow te bundelen in een documentgenerator, word je gedwongen in generieke patronen die nooit helemaal passen. Erger nog: het verspreidt je proceslogica over meerdere systemen — de goedkeuring leeft hier, de notificatie daar en het document ergens anders.

## Hoge cohesie is essentieel

Wanneer alle stappen van een enkel proces samenleven in één systeem — je zaakafhandelsysteem (ZAS) — zijn ze eenvoudiger te begrijpen, te onderhouden en aan te passen. Je BPMN-model is de _single source of truth_, niet een lappendeken van verschillende leveranciers.

Epistola integreert met systemen zoals GZAC via heldere API's. Jouw workflow-engine roept Epistola aan wanneer een document nodig is, en Epistola levert het. Geen overlap, geen lock-in en geen verborgen proceslogica.

## Het resultaat

- **Jouw processen blijven van jou.** Pas je workflow aan zonder de documentgeneratie te raken.
- **Minder bewegende delen.** Eén systeem voor de workflow, één voor de documenten.
- **Makkelijker te doorgronden.** Als er iets misgaat, weet je precies waar je moet zoeken.

_Wil je zien hoe de integratie werkt? Bekijk de architectuur-flow op onze [homepage](/)._
