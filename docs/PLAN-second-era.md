# Plan: The Second Era (after the apostles, about AD 100 to 313)

> **Update 2026-11-11:** the owner chose one era running to AD 313 (Constantine), not a split at AD 200. The event
> list below still covers AD 100 to 200 only; the AD 200 to 313 events and the notable/less-certain assessment are in
> the section "Added for AD 200 to 313" near the end. Because the era is now about 213 years, plan to present it in two
> parts on one page ("AD 100 to 200" and "AD 200 to 313") and to cap events at about 25 so the page stays reviewable.

Tracked in Linear as CHR-12. This is a planning document, not page content. Nothing here has been checked against a
source yet: every date, passage reference and book detail below is from the drafter's general knowledge and is marked
**U** until it is confirmed (see the status key in `REVIEW-apostolic-age.md`).

Proposed slug: `second-century` (file `src/content/eras/second-century.md`, `order: 2`).

## Decisions so far (owner, 2026-11-11)

- Boundaries: AD 100 to about 200. The third era (AD 200 to 313, ending with the Edict of Milan) is a later issue.
- Maps: include **Map 1** (churches around AD 150) and **Map 2** (Ignatius's journey to Rome). **Map 3** (the
  letter-writing network) is to be considered later.
- Approach: follow the Apostolic Age pattern (overview, sources table, people, events, debates, worship, glossary,
  further reading) and look for what is interesting in this period.

## Still open for the owner

- Is there a topic readers especially want? Candidate: how the list of New Testament books came together.
- Which one or two modern books anchor the era (see "Modern books" below)?

## Where the first era left off

The Apostolic Age page holds back, or only touches: Ignatius, Polycarp, Pliny, the Didache, Justin's description of
worship, and 2 Peter (held back because it probably falls after AD 100). Its worship section already leans on the
Didache and Justin, so the second era should expand those, not repeat them.

## Proposed contents

### Events (aim for about 14 to 18; the first era had 20)

