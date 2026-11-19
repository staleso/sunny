// Felles funksjoner for nyhetsforsiden: leser data/articles.json og bygger
// index.html, en/index.html, artikkellistene og sitemap.
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

export const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
export const DATA_FILE = path.join(ROOT, 'data', 'articles.json');
const CSS_VERSION = '20261120';

export function esc(s = '') {
    return String(s)
        .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');
}

export function loadArticles() {
    return JSON.parse(fs.readFileSync(DATA_FILE, 'utf8')).articles;
}

export function saveArticles(articles) {
    articles.sort((a, b) => (b.date + (b.time || '')).localeCompare(a.date + (a.time || '')));
    fs.writeFileSync(DATA_FILE, JSON.stringify({ articles }, null, 2) + '\n');
}

const MONTHS = {
    nb: ['januar', 'februar', 'mars', 'april', 'mai', 'juni', 'juli', 'august', 'september', 'oktober', 'november', 'desember'],
    en: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
};
const WEEKDAYS = {
    nb: ['søndag', 'mandag', 'tirsdag', 'onsdag', 'torsdag', 'fredag', 'lørdag'],
    en: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
};

export function formatDate(iso, lang, withWeekday = false) {
    const [y, m, d] = iso.split('-').map(Number);
    const date = new Date(Date.UTC(y, m - 1, d));
    const wd = WEEKDAYS[lang][date.getUTCDay()];
    const s = lang === 'nb' ? `${d}. ${MONTHS.nb[m - 1]} ${y}` : `${MONTHS.en[m - 1]} ${d}, ${y}`;
    return withWeekday ? `${wd} ${s}` : s;
}

// Kategori -> fargetone (stabil hash), brukes på typografiske "forsidebilder".
const HUES = [221, 162, 14, 268, 38, 192];
function hue(category) {
    let h = 0;
    for (const c of category.toLowerCase()) h = (h * 31 + c.charCodeAt(0)) >>> 0;
    return HUES[h % HUES.length];
}

