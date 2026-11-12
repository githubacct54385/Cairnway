#!/usr/bin/env python3
"""Print a passage from a downloaded source text, so a citation can be checked quickly.

Usage:
  python3 scripts/cite.py TEXTS_DIR FILE "REGEX" [LINES_AFTER] [MATCH_NUMBER]

TEXTS_DIR is a folder holding the downloaded full texts (see docs/REVIEW-second-century.md for the list and where each
comes from). FILE is a file name in that folder, REGEX is searched case-insensitively, and the script prints the
matching line with LINES_AFTER lines of context (default 12). MATCH_NUMBER picks the nth match (default 1); with
"all" it lists every matching line number instead.
"""
import re
import sys
from pathlib import Path


def main(argv):
    if len(argv) < 4:
        print(__doc__)
        return 2
    folder, name, pattern = Path(argv[1]), argv[2], argv[3]
    after = int(argv[4]) if len(argv) > 4 else 12
    which = argv[5] if len(argv) > 5 else "1"
    lines = (folder / name).read_text(encoding="utf-8", errors="replace").splitlines()
    rx = re.compile(pattern, re.IGNORECASE)
    hits = [i for i, line in enumerate(lines) if rx.search(line)]
    if not hits:
        print(f"No match for {pattern!r} in {name}")
        return 1
    if which == "all":
        for i in hits:
            print(f"{i + 1}: {lines[i].strip()[:110]}")
        return 0
    n = int(which)
    if n > len(hits):
        print(f"Only {len(hits)} matches for {pattern!r}")
        return 1
    i = hits[n - 1]
    print(f"--- {name} line {i + 1} (match {n} of {len(hits)}) ---")
    print("\n".join(lines[i : i + after + 1]))
    return 0


if __name__ == "__main__":
    sys.exit(main(sys.argv))
