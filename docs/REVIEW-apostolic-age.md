# Review ledger: The Apostolic Age

Every factual claim on the Apostolic Age page, with how far it was actually checked. It is meant to be handed to a
reviewer so they can go straight to the weak spots. The page is a draft and stays one until this ledger is clean.

Page: `src/content/eras/apostolic-age.md` and the maps in `scripts/maps/maps.config.json`.

## How "checked" is defined here (read this first)

Nothing below has been checked by a human or against a printed or full-text scholarly edition. The drafter (an AI) had
a web-fetch tool that returns summaries of pages, not the full text. So:

| Status | Meaning |
| --- | --- |
| **S** | Compared against a **summary** returned by a fetch tool of a Bible passage (World English Bible text on Bible Gateway), a Wikisource page, or a Wikipedia article. Better than nothing, but a summary can be wrong, and Wikipedia is a tertiary source. |
| **U** | **Unverified.** Written from the drafter's general knowledge. No source was opened for it. Treat as a guess until checked. |
| **P** | **Partly** checked: some of the sentence is covered by an S source and some is not. The note says which part. |

No claim is marked as fully verified. A reviewer should upgrade a status only after reading the cited text itself.

Sources the drafter could **not** read at all: Josephus (any work), Suetonius, the Gallio inscription, the Gospels, and
the Cambridge History. Perseus and several Wikisource pages were blocked or missing.

## Highest-risk items (check these first)

1. **Josephus on James (event "c. AD 62", and the James entry).** The wording and the date were written without reading
   Josephus. The claim that "most scholars regard this passage as authentic" and the contrast with the other Josephus
   passage about Jesus are from memory.
2. **The scholarly positions in "Key beliefs and debates".** The two unsourced sentences were replaced on 2026-11-11
   with the evidence and named scholars (rows C1 to C12). Each scholar's view is summarised from memory; check it
   against the book listed under Further reading.
3. **Event date ranges.** Every "c. AD …" range is from general knowledge, not a cited source: AD 30 to 33, 33 to 36,
   36 to 39, 49, 50 to 52, 62, 64.
4. **Gallio and Corinth.** Only a Wikipedia article about the Claudius expulsion was read, which discusses Gallio in
   passing. The inscription itself was not.
5. **"John" at the Jerusalem meeting.** Galatians 2 names James, Cephas and John. The John part came from memory; the
   fetched summary did not name him.
6. **Every stop and verse reference on the maps** (about 38). Only a handful of the Acts passages were fetched. The rest
   are from memory.
7. **"Galatia" on the maps.** The label sits in central Turkey. The journey-1 cities (Pisidian Antioch, Iconium, Lystra,
   Derbe) were in the Roman province of Galatia, and the "North Galatia or South Galatia" question for the letter to the
   Galatians is a real scholarly debate. Check the label and the page text do not imply an answer.
8. **Tacitus.** One Wikisource page was read; its translator and licence were not stated, so the "public domain" claim
   for the Tacitus translation is unconfirmed. "Deflecting blame" is an interpretation, not a quote.

9. **Peter and Paul in Rome (batch 1).** Every detail of how and where they died is later tradition, and the page says so.
   Check that each "later tradition" sentence matches what Eusebius 2.25 and 3.1 actually report, that 1 Clement 5 is
   described fairly (it names no place or method), and that "most scholars accept both died in Rome" is not overstated.
10. **The "When were the sources written?" table (batch 1).** About 30 date ranges, all written from memory and attributed
   to "standard introductions such as Brown". Nobody has compared them with Brown or any other introduction. Check every row.
11. **Herod Agrippa I's death (batch 1).** The parallel with Josephus, "three years over all Judea", the AD 41 start and the
   AD 44 date are from memory.
12. **1 Clement's date and content (batch 1).** The c. AD 95 to 97 date, the Domitian link and the chapter numbers (1.1, 42,
   44, 47) are from memory.

13. **Batch 2's later-tradition claims.** Pella, Domitian, John at Ephesus, and Hegesippus on James all rest on what
   Eusebius, Irenaeus and others report. Check each "says" against the passage cited, and check that the scholarly
   positions given ("many modern historians doubt...", "most modern scholars agree...") are not overstated.
14. **Junia and Phoebe.** These are live debates. Check that each side is stated fairly and that neither entry reads
   as taking a side.
15. **Worship section.** About 30 verse references and several Didache chapter numbers, all from memory.

## Second pass (2026-11-11)

A second AI read the page and this ledger against its own general knowledge. **It did not open any sources**, so no
status above was raised because of it. Changes it made:

