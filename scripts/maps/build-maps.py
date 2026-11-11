#!/usr/bin/env python3
"""Build the era maps from Natural Earth data (public domain).

Usage:
  python3 scripts/maps/build-maps.py <natural-earth-vector checkout>

Reads:   scripts/maps/maps.config.json   (what each map shows)
         scripts/maps/relief-med.png     (optional shaded relief crop, see relief.yml)
         <ne>/geojson/ne_10m_land.geojson, ne_10m_rivers_lake_centerlines.geojson, ne_10m_lakes.geojson
Writes:  src/data/maps.json              (geometry and label positions for each map)
         public/maps/<id>-relief.jpg     (relief cropped for each map)

The projection is a simple equirectangular one, stretched east-west for the latitude of the
Mediterranean (about 38 degrees north). It is good enough for illustrations at this scale.
"""
import json
import math

from PIL import Image
import os
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
CONFIG = os.path.join(ROOT, 'scripts/maps/maps.config.json')
RELIEF = os.path.join(ROOT, 'scripts/maps/relief-med.png')
OUT_JSON = os.path.join(ROOT, 'src/data/maps.json')
OUT_DIR = os.path.join(ROOT, 'public/maps')

# Region covered by the relief crop and by the world coordinate system.
LON0, LON1, LAT0, LAT1 = 5.0, 45.0, 29.5, 46.5
K = 40.0  # units per degree of latitude
KX = K * math.cos(math.radians(38))
DISPLAY_WIDTH = 700.0  # typical rendered width in CSS pixels, used to size strokes


def proj(lon, lat):
    return ((lon - LON0) * KX, (LAT1 - lat) * K)


def clip_ring(ring, x0, y0, x1, y1):
    """Sutherland-Hodgman clip of a polygon ring (lon, lat) to a rectangle."""
    def clip(points, inside, intersect):
        out = []
        if not points:
            return out
        prev = points[-1]
        for cur in points:
            if inside(cur):
                if not inside(prev):
                    out.append(intersect(prev, cur))
                out.append(cur)
            elif inside(prev):
                out.append(intersect(prev, cur))
            prev = cur
        return out

    def ix(a, b, x):
        t = (x - a[0]) / (b[0] - a[0])
        return (x, a[1] + t * (b[1] - a[1]))

    def iy(a, b, y):
        t = (y - a[1]) / (b[1] - a[1])
        return (a[0] + t * (b[0] - a[0]), y)

    pts = ring
    pts = clip(pts, lambda p: p[0] >= x0, lambda a, b: ix(a, b, x0))
    pts = clip(pts, lambda p: p[0] <= x1, lambda a, b: ix(a, b, x1))
    pts = clip(pts, lambda p: p[1] >= y0, lambda a, b: iy(a, b, y0))
    pts = clip(pts, lambda p: p[1] <= y1, lambda a, b: iy(a, b, y1))
    return pts


def simplify(points, tol):
    """Ramer-Douglas-Peucker, iterative."""
    if len(points) < 3:
        return points
    keep = [False] * len(points)
    keep[0] = keep[-1] = True
    stack = [(0, len(points) - 1)]
    while stack:
        s, e = stack.pop()
        ax, ay = points[s]
        bx, by = points[e]
        dx, dy = bx - ax, by - ay
        norm = math.hypot(dx, dy) or 1e-12
        best, idx = 0.0, None
        for i in range(s + 1, e):
            px, py = points[i]
            d = abs(dy * px - dx * py + bx * ay - by * ax) / norm
            if d > best:
                best, idx = d, i
        if idx is not None and best > tol:
            keep[idx] = True
            stack.append((s, idx))
            stack.append((idx, e))
    return [p for p, k in zip(points, keep) if k]


def fmt(v):
    return ('%.1f' % v).rstrip('0').rstrip('.')


def ring_d(points, close=True):
    xy = [proj(*p) for p in points]
    d = 'M' + 'L'.join(fmt(x) + ' ' + fmt(y) for x, y in xy)
    return d + ('Z' if close else '')


def polygons(geom):
    if geom['type'] == 'Polygon':
        return [geom['coordinates']]
    if geom['type'] == 'MultiPolygon':
        return geom['coordinates']
    return []


def lines(geom):
    if geom['type'] == 'LineString':
        return [geom['coordinates']]
    if geom['type'] == 'MultiLineString':
        return geom['coordinates']
    return []


def bbox_hit(coords, b):
    xs = [c[0] for c in coords]
    ys = [c[1] for c in coords]
    return not (max(xs) < b[0] or min(xs) > b[2] or max(ys) < b[1] or min(ys) > b[3])


def area_path(features, b, tol, min_rank=None):
    parts = []
    for f in features:
        rank = f['properties'].get('scalerank', 0) or 0
        if min_rank is not None and rank > min_rank:
            continue
        for poly in polygons(f['geometry']):
            for ring in poly:
                if not bbox_hit(ring, b):
                    continue
                c = clip_ring([tuple(p[:2]) for p in ring], *b)
                if len(c) < 3:
                    continue
                # Simplify as two open halves so the closed ring does not collapse.
                mid = len(c) // 2
                s = simplify(c[: mid + 1], tol)[:-1] + simplify(c[mid:] + [c[0]], tol)[:-1]
                if len(s) >= 3:
                    parts.append(ring_d(s))
    return ''.join(parts)


