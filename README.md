# Angular Projekt – Konverteringsapplikation

Detta projekt är en del av kursen *Webbutveckling I (DT211G)* och syftar till att skapa en enkel webbapplikation byggd med Angular. Applikationen består av flera undersidor, routing, komponentbaserad struktur och databindning. Projektet demonstrerar grunderna i Angular och hur man bygger en SPA.

---

## Funktioner

### Startsida
  - **Hero‑sektion** med introduktion till webbplatsen.
  - Kort presentation av innehållet.

### Konverteringssida
En sida där användaren kan konvertera mellan olika enheter. Alla konverteringar sker med Angulars databindning och komponentlogik.

**Temperatur:**
- Celsius → Fahrenheit  
- Fahrenheit → Celsius  

**Längd:**
- Meter → Feet  
- Feet → Meter  

Varje konvertering har:
- ettinput‑fält
- en knapp som triggar en metod i komponenten
- ett resultat som visas direkt i gränssnittet

### About‑sida
En sida som beskriver arbetsprocessen, hur uppgiften löstes och vilka slutsatser som dragits.

### Navigation & Routing
- Navigationsmeny med `routerLink` och `routerLinkActive`
- Aktiv länk markeras visuellt
- Routing mellan tre sidor: *Home*, *Converter*, *About*

---

## Tekniker och verktyg

Projektet är byggt med:

- **Angular**
- **Standalone Components**
- **TypeScript**
- **HTML & SCSS**
- **Angular Router**
- **FormsModule** för databindning (`[(ngModel)]`)

---

## Projektstruktur (förenklad)
```
src/
├── app/
│    ├── home/
│    ├── converter/
│    ├── about/
│    ├── app.routes.ts
│    └── app.component.ts
├── assets/
├── styles.scss
└── main.ts
```

## Installation och körning

### Installera beroende
```
npm install
```

### Starta utvecklingsmiljö
```
ng serve
```

##  Arbetsprocess & slutsatser

Arbetet började med att skapa grundstrukturen i Angular och sätta upp routing mellan sidorna. Därefter byggdes varje sida som en egen komponent. Konverteringssidan utvecklades med databindning och separata metoder för varje konvertering, vilket gjorde logiken tydlig och lätt att testa.

Genom uppgiften har jag fått en bättre förståelse för:
- hur Angulars komponentmodell fungerar  
- hur databindning kopplar samman HTML och TypeScript  
- hur routing byggs upp i en SPA  
- hur man strukturerar en webbplats i flera delar  
- hur viktigt det är att testa varje del steg för steg  

Uppgiften gav en bra introduktion till Angular och hur man bygger en liten men komplett webbapplikation.

---

## Publicering
Laborationen är publicerad på Netlify.
Eftersom det är en client site routing, har jag lagt till en _redirect.

**Jag lade till filen _redirect och skrev följande**
```
/* /index.html 200
```
Netlify: https://angulaboration.netlify.app/

## Skapad av
**Pontus Johansson**  
