import fs from 'fs';
import Anthropic from '@anthropic-ai/sdk';
import { z } from 'zod';
import { zodOutputFormat } from '@anthropic-ai/sdk/helpers/zod';

const StorySchema = z.object({
    title: z.string(),
    item_ids: z.array(z.string()),
    text: z.string(),
    meaning: z.string(),
    disagreement: z.string().nullable(),
    quote: z.object({ text: z.string(), item_id: z.string() }).nullable(),
});

const ThemeSchema = z.object({
    title: z.string(),
    text: z.string(),
    item_ids: z.array(z.string()),
});

export const DigestSchema = z.object({
    enough_relevant: z.boolean(),
    headline: z.string(),
    ingress: z.string(),
    stories: z.array(StorySchema),
    themes: z.array(ThemeSchema),
});

const RULES = `Regler du MÅ følge:
1. Bruk bare opplysninger som står i sakene du får (tittel og sammendrag). Ikke legg til tall, priser, datoer, navn eller påstander som ikke står der. Ikke bruk egen kunnskap.
2. Bare saker om elbil, lading, elbilpolitikk, avgifter, nye elbilmodeller eller bilsalg som er relevante for Norge. Hopp over alt annet.
3. Slå sammen saker om samme hendelse til én sak, og oppgi alle kildenes id-er i item_ids.
4. Skriv med egne ord. Ikke kopier setninger fra kildene. Høyst ett kort sitat per sak (under 15 ord), og det må være ordrett fra tittel eller sammendrag i saken du oppgir i quote.item_id. Bruk null hvis du ikke trenger sitat.
5. Hvis kildene om samme sak oppgir forskjellige opplysninger, beskriv uenigheten kort i disagreement. Ellers null.
6. "stories" er "Nytt i dag": de {MIN}–{MAX} viktigste sakene, rangert etter hvor nyttige de er for folk som skal velge elbil. Hver sak: title, text (2–4 setninger), meaning (én setning om hva det betyr for den som vurderer elbil).
7. "themes" er "Hva snakkes det om": {MIN_T}–{MAX_T} temaer som går igjen i flere av sakene du har fått. Beskriv bare hva sakene handler om. Ikke skriv hva "folk mener" eller hva som "diskuteres" utover det sakene selv sier. Oppgi item_ids for sakene temaet bygger på.
8. headline: kort tittel for dagens side (maks 70 tegn) som nevner den viktigste saken. ingress: én setning (maks 155 tegn) som oppsummerer dagen.
9. Hvis det er færre enn {MIN} relevante saker, sett enough_relevant til false og la stories og themes være tomme.`;

export function buildPrompt({ tone, items, config, dateLabel }) {
    const rules = RULES
        .replaceAll('{MIN}', config.minStories).replaceAll('{MAX}', config.maxStories)
        .replaceAll('{MIN_T}', config.minThemes).replaceAll('{MAX_T}', config.maxThemes);
    const payload = items.map(i => ({
        id: i.id,
        kilde: i.sourceName,
        publisert: i.published.toISOString(),
        tittel: i.title,
        sammendrag: i.summary,
    }));
    return {
        system: `${tone.trim()}\n\n${rules}`,
        user: `Dagens dato: ${dateLabel}.\n\nHer er sakene fra de siste døgnene (JSON). Lenker legges til automatisk ut fra id-ene, så du skal ikke skrive URL-er.\n\n${JSON.stringify(payload, null, 1)}`,
    };
}

export async function writeDigest({ tone, items, config, dateLabel, fakeResponsePath }) {
    if (fakeResponsePath) {
        return DigestSchema.parse(JSON.parse(fs.readFileSync(fakeResponsePath, 'utf8')));
    }
    if (!process.env.ANTHROPIC_API_KEY) {
        throw new Error('ANTHROPIC_API_KEY er ikke satt. Legg den inn i GitHub Secrets (eller som miljøvariabel lokalt).');
    }
    const { system, user } = buildPrompt({ tone, items, config, dateLabel });
    const client = new Anthropic();
    const response = await client.messages.parse({
        model: config.model,
        max_tokens: 16000,
        system,
        messages: [{ role: 'user', content: user }],
        output_config: { format: zodOutputFormat(DigestSchema) },
    });
    if (response.stop_reason === 'refusal') {
        throw new Error(`Modellen avslo forespørselen (${response.stop_details?.category ?? 'ukjent kategori'})`);
    }
    if (response.stop_reason === 'max_tokens') {
        throw new Error('Svaret fra modellen ble avkortet (max_tokens)');
    }
    if (!response.parsed_output) {
        throw new Error('Kunne ikke tolke svaret fra modellen som gyldig JSON');
    }
    console.log(`  Tokens: ${response.usage.input_tokens} inn, ${response.usage.output_tokens} ut`);
    return response.parsed_output;
}