| # | Date | Event | Main source |
| --- | --- | --- | --- |
| 1 | c. 110 | Ignatius is taken from Antioch to Rome and writes seven letters on the way | Ignatius (ANF1); Eusebius 3.36 |
| 2 | c. 110 | Ignatius first uses "catholic church" (*Smyrnaeans* 8) | Ignatius (ANF1) |
| 3 | c. 112 | Pliny writes to Trajan about Christians in Bithynia; Trajan replies | Pliny, *Letters* 10.96 and 10.97 |
| 4 | c. 110 to 140 | Polycarp writes to the Philippians | Polycarp (ANF1) |
| 5 | c. 100 to 150 | The Didache, Barnabas and the Shepherd of Hermas circulate | ANF7, ANF1, ANF2 |
| 6 | c. 155 to 160 | Polycarp is martyred at Smyrna (the date is debated) | *Martyrdom of Polycarp* (ANF1); Eusebius 4.15 |
| 7 | c. 144 | Marcion is expelled from the church in Rome and founds his own churches | Tertullian, *Against Marcion* (ANF3) |
| 8 | c. 140 to 160 | Valentinus and other Gnostic teachers in Rome and Alexandria | Irenaeus, *Against Heresies* 1 (ANF1) |
| 9 | c. 150 to 165 | Justin writes his *First Apology* and describes Sunday worship | Justin (ANF1) |
| 10 | c. 165 | Justin is tried and executed in Rome | *Martyrdom of Justin* (to be sourced) |
| 11 | c. 150 to 170 | Montanus and the New Prophecy begin in Phrygia | Eusebius 5.16 to 5.19 |
| 12 | c. 177 | Persecution at Lyon and Vienne | Eusebius 5.1 |
| 13 | c. 170 to 180 | Celsus writes against the Christians (known through Origen's reply) | Origen, *Against Celsus* (ANF4) |
| 14 | c. 180 | Irenaeus, bishop of Lyon, writes *Against Heresies* | Irenaeus (ANF1) |
| 15 | c. 190 | The dispute over the date of Easter; Victor of Rome and Polycrates of Ephesus | Eusebius 5.23 to 5.25 |
| 16 | c. 170 to 200 | The first lists of New Testament books (Muratorian fragment, Irenaeus) | Muratorian fragment (edition to find); Irenaeus 3.11 |
| 17 | c. 100 to 150 | 2 Peter is written and later accepted (placed here, not in the first era) | 2 Peter (WEB); Eusebius 3.3 |

### People (aim for about 10 to 12)

Ignatius, Polycarp, Pliny, Trajan, Justin Martyr, Marcion, Valentinus, Montanus, Irenaeus, Celsus, Polycrates,
Victor of Rome. (Hermas and the writer of the Didache are anonymous or little known, so they go under "writings".)

### Sections on the page

1. Overview
2. When were the sources written? (a table like the first era's: who wrote what, and when)
3. Key beliefs and debates
   - What is "catholic"? Ignatius, bishops and unity
   - Marcion and the question of Scripture
   - How the list of New Testament books came together (the likely reader topic)
   - Gnostic teachers: what Irenaeus says and what is only known through opponents
   - Montanism: prophecy and its limits
   - Easter: why the date was disputed
   - What outsiders said (Pliny, Celsus; Tacitus and Suetonius are in the first era)
4. Worship and community life (Justin's description of baptism, the Lord's Supper and Sunday; compare the Didache)
5. Glossary
6. Further reading

### Maps

| Map | Content | Status |
| --- | --- | --- |
| 1. Churches around AD 150 | Rome, Smyrna, Ephesus, Antioch, Alexandria, Lyon and Vienne, Carthage, Corinth, with a note on what each is known for | Included |
| 2. Ignatius's journey to Rome | Antioch, Smyrna, Troas, Philippi, then Rome; stops tied to his letters | Included |
| 3. The letter-writing network | Pliny, Polycarp, Irenaeus and others | Later |

Map work: the places Smyrna, Lyon and Alexandria, Carthage and Vienne need adding to `scripts/maps/maps.config.json`;
the existing relief crop covers 5°E to 45°E, which includes Lyon (about 4.8°E) only barely, so check the left edge.
Antioch, Troas, Philippi, Ephesus, Corinth and Rome already exist in the config.

## Sources and editions (to choose and record before drafting)

All candidates are expected to be public domain; licence and check date go in `SOURCES.md` as each is confirmed.

| Source | Candidate edition | Used for |
| --- | --- | --- |
| Ignatius, Polycarp, Barnabas, Martyrdom of Polycarp, Justin, Irenaeus | Ante-Nicene Fathers vol. 1 (CCEL). Ignatius has a longer and a shorter recension, so name which one | Events 1, 2, 4, 6, 9, 14 |
| Shepherd of Hermas | Ante-Nicene Fathers vol. 2 (CCEL) | Event 5 |
| Didache | Ante-Nicene Fathers vol. 7 (CCEL), already in use | Event 5 |
| Tertullian, *Against Marcion* | Ante-Nicene Fathers vol. 3 (CCEL) | Event 7 |
| Origen, *Against Celsus* | Ante-Nicene Fathers vol. 4 (CCEL) | Event 13 |
| Eusebius, *Church History* | McGiffert, NPNF2 vol. 1 (CCEL), already in use | Events 3 (Trajan context), 6, 11, 12, 15, 17 |
| Pliny, *Letters* 10.96 and 10.97 | A public-domain translation (Melmoth or Church and Brodribb are candidates; find one online and confirm) | Event 3 |
| Muratorian fragment | An English translation with a clear licence (not yet identified) | Event 16 |
| 2 Peter | World English Bible, already in use | Event 17 |

## Modern books (to choose; owner needs library copies)

Proposed, with details to verify. Brown's *Introduction to the New Testament* is already cited and covers 2 Peter.

- Robert L. Wilken, *The Christians as the Romans Saw Them*: Pliny, Celsus, how outsiders saw Christians
- Lee Martin McDonald, *The Biblical Canon*, or Harry Y. Gamble, *The New Testament Canon*: Marcion and the lists of books
- Henry Chadwick, *The Early Church*: general framework and dating
- Judith Lieu, *Marcion and the Making of a Heretic*: Marcion (optional)

Recommendation: pick Wilken (outsiders), one canon book, and Chadwick (framework). Brown stays for 2 Peter.

## Added for AD 200 to 313 (all U: from the drafter's general knowledge)

| Date | Event | Main source |
| --- | --- | --- |
| c. 200 to 220 | Tertullian writes in Carthage (*Apology*, *Against Marcion*) | ANF3 |
| 203 | Perpetua and Felicity are martyred at Carthage | *Passion of Perpetua* (ANF3) |
| c. 200 to 250 | Clement of Alexandria and Origen; Origen's scholarship (the Hexapla) | ANF2; Eusebius 6 |
| c. 235 to 245 | The house church at Dura-Europos (earliest identified church building) | Archaeology; cite only |
| 250 | Decius orders everyone to sacrifice: the first empire-wide pressure on Christians | Cyprian's letters (ANF5); Eusebius 6.39 to 6.41 |
| 251 to 258 | Cyprian and the lapsed; Novatian split; rebaptism dispute | Cyprian (ANF5) |
| 257 to 260 | Valerian's persecution; Cyprian is executed in 258; Gallienus restores property | Eusebius 7.10 to 7.13 |
| c. 260 to 300 | A long period of relative peace and growth | Eusebius 8.1 |
| 303 to 311 | Diocletian's "Great Persecution" | Eusebius 8; Lactantius, *On the Deaths of the Persecutors* (ANF7) |
| 311 | Galerius's edict of toleration | Lactantius; Eusebius 8.17 |
| 312 | Constantine's victory at the Milvian Bridge | Eusebius, *Life of Constantine* (NPNF2 vol. 1); Lactantius |
| 313 | The Milan agreement of Constantine and Licinius (usually called the Edict of Milan) | Lactantius 48; Eusebius 10.5 |

## What scholars treat as notable, and what as uncertain (U; verify against the chosen modern books)

**Widely treated as notable and well attested:** Pliny and Trajan; Ignatius's seven letters; Justin's description of
worship; Irenaeus naming four Gospels; Marcion as the spur to a canon; Tertullian; Origen; Cyprian and the lapsed;
Decius in 250; Diocletian from 303; the Dura-Europos church; the early papyri (P52, P46).

**Real but debated, so the page must say "debated":** the date of the Didache (anywhere from about AD 50 to 150);
the date of the Muratorian fragment (late second century, or the fourth); the date and text of the Martyrdom of
Polycarp; how large the church was (population estimates are guesses); how much Gnostic teachers differed (Nag Hammadi
texts since 1945 changed the picture, because earlier we knew them only through their opponents).

**Commonly repeated but overstated:** the "ten persecutions" (a later scheme; most pressure before 250 was local and
sporadic); martyr numbers; "Edict of Milan" (it was an agreement or letter, and the real toleration edict was
Galerius's in 311); 313 as the day Christianity became the state religion (it did not); "catholic" in Ignatius as the
name of a denomination (it means "universal").

## Process (from CHR-12)

1. Choose editions and record licences in `SOURCES.md` before drafting.
2. Name a book for each scholarly claim as it is written ("Wilken argues...", not "scholars say").
3. Download the full texts first and mark each ledger row **F** as it is written; write a small script that prints a
   cited passage so checking is fast.
4. Set `reviewStatus` from the first commit so the banner is accurate at every stage.
5. Keep a reviewer packet as we go: list judgement calls (contested framing, later tradition) from the start.

## Site work

- `src/pages/eras/[slug].astro`: the maps are hard-coded to `era.id === 'apostolic-age'` (lines 30 and 37). Make maps
  per-era (keyed by era id in `src/data/maps.json`) so any era can have maps and an era without them shows no empty
  section. The page text above the maps also says "These maps follow the account in Acts", which must not appear on the
  second era.
- Add `docs/REVIEW-second-century.md` in the same format as `REVIEW-apostolic-age.md`.
- Home page: check that two eras and the "Coming later" card look right.
- Search: confirm the new era is indexed and results come back sensibly (needs `npm run build`; search is off in dev).

## Order of work

1. Owner confirms the open questions above.
2. Fetch the texts, pick editions, update `SOURCES.md`.
3. Make the maps per-era in the site code (small, can be its own PR).
4. Draft the era with the ledger, checking citations as we write.
5. Add maps 1 and 2.
6. Build, check home and search, open the PR.
7. Create follow-up issues: scholarly-claims check and specialist read-through for this era.