const T = {
    nb: {
        htmlLang: 'no', locale: 'nb_NO', home: '/', compare: '/sammenlign.html', articles: '/artikler.html',
        title: 'Elbilvalg.no – Elbilnyheter fra Norge, oppdatert løpende',
        description: 'Siste nytt om elbil i Norge: bilsalg, priser, nye modeller og lading. Løpende oppdatert av AI-redaksjonen – pluss Norges enkleste elbil-sammenligning.',
        tagline: 'Elbilnyheter fra Norge — oppdatert løpende',
        heroTitle: 'Alt om elbil.<br>Hver dag.', live: 'Oppdateres løpende', credits: 'Bildekreditter', compareCta: 'Start sammenligningen',
        latest: 'Siste', river: 'Siste nytt', more: 'Flere saker', all: 'Alle artikler',
        tools: 'Verktøy', toolsLead: 'Finn riktig elbil for deg',
        byline: 'AI-redaksjonen', read: 'Les saken',
        aiNote: 'Sakene på denne siden er skrevet av kunstig intelligens basert på offentlige kilder, med kildelenker i hver artikkel. Fant du en feil? <a href="mailto:kontakt@elbilvalg.no">Si fra</a>.',
        aiLabel: 'AI-skrevet',
        toolList: [
            ['/sammenlign.html', 'Sammenlign elbiler', 'Pris, rekkevidde og ytelse for over 100 modeller side om side.'],
            ['/finn-din-elbil.html', 'Finn din elbil', 'Svar på noen spørsmål og få forslag tilpasset deg.'],
            ['/kalkulator.html', 'Kostnadskalkulator', 'Regn ut hva elbilen faktisk koster per måned.'],
            ['/tabell.html', 'Stor tabell', 'Alle spesifikasjoner i én sorterbar tabell.'],
        ],
        nav: [['/', 'Nyheter', true], ['/sammenlign.html', 'Biler'], ['/sammenlign.html#compare', 'Vs'], ['/finn-din-elbil.html', 'Quiz'], ['/kalkulator.html', 'Kalk'], ['/tabell.html', 'Tabell']],
        langSwitch: ['/en/', 'EN', 'English version'],
        theme: 'Bytt tema',
        footer: [['/om-oss.html', 'Om oss'], ['/personvern.html', 'Personvern'], ['/vilkaar.html', 'Vilkår']],
        cookieText: 'Vi bruker informasjonskapsler for analyse og annonser. Ved å klikke «Godta» samtykker du til bruk av informasjonskapsler.',
        cookieAccept: 'Godta', cookieDecline: 'Avslå', cookieChange: 'Endre cookie-valg',
    },
    en: {
        htmlLang: 'en', locale: 'en_GB', home: '/en/', compare: '/en/compare.html', articles: '/en/articles.html',
        title: 'Elbilvalg.no – Electric car news from Norway',
        description: 'The latest on electric cars in Norway: sales, prices, new models and charging – plus a simple EV comparison tool.',
        tagline: 'Electric car news from Norway',
        heroTitle: 'Everything EV.<br>Every day.', live: 'Updated continuously', credits: 'Image credits', compareCta: 'Start comparing',
        latest: 'Latest', river: 'Latest news', more: 'More stories', all: 'All articles',
        tools: 'Tools', toolsLead: 'Find the right EV for you',
        byline: 'AI newsroom', read: 'Read story',
        aiNote: 'Stories on this page are written by artificial intelligence based on public sources, with source links in every article. Spotted a mistake? <a href="mailto:kontakt@elbilvalg.no">Let us know</a>.',
        aiLabel: 'AI-written',
        toolList: [
            ['/en/compare.html', 'Compare EVs', 'Price, range and performance for 100+ models side by side.'],
            ['/en/quiz.html', 'Find your EV', 'Answer a few questions and get tailored suggestions.'],
            ['/en/calculator.html', 'Cost calculator', 'Work out what an EV really costs per month.'],
            ['/en/table.html', 'Big table', 'Every spec in one sortable table.'],
        ],
        nav: [['/en/', 'News', true], ['/en/compare.html', 'Cars'], ['/en/compare.html#compare', 'Vs'], ['/en/quiz.html', 'Quiz'], ['/en/calculator.html', 'Calc'], ['/en/table.html', 'Table']],
        langSwitch: ['/', 'NO', 'Norsk versjon'],
        theme: 'Toggle theme',
        footer: [['/om-oss.html', 'About'], ['/personvern.html', 'Privacy'], ['/vilkaar.html', 'Terms']],
        cookieText: 'We use cookies for analytics and ads. By clicking “Accept” you consent to the use of cookies.',
        cookieAccept: 'Accept', cookieDecline: 'Decline', cookieChange: 'Cookie settings',
    },
};

function media(a, cls, eager = false) {
    if (a.image) {
        return `<div class="${cls}"><img src="${esc(a.image.src)}" alt="" width="${a.image.width}" height="${a.image.height}"${eager ? ' fetchpriority="high"' : ' loading="lazy"'}></div>`;
    }
    return `<div class="${cls} nx-noimg" style="--h:${hue(a.category)}" aria-hidden="true"><span>${esc(a.category)}</span></div>`;
}

function meta(a, lang) {
    return `<span class="nx-meta"><span class="nx-pill" style="--h:${hue(a.category)}">${esc(a.category)}</span><time datetime="${a.date}">${formatDate(a.date, lang)}</time></span>`;
}

function card(a, lang, cls = 'nx-card') {
    return `<a href="${esc(a.url)}" class="${cls}">
                    ${media(a, 'nx-media')}
                    <div class="nx-card-body">
                        ${meta(a, lang)}
                        <h3>${esc(a.title)}</h3>
                        <p>${esc(a.ingress)}</p>
                    </div>
                </a>`;
}

