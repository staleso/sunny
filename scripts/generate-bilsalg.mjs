import Anthropic from '@anthropic-ai/sdk';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');

const MONTH_NAMES = [
    'januar', 'februar', 'mars', 'april', 'mai', 'juni',
    'juli', 'august', 'september', 'oktober', 'november', 'desember'
];

// Skriv om forrige måned (data er typisk klart innen den 15.)
const now = new Date();
const reportDate = new Date(now.getFullYear(), now.getMonth() - 1, 1);
const monthIndex = reportDate.getMonth();
const monthName = MONTH_NAMES[monthIndex];
const year = reportDate.getFullYear();
const monthNameCap = monthName.charAt(0).toUpperCase() + monthName.slice(1);
const filename = `bilsalg-${monthName}-${year}.html`;
const canonicalUrl = `https://elbilvalg.no/${filename}`;
const today = now.toISOString().split('T')[0];

const template = fs.readFileSync(path.join(ROOT, 'bilsalg-mars-2026.html'), 'utf8');

const client = new Anthropic();

async function generateArticle() {
    const response = await client.messages.create({
        model: 'claude-sonnet-4-6',
        max_tokens: 4096,
        system: [
            {
                type: 'text',
                text: `Du er redaktør for Elbilvalg.no, et norsk nettsted om elbiler. Oppgaven er å skrive en journalistisk artikkel om norsk bilsalgsstatistikk for ${monthNameCap} ${year}.

Regler:
- Bruk OFVs (Opplysningsrådet for veitrafikken) offisielle pressemeldinger som kilde. OFV publiserer på ofv.no/bilsalget/bilsalget-i-[måned]-[år].
- Skriv på norsk bokmål i journalistisk stil.
- Inkluder bare tall du faktisk finner via websøk. Ikke finn opp tall.
- Tydelig kildelenke til OFV i artikkelen.
- Returner KUN komplett, gyldig HTML-dokument. Ingen markdown, ingen forklaring utenfor HTML.`,
                cache_control: { type: 'ephemeral' }
            }
        ],
        tools: [{ type: 'web_search_20250305', name: 'web_search' }],
        messages: [
            {
                role: 'user',
                content: `Søk etter bilsalgsstatistikk for ${monthNameCap} ${year} i Norge fra OFV eller norske nyhetsmedier. Finn: totalt antall nye personbiler, elbil-andel i prosent, Tesla-andel, og de mest registrerte modellene med antall.

Lag deretter en komplett HTML-artikkel med:
- Filnavn: ${filename}
- Canonical URL: ${canonicalUrl}
- Publisert dato: ${today}

Bruk denne malen som utgangspunkt for HTML-struktur, CSS-klasser og stil. Bytt ut alt innhold med faktiske tall for ${monthNameCap} ${year}:

${template}`
            }
        ]
    });

    let html = '';
    for (const block of response.content) {
        if (block.type === 'text') html += block.text;
    }

    // Strip eventuelle markdown-kodeblokkmarkører
    html = html.replace(/^```html\s*/i, '').replace(/\s*```$/, '').trim();

    if (!html.startsWith('<!DOCTYPE') && !html.startsWith('<html')) {
        throw new Error('Generert innhold ser ikke ut som gyldig HTML');
    }

    return html;
}

function buildArticleCard(ingress) {
    return `<a href="/${filename}" class="article-card">
                        <p class="article-card-category">Bilsalg</p>
                        <h3 class="article-card-title">Bilsalget i ${monthNameCap} ${year}</h3>
                        <p class="article-card-ingress">${ingress}</p>
                        <span class="article-card-link">Les artikkelen →</span>
                    </a>`;
}

function updateIndexHtml(articleCard) {
    const indexPath = path.join(ROOT, 'index.html');
    let index = fs.readFileSync(indexPath, 'utf8');

    // Fjern eksisterende bilsalg-kort
    index = index.replace(
        /<a href="\/bilsalg-[^"]+\.html" class="article-card">[\s\S]*?<\/a>/g,
        ''
    );

    // Sett inn nytt kort først i articles-grid
    index = index.replace(
        /(<div class="articles-grid">)/,
        `$1\n                    ${articleCard}`
    );

    fs.writeFileSync(indexPath, index);
}

function updateSitemap() {
    const sitemapPath = path.join(ROOT, 'sitemap.xml');
    let sitemap = fs.readFileSync(sitemapPath, 'utf8');

    // Fjern gamle bilsalg-oppføringer
    sitemap = sitemap.replace(
        /\s*<url>\s*<loc>https:\/\/elbilvalg\.no\/bilsalg-[^<]+<\/loc>[\s\S]*?<\/url>/g,
        ''
    );

    const newEntry = `\n  <url>\n    <loc>${canonicalUrl}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>0.7</priority>\n  </url>`;
    sitemap = sitemap.replace('</urlset>', `${newEntry}\n</urlset>`);

    fs.writeFileSync(sitemapPath, sitemap);
}

// Trekk ut ingress fra generert HTML for å bruke i artikkelkortet
function extractIngress(html) {
    const match = html.match(/<p class="article-lead">([\s\S]*?)<\/p>/);
    if (match) {
        return match[1].replace(/<[^>]+>/g, '').substring(0, 160).trim();
    }
    return `Oppdatert statistikk over nybilsalget i Norge – hvilke modeller solgte mest og hva er elbil-andelen?`;
}

try {
    console.log(`Genererer artikkel for ${monthNameCap} ${year}...`);

    const html = await generateArticle();

    fs.writeFileSync(path.join(ROOT, filename), html);
    console.log(`✓ Artikkel lagret: ${filename}`);

    const ingress = extractIngress(html);
    const articleCard = buildArticleCard(ingress);
    updateIndexHtml(articleCard);
    console.log('✓ index.html oppdatert');

    updateSitemap();
    console.log('✓ sitemap.xml oppdatert');

    console.log(`\nFerdig: ${canonicalUrl}`);
} catch (err) {
    console.error('Feil under generering:', err.message);
    process.exit(1);
}