- 1 Corinthians 15: added "to all the apostles" (15:7), which the list on the page had left out (B1).
- Paul's letters: "about evenly divided" became "divided", noting that Ephesians is most often thought to be by a later writer (B12).
- Tacitus calls Pilate "procurator"; a sentence now notes that an inscription gives his title as prefect (E1a).
- Concrete examples of Acts and Paul differing were added (P8, E6).
- First journey map intro: "the hill country of Galatia" became "cities in the Roman province of Galatia, in the regions
  Acts calls Pisidia and Lycaonia", so it no longer leans toward one side of the North or South Galatia debate (item 7).
- Malta stop reference: 27:39 to 28:10 became 27:39 to 28:11, where the three months are stated.
- Source lists: the Gospels were added to the page's sources and to `SOURCES.md`; Suetonius was added to `SOURCES.md`.

From memory, it found these consistent with standard scholarship. A reviewer should still check them against the texts:
the wording and date of the Josephus passage on James (items 1, P11, E18 to E20); John at the Jerusalem meeting
(Gal 2:9, item 5); Gallio's term at about AD 51 to 52 from the Delphi inscription (item 4); and the date ranges in item 3.
It suggests the Wikisource Tacitus is likely the Church and Brodribb translation (1876); confirm that (S3).

## Overview

| # | Claim | Cited | Status | Notes for the reviewer |
| --- | --- | --- | --- | --- |
| O1 | The name "Apostolic Age" comes from the apostles, the early leaders the New Testament describes as sent out | none | U | Common usage; confirm and consider citing a reference work |
| O2 | The age runs from the years after Jesus's death to the end of the first century (and dateRange "c. AD 30 to c. AD 100") | none | U | The end date varies between authors |
| O3 | First Christians were Jewish followers of Jesus who gathered in Jerusalem and then spread elsewhere (per Acts) | Acts | S | Acts 15 and others read as summaries |
| O4 | Paul's letters give a second, earlier view of the movement as it grew beyond Jewish communities | none | U | |
| O5 | Scholars generally date Paul's letters to the middle of the first century, among the earliest Christian writings | none | U | Widely held; no source opened |
| O6 | Evidence is limited; historians draw on Acts, Paul, Tacitus, Suetonius, Josephus | none | U | |
| O7 | Tacitus, Suetonius and Josephus were not Christians | none | U | True as general knowledge; confirm wording |

## Key people

| # | Claim | Cited | Status | Notes for the reviewer |
| --- | --- | --- | --- | --- |
| P1 | Peter (Cephas) is named first in Paul's list of resurrection appearances | 1 Cor 15:5 | S | |
| P2 | In Acts, Peter speaks for the group in Jerusalem | Acts 1 to 12 | U | Only Acts 15 was read |
| P3 | At the Jerusalem meeting Peter says non-Jewish believers are saved by grace as Jewish believers are | Acts 15:6 to 11 | S | |
| P4 | Paul records a dispute with Peter at Antioch; Peter stopped eating with non-Jewish believers once people came from James | Gal 2:11 to 14 | S | |
| P5 | Paul writes that he once persecuted the church, then began preaching Jesus to non-Jews | Gal 1:13 to 17 | S | |
| P6 | Paul's letters are among the earliest surviving Christian writings | none | U | Same as O5 |
| P7 | Paul lists beatings, a stoning, shipwrecks and imprisonment | 2 Cor 11:23 to 28 | S | |
| P8 | Acts tells Paul's story in a longer narrative that differs from his own account; example: Paul says he went to Arabia and saw only Peter and James on his first Jerusalem visit, while Acts has Barnabas bring him to the apostles | Gal 1:17 to 19; Acts 9:26 to 27 | U | Example added in the second pass, from memory |
| P9 | Paul calls James "the Lord's brother" and says he met him in Jerusalem | Gal 1:19 | S | |
| P10 | In Acts, James gives the judgment that ends the Jerusalem meeting | Acts 15:13 to 21 | S | |
| P11 | Josephus reports James was stoned at the order of the high priest Ananus | Antiquities 20.9.1 | U | Josephus not read |
| P12 | Christian traditions differ on what "brother" means (sibling, half-brother, cousin) | none | U | Likely accurate; confirm and cite |
| P13 | Gal 2:9 and 12 cited for James | Gal 2:9 and 12 | P | Gal 2 summary read; verse-level numbering not checked |
| P14 | Barnabas: Joseph, a Levite from Cyprus, nicknamed Barnabas ("Son of Encouragement") | Acts 4:36 to 37 | S | |
| P15 | The Antioch church sent Barnabas out with Paul | Acts 13:1 to 3 | S | |
| P16 | Barnabas was drawn into the Antioch dispute | Gal 2:13 | S | |
| P17 | Priscilla and Aquila left Rome when Claudius ordered Jews out | Acts 18:2 | S | |
| P18 | They were tentmakers who worked alongside Paul in Corinth | Acts 18:3 | S | |
| P19 | They explained the faith more fully to Apollos in Ephesus | Acts 18:24 to 26 | S | |
| P20 | Paul says they risked their necks for him; house assembly greetings | Rom 16:3 to 5; 1 Cor 16:19 | S | |