const ICONS = [
    '<path d="M3 17h2l1-3h12l1 3h2M5 17v2M19 17v2M6 14l1.5-5h9L18 14"/><circle cx="8" cy="17" r="1"/><circle cx="16" cy="17" r="1"/>',
    '<circle cx="12" cy="12" r="9"/><path d="M9.5 9a2.5 2.5 0 1 1 3.5 2.3c-.6.3-1 .9-1 1.6V14M12 17h.01"/>',
    '<rect x="5" y="3" width="14" height="18" rx="2"/><path d="M8 7h8M8 11h2M12 11h2M16 11h0M8 15h2M12 15h2M8 18h2M12 18h2M16 15v3"/>',
    '<path d="M3 5h18M3 12h18M3 19h18M9 5v14M15 5v14"/>',
];

function head(t, lang) {
    const url = `https://elbilvalg.no${t.home}`;
    return `<!DOCTYPE html>
<html lang="${t.htmlLang}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">
    <meta name="theme-color" content="#f8f8fa">
    <script>
        (function() {
            var t = localStorage.getItem('theme');
            if (!t && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) t = 'dark';
            if (t === 'dark') {
                document.documentElement.setAttribute('data-theme', 'dark');
                var m = document.querySelector('meta[name="theme-color"]');
                if (m) m.content = '#16161e';
            }
        })();
    </script>
    <meta name="ai-content-declaration" content="${lang === 'nb' ? 'Nyhetsartiklene på denne siden er skrevet ved hjelp av kunstig intelligens.' : 'News articles on this page are written with the help of artificial intelligence.'}">
    <title>${esc(t.title)}</title>
    <meta name="description" content="${esc(t.description)}">
    <link rel="canonical" href="${url}">
    <link rel="alternate" hreflang="nb" href="https://elbilvalg.no/">
    <link rel="alternate" hreflang="en" href="https://elbilvalg.no/en/">
    <meta property="og:title" content="${esc(t.title)}">
    <meta property="og:description" content="${esc(t.description)}">
    <meta property="og:url" content="${url}">
    <meta property="og:type" content="website">
    <meta property="og:locale" content="${t.locale}">
    <link rel="manifest" href="/manifest.json">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Inter+Tight:wght@600;700;800&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="/styles.css?v=${CSS_VERSION}">
    <link rel="stylesheet" href="/news.css?v=${CSS_VERSION}">
    <meta name="google-adsense-account" content="ca-pub-4678480487049419">
    <script>if(localStorage.getItem('cookie-consent')==='accepted'){var _as=document.createElement('script');_as.async=true;_as.src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4678480487049419';_as.crossOrigin='anonymous';document.head.appendChild(_as);}</script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        if (localStorage.getItem('cookie-consent') === 'accepted') {
            var _ga = document.createElement('script'); _ga.async = true;
            _ga.src = 'https://www.googletagmanager.com/gtag/js?id=G-3TDS5SGX53';
            document.head.appendChild(_ga);
            gtag('consent', 'default', { analytics_storage: 'granted', ad_storage: 'granted', ad_personalization: 'granted', ad_user_data: 'granted' });
            gtag('js', new Date());
            gtag('config', 'G-3TDS5SGX53');
        }
    </script>
</head>`;
}

function header(t) {
    const nav = t.nav.map(([href, label, active]) =>
        `<a href="${href}" class="tab tab-link${active ? ' tab-current' : ''}"${active ? ' aria-current="page"' : ''}>${label}</a>`).join('\n            ');
    return `    <div class="sticky-top">
        <header class="app-header">
            <a href="${t.home}" class="brand" aria-label="Elbilvalg.no">Elbilvalg.no</a>
            <a href="${t.langSwitch[0]}" class="lang-switch" aria-label="${t.langSwitch[2]}">${t.langSwitch[1]}</a>
            <button class="theme-toggle" onclick="toggleTheme()" aria-label="${t.theme}">
                <svg class="icon-moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
                <svg class="icon-sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/></svg>
            </button>
        </header>
        <nav class="tab-bar">
            ${nav}
        </nav>
    </div>
    <script>
    function toggleTheme(){var d=document.documentElement,t=d.getAttribute('data-theme')==='dark'?'light':'dark';d.setAttribute('data-theme',t);localStorage.setItem('theme',t);var m=document.querySelector('meta[name="theme-color"]');if(m)m.content=t==='dark'?'#16161e':'#f8f8fa';}
    </script>`;
}

