export const SITE = 'https://elbilvalg.no';
export const AI_NOTE = 'Deler av innholdet er AI-generert og redaksjonelt gjennomgått.';

export function esc(s) {
    return String(s ?? '')
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}

export function norwegianDate(date) {
    return new Intl.DateTimeFormat('nb-NO', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' })
        .format(new Date(`${date}T12:00:00Z`));
}

function clip(s, max) {
    s = String(s).replace(/\s+/g, ' ').trim();
    return s.length <= max ? s : s.slice(0, max - 1).replace(/\s\S*$/, '') + '…';
}

export function pageMeta({ date, headline, ingress, stories }) {
    const dateLabel = norwegianDate(date);
    const h1 = headline ? clip(headline, 80) : `Dagens elbilnyheter ${dateLabel}`;
    const description = clip(ingress || `Dagens elbilnyheter: ${stories.map(s => s.title).join(' · ')}`, 155);
    return {
        dateLabel,
        h1,
        title: `${h1} | Elbilvalg.no`,
        description,
        path: `/nyheter/${date}.html`,
        canonical: `${SITE}/nyheter/${date}.html`,
    };
}

function sourceLinks(items) {
    return items.map(i =>
        `<a href="${esc(i.url)}" target="_blank" rel="noopener">${esc(i.sourceName)}: ${esc(i.title)}</a>`
    ).join('<br>\n                        ');
}

function renderStory(s) {
    const quote = s.quote
        ? `\n                    <blockquote class="news-quote">«${esc(s.quote.text)}» <cite>– ${esc(s.items.find(i => i.id === s.quote.item_id).sourceName)}</cite></blockquote>`
        : '';
    const disagreement = s.disagreement
        ? `\n                    <p class="news-disagreement"><strong>Kildene sier ulikt:</strong> ${esc(s.disagreement)}</p>`
        : '';
    return `
                <div class="news-item">
                    <h3>${esc(s.title)}</h3>
                    <p>${esc(s.text)}</p>${quote}${disagreement}
                    <p class="news-meaning"><strong>For deg som vurderer elbil:</strong> ${esc(s.meaning)}</p>
                    <p class="news-sources">Kilde:<br>
                        ${sourceLinks(s.items)}
                    </p>
                </div>`;
}

function renderTheme(t) {
    return `
                <div class="news-item">
                    <h3>${esc(t.title)}</h3>
                    <p>${esc(t.text)}</p>
                    <p class="news-sources">Bygger på:<br>
                        ${sourceLinks(t.items)}
                    </p>
                </div>`;
}

// stylesHref: '/styles.css' på nettstedet, relativ sti i dry-run så siden kan åpnes lokalt
export function renderPage({ date, meta, stories, themes, stylesHref = '/styles.css?v=20261028' }) {
    const sourceNames = [...new Set([...stories, ...themes].flatMap(x => x.items.map(i => i.sourceName)))];
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'NewsArticle',
        headline: meta.h1,
        description: meta.description,
        author: { '@type': 'Organization', name: 'Elbilvalg.no' },
        publisher: { '@type': 'Organization', name: 'Elbilvalg.no', url: `${SITE}/` },
        datePublished: date,
        dateModified: date,
        url: meta.canonical,
        inLanguage: 'nb-NO',
    };
    return `<!DOCTYPE html>
<html lang="no">
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
    <title>${esc(meta.title)}</title>
    <meta name="description" content="${esc(meta.description)}">
    <meta name="ai-content-declaration" content="${esc(AI_NOTE)}">
    <link rel="canonical" href="${esc(meta.canonical)}">
    <meta property="og:title" content="${esc(meta.title)}">
    <meta property="og:description" content="${esc(meta.description)}">
    <meta property="og:type" content="article">
    <meta property="og:url" content="${esc(meta.canonical)}">
    <meta property="og:site_name" content="Elbilvalg.no">
    <meta property="og:locale" content="nb_NO">
    <meta property="article:published_time" content="${date}">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="${esc(stylesHref)}">
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
    <script type="application/ld+json">
${JSON.stringify(jsonLd, null, 4).replace(/</g, '\\u003c').replace(/^/gm, '    ')}
    </script>
</head>
<body>
    <div class="sticky-top">
        <header class="app-header">
            <a href="/" class="brand" aria-label="Elbilvalg.no – forside">Elbilvalg.no</a>
            <button class="theme-toggle" onclick="toggleTheme()" aria-label="Bytt tema">
                <svg class="icon-moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
                <svg class="icon-sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/></svg>
            </button>
        </header>
        <nav class="tab-bar">
            <a href="/" class="tab tab-link">Biler</a>
            <a href="/#compare" class="tab tab-link">Vs</a>
            <a href="/finn-din-elbil.html" class="tab tab-link">Quiz</a>
            <a href="/kalkulator.html" class="tab tab-link">Kalk</a>
            <a href="/tabell.html" class="tab tab-link">Tabell</a>
            <a href="/artikler.html" class="tab tab-link" style="color:var(--accent);background:rgba(37,99,235,0.08);">Artikler</a>
        </nav>
    </div>
    <script>
    function toggleTheme(){var d=document.documentElement,t=d.getAttribute('data-theme')==='dark'?'light':'dark';d.setAttribute('data-theme',t);localStorage.setItem('theme',t);var m=document.querySelector('meta[name="theme-color"]');if(m)m.content=t==='dark'?'#16161e':'#f8f8fa';}
    </script>

    <div class="static-page">
        <article class="static-content">
            <p class="article-category">Dagens elbilnyheter</p>
            <h1>${esc(meta.h1)}</h1>
            <p class="static-updated">Publisert ${esc(meta.dateLabel)} · Elbilvalg.no · Kilder: ${esc(sourceNames.join(', '))}</p>

            <p class="article-lead">${esc(meta.description)}</p>

            <section>
                <h2>Nytt i dag</h2>${stories.map(renderStory).join('\n')}
            </section>

            <section>
                <h2>Hva snakkes det om</h2>
                <p class="news-sources">Temaer som går igjen i sakene vi har gått gjennom det siste døgnet.</p>${themes.map(renderTheme).join('\n')}
            </section>

            <p class="articles-ai-note"><span class="ai-label">AI-generert</span> ${esc(AI_NOTE)} Sakene er skrevet med egne ord ut fra kildenes titler og ingresser. Les originalsakene via lenkene for alle detaljer.</p>
        </article>
    </div>

    <footer class="site-footer">
        <nav class="site-footer-nav">
            <a href="/">Forsiden</a>
            <span class="site-footer-sep">&middot;</span>
            <a href="/om-oss.html">Om oss</a>
            <span class="site-footer-sep">&middot;</span>
            <a href="/personvern.html">Personvern</a>
            <span class="site-footer-sep">&middot;</span>
            <a href="/vilkaar.html">Vilkår</a>
            <span class="site-footer-sep">&middot;</span>
            <a href="/" onclick="localStorage.removeItem('cookie-consent');return true;">Endre cookie-valg</a>
            <span class="site-footer-sep">&middot;</span>
            <span class="site-footer-copy">Elbilvalg.no</span>
        </nav>
    </footer>
</body>
</html>
`;
}

export function renderCard({ date, meta }) {
    return `<a href="${esc(meta.path)}" class="article-card" data-daglige-nyheter="${date}">
                        <p class="article-card-category">Dagens elbilnyheter · ${esc(meta.dateLabel)}</p>
                        <h3 class="article-card-title">${esc(meta.h1)}</h3>
                        <p class="article-card-ingress">${esc(meta.description)}</p>
                        <span class="article-card-link">Les dagens nyheter &#8594;</span>
                    </a>`;
}
