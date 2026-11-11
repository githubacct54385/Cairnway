# Maps

The maps on era pages are built from [Natural Earth](https://www.naturalearthdata.com/) data, which is in the
public domain.

| File | What it is |
| --- | --- |
| `maps.config.json` | What each map shows: its area, places, route, numbered stops and labels. Edit this to change a map. |
| `build-maps.py` | Turns the config plus Natural Earth data into `src/data/maps.json` and `public/maps/*-relief.jpg`. |
| `relief-med.png` | Natural Earth shaded relief, cropped to the Mediterranean (5°E to 45°E, 29.5°N to 46.5°N). |

## Rebuilding

```sh
git clone --depth 1 https://github.com/nvkelso/natural-earth-vector /tmp/ne
python3 scripts/maps/build-maps.py /tmp/ne      # needs Python 3 and Pillow
```

The relief crop was made by the `Relief crop` workflow (`.github/workflows/relief.yml`), which runs when the
`tools/relief` branch is pushed. You only need it again if the map area grows beyond the crop.

Place coordinates in `maps.config.json` are approximate and were entered by hand.