function footer(t) {
    const links = t.footer.map(([h, l]) => `<a href="${h}">${l}</a>`).join('\n            <span class="site-footer-sep">&middot;</span>\n            ');
    return `    <div id="cookie-consent" class="cookie-banner" style="display:none">
        <div class="cookie-text"><p>${esc(t.cookieText)}</p></div>
        <div class="cookie-buttons">
            <button onclick="setConsent('accepted')" class="cookie-btn cookie-accept">${t.cookieAccept}</button>
            <button onclick="setConsent('declined')" class="cookie-btn cookie-decline">${t.cookieDecline}</button>
        </div>
    </div>
    <script>
        function setConsent(v) {
            localStorage.setItem('cookie-consent', v);
            document.getElementById('cookie-consent').style.display = 'none';
            if (v === 'accepted') { location.reload(); }
            else { window['ga-disable-G-3TDS5SGX53'] = true; }
        }
        (function() {
            var c = localStorage.getItem('cookie-consent');
            if (!c) document.getElementById('cookie-consent').style.display = 'flex';
            else if (c === 'declined') window['ga-disable-G-3TDS5SGX53'] = true;
        })();
    </script>

    <footer class="site-footer">
        <nav class="site-footer-nav">
            ${links}
            <span class="site-footer-sep">&middot;</span>
            <a href="#" onclick="localStorage.removeItem('cookie-consent');document.getElementById('cookie-consent').style.display='flex';return false;">${t.cookieChange}</a>
            <span class="site-footer-sep">&middot;</span>
            <span class="site-footer-copy">Elbilvalg.no</span>
        </nav>
    </footer>
</body>
</html>
`;
}

export function renderFront(lang, all) {
    const t = T[lang];
    const list = all.filter(a => a.lang === lang);
    const [lead, ...rest] = list;
    const side = rest.slice(0, 2);
    const latest = rest.slice(2, 14);
    const today = new Date().toISOString().slice(0, 10);
    const shown = [lead, ...side, ...latest].filter(Boolean);
    const credits = [...new Map(shown.filter(a => a.image).map(a => [a.image.src, a.image])).values()];

    const ld = {
        '@context': 'https://schema.org', '@type': 'ItemList',
        itemListElement: list.slice(0, 10).map((a, i) => ({ '@type': 'ListItem', position: i + 1, url: `https://elbilvalg.no${a.url}`, name: a.title })),
    };
    const [tool0, ...tools] = t.toolList;

    return `${head(t, lang)}
<body class="nx">
${header(t)}

    <main class="nx-page">
        <section class="nx-intro">
            <p class="nx-kicker"><span class="nx-live" aria-hidden="true"></span>${t.live} · <time datetime="${today}">${formatDate(today, lang, true)}</time></p>
            <h1>${t.heroTitle}</h1>
            <p class="nx-sub">${esc(t.tagline)}</p>
        </section>

<!-- NEWS:START (generert av scripts/build-news.mjs – ikke rediger for hånd) -->
        <section class="nx-hero">
            ${lead ? `<a href="${esc(lead.url)}" class="nx-lead">
                ${media(lead, 'nx-lead-media', true)}
                <div class="nx-lead-body">
                    ${meta(lead, lang)}
                    <h2>${esc(lead.title)}</h2>
                    <p>${esc(lead.ingress)}</p>
                    <span class="nx-read">${t.read} <span aria-hidden="true">→</span></span>
                </div>
            </a>` : ''}
            <div class="nx-side">
                ${side.map(a => card(a, lang, 'nx-card nx-card-row')).join('\n                ')}
            </div>
        </section>

        <section class="nx-bento" aria-label="${t.tools}">
            <a href="${tool0[0]}" class="nx-tile nx-tile-main">
                <span class="nx-tile-kicker">${t.toolsLead}</span>
                <strong>${tool0[1]}</strong>
                <span>${tool0[2]}</span>
                <span class="nx-btn">${t.compareCta} →</span>
            </a>
            ${tools.map(([h, n, d], i) => `<a href="${h}" class="nx-tile">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[i + 1]}</svg>
                <strong>${n}</strong>
                <span>${d}</span>
            </a>`).join('\n            ')}
        </section>

        ${latest.length ? `<section class="nx-latest" aria-labelledby="nx-latest-h">
            <div class="nx-head"><h2 id="nx-latest-h">${t.river}</h2><a href="${t.articles}">${t.all} →</a></div>
            <div class="nx-grid">
                ${latest.map(a => card(a, lang)).join('\n                ')}
            </div>
        </section>` : ''}

        ${credits.length ? `<details class="nx-credits">
            <summary>${t.credits}</summary>
            <ul>
                ${credits.map(c => `<li>${creditLine(c, lang)}</li>`).join('\n                ')}
            </ul>
        </details>` : ''}
<!-- NEWS:END -->

        <div class="ad-container">
            <ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-4678480487049419" data-ad-slot="auto" data-ad-format="auto" data-full-width-responsive="true"></ins>
            <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
        </div>

        <p class="nx-ai-note"><span class="ai-label">AI</span> ${t.aiNote}</p>
    </main>
    <script type="application/ld+json">${JSON.stringify(ld)}</script>

${footer(t)}`;
}

