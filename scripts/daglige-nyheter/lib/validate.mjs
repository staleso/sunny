// Kontroller modellens utkast mot kildene før noe publiseres.
// Alt som ikke består, fjernes og logges. Løse påstander slipper ikke gjennom.

const MAX_QUOTE_WORDS = 14; // "under 15 ord"
const COPY_SHINGLE_WORDS = 12; // så mange like ord på rad regnes som kopiering
const MAX_TEXT_CHARS = 900;

function numbersIn(s) {
    return (String(s).match(/\d(?:[\d\s  .,]*\d)?/g) || [])
        .map(n => n.replace(/[^\d]/g, ''))
        .filter(Boolean);
}

function words(s) {
    return String(s).toLowerCase().replace(/[«»"“”'’.,:;!?()\-–—]/g, ' ').split(/\s+/).filter(Boolean);
}

function normalizeSpace(s) {
    return String(s).toLowerCase().replace(/[«»"“”]/g, '').replace(/\s+/g, ' ').trim();
}

function shingles(list, n) {
    const out = new Set();
    for (let i = 0; i + n <= list.length; i++) out.add(list.slice(i, i + n).join(' '));
    return out;
}

function sourceText(items) {
    return items.map(i => `${i.title} ${i.summary}`).join(' ');
}

// Tall som ikke står i kildene, men som er trygge: datoen siden gjelder
function allowedDateNumbers(date) {
    const [y, m, d] = date.split('-');
    return new Set([y, String(Number(m)), String(Number(d)), m, d]);
}

function checkNumbers(fields, items, date) {
    const known = new Set(numbersIn(sourceText(items)));
    const safe = allowedDateNumbers(date);
    return fields.flatMap(numbersIn).filter(n => !known.has(n) && !safe.has(n));
}

function checkCopying(fields, items, quoteText) {
    const src = shingles(words(sourceText(items)), COPY_SHINGLE_WORDS);
    let own = fields.join(' ');
    if (quoteText) own = own.replace(quoteText, ' ');
    return [...shingles(words(own), COPY_SHINGLE_WORDS)].find(s => src.has(s)) || null;
}

function resolveItems(ids, byId) {
    const unique = [...new Set(ids)];
    const items = unique.map(id => byId.get(id)).filter(Boolean);
    return { items, unknown: unique.filter(id => !byId.has(id)) };
}

export function validateDigest(digest, candidates, { date, config }) {
    const byId = new Map(candidates.map(c => [c.id, c]));
    const problems = [];
    const quotedSources = new Set();

    const stories = [];
    for (const s of digest.stories) {
        const label = `Sak «${s.title}»`;
        const { items, unknown } = resolveItems(s.item_ids, byId);
        if (unknown.length) problems.push(`${label}: ukjente kilde-id-er ${unknown.join(', ')} ignorert`);
        if (!items.length) { problems.push(`${label}: fjernet, ingen gyldige kilder`); continue; }
        if (!s.title.trim() || !s.text.trim() || !s.meaning.trim()) { problems.push(`${label}: fjernet, mangler tekst`); continue; }
        if (s.text.length > MAX_TEXT_CHARS) { problems.push(`${label}: fjernet, teksten er for lang`); continue; }

        let quote = s.quote;
        if (quote) {
            const qItem = byId.get(quote.item_id);
            const qWords = words(quote.text).length;
            const verbatim = qItem && normalizeSpace(`${qItem.title} ${qItem.summary}`).includes(normalizeSpace(quote.text));
            if (!qItem || !items.includes(qItem)) { problems.push(`${label}: sitat fjernet, kilden hører ikke til saken`); quote = null; }
            else if (qWords === 0 || qWords > MAX_QUOTE_WORDS) { problems.push(`${label}: sitat fjernet, ${qWords} ord`); quote = null; }
            else if (!verbatim) { problems.push(`${label}: sitat fjernet, står ikke ordrett i kilden`); quote = null; }
            else if (quotedSources.has(qItem.sourceId)) { problems.push(`${label}: sitat fjernet, allerede ett sitat fra ${qItem.sourceName}`); quote = null; }
            else quotedSources.add(qItem.sourceId);
        }

        const fields = [s.title, s.text, s.meaning, s.disagreement || ''];
        const badNumbers = checkNumbers(fields, items, date);
        if (badNumbers.length) { problems.push(`${label}: fjernet, tall som ikke står i kildene: ${badNumbers.join(', ')}`); continue; }
        const copied = checkCopying(fields, items, quote?.text);
        if (copied) { problems.push(`${label}: fjernet, for likt kildeteksten («${copied}»)`); continue; }

        stories.push({ ...s, quote, items });
        if (stories.length === config.maxStories) break;
    }

    const themes = [];
    for (const t of digest.themes) {
        const label = `Tema «${t.title}»`;
        const { items } = resolveItems(t.item_ids, byId);
        if (items.length < 2) { problems.push(`${label}: fjernet, bygger på færre enn to saker`); continue; }
        const fields = [t.title, t.text];
        const badNumbers = checkNumbers(fields, items, date);
        if (badNumbers.length) { problems.push(`${label}: fjernet, tall som ikke står i kildene: ${badNumbers.join(', ')}`); continue; }
        if (checkCopying(fields, items, null)) { problems.push(`${label}: fjernet, for likt kildeteksten`); continue; }
        themes.push({ ...t, items });
        if (themes.length === config.maxThemes) break;
    }

    // Overskrift og ingress kan bare bruke tall fra sakene som faktisk kom med
    const usedItems = [...new Set([...stories, ...themes].flatMap(x => x.items))];
    let headline = digest.headline.trim();
    let ingress = digest.ingress.trim();
    if (checkNumbers([headline], usedItems, date).length) { problems.push('Overskrift erstattet, inneholdt tall som ikke står i kildene'); headline = ''; }
    if (checkNumbers([ingress], usedItems, date).length) { problems.push('Ingress erstattet, inneholdt tall som ikke står i kildene'); ingress = ''; }

    const enough = digest.enough_relevant && stories.length >= config.minStories && themes.length >= config.minThemes;
    return { enough, stories, themes, headline, ingress, problems };
}
