// Finner bilder (Wikimedia Commons) til artikler som mangler bilde, legger dem
// inn i artikkelsidene og bygger forsiden på nytt. Feil på enkeltbilder stopper ikke kjøringen.
import { loadArticles, saveArticles, buildAll } from './news-lib.mjs';
import { findImage, insertHero } from './images.mjs';

const articles = loadArticles();
let changed = 0;
for (const a of articles) {
    if (a.image || !a.image_query) continue;
    try {
        const img = await findImage(a.image_query);
        if (!img) { console.log(`– fant ikke bilde for «${a.image_query}»`); continue; }
        a.image = img;
        insertHero(a.url, img, a.lang);
        changed++;
        console.log(`✓ ${a.url} ← ${img.title} (${img.license})`);
    } catch (err) {
        console.log(`! ${a.url}: ${err.message}`);
    }
}
if (changed) saveArticles(articles);
buildAll();
console.log(`Ferdig: ${changed} nye bilder`);
