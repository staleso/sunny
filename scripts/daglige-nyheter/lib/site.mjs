import fs from 'fs';

// ---------- artikler.html ----------

const DAILY_CARD = /\s*<a href="[^"]*" class="article-card" data-daglige-nyheter="(\d{4}-\d{2}-\d{2})">[\s\S]*?<\/a>/g;

export function insertCard(html, card, date, maxCards) {
    if (!html.includes('<div class="articles-grid">')) {
        throw new Error('fant ikke <div class="articles-grid"> i artikler.html');
    }
    const existing = [...html.matchAll(DAILY_CARD)].map(m => m[1]).filter(d => d !== date);
    const keep = new Set(existing.sort().reverse().slice(0, Math.max(0, maxCards - 1)));
    const cleaned = html.replace(DAILY_CARD, (m, d) => (keep.has(d) ? m : ''));
    return cleaned.replace('<div class="articles-grid">', `<div class="articles-grid">\n                    ${card}`);
}

// ---------- sitemap.xml ----------

export function upsertSitemap(xml, loc, lastmod) {
    const entry = `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>never</changefreq>\n    <priority>0.5</priority>\n  </url>\n`;
    const escaped = loc.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const existing = new RegExp(`  <url>\\s*<loc>${escaped}</loc>[\\s\\S]*?</url>\\n?`);
    if (existing.test(xml)) return xml.replace(existing, entry);
    if (!xml.includes('</urlset>')) throw new Error('sitemap.xml mangler </urlset>');
    return xml.replace('</urlset>', `${entry}</urlset>`);
}

// ---------- nyheter/state.json ----------

export function loadState(file) {
    if (!fs.existsSync(file)) return { version: 1, used: {} };
    const state = JSON.parse(fs.readFileSync(file, 'utf8'));
    if (!state.used || typeof state.used !== 'object') throw new Error(`${file} har ugyldig format`);
    return state;
}

export function updateState(state, keys, date, retentionDays) {
    const cutoff = new Date(`${date}T00:00:00Z`).getTime() - retentionDays * 86400000;
    const used = {};
    for (const [key, d] of Object.entries(state.used)) {
        if (new Date(`${d}T00:00:00Z`).getTime() >= cutoff) used[key] = d;
    }
    for (const key of keys) used[key] = date;
    return { version: 1, lastRun: date, used: Object.fromEntries(Object.entries(used).sort()) };
}
