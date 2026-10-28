import fs from 'fs';
import path from 'path';
import { XMLParser } from 'fast-xml-parser';

const FETCH_TIMEOUT_MS = 15000;
const MAX_SUMMARY_CHARS = 700;

const xml = new XMLParser({
    ignoreAttributes: false,
    attributeNamePrefix: '@',
    textNodeName: '#text',
    processEntities: true,
    htmlEntities: true,
    trimValues: true,
});

// ---------- HTTP + robots.txt ----------

async function httpGet(url, userAgent, accept) {
    const res = await fetch(url, {
        headers: { 'User-Agent': userAgent, Accept: accept },
        redirect: 'follow',
        signal: AbortSignal.timeout(FETCH_TIMEOUT_MS),
    });
    return { status: res.status, url: res.url || url, body: res.ok ? await res.text() : '' };
}

const robotsCache = new Map();

// Enkel robots.txt-tolkning: grupper for vår bot-token eller *, lengste Allow/Disallow vinner.
// Som Google: 4xx = alt tillatt, 5xx/nettverksfeil = ingenting tillatt.
export function parseRobots(text, botToken) {
    const groups = [];
    let current = null;
    let lastWasAgent = false;
    for (const raw of text.split(/\r?\n/)) {
        const line = raw.replace(/#.*$/, '').trim();
        const m = line.match(/^([A-Za-z-]+)\s*:\s*(.*)$/);
        if (!m) continue;
        const key = m[1].toLowerCase();
        const value = m[2].trim();
        if (key === 'user-agent') {
            if (!lastWasAgent) { current = { agents: [], rules: [] }; groups.push(current); }
            current.agents.push(value.toLowerCase());
            lastWasAgent = true;
        } else {
            lastWasAgent = false;
            if (current && (key === 'allow' || key === 'disallow')) current.rules.push({ allow: key === 'allow', path: value });
        }
    }
    const token = botToken.toLowerCase();
    const own = groups.filter(g => g.agents.some(a => a !== '*' && token.includes(a)));
    const chosen = own.length ? own : groups.filter(g => g.agents.includes('*'));
    return chosen.flatMap(g => g.rules).filter(r => r.path !== '');
}

function ruleMatches(rulePath, target) {
    const anchored = rulePath.endsWith('$');
    const pattern = rulePath.replace(/\$$/, '')
        .split('*').map(s => s.replace(/[.+?^${}()|[\]\\]/g, '\\$&')).join('.*');
    return new RegExp('^' + pattern + (anchored ? '$' : '')).test(target);
}

export function isAllowed(rules, urlPath) {
    let best = null;
    for (const r of rules) {
        if (!ruleMatches(r.path, urlPath)) continue;
        if (!best || r.path.length > best.path.length || (r.path.length === best.path.length && r.allow)) best = r;
    }
    return !best || best.allow;
}

async function robotsAllows(url, userAgent) {
    const u = new URL(url);
    if (!robotsCache.has(u.origin)) {
        let rules;
        try {
            const res = await httpGet(`${u.origin}/robots.txt`, userAgent, 'text/plain');
            if (res.status >= 500) rules = [{ allow: false, path: '/' }];
            else rules = res.status >= 400 ? [] : parseRobots(res.body, userAgent.split('/')[0]);
        } catch {
            rules = [{ allow: false, path: '/' }];
        }
        robotsCache.set(u.origin, rules);
    }
    return isAllowed(robotsCache.get(u.origin), u.pathname + u.search);
}

async function politeGet(url, userAgent, accept) {
    if (!(await robotsAllows(url, userAgent))) {
        return { status: 0, url, body: '', blockedByRobots: true };
    }
    return httpGet(url, userAgent, accept);
}

// ---------- Parsing ----------

function text(node) {
    if (node == null) return '';
    if (typeof node === 'string' || typeof node === 'number') return String(node);
    if (Array.isArray(node)) return text(node[0]);
    if (typeof node === 'object') return text(node['#text'] ?? node['@href'] ?? '');
    return '';
}

export function stripHtml(s) {
    return String(s)
        .replace(/<script[\s\S]*?<\/script>/gi, ' ')
        .replace(/<style[\s\S]*?<\/style>/gi, ' ')
        .replace(/<[^>]+>/g, ' ')
        .replace(/&nbsp;/g, ' ')
        .replace(/&amp;/g, '&')
        .replace(/&quot;/g, '"')
        .replace(/&#39;|&apos;/g, "'")
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/\s+/g, ' ')
        .trim();
}

function atomLink(link) {
    const links = Array.isArray(link) ? link : [link];
    const alt = links.find(l => l && typeof l === 'object' && (!l['@rel'] || l['@rel'] === 'alternate'));
    return text(alt ?? links[0]);
}

function asArray(x) {
    return x == null ? [] : Array.isArray(x) ? x : [x];
}

export function parseFeed(body) {
    const doc = xml.parse(body);
    let raw = [];
    if (doc.rss?.channel) {
        raw = asArray(doc.rss.channel.item).map(i => ({
            title: text(i.title),
            url: text(i.link) || (i.guid?.['@isPermaLink'] !== 'false' ? text(i.guid) : ''),
            summary: text(i.description) || text(i['content:encoded']),
            published: text(i.pubDate) || text(i['dc:date']),
        }));
    } else if (doc.feed) {
        raw = asArray(doc.feed.entry).map(e => ({
            title: text(e.title),
            url: atomLink(e.link),
            summary: text(e.summary) || text(e.content),
            published: text(e.published) || text(e.updated),
        }));
    } else if (doc['rdf:RDF']) {
        raw = asArray(doc['rdf:RDF'].item).map(i => ({
            title: text(i.title),
            url: text(i.link),
            summary: text(i.description),
            published: text(i['dc:date']),
        }));
    } else {
        throw new Error('ukjent feed-format (verken RSS, Atom eller RDF)');
    }
    return raw.map(r => {
        const summary = stripHtml(r.summary);
        return {
            title: stripHtml(r.title),
            url: r.url.trim(),
            summary: summary.length > MAX_SUMMARY_CHARS ? summary.slice(0, MAX_SUMMARY_CHARS).replace(/\s\S*$/, '') + ' …' : summary,
            published: r.published ? new Date(r.published) : null,
        };
    }).filter(i => i.title && /^https?:\/\//.test(i.url));
}

export function discoverFeedLinks(html, baseUrl) {
    const out = [];
    for (const tag of html.match(/<link\b[^>]*>/gi) || []) {
        if (!/rel=["']?alternate/i.test(tag)) continue;
        if (!/type=["']?application\/(rss|atom)\+xml/i.test(tag)) continue;
        const href = tag.match(/href=["']([^"']+)["']/i);
        if (href) out.push(new URL(href[1], baseUrl).href);
    }
    return [...new Set(out)];
}

// ---------- Henting per kilde ----------

async function tryFeed(url, userAgent) {
    const res = await politeGet(url, userAgent, 'application/rss+xml, application/atom+xml, application/xml;q=0.9, */*;q=0.5');
    if (res.blockedByRobots) throw new Error('robots.txt tillater ikke henting');
    if (res.status !== 200) throw new Error(`HTTP ${res.status}`);
    return parseFeed(res.body);
}

// Returnerer { source, feedUrl, items, errors }. Kaster aldri: en død kilde hoppes over.
export async function fetchSource(source, { userAgent, fixturesDir }) {
    const errors = [];
    if (fixturesDir) {
        const file = path.join(fixturesDir, `${source.id}.xml`);
        if (!fs.existsSync(file)) return { source, feedUrl: null, items: [], errors: ['ingen fixture'] };
        return { source, feedUrl: `fixture:${source.id}.xml`, items: parseFeed(fs.readFileSync(file, 'utf8')), errors };
    }

    for (const url of source.feeds || []) {
        try {
            return { source, feedUrl: url, items: await tryFeed(url, userAgent), errors };
        } catch (err) {
            errors.push(`${url}: ${err.message}`);
        }
    }

    // Autodiscovery: les <link rel="alternate"> i <head> på kildens egen side (respekterer robots.txt)
    const items = [];
    const used = [];
    for (const page of source.discoverFrom || []) {
        let candidates = [];
        try {
            const res = await politeGet(page, userAgent, 'text/html');
            if (res.blockedByRobots) { errors.push(`${page}: robots.txt tillater ikke henting`); continue; }
            if (res.status !== 200) { errors.push(`${page}: HTTP ${res.status}`); continue; }
            candidates = discoverFeedLinks(res.body, res.url);
            if (!candidates.length) errors.push(`${page}: fant ingen RSS/Atom-lenke`);
        } catch (err) {
            errors.push(`${page}: ${err.message}`);
        }
        for (const url of candidates) {
            try {
                items.push(...await tryFeed(url, userAgent));
                used.push(url);
                break;
            } catch (err) {
                errors.push(`${url}: ${err.message}`);
            }
        }
    }
    return { source, feedUrl: used.length ? used.join(' + ') : null, items, errors };
}

// ---------- Filtrering ----------

const TRACKING_PARAMS = /^(utm_|fbclid$|gclid$|mc_|ref$|xtor$)/i;

export function normalizeUrl(url) {
    try {
        const u = new URL(url);
        u.hash = '';
        for (const key of [...u.searchParams.keys()]) if (TRACKING_PARAMS.test(key)) u.searchParams.delete(key);
        return u.href.replace(/^http:/, 'https:').replace(/\/$/, '');
    } catch {
        return url;
    }
}

export function matchesKeywords(item, keywords) {
    const hay = `${item.title} ${item.summary}`.toLowerCase();
    return keywords.some(k => hay.includes(k.toLowerCase()));
}

export function selectCandidates(results, { now, maxAgeHours, keywords, usedUrls, maxItems }) {
    const cutoff = now.getTime() - maxAgeHours * 3600 * 1000;
    const seen = new Set();
    const items = [];
    for (const { source, items: list } of results) {
        for (const item of list) {
            const t = item.published?.getTime();
            if (!t || Number.isNaN(t) || t < cutoff || t > now.getTime() + 3600 * 1000) continue;
            if (source.keywordFilter !== false && !matchesKeywords(item, keywords)) continue;
            const key = normalizeUrl(item.url);
            if (seen.has(key) || usedUrls.has(key)) continue;
            seen.add(key);
            items.push({ ...item, key, sourceId: source.id, sourceName: source.name });
        }
    }
    items.sort((a, b) => b.published - a.published);
    return items.slice(0, maxItems).map((item, i) => ({ id: `s${i + 1}`, ...item }));
}
