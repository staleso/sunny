// Bygger nyhetsforsiden (index.html, en/index.html), artikkellistene og sitemap
// fra data/articles.json. Kjør: node scripts/build-news.mjs
import { buildAll } from './news-lib.mjs';

const all = buildAll();
console.log(`✓ Forsider, artikkellister og sitemap bygget (${all.length} artikler)`);
