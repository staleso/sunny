# Car Comparison Application

## Features
- Compare different car models
- Filter cars based on specifications
- User-friendly interface
- Data visualization of car specs

## Setup Instructions
1. Clone the repository:
   ```bash
   git clone https://github.com/staleso/Cars.git
   ```
2. Navigate to the project directory:
   ```bash
   cd Cars
   ```
3. Install the necessary dependencies:
   ```bash
   npm install
   ```

## Usage Guide
- To start the application, run:
  ```bash
  npm start
  ```
- Access the application in your browser at **http://localhost:3000**.

## Contribution
If you want to contribute to this project, please send a pull request or create an issue for discussion.
## Daglige elbilnyheter

Hver morgen lager `scripts/daglige-nyheter/run.mjs` en side `nyheter/YYYY-MM-DD.html` med «Nytt i dag» (3–5 saker) og «Hva snakkes det om» (2–3 temaer). Workflowen `.github/workflows/daglige-nyheter.yml` åpner en pull request med siden. Du godkjenner og merger selv.

Slik fungerer det:
1. Henter RSS/Atom-feeds fra kildene i `scripts/daglige-nyheter/sources.json` og respekterer `robots.txt`. Kilder uten fungerende feed hoppes over. Artikkelsider hentes ikke, bare feedens tittel og ingress, så betalingsmurer omgås ikke.
2. Beholder saker fra de siste 36 timene som handler om elbil, lading, avgifter, nye modeller eller bilsalg, og som ikke er brukt før (`nyheter/state.json`).
3. Claude rangerer, slår sammen og skriver sakene med egne ord.
4. Faktakontrollen fjerner saker med tall som ikke står i kildene, tekst som er kopiert fra kildene og sitater som er på 15 ord eller mer, ikke står ordrett i kilden eller er nummer to fra samme kilde. Blir det for få saker igjen, lages ingen side, og jobben avsluttes uten feil.

### Kjøre lokalt

```bash
npm ci
export ANTHROPIC_API_KEY=...          # aldri i koden
npm run nyheter:kilder                # hvilke feeds virker?
npm run nyheter:dry-run               # skriver bare til .nyheter-dry-run/ og endrer ingenting
npm test                              # tester med testdata, uten nett og API
```

I GitHub kan du kjøre workflowen manuelt (Actions → Daglige elbilnyheter → Run workflow) med `run`, `dry-run` (forhåndsvisning som artefakt) eller `check-sources`.

### Legge til eller fjerne kilder

Rediger `sources` i `scripts/daglige-nyheter/sources.json`:

```json
{ "id": "nrk", "name": "NRK", "enabled": true, "keywordFilter": true,
  "feeds": ["https://www.nrk.no/toppsaker.rss"], "discoverFrom": [] }
```

- `feeds` prøves i rekkefølge. Ellers leter skriptet etter en RSS-lenke i `<head>` på sidene i `discoverFrom`.
- `keywordFilter: true` betyr at bare saker som inneholder ord fra `keywords` tas med. Bruk `false` for rene elbilkilder.
- `enabled: false` slår av en kilde.
- Andre innstillinger i samme fil: `model` (standard `claude-haiku-5-5`), `maxAgeHours`, `minStories`/`maxStories`, `minThemes`/`maxThemes` og `maxDailyCardsInArticles` (antall dagskort i artikler.html).

### Endre tone

Rediger `scripts/daglige-nyheter/tone.md`. Reglene for fakta, sitater og kilder ligger fast i `lib/writer.mjs` og håndheves i `lib/validate.mjs`, så de forsvinner ikke selv om du endrer tonen.

### Slå på cron og auto-merge

- **Cron:** fjern `#` foran `schedule:` og `- cron:` i `daglige-nyheter.yml`.
- **Auto-merge:** Settings → Secrets and variables → Actions → Variables → `AUTO_MERGE` = `true`. PR-en merges da automatisk og nettstedet deployes. Standard er `false`.
- Workflowen trenger `ANTHROPIC_API_KEY` under Secrets. Under Settings → Actions → General må «Allow GitHub Actions to create and approve pull requests» være slått på.

Merk: Saker fra forrige dag stoppes bare hvis den PR-en er merget, siden `state.json` oppdateres i PR-en.