def line_path(features, b, tol, max_rank):
    parts = []
    for f in features:
        rank = f['properties'].get('scalerank', 99) or 99
        if rank > max_rank:
            continue
        for line in lines(f['geometry']):
            seg = []
            for p in line:
                inside = b[0] <= p[0] <= b[2] and b[1] <= p[1] <= b[3]
                if inside:
                    seg.append(tuple(p[:2]))
                elif seg:
                    if len(seg) > 1:
                        parts.append(ring_d(simplify(seg, tol), close=False))
                    seg = []
            if len(seg) > 1:
                parts.append(ring_d(simplify(seg, tol), close=False))
    return ''.join(parts)


def main():
    if len(sys.argv) < 2:
        sys.exit(__doc__)
    ne = sys.argv[1]
    load = lambda n: json.load(open(os.path.join(ne, 'geojson', n)))['features']
    land = load('ne_10m_land.geojson')
    rivers = load('ne_10m_rivers_lake_centerlines.geojson')
    lakes = load('ne_10m_lakes.geojson')
    cfg = json.load(open(CONFIG))
    places = cfg['places']
    world_labels = cfg['labels']

    relief = None
    if os.path.exists(RELIEF):
        relief = Image.open(RELIEF)
    os.makedirs(OUT_DIR, exist_ok=True)

    out = {}
    for m in cfg['maps']:
        w, s, e, n = m['bbox']  # west, south, east, north
        margin = 0.3
        b = (w - margin, s - margin, e + margin, n + margin)
        x0, y0 = proj(w, n)
        x1, y1 = proj(e, s)
        vw, vh = x1 - x0, y1 - y0
        unit = vw / DISPLAY_WIDTH  # world units per CSS pixel at the typical width
        tol_deg = (e - w) / DISPLAY_WIDTH * 0.6

        def pct(lon, lat):
            x, y = proj(lon, lat)
            return round((x - x0) / vw * 100, 2), round((y - y0) / vh * 100, 2)

        def inside(lon, lat):
            return w <= lon <= e and s <= lat <= n

        route_pts = [places[p] for p in m.get('route', [])]
        route_d = ''
        if route_pts:
            xy = [proj(*p) for p in route_pts]
            route_d = 'M' + 'L'.join(fmt(x) + ' ' + fmt(y) for x, y in xy)

        stops = []
        for i, st in enumerate(m.get('stops', []), start=1):
            lon, lat = places[st['place']]
            xp, yp = pct(lon, lat)
            stops.append({
                'n': i, 'name': st.get('name', st['place']), 'ref': st.get('ref', ''),
                'note': st.get('note', ''), 'x': xp, 'y': yp, 'side': st.get('side', 'right'),
            })

        cities = []
        for c in m.get('cities', []):
            lon, lat = places[c['place']]
            xp, yp = pct(lon, lat)
            cities.append({'name': c.get('name', c['place']), 'x': xp, 'y': yp, 'side': c.get('side', 'right')})

        labels = []
        for lb in world_labels:
            if inside(lb['lon'], lb['lat']) and m['id'] not in lb.get('hideOn', []):
                xp, yp = pct(lb['lon'], lb['lat'])
                labels.append({'text': lb['text'], 'kind': lb['kind'], 'x': xp, 'y': yp})

        rel = None
        if relief is not None:
            rw, rh = relief.size
            ppd = rw / (LON1 - LON0)
            box = (int((w - LON0) * ppd), int((LAT1 - n) * ppd), int((e - LON0) * ppd), int((LAT1 - s) * ppd))
            crop = relief.crop(box).convert('L')
            # Make flat ground white, so the image only darkens slopes when multiplied over the land.
            hist = crop.histogram()
            total, acc, flat = sum(hist), 0, 200
            for level, count in enumerate(hist):
                acc += count
                if acc >= total * 0.5:
                    flat = max(level, 1)
                    break
            crop = crop.point(lambda v: min(255, round(v * 255 / flat)))
            target = 1400
            if crop.size[0] != target:
                crop = crop.resize((target, round(crop.size[1] * target / crop.size[0])), Image.LANCZOS)
            name = '%s-relief.jpg' % m['id']
            crop.convert('L').save(os.path.join(OUT_DIR, name), quality=72, optimize=True, progressive=True)
            rel = '/maps/' + name

        out[m['id']] = {
            'id': m['id'],
            'title': m['title'],
            'ref': m.get('ref', ''),
            'intro': m.get('intro', ''),
            'viewBox': [round(x0, 1), round(y0, 1), round(vw, 1), round(vh, 1)],
            'unit': round(unit, 4),
            'land': area_path(land, b, tol_deg),
            'lakes': area_path(lakes, b, tol_deg, min_rank=6),
            'rivers': line_path(rivers, b, tol_deg, max_rank=6),
            'relief': rel,
            'route': route_d,
            'stops': stops,
            'cities': cities,
            'labels': labels,
        }

    os.makedirs(os.path.dirname(OUT_JSON), exist_ok=True)
    with open(OUT_JSON, 'w') as f:
        json.dump(out, f, separators=(',', ':'))
    for k, v in out.items():
        print(k, 'land', len(v['land']), 'rivers', len(v['rivers']), 'lakes', len(v['lakes']), 'relief', v['relief'])


if __name__ == '__main__':
    main()
