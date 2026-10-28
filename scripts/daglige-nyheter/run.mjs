#!/usr/bin/env node
// Daglige elbilnyheter for Elbilvalg.no. Se README.md (seksjonen "Daglige elbilnyheter").
//
//   node scripts/daglige-nyheter/run.mjs                  # lager nyheter/YYYY-MM-DD.html og oppdaterer artikler.html, sitemap.xml, state
//   node scripts/daglige-nyheter/run.mjs --dry-run        # skriver bare siden til .nyheter-dry-run/, endrer ingenting i repoet
//   node scripts/daglige-nyheter/run.mjs --check-sources  # tester hver kilde og viser hvilke feeds som virker
//
// Andre valg: --date YYYY-MM-DD, --now <ISO-tid>, --out <mappe>, --force,
//             --fixtures <mappe> og --fake-llm <fil.json> (for test uten nett/API)
import fs from 'fs';
import path from 'path';
import { parseArgs } from 'util';
import { fileURLToPath } from 'url';
import { fetchSource, selectCandidates } from './lib/feeds.mjs';
import { writeDigest } from './lib/writer.mjs';
import { validateDigest } from './lib/validate.mjs';
import { pageMeta, renderPage, renderCard, SITE } from './lib/render.mjs';
import { insertCard, upsertSitemap, loadState, updateState } from './lib/site.mjs';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(HERE, '..', '..');

const { values: args } = parseArgs({
    options: {
        'dry-run': { type: 'boolean', default: false },
        'check-sources': { type: 'boolean', default: false },
        date: { type: 'string' },
        now: { type: 'string' },
        out: { type: 'string', default: path.join(ROOT, '.nyheter-dry-run') },
        force: { type: 'boolean', default: false },
        fixtures: { type: 'string' },
        'fake-llm': { type: 'string' },
        config: { type: 'string', default: path.join(HERE, 'sources.json') },
        tone: { type: 'string', default: path.join(HERE, 'tone.md') },
    },
});

function osloDate(d) {
    return new Intl.DateTimeFormat('sv-SE', { timeZone: 'Europe/Oslo' }).format(d);
}

function setOutput(values) {
    const lines = Object.entries(values).map(([k, v]) => `${k}=${v}`).join('\n') + '\n';
    if (process.env.GITHUB_OUTPUT) fs.appendFileSync(process.env.GITHUB_OUTPUT, lines);
}

function finishWithoutPage(reason) {
    console.log(`\nIngen side i dag: ${reason}`);
    setOutput({ created: 'false' });
    process.exit(0);
}

