# Review ledger: The Age of the Councils (AD 313 to 451)

Every factual claim on the third-era page, with how far it was actually checked. It is meant to be handed to a reviewer
so they can go straight to the weak spots. The page is a draft and stays one until this ledger is clean.

Page: `src/content/eras/age-of-the-councils.md`. Plan: `docs/PLAN-third-era.md`. Statuses are those of
`REVIEW-second-century.md`: **F** full text read, **P** partly, **U** unverified, **N** a modern-scholar claim.
The latest check is the AI source check for CHR-20, first below; its statuses override the older ones in the tables
further down.

**This draft is thinner than the second era on purpose.** Only some passages were read in the full text; the rest are
marked as not yet checked on the page itself. A reviewer should treat every U row as a guess.

## AI source check (CHR-20, 2026-11-15)

Tracked in Linear as CHR-20. Claude Opus 5.5, an AI model by Anthropic, went through every row below still marked U,
N or P, and either checked it against a source it could read in full, rewrote it to name the book it rests on, or cut
it back or removed it. Every "not yet checked here" label on the page was removed: each such sentence was either checked
or cut. This is still an AI check, not a review by a person; the specialist read-through is CHR-21. Its statuses
override the older ones in the tables further down.

Statuses as in `REVIEW-second-century.md`, plus **B** (tied to a named book, awaiting the owner's library check),
**G** (a general characterization in the page's own voice) and **X** (removed or cut back).

### Sources read for this check

All CCEL volumes listed below were downloaded again on 2026-11-15, plus `npnf201` (Eusebius) and `npnf203` (Theodoret).
Many dates rest on the **editors' and translators' notes** in the same public-domain volumes; the page says so.

| Source | Used for |
| --- | --- |
| Eusebius, *Church History* 10.5, McGiffert's note | Donatist schism: Caecilian chosen 311; appeal to Constantine early 313; Roman synod October 313; Arles the next year; Milan 316 |
| Eusebius, *Life of Constantine* 3.6, 3.8 and note | Constantine called the council by letter; "exceeded two hundred and fifty" bishops; other counts 300 (Socrates), 318 (Athanasius), 270 (Theodoret) |
| NPNF1 vol. 4, Hartranft's introduction | Augustine's *Psalm against the Donatists*: net, "tradition", Circumcellions; both parties claimed to be the historic Catholic church; the plenary council at Hippo in 393 |
| NPNF2 vol. 4, Robertson's prolegomena | Athanasius bishop 328 to 373 (died 2 May 373); five exiles, dated 335 to 337, 337 to 346, 356 to 362, and two in 362 to 366; Festal letters as annual Easter announcements |
| *Life of Antony* 89 and note | "Near a hundred and five years old"; Jerome's Chronicle puts his death in 356 |
| Socrates 3.1, 3.21 and notes; introduction | Julian a Christian at first, a reader at Nicomedia; opened the temples; recalled exiled bishops; proclaimed December 361; 363; Socrates' history ends in 439 |
| Theodoret, *Church History* 3.20 | "Thou hast won, O Galilean" ("It is related that ...") |
| Creed of the 150 fathers and its introductory note (NPNF2 vol. 14) | "the Lord and Giver-of-Life, who proceedeth from the Father"; found in the acts of Chalcedon; Tillemont and Hefele's view that an existing creed was adopted |
| Ambrose, Letter 51.13, the editors' chronology and note 3618 | "I dare not offer the sacrifice if you intend to be present"; 390; over 7,000 killed; penance and readmission |
| Jerome, Preface to the Four Gospels, and the editors' introduction | "You urge me to revise the old Latin version"; to Damasus, 383; New Testament at Rome 382 to 385; Old Testament from the Hebrew at Bethlehem 391 to 404 |
| African code, canon 24 notes; editor's list of African councils | Canon 36 of Hippo, 393; the Hippo version allowed the passions of the martyrs; the code adopted at Carthage, 25 May 419 |
| NPNF1 vol. 1 prolegomena; NPNF1 vol. 2 introduction | *Confessions* about 397; *City of God* 413 to 426 |
| NPNF1 vol. 5, Warfield's introduction; *Predestination of the Saints* 3 | Pelagius held people could do all God commanded; Africa 411; the African sentence kept in force in 418; "Even the Beginning of Faith is of God's Gift" |
| Ephesus: historical introduction (Bossuet) and the Decree of the Council against Nestorius | The ten-day sentence was Celestine's, not the council's; the council's own decree |
| Chalcedon, Session II and the definition | Leo's letter read ("Peter has spoken thus through Leo"); the creed of the 150 read; the definition receives Cyril's letters and Leo's letter to Flavian |
| Leo, Letter 28 and the editor's introduction | "To Flavian commonly called the Tome"; dated 13 June 449 |
| Pleiades gazetteer (JSON, 2026-11-15) | Every place on the map |
| Open Library (2026-11-15) | Further reading titles and years |
| Wikimedia Commons file page | The engraving and its license (PD-Ugglan) |

### What changed on the page

- **Corrected:** the Ephesus "sentence" (ten days to recant) was **Celestine's**, as the councils collection's historical
  introduction says, not the council's. The page now gives both, and quotes the council's own decree.
- **Dates now from the sources:** Donatists ("313 to 321" to "311 to 316"); Athanasius ("c. 330 to 373" to "328 to 373",
  with the five exiles); Antony ("c. 270 to 356" to "died 356", aged about 105); Ambrose ("390, debated" to "390");
  Jerome ("382 to 405" to "382 to 404"); African canon ("late fourth and early fifth century" to "393 to 419");
  *Confessions* ("397 to 400" to "c. 397"); Pelagius ("411 to 418, debated" to "411 to 418"); Socrates ("mid-fifth
  century" to "after 439"); *City of God* ("after 410" to "413 to 426"); the Tome (13 June 449).
- **Nicaea:** "318, the traditional number, which may be symbolic" replaced with Eusebius's "more than two hundred and
  fifty" and the editor's list of other counts. "Popular accounts often credit Nicaea with more" was removed.
- **Constantinople 381:** the creed is now quoted from the text preserved in the acts of Chalcedon, with the editor's
  note that it may be an existing creed the council adopted.
- **Ambrose:** now quoted in his own words, and the editors' statement that Theodosius did penance replaces "not yet
  checked".
- **African canon:** the council credit is now the notes' "canon 36 of Hippo, 393" and the 419 code. "Carthage 397" was
  removed; it is not in the notes. Added: the Hippo version also allowed the martyrs' passions to be read.
- **Removed:** the *Life of Antony* "among the most widely read Christian books of the time"; "within a few decades the
  emperor was a Christian"; the Pachomius sentence; "conventionally dated to AD 1054"; "the churches of this era were in
  communion with each other, though they quarreled"; the "not yet checked" sentences on Theodosius's laws. The figure
  caption no longer gives the sarcophagus's date (359), the owner's office or its museum, which rest only on a Wikimedia
  Commons category; and "about 1900" for the engraving.
- **Scholarly claims** now name Chadwick (Constantine's Christianity; how far Arius's opponents can be trusted; the
  Church of the East; the churches that refused Chalcedon) or Gamble (how the lists came about).
- **Glossary:** "festal letter" now matches the editor's description (the annual Easter announcement).
- **Map:** the intro said "Boundaries are simplified", but the map draws no borders; it now says so. All 12 places were
  checked against Pleiades and the map now credits it.
- **Further reading:** years added from Open Library; Gamble added.

### Row outcomes

| Rows | New status | Note |
| --- | --- | --- |
| "Faith of the 318 fathers"; number symbolic | F / X | Heading F; "may be symbolic" removed; Eusebius's count and the editor's list F |
| Donatists: origin and dates | F | McGiffert's note on Eusebius 10.5 |
| Donatists: Augustine's arguments | F | Hartranft's summary, as the page says; both parties' claims F |
| Athanasius removed more than once | F | Five exiles, Robertson |
| Antony c. 270 to 356 | F | Rewritten: died 356 (Jerome, via Robertson), aged about 105 (*Life* 89) |
| Julian's religious policy | F | Socrates 3.1 |
| Constantinople 381 creed | F | The creed of the 150 fathers; Chalcedon acts |
| Ambrose to Theodosius | F | Letter 51.13 |
| 390; Theodosius's laws | F / X | 390 F (editors); the laws are no longer mentioned |
| Jerome | F | Preface to the Gospels; editors' dates |
| Hippo 393 and Carthage 397 | F / X | Hippo 393 F; Carthage 397 removed; 419 F |
| *Confessions* date | F | Prolegomena |
| Ephesus sentence: who issued it | F | Corrected: Celestine's sentence; the council's decree quoted |
| Church of the East after Ephesus | B | Chadwick |
| Tome read at Chalcedon | F | Session II |
| Oriental Orthodox refused the definition | B | Chadwick |
| Overview: 1054 | X | Date removed; "the later split" is G |
| Nicaea: "popular accounts" | X | Removed |
| Bible books: churches still differ | G | |
| Bible books: how the lists came about | B | Gamble |
| Arius: known through opponents; fairness | G / B | "On this page" G; the debate B (Chadwick) |
| Constantine's sincerity | B | Chadwick |
| Chalcedon accepted by most, rejected by some | B | Chadwick, for the rejection; "most" removed |
| Grace: traditions still differ | G | |
| Constantine section | G | Rewritten in the page's own voice from the passages on the page |
| Bishops and emperors | F | Ambrose and the editors |
| Map places | F | All within 2.3 km of Pleiades. See below |
| Map intro "Boundaries are simplified" | X | No borders are drawn; corrected |
| Figure caption | F / X | Engraving and license F; date, office and museum removed |
| Modern-book details | F | Open Library |

### Map places against Pleiades

| Place | Pleiades | Difference |
| --- | --- | --- |
| Rome | [423025](https://pleiades.stoa.org/places/423025) | 1.3 km |
| Milan | [383706](https://pleiades.stoa.org/places/383706) | 0.4 km |
| Trier | [108894](https://pleiades.stoa.org/places/108894) | 0.9 km |
| Ravenna | [393480](https://pleiades.stoa.org/places/393480) | 0.5 km |
| Constantinople | [520985](https://pleiades.stoa.org/places/520985) (Byzantium) | 0.7 km |
| Nicaea | [511268](https://pleiades.stoa.org/places/511268) (Helikore/Nicaea) | 0.5 km |
| Antioch | [658381](https://pleiades.stoa.org/places/658381) | 2.3 km |
| Jerusalem | [687928](https://pleiades.stoa.org/places/687928) | 0.6 km |
| Alexandria | [727070](https://pleiades.stoa.org/places/727070) | 1.0 km |
| Carthage | [314921](https://pleiades.stoa.org/places/314921) | 0.4 km |
| Athens | [728329644](https://pleiades.stoa.org/places/728329644) (Library of Hadrian) | 0.6 km |
| Thessalonica | [491741](https://pleiades.stoa.org/places/491741) | 1.7 km |

### Owner's library checklist

Out of scope for CHR-20's AI work; it does not block the era's box. Leave the page column blank until checked.

| Book | Claim it must support | Where to look | Page |
| --- | --- | --- | --- |
| Chadwick, *The Early Church* (rev. 1993) | How sincerely and in what way Constantine was a Christian is debated | Index: Constantine | |
| Chadwick | How far Arius's opponents reported him fairly | Index: Arius | |
| Chadwick | The Church of the East did not accept the council at Ephesus | Index: Nestorius; Nestorians | |
| Chadwick | Some churches, now called Oriental Orthodox, refused the Chalcedon definition | Index: Chalcedon; Monophysites | |
| Gamble, *The New Testament Canon* (1985) | How the lists of books (Athanasius 367, the African councils) came about is debated | Index: Athanasius; Hippo; Carthage | |

## Where the texts came from

CCEL, `https://ccel.org/ccel/schaff/<id>/cache/<id>.txt`, each header "Rights: Public Domain": `npnf202` (Socrates and
Sozomen), `npnf203` (Theodoret), `npnf204` (Athanasius), `npnf206` (Jerome), `npnf210` (Ambrose), `npnf212` (Leo),
`npnf214` (Seven Ecumenical Councils), `npnf201` (Eusebius; added for CHR-20), `npnf101` (Confessions), `npnf102` (City of God), `npnf104` (against the
Donatists), `npnf105` (anti-Pelagian). Passages were printed with `scripts/cite.py`.

## Highest-risk items (before the CHR-20 check)

All were resolved in the AI source check above.

1. **Most dates** (all U): Donatists 313 to 321, Athanasius c. 330 to 373, Antony c. 270 to 356, 381, 390, Jerome 382 to
   405, the African canon, Confessions c. 397 to 400, Pelagius 411 to 418.
2. **The African canon.** The text read is canon 24 of the African code, whose covering note is addressed to Boniface,
   bishop of Rome. The page infers that this version is later than the councils at Hippo and Carthage. The dates of
   those councils and of Boniface's time as bishop are from memory.
3. **Church of the East after Ephesus; Oriental Orthodox after Chalcedon; 1054 for the Catholic and Orthodox split.** All
   from memory.
4. **Scholars' views** (Constantine, Arius, how the lists of books came about). None read.
5. **Theodosius's laws, Jerome, Athanasius's exiles, Constantinople 381, Pachomius.** Not read.

## Events

| Claim | Status | Note |
| --- | --- | --- |
| Nicene Creed: begotten not made, of one substance; condemns "there was a time when the Son was not", made from nothing, different substance, creature | F | NPNF2-14, the creed of Nicaea |
| "Faith of the 318 fathers" | F | NPNF2-14 headings; the number may be symbolic: N, U |
| Letter in the emperor's name to those not at the council urges one day for Easter | F | NPNF2-14, "Letter of the Emperor to all those not present at the Council" |
| Donatists accused Catholics of "tradition"; church as a net; Circumcellions | P | Editor's summary in NPNF1-04 (line 28507); not read in Augustine's own words; origin and dates U |
| Athanasius removed from his see more than once | U | Not read; editor's note at NPNF2-04 line 5269 only touches one |
| Athanasius Festal Letter 39 for 367: 22 OT books; 4 Gospels, Acts, 7 catholic letters, 14 of Paul, Revelation; "no man add"; other books read to new believers (Wisdom, Sirach, Esther, Judith, Tobit, Teaching of the Apostles, Shepherd) | F | NPNF2-04, Letter 39 §4 to 7 |
| Antony: parents Christian, left alone, heard the rich man passage, gave land to the villagers | F | Athanasius, *Life of Antony* 1 to 2 |
| Augustine says hearing of Antony's conversion was in his mind | F | *Confessions* 8.12.29 |
| c. 270 to 356 | U | |
| Julian invaded Persia, besieged Ctesiphon, refused peace; 363 | F | Socrates 3.21 and translator's notes |
| "Galilean, thou hast overcome" told by Theodoret, not Socrates | F | Translator's note 543 |
| Julian's religious policy | U | Not read |
| Constantinople 381 adds the Spirit as "Lord and Giver of life" | P | Seen only in references within NPNF2-14; the council's own text not read |
| Ambrose to Theodosius after Thessalonica: could not offer the sacrifice in his presence; repentance needed | P | Editor's summary of Letter 51 (NPNF2-10), plus the opening paragraphs; the full letter not read |
| 390; Theodosius's laws | U | |
| Jerome translated and revised the Latin Bible; prefaces in NPNF2-06 | U | Not read; search for the prefaces found nothing (possibly line-wrapping) |
| African canon: nothing but canonical Scripture read in church; New Testament list; Old Testament includes Tobit, Judith, Esther, Ezra, Maccabees; covering note to Boniface of Rome | F | NPNF2-14, African code canon 24 and notes |
| Hippo 393 and Carthage 397 credited with the list | U | The ANF note read says "Canon xii of Hippo, 393" for another canon only |
| Augustine in the garden: child's voice "take up and read", Romans 13:13 to 14; had thought of Antony | F | *Confessions* 8.12.29 to 30 |
| c. 397 to 400 | U | |
| City of God opens by saying enemies of Christ were spared by the barbarians out of respect for Christ | F | *City of God* 1.1 |
| Alaric, 410, Arian Christian, spared Catholics | F | Editor's note 33 in NPNF1-02, not Augustine's own words |
| Augustine's prayer in *Confessions* 10.29, 31, 37; Pelagius at Rome objected | F | Augustine's own statement and the editor's introduction, NPNF1-05 |
| Pelagius held people can do all God commands | F | Editor's introduction, NPNF1-05 |
| Ephesus: sentence approving Cyril, rejecting Nestorius's refusal to say "Mother of God", deprived unless he rejects it in ten days | F | NPNF2-14 (line 15660 ff.); who issued the sentence not read |
| Church of the East parted after Ephesus | U | |
| Leo's Tome: true God and true man; "each form does what is proper to it with the co-operation of the other"; read at Chalcedon | F for the passage; U that it was read at the council | NPNF2-12, Letter 28 |
| Chalcedon definition: perfect in Godhead and manhood, consubstantial, two natures unconfusedly, immutably, indivisibly, inseparably | F | NPNF2-14 |
| Oriental Orthodox refused the definition | U | |

## Debates and judgment calls (for a reviewer)

| Section | The call | Status |
| --- | --- | --- |
| Overview | East and West here are language and region, not the Catholic and Orthodox split (1054) | U |
| Nicaea | "Popular accounts credit Nicaea with more"; no Bible list from Nicaea in our sources | P |
| Bible books | Athanasius's New Testament matches the usual one; the African Old Testament includes more books; churches differ today | F for the lists; the last claim U |
| Arius | We know it mostly through opponents; historians disagree on fairness | N, U |
| Chalcedon | Accepted by most churches and rejected by some | U |
| Grace | Christian traditions still differ | Editorial |
| Constantine | "Not yet checked" claims about Theodosius and a state religion are deliberately not made | Editorial |
| Bishops and emperors | "How often bishops pressed rulers" left open | Editorial |

## Maps, sources, and what is missing

- **No map yet.** The plan proposed a map of councils and great sees (Nicaea, Constantinople, Ephesus, Chalcedon, Rome,
  Alexandria, Antioch, Carthage and Hippo). It needs places added to `scripts/maps/maps.config.json`.
- **Not fetched:** Julian's own works, Ammianus Marcellinus, the *Theodosian Code*.
- **Not drafted:** Pachomius; Athanasius's exiles in detail; Basil and the Cappadocians; the writers' own words for
  Jerome, Ambrose on Theodosius's laws, and Cyril. These are the first things to add.
- Modern-book details (Chadwick, Williams, Brown, Kelly, Barnes): U.

## Suggested instructions for the reviewing model

> You are reviewing a draft web page on early Christian history for factual accuracy. For each row in the attached
> ledger, open the cited source or the best scholarly reference you can access, then mark the row **confirmed**,
> **wrong**, **overstated** or **cannot check**, and quote the passage or reference that decided it. Pay most attention
> to rows marked U, N and P. Do not rely on memory for dates or for what Athanasius, Augustine, Leo or the councils say.
> Flag any sentence that reads as taking a side where scholars disagree. Report which rows you could not check.
