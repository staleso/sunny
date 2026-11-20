// Skriver én (eller flere) nye AI-nyhetsartikler om elbil i Norge og bygger
// forsiden på nytt. Kjøres av .github/workflows/daily-news.yml.
//
//   ANTHROPIC_API_KEY=... node scripts/generate-news.mjs
//   ARTICLES_PER_RUN=2 node scripts/generate-news.mjs
//   DRY_RUN=1 node scripts/generate-news.mjs   (skriver ikke filer)
import Anthropic from '@anthropic-ai/sdk';
import fs from 'fs';
import path from 'path';
import { ROOT, loadArticles, saveArticles, buildAll, renderArticlePage } from './news-lib.mjs';
import { findImage, insertHero } from './images.mjs';

// Sonnet 5.5 gir god kvalitet til lav pris. Kan overstyres med NEWS_MODEL.
const MODEL = process.env.NEWS_MODEL || 'claude-sonnet-5-5';
const PER_RUN = Math.max(1, Math.min(3, Number(process.env.ARTICLES_PER_RUN || 1)));
const DRY_RUN = !!process.env.DRY_RUN;

const CATEGORIES = ['Nyheter', 'Bilsalg', 'Priser', 'Nye modeller', 'Lading', 'Politikk', 'Test', 'Teknologi', 'Bruktbil', 'Guide'];

const SCHEMA = {
    type: 'object',
    additionalProperties: false,
    required: ['slug', 'title', 'ingress', 'meta_description', 'category', 'image_query', 'sections', 'sources'],
    properties: {
        slug: { type: 'string', description: 'URL-slug med små bokstaver a-z, 0-9 og bindestrek, uten æøå. Maks 70 tegn.' },
        title: { type: 'string', description: 'Journalistisk tittel, maks 90 tegn.' },
        ingress: { type: 'string', description: 'Ingress på 1–2 setninger, maks 260 tegn.' },
        meta_description: { type: 'string', description: 'SEO-beskrivelse, maks 160 tegn.' },
        category: { type: 'string', enum: CATEGORIES },
        image_query: { type: 'string', description: 'Kort engelsk søk etter et bilde på Wikimedia Commons som passer saken, helst merke og modell (f.eks. "Volkswagen ID.4" eller "Tesla Supercharger"). Maks 4 ord.' },
        sections: {
            type: 'array',
            description: '3–5 seksjoner med mellomtittel og 1–4 avsnitt ren tekst (ingen HTML/markdown).',
            items: {
                type: 'object',
                additionalProperties: false,
                required: ['heading', 'paragraphs'],
                properties: {
                    heading: { type: 'string' },
                    paragraphs: { type: 'array', items: { type: 'string' } },
                },
            },
        },
        sources: {
            type: 'array',
            description: 'Kildene saken bygger på – faktiske URL-er fra websøket.',
            items: {
                type: 'object',
                additionalProperties: false,
                required: ['title', 'url'],
                properties: { title: { type: 'string' }, url: { type: 'string' } },
            },
        },
    },
};

const SYSTEM = `Du er nyhetsjournalist i AI-redaksjonen til Elbilvalg.no, et uavhengig norsk nettsted om elbiler.

Oppgave: finn én aktuell, nyhetsverdig sak om elbil som er relevant for norske lesere, og skriv den.

Regler:
- Bruk websøk. Saken skal bygge på hendelser fra de siste 7 dagene, helst norske kilder (OFV, Elbilforeningen, NAF, Statens vegvesen, regjeringen.no, importører, E24, DN, TU, Motor, Elbil24, NRK) eller større internasjonale kilder når nyheten treffer Norge.
- Ta bare med tall, priser, datoer og sitater du faktisk har funnet i kildene. Ikke dikt opp noe. Er du usikker, la det være ute.
- Ikke skriv om en sak som allerede er dekket (se listen over publiserte titler).
- Skriv på norsk bokmål, nøkternt og journalistisk. 350–650 ord. Forklar hva nyheten betyr for en som vurderer elbil.
- Ingen reklame og ingen anbefaling av forhandlere.
- sources skal inneholde 1–5 lenker du faktisk har brukt.
- Vær presis og forsiktig med avgifter, priser og regler. Skriv aldri «momsfri», «helt momsfritt», «avgiftsfri» eller lignende absolutte påstander. Skriv heller hva regelen faktisk er (f.eks. «det betales ikke mva. av de første 300 000 kronene for nye elbiler registrert i 2026»).
- Skill tydelig mellom vedtatte regler og forslag. Forslag skal omtales som forslag («regjeringen har foreslått …», «hvis forslaget vedtas …»), aldri som noe som skjer.
- Oppgi ikke eksakte bilpriser som fakta. Bruk «fra-pris ifølge importøren» med kilde, og nevn at priser kan endres.
- Ikke gi råd som kan oppfattes som garanterte besparelser; bruk «kan» og forklar forutsetningene.
- Unngå bastante og vurderende påstander som «best», «raskest», «billigst», «alltid», «aldri», «rekord» eller «blant de beste i klassen», med mindre en navngitt kilde sier det – og da skal kilden nevnes («ifølge OFV …»). Produsentens tall (rekkevidde, ladetid, effekt) skal omtales som oppgitte tall («produsenten oppgir …»).`;