async function main() {
    const config = JSON.parse(fs.readFileSync(args.config, 'utf8'));
    const tone = fs.readFileSync(args.tone, 'utf8');
    const now = args.now ? new Date(args.now) : new Date();
    const date = args.date || osloDate(now);
    if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) throw new Error(`ugyldig dato: ${date}`);

    const pageRel = `nyheter/${date}.html`;
    const pageFile = path.join(ROOT, pageRel);
    const stateFile = path.join(ROOT, 'nyheter', 'state.json');
    const dryRun = args['dry-run'];
    console.log(`Daglige elbilnyheter ${date}${dryRun ? ' (dry-run)' : ''}${args.fixtures ? ' [fixtures]' : ''}`);

    if (!dryRun && !args['check-sources'] && fs.existsSync(pageFile) && !args.force) {
        finishWithoutPage(`${pageRel} finnes allerede (bruk --force for å lage den på nytt)`);
    }

    // 1. Hent kilder
    const sources = config.sources.filter(s => s.enabled !== false);
    const results = await Promise.all(sources.map(s => fetchSource(s, { userAgent: config.userAgent, fixturesDir: args.fixtures })));
    console.log('\nKilder:');
    for (const r of results) {
        if (r.feedUrl) console.log(`  ✓ ${r.source.name}: ${r.items.length} saker fra ${r.feedUrl}`);
        else console.log(`  ✗ ${r.source.name}: hoppet over (${r.errors.join('; ') || 'ingen feed'})`);
    }
    const working = results.filter(r => r.feedUrl);

    if (args['check-sources']) {
        console.log(`\n${working.length} av ${results.length} kilder virker.`);
        if (!working.length) throw new Error('ingen kilder virker');
        return;
    }
    if (!working.length) throw new Error('ingen av kildene kunne hentes. Sjekk nettverk eller sources.json');

    // 2. Filtrer: tidsvindu, tema, allerede brukt
    const state = loadState(stateFile);
    const candidates = selectCandidates(working, {
        now,
        maxAgeHours: config.maxAgeHours,
        keywords: config.keywords,
        usedUrls: new Set(Object.keys(state.used)),
        maxItems: config.maxItemsToModel,
    });
    console.log(`\n${candidates.length} aktuelle saker siste ${config.maxAgeHours} timer etter filtrering.`);
    if (candidates.length < config.minStories) {
        finishWithoutPage(`bare ${candidates.length} aktuelle saker (trenger minst ${config.minStories})`);
    }

    // 3. Rangering og skriving
    console.log(`Sender til ${args['fake-llm'] ? 'fake-llm' : config.model} …`);
    const digest = await writeDigest({ tone, items: candidates, config, dateLabel: date, fakeResponsePath: args['fake-llm'] });

    // 4. Kontroll mot kildene
    const checked = validateDigest(digest, candidates, { date, config });
    if (checked.problems.length) {
        console.log('\nKontroll:');
        for (const p of checked.problems) console.log(`  - ${p}`);
    }
    if (!checked.enough) {
        finishWithoutPage(`for få saker besto kontrollen (${checked.stories.length} saker, ${checked.themes.length} temaer)`);
    }

    // 5. Bygg alt i minnet først, slik at en feil ikke etterlater halvferdige filer
    const meta = pageMeta({ date, headline: checked.headline, ingress: checked.ingress, stories: checked.stories });
    const usedKeys = [...new Set([...checked.stories, ...checked.themes].flatMap(x => x.items.map(i => i.key)))];

    if (dryRun) {
        const outFile = path.join(args.out, pageRel);
        const stylesHref = path.relative(path.dirname(outFile), path.join(ROOT, 'styles.css')).split(path.sep).join('/');
        fs.mkdirSync(path.dirname(outFile), { recursive: true });
        fs.writeFileSync(outFile, renderPage({ date, meta, stories: checked.stories, themes: checked.themes, stylesHref }));
        fs.writeFileSync(path.join(args.out, `artikkelkort-${date}.html`), renderCard({ date, meta }) + '\n');
        console.log(`\n✓ Dry-run: ${path.relative(ROOT, outFile)} (ingen endringer i repoet)`);
        console.log(`\n----- Forhåndsvisning -----\n# ${meta.h1}\n${meta.description}\n\n## Nytt i dag`);
        for (const s of checked.stories) {
            console.log(`\n### ${s.title}\n${s.text}${s.quote ? `\n«${s.quote.text}»` : ''}${s.disagreement ? `\nKildene sier ulikt: ${s.disagreement}` : ''}\nFor deg som vurderer elbil: ${s.meaning}`);
            for (const i of s.items) console.log(`  – ${i.sourceName}: ${i.title} <${i.url}>`);
        }
        console.log('\n## Hva snakkes det om');
        for (const t of checked.themes) {
            console.log(`\n### ${t.title}\n${t.text}`);
            for (const i of t.items) console.log(`  – ${i.sourceName}: ${i.title} <${i.url}>`);
        }
        console.log('---------------------------');
    } else {
        const page = renderPage({ date, meta, stories: checked.stories, themes: checked.themes });
        const artiklerFile = path.join(ROOT, 'artikler.html');
        const artikler = insertCard(fs.readFileSync(artiklerFile, 'utf8'), renderCard({ date, meta }), date, config.maxDailyCardsInArticles);
        const sitemapFile = path.join(ROOT, 'sitemap.xml');
        const sitemap = fs.existsSync(sitemapFile) ? upsertSitemap(fs.readFileSync(sitemapFile, 'utf8'), meta.canonical, date) : null;
        const newState = updateState(state, usedKeys, date, config.stateRetentionDays);

        fs.mkdirSync(path.dirname(pageFile), { recursive: true });
        fs.writeFileSync(pageFile, page);
        fs.writeFileSync(artiklerFile, artikler);
        if (sitemap) fs.writeFileSync(sitemapFile, sitemap);
        fs.writeFileSync(stateFile, JSON.stringify(newState, null, 2) + '\n');
        console.log(`\n✓ ${pageRel}, artikler.html${sitemap ? ', sitemap.xml' : ''} og nyheter/state.json oppdatert`);
    }

    console.log(`  Tittel: ${meta.h1}`);
    console.log(`  ${checked.stories.length} saker, ${checked.themes.length} temaer, ${usedKeys.length} kildelenker`);
    setOutput({ created: 'true', date, page: pageRel, title: meta.h1.replace(/\n/g, ' '), url: `${SITE}${meta.path}` });
}

main().catch(err => {
    console.error(`\n::error::Daglige elbilnyheter feilet: ${err.message}`);
    if (process.env.DEBUG) console.error(err);
    process.exit(1);
});
