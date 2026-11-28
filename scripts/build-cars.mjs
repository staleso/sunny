// Bygger statiske, søkbare bilsider (/elbil/<slug>.html) og datadrevne
// oversikter (/elbiler/...) fra bildataene i app.js.
// Kjør: node scripts/build-cars.mjs   (kjøres også av build-news.mjs)
import fs from 'fs';
import path from 'path';
import vm from 'vm';
import { ROOT, esc, pageShell } from './news-lib.mjs';

// ---------- Les bildata fra app.js ----------
export function loadCarData() {
    const src = fs.readFileSync(path.join(ROOT, 'app.js'), 'utf8');
    const cut = (start, end) => {
        const a = src.indexOf(start);
        const b = src.indexOf(end, a);
        if (a < 0 || b < 0) throw new Error(`Fant ikke ${start} i app.js`);
        return src.slice(a, b);
    };
    const code = [
        src.slice(0, src.indexOf('const state = {')),
        cut('const PRICE_BANDS = [', 'var selectedBand'),
        cut('function carSlug(car) {', 'function getCachedCarImage'),
        'this.out = { CARS, PRICE_BANDS, getPriceBand, carSlug, getChargeSpeed, getChargeTime10to80, getWinterRange, getCarDescription, getCarCountry, BRAND_SOURCES };',
    ].join('\n');
    const ctx = { window: {}, document: undefined };
    vm.runInNewContext(code, ctx);
    return ctx.out;
}

const D = loadCarData();
const today = new Date().toISOString().slice(0, 10);
const fmt = n => Number(n).toLocaleString('nb-NO');
const carUrl = car => `/elbil/${D.carSlug(car)}.html`;
const name = car => `${car.make} ${car.model}`;
const isCurrent = car => car.year >= 2025;
const TYPE_NB = { suv: 'SUV', sedan: 'Sedan', hatchback: 'Kombikupé', wagon: 'Stasjonsvogn', van: 'Flerbruksbil' };
const DRIVE_NB = { AWD: 'Firehjulsdrift (AWD)', RWD: 'Bakhjulsdrift (RWD)', FWD: 'Forhjulsdrift (FWD)' };

function bandLabel(car) { return isCurrent(car) ? D.getPriceBand(car).label : 'Eldre modell'; }

function miniCard(car) {
    return `<a class="mini-car" href="${carUrl(car)}">
                    <strong>${esc(name(car))}</strong>
                    <span>${esc(TYPE_NB[car.type] || car.type)} · ${fmt(car.range)} km · ${esc(car.drivetrain)}</span>
                    <span class="band-pill">${esc(bandLabel(car))}</span>
                </a>`;
}

function specRows(car) {
    const explicitCharge = typeof car.chargeSpeed === 'number';
    const rows = [
        ['Prisklasse', bandLabel(car), 'Basert på importørens fra-pris. Sjekk dagens pris hos forhandler.'],
        ['Rekkevidde (WLTP)', `${fmt(car.range)} km`, 'Oppgitt av produsenten'],
        ['Rekkevidde om vinteren', `ca. ${fmt(D.getWinterRange(car))} km`, 'Vårt anslag – faktisk rekkevidde varierer'],
        ['Batteri', `${String(car.kwh).replace('.', ',')} kWh`, ''],
        ['Hurtiglading (DC)', `${explicitCharge ? '' : 'ca. '}${D.getChargeSpeed(car)} kW`, explicitCharge ? 'Oppgitt maks ladeeffekt' : 'Vårt anslag'],
        ['Effekt', `${fmt(car.hp)} hk`, ''],
        ['0–100 km/t', `${String(car.zeroToHundred).replace('.', ',')} s`, ''],
        ['Drift', DRIVE_NB[car.drivetrain] || car.drivetrain, ''],
        ['Seter', String(car.seats), ''],
        ['Bagasjerom', car.trunk ? `${fmt(car.trunk)} liter` : '–', ''],
        ['Lengde × bredde × høyde', `${fmt(car.length)} × ${fmt(car.width)} × ${fmt(car.height)} mm`, ''],
        ['Vekt', car.weight ? `ca. ${fmt(car.weight)} kg` : '–', ''],
        ['Karosseri', `${TYPE_NB[car.type] || car.type} · ${car.segment}`, ''],
        ['Opprinnelsesland (merke)', D.getCarCountry(car) || '–', ''],
    ];
    return rows.map(([k, v, n]) => `<tr><th scope="row">${esc(k)}</th><td>${esc(v)}${n ? `<small>${esc(n)}</small>` : ''}</td></tr>`).join('\n                    ');
}

