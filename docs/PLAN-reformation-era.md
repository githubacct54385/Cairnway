# Plan: The Reformation Era (AD 1517 to 1648)

> Drafted 2026-11-12 as the planning document for the Reformation era, after the eighth era (AD 1215 to 1417). Planning only.
> Every date, passage reference and book detail is from the drafter's general knowledge and is **U** (unverified) until
> checked, unless marked **F** (read in the full text of a named public-domain edition).

Proposed slug: `reformation` (file `src/content/eras/reformation.md`, `order: 10`). The ninth era, AD 1417 to 1517, is planned in docs/PLAN-ninth-era.md and sits before this one. Title is a suggestion.

This replaces the two shorter eras proposed earlier (Reformation to 1563, and Confessional Europe from 1563 to 1648).
The owner chose one era so that the Reformation reads as one story.

## Why this boundary

The eighth era closes with the Council of Constance (1417). This era opens with Luther's Ninety-Five Theses on 31 October
1517, which most readers take as the start of the Reformation. It closes with the Peace of Westphalia (1648), which ended
the Thirty Years' War and set out a settlement of religion in the German lands that lasted, in outline, into the modern
period. The era is 131 years long, close to the other eras (138 to 254 years).

Because the Reformation is the densest period on the site, the page is more demanding than the earlier ones. The
structure below is designed to keep it readable.

## Decisions (owner, to confirm)

1. **Start: AD 1517** (Ninety-Five Theses). Alternative: 1514 or 1516 for the first stirrings. Owner to choose.
2. **End: AD 1648** (Peace of Westphalia). Alternative: 1618 (the start of the Thirty Years' War), which would make the
   era shorter. Owner to choose.
3. **Scope: the whole of Europe**, with the Catholic response (the Council of Trent and the Jesuits) treated as part of
   the Reformation story, not as a separate era. East and West framing continues: the Orthodox churches get a short
   note on the Reformation's effect on Orthodox Christianity, and the Ottoman advance into Europe is a background event.
4. **Structure by theme, then by region.** See below.

## Structure of the page

The page is longer than the earlier eras, so it is divided into sections. Each section has its own short events list.
A reader can enter at any section.

1. **The reformers (1517 to 1530):** Luther, Zwingli, the early Swiss reform, and the Diet of Worms.
2. **Political reform (1520 to 1555):** the German princes, the Peasants' War, the Schmalkaldic War, and the Peace of
   Augsburg.
3. **England (1509 to 1603):** Henry VIII's break with Rome, the Edwardian and Marian reigns, and Elizabeth's settlement.
4. **The Catholic response (1540 to 1563):** the Jesuits, the Council of Trent, and the reform of the papacy.
5. **Calvin and the Reformed churches (1536 to 1600):** Geneva, Scotland, the Netherlands, and France.
6. **Wars of religion (1562 to 1598):** France, the Netherlands, and the Spanish Armada.
7. **The Thirty Years' War and Westphalia (1618 to 1648):** the war, its religious causes, and the settlement.

## Notable events (about 18 to 20, tagged East, West or Both)

| Date | Region | Event | Main source (candidate) |
| --- | --- | --- | --- |
| 1517 | West | Luther's Ninety-Five Theses | U (Luther's Works, Wace and Buchheim translation, to check) |
| 1519 | West | Zwingli begins preaching reform at Zurich | U |
| 1521 | West | Diet of Worms; Luther refuses to recant | U |
| 1524 to 1525 | West | German Peasants' War | U |
| 1529 | West | Marburg Colloquy fails to unite Luther and Zwingli | U |
| 1530 | West | Augsburg Confession presented to Charles V | U (Schaff, Creeds of Christendom, to check) |
| 1534 | West | Act of Supremacy: Henry VIII head of the English church | U |
| 1540 | West | Jesuits approved by Paul III | U |
| 1545 to 1563 | West | Council of Trent | U (Canons and Decrees, Schaff translation, to check) |
| 1546 to 1547 | West | Schmalkaldic War | U |
| 1549 to 1552 | West | Book of Common Prayer in England | U |
| 1555 | West | Peace of Augsburg: rulers choose the religion of their lands | U |
| 1559 | West | Elizabeth's Acts of Supremacy and Uniformity | U |
| 1560 | West | Scottish Reformation (Scots Confession) | U |
| 1562 to 1598 | West | French Wars of Religion; St Bartholomew's Day massacre (1572) | U |
| 1568 onwards | West | Dutch Revolt against Spain | U |
| 1588 | West | Spanish Armada | U |
| 1598 | West | Edict of Nantes grants Huguenots limited toleration | U |
| 1618 to 1648 | West | Thirty Years' War | U |
| 1648 | West | Peace of Westphalia | U (treaty texts, to check) |

