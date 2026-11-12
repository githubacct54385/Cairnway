# Maps

The maps on era pages are built from [Natural Earth](https://www.naturalearthdata.com/) data, which is in the
public domain.

| File | What it is |
| --- | --- |
| `maps.config.json` | What each map shows: its area, places, route, numbered stops and labels. Edit this to change a map. |
| `build-maps.py` | Turns the config plus Natural Earth data into `src/data/maps.json` and `public/maps/*-relief.jpg`. |
| `relief-med.png` | Natural Earth shaded relief, cropped to the Mediterranean (5°E to 45°E, 29.5°N to 46.5°N). |

## Rebuilding

The maps use Natural Earth's 10m vector layers and its 10m shaded relief (`SR_HR.zip`, public domain). Download
the layers as GeoJSON (`ne_10m_land`, `ne_10m_rivers_lake_centerlines`, `ne_10m_lakes`, `ne_10m_admin_0_countries`)
into a folder with a `geojson/` subfolder, and unzip `SR_HR.zip`. Then:

```sh
python3 scripts/maps/build-maps.py <ne-folder> <ne-folder>/SR_HR/SR_HR.tif   # needs Python 3, Pillow
```

With the relief file, each map is cropped from the full-resolution relief at its own bounding box. Without it, the
Mediterranean crop in `relief-med.png` is used. Each map's east-west scale follows the latitude at its centre.

The Mediterranean relief crop was made by the `Relief crop` workflow (`.github/workflows/relief.yml`). With the full
relief file, the crop is no longer needed.

Place coordinates in `maps.config.json` are approximate and were entered by hand.
