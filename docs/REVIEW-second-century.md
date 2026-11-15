# Review ledger: After the Apostles (AD 100 to 313)

Every factual claim on the second-era page, with how far it was actually checked. It is meant to be handed to a
reviewer so they can go straight to the weak spots. The page is a draft and stays one until this ledger is clean.

Page: `src/content/eras/second-century.md` and the maps `churches` and `ignatius` in `scripts/maps/maps.config.json`.
Plan and scope: `docs/PLAN-second-era.md`. Tracked in Linear as CHR-12; checked against its sources for CHR-20.

## How "checked" is defined here (read this first)

Nothing below has been checked by a human. The latest check is the AI source check for CHR-20, first below; its statuses override the older ones in the tables further down. The statuses are the same as in `REVIEW-apostolic-age.md`, with one change in
process: the ancient texts were downloaded **before** drafting, and each passage was read in the full text while the
sentence was written, instead of afterwards.

| Status | Meaning |
| --- | --- |
| **F** | Checked against the **full text** of the named public-domain translation. The note gives the passage. An AI read it; this is not a review by a person. |
| **P** | **Partly** checked: some of the sentence is covered by an F source and some is not. The note says which part. |
| **U** | **Unverified.** Written from the drafter's general knowledge. No source was opened for it. Treat as a guess until checked. |
| **N** | A claim about what a **modern scholar** says. Cannot be checked against the ancient text. Needs the named book. |

## AI source check (CHR-20, 2026-11-15)

Tracked in Linear as CHR-20. Claude Opus 5.5, an AI model by Anthropic, went through every row below still marked U,
N or P, and either checked it against a source it could read in full, rewrote it to name the book it rests on, or cut
it back or removed it. Nothing was left in with only a warning label. Quotations already marked F were read again
against the same full texts. This is still an AI check, not a review by a person; the specialist read-through is
CHR-21. Its statuses override the older ones in the tables further down.

The statuses are those of `REVIEW-apostolic-age.md`, plus three for this check:

| Status | Meaning |
| --- | --- |
| **B** | Tied to a **named book** (in copyright, not read by the AI). The page now names the book. The owner checks it against the book and records the page number; until then it counts as not checked. See the checklist below. |
| **G** | A **general characterization**: the page says plainly that scholars differ, or gives an interpretation in its own voice, and claims no more. |
| **X** | **Removed or cut back**, because no readable source supports it. |

### Sources read for this check

The CCEL volumes and the Pliny and World English Bible files in "Where the texts came from" below were downloaded
again on 2026-11-15. Most of the dates now rest on the **translators' and editors' notes** in those volumes, which are
part of the same public-domain editions. The page says so each time ("the translator of our Eusebius", "the editor").