## Key events

| # | Claim | Cited | Status | Notes for the reviewer |
| --- | --- | --- | --- | --- |
| E1 | Jesus executed under Pontius Pilate, reported by Tacitus (founder "Christus", under Tiberius, by the procurator Pilate) | Annals 15.44 | S | Wikisource page read (translator not stated) |
| E1a | An inscription found at Caesarea gives Pilate's title as prefect | none | U | Added in the second pass. The "Pilate Stone", found in 1961; cite a reference work |
| E2 | Tacitus wrote "about 80 years later" | none | U | Annals is usually dated to the AD 110s; confirm |
| E3 | Scholars debate how much of Tacitus came from Christian tradition vs Roman records | none | U | |
| E4 | Year of the crucifixion about AD 30 or 33 | none | U | Standard range; cite a reference work |
| E5 | Community grew after Pentecost (per Acts); Acts was written decades afterward | Acts 1 to 2 | U | Acts 2 not fetched; "decades afterward" is a dating claim with no source |
| E6 | Paul writes God revealed Jesus to him and sent him to non-Jews; Acts tells the Damascus road story three times, and in one the companions hear the voice and in another they do not | Gal 1:11 to 17; Acts 9:1 to 19, 22:6 to 16, 26:12 to 18 (9:7 vs 22:9) | P | Galatians S; the Acts passages and the 9:7 vs 22:9 difference U (added in the second pass, from memory) |
| E7 | Date range AD 33 to 36 for Paul's change | none | U | Derived from Gal 1:18 and a crucifixion date; no source |
| E8 | Three years later Paul visited Jerusalem, stayed 15 days with Peter, saw James but no other apostle | Gal 1:18 to 20 | S | |
| E9 | Date range AD 36 to 39 for that visit | none | U | |
| E10 | Jerusalem meeting about non-Jewish believers; related meeting in Gal 2; scholars debate how they relate | Acts 15; Gal 2 | S | |
| E11 | Date "c. AD 49" for that meeting | none | U | |
| E12 | Acts: Aquila and Priscilla left Italy because Claudius ordered Jews to leave Rome | Acts 18:2 | S | |
| E13 | Suetonius: Claudius expelled Jews who were causing disturbances at the instigation of "Chrestus" | Life of Claudius 25.4 | S | Via Wikipedia's quotation only |
| E14 | Scholars disagree about the year (AD 49, or AD 41 to 53), scale, and whether Chrestus means Christ | none | S | Wikipedia summary of scholarship |
| E15 | Acts places Paul in Corinth during Gallio's term | Acts 18:1 to 17 | U | Acts 18:12 not fetched |
| E16 | Historians use outside evidence about Gallio's term to anchor Paul's career | none | S | From the Wikipedia Claudius article; inscription not read |
| E17 | "Most land at about AD 51 to 52" (header: c. AD 50 to 52) | none | P | Source gave AD 51, 52, and a wider 50 to 54 window; "most" is the drafter's generalisation |
| E18 | Josephus: high priest Ananus brought James before a council and had him stoned | Antiquities 20.9.1 (20.200) | U | Josephus not read; "council" and the stoning are from memory |
| E19 | James's death c. AD 62 | none | U | |
| E20 | Most scholars regard the James passage as authentic, unlike a more disputed passage about Jesus | none | U | From memory |
| E21 | Tacitus: Nero blamed Christians for the fire at Rome and had many punished | Annals 15.44 | P | Wikisource page confirms the "class hated" wording; "many punished" not seen in the excerpt read |
| E22 | AD 64 | none | U | |
| E23 | Tacitus "suggests Nero was deflecting blame" while describing Christians as widely disliked | Annals 15.44 | P | "Hated" seen in the excerpt; "deflecting" is interpretation |
| E24 | Roman forces under Titus captured Jerusalem; temple burned | Jewish War 6 | S | Via Wikipedia summary |
| E25 | Josephus dates it to the month of Av; says Titus tried to save it | Jewish War 6 | S | Via Wikipedia; Josephus not read |
| E26 | Other ancient writers say Titus ordered it destroyed; modern scholars disagree | none | S | Wikipedia names Sulpicius Severus and the Talmud |
| E27 | AD 70 | none | S | Wikipedia |

## Key beliefs and debates

