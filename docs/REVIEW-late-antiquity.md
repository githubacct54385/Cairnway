# Review ledger: After Chalcedon (AD 451 to 600)

Every factual claim on the fourth-era page, with how far it was checked. Statuses as in `REVIEW-age-of-the-councils.md`:
**F** full text read, **P** partly, **U** unverified, **N** a modern-scholar claim. The latest check is the AI
source check for CHR-20, first below; its statuses override the older ones further down.

Page: `src/content/eras/late-antiquity.md`. Plan: `docs/PLAN-fourth-era.md`. Full texts downloaded from CCEL
(`npnf212`, `npnf213`, `npnf214`). Passages were printed with `scripts/cite.py`.

## AI source check (CHR-20, 2026-11-16)

Tracked in Linear as CHR-20. Claude Opus 5.5, an AI model by Anthropic, went through every row below still marked U,
N or P, and either checked it against a source it could read in full, rewrote it to name the book it rests on, or cut
it back or removed it. Every "edition to choose" and "not yet checked" label on the page was removed. This is still an
AI check, not a review by a person; the specialist read-through is CHR-21. Its statuses override the older ones below.

Statuses as in `REVIEW-second-century.md`, plus **B** (tied to a named book, awaiting the owner's library check),
**G** (a general characterization in the page's own voice) and **X** (removed or cut back). Chadwick, *The Early
Church*, is the one book used: it is on the issue's list and its last chapters reach Gregory the Great.

### Sources read for this check

The CCEL volumes were downloaded again, and nine Project Gutenberg texts were downloaded on 2026-11-16 (ebook numbers
in `SOURCES.md`).

| Source | Used for |
| --- | --- |
| NPNF2 vol. 12, Feltoe's introduction to Leo | Leo 440 to 461; Attila in 452, the meeting "on lake Benacus", "no reason ... to doubt" Prosper; the Vandals in 455 and fourteen days of pillage (and the note on Sermon 84) |
| NPNF2 vol. 12, Barmby's prolegomena to Gregory | Gregory ordained 3 September 590, died 12 March 604; Benedict's order founded about ten years before Gregory's birth c. 540; St. Peter's patrimony in Sicily; Agilulf and the Lombard peace (598 to 599; truce 603); the English mission leaving Rome spring 596, letter of 23 July 596; "one of the great Doctors of the Church"; Gregory of Tours his contemporary |
| Procopius, *Gothic War* 5.1 (Dewing) | Augustus "Augustulus", Orestes, Odoacer "one of the bodyguards", a third of Italy, ten years; Dewing's date 476 |
| Procopius, *Persian War* (Dewing) | Justinian's reign 527 to 565; the Nika insurrection, January 532 |
| Procopius, *Buildings* 1.1 (Stewart, 1888) | The church called Sophia burned in the Nika revolt and rebuilt; Anthemius of Tralles and Isidore of Miletus |
| Justinian, *Institutes*, preface (Moyle) | Africa recovered; the fifty books of the Digest; four books of Institutes; "Given at Constantinople the 21st day of November, in the third consulate" |
| Gregory of Tours, *History of the Franks* 2.30 to 31 (Brehaut, 1916), notes and table | Clovis's vow against the Alamanni, "the fifteenth year of his reign", Remi of Rheims, "more than 3000" ("possibly an exaggeration"); Childeric d. 481; Gregory 538 to 594, History finished 594 |
| Patrick, *Confession* (O'Leary) and his chronology | Captive "nearly sixteen", six years, flight to a ship, "the rank of bishop", "came to the Irish people to preach the Gospel"; Confession 455, death 458, "Some chronologies extend the life of St. Patrick by forty or forty-five years" |
| Boethius, *Consolation*, with James's proem | Consul 510; Magister Officiorum; sons consuls 522; "Within a year he was a solitary prisoner at Pavia"; "condemned to outlawry and death, unheard" (1.4) |
| Benedict, *Rule* 5, 16, 48 (Doyle) | "The first degree of humility is obedience without delay"; "Seven times in the day"; "Idleness is the enemy of the soul ... manual labor ... sacred reading" |
| Bede (Sellar) | Augustine into Kent, 597 (1.25); the History finished in 731 (translator's introduction) |
| Brehaut, *Isidore of Seville* (1912) | Bishop "probably in the year 600"; died April 636; the *Etymologies* at Braulio's request, his last years, unfinished, divided into twenty books by Braulio |
| Met collection API, object 330095 | "Pyx Fragments with the Multiplication of the Loaves and Fishes", 6th century, Byzantine, elephant ivory, public domain, 2021.37.24a, b |
| Pleiades (JSON, 2026-11-16) | Map places |
| Open Library (2026-11-16) | Further reading |

### What changed on the page

- **Dates corrected:** Patrick ("c. 500 to 530" to "fifth century", with O'Leary's 455 and his note on later
  chronologies); Hagia Sophia ("dedicated 537" to "rebuilt from 532"; 537 is in no source read); Isidore's
  *Etymologies* ("c. 600" to his last years, before 636); Boethius ("c. 524" to "c. 523", within a year of 522);
  Clovis ("c. 496 to 508, debated" to "c. 496, by Gregory's count", with the reasoning shown); Attila ("452,
  debated" to 452, with Leo's own near-silence noted).
- **Corrected:** the Attila meeting was "on lake Benacus", not "near Mantua". Odoacer was "one of the bodyguards of
  the emperor" in Procopius, not "a general of mixed Germanic origin".
- **Removed:** the Islam note (outside the era and unchecked); "a code that shaped European law for centuries";
  Boethius's book "among the most-read books of the Middle Ages"; Isidore's book "one of the most used reference
  books"; "Ivory carving like this was made for church and imperial use"; "conventionally dated to 1054"; "Gregory
  became one of the most powerful men in Italy"; "historians debate whether the meeting happened"; "Christianity
  outlived the empire that had once protected it"; Iona from the map (not in Pleiades and not named on the page).
- **Added from the sources:** Gregory's dates; the English mission's timeline; the Lombard peace; Justinian's
  Institutes in his own words; Clovis's vow and baptism; Patrick's own account; Boethius's career; the Rule's own words.
- **Scholarly claims** now name Chadwick: the gradual end of the western empire; Benedict at Monte Cassino and the
  Rule's later spread; Justinian and the non-Chalcedonian churches; how much the British and Irish Christians
  contributed to the English conversion; the Church of the East and the Oriental Orthodox.
- **Map:** title "Churches and kingdoms" became "Churches and cities", and "Boundaries are simplified" became "No
  borders are drawn" (the map draws neither kingdoms nor borders). Ten places checked against Pleiades; Iona removed;
  Pleiades credited.
- **Glossary:** "pyx" added; "Doctor of the Church" tied to the editor; "Monophysite" reworded.

### Row outcomes

| Rows | New status | Note |
| --- | --- | --- |
| All dates | F | Each from the source or editor named on the page; see "Dates corrected" |
| Leo meets Attila (452) | F | Feltoe, following Prosper; the page says Leo barely alludes to it |
| Vandals (455) | F | Feltoe |
| Odoacer (476) | F / B | Procopius 5.1 and Dewing (F); "gradual" (B, Chadwick) |
| Clovis | F | Gregory of Tours 2.30 to 31 and Brehaut |
| Patrick | F | *Confession*; O'Leary's chronology, with its note on other chronologies |
| Boethius | F | James; *Consolation* 1.4 |
| Benedict and his Rule | F / B | Rule (F); founding c. 530 (F, Barmby); Monte Cassino and later spread (B, Chadwick) |
| Justinian's codification | F | *Institutes* preface; the year of the third consulship is not given in the translation, so the page gives the consulship |
| Hagia Sophia | F / X | Rebuilding F (*Buildings* 1.1, Dewing for 532); "537" removed |
| Non-Chalcedonian churches organize | B | Chadwick |
| Gregory and the Lombards; Doctor | F | Barmby |
| Isidore | F | Brehaut |
| Islam note | X | Removed |
| Western empire's end gradual | B | Chadwick; Procopius's account (F) is given beside it |
| Bede a century later | F | Finished 731 (Sellar) |
| British and Irish contribution to the English conversion | B | Chadwick |
| Church of the East; Oriental Orthodox | B | Chadwick, as in the third era |
| Bishops and the state | F | Barmby; NPNF2 vol. 14 (Justinian's edict against the Three Chapters) |
| Figure | F / X | Met record (F); the Justinianic-use sentence removed |
| Map | F / X | See below |
| Further reading | F | Open Library: Brown 1971, Cameron 1993, Fletcher 1997, Wood 1994 |

### Map places against Pleiades

| Place | Pleiades | Difference |
| --- | --- | --- |
| Rome | [423025](https://pleiades.stoa.org/places/423025) | 1.3 km |
| Ravenna | [393480](https://pleiades.stoa.org/places/393480) | 0.5 km |
| Monte Cassino | [432764](https://pleiades.stoa.org/places/432764) (Casinum, the town below the abbey) | 3.4 km |
| Constantinople | [520985](https://pleiades.stoa.org/places/520985) | 0.7 km |
| Carthage | [314921](https://pleiades.stoa.org/places/314921) | 0.4 km |
| Alexandria | [727070](https://pleiades.stoa.org/places/727070) | 1.0 km |
| Jerusalem | [687928](https://pleiades.stoa.org/places/687928) | 0.6 km |
| Antioch | [658381](https://pleiades.stoa.org/places/658381) | 2.3 km |
| Canterbury | [79439](https://pleiades.stoa.org/places/79439) (Durovernum) | 0.3 km |
| Tours | [138255](https://pleiades.stoa.org/places/138255) (Caesarodunum) | 0.9 km |
| Iona | Not in Pleiades | Removed from the map |

### Owner's library checklist

Out of scope for CHR-20's AI work; it does not block the era's box.

| Book | Claim it must support | Where to look | Page |
| --- | --- | --- | --- |
| Chadwick, *The Early Church* (rev. 1993) | The end of the western empire was a gradual change rather than a sudden fall | Last chapters; index: Odoacer | |
| Chadwick | Benedict at Monte Cassino; the Rule's influence grew slowly and it later became the common pattern for western monasteries | Index: Benedict | |
| Chadwick | In Syria and Egypt, churches that rejected Chalcedon organized their own clergy; Justinian's policy towards them varied | Index: Justinian; Monophysites | |
| Chadwick | How much Christians already in Britain and the Irish mission contributed to the English conversion | Index: Augustine of Canterbury; Ireland | |
| Chadwick | The Church of the East after Ephesus; the Oriental Orthodox after Chalcedon (also on the third era's checklist) | Index: Nestorians; Monophysites | |

## Checked against full text (F), before the CHR-20 check

| Claim | Status | Where |
| --- | --- | --- |
| Gregory's letter "Glory to God..." praises the conversion of the Angli through Augustine's labor | F | NPNF2-13, letter to Augustine, Bishop of the Angli |
| Augustine was provost of Gregory's monastery and is now a fellow-bishop; Gregory grants him the pallium | F | NPNF2-13, letter about the pallium |
| Pastoral Rule was issued at the start of Gregory's pontificate | F | NPNF2-12, preface to the Book of Pastoral Rule |
| The ruler of souls must distinguish virtues from vices with vigilant care (meanness, wasteful liberality, misplaced severity) | F | NPNF2-12, Pastoral Rule, Part II |
| Gregory's letters on managing the church's estates in Sicily (Book I, 590 to 591) | F for the heading only | NPNF2-12, Book I heading; the detail is not yet read |
| The Second Council of Constantinople (553) and Vigilius; the Three Chapters are the writings of Theodore, Theodoret against Cyril, and Ibas's letter to Maris | F | NPNF2-14, Fifth Ecumenical Council, historical introduction |
| Leo's Tome and Chalcedon | F | Already read in the third era (NPNF2-12, NPNF2-14) |

## Not yet checked (U, N and the rest)

| Claim | Status | Note |
| --- | --- | --- |
| All dates on the page apart from the headings above | U | The dates come from general knowledge. The reviewer should treat each as a guess. |
| Leo meets Attila (452) | U | Later tradition; the page says so. Sources to find: Prosper, the Liber Pontificalis |
| Vandals sack Rome (455); Odoacer deposes the last emperor (476) | U | Procopius, the chronicles |
| Clovis baptized (c. 496 to 508) | U | Gregory of Tours 2; date debated |
| Patrick's mission and Confession | U | Edition to choose |
| Boethius, Consolation (c. 524) and his execution | U | Edition to choose |
| Benedict and his Rule (c. 530); the Dialogues as the source for his life | U | Dialogues not in hand (not in NPNF2 vols. 12 or 13) |
| Justinian's codification (529 to 534) | U | Corpus iuris civilis not yet fetched |
| Hagia Sophia dedicated 537 | U | Procopius, Buildings 1 |
| Non-Chalcedonian churches organize separately (c. 540 to 600) | U | Secondary sources; John of Ephesus to check |
| Gregory makes peace with the Lombards; Gregory is one of the four Doctors | U | From memory; not on the page's sources |
| Isidore, Etymologies (c. 600) | U | Edition to choose |
| Muhammad begins to preach in Mecca c. 610; Arab armies take Syria, Egypt and Persian lands in the 630s to 640s | U | Islam note only; to check against a source before publication |

## Scholarly claims (N)

| Claim | Status | Note |
| --- | --- | --- |
| The western empire's end was gradual (Overview; "Was the western empire's end sudden?") | N | Modern view; not yet checked against a named scholar |
| Bede's account came a century later | U | Dates from memory |
| The Oriental Orthodox and Church of the East splits | U | Carried over from the third era's ledger |

## Highest-risk items (before the CHR-20 check)

All were resolved in the AI source check above.

1. **The 452 Attila story.** Later tradition; the page says so, but no earlier source has been read.
2. **Benedict's Rule and its date.** The page cites the Dialogues for Benedict's life, which we have not read.
3. **The Islam note.** Dates and details are from memory; keep as a note until checked.
4. **Gregory's Lombard and Doctor details.** From memory and not on the page's sources. Remove unless checked.