const client = new Anthropic();

async function writeArticle(publishedTitles, today) {
    const messages = [{
        role: 'user',
        content: `Dagens dato er ${today}.\n\nAllerede publiserte titler (ikke gjenta disse sakene):\n${publishedTitles.map(t => `- ${t}`).join('\n')}\n\nFinn og skriv dagens sak.`,
    }];

    // Server-verktøy (websøk) kan pause en lang tur; fortsett til modellen er ferdig.
    for (let i = 0; i < 5; i++) {
        const response = await client.beta.messages.create({
            model: MODEL,
            max_tokens: 16000,
            betas: ['server-side-fallback-2026-07-01'],
            fallbacks: 'default',
            system: SYSTEM,
            output_config: { effort: 'medium', format: { type: 'json_schema', schema: SCHEMA } },
            tools: [{ type: 'web_search_20260209', name: 'web_search', max_uses: 5, user_location: { type: 'approximate', country: 'NO' } }],
            messages,
        });

        if (response.stop_reason === 'pause_turn') {
            messages.push({ role: 'assistant', content: response.content });
            continue;
        }
        if (response.stop_reason === 'refusal') throw new Error(`Modellen avslo: ${response.stop_details?.category ?? 'ukjent'}`);
        if (response.stop_reason === 'max_tokens') throw new Error('Svaret ble avkuttet (max_tokens)');

        const text = response.content.filter(b => b.type === 'text').map(b => b.text).join('');
        return JSON.parse(text);
    }
    throw new Error('Modellen ble ikke ferdig etter flere pauser');
}

function validate(a) {
    const problems = [];
    if (!a.title || a.title.length > 140) problems.push('tittel');
    if (!a.ingress) problems.push('ingress');
    if (!Array.isArray(a.sections) || a.sections.length < 2) problems.push('for få seksjoner');
    const urls = (a.sources || []).filter(s => /^https?:\/\/[^\s"<>]+$/.test(s.url));
    if (!urls.length) problems.push('mangler kilder');
    a.sources = urls;
    if (problems.length) throw new Error(`Ugyldig artikkel: ${problems.join(', ')}`);
}

function uniqueSlug(raw, today) {
    let slug = String(raw || '').toLowerCase()
        .replace(/æ/g, 'ae').replace(/ø/g, 'o').replace(/å/g, 'a')
        .replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '').slice(0, 70).replace(/-+$/, '');
    if (!slug) slug = `nyhet-${today}`;
    let candidate = slug, n = 2;
    while (fs.existsSync(path.join(ROOT, `${candidate}.html`))) candidate = `${slug}-${n++}`;
    return candidate;
}

const today = new Date().toISOString().slice(0, 10);
const time = new Date().toISOString().slice(11, 16);
const articles = loadArticles();

// Planlagte kjøringer har en reservetid. Er dagens sak allerede skrevet, gjør vi ingenting.
if (process.env.SKIP_IF_PUBLISHED_TODAY && articles.some(a => a.lang === 'nb' && a.date === today && a.time)) {
    console.log('Dagens sak er allerede publisert – hopper over.');
    process.exit(0);
}

try {
    for (let i = 0; i < PER_RUN; i++) {
        const published = articles.filter(a => a.lang === 'nb').slice(0, 60).map(a => a.title);
        console.log(`Skriver sak ${i + 1}/${PER_RUN} …`);
        const a = await writeArticle(published, today);
        validate(a);
        const slug = uniqueSlug(a.slug, today);

        const html = renderArticlePage({
            slug, title: a.title, ingress: a.ingress, description: a.meta_description || a.ingress,
            category: a.category, date: today, sections: a.sections, sources: a.sources,
        });

        if (DRY_RUN) {
            console.log(JSON.stringify({ slug, ...a }, null, 2));
            continue;
        }
        fs.writeFileSync(path.join(ROOT, `${slug}.html`), html);
        const entry = { lang: 'nb', url: `/${slug}.html`, title: a.title, ingress: a.ingress, category: a.category, date: today, time, ai: true, image_query: a.image_query };
        try {
            const img = await findImage(a.image_query);
            if (img) { entry.image = img; insertHero(entry.url, img, 'nb'); }
        } catch (err) {
            console.log(`! Bilde: ${err.message}`);
        }
        articles.push(entry);
        saveArticles(articles);
        console.log(`✓ ${slug}.html – ${a.title}`);
    }
    if (!DRY_RUN) {
        buildAll();
        console.log('✓ Forside, artikkelliste og sitemap oppdatert');
    }
} catch (err) {
    console.error('Feil under generering:', err.message);
    process.exit(1);
}
