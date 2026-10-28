import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'fs';
import os from 'os';
import path from 'path';
import { execFileSync } from 'child_process';
import { fileURLToPath } from 'url';
import { parseFeed, parseRobots, isAllowed, discoverFeedLinks, selectCandidates, normalizeUrl } from '../lib/feeds.mjs';
import { validateDigest } from '../lib/validate.mjs';
import { insertCard, upsertSitemap, updateState } from '../lib/site.mjs';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const FIX = path.join(HERE, 'fixtures');
const RUN = path.join(HERE, '..', 'run.mjs');
const config = { minStories: 3, maxStories: 5, minThemes: 2, maxThemes: 3 };

test('parser RSS og Atom, fjerner HTML', () => {
    const rss = parseFeed(fs.readFileSync(path.join(FIX, 'ofv.xml'), 'utf8'));
    assert.equal(rss.length, 2);
    assert.match(rss[0].summary, /^Fiktiv testsak\. Elbilandelen/);
    assert.ok(!rss[0].summary.includes('<p>'));
    const atom = parseFeed(fs.readFileSync(path.join(FIX, 'elbil.xml'), 'utf8'));
    assert.equal(atom[0].url, 'https://example.org/elbil/ladepriser');
    assert.equal(atom[0].published.toISOString(), '2026-10-27T14:00:00.000Z');
});

test('robots.txt: lengste regel vinner, egen bot-gruppe går foran *', () => {
    const rules = parseRobots('User-agent: *\nDisallow: /\n\nUser-agent: ElbilvalgNyhetsbot\nDisallow: /privat\nAllow: /privat/rss\n', 'ElbilvalgNyhetsbot');
    assert.equal(isAllowed(rules, '/rss'), true);
    assert.equal(isAllowed(rules, '/privat/side'), false);
    assert.equal(isAllowed(rules, '/privat/rss'), true);
    const all = parseRobots('User-agent: *\nDisallow: /\n', 'ElbilvalgNyhetsbot');
    assert.equal(isAllowed(all, '/feed'), false);
});

test('finner feed-lenker i <head>', () => {
    const html = '<link rel="alternate" type="application/rss+xml" href="/rss.xml"><link rel="stylesheet" href="/a.css">';
    assert.deepEqual(discoverFeedLinks(html, 'https://example.org/aktuelt'), ['https://example.org/rss.xml']);
});

test('filtrerer på alder, tema og tidligere brukte saker', () => {
    const results = ['ofv', 'elbil', 'tu'].map(id => ({
        source: { id, name: id, keywordFilter: id === 'tu' },
        items: parseFeed(fs.readFileSync(path.join(FIX, `${id}.xml`), 'utf8')),
    }));
    const opts = { now: new Date('2026-10-28T06:00:00Z'), maxAgeHours: 36, keywords: ['elbil', 'lading', 'ladestasjon'], maxItems: 60 };
    const all = selectCandidates(results, { ...opts, usedUrls: new Set() });
    assert.equal(all.length, 5); // gammel sak og bro-saken er borte
    assert.ok(!all.some(i => /bro/.test(i.title)));
    assert.equal(all[0].id, 's1');
    const used = new Set([normalizeUrl('https://example.org/ofv/oktober-hittil')]);
    assert.equal(selectCandidates(results, { ...opts, usedUrls: used }).length, 4);
});

function candidates() {
    return [
        { id: 's1', sourceId: 'a', sourceName: 'A', title: 'Pris øker til 5,50 kroner', summary: '«Vi må dekke økte nettkostnader», sier sjefen. Gjelder fra 1. november.', key: 'k1', url: 'https://a/1' },
        { id: 's2', sourceId: 'b', sourceName: 'B', title: '9 000 nye biler', summary: 'Elbilandelen er 97,1 prosent.', key: 'k2', url: 'https://b/2' },
        { id: 's3', sourceId: 'a', sourceName: 'A', title: 'Moms på elbil', summary: 'Forslag om moms.', key: 'k3', url: 'https://a/3' },
    ];
}
const story = (over) => ({ title: 'T', item_ids: ['s1'], text: 'Tekst.', meaning: 'Betyr.', disagreement: null, quote: null, ...over });
const theme = (over) => ({ title: 'Tema', text: 'Tekst.', item_ids: ['s1', 's2'], ...over });

test('stopper tall som ikke står i kildene, godtar tall som gjør det', () => {
    const digest = {
        enough_relevant: true, headline: 'H', ingress: 'I',
        stories: [story({ text: 'Prisen blir 5,50 kroner fra 1. november.' }), story({ item_ids: ['s2'], text: 'Hele 12 000 biler.' }), story({ item_ids: ['s2'], text: 'Andelen er 97,1 prosent av 9 000 biler.' })],
        themes: [theme(), theme({ text: 'Rundt 40 prosent.' })],
    };
    const r = validateDigest(digest, candidates(), { date: '2026-10-28', config });
    assert.equal(r.stories.length, 2);
    assert.equal(r.themes.length, 1);
    assert.equal(r.enough, false);
    assert.ok(r.problems.some(p => p.includes('12000')));
});

