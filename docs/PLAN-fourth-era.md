# Plan: The Fourth Era (after Chalcedon, about AD 451 to 600)

> Drafted 2026-11-11 as a planning document, not page content. Tracked in Linear as the E4 issue (CHR team).
> Every date, passage reference and book detail below is from the drafter's general knowledge and is **U**
> (unverified) until checked, as in `PLAN-third-era.md`. Nothing here has been fetched or read in a source yet.

Proposed slug: `late-antiquity` (file `src/content/eras/late-antiquity.md`, `order: 4`). Title is a suggestion; the
owner may prefer "The Western Collapse and the Eastern Empire" or similar.

## Decisions (owner, 2026-11-11)

1. **End date: AD 600.** Gregory the Great's mission to England (597) and Gregory's papacy (590 to 604) fall inside the era.
2. **East is in scope.** Keep the Byzantine East (Justinian) and the Oriental churches parting after Chalcedon, as in
   era 3, and give each a row or more in the events table.
3. **Islam is mentioned, not narrated.** The owner wants it noted. Add one short note at the end of the page (not an
   event row) saying that Islam emerges in Arabia from the 610s, after this era, and how it relates to the churches here.
   Keep it to the sources' facts; the date and details are U until checked.

## Why this boundary

Era 3 closes on the Council of Chalcedon (451), which leaves the church divided between East and West. Era 4 follows
what the church looked like as the western empire fell and Latin Christianity and eastern imperial Christianity grew
apart. Stopping at about 600 covers the late-antique transition and the first great papal and monastic figures
without running into the early medieval period.

## Notable events (aim for about 14 to 16, tagged East, West or Both)

| Date | Region | Event | Main source (candidate) |
| --- | --- | --- | --- |
| c. 432 to 461 | West | Patrick's mission in Ireland; his *Confession* | Patrick, *Confession* (edition to choose) |
| 452 | West | Leo the Great meets Attila (the story is debated) | Prosper; *Liber Pontificalis* (mark as debated) |
| 455 | West | Vandals sack Rome | Procopius, *Vandalic War* |
| 476 | West | Odoacer deposes the last western emperor; traditional end of the Western Empire | Marcellinus Comes (chronicle) |
| c. 480 to 547 | West | Benedict of Nursia; his *Rule* (c. 530) | Gregory the Great, *Dialogues* 2 |
| c. 496 to 508 | West | Clovis, king of the Franks, is baptised (date debated) | Gregory of Tours, *History of the Franks* 2 |
| c. 524 | West | Boethius writes *The Consolation of Philosophy* in prison, then is executed | Boethius (public-domain translation to choose) |
| 527 to 565 | East | Justinian reigns; codifies Roman law | *Corpus iuris civilis* (edition to choose); Procopius |
| 529 to 534 | East | Justinian's Code and the Digest, Institutes and Novels | as above |
| 537 | East | Hagia Sophia dedicated in Constantinople | Procopius, *Buildings* 1 |
| 543 to 553 | East | The Three Chapters controversy; Council of Constantinople II (553) | *Seven Ecumenical Councils* (NPNF2 vol. 14, already chosen) |
| c. 540 to 600 | East | Miaphysite (non-Chalcedonian) churches organise separately in Syria and Egypt | Secondary sources only; chronicle of John of Ephesus (to check) |
| 590 to 604 | West | Gregory the Great is pope; writes the *Pastoral Rule* and the *Dialogues* | NPNF2 vols. 12 and 13 (CCEL), chosen in principle |
| 596 to 597 | West | Gregory sends Augustine of Canterbury to the English | Bede, *Ecclesiastical History* 1 (edition to choose) |
| c. 600 | West | Isidore of Seville writes encyclopaedic works (*Etymologies*) | Isidore (edition to choose) |

Dropped for now: the Council of Orange (529), Columbanus's monasteries (may return as a person), and the Visigothic
church in Spain (one line in the West row if space allows).

## Candidate people (about 10)

Patrick, Attila (only as the Leo story), Leo the Great (already in era 3; a return visit), Boethius, Benedict of Nursia,
Justinian, Theodora (only if the Monophysite story needs her), Gregory of Tours, Gregory the Great, Augustine of
Canterbury, Isidore of Seville. Possible: Cassiodorus, Columbanus.

## Maps

| Map | Content | Status |
| --- | --- | --- |
| 1. Churches and kingdoms about 600 | Rome, Constantinople, Ravenna, Carthage (lost to the Vandals and retaken in 533), Canterbury, Ireland, Alexandria, Antioch | Proposed |
| 2. Benedict's monasteries | Subiaco, Monte Cassino | Optional |

Map work: places to add to `scripts/maps/maps.config.json` are Ravenna, Canterbury, Monte Cassino, Subiaco, Tours and
Seville. Ireland and Britain may fall outside the current relief crop (5°E to 45°E); check before drafting Map 1.

## Sources to choose (expected public domain; licences to record)

| Source | Candidate edition | Used for |
| --- | --- | --- |
| Leo, Tome (already in hand from era 3) | NPNF2 vol. 12 (CCEL) | Leo and Attila |
| Gregory the Great, *Pastoral Rule*, *Dialogues* | NPNF2 vols. 12 and 13 (CCEL) | Gregory, Benedict |
| Bede, *Ecclesiastical History* | Sellar translation (Gutenberg or CCEL) | Augustine of Canterbury |
| Gregory of Tours, *History of the Franks* | Thorpe or Dalton, if public domain | Clovis |
| Procopius, *Wars*, *Buildings* | Dewing (Loeb) if a public-domain text is online; otherwise cite only | Justinian, Hagia Sophia, Vandals |
| Boethius, *Consolation* | Cooper or Stewart and Rand translations, if public domain | Boethius |
| Patrick, *Confession* | Public-domain translation to choose | Patrick |
| *Corpus iuris civilis* | Scott translation, if public domain | Justinian's law |
| Isidore, *Etymologies* | Barney et al. (modern) or the Latin text; licence check needed | Isidore |

## Modern books (to choose; owner needs library copies)

- Peter Brown, *The World of Late Antiquity* (framework)
- Averil Cameron, *The Mediterranean World in Late Antiquity* (East and West)
- Richard Fletcher, *The Conversion of Europe* (Clovis, Augustine of Canterbury)
- Ian Wood, *The Merovingian Kingdoms* (Gregory of Tours, Clovis)

Recommendation: Brown for the framework, Fletcher for the conversions, Cameron for the East. All details to verify.

## Process and site work

Same process as eras 2 and 3: choose editions and record licences first; download the full texts before drafting;
check each citation as it is written with `scripts/cite.py`; keep the ledger as we go
(`docs/REVIEW-late-antiquity.md`); set `reviewStatus` from the first commit.

Site: no code change is needed for the page. The home page "More eras" card (`src/pages/index.astro`, line 40) may
need its wording changed once four eras are listed. Search needs no change.

## Linear

- **E4** (plan and draft the fourth era): this document; Backlog until the owner decides the open points.
- **E4b** and **E4c**: scholarly-claims check and specialist read-through, created with the page, mirroring E3b and
  E3c.

## Order of work

1. Owner decides the three open points above.
2. Fetch the texts, pick editions, update `SOURCES.md`.
3. Draft the era with the ledger, checking citations as written.
4. Add the maps and build; check the home page and search.
5. Open the PR and create E4b and E4c.
