# Plan: The Fifth Era (AD 600 to 787)

> Drafted 2026-11-12 as the planning document for the fifth era, after the fourth era (AD 451 to 600). Planning only.
> Every date, passage reference and book detail is from the drafter's general knowledge and is **U** (unverified) until
> checked, unless marked **F** (read in the full text of a named public-domain edition, as in `REVIEW-late-antiquity.md`).

Slug: `gregory-to-nicaea` (file `src/content/eras/gregory-to-nicaea.md`, `order: 5`).

## Why this boundary

The fourth era ends with Gregory the Great (604) and the English mission. The fifth era closes with the Second Council
of Nicaea in 787, which restored the veneration of images after the iconoclast period. In between, three things shape
the church: the Arab conquests of Christian lands in the East, the conflict over the veneration of images, and the
building of a church in the North (England, then the Frankish kingdoms). Stopping at 787 keeps the era to about 190
years and ends it on a council, which matches the other eras' structure. Charlemagne's coronation (800) and the rest of
the Frankish story go to the sixth era.

## Decisions (owner, 2026-11-12)

1. **End date: AD 787**, the Second Council of Nicaea, which restored the veneration of images. Charlemagne's coronation
   (800) is left to the sixth era.
2. **Islam is in scope.** The conquests are the main East event of the era. The page describes them from the Christian
   sources, with the sources' views marked as such, and keeps the Islamic sources to a note.
3. **East and West** framing as before, with England and the Frankish kingdoms in the West.

## Notable events (about 14 to 16)

| Date | Region | Event | Main source |
| --- | --- | --- | --- |
| 597 | West | Augustine lands in Kent (era 4) and the mission grows | **F** Bede, Ecclesiastical History 1.23 to 25 (Sellar translation, Gutenberg 38326) |
| 589 | West | Reccared, Visigothic king in Spain, leaves Arian belief; third council of Toledo | U (Isidore, History of the Goths, not yet fetched) |
| c. 610 to 632 | East | Muhammad preaches in Mecca and Medina; Islam begins | U (outside the Christian sources; see Islam section) |
| c. 634 to 641 | East | Arab armies take Syria, Jerusalem (637) and Egypt | U (Sophronius's letters, Theophanes; not yet fetched) |
| 649 to 655 | East | Maximus the Confessor and the Lateran council under Martin I | U |
| 664 | West | Synod of Whitby decides the date of Easter for the English church | **F** Bede, Ecclesiastical History 3.25 (Colman, Wilfrid, Oswy; Oswy decides for Peter's authority) |
| 680 to 681 | East | Sixth Ecumenical Council (Third of Constantinople) condemns Monothelitism and Pope Honorius | **F** The Seven Ecumenical Councils (NPNF2 vol. 14), the Sixth Council, session 13 on Honorius |
| 680 | West | Council of Hatfield affirms the English church's orthodoxy | U (the editor's introduction to Bede mentions it; Bede's own text not yet checked) |
| 692 | East | Council in Trullo (Quinisext) | U (mentioned in NPNF2-14, date not yet checked) |
| c. 716 to 740 | East | Iconoclasm begins under Leo III | U |
| 731 | West | Bede completes the Ecclesiastical History | U (date from the preface, not yet checked) |
| 732 | West | Battle of Tours (Poitiers) | U |
| 751 to 754 | West | Pepin becomes king of the Franks; the papal alliance | U |
| 787 | East | Second Council of Nicaea restores the veneration of icons | **F** The Seven Ecumenical Councils (NPNF2 vol. 14), acts of the Seventh Council (confessions of venerating images, and anathemas) |

## Candidate people (about 10)

Augustine of Canterbury (from era 4), Colman and Wilfrid, King Oswy, Hilda, Bede, Theodore of Tarsus, Honorius (as a
condemned pope), Maximus the Confessor, Sophronius of Jerusalem, Leo III, Irene, John of Damascus.
Keep to those with a clear role in the events above.

## Maps

| Map | Content | Status |
| --- | --- | --- |
| 1. The Mediterranean and the Arab conquests (c. 650) | Jerusalem, Damascus, Alexandria, Constantinople, Rome, Carthage | Proposed; needs places in `scripts/maps/maps.config.json` |
| 2. Britain and the North (c. 680) | Whitby, Canterbury, Hatfield, Lindisfarne | Optional |

Check the relief crop (5°E to 45°E) before drafting Map 2; Whitby and Lindisfarne are outside it.

## Sources to choose

| Source | Edition | Status |
| --- | --- | --- |
| Bede, *Ecclesiastical History of England* | Sellar, Gutenberg 38326 | In hand; public domain (Gutenberg) |
| Councils (Sixth and Seventh) | NPNF2 vol. 14 (CCEL) | In hand; public domain (CCEL) |
| Theophanes, *Chronicle* | Mango and Scott, or Turtledove | To choose; licence to check |
| Sophronius, letters and sermons | To choose | To check |
| Isidore, *History of the Goths* | To choose | To check |

## Modern books (to choose; owner needs library copies)

- Peter Brown, *The Rise of Western Christendom* (framework for the period)
- Averil Cameron, *The Mediterranean World in Late Antiquity* (already listed for era 4)
- Judith Herrin, *Byzantium: The Surprising Life of a Medieval Empire* (for Iconoclasm)
- Richard Fletcher, *The Conversion of Europe* (for the English mission, already listed)

Recommendation: Brown, Herrin, Fletcher. All details to verify.

## Process and site work

Same as the earlier eras: choose editions and record licences first; check each citation as written with `scripts/cite.py`;
keep the ledger as we go (`docs/REVIEW-gregory-to-nicaea.md`); set `reviewStatus` from the first commit.

Site: the home page "More eras" card needs revisiting once five eras are listed. No code change is needed for the page.

## Linear

- **E5** (plan and draft the fifth era): this document and the page. Backlog until the owner confirms the end date.
- **E5b** and **E5c**: scholarly-claims check and specialist read-through, as for E3 and E4.

## Order of work

1. Owner confirmed the end date (AD 787). Islam scope still to confirm.
2. Fetch the remaining sources (Theophanes, Sophronius) and record licences.
3. Draft the page with the ledger, checking citations as written.
4. Add the maps and build; check the home page and search.
5. Open the PR and create E5b and E5c.