| Source | Edition | Used for |
| --- | --- | --- |
| Eusebius, *Church History*, McGiffert's notes | NPNF2 vol. 1, CCEL | Ignatius under Trajan, Chronicle 107, Lightfoot, Zahn, Harnack (note on 3.36.2); Marcion in Rome about 135 and soon broke with the church (notes on 4.11 and 4.14); Polycarp's martyrdom 155 or 166 to 167 (note on 4.15); Irenaeus born in Asia Minor (note on 4.21); Lyons in the seventeenth year of Antoninus Verus, 177, and Eleutherus about 175 to 189 (notes on the introduction to book 5); Montanus: Chronicle 172, Epiphanius 156 to 157 (note on 5.16); Victor from 189, successor about 200 (note on 5.22); the persecution of 303 (note on 7.11); Diocletian from 284, abdicated 1 May 305 (notes on 8.2 and 8.17); Galerius died 311 and Maxentius 312 (note on 9.11) |
| Eusebius, *Church History* 3.25, 5.20, 6.26, 6.36 | NPNF2 vol. 1 | 2 Peter, Barnabas, the Shepherd and the Didache among disputed or rejected books; Irenaeus saw Polycarp "in lower Asia"; Origen moved from Alexandria to Caesarea; Origen over sixty when he answered Celsus |
| Eusebius, *Life of Constantine* 1.28, 1.38 and editor's notes | NPNF2 vol. 1 | Constantine's reign from 306; the death of Maxentius at the bridge; the 313 edict |
| Lactantius 1, 35, 48 and translator's notes | ANF vol. 7 | The book written after all the persecutors were destroyed; Galerius's edict published at Nicomedia on 30 April and his death a few days later; the third consulship of Constantine and Licinius |
| Justin, *First Apology* 46 | ANF vol. 1 | Christ born "one hundred and fifty years ago" |
| Introductions to Polycarp and the *Martyrdom* | ANF vol. 1 | Polycarp's letter "about the middle of the second century", chapter 13 possibly added; the *Martyrdom* "the earliest of all the Martyria", interpolated in places |
| Introductory note to Ignatius, *Romans* | ANF vol. 1 | "In this letter we first find the use of the phrase 'Catholic Church' in patristic writings" |
| Note 77 on Tertullian, *Apology* | ANF vol. 3 | "Great diversity ... as to the date": Mosheim 198, Kaye 204 |
| Introduction to Origen | ANF vol. 4 | Celsus's *True Discourse*; Redepenning's view that it was written under Marcus Aurelius (161 to 180) |
| Introduction and notes to Cyprian | ANF vol. 5 | Decian persecution 250; *On the Unity* 251; letters from exile 257; Epistle 81 in 258 |
| Muratorian fragment, full text | ANF vol. 5 | Hermas "very recently in our times"; thirteen letters of Paul; "Catholic Church" |
| Didache 7 | ANF vol. 7 | Living water, other water, pouring three times on the head |
| Jerome, *Lives of Illustrious Men* 53 and 80 | NPNF2 vol. 3, CCEL (new) | Tertullian "from the city of Carthage", under Severus and Caracalla, went over to Montanus; Lactantius tutor of Crispus |
| Pliny, letter To Aristo; Bosanquet's introduction | Gutenberg 2811 | "I bore my share of it too as a senator"; consul in AD 100, governor of Bithynia later, died about 113 |
| 2 Peter 1:1, 3:15 to 16 | World English Bible | "the other Scriptures" (capital S, now matched on the page) |
| Yale University Art Gallery, object 1932.1202 | artgallery.yale.edu, read 2026-11-15 | Baptistery wall painting, "ca. A.D. 232", Christian Building, block M8, Yale-French Excavations 1928 to 1937; bibliography lists Kraeling and Welles 1967 |
| Wikimedia Commons file page | commons.wikimedia.org, read 2026-11-15 | The image's source (Yale) and license (PD-Art, PD-US) |
| Pleiades gazetteer | pleiades.stoa.org JSON, read 2026-11-15 | Every place on the two maps |
| Open Library catalogue | openlibrary.org, read 2026-11-15 | Titles, years and publishers in Further reading |

Not readable: Britannica (blocked by a browser check), so the Nag Hammadi find is tied to Chadwick (B). Kraeling's
report was not read; the Dura-Europos text now says only what Yale's record says.

### What changed on the page