function creditLine(img, lang) {
    const lic = img.licenseUrl ? `<a href="${esc(img.licenseUrl)}" rel="license noopener" target="_blank">${esc(img.license)}</a>` : esc(img.license);
    return `${esc(img.title)} — ${lang === 'nb' ? 'foto' : 'photo'}: ${esc(img.author)}, ${lic}, <a href="${esc(img.source)}" rel="noopener" target="_blank">Wikimedia Commons</a>`;
}

// Erstatter innholdet i <div class="articles-grid"> på artikkelsidene.
export function renderArticleGrid(lang, all) {
    const t = T[lang];
    return all.filter(a => a.lang === lang).map(a => `<a href="${esc(a.url)}" class="article-card">
                        <p class="article-card-category">${esc(a.category)}</p>
                        <h3 class="article-card-title">${esc(a.title)}</h3>
                        <p class="article-card-ingress">${esc(a.ingress)}</p>
                        <span class="article-card-link">${lang === 'nb' ? 'Les artikkelen' : 'Read the article'} &#8594;</span>
                    </a>`).join('\n                    ');
}

export function updateArticleList(file, lang, all) {
    const p = path.join(ROOT, file);
    let s = fs.readFileSync(p, 'utf8');
    const re = /(<div class="articles-grid">)[\s\S]*?(\n\s*<\/div>\s*\n\s*<p class="articles-ai-note">)/;
    if (!re.test(s)) throw new Error(`Fant ikke articles-grid i ${file}`);
    s = s.replace(re, `$1\n                    ${renderArticleGrid(lang, all)}$2`);
    fs.writeFileSync(p, s);
}

export function updateSitemap(all) {
    const p = path.join(ROOT, 'sitemap.xml');
    let s = fs.readFileSync(p, 'utf8');
    const today = new Date().toISOString().slice(0, 10);
    // Forsidene endres ved hver ny sak.
    for (const loc of ['https://elbilvalg.no/', 'https://elbilvalg.no/en/']) {
        s = s.replace(new RegExp(`(<loc>${loc.replace(/[./]/g, '\\$&')}</loc>\\s*<lastmod>)[^<]*(</lastmod>\\s*<changefreq>)[^<]*`),
            `$1${today}$2daily`);
    }
    for (const a of all) {
        const loc = `https://elbilvalg.no${a.url}`;
        if (s.includes(`<loc>${loc}</loc>`)) continue;
        s = s.replace('</urlset>', `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${a.date}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>0.7</priority>\n  </url>\n</urlset>`);
    }
    fs.writeFileSync(p, s);
}

