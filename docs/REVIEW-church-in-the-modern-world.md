# Review ledger: The Church in the Modern World (AD 1870 to 1945)

Every factual claim on the thirteenth-era page and its map, with how far it was checked. Statuses: **F** full text read,
**P** partly, **W** bare date or place from Wikidata only, **G** a general characterization in the page's own voice,
**X** removed or cut back. This is the page's first ledger. Before this check, nothing on the page had been checked:
every claim was from the drafter's general knowledge.

Page: `src/content/eras/church-in-the-modern-world.md`. Plan: `docs/PLAN-thirteenth-era.md`. Map: `europe-1914` in
`scripts/maps/maps.config.json`.

## AI source check (CHR-20, 2026-11-16)

Tracked in Linear as CHR-20. Claude Opus 5.5, an AI model by Anthropic, checked every citation, quotation, date, name
and figure against a source it could read, and cut back or removed what those sources did not support. All "not yet
checked" labels and the five review flags were removed. This is an AI check, not a review by a person (CHR-21).

Most 20th-century reference works are in copyright. Britannica's website blocks scripted reading, Wikipedia and
German Wikisource are not reachable from the checking environment, and Rerum Novarum on Wikisource is page images
only. vatican.va was added to the environment's allowed hosts for this check. Where no fuller source could be read, a
few bare dates and places were taken from Wikidata (status **W**); the owner may prefer to replace them.

### Sources read

| Source | Used for |
| --- | --- |
| Catholic Encyclopedia (1913), Wikisource raw text | "Pope Leo XIII" (born Carpineto 1810; elected 20 February 1878; Pius IX died 7 February 1878; Rerum Novarum 18 May 1891, quotation; died 20 July 1903); "Æterni Patris (Leo XIII)" (4 August 1879; "according to the mind of St. Thomas Aquinas"; prince of the Scholastics); "Pope Pius X" (Lamentabili, 65 propositions, most on Scripture; Pascendi 8 September 1907; Sacrorum Antistitum oath); "Modernism" (Loisy, Tyrrell; Loisy's "fairly definite group" quotation); "China" (Boxer rebellion 1900, Shang-tung to Chi-li, "Everywhere missionaries were murdered", legations besieged) |
| Encyclopaedia Britannica 1922, "Armenia" and "Russia" | "deportation coupled with extermination"; Mesopotamia and eastern Syria; "exterminatory measures ... redoubled at the beginning of April 1915"; Anglo-French declaration of 24 May 1915. Patriarchate restored by a national council "after an interval of 200 years"; Tikhon "denounced and anathematized the Communists"; the persecution quotation |
| Encyclopaedia Britannica 1926, "Benedict XV" | Born Pegli 1854; archbishop of Bologna; elected 3 September 1914 after 10 votes; "strict neutrality ... several attempts to effect peace"; France and Britain; died 22 January 1922 |
| Pascendi (Wikisource) | 8 September 1907; "synthesis of all heresies" |
| Harnack, *What Is Christianity?* (CCEL, 2nd ed. 1908) | Winter term 1899–1900; some six hundred students; shorthand report; copyright 1901; "essential"; "distinguish kernel and husk" |
| vatican.va | Lateran Pacts, Italian text (11 February 1929; Roman question "definitivamente ed irrevocabilmente composta"; Vatican City under the pope's sovereignty). Mit brennender Sorge (14 March 1937; the 1933 concordat proposed by the Reich; "despite many and grave misgivings"; "more or less official violation as a normal policy"; "exalts race ... idolatrous level"). Divino Afflante Spiritu (30 September 1943; §§ 16, 20 original languages and "methods of criticism"; §§ 35–38 "forms or kinds of speech") |
| Treaty of Lausanne index (Wikisource) | Convention on the exchange of Greek and Turkish populations, Lausanne, 30 January 1923 |
| Wikidata | Pius XI elected 6 February 1922, died 10 February 1939; Pius XII elected 2 March 1939, earlier nuncio to Germany and cardinal secretary of state; Bonhoeffer born 4 February 1906, died 9 April 1945 at Flossenbürg concentration camp, hanged, pastor, Lutheran, Confessing Church, resistance; Tikhon, Patriarch of Moscow; World Missionary Conference, 1910, Edinburgh; map coordinates |
| Open Library | Further reading titles and years |

### Row outcomes

| Claim | Status | Note |
| --- | --- | --- |
| Leo XIII, Aeterni Patris, Rerum Novarum | F | Rerum Novarum described from the Catholic Encyclopedia; its own text not read |
| Harnack's lectures | F | "von" dropped: the title page has "Adolf Harnack" |
| Loisy, Tyrrell, Lamentabili, Pascendi, the oath | F | The draft's "procedures against suspected modernists" replaced by the oath the source names |
| Boxer rebellion | F | "Chinese Christians" killed: not in the source; cut |
| Edinburgh 1910 | W | "Start of the modern ecumenical movement": no source; cut |
| Benedict XV | F | The August 1917 peace note could not be found on vatican.va; cut back to "several attempts to effect peace" |
| Christmas truce of 1914; chaplains on both sides | X | No source |
| Armenian genocide | F | The arrest of Armenian leaders in Constantinople and "a very large number" of deaths: not in the source; cut. The heading keeps the term genocide; the text quotes the 1922 Britannica |
| Debate on the churches and the Armenian genocide | X | No source |
| Russian council and Tikhon | F/W | Month of election (November 1917) not in any source read; cut |
| Soviet decree of January 1918 | X | No source |
| Lausanne | F | "Compulsory" and the faiths of those exchanged: the convention's own text was not read; cut |
| Lateran treaty | F | Translated from the Italian |
| Reich Concordat | F | From Pius XI's own account only; noted in the debate |
| Mit brennender Sorge | F | Added: the pope's protest of 1937 |
| Barmen Declaration; Karl Barth | X | No text of the declaration could be read; removed with Barth. A Protestant source for the 1930s is needed |
| Spanish Civil War | X | No source |
| Pius XII and the Holocaust | G | Named as contested; the arguments are not summarized because no source on the debate could be read |
| Divino Afflante Spiritu | F | |
| Bonhoeffer | W | |
| World Council of Churches, 1948 | X | Outside the era and unsourced |

### Map

`europe-1914` retitled "Europe, 1870 to 1945" and limited to places the page names: Edinburgh, Lausanne, Rome, Berlin,
Flossenbürg and Moscow, each within 2 km of Wikidata except Flossenbürg, moved to the camp's Wikidata position
(49.74 N, 12.36 E; it was about 8 km off). The page's map section (`ottoman-balkans-1878`, `europe-1933-1945`) was
dropped: the page names none of the 1878 places, and the 1933 map's places are now on the overview map. Both maps stay
in the config unused.

### For the owner

- The 1870 to 1945 span, which the draft marked "to be confirmed".
- A source for the Barmen Declaration and the Confessing Church, and a Protestant history of the period: the page now
  leans Catholic because the papal documents were the readable sources.
- A study of Pius XII and the Holocaust giving both sides, so that the debate can be summarized.
- An Armenian or Orthodox source for 1915 and for the Russian church (CHR-21).
- Whether Wikidata is acceptable for bare dates, or should be replaced.
