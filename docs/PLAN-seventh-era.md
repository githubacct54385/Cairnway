# Plan: The Seventh Era (AD 1054 to 1215)

> Drafted 2026-11-12 as the planning document for the seventh era, after the sixth era (AD 800 to 1054). Planning only.
> Every date, passage reference and book detail is from the drafter's general knowledge and is **U** (unverified) until
> checked, unless marked **F** (read in the full text of a named public-domain edition).

Proposed slug: `reform-and-crusade` (file `src/content/eras/reform-and-crusade.md`, `order: 7`). Title is a suggestion.

## Why this boundary

The sixth era ends with the Great Schism of 1054. The seventh era begins there, with the Western church reforming itself
and the Eastern and Western churches now formally separate. It ends at the Fourth Lateran Council (1215), the largest
medieval council, which set the church's teaching on the sacraments, the Eucharist and the duties of the clergy. Lateran
IV also called the Fifth Crusade and required annual confession, so it draws together the era's main threads.

## Decisions (owner, to confirm)

1. **Start: AD 1054** (Great Schism). Follows directly from the sixth era's end date.
2. **End: AD 1215** (Fourth Lateran Council). Alternative: end at 1209 (Francis's rule approved), which is also a clear
   turning point. Owner to choose.
3. **East and West**, with the Schism as the frame and the Crusades as the main shared event. The East is in scope through
   the Crusades and the sack of Constantinople in 1204.

## Notable events (about 14 to 16, tagged East, West or Both)

| Date | Region | Event | Main source (candidate) |
| --- | --- | --- | --- |
| 1054 | Both | Cerularian schism (end of era 6; a frame here) | U |
| 1059 | West | Papal election decree of Nicholas II (cardinals elect the pope) | U |
| 1066 | West | Norman conquest of England; the Norman church | U |
| 1073 to 1085 | West | Gregory VII (Hildebrand) pope; reform of simony and clerical marriage | U |
| 1076 to 1122 | West | Investiture Controversy; Canossa (1077) | U |
| 1095 | Both | Council of Clermont; Urban II calls the First Crusade | U |
| 1099 | Both | Crusaders take Jerusalem | U |
| 1098 | West | Cistercians founded at Cîteaux; the monastic revival | U |
| 1119 | West | Knights Templar founded | U |
| 1140 to 1150 | West | Gratian's *Decretum*; the study of canon law at Bologna | U |
| 1140 to 1143 | West | Abelard condemned; Bernard of Clairvaux | U |
| 1170 | West | Murder of Thomas Becket at Canterbury | U |
| 1179 | West | Third Lateran Council | U |
| 1182 | East | Massacre of Latins in Constantinople | U |
| 1187 | Both | Saladin takes Jerusalem; Third Crusade | U |
| 1204 | East | Fourth Crusade sacks Constantinople; the Latin Empire | U |
| 1209 | West | Francis of Assisi's rule approved; the friars | U |
| 1215 | Both | Fourth Lateran Council (end of era) | U |

## Candidate people (about 10)

Gregory VII, Henry IV, Urban II, Peter the Hermit (or leave him out), Bernard of Clairvaux, Peter Abelard, Thomas Becket,
Innocent III, Francis of Assisi, Saladin, Alexios I Komnenos, Gratian. Possible: Anselm of Canterbury, Hildegard of Bingen.

## Maps

| Map | Content | Status |
| --- | --- | --- |
| 1. Western Christendom and the Crusades (c. 1100) | Rome, Canossa, Clermont, Jerusalem, Antioch, Constantinople, Cluny, Cîteaux | Proposed |
| 2. The Fourth Crusade (1204) | Venice, Zara, Constantinople | Optional |

Places to add to `scripts/maps/maps.config.json`: Canossa, Clermont, Jerusalem, Antioch, Cîteaux, Canterbury, Venice.
Check the relief crop (5°E to 45°E): England and parts of the Crusader states may fall outside it.

## Sources to choose (expected public domain; licences to record)

| Source | Candidate edition | Used for |
| --- | --- | --- |
| Gregory VII, *Registrum* | Emerton (1932), if public domain | Gregory VII, Canossa |
| Fulcher of Chartres, *Chronicle of the First Crusade* | Public-domain translation to check | Clermont, Jerusalem |
| Bernard of Clairvaux, letters | Public-domain translation to check | Cîteaux, Bernard |
| Thomas Becket, letters (Robertson) | Public-domain edition to check | Becket |
| Villehardouin, *Conquest of Constantinople* | Marzials (1908), if public domain | Fourth Crusade |
| Francis of Assisi, early sources | Public-domain translation to check | Francis |
| Fourth Lateran Council canons | Latin or public-domain translation to check | 1215 |

## Modern books (to choose; owner needs library copies)

- Christopher Tyerman, *God's War* (the Crusades)
- R. I. Moore, *The First European Revolution, c. 970 to 1215* (framework)
- Giles Constable, *The Reformation of the Twelfth Century* (for the reform movements)
- Jonathan Riley-Smith, *The First Crusade and the Idea of Crusading* (for Clermont)

Recommendation: Moore, Tyerman, Constable. All details to verify.

## Process and site work

Same as the earlier eras: choose editions and record licences first; check each citation as written with `scripts/cite.py`;
keep the ledger as we go (`docs/REVIEW-reform-and-crusade.md`); set `reviewStatus` from the first commit.

Site: the homepage timeline scales by era length, so the seventh era (161 years) will be narrower than the sixth. No code
change is needed.

## Order of work

1. Owner confirms the start (1054) and the end (1215).
2. Choose editions and record licences; add the sources to `SOURCES.md`.
3. Draft the page with the ledger, checking citations as written.
4. Add the maps and build; check the homepage and search.
5. Open the PR; create the scholarly-claims and specialist-read issues.