- **Dates.** Every timeline date is now the one the cited source or its translator gives, and the summary says who
  gives it and where they disagree. Changed: Ignatius ("c. 110" to "under Trajan, by tradition", with the Chronicle's
  107 and the later views); Pliny ("c. 112" kept as Wilken's, inside Bosanquet's 100 to about 113); Polycarp's letter
  ("110 to 140" to "perhaps the middle of the second century"); Marcion ("144 to 150" to "135 to 150"); Justin ("150 to
  155" to "c. 150"); Montanus ("170 to 180" to "156 to 172"); Lyons ("c. 177, debated" to "177"); Celsus ("175 to 180"
  to "161 to 180"); Irenaeus ("c. 180" to "175 to 189"); Easter ("190 to 195" to "189 to 200"); Tertullian ("197 to
  200" to "198 to 204"); Cyprian ("c. 251" to "251"); Dura-Europos ("230 to 256" to "c. 232"). The same changes were
  made in the "When were the sources written?" table.
- **Dura-Europos.** Cut back to Yale's record: a Christian building with a painted baptistery, excavated 1928 to 1937,
  paintings dated about 232. Removed: "a private house rebuilt for Christian use", "the earliest church building that
  has been identified", and "the town fell to Persian attack in the 250s". The figure caption no longer says "one of
  the oldest surviving Christian paintings" or "on the Euphrates".
- **Removed:** Barnabas "interprets the Jewish scriptures" and the Shepherd "a long work of visions" (not opened);
  Marcion "founds his own churches"; "a native of Asia" for Irenaeus (now his own words, "in lower Asia").
- **Rewritten:** "the earliest surviving use of that phrase" (Ignatius) to the editor's "first use ... in the writings
  of the church fathers"; Polycarp's martyrdom from "earliest surviving account" to the editor's "earliest of all the
  Martyria"; the Didache now follows Didache 7; "the most often" removed from the churches map intro; the Ignatius map
  now says Polycarp's letter "suggests" Ignatius passed through Philippi; Lactantius "close to Constantine's court" to
  Jerome's statement that he later tutored Crispus; 2 Peter "took longest to settle" to Eusebius 3.25.
- **Added from the sources:** Pliny's consulship and senate service; Tertullian's Carthage (Jerome); Origen's move to
  Caesarea; Polycarp chapter 13 possibly added later; the edict's date of 30 April; the Great Persecution named as the
  translator names it.
- **Scholarly claims** now name their book: Brown (2 Peter), Chadwick (single bishops, Nag Hammadi, Decius as the first
  empire-wide persecution, local persecution before Decius), Gamble (the canon, Marcion's role, the fourth-century date
  for the Muratorian fragment), Wilken (Pliny c. 112 and earliest official view; educated Romans), Moss (overstated
  persecution).
- **Titles.** Moss's book is *The Myth of Persecution*, not *The Myth of Christian Persecution*. Chadwick's series
  number was dropped; Open Library does not show it. The Cambridge History's 2006 year was dropped; Open Library lists
  only a 2014 printing (same finding as the Apostolic Age check).
- **Maps.** Both maps now credit Pleiades (CC BY 3.0) and Natural Earth. `src/data/maps.json` was patched directly, as
  in the Apostolic Age check, because a rebuild needs the Natural Earth downloads.
- **Banner.** `aiReview` set to Claude Opus 5.5 (Anthropic), November 2026. The flags now list only the owner's book
  check.

### Row outcomes

| Rows | New status | Note |
| --- | --- | --- |
| E1 date | B | Brown |
| E1 "took longest to settle" | F | Rewritten to Eusebius 3.25.3 |
| E2 "earliest surviving use" | F | Rewritten to the ANF editor's note |
| E2 date | F | McGiffert's note on 3.36 |
| E3 date | F / B | Bounds F (Bosanquet); c. 112 B (Wilken) |
| E4 date | F | ANF introduction to Polycarp |
| E5 Barnabas, Shepherd | X | Descriptions removed; Eusebius 3.25.4 added (F) |
| E6 date | F | McGiffert (about 135); Justin's "even now" (F) |
| E6 "founds his own churches" | X | Removed |
| E7 date | F | *First Apology* 46 |
| E8 "earliest surviving account" | F | Rewritten to the editor's words |
| E8 date | F | McGiffert's note on 4.15 |
| E10 date | F | McGiffert's note on 5.16 |
| E11 date | F | Eusebius 5, introduction, and note |
| E12 date | F | ANF4 introduction (Redepenning's view, reported) |
| E13 date | F | *Against Heresies* 3.3.3 and McGiffert on Eleutherus |
| E14 fourth-century date | B | Gamble |
| E15 date | F | Eusebius 5.22 and note |
| E16 Carthage | F | Jerome 53 |
| E16 date | F | ANF3 note 77 |
| E18 "many sacrificed ... take them back" | F / G | *On the Lapsed* argument and Epistle 10 (F); "take them back" is the page's summary of the dispute (G) |
| E18 first empire-wide | B | Chadwick; the page still says Eusebius does not describe it that way (F) |
| E18 date | F | ANF5 introduction |
| E19 date | F | ANF5 note on *On the Unity* |
| E20 Dura-Europos | F / X | Cut back to the Yale record (F); the rest removed (X) |
| E21 date | F | ANF5 notes on Epistles 76 and 81 |
| E22 date | F | McGiffert's note (303) |
| E23 date | F | Lactantius 35; McGiffert (Galerius died 311) |
| E24 date (312) | F | McGiffert (Maxentius died 312); *Life of Constantine* 1.38 |
| E25 date (313) | F | Lactantius 48 (third consulship); editor's list in *Life of Constantine* |
| People: Irenaeus "native of Asia" | F | Rewritten to Eusebius 5.20 ("in lower Asia") |
| People: Origen | F | Eusebius 6.26, 6.36, 6.39 |
| People: Diocletian, "Great Persecution" | F | McGiffert's dates and wording |
| People: Constantine "from 306" | F | Editor's note to *Life of Constantine* |
| People: Pliny "senator" | F | Letter To Aristo; Bosanquet |
| People: Pliny "earliest official statement" | B | Wilken |
| People: Marcion's list pushed others | B | Gamble |
| People: Cyprian "after the Decian persecution" | F | Corrected to "during": Epistle 10 is dated 250 |
| Debates: "catholic" | G | The Greek meaning and the reading of Ignatius are the page's own; Smyrnaeans 8 (F) |
| Debates: single bishop before Ignatius | B | Chadwick |
| Debates: Gamble on the canon; weight of Marcion | B | Gamble |
| Debates: Nag Hammadi and "Gnosticism" | B / F / G | The 1945 find B (Chadwick); the 1977 English edition F (Open Library); the disagreement G |
| Debates: Montanism known through opponents | G | The quotations are F |
| Debates: Wilken on educated Romans | B | Wilken |
| Debates: local persecution before Decius | B | Chadwick |
| Debates: Moss and the reply | B / F | Moss (B); the reply now points to the passages on the page (F) |
| Debates: neither edict made Christianity the state religion | F / G | Both texts grant freedom of worship to all (Lactantius 34, 48); the conclusion is the page's (G) |
| Sources table dates | F | As for the events; Lactantius "soon after 313" from chapters 1 and 48 |
| Glossary | G | Definitions in the page's own voice |
| Maps: Philippi | F / G | Polycarp 9 (F); "suggests he passed through" (G) |
| Maps: "the rest of the way is not recorded" | G | Rewritten to "the sources used here do not record" |
| Maps: place positions | F | All within 2.3 km of Pleiades; no coordinate changed. See below |
| Figure caption and credit | F | Yale record; Wikimedia Commons file page |
| S3 book details | F | Open Library, except the Cambridge History (P, as in the Apostolic Age ledger) |
| S4 Cambridge History | P | Open Library lists a 2014 printing only; the year was removed from the page |

### Map places against Pleiades

| Place | Pleiades | Difference |
| --- | --- | --- |
| Rome | [423025](https://pleiades.stoa.org/places/423025) | 1.3 km |
| Carthage | [314921](https://pleiades.stoa.org/places/314921) | 0.4 km |
| Alexandria | [727070](https://pleiades.stoa.org/places/727070) | 1.0 km |
| Antioch | [658381](https://pleiades.stoa.org/places/658381) | 2.3 km |
| Smyrna | [550893](https://pleiades.stoa.org/places/550893) (Smyrna/Eurydikeia, the Roman city, not Old Smyrna 550771) | 0.3 km |
| Ephesus | [599612](https://pleiades.stoa.org/places/599612) | 0.2 km |
| Corinth | [570182](https://pleiades.stoa.org/places/570182) | 0.5 km |
| Troas | [550434](https://pleiades.stoa.org/places/550434) | 1.1 km |
| Philippi | [501482](https://pleiades.stoa.org/places/501482) | 0.5 km |

Lyons (about 4.8° E) and Vienne are still west of the churches map's edge (6.0° E), as its intro says.

### Owner's library checklist

For each row: confirm the book says it, note the page number here and in the page citation, and fix the page if the
book does not support it. Leave the page column blank until checked. This check is out of scope for CHR-20's AI work
and does not block the era's box.

| Book | Claim it must support | Where to look | Page |
| --- | --- | --- | --- |
| Brown, *An Introduction to the New Testament* (1997) | Most scholars date 2 Peter after Peter's death, early or middle second century; one of the last New Testament books | 2 Peter, "Summary of basic information" | |
| Chadwick, *The Early Church* (rev. 1993) | Debate on when a single bishop came to head each church | Index: bishops; Ignatius | |
| Chadwick | Coptic writings found at Nag Hammadi in Egypt in 1945, and how they changed the study of Gnostic teachers | Index: Nag Hammadi; Gnosticism | |
| Chadwick | Decius's persecution was the first ordered for the whole empire | Index: Decius | |
| Chadwick | Before Decius, persecution was local and occasional | Index: persecution | |
| Gamble, *The New Testament Canon* (1985) | A gradual process in which churches settled on the books used in worship, with pressure from Marcion and others | Conclusion; chapter on the history of the canon | |
| Gamble | How much weight to give Marcion; different views discussed | Index: Marcion | |
| Gamble | Some scholars argue the Muratorian fragment is from the fourth century (Sundberg) | Index: Muratorian Canon | |
| Wilken, *The Christians as the Romans Saw Them* (1984; 2nd ed. 2003) | Pliny's letter c. AD 112; the earliest surviving official Roman view of Christians | Chapter on Pliny | |
| Wilken | Educated Romans took Christianity seriously enough to attack it | Introduction; chapter on Celsus | |
| Moss, *The Myth of Persecution* (2013) | Later Christians overstated how often and how widely Christians were killed | Introduction; chapter on Decius | |

### Where the texts came from (to repeat the check)

Download each file and run `python3 scripts/cite.py <folder> <file> "<regex>" [lines]` to print a passage.

| File | Source |
| --- | --- |
| `anf01.txt` to `anf05.txt`, `anf07.txt` | `https://ccel.org/ccel/schaff/anfNN/cache/anfNN.txt` (Ante-Nicene Fathers, "Rights: Public Domain" in each header) |
| `npnf201.txt` | `https://ccel.org/ccel/schaff/npnf201/cache/npnf201.txt` (Eusebius, *Church History* and *Life of Constantine*) |
| `npnf203.txt` | `https://ccel.org/ccel/schaff/npnf203/cache/npnf203.txt` (Jerome, *Lives of Illustrious Men*; added for CHR-20) |
| `npnf102.txt` | `https://ccel.org/ccel/schaff/npnf102/cache/npnf102.txt` (Augustine, *City of God*) |
| `pliny_g.txt` | `https://www.gutenberg.org/cache/epub/2811/pg2811.txt` (Melmoth, ed. Bosanquet) |
| `webx/engwebp_vpl.txt` | `https://ebible.org/Scriptures/engwebp_vpl.zip` (World English Bible, verse per line) |

Two things to know about these editions:

- **Ignatius** is printed as the shorter and longer versions side by side, one paragraph after the other. The page uses
  the **first** paragraph of each pair, which is the shorter.
- **Pliny**: the Melmoth edition numbers the letter about Christians **XCVII** and Trajan's reply **XCVIII**. The standard
  references are 10.96 and 10.97, and the page gives both.

## Highest-risk items (before the CHR-20 check)

All six were resolved in the AI source check above.

1. **Dura-Europos** (event and worship section). Entirely from memory (U), with a book named from memory.
2. **Dates** marked "debated": Ignatius c. 110, Pliny c. 112, Marcion c. 144 to 150, Montanus c. 170 to 180, Lyons 177,
   Celsus c. 175 to 180, Easter c. 190 to 195, Tertullian c. 197 to 200, Cyprian c. 251, Valerian 257 to 258. All U unless
   the table says otherwise.
3. **The Muratorian fragment date.** The ANF translator says the second half of the second century. The page says other
   scholars argue for the fourth century. That second claim is from memory (N, U).
4. **Scholarly attributions** (Gamble, Wilken, Moss, Chadwick). Written from the drafter's memory of what each book is
   about; none has been opened.
5. **Nag Hammadi** (1945, Coptic, Egypt) and the scholarly debate about the label "Gnosticism". From memory.
6. **Decius as the "first empire-wide" persecution.** The page gives it as what many historians say, which is N and
   unchecked; Eusebius 6.39 does not say it.

## Events

| # | Claim | Status | Note |
| --- | --- | --- | --- |
| E1 | 2 Peter speaks of Paul's letters and "the other Scriptures" (3:15 to 16) | F | WEB: 2 Peter 3:15 to 16 |
| E1 | 2 Peter claims to be by "Simon Peter" (1:1) | F | WEB: 2 Peter 1:1 |
| E1 | Most scholars date it c. 100 to 150, after Peter's death | N | Brown; the same range as in the Apostolic Age table |
| E2 | Ignatius sent from Syria to Rome; wrote to Ephesus, Magnesia, Tralles, Rome from Smyrna; to Philadelphia, Smyrna and Polycarp from Troas | F | Eusebius 3.36.3 to 10 |
| E2 | Seven letters | F | Count of the seven named in Eusebius 3.36 |
| E2 | "Wherever Jesus Christ is, there is the catholic church", *Smyrnaeans* 8 | F | ANF1, first (shorter) paragraph of Smyrnaeans 8 |
| E2 | "The earliest surviving use of the phrase" | P | The ANF editor says "in this letter we first find the use of the phrase Catholic Church" (ANF1 line 4252); "earliest surviving" is the editor's, not checked |
| E2 | c. 110, debated | U | Eusebius places him in Trajan's reign; modern range from memory |
| E3 | Pliny asks whether they are Christians, asks again with threat, punishes those who persist; citizens sent to Rome | F | Melmoth XCVII |
| E3 | Those who deny it and curse Christ are released | F | Melmoth XCVII |
| E3 | Meet on a stated day before light; prayer to Christ "as to a divinity"; oath not to commit fraud, theft, adultery, falsify word, deny a trust; shared harmless meal | F | Melmoth XCVII |
| E3 | "Contagious superstition" | F | Melmoth XCVII (the translation's wording) |
| E3 | Trajan: right course; do not seek them out; anonymous information not to be received; denial proved by invoking the gods is pardoned | F | Melmoth XCVIII |
| E3 | c. 112 | U | Pliny's governorship of Bithynia is not dated in the letter |
| E4 | Polycarp's letter: the Philippians and Ignatius wrote to him about carrying letters to Syria; he sends Ignatius's letters | F | Polycarp 13; Eusebius 3.36.13 to 15 |
| E4 | c. 110 to 140 | U | |
| E5 | The Muratorian fragment says Hermas wrote in Rome while his brother Pius was bishop, ought to be read but not placed among prophets or apostles | F | Muratorian fragment, ANF5 |
| E5 | The Didache is a manual of Christian life and practice | F | As described in the Apostolic Age page (ANF7) |
| E5 | Barnabas "interprets the Jewish scriptures" | U | Not opened |
| E5 | The Shepherd is "a long work of visions" | U | Not opened |
| E6 | Justin: Marcion of Pontus "is even now" teaching men to deny God made heaven and earth; many have believed him | F | *First Apology* 58 |
| E6 | Irenaeus: Marcion cut Luke and dismembered Paul's letters | F | *Against Heresies* 1.27.2 |
| E6 | Irenaeus: Marcion set aside "the prophets and the law" | F | *Against Heresies* 1.27.2 |
| E6 | The Muratorian fragment rejects writings composed for Marcion and letters forged in Paul's name against Marcion | F | Muratorian fragment |
| E6 | c. 144 to 150 | U | |
| E7 | Justin: addressed to Antoninus Pius; baptism in the name of the Father, Son and Holy Spirit; Sunday gathering, reading, president speaks, prayer, bread wine and water, Amen, portion to absentees | F | *First Apology* 1, 61, 65 to 67 |
| E7 | c. 150 to 155 | U | |
| E8 | Polycarp martyrdom: "eighty and six years", Statius Quadratus, Eusebius's heading "Under Verus" | F | *Martyrdom* 9, 21; Eusebius 4.15 |
| E8 | The earliest of all the martyria; some say interpolated | F | ANF editor's note (ANF1 line 3578) |
| E8 | "Earliest surviving account of the martyrdom of a Christian other than those in the New Testament" | P | The editor says "earliest of all the Martyria"; the page's version is a rewording |
| E8 | c. 155 to 167 | P | The translator's note says "middle of the second century"; the range is from memory |
| E9 | Justin and six companions before Rusticus, refusing to sacrifice; Rusticus prefect from 163; Marcus Aurelius tradition has "most in its favor" | F | Eusebius 4.16, translator's note |
| E9 | Crescens plotted against Justin | F | Eusebius 4.16 |
| E10 | Montanus a recent convert, village in Mysia on Phrygian border, Gratus proconsul; Ancyra agitated; writer feared adding to the Gospel | F | Eusebius 5.16.3 to 7 |
| E10 | c. 170 to 180 | U | |
| E11 | Lyons and Vienne letter quoted by Eusebius; Pothinus over ninety; translator warns against "wholesale" | F | Eusebius 5.1 and the translator's note at ANF line 25181 |
| E11 | c. 177 | U | |
| E12 | Celsus: secret associations; wool-workers, cobblers, fullers; children and women in private houses | F | *Against Celsus* 1.1, 3.55 |
| E12 | Known only from Origen | F | ANF editor's note: "Of this work we know nothing, except from the quotations" |
| E12 | c. 175 to 180 | U | |
| E13 | Irenaeus: appeals to apostolic churches; four Gospels because four zones and four winds | F | *Against Heresies* 3.1 to 3.4, 3.11.8 |
| E13 | c. 180 | U | |
| E14 | Muratorian fragment: Luke third, John fourth, Acts, thirteen letters of Paul, Apocalypse; Hermas; found in Milan; published 1740 | F | Fragment and ANF editor's note |
| E14 | The fragment dated to the fourth century by "other scholars" | N, U | From memory; needs a named scholar (A. C. Sundberg and G. M. Hahneman are the names to check) |
| E15 | Asia kept the fourteenth day; Victor tried to cut off Asia; Irenaeus and others rebuked him; Polycarp and Anicetus agreed to differ | F | Eusebius 5.23 and 5.24 |
| E15 | c. 190 to 195 | U | |
| E16 | Tertullian: "the more we are mown down, the more we grow; the blood of Christians is seed" | F | *Apology* 50 |
| E16 | Addressed to Roman authorities | F | *Apology* 1 opens "Rulers of the Roman Empire" |
| E16 | In Carthage | U | Not opened; widely stated |
| E17 | Perpetua and Felicitas: parts by Perpetua and Saturus; reign of Severus c. 202; Carthage; some say Montanist | F | Translator's introduction, ANF3 |
| E18 | Decius: persecution from hatred of Philip; Fabian martyred; Alexander of Jerusalem and Babylas died in prison | F | Eusebius 6.39 |
| E18 | Many sacrificed or got "wicked certificates"; the church had to decide how to take them back | P | *On the Lapsed* argument and Epistle 10 header (ANF5) cover sacrificing and "wicked certificates"; the rest is inference |
| E18 | "Many historians call it the first persecution to reach the whole empire" | N, U | Not checked |
| E19 | Cyprian: church as mother (*Unity* 6); Eusebius names Novatus; Cyprian and bishops with him first taught rebaptism | F | ANF5; Eusebius 6.43 heading; Eusebius 7.3 heading |
| E19 | c. 251 | U | |
| E20 | A house church at Dura-Europos with a baptistery and paintings, earliest church building identified; town fell to Persia in the 250s | U | **Entirely unchecked** |
| E21 | Valerian's rescript; Xistus killed in the cemetery with four deacons | F | Cyprian, Epistle 81 (ANF5 numbering) |
| E21 | 257 to 258 | U | |
| E22 | Nicomedia: festival of Terminus, 23 February, eighth consulship of Diocletian, seventh of Maximian; church searched, Scriptures burned, building razed; Diocletian and Galerius watched | F | Lactantius 12 |
| E22 | 303 to 311 | U | |
| E23 | Galerius's edict: tried to bring them back to ancient institutions; many refused both gods; he permits them to be Christians again and to hold meetings; they are to pray for the emperor | F | Lactantius 34 |
| E23 | Dated AD 311 | U | The edict's own date is not in the passage read |
| E24 | Constantine's dream and shields at the Milvian bridge | F | Lactantius 44 |
| E24 | Cross of light with "Conquer by this", told to Eusebius under oath | F | *Life of Constantine* 1.28 |
| E25 | Document issued at Nicomedia on the ides of June, Constantine and Licinius met at Milan, freedom for Christians and all others, property restored | F | Lactantius 48 |
| E25 | Lactantius calls it an edict to the president of the province | F | Lactantius 48 |

## People

Each person's summary uses the same passages as the events above. Rows not listed here are covered by the event rows.

| Claim | Status | Note |
| --- | --- | --- |
| Irenaeus saw Polycarp in his youth; Polycarp taught by apostles, appointed bishop of Smyrna by apostles in Asia, came to Rome under Anicetus | F | *Against Heresies* 3.3.4 |
| Irenaeus "a native of Asia", later bishop of Lyons | P | Lyons from Eusebius 5; "native of Asia" not checked |
| Origen: much of Eusebius book 6; suffered in the Decian persecution | P | Eusebius 6.39.5 and the book's chapter headings |
| Tertullian also wrote a work against Marcion | F | *Against Marcion* is in ANF3 |
| Cyprian wrote to confessors in prison; later wrote of Valerian's order | F | Epistles 10 and 81 |
| Diocletian: "later known as the Great Persecution" | U | The name is from memory |
| Constantine: "Roman emperor, from 306" | U | |
| Pliny: "Roman senator" | U | Not stated in the letters read |

## Debates and judgment calls (reviewer packet)

These are the sentences where the page takes a position, or reports one. A specialist should look at each.

| Section | The call | Status |
| --- | --- | --- |
| What did "catholic" mean? | "Universal" is the safe meaning; Ignatius is making an argument about unity, not naming a denomination | U (the Greek meaning is standard; the reading of Ignatius is the drafter's) |
| Bishops and unity | "Scholars disagree about how general the single bishop was before Ignatius" | N, U |
| Bishops and unity | Irenaeus builds his case on churches the apostles founded | F |
| New Testament | Gamble describes a gradual process driven by use in worship, with outside pressure such as Marcion's | N, U |
| New Testament | "How much weight to give Marcion is debated" | N, U |
| Gnostic teachers | Nag Hammadi (1945) changed what we know; whether "Gnosticism" is a useful label is debated | N, U |
| Montanism | Known mainly through opponents | F for the Eusebius quote; the generalization is P |
| Easter | Each side claimed apostolic tradition | F (Eusebius 5.23, 5.24) |
| What outsiders thought | Wilken argues educated Romans took Christianity seriously enough to attack it | N, U |
| Persecution | Tradition counts ten; Augustine reports it as what "some" think and does not endorse it | F (*City of God* 18.52) |
| Persecution | Many historians think pre-Decian persecution was local and occasional | N, U |
| Persecution | Moss argues later Christians overstated persecution; others reply the sources for Decius, Valerian and Diocletian are strong | N, U |
| The Edict of Milan | The text is an edict published by Licinius at Nicomedia, not issued at Milan; the main toleration decree is Galerius's of 311; neither made Christianity the state religion | F for Lactantius 34 and 48; "neither made Christianity the state religion" is U |
| Worship | Justin explains the Eucharist by comparison with the incarnation | F (*First Apology* 66) |
| Worship | "Christians continue to read these differently, and this page does not take a side" | Editorial |

## Maps

| Claim | Status | Note |
| --- | --- | --- |
| Ignatius route: Antioch, Smyrna, Troas, Philippi, Rome, with the order from Eusebius | F for Smyrna and Troas | Eusebius 3.36.5, 3.36.10 |
| Philippians "had seen" Ignatius pass | P | Polycarp 9 says they saw his patience "with your own eyes", with Ignatius, Rufus and Zosimus; that this means they passed through Philippi is an inference |
| The rest of the way is not recorded | U | Not found in the passages read |
| Place coordinates for Smyrna, Carthage, Alexandria | U | Entered by hand, approximate (see `scripts/maps/README.md`) |
| Lyons and Vienne are off the western edge | Known limitation | The relief crop starts at 5°E and Lyons is at about 4.8°E. Extending it needs the `Relief crop` workflow (`.github/workflows/relief.yml`) |

## Sources on the page

| # | Claim | Status | Note |
| --- | --- | --- | --- |
| S1 | Every CCEL volume used says "Rights: Public Domain" in its header | F | ANF1, 2, 3, 4, 5, 7, NPNF2-01, NPNF1-02 checked 2026-11-11 |
| S2 | Pliny (Melmoth, Gutenberg 2811) is public domain | F | Gutenberg's own statement; translation first published in the 1700s |
| S3 | Chadwick, Gamble, Wilken, Moss and Kraeling details (titles, years, publishers) | U | From memory. Check each; "Further reading" says so |
| S4 | The Cambridge History of Christianity vol. 1 details | U | Carried over from the Apostolic Age page |

## Suggested instructions for the reviewing model

> You are reviewing a draft web page on early Christian history for factual accuracy. For each row in the attached
> ledger, open the cited source or the best scholarly reference you can access, then mark the row **confirmed**,
> **wrong**, **overstated** or **cannot check**, and quote the passage or reference that decided it. Pay most attention
> to rows marked U, N and P. Do not rely on memory for dates, authorship claims, or what Eusebius, Cyprian, Lactantius or
> Pliny say. Flag any sentence that reads as taking a side where scholars disagree. Report which rows you could not
> check at all.

Remaining human step: a reviewer who knows the period, such as a historian or a seminary-trained reader, should look at
the dates, the debates table above, and the Dura-Europos and Nag Hammadi claims.
