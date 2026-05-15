#!/usr/bin/env node
//
// GDPR data lookup/delete for elbilvalg.no
//
// Usage:
//   node scripts/gdpr-lookup.js <IP-address>            — find all data
//   node scripts/gdpr-lookup.js <IP-address> --delete   — delete all data
//
// Requires: npm install firebase-admin (one-time setup)
// Auth:     Set GOOGLE_APPLICATION_CREDENTIALS to your Firebase service account key JSON,
//           or run from a machine with default credentials.
//
//   export GOOGLE_APPLICATION_CREDENTIALS="path/to/serviceAccountKey.json"
//
// To get the key: Firebase Console → Project settings → Service accounts → Generate new private key

const crypto = require("crypto");
const { initializeApp, cert, applicationDefault } = require("firebase-admin/app");
const { getFirestore } = require("firebase-admin/firestore");

const IP = process.argv[2];
const DELETE = process.argv.includes("--delete");

if (!IP) {
    console.error("Usage: node scripts/gdpr-lookup.js <IP-address> [--delete]");
    process.exit(1);
}

const ipHash = crypto.createHash("sha256").update(IP).digest("hex");
console.log(`IP: ${IP}`);
console.log(`SHA-256 hash: ${ipHash}`);
console.log(`Mode: ${DELETE ? "DELETE" : "LOOKUP"}\n`);

const app = initializeApp({
    credential: process.env.GOOGLE_APPLICATION_CREDENTIALS
        ? cert(require(process.env.GOOGLE_APPLICATION_CREDENTIALS))
        : applicationDefault(),
    projectId: "elbilvalg",
});

const db = getFirestore(app);

async function run() {
    const ratingsSnap = await db.collection("ratings").get();
    const found = [];

    ratingsSnap.forEach((doc) => {
        const data = doc.data();
        if (data.votes && data.votes[ipHash] !== undefined) {
            found.push({
                collection: "ratings",
                docId: doc.id,
                field: `votes.${ipHash}`,
                value: data.votes[ipHash],
            });
        }
    });

    if (found.length === 0) {
        console.log("No data found for this IP.");
        return;
    }

    console.log(`Found ${found.length} record(s):\n`);
    found.forEach((r) => {
        console.log(`  Collection: ${r.collection}`);
        console.log(`  Document:   ${r.docId}`);
        console.log(`  Field:      ${r.field}`);
        console.log(`  Value:      ${r.value}`);
        console.log();
    });

    if (DELETE) {
        const { FieldValue } = require("firebase-admin/firestore");
        for (const r of found) {
            await db.collection(r.collection).doc(r.docId).update({
                [r.field]: FieldValue.delete(),
            });
            console.log(`  Deleted ${r.field} from ${r.collection}/${r.docId}`);
        }
        console.log(`\nDone. ${found.length} record(s) deleted.`);
    } else {
        console.log("To delete this data, run again with --delete");
    }
}

run().then(() => process.exit(0)).catch((e) => {
    console.error("Error:", e.message);
    process.exit(1);
});