East: a short note on the Orthodox response to Western reform, including Cyril Lucaris's Calvinist-leaning confession
(1629, to check). Ottoman Europe appears as background only.

## Candidate people (about 12)

Martin Luther, Ulrich Zwingli, John Calvin, Philip Melanchthon, Thomas Cranmer, Henry VIII, Ignatius of Loyola,
Charles V, Elizabeth I, William of Orange, Gustavus Adolphus (background), Ferdinand II (background). Possible: Erasmus
(the figure who stayed inside the church), Teresa of Ávila.

## Maps

| Map | Content | Status |
| --- | --- | --- |
| 1. Religion in Europe about 1555 | The German lands, Switzerland, England, France, Spain, the Netherlands, the Empire's borders | Proposed |
| 2. The Thirty Years' War (1618 to 1648) | Bohemia, Saxony, Sweden's campaigns, Westphalia | Proposed |
| 3. Geneva and the Reformed churches | Geneva, Zurich, Wittenberg, Scotland | Optional |

Places to add to `scripts/maps/maps.config.json`: Wittenberg, Worms, Augsburg, Trent, Geneva, Zurich, Westphalia (Münster
and Osnabrück). Check the relief crop (5°E to 45°E): England, Scotland and the Netherlands fall partly or wholly outside it.

## Sources to choose (expected public domain; licences to record)

| Source | Candidate edition | Used for |
| --- | --- | --- |
| Luther, Ninety-Five Theses; *Freedom of a Christian* | Wace and Buchheim translation (1883), CCEL or Gutenberg, to check | 1517, Luther's theology |
| Augsburg Confession | Schaff, *Creeds of Christendom*, vol. 3 (CCEL), to check | 1530 |
| Council of Trent, canons and decrees | Schaff, *Creeds of Christendom*, vol. 2 (CCEL), to check | 1545 to 1563 |
| Calvin, *Institutes* | Beveridge translation (1845), CCEL, to check | Calvin |
| Erasmus, *Praise of Folly* | Public-domain translation, to check | The figure who stayed inside the church |
| Peace of Westphalia | Public-domain treaty texts, to check | 1648 |
| Henry VIII, Act of Supremacy | Statute text, to check | 1534 |

## Modern books (to choose; owner needs library copies)

- Diarmaid MacCulloch, *The Reformation: Europe's House Divided, 1490 to 1700* (framework for the whole era)
- Peter Wilson, *Europe's Tragedy: A History of the Thirty Years War* (for 1618 to 1648)
- Carlos Eire, *Reformations: The Early Modern World, 1450 to 1650* (for the comparative view)

Recommendation: MacCulloch, Wilson, Eire. All details to verify.

## Process and site work

Same as the earlier eras: choose editions and record licences first; check each citation as written with `scripts/cite.py`;
keep the ledger as we go (`docs/REVIEW-reformation.md`); set `reviewStatus` from the first commit.

Site: the era is 131 years long, so it will sit between the eighth era and the next. The homepage timeline will show a
gap in era widths between the eighth era and the ninth (see the owner's note on boundaries). The page is long, so check
the section navigation and the event count at phone width.

**Fallback:** if the page becomes too long to check well, split it at 1563 (Trent) into two pages, with the second
covering 1563 to 1648. The owner should decide that before drafting if the first half is already unwieldy.

## Linear

- **E10** (plan and draft the Reformation era): this document and the page. Backlog until the owner confirms the boundaries.
- **E10b** and **E10c**: scholarly-claims check and specialist read-through, as for the earlier eras.

## Open point: era 9

The era before this one, from the Council of Constance to Luther (AD 1417 to 1517), is 100 years long, which is the
shortest era since the first. It is now planned as the ninth era (docs/PLAN-ninth-era.md). It covers the councils of Constance and Basel, Hus and the Hussite wars, Florence, and the
Renaissance papacy. Keeping it at 100 years is defensible because it ends on a clear event, but the owner should decide
whether to keep it as its own era (recommended in docs/PLAN-ninth-era.md) or fold it into the eighth.

## Order of work

1. Owner confirms the boundaries (1517 and 1648) and the era 9 question.
2. Choose editions and record licences; add the sources to `SOURCES.md`.
3. Draft the page with the ledger, checking citations as written.
4. Add the maps and build; check the homepage, the section navigation and search.
5. Open the PR; create the scholarly-claims and specialist-read issues.
