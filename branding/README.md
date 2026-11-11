# Branding

The logo is a road leading to a cross on the horizon, in the site's brown (`#7a3b1e`) and cream (`#fbfaf7`).

| File | Use |
| --- | --- |
| `logo.svg` | Full mark, with road dashes. Used in the site header. |
| `icon.svg` | Simplified mark for small sizes. Source for the favicon. |
| `logo-512.png` | Square PNG for the GitHub organization or profile picture. |
| `social-preview.svg` / `.png` | 1280 x 640 image for the repository's social preview. |

`public/` holds the copies the site serves: `favicon.svg`, `favicon.ico`, `apple-touch-icon.png`, `logo.svg`, and `og.png`
(the share image used when a link is posted).

## Re-rendering the PNGs

The PNGs are rendered from the SVGs, for example with `rsvg-convert`:

```sh
rsvg-convert -w 512 -h 512 branding/logo.svg -o branding/logo-512.png
rsvg-convert -w 1280 -h 640 branding/social-preview.svg -o branding/social-preview.png
rsvg-convert -w 1200 -h 600 branding/social-preview.svg -o public/og.png
```

## Setting the GitHub social preview

GitHub only accepts this through the web page: Repository, then Settings, then General, then Social preview, then
Upload an image, and choose `branding/social-preview.png`.

The logo and wordmark are an original design for this project and are covered by the same CC BY 4.0 license as the text.
