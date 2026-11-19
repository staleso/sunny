// Henter fritt lisensierte bilder fra Wikimedia Commons (CC0, CC BY, CC BY-SA,
// public domain), lagrer dem lokalt i img/news/ og gir kreditering tilbake.
// Bildene brukes med navngivelse slik lisensene krever.
import fs from 'fs';
import path from 'path';
import { ROOT, esc } from './news-lib.mjs';

const API = 'https://commons.wikimedia.org/w/api.php';
const UA = 'ElbilvalgBot/1.0 (https://elbilvalg.no; kontakt@elbilvalg.no)';
const IMG_DIR = path.join(ROOT, 'img', 'news');
const OK_LICENSE = /^(cc0|cc by(-sa)? \d(\.\d)?|cc-by(-sa)?-\d(\.\d)?|public domain|pd\b)/i;
const BAD_TITLE = /(interior|interieur|innenraum|cockpit|dashboard|logo|emblem|badge|wheel|felge|engine|motor\b|detail|seat|steering|rear\b|heck|map|diagram|\.svg)/i;

function stripHtml(s = '') {
    return s.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();
}

export function slugify(s) {
    return String(s).toLowerCase().replace(/æ/g, 'ae').replace(/ø/g, 'o').replace(/å/g, 'a')
        .replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '').slice(0, 60);
}

async function search(query) {
    const params = new URLSearchParams({
        action: 'query', format: 'json', generator: 'search', gsrnamespace: '6', gsrlimit: '25',
        gsrsearch: `filetype:bitmap ${query}`, prop: 'imageinfo',
        iiprop: 'url|extmetadata|size|mime', iiurlwidth: '1400', origin: '*',
    });
    const res = await fetch(`${API}?${params}`, { headers: { 'User-Agent': UA } });
    if (!res.ok) throw new Error(`Commons svarte ${res.status}`);
    const data = await res.json();
    return Object.values(data.query?.pages || {}).sort((a, b) => a.index - b.index);
}

// Modellnavn med tall (f.eks. «ID.4», «iX3») må stå i filnavnet, så vi ikke får feil modell.
function modelTokens(query) {
    return query.toLowerCase().split(/\s+/).filter(t => /\d/.test(t) && !/^(19|20)\d\d$/.test(t));
}

function pick(pages, query = '') {
    const must = modelTokens(query);
    for (const p of pages) {
        const name = p.title.toLowerCase().replace(/_/g, ' ');
        if (must.some(t => !name.includes(t))) continue;
        const ii = p.imageinfo?.[0];
        if (!ii || !/jpeg|png|webp/.test(ii.mime)) continue;
        const m = ii.extmetadata || {};
        const license = stripHtml(m.LicenseShortName?.value);
        if (!OK_LICENSE.test(license)) continue;
        if (BAD_TITLE.test(p.title)) continue;
        if (ii.width < 1200 || ii.width / ii.height < 1.3 || ii.width / ii.height > 2.2) continue;
        return {
            remote: ii.thumburl || ii.url,
            width: ii.thumbwidth || ii.width,
            height: ii.thumbheight || ii.height,
            author: stripHtml(m.Artist?.value) || 'Ukjent',
            license,
            licenseUrl: m.LicenseUrl?.value || '',
            source: ii.descriptionurl,
            title: p.title.replace(/^File:/, ''),
        };
    }
    return null;
}

// Finner og laster ned et bilde for søket. Returnerer metadata eller null.
export async function findImage(query) {
    const file = `${slugify(query)}.jpg`;
    const local = path.join(IMG_DIR, file);
    const metaFile = local.replace(/\.jpg$/, '.json');
    if (fs.existsSync(local) && fs.existsSync(metaFile)) return JSON.parse(fs.readFileSync(metaFile, 'utf8'));

    let hit = pick(await search(query), query);
    // Prøv et kortere søk (merke + modell) hvis første søk ga ingenting.
    if (!hit && query.split(' ').length > 2) hit = pick(await search(query.split(' ').slice(0, 2).join(' ')), query);
    if (!hit) return null;

    const res = await fetch(hit.remote, { headers: { 'User-Agent': UA } });
    if (!res.ok) throw new Error(`Nedlasting feilet ${res.status}`);
    fs.mkdirSync(IMG_DIR, { recursive: true });
    fs.writeFileSync(local, Buffer.from(await res.arrayBuffer()));
    const meta = {
        src: `/img/news/${file}`, width: hit.width, height: hit.height,
        author: hit.author, license: hit.license, licenseUrl: hit.licenseUrl, source: hit.source, title: hit.title,
    };
    fs.writeFileSync(metaFile, JSON.stringify(meta, null, 2) + '\n');
    return meta;
}

export function creditHtml(img, lang = 'nb') {
    if (!img) return '';
    const lic = img.licenseUrl ? `<a href="${esc(img.licenseUrl)}" rel="license noopener" target="_blank">${esc(img.license)}</a>` : esc(img.license);
    return `${lang === 'nb' ? 'Foto' : 'Photo'}: ${esc(img.author)} / ${lic} / <a href="${esc(img.source)}" rel="noopener" target="_blank">Wikimedia Commons</a>`;
}

// Setter inn et toppbilde i en artikkelside (idempotent).
export function insertHero(file, img, lang = 'nb') {
    const p = path.join(ROOT, file.replace(/^\//, ''));
    if (!fs.existsSync(p)) return false;
    let s = fs.readFileSync(p, 'utf8');
    const figure = `<figure class="article-hero">
                <img src="${esc(img.src)}" alt="${esc(img.title.replace(/\.[a-z]+$/i, '').replace(/_/g, ' '))}" width="${img.width}" height="${img.height}" fetchpriority="high">
                <figcaption>${creditHtml(img, lang)}</figcaption>
            </figure>`;
    if (s.includes('class="article-hero"')) {
        s = s.replace(/<figure class="article-hero">[\s\S]*?<\/figure>/, figure);
    } else if (/<p class="static-updated">[\s\S]*?<\/p>/.test(s)) {
        s = s.replace(/(<p class="static-updated">[\s\S]*?<\/p>)/, `$1\n\n            ${figure}`);
    } else {
        s = s.replace(/(<h1>[\s\S]*?<\/h1>)/, `$1\n\n            ${figure}`);
    }
    if (!s.includes('/news.css')) {
        s = s.replace(/(<link rel="stylesheet" href="[^"]*styles\.css[^"]*">)/, `$1\n    <link rel="stylesheet" href="/news.css?v=20261120">`);
    }
    fs.writeFileSync(p, s);
    return true;
}
