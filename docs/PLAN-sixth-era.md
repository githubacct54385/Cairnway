# Plan: The Sixth Era (AD 800 to 1054)

> Drafted 2026-11-12 as the planning document for the sixth era, after the fifth era (AD 600 to 787). Planning only.
> Every date, passage reference and book detail is from the drafter's general knowledge and is **U** (unverified) until
> checked, unless marked **F** (read in the full text of a named public-domain edition).

Proposed slug: `carolingians-to-schism` (file `src/content/eras/carolingians-to-schism.md`, `order: 6`). Title is a
suggestion.

## Why this boundary

The fifth era ends at Nicaea II (787). The sixth era begins with Charlemagne's coronation in Rome on Christmas Day 800,
which the fifth era deliberately left out. It ends at the Great Schism of 1054, when the legates of Pope Leo IX and the
patriarch of Constantinople excommunicated each other, which formally divided the Latin West from the Greek East. That
division is the end point of the East and West story that began at Chalcedon.

The sixth era covers the period most often called the Dark Ages (roughly 500 to 1000, a term historians now use with
care). This plan keeps the Dark Ages theme visible by using the Carolingian reforms, the Viking raids and the monastic
reform movements as its threads.

## Decisions (owner, to confirm)

1. **Start: AD 800** (Charlemagne's coronation). Confirm this start, since the fifth era left it out on purpose.
2. **End: AD 1054** (Great Schism). Alternative: end at 1049 (Leo IX's reforming papacy) or at 1000. Owner to choose.
3. **East is in scope**, as in the earlier eras: the iconoclast controversy, the Byzantine recovery under the Macedonian
   emperors and the Photian and Cerularian disputes.

## Notable events (about 14 to 16, tagged East, West or Both)

| Date | Region | Event | Main source (candidate) |
| --- | --- | --- | --- |
| 800 | West | Charlemagne crowned emperor in Rome by Pope Leo III | U (Einhard, *Life of Charlemagne* 28; Annals of Lorsch) |
| 813 | West | Council of Chalon / Carolingian reform of the clergy and liturgy | U |
| 843 | West | Treaty of Verdun divides the Carolingian empire | U |
| 843 | East | End of the second iconoclasm; icons restored | U (Theophanes continuatus) |
| 858 to 867 | East | Photius and the Ignatian schism; Pope Nicholas I | U |
| 862 to 880s | West | Cyril and Methodius mission to the Slavs | U |
| 867 | East | Basil I founds the Macedonian dynasty | U |
| 910 | West | Foundation of Cluny; the reforming monastic movement | U |
| c. 950 to 1000 | West | Otto I's coronation (962); the Ottonian church and the imperial bishops | U |
| 988 | East | Vladimir of Kiev accepts Christianity (Rus' conversion) | U |
| 909 to 1000 | West | Viking raids and settlement; Christian conversion of Scandinavia | U |
| c. 1000 | West | Church of Rome under the "saeculum obscurum" (the papacy under local Roman families) | U (scholarly framing; check) |
| 1009 | Both | Destruction of the Church of the Holy Sepulchre in Jerusalem | U |
| 1014 | West | Henry II crowned emperor; a reforming alliance with the papacy | U |
| 1046 | West | Synod of Sutri; the three rival popes deposed | U |
| 1049 | West | Leo IX begins the reforming papacy | U |
| 1054 | Both | Cerularian schism: mutual excommunications at Constantinople | U |

## Candidate people (about 10)

Charlemagne, Alcuin of York, Einhard, Leo III, Photius, Nicholas I, Cyril and Methodius, Basil I, Otto I, Odo of Cluny,
Leo IX, Michael Cerularius. Possible: Gerbert of Aurillac (Pope Sylvester II), John Scotus Eriugena.

## Maps

| Map | Content | Status |
| --- | --- | --- |
| 1. The Carolingian and Byzantine worlds (c. 830) | Aachen, Rome, Verdun, Constantinople, Baghdad, Kiev | Proposed |
| 2. The Great Schism (c. 1054) | Rome, Constantinople, Cluny, Bari | Optional |

Places to add to `scripts/maps/maps.config.json`: Aachen, Cluny, Verdun, Kiev, Bari, Baghdad. Check the relief crop
(5°E to 45°E); Aachen and Kiev may fall outside it.

## Sources to choose (expected public domain; licences to record)

| Source | Candidate edition | Used for |
| --- | --- | --- |
| Einhard, *Life of Charlemagne* | Turner (1880), if public domain online | Coronation, Charlemagne |
| Annals of the Frankish kingdom | To choose | Verdun, Carolingian events |
| Photius, letters | To choose | Photian schism |
| Liudprand of Cremona, *Antapodosis* | Public-domain translation to check | Otto I, Roman papacy |
| *Acts of the Council of Sutri* / Leo IX letters | Latin text or translation to check | 1046 and 1049 |
| Michael Cerularius and the 1054 letters | To check | Schism |

## Modern books (to choose; owner needs library copies)

- Rosamond McKitterick, *Charlemagne* (framework for the Carolingians)
- Timothy Reuter, *Germany in the Early Middle Ages* (Ottonians)
- Jonathan Shepard, *The Byzantine Empire* or Judith Herrin's *Byzantium* (for the East)
- Marcia Colish, *Medieval Foundations of the Western Intellectual Tradition* (if an intellectual thread is wanted)

Recommendation: McKitterick, Herrin, Reuter. All details to verify.

## Process and site work

Same as the earlier eras: choose editions and record licences first; check each citation as written with `scripts/cite.py`;
keep the ledger as we go (`docs/REVIEW-carolingians-to-schism.md`); set `reviewStatus` from the first commit.

Site: the homepage timeline scales by era length, so the sixth era (254 years) will be a wide segment. No code change is
needed, but check the segment labels once the page exists.

## Order of work

1. Owner confirms the start (800) and the end (1054).
2. Choose editions and record licences; add the sources to `SOURCES.md`.
3. Draft the page with the ledger, checking citations as written.
4. Add the maps and build; check the homepage and search.
5. Open the PR; create the scholarly-claims and specialist-read issues.