test('sitat: må være ordrett, under 15 ord og ett per kilde', () => {
    const digest = {
        enough_relevant: true, headline: 'H', ingress: 'I',
        stories: [
            story({ quote: { text: 'Vi må dekke økte nettkostnader', item_id: 's1' } }),
            story({ item_ids: ['s3'], quote: { text: 'Forslag om moms', item_id: 's3' } }),
            story({ item_ids: ['s2'], quote: { text: 'Elbilandelen er nesten hundre prosent', item_id: 's2' } }),
        ],
        themes: [theme(), theme({ item_ids: ['s2', 's3'] })],
    };
    const r = validateDigest(digest, candidates(), { date: '2026-10-28', config });
    assert.equal(r.enough, true);
    assert.ok(r.stories[0].quote);
    assert.equal(r.stories[1].quote, null); // nr. 2 fra kilde A
    assert.equal(r.stories[2].quote, null); // ikke ordrett
});

test('avviser tekst kopiert fra kilden', () => {
    const long = { ...candidates()[0], summary: 'en to tre fire fem seks sju åtte ni ti elleve tolv tretten fjorten' };
    const digest = { enough_relevant: true, headline: 'H', ingress: 'I', themes: [],
        stories: [story({ text: 'Her: en to tre fire fem seks sju åtte ni ti elleve tolv tretten.' })] };
    const r = validateDigest(digest, [long], { date: '2026-10-28', config });
    assert.equal(r.stories.length, 0);
});

test('artikler.html: nytt kort øverst, maks antall dagskort, idempotent', () => {
    let html = '<div class="articles-grid">\n<a href="/x.html" class="article-card">fast</a>\n</div>';
    const card = d => `<a href="/nyheter/${d}.html" class="article-card" data-daglige-nyheter="${d}">${d}</a>`;
    for (const d of ['2026-10-25', '2026-10-26', '2026-10-27', '2026-10-28']) html = insertCard(html, card(d), d, 3);
    html = insertCard(html, card('2026-10-28'), '2026-10-28', 3);
    const dates = [...html.matchAll(/data-daglige-nyheter="([^"]+)"/g)].map(m => m[1]);
    assert.deepEqual(dates, ['2026-10-28', '2026-10-27', '2026-10-26']);
    assert.ok(html.includes('fast'));
});

test('sitemap: legger til én gang', () => {
    const base = '<urlset>\n</urlset>\n';
    const once = upsertSitemap(base, 'https://elbilvalg.no/nyheter/2026-10-28.html', '2026-10-28');
    assert.equal(upsertSitemap(once, 'https://elbilvalg.no/nyheter/2026-10-28.html', '2026-10-28'), once);
});

test('state: beholder nye URL-er og rydder gamle', () => {
    const s = updateState({ used: { gammel: '2026-08-01', nylig: '2026-10-20' } }, ['ny'], '2026-10-28', 30);
    assert.deepEqual(Object.keys(s.used), ['ny', 'nylig']);
});

test('dry-run fra ende til ende med testdata', () => {
    const out = fs.mkdtempSync(path.join(os.tmpdir(), 'nyheter-'));
    const log = execFileSync('node', [RUN, '--dry-run', '--out', out, '--fixtures', FIX, '--fake-llm', path.join(FIX, 'fake-llm.json'), '--now', '2026-10-28T06:00:00Z'], { encoding: 'utf8', env: { ...process.env, GITHUB_OUTPUT: '' } });
    assert.match(log, /3 saker, 2 temaer/);
    const page = fs.readFileSync(path.join(out, 'nyheter', '2026-10-28.html'), 'utf8');
    for (const s of ['<link rel="canonical" href="https://elbilvalg.no/nyheter/2026-10-28.html">', 'property="og:title"', 'Deler av innholdet er AI-generert og redaksjonelt gjennomgått', 'href="https://example.org/elbil/ladepriser"', '<h2>Nytt i dag</h2>', '<h2>Hva snakkes det om</h2>']) {
        assert.ok(page.includes(s), `mangler ${s}`);
    }
    assert.ok(!page.includes('24 hurtigladere'));
});

test('for få saker: ingen side, men exit 0', () => {
    const out = fs.mkdtempSync(path.join(os.tmpdir(), 'nyheter-'));
    const log = execFileSync('node', [RUN, '--dry-run', '--out', out, '--fixtures', FIX, '--fake-llm', path.join(FIX, 'fake-llm.json'), '--now', '2026-11-15T06:00:00Z'], { encoding: 'utf8', env: { ...process.env, GITHUB_OUTPUT: '' } });
    assert.match(log, /Ingen side i dag/);
    assert.ok(!fs.existsSync(path.join(out, 'nyheter')));
});