| # | Claim | Cited | Status | Notes for the reviewer |
| --- | --- | --- | --- | --- |
| B1 | Paul reminds Corinth of what he passed on as received: Christ died for sins, buried, raised on the third day, appeared to Peter, the twelve, a larger group, James, all the apostles, and last Paul | 1 Cor 15:3 to 8 | S | "All the apostles" (15:7) was missing in the first draft and added in the second pass |
| B2 | Letter written about twenty years after the death of Jesus | none | S | Wikipedia "Early Christianity" |
| B3 | Believers called Jesus the Christ, "the Anointed One", and Lord | none | U | |
| B4 | ~~Scholars debate how quickly the earliest believers described Jesus's status~~ Replaced by rows C1 to C6 (2026-11-11) | | | The unsourced sentence and "this page does not take a side" were removed |
| B5 | Acts 15: Peter and James speak; group concludes non-Jewish believers should not be burdened apart from a short list | Acts 15 | S | |
| B6 | Galatians describes a meeting with Peter, James **and John**, then the Antioch dispute | Gal 2 | P | John not in the summary read |
| B7 | The two accounts differ; scholars disagree whether they are the same meeting and how the decision was received | none | P | "Differ" S; the scholarly disagreement is U |
| B8 | Galatians suggests the question stayed open after the meeting | Gal 2 | S | Wikipedia notes the Council did not end the disagreement |
| B9 | Acts and the letters differ, for example in the number of Jerusalem visits | none | U | Check the count in Acts vs Galatians |
| B10 | Many historians give priority to Paul's letters; others give Acts more weight | none | U | |
| B11 | Seven letters accepted as Paul's: Romans, 1 and 2 Corinthians, Galatians, Philippians, 1 Thessalonians, Philemon | none | S | Wikipedia "Pauline epistles" |
| B12 | Scholars are divided on Colossians, Ephesians, 2 Thessalonians, with Ephesians most often thought to be by a later writer | none | P | First draft said "about evenly divided", which overstates it for Ephesians; reworded in the second pass. The Ephesians part is U |
| B13 | Many consider 1 and 2 Timothy and Titus written by later authors in Paul's name | none | S | Same |
| B14 | Arguments rest on style, vocabulary and subject; secretaries could explain style differences | none | S | Same |
| B15 | The first believers were Jewish; Acts has them meeting in the temple | none | U | Acts 2:46; 3:1 not fetched |
| B16 | ~~Scholars debate when Christians and Jews came to be seen as distinct~~ Replaced by rows C7 to C12 (2026-11-11) | | | The unsourced sentence and "does not settle it" were removed |

## Batch 1 additions (2026-11-11)

Added by an AI from general knowledge. **No source was opened for any of these, so every row is U.** "Later tradition"
marks claims that come from writers after the first century.

### New events

| # | Claim | Cited | Status | Notes for the reviewer |
| --- | --- | --- | --- | --- |
| N1 | Seven men, including Stephen, chosen to oversee food distribution after complaints about Greek-speaking widows | Acts 6:1 to 6 | U | |
| N2 | Stephen accused of speaking against the temple and the law, speaks before the council, stoned outside the city | Acts 6:8 to 7:60 | U | |
| N3 | A young man named Saul watched and approved | Acts 7:58, 8:1 | U | |
| N4 | Believers scatter into Judea and Samaria; Philip preaches in Samaria and to an Ethiopian official | Acts 8:1 to 40 | U | |
| N5 | Stephen is the first person Acts presents as dying for his faith; Acts is the only source | none | U | |
| N6 | Date c. AD 31 to 36 for Stephen | none | U | Derived from the crucifixion and Paul's conversion dates |
| N7 | Herod Agrippa I (grandson of Herod the Great) killed James the brother of John with the sword, then arrested Peter, who Acts says was freed by an angel | Acts 12:1 to 11 | U | |
| N8 | Apart from Judas, James is the only one of the twelve whose death Acts records | none | U | Judas: Acts 1:18. Confirm no other death of one of the twelve is in Acts |
| N9 | Acts describes Herod's sudden death at Caesarea after a crowd hailed him as a god | Acts 12:20 to 23 | U | |
| N10 | Josephus tells a similar story, with the crowd calling him a god, after he had ruled all of Judea for three years | Antiquities 19.8.2 (19.343 to 352) | U | Check "three years" and the section numbers |
| N11 | Agrippa ruled Judea from AD 41; his death usually dated to AD 44 | none | U | |
| N12 | Acts ends with Paul two years in Rome under guard and does not say what happened to him; the New Testament does not describe either apostle's death | Acts 28:30 to 31 | U | John 21:18 to 19 hints at Peter's death without describing it; confirm the wording is fair |
| N13 | 1 Clement (c. AD 96) holds up Peter and Paul as examples who suffered and bore witness, without saying where, how or when they died | 1 Clement 5 | U | |
| N14 | John has Jesus hint at the kind of death Peter would die | John 21:18 to 19 | U | |
| N15 | Ignatius (c. AD 110), writing to Rome, mentions Peter and Paul as having given that church instructions | Ignatius, Romans 4.3 | U | |
| N16 | From the late second century on, writers say both taught and died in Rome, some saying under Nero | Eusebius 2.25 (later tradition) | U | Eusebius quotes Dionysius of Corinth, Gaius and Tertullian there; check which say what |
| N17 | Eusebius reports Paul beheaded and Peter crucified, and, citing Origen, that Peter asked to be crucified head downward | Eusebius 2.25.5; 3.1.2 | U | |
| N18 | Most scholars accept both died in Rome, probably under Nero; a minority doubt Peter was ever there | none | U | **No source. Needs a named scholarly reference** |
| N19 | Tradition that Paul was released and travelled again, based on Romans 15:24 and 1 Clement's "limit of the west"; debated | Romans 15:24; 1 Clement 5 | U | |
| N20 | Date c. AD 64 to 68 for Peter's and Paul's deaths | none | U | Nero died in AD 68 |
| N21 | 1 Clement was sent from Rome to Corinth after some Corinthian presbyters were removed, and urges their restoration | 1 Clement 44, 47 | U | |
| N22 | It argues the apostles appointed the first leaders and arranged for successors | 1 Clement 42, 44 | U | |
| N23 | The letter does not name its author; later tradition credits it to Clement | Eusebius 4.23.11 | U | Irenaeus, Against Heresies 3.3.3, could also be cited |
| N24 | Most scholars date it c. AD 95 to 97, partly because of "sudden misfortunes" some link to Domitian; others argue earlier or later | 1 Clement 1.1 | U | |
| N25 | "The apostles are now remembered as figures of the past" | none | U | Interpretation; check it reads as such |

