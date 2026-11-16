# Review ledger: From Gregory to the Second Council of Nicaea (AD 600 to 787)

Every factual claim on the fifth-era page, with how far it was checked. Statuses as in `REVIEW-late-antiquity.md`:
**F** full text read, **P** partly, **U** unverified, **N** a modern-scholar claim. The latest check is the AI
source check for CHR-20, first below; its statuses override the older ones further down.

Page: `src/content/eras/gregory-to-nicaea.md`. Plan: `docs/PLAN-fifth-era.md`. Texts: Bede (Sellar, Gutenberg 38326);
NPNF2 vol. 14 (CCEL npnf214). Passages were printed with `scripts/cite.py`.

## AI source check (CHR-20, 2026-11-16)

Tracked in Linear as CHR-20. Claude Opus 5.5, an AI model by Anthropic, went through every row below still marked U,
N or P, and either checked it against a source it could read in full or cut it back or removed it. Every "not yet
checked" and "to be fetched" label on the page was removed. This is still an AI check, not a review by a person; the
specialist read-through is CHR-21. Its statuses override the older ones below.

Statuses as in `REVIEW-second-century.md`, plus **G** (a general characterization in the page's own voice) and **X**
(removed or cut back). There are **no B rows**: the issue's book list (Chadwick and the others) ends around AD 600, and
no medieval book list has been chosen, so statements about modern scholarship were cut back to what the sources on
the page show. Nothing on this page waits on the owner's library check.

### Sources read for this check

| Source | Used for |
| --- | --- |
| Bede 1.23 to 25, 3.25 to 26, 4.1 to 2, 4.17, 5.23 (Sellar) and the translator's introduction and notes | The mission (597); Whitby (664): Colman's "received from my elders", Wilfrid at Rome and Lyons, Hilda on Colman's side, Colman "went back into Scotland"; Theodore (consecrated, came "in the second year", 27 May, 669); Hatfield (680): "the five holy and general councils", the synod "in the time of the blessed Pope Martin", the Holy Ghost "from the Father and the Son"; note 649 (Lateran 649; Martin 649 to 655, died exiled in the Crimea); 5.23 Saracens in Gaul and note 1002 (Tours 732, a later insertion); finished 731 |
| NPNF2 vol. 14, Sixth Council | Dates (as before); Honorius in session 13, with the historical note |
| NPNF2 vol. 14, Seventh Council, introduction and excursuses | 787 under Constantine VI and Irene; "three hundred and fifty bishops", unanimous; patriarchs absent "on account of the Moslem tyranny"; received in the East and by the pope, except at first in the Frankish kingdom; Gibbon "never" read the acts; the iconoclast council of 754; Bury: Leo pulled down the image of Christ "above the Chalkâ gate" |
| Gibbon, chapter 47 (vol. 4) | Martin's Lateran synod; Martin died "on the inhospitable shore of the Tauric Chersonesus"; Maximus's tongue and right hand |
| Gibbon, chapter 49 (vol. 5) | Leo III, "after ten years" moved images out of reach, then a second edict; his son Constantine convoked the council; the papal letters "without a date ... 726 ... 729 ... 730" |
| Gibbon, chapter 50 and notes | "In the fortieth year of his age, he assumed the title of a prophet"; the Hegira "Friday, July 16th, A.D. 622"; editor's note: died "8th June, 632" |
| Gibbon, chapter 51 and notes | Jerusalem besieged four months; Sophronius proposed a capitulation ratified by Omar in person; note 112: Alexandria taken "December 22, A.D. 640" (Eutychius, Elmacin) |
| Gibbon, chapter 52 | "between Tours and Poitiers"; the large death toll called an "incredible tale" |
| Wikimedia Commons | Lindisfarne f.25v (710 to 721; British Library Cotton MS Nero D IV; CC0; "a winged man"); Sinai icon (6th century; encaustic; Saint Catherine's; PD-Art); category coordinates for Whitby Abbey, Lindisfarne Priory, Iona Abbey |
| Pleiades; Open Library | Map places; further reading |

Gibbon is an eighteenth-century history, not a primary source, and the councils volume's editor calls his account of
the Seventh Council full of errors. He is used only for events and dates, every use names him on the page, and his
judgments are not repeated.

### What changed on the page

- **Corrected:** the Lindisfarne caption said the Gospels "come from the period just before Whitby"; they were made in
  710 to 721, about fifty years after it. St Matthew's symbol is "a winged man", not "the angel". "Made on Lindisfarne"
  was removed (not in the record).
- **Corrected on the map:** Lindisfarne was placed at 1.70° W, about 6 km east of the island in the sea; it is now at
  1.80° W (Lindisfarne Priory, 1.8008° W in Commons), and its position on the map was recomputed with the build
  script's own projection. The intro's "Boundaries are simplified" became "No borders are drawn".
- **Iconoclasm:** "c. 716 to 740" became "reign of Leo III, to 754". No source read gives a year for Leo's first
  measures; Gibbon says "after ten years" of his reign and reports the papal letters' disputed dates.
- **Islam and the conquests:** "610 to 632" became "to 632" with Gibbon's dates (prophet at forty; Hegira 16 July
  622; death 8 June 632 in an editor's note). "634 to 641" became "after 632; Alexandria taken in 640". "Sophronius
  surrendered the city in 637" became Gibbon's account without a year, which this edition does not give.
- **Maximus:** "tried in Constantinople in the 650s" became Gibbon's account; the place of trial was removed.
- **Colman:** "customs he had received from Iona" became Bede's "received from my elders". Added: Hilda on Colman's
  side.
- **Hatfield:** now from Bede 4.17 itself, not the editor's introduction.
- **Removed:**
  - Bede's book "one of the most copied books of the Middle Ages";
  - the Sinai icon "one of the oldest surviving icons of Christ";
  - "a church ... that would shape the West for centuries";
  - "monasteries were the centers of learning";
  - "how much depended on what the emperor wanted";
  - the Whitby and Arab-conquest "scholars differ" sentences, which named no one and no book;
  - "historians debate how far Honorius was at fault", rewritten to what the councils volume prints.
- **Added from the sources:** Nicaea II's 350 bishops and its reception, including the Franks; the iconoclast
  council of 754; the patriarchs absent under Muslim rule.

### Row outcomes

| Rows | New status | Note |
| --- | --- | --- |
| Augustine lands on Thanet (597) | F | Bede 1.25, chapter text and heading |
| Colman returned home | F | Bede 3.26: "went back into Scotland" |
| 589 Reccared, Toledo | n/a | Not on the page |
| Muhammad, 610 to 632 | F | Gibbon 50 and notes, attributed |
| Arab conquests, Jerusalem, Sophronius, 637 | F / X | Gibbon 51 and notes; "637" removed |
| Lateran 649; Maximus 655 | F / X | Sellar note; Gibbon 47; "655" and "tried in Constantinople" removed |
| Hatfield 680 | F | Bede 4.17 |
| Trullo 692 | n/a | Not on the page |
| Iconoclasm c. 716 to 740 | F / X | Gibbon 49; NPNF2 vol. 14 (754; Bury); the year range removed |
| Bede 731 | F | Translator's introduction; Bede 5.23 |
| Tours 732 | F | Gibbon 52; Bede 5.23 with note 1002 |
| Theodore from 669 | F | Bede 4.1 to 2 |
| Honorius debated | G | Rewritten to what the councils volume prints |
| Whitby's effect debated | X | Removed |
| Arab conquests' effect on thought | G | The page says it does not try to answer |
| Figures | F / X | Commons records; unsupported phrases removed |
| Map places | F | Below |

### Map places

| Place | Checked against | Difference |
| --- | --- | --- |
| Iona | Commons, Category:Iona Abbey (56.335, -6.391) | 0.6 km |
| Lindisfarne | Commons, Category:Lindisfarne Priory (55.669, -1.801) | Was 6.3 km off; corrected to 0.1 km |
| Whitby | Commons, Category:Whitby Abbey (54.488, -0.608) | 0.3 km |
| York | Pleiades [89175](https://pleiades.stoa.org/places/89175) (Eburacum) | 0.3 km |
| Canterbury | Pleiades [79439](https://pleiades.stoa.org/places/79439) | 0.3 km |
| Rome | Pleiades [423025](https://pleiades.stoa.org/places/423025) | 1.3 km |
| Constantinople | Pleiades [520985](https://pleiades.stoa.org/places/520985) | 0.7 km |
| Nicaea | Pleiades [511268](https://pleiades.stoa.org/places/511268) | 0.5 km |
| Damascus | Pleiades [678106](https://pleiades.stoa.org/places/678106) | 1.8 km |
| Jerusalem | Pleiades [687928](https://pleiades.stoa.org/places/687928) | 0.6 km |
| Alexandria | Pleiades [727070](https://pleiades.stoa.org/places/727070) | 1.0 km |

## Checked against full text (F), before the CHR-20 check

| Claim | Status | Where |
| --- | --- | --- |
| Gregory sends Augustine and monks to the English; the monks first turn back in fear, Augustine returns to ask Gregory's release, Gregory's letter of encouragement | F | Bede 1.23 (Sellar) |
| Augustine lands on Thanet and preaches in Kent (Bede's heading: 597) | F for the heading; the landing details are not checked against the chapter text | Bede 1.25 |
| Synod of Whitby: Colman and Wilfrid; Alchfrid and Wilfrid; the synod at Streaneshalch under Abbess Hilda; Oswy's verdict that Peter holds the keys of the kingdom | F | Bede 3.25 |
| Colman returned home after the synod | P | Bede 3.26 heading "How Colman, being worsted, returned home"; the destination ("to Scotland") is Bede's word for it and is not separately checked |
| Sixth Council met 7 November 680 and ended 16 September 681; fewer than three hundred bishops | F | NPNF2-14, Sixth Ecumenical Council, introductory note |
| Honorius condemned by the Sixth Council, in its thirteenth session | F | NPNF2-14, historical note on Honorius |
| Seventh Council's acts: confessions venerating the image of Christ, the Mother of God, the apostles and saints, with anathemas against those who do not venerate images | F | NPNF2-14, acts of the Seventh Council, a confession read at the council |
| "Images are not worshipped as gods" distinction | F | Same confession |

## Not yet checked (U)

| Claim | Status | Note |
| --- | --- | --- |
| 589 Reccared and the third council of Toledo | U | Isidore, History of the Goths, to fetch |
| c. 610 to 632 Muhammad begins to preach in Mecca and Medina | U | Islamic and Christian sources to fetch; Islam section is a note |
| 634 to 641 Arab conquests of Syria, Jerusalem (637, Sophronius, Umar) and Egypt | U | Theophanes, Sophronius's letters to fetch |
| 649 Lateran council under Martin I; Maximus tried 655 | U | Council acts to fetch |
| 680 Council of Hatfield | U | Editor's introduction to Bede only; Bede's own account to check |
| 692 Council in Trullo | U | Mentioned in NPNF2-14; date to check |
| c. 716 to 740 Iconoclasm begins under Leo III | U | Standard date; to check against a source |
| 731 Bede completes the Ecclesiastical History | U | From the preface; to check |
| 732 battle near Tours or Poitiers | U | Not yet fetched |
| Theodore of Tarsus, archbishop from 669 | U | Date from memory |
| Sophronius surrendered Jerusalem in 637 | U | From memory |
| Irene and the restoration of images "held in 787" | F for the council's date only | Council date is in NPNF2-14 (Seventh Council) |

## Scholarly claims (N)

| Claim | Status | Note |
| --- | --- | --- |
| Whether Honorius was in fact a heretic | N | Debated; the page reports both views |
| Whether the Whitby decision changed the English church much | N | Debated; the page makes no claim |
| Whether the Arab conquests changed Christian thought | N | Debated; the page makes no claim |

## Highest-risk items (before the CHR-20 check)

All were resolved in the AI source check above.

1. **Iconoclasm dates (c. 716 to 740).** Standard, but unchecked; the page states them as debated.
2. **Islamic events and Sophronius's surrender.** No Islamic source read; kept as unchecked notes.
3. **Hatfield (680).** Given only from the editor's introduction.