function similar(car) {
    const band = D.getPriceBand(car);
    const pool = D.CARS.filter(c => c.id !== car.id && isCurrent(c));
    const sameBand = pool.filter(c => D.getPriceBand(c) === band && c.type === car.type);
    const rest = pool.filter(c => D.getPriceBand(c) === band && c.type !== car.type);
    const byRange = (a, b) => Math.abs(a.range - car.range) - Math.abs(b.range - car.range);
    return [...sameBand.sort(byRange), ...rest.sort(byRange)].slice(0, 6);
}

function carPage(car) {
    const desc = D.getCarDescription(car);
    const cleanDesc = desc ? desc.replace(/\s*\(Tekst: AI-generert\)\s*$/, '') : '';
    const src = D.BRAND_SOURCES[car.make];
    const sims = isCurrent(car) ? similar(car) : D.CARS.filter(c => c.id !== car.id && c.make === car.make && isCurrent(c)).slice(0, 6);
    const title = `${name(car)} – rekkevidde, batteri og nøkkeltall | Elbilvalg.no`;
    const description = `${name(car)} (${car.year}): ${fmt(car.range)} km oppgitt rekkevidde (WLTP), ${String(car.kwh).replace('.', ',')} kWh batteri, ${fmt(car.hp)} hk og ${car.seats} seter. Prisklasse: ${bandLabel(car)}.`;
    const body = `        <nav class="crumbs" aria-label="Brødsmulesti"><a href="/sammenlign.html">Biler</a> › <a href="/elbiler/">Alle elbiler</a> › <span>${esc(name(car))}</span></nav>
        <article class="car-article">
            <header class="car-head">
                <p class="car-kicker">${esc(car.make)} · ${car.year}${isCurrent(car) ? '' : ' · selges ikke ny lenger'}</p>
                <h1>${esc(name(car))}</h1>
                <p class="car-lead">${esc(`${TYPE_NB[car.type] || car.type} med ${fmt(car.range)} km oppgitt rekkevidde, ${String(car.kwh).replace('.', ',')} kWh batteri og ${car.drivetrain}.`)}</p>
                <div class="car-facts-big">
                    <div><strong>${fmt(car.range)}</strong><span>km WLTP</span></div>
                    <div><strong>${String(car.kwh).replace('.', ',')}</strong><span>kWh</span></div>
                    <div><strong>${fmt(car.hp)}</strong><span>hk</span></div>
                    <div><strong>${car.seats}</strong><span>seter</span></div>
                </div>
                <p class="car-band"><span class="band-pill">${esc(bandLabel(car))}</span>${src ? ` <a href="${esc(src.url)}" rel="noopener" target="_blank">Se dagens pris hos ${esc(src.name)} →</a>` : ''}</p>
            </header>

            <section>
                <h2>Nøkkeltall</h2>
                <table class="spec-table">
                    ${specRows(car)}
                </table>
                <p class="spec-note">Tallene er hentet fra produsentens og importørens oppgitte data der det finnes. Felter merket «anslag» er våre egne beregninger. Utstyrsnivå, hjul og temperatur påvirker tallene.</p>
            </section>

            ${cleanDesc ? `<section>
                <h2>Om ${esc(name(car))}</h2>
                <p>${esc(cleanDesc)}</p>
                <p class="ai-inline"><span class="ai-label">AI-skrevet</span> Beskrivelsen er laget med hjelp av kunstig intelligens.</p>
            </section>` : ''}

            ${sims.length ? `<section>
                <h2>${isCurrent(car) ? 'Alternativer i samme prisklasse' : `Nye modeller fra ${esc(car.make)}`}</h2>
                <div class="mini-grid">
                ${sims.map(miniCard).join('\n                ')}
                </div>
            </section>` : ''}

            <section class="car-cta">
                <a class="btn-primary" href="/sammenlign.html">Sammenlign med andre elbiler</a>
                <a class="btn-ghost" href="/kalkulator.html">Regn på totalkostnad</a>
            </section>
            <p class="spec-note">Sist oppdatert ${today}. Fant du en feil? <a href="mailto:kontakt@elbilvalg.no">Si fra</a>.</p>
        </article>`;
    const jsonld = {
        '@context': 'https://schema.org', '@type': 'Car', name: name(car), brand: { '@type': 'Brand', name: car.make },
        modelDate: String(car.year), vehicleSeatingCapacity: car.seats, bodyType: TYPE_NB[car.type] || car.type,
        driveWheelConfiguration: car.drivetrain, fuelType: 'Electric', url: `https://elbilvalg.no${carUrl(car)}`,
    };
    return pageShell({ path: carUrl(car), title, description, body, jsonld, ogType: 'article' });
}