### Changes to key people

| # | Claim | Status | Notes for the reviewer |
| --- | --- | --- | --- |
| N26 | Peter: Acts says nothing of his later life; later tradition places his death in Rome | U | |
| N27 | Paul: Acts ends with him under guard in Rome; later tradition says he died there | U | |

### "When were the sources written?" table

Every range in this table is **U**. The page attributes them to standard introductions "such as Raymond E. Brown's",
but no introduction was opened. The reviewer should compare each row with Brown (1997) and, ideally, one more
introduction, and either fix the range or name the source that gives it.

| # | Claim | Status | Notes for the reviewer |
| --- | --- | --- | --- |
| T1 | The Paul's letters rows (1 Thessalonians to Philippians and Philemon), and their notes | U | Check 1 Cor 16:8 (Ephesus) and Rom 15:25 to 26 (collection) |
| T2 | The debated letters rows, with "if by Paul" and "if by a later writer" dates | U | |
| T3 | The Gospels and Acts rows, including "most think Matthew drew on Mark" and "John probably written in stages" | U | |
| T4 | The other New Testament writings rows. Revelation: Irenaeus places it late in Domitian's reign | U | Irenaeus, Against Heresies 5.30.3 |
| T5 | 2 Peter is often thought the latest New Testament book, after this era | U | |
| T6 | Josephus: Jewish War c. AD 75 to 79; Antiquities AD 93 to 94, dated by Josephus himself to Domitian's thirteenth year | U | Antiquities 20.267 |
| T7 | Tacitus, Annals c. AD 115 to 120; Suetonius c. AD 120; Eusebius early fourth century | U | |
| T8 | "None of the New Testament books states its own date" | U | |
| T9 | "In the timeline below" (was "above"): the timeline renders after the text | S | Checked against `src/pages/eras/[slug].astro` |

## Batch 2 additions (2026-11-11)

Added by an AI from general knowledge, with **no source opened. Every row is U.**

### Additions to existing events

| # | Claim | Cited | Status | Notes for the reviewer |
| --- | --- | --- | --- | --- |
| M1 | Paul escaped Damascus in a basket through a window in the wall while the governor under King Aretas guarded the city | 2 Cor 11:32 to 33 | U | |
| M2 | Acts tells the basket escape just before the Jerusalem visit and blames a plot by Jews in Damascus | Acts 9:23 to 26 | U | |
| M3 | Aretas IV, king of the Nabataeans, died around AD 40 | none | U | Needs a reference work. Some date his death to AD 39 or 40 |
| M4 | Gallio was the brother of the philosopher Seneca | none | U | |
| M5 | An inscription at Delphi, a letter of Claudius naming Gallio as proconsul, lets historians date his term | Gallio inscription | U | Same as high-risk item 4 |
| M6 | Josephus: some in Jerusalem objected, and Agrippa II removed Ananus after three months | Antiquities 20.201 to 203 | U | |
| M7 | Hegesippus (via Eusebius): James thrown from the temple, stoned and beaten to death, just before the siege | Eusebius 2.23 | U | |

### New events

