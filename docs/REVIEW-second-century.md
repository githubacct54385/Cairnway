# Review ledger: After the Apostles (AD 100 to 313)

Every factual claim on the second-era page, with how far it was actually checked. It is meant to be handed to a
reviewer so they can go straight to the weak spots. The page is a draft and stays one until this ledger is clean.

Page: `src/content/eras/second-century.md` and the maps `churches` and `ignatius` in `scripts/maps/maps.config.json`.
Plan and scope: `docs/PLAN-second-era.md`. Tracked in Linear as CHR-12.

## How "checked" is defined here (read this first)

Nothing below has been checked by a human. The statuses are the same as in `REVIEW-apostolic-age.md`, with one change in
process: the ancient texts were downloaded **before** drafting, and each passage was read in the full text while the
sentence was written, instead of afterwards.

| Status | Meaning |
| --- | --- |
| **F** | Checked against the **full text** of the named public-domain translation. The note gives the passage. An AI read it; this is not a review by a person. |
| **P** | **Partly** checked: some of the sentence is covered by an F source and some is not. The note says which part. |
| **U** | **Unverified.** Written from the drafter's general knowledge. No source was opened for it. Treat as a guess until checked. |
| **N** | A claim about what a **modern scholar** says. Cannot be checked against the ancient text. Needs the named book. |

### Where the texts came from (to repeat the check)

Download each file and run `python3 scripts/cite.py <folder> <file> "<regex>" [lines]` to print a passage.

| File | Source |
| --- | --- |
| `anf01.txt` to `anf05.txt`, `anf07.txt` | `https://ccel.org/ccel/schaff/anfNN/cache/anfNN.txt` (Ante-Nicene Fathers, "Rights: Public Domain" in each header) |
| `npnf201.txt` | `https://ccel.org/ccel/schaff/npnf201/cache/npnf201.txt` (Eusebius, *Church History* and *Life of Constantine*) |
| `npnf102.txt` | `https://ccel.org/ccel/schaff/npnf102/cache/npnf102.txt` (Augustine, *City of God*) |
| `pliny_g.txt` | `https://www.gutenberg.org/cache/epub/2811/pg2811.txt` (Melmoth, ed. Bosanquet) |
| `webx/engwebp_vpl.txt` | `https://ebible.org/Scriptures/engwebp_vpl.zip` (World English Bible, verse per line) |

Two things to know about these editions:

- **Ignatius** is printed as the shorter and longer versions side by side, one paragraph after the other. The page uses
  the **first** paragraph of each pair, which is the shorter.
- **Pliny**: the Melmoth edition numbers the letter about Christians **XCVII** and Trajan's reply **XCVIII**. The standard
  references are 10.96 and 10.97, and the page gives both.

## Highest-risk items (check these first)

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

## Debates and judgement calls (reviewer packet)

These are the sentences where the page takes a position, or reports one. A specialist should look at each.

| Section | The call | Status |
| --- | --- | --- |
| What did "catholic" mean? | "Universal" is the safe meaning; Ignatius is making an argument about unity, not naming a denomination | U (the Greek meaning is standard; the reading of Ignatius is the drafter's) |
| Bishops and unity | "Scholars disagree about how general the single bishop was before Ignatius" | N, U |
| Bishops and unity | Irenaeus builds his case on churches the apostles founded | F |
| New Testament | Gamble describes a gradual process driven by use in worship, with outside pressure such as Marcion's | N, U |
| New Testament | "How much weight to give Marcion is debated" | N, U |
| Gnostic teachers | Nag Hammadi (1945) changed what we know; whether "Gnosticism" is a useful label is debated | N, U |
| Montanism | Known mainly through opponents | F for the Eusebius quote; the generalisation is P |
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