// ---------- Oversikter ----------
const current = D.CARS.filter(isCurrent);
const LISTS = [
    {
        slug: 'lengst-rekkevidde-per-prisklasse', title: 'Elbiler med lengst rekkevidde i hver prisklasse',
        lead: 'De fem modellene med lengst oppgitt rekkevidde (WLTP) i hver prisklasse, basert på våre data. Faktisk rekkevidde er lavere, særlig om vinteren.',
        groups: () => D.PRICE_BANDS.map(b => ({ heading: `${b.name} (${b.label})`, cars: current.filter(c => D.getPriceBand(c) === b).sort((a, z) => z.range - a.range).slice(0, 5) })),
        col: c => `${fmt(c.range)} km`,
    },
    {
        slug: 'elbiler-med-7-seter', title: 'Elbiler med 7 seter',
        lead: 'Modeller i oversikten vår som kan leveres med sju seter. Den tredje seteraden passer ofte best for barn – sjekk plassen selv ved prøvekjøring.',
        groups: () => [{ heading: 'Sortert etter prisklasse', cars: current.filter(c => c.seats >= 7).sort((a, z) => a.price - z.price) }],
        col: c => `${c.seats} seter`,
    },
    {
        slug: 'elbiler-med-firehjulsdrift-under-500000', title: 'Elbiler med firehjulsdrift under 500 000 kroner',
        lead: 'Firehjulsdrevne elbiler i prisklassene under 500 000 kroner, sortert etter oppgitt rekkevidde. Plasseringen bygger på importørenes fra-priser, og firehjulsdrift kan koste ekstra.',
        groups: () => [{ heading: 'Sortert etter rekkevidde', cars: current.filter(c => c.drivetrain === 'AWD' && c.price < 500000).sort((a, z) => z.range - a.range) }],
        col: c => `${fmt(c.range)} km`,
    },
    {
        slug: 'rimelige-elbiler-under-300000', title: 'Rimelige elbiler med fra-pris under 300 000 kroner',
        lead: 'Nye elbiler som importørene oppgir fra-priser under 300 000 kroner for. Prisene endres ofte, så sjekk dagens pris hos forhandler.',
        groups: () => [{ heading: 'Sortert etter rekkevidde', cars: current.filter(c => c.price < 300000).sort((a, z) => z.range - a.range) }],
        col: c => `${fmt(c.range)} km`,
    },
    {
        slug: 'storst-bagasjerom', title: 'Elbiler med størst bagasjerom',
        lead: 'De 15 modellene med størst oppgitt bagasjerom (bak, uten nedfelte seter) i våre data. Produsentene måler ikke alltid likt, så se bilen selv før du bestemmer deg.',
        groups: () => [{ heading: 'Sortert etter bagasjerom', cars: current.filter(c => c.trunk).sort((a, z) => z.trunk - a.trunk).slice(0, 15) }],
        col: c => `${fmt(c.trunk)} liter`,
    },
];

function listPage(l) {
    const groups = l.groups().filter(g => g.cars.length);
    const body = `        <nav class="crumbs" aria-label="Brødsmulesti"><a href="/sammenlign.html">Biler</a> › <a href="/elbiler/">Alle elbiler</a> › <span>${esc(l.title)}</span></nav>
        <article class="car-article">
            <header class="car-head">
                <p class="car-kicker">Oversikt · oppdatert ${today}</p>
                <h1>${esc(l.title)}</h1>
                <p class="car-lead">${esc(l.lead)}</p>
            </header>
            ${groups.map(g => `<section>
                <h2>${esc(g.heading)}</h2>
                <ol class="rank-list">
                    ${g.cars.map(c => `<li><a href="${carUrl(c)}"><strong>${esc(name(c))}</strong><span>${esc(TYPE_NB[c.type] || c.type)} · ${esc(c.drivetrain)} · ${esc(bandLabel(c))}</span></a><em>${esc(l.col(c))}</em></li>`).join('\n                    ')}
                </ol>
            </section>`).join('\n            ')}
            <p class="spec-note">Listen er laget automatisk fra bildataene på Elbilvalg.no og omfatter bare modeller vi har i oversikten. Tallene er produsentens oppgitte verdier.</p>
            <section class="car-cta"><a class="btn-primary" href="/elbiler/">Se alle oversikter</a></section>
        </article>`;
    return pageShell({ path: `/elbiler/${l.slug}.html`, title: `${l.title} | Elbilvalg.no`, description: l.lead, body });
}