| # | Claim | Cited | Status | Notes for the reviewer |
| --- | --- | --- | --- | --- |
| M8 | Believers scattered after Stephen reached Antioch; some spoke to Greeks | Acts 11:19 to 21 | U | |
| M9 | Barnabas sent from Jerusalem, fetched Paul from Tarsus, taught a year | Acts 11:22 to 26 | U | |
| M10 | Disciples first called Christians at Antioch, "a name probably given by outsiders" | Acts 11:26 | U | The "outsiders" part is a common scholarly view; needs a source |
| M11 | Antioch sent famine relief under Claudius; Josephus mentions a famine in Judea in the mid-40s | Acts 11:27 to 30; Antiquities 20.51 to 53, 20.101 | U | Check the section numbers |
| M12 | Date c. AD 40 to 45 for Antioch | none | U | |
| M13 | Romans is addressed to believers in a city Paul had not yet visited | Romans 1:7 to 15, 15:22 to 29 | U | |
| M14 | Nobody knows who first brought the message to Rome; Acts lists visitors from Rome at Pentecost | Acts 2:10 | U | |
| M15 | The Claudius expulsion "may show" disputes about Christ had reached Rome's Jewish community in the 40s | Suetonius, Claudius 25.4 | U | Hedged on purpose; links to E14 |
| M16 | Paul greets many by name, including Prisca and Aquila, and plans to visit Rome on the way to Spain | Romans 16:3 to 16, 15:24 and 28 | U | |
| M17 | Later tradition names Peter as founder of the Roman church; Romans does not mention him | none | U | Cite Irenaeus, Against Heresies 3.3.2, if kept |
| M18 | Paul accused of taking a non-Jew into the inner temple courts; riot; Roman custody | Acts 21:27 to 36 | U | |
| M19 | Held two years at Caesarea under Felix; appealed to the emperor under Festus as a Roman citizen; hearing before Agrippa II | Acts 23 to 26 (24:27, 25:10 to 12) | U | |
| M20 | Felix and Festus are both known from Josephus; most place the change of governor c. AD 59 or 60, some earlier | Antiquities 20.137 to 182 | U | "Most" needs a source |
| M21 | Paul's own letters do not describe these events | none | U | |
| M22 | Revolt broke out in AD 66; Josephus described it as an eyewitness | Jewish War 2 | U | |
| M23 | Eusebius: before the war the Jerusalem believers were warned by a revelation and settled in Pella, east of the Jordan; Epiphanius tells the same story | Eusebius 3.5.3 | U | Epiphanius not cited by passage; Panarion 29.7 and 30.2 |
| M24 | Some scholars accept the Pella story, others doubt it; Pella was attacked early in the war | none | U | Josephus, Jewish War 2.458 for the attack |
| M25 | Melito, Tertullian and Eusebius say Domitian persecuted Christians, the second emperor to do so after Nero | Eusebius 3.17 to 20, 4.26.9 | U | Tertullian, Apology 5 |
| M26 | Cassius Dio: Domitian executed Flavius Clemens and exiled Domitilla for atheism and drifting into Jewish ways; some think they were Christians | Dio 67.14 | U | |
| M27 | Revelation and 1 Clement hint at pressure on believers | Rev 1:9, 2:13; 1 Clement 1.1 | U | |
| M28 | Many modern historians doubt an empire-wide persecution under Domitian | none | U | Needs a source |
| M29 | Revelation's author John received visions on Patmos; messages to seven churches of Asia | Rev 1:1 to 11, 2 to 3 | U | |
| M30 | Justin and Irenaeus identify him with the apostle; Irenaeus places the visions late in Domitian's reign and says John lived at Ephesus into Trajan's reign | Justin, Dialogue 81; Irenaeus 3.3.4, 5.30.3 | U | |
| M31 | Dionysius of Alexandria doubted common authorship of Revelation and John because of their Greek; most modern scholars agree; some date Revelation to the late 60s | Eusebius 7.25 | U | |

### New key people

| # | Claim | Cited | Status | Notes for the reviewer |
| --- | --- | --- | --- | --- |
| M32 | John: Galilean fisherman, brother of James; with Peter in Acts; a "pillar" in Galatians | Mark 1:19 to 20; Acts 3 to 4, 8; Gal 2:9 | U | |
| M33 | Tradition credits John with the Gospel, three letters and Revelation and a long life in Ephesus; most modern scholars doubt he wrote them; the beloved disciple is debated | Irenaeus 3.1.1, 3.3.4 | U | |
| M34 | Stephen: one of seven, all with Greek names; full of faith and the Spirit; speech criticises the temple; prays for his killers, echoing Jesus in Luke | Acts 6 to 7; Luke 23:34, 46 | U | Luke 23:34 is missing from some early manuscripts; consider a note |
| M35 | Timothy: from Lystra; Jewish believing mother, Greek father; co-sender of letters; Paul's envoy, "like a son" | Acts 16:1 to 3; 1 Thess 1:1, 3:2 to 6; 1 Cor 4:17; Phil 1:1, 2:19 to 22; Philemon 1 | U | 2 Corinthians 1:1 also names him |
| M36 | Many scholars think 1 and 2 Timothy were written after Paul's death | none | U | Same as B13 |
| M37 | Apollos: Alexandrian Jew, eloquent, knew only John's baptism; taught by Priscilla and Aquila; worked in Corinth; a rival faction formed around him; "I planted, Apollos watered" | Acts 18:24 to 19:1; 1 Cor 1:12, 3:4 to 9, 16:12 | U | |
| M38 | Luther guessed Apollos wrote Hebrews | none | U | Needs a source |
| M39 | Phoebe: sister, *diakonos* of the church at Cenchreae, *prostatis* of many and of Paul; translations and the "office" question debated; many think she carried the letter | Romans 16:1 to 2 | U | |
| M40 | Andronicus and Junia: relatives, fellow prisoners, believers before Paul, "outstanding among the apostles" | Romans 16:7 | U | |
| M41 | Chrysostom and most modern translations read Junia as a woman; some older ones print "Junias", not otherwise known; the phrase can mean "notable apostles" or "well known to the apostles" | Chrysostom, Homilies on Romans 31 | U | |

