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

## Nyhetsforside (AI)

Forsiden (`/` og `/en/`) er nyhetsdrevet. Sammenligningen ligger på `/sammenlign.html` (`/en/compare.html`).

- `data/articles.json` – alle artikler (nyeste først). Forsiden, artikkellistene og sitemap bygges fra denne.
- `node scripts/build-news.mjs` – bygger forsiden på nytt (f.eks. etter manuell endring i JSON-filen).
- `node scripts/generate-news.mjs` – lar Claude søke etter dagens elbilnyhet, skrive en sak med kilder og publisere den. Krever `ANTHROPIC_API_KEY`. `DRY_RUN=1` skriver ut uten å lagre.
- `.github/workflows/daily-news.yml` – kjører generatoren to ganger daglig og deployer. Kan også startes manuelt under Actions.
- `node scripts/fetch-images.mjs` – henter fritt lisensierte bilder (CC0/CC BY/CC BY-SA/public domain) fra Wikimedia Commons til artikler som mangler bilde, lagrer dem i `img/news/` med kreditering. Kjøres automatisk i workflowene.
