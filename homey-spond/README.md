# Spond for Homey

Henter kommende Spond-arrangementer (neste 14 dager, hvert 5. minutt) og gjør dem tilgjengelige i Flows.

## Flow-kort
- **Når:** Et arrangement starter innen X minutter · Et nytt arrangement er lagt til
  (tokens: tittel, gruppe, start, sted, beskrivelse)
- **Og:** Det er et arrangement i dag · Det er et arrangement innen X timer
- **Så:** Oppdater Spond-arrangementer

## Installere
```bash
npm install -g homey
cd homey-spond
homey login
homey app install
```
Gå så til appens innstillinger i Homey og skriv inn Spond e-post og passord.

Merk: Spond har ikke et offisielt API – appen bruker samme API som Spond-appen, og kan slutte å virke hvis Spond endrer det.