### Worship and community life, and the glossary

| # | Claim | Status | Notes for the reviewer |
| --- | --- | --- | --- |
| W1 | Every verse reference in the section (houses, baptism, Lord's Supper, first day, prayer and gifts, sharing, leaders) | U | Check each against the text |
| W2 | Didache chapter numbers: 7 (baptism), 8 (prayer three times a day), 9 to 10 (thanksgiving prayers), 14 (Lord's day), 15 (overseers and deacons) | U | |
| W3 | Didache found in Constantinople in 1873 and published ten years later; dated c. AD 50 to 120; probably compiled in stages | U | Found by Philotheos Bryennios; published 1883 |
| W4 | A house could hold a few dozen people at most | U | Needs a source |
| W5 | Maranatha means "our Lord, come" and suggests an Aramaic-speaking origin | U | It can also be read as "our Lord has come" |
| W6 | Many scholars think Philippians 2:6 to 11 quotes an existing hymn; debated | U | |
| W7 | Scholars debate when the ritual meal separated from an ordinary meal, and when single bishops began; Ignatius is the first to insist on one | U | |
| W8 | Jewish believers probably went on keeping the Sabbath | U | Interpretation; flag if it reads as fact |
| W9 | Glossary definitions (19 terms) | U | Check especially "Prefect, procurator" and "Proconsul" |

## Belief wording and further reading (2026-11-11)

The two "this page does not take a side" sentences were replaced with the evidence and named scholarly positions.
Written by an AI from memory; **no source opened, so every row is U.** The descriptions of each scholar's position
(C3 to C5, C10, C11) are the most important to check.

| # | Claim | Cited | Status | Notes for the reviewer |
| --- | --- | --- | --- | --- |
| C1 | Paul keeps an Aramaic prayer addressed to Jesus, *Maranatha*, "our Lord, come" | 1 Cor 16:22 | U | Can also be read "our Lord has come"; see W5 |
| C2 | One God, the Father, and one Lord, Jesus Christ, through whom all things exist; echoes the Shema | 1 Cor 8:6; Deut 6:4 | U | |
| C3 | Philippians 2:6 to 11, possibly an early hymn: Christ in the form of God; every knee bowing at Jesus's name, a phrase Isaiah uses of God | Phil 2:6 to 11; Isa 45:23 | U | |
| C4 | Hurtado and Bauckham argue Jewish believers were devoted to Jesus alongside God within the first few years | Further reading | U | Check that "within the first few years" fairly states both |
| C5 | Dunn: early believers honoured Jesus very highly but did not yet worship him in the same way as God | Further reading | U | Dunn's view is nuanced; check the wording against his 2010 book |
| C6 | Ehrman: belief in Jesus's exalted status came early but meant something different from the later creeds; Christians have traditionally read these passages as witness to Jesus's divinity | Further reading | U | The last part is attributed to Christian tradition, as CONTRIBUTING asks |
| C7 | Paul received the synagogue punishment of thirty-nine lashes five times | 2 Cor 11:24 | U | "Forty lashes minus one" in the text |
| C8 | This suggests he and the synagogues still treated him as a Jew under their discipline | none | U | Interpretation; a common one, but it needs a source |
| C9 | John's Gospel, probably written near the end of the century, speaks of followers being put out of the synagogue | John 9:22, 16:2 | U | Also John 12:42 |
| C10 | Tacitus: by AD 64 the people of Rome knew a group called Christians whom Nero could single out | Annals 15.44 | U | Tacitus wrote c. AD 116; see E21 |
| C11 | Ignatius is the first known writer to set "Christianity" against "Judaism" | Magnesians 10 | U | Check the chapter and the "first known" claim |
| C12 | Dunn: the main parting came gradually between the revolts (AD 66 to 135); others, in *The Ways That Never Parted*, argue the lines stayed blurred for centuries | Further reading | U | |

## Maps

Stops and references come from `scripts/maps/maps.config.json`. The reviewer should open each Acts passage and confirm
the note matches.

| Map | Stops and references to check | Status |
| --- | --- | --- |
| First journey (Acts 13 to 14) | Antioch 13:1 to 3 (S); Seleucia 13:4; Salamis 13:5; Paphos 13:6 to 12 (governor Sergius Paulus); Perga 13:13 (John Mark leaves); Pisidian Antioch 13:14 to 50 (synagogue sermon); Iconium 13:51 to 14:5; Lystra 14:6 to 20 (Paul stoned); Derbe 14:20 to 21; Attalia 14:25 to 26 | Antioch S; rest U |
| Second journey (Acts 15:36 to 18:22) | Antioch 15:36 to 41 (Paul and Silas); Derbe and Lystra 16:1 to 5 (Timothy); Troas 16:8 to 10; Philippi 16:12 to 40 (Lydia; jailed); Thessalonica 17:1 to 9; Berea 17:10 to 14; Athens 17:15 to 34 (Areopagus); Corinth 18:1 to 17 ("eighteen months", Gallio); Ephesus 18:19 to 21; Caesarea 18:22. The route also passes Tarsus and "Inland Galatia" as waypoints for Acts 15:41 and 16:6 (Acts 15:41 says only "Syria and Cilicia"; Tarsus is an assumed, unlabelled waypoint) | Corinth (partly) S; rest U |
| Third journey (Acts 18:23 to 21:17) | Antioch 18:23; Ephesus 19:1 to 41 ("about two to three years"); Greece, probably Corinth, 20:1 to 3 (three months); Philippi 20:6; Troas 20:6 to 12 (Eutychus); Miletus 20:15 to 38; Tyre 21:3 to 6; Caesarea 21:8 to 14 (Philip); Jerusalem 21:15 to 17. Route passes Assos, Mitylene, Cos, Rhodes, Patara and Ptolemais | U |
| Voyage to Rome (Acts 27 to 28) | Caesarea 27:1 to 2; Sidon 27:3; Myra 27:5 to 6; Fair Havens 27:8 to 12; Cauda 27:16; Malta 27:39 to 28:11 (three months, stated in 28:11); Syracuse 28:12; Puteoli 28:13 to 14; Rome 28:16 to 31 ("two years under guard"). Route passes Cnidus, Salmone, Rhegium | U |
| Place positions | Longitude and latitude entered from the drafter's knowledge, not a gazetteer. Pleiades is the intended source. Several ancient sites are approximate (Lystra, Derbe, Perga, Attalia, Fair Havens, Cauda, Salmone, Berea) | U |
| Region names and placement | Italia, Sicilia, Macedonia, Achaia, Asia, Galatia, Lycia, Pamphylia, Cilicia, Syria, Judaea, Cyprus, Creta, Aegyptus: placed roughly, with no boundaries. See high-risk item 7 on Galatia | U |
| Map base data | Coastlines, rivers, lakes and shaded relief are Natural Earth (public domain), which describes today's coastlines. Some ancient coastlines differ (for example harbours that have silted up) | S |

## Sources on the page

| # | Claim | Status | Notes for the reviewer |
| --- | --- | --- | --- |
| S1 | World English Bible is public domain | S | Bible Gateway lists it as such and notes the name is trademarked. Confirm the licence and the trademark terms at ebible.org |
| S2 | Whiston's Josephus is a public-domain translation | U | Not opened. The text was never read from this translation |
| S3 | The Tacitus and Suetonius translations used are public domain | U | The Wikisource Tacitus page did not name its translator |
| S4 | *The Cambridge History of Christianity*, Volume 1, *Origins to Constantine*, edited by Margaret M. Mitchell and Frances M. Young | U | Bibliographic details from memory; verify publisher and year |
| S5 | The "Further reading" section lists eight books with titles and years | U | Bibliographic details (subtitles, years, editions) from memory; check each |
| S6 | 1 Clement and Ignatius (older translation), Eusebius (McGiffert) are public domain; Brown is cite-only | U | Translations not chosen yet; pick one and confirm its licence |
| S7 | Irenaeus, Justin, Chrysostom (older translations), and Cary's Dio (Loeb, 1914 to 1927) are public domain; Gallio inscription edition to be named | U | Cary's Dio volumes may have different US copyright status; check the volume with book 67 |

## Suggested instructions for the reviewing model

> You are reviewing a draft web page on early Christian history for factual accuracy. For each row in the attached
> ledger, open the cited source or the best scholarly reference you can access, then mark the row **confirmed**,
> **wrong**, **overstated** or **cannot check**, and quote the passage or reference that decided it. Pay most attention
> to rows marked U and P. Do not rely on memory for dates, authorship claims, or what Josephus, Tacitus or Suetonius say.
> Flag any sentence that reads as taking a side where scholars disagree. Report which rows you could not check at all.

Remaining human step: a reviewer who knows the period, such as a historian or a seminary-trained reader, should look at
the dated claims, the Josephus and Tacitus rows, and the two debate sentences with no source.