export function buildAll() {
    const all = loadArticles();
    fs.writeFileSync(path.join(ROOT, 'index.html'), renderFront('nb', all));
    fs.writeFileSync(path.join(ROOT, 'en', 'index.html'), renderFront('en', all));
    updateArticleList('artikler.html', 'nb', all);
    updateArticleList('en/articles.html', 'en', all);
    updateSitemap(all);
    return all;
}

// Bygger en full artikkelside for en AI-skrevet sak, med en eksisterende
// artikkel som mal slik at header, analyse og footer blir identiske.
export function renderArticlePage({ slug, title, ingress, description, category, date, sections, sources }) {
    let s = fs.readFileSync(path.join(ROOT, 'bilsalget-april-2026.html'), 'utf8');
    const url = `https://elbilvalg.no/${slug}.html`;
    const ld = {
        '@context': 'https://schema.org', '@type': 'NewsArticle', headline: title, description,
        author: { '@type': 'Organization', name: 'Elbilvalg.no AI-redaksjonen' },
        publisher: { '@type': 'Organization', name: 'Elbilvalg.no', url: 'https://elbilvalg.no/' },
        datePublished: date, dateModified: date, url, inLanguage: 'nb-NO',
    };
    const body = sections.map(sec => `            <section>
                <h2>${esc(sec.heading)}</h2>
${sec.paragraphs.map(p => `                <p>${esc(p)}</p>`).join('\n')}
            </section>`).join('\n\n');
    const article = `<article class="static-content">
            <p class="article-category">${esc(category)}</p>
            <h1>${esc(title)}</h1>
            <p class="static-updated">Publisert ${formatDate(date, 'nb')} · Elbilvalg.no AI-redaksjonen</p>

            <p class="article-lead">${esc(ingress)}</p>

${body}

            <section>
                <h2>Kilder</h2>
                <ul>
${sources.map(src => `                    <li><a href="${esc(src.url)}" rel="noopener" target="_blank">${esc(src.title)}</a></li>`).join('\n')}
                </ul>
            </section>

            <p class="articles-ai-note"><span class="ai-label">AI-skrevet</span> Denne saken er skrevet av kunstig intelligens basert på kildene over. Sjekk alltid viktige tall hos kilden. Fant du en feil? <a href="mailto:kontakt@elbilvalg.no">Si fra</a>.</p>

            <p><a href="/">&#8592; Flere nyheter</a> · <a href="/sammenlign.html">Sammenlign elbiler</a></p>
        </article>`;

    s = s.replace(/<title>[\s\S]*?<\/title>/, `<title>${esc(title)} | Elbilvalg.no</title>`)
        .replace(/<meta name="description" content="[^"]*">/, `<meta name="description" content="${esc(description)}">`)
        .replace(/<link rel="canonical" href="[^"]*">/, `<link rel="canonical" href="${url}">`)
        .replace(/\s*<link rel="alternate" hreflang="nb" href="[^"]*">/, '')
        .replace(/\s*<link rel="alternate" hreflang="en" href="[^"]*">/, '')
        .replace(/<meta property="og:title" content="[^"]*">/, `<meta property="og:title" content="${esc(title)}">\n    <meta property="og:url" content="${url}">`)
        .replace(/<meta property="og:description" content="[^"]*">/, `<meta property="og:description" content="${esc(description)}">`)
        .replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>/, `<script type="application/ld+json">\n    ${JSON.stringify(ld, null, 2).replace(/\n/g, '\n    ')}\n    </script>`)
        .replace(/<a href="[^"]*" class="lang-switch"/, '<a href="/en/" class="lang-switch"')
        .replace(/<article class="static-content">[\s\S]*?<\/article>/, () => article);
    if (!s.includes('/news.css')) s = s.replace(/(<link rel="stylesheet" href="[^"]*styles\.css[^"]*">)/, `$1\n    <link rel="stylesheet" href="/news.css?v=${CSS_VERSION}">`);
    if (!/<meta name="ai-content-declaration"/.test(s)) {
        s = s.replace('<title>', '<meta name="ai-content-declaration" content="Denne artikkelen er skrevet ved hjelp av kunstig intelligens.">\n    <title>');
    }
    return s;
}