function hubPage() {
    const makes = [...new Set(D.CARS.map(c => c.make))].sort((a, b) => a.localeCompare(b, 'nb'));
    const body = `        <nav class="crumbs" aria-label="Brødsmulesti"><a href="/sammenlign.html">Biler</a> › <span>Alle elbiler</span></nav>
        <article class="car-article">
            <header class="car-head">
                <p class="car-kicker">${current.length} modeller i salg · ${D.CARS.length - current.length} eldre modeller</p>
                <h1>Alle elbiler i oversikten</h1>
                <p class="car-lead">Nøkkeltall for hver modell: rekkevidde, batteri, lading, plass og prisklasse. Velg en bil for å se detaljer og alternativer i samme prisklasse.</p>
            </header>
            <section>
                <h2>Oversikter</h2>
                <div class="mini-grid">
                ${LISTS.map(l => `<a class="mini-car" href="/elbiler/${l.slug}.html"><strong>${esc(l.title)}</strong><span>${esc(l.lead.split('. ')[0])}.</span></a>`).join('\n                ')}
                </div>
            </section>
            ${makes.map(m => `<section class="make-block">
                <h2>${esc(m)}</h2>
                <ul class="make-list">
                    ${D.CARS.filter(c => c.make === m).sort((a, b) => a.model.localeCompare(b.model, 'nb')).map(c => `<li><a href="${carUrl(c)}">${esc(c.model)}</a> <span>${esc(bandLabel(c))}</span></li>`).join('\n                    ')}
                </ul>
            </section>`).join('\n            ')}
        </article>`;
    return pageShell({ path: '/elbiler/', title: 'Alle elbiler – nøkkeltall og prisklasser | Elbilvalg.no', description: `Oversikt over ${current.length} elbiler i salg i Norge med rekkevidde, batteri, lading og prisklasse.`, body });
}

function updateSitemap(urls) {
    const p = path.join(ROOT, 'sitemap.xml');
    let s = fs.readFileSync(p, 'utf8');
    s = s.replace(/\s*<url>\s*<loc>https:\/\/elbilvalg\.no\/elbiler?\/[^<]*<\/loc>[\s\S]*?<\/url>/g, '');
    const entries = urls.map(u => `  <url>\n    <loc>https://elbilvalg.no${u}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>${u.startsWith('/elbiler') ? '0.8' : '0.6'}</priority>\n  </url>`).join('\n');
    s = s.replace('</urlset>', `${entries}\n</urlset>`);
    fs.writeFileSync(p, s);
}

export function buildCars() {
    const carDir = path.join(ROOT, 'elbil');
    const listDir = path.join(ROOT, 'elbiler');
    fs.rmSync(carDir, { recursive: true, force: true });
    fs.rmSync(listDir, { recursive: true, force: true });
    fs.mkdirSync(carDir, { recursive: true });
    fs.mkdirSync(listDir, { recursive: true });
    const urls = ['/elbiler/'];
    for (const car of D.CARS) {
        fs.writeFileSync(path.join(ROOT, carUrl(car).slice(1)), carPage(car));
        urls.push(carUrl(car));
    }
    for (const l of LISTS) {
        fs.writeFileSync(path.join(listDir, `${l.slug}.html`), listPage(l));
        urls.push(`/elbiler/${l.slug}.html`);
    }
    fs.writeFileSync(path.join(listDir, 'index.html'), hubPage());
    updateSitemap(urls);
    return urls.length;
}

if (import.meta.url === `file://${process.argv[1]}`) {
    console.log(`✓ ${buildCars()} bil- og oversiktssider bygget`);
}
