# Plan: The Eighth Era (AD 1215 to 1417)

> Drafted 2026-11-12 as the planning document for the eighth era, after the seventh era (AD 1054 to 1215). Planning only.
> Every date, passage reference and book detail is from the drafter's general knowledge and is **U** (unverified) until
> checked, unless marked **F** (read in the full text of a named public-domain edition).

Proposed slug: `friars-to-constance` (file `src/content/eras/friars-to-constance.md`, `order: 8`). Title is a suggestion.

## Why this boundary

The seventh era ends at the Fourth Lateran Council (1215). The eighth era covers the high medieval church at its height
and then its crisis: the friars and the universities, the papacy's power and its move to Avignon, the Black Death, the
Great Western Schism, and the first major challenges from Wycliffe and Hus. It ends at the Council of Constance (1414 to
1418), which ended the schism by deposing or accepting the resignation of rival popes and elected Martin V in 1417. The
council also condemned Jan Hus, who was burned in 1415. Ending on Constance sets up the Reformation as the next era.

## Decisions (owner, to confirm)

1. **Start: AD 1215** (Fourth Lateran Council), following the seventh era.
2. **End: AD 1417** (election of Martin V, end of the Great Western Schism). The Council of Constance itself ran 1414 to
   1418. Alternative: end at 1415 (Hus's execution) or at 1378 (the schism's start). Owner to choose.
3. **East is in scope in a limited way**: the Latin Empire's end in 1261, the Byzantine recovery, and the Councils of
   Lyons (1274) and Florence (1439, just after this era) as the attempts at reunion. Keep the Eastern material to a few rows.

## Notable events (about 14 to 16, tagged East, West or Both)

| Date | Region | Event | Main source (candidate) |
| --- | --- | --- | --- |
| 1215 | Both | Fourth Lateran Council (start of era; a frame here) | U |
| 1216 | West | Dominic and the Dominicans approved | U |
| 1224 | West | Franciscans spread; Francis's stigmata (1224) | U |
| 1225 to 1274 | West | Thomas Aquinas; the *Summa Theologiae* (unfinished at his death) | U |
| 1229 to 1231 | West | University of Paris disputes; Gregory IX and the inquisition | U |
| 1261 | East | Michael VIII retakes Constantinople; the Byzantine restoration | U |
| 1274 | Both | Second Council of Lyons; attempted reunion of East and West | U |
| 1294 to 1303 | West | Boniface VIII; *Unam sanctam* (1302) and the clash with Philip IV | U |
| 1309 to 1377 | West | Papacy at Avignon | U |
| 1347 to 1351 | West | Black Death | U |
| 1378 to 1417 | West | Great Western Schism: rival popes in Rome and Avignon | U |
| c. 1377 to 1384 | West | John Wycliffe's writings and the Lollards | U |
| 1380s | East | Ottoman advance into the Balkans; the Battle of Kosovo (1389) | U |
| 1414 to 1418 | West | Council of Constance | U |
| 1415 | West | Jan Hus burned at Constance | U |
| 1417 | West | Election of Martin V; end of the schism | U |

## Candidate people (about 10)

Dominic, Francis of Assisi (from era 7, a return visit), Thomas Aquinas, Boniface VIII, Philip IV of France, Clement V,
Petrarch (or leave out), John Wycliffe, Jan Hus, Martin V, Catherine of Siena. Possible: Meister Eckhart, Julian of
Norwich, John Hus's teacher Jerome of Prague.

## Maps

| Map | Content | Status |
| --- | --- | --- |
| 1. Western Christendom and the schism (c. 1400) | Rome, Avignon, Paris, Oxford, Prague, Constance | Proposed |
| 2. The Latin East and the Ottoman advance (c. 1350) | Constantinople, Nicaea, Kosovo, Lyons | Optional |

Places to add to `scripts/maps/maps.config.json`: Avignon, Oxford, Prague, Constance, Lyons, Kosovo. Check the relief crop
(5°E to 45°E): Oxford and Prague may fall outside it.

## Sources to choose (expected public domain; licences to record)

| Source | Candidate edition | Used for |
| --- | --- | --- |
| Aquinas, *Summa Theologiae* | Fathers of the English Dominican Province (1911), public domain | Aquinas |
| Boniface VIII, *Unam sanctam* | Public-domain translation in a 1900s collection, to check | 1302 |
| Boccaccio, *Decameron*, introduction | Public-domain translation to check | Black Death |
| Wycliffe, tracts | Public-domain edition to check; licence check needed | Wycliffe |
| Hus, *De ecclesia* or letters | Public-domain translation to check | Hus |
| Decrees of Constance (*Haec sancta*) | Latin or public-domain translation, to check | 1415 |

## Modern books (to choose; owner needs library copies)

- Joseph Strayer, *The Reign of Philip the Fair* (for Boniface and Avignon)
- Brian Tierney, *The Crisis of Church and State, 1050 to 1300* (framework)
- Eamon Duffy, *Saints and Sinners* or Norman Cantor, *In the Wake of the Plague* (for the Black Death)
- A Constance-specific study (candidates to check: Brian Pullan, Joseph Gill) before drafting

Recommendation: Tierney, Strayer, Cantor, plus a Constance study once chosen. All details to verify.

## Process and site work

Same as the earlier eras: choose editions and record licences first; check each citation as written with `scripts/cite.py`;
keep the ledger as we go (`docs/REVIEW-friars-to-constance.md`); set `reviewStatus` from the first commit.

Site: the homepage timeline scales by era length, so the eighth era (202 years) will sit between the seventh and the
future Reformation era. No code change is needed.

## Order of work

1. Owner confirms the start (1215) and the end (1417).
2. Choose editions and record licences; add the sources to `SOURCES.md`.
3. Draft the page with the ledger, checking citations as written.
4. Add the maps and build; check the homepage and search.
5. Open the PR; create the scholarly-claims and specialist-read issues.
