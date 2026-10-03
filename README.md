# netadao.org

Neta DAO's website: static pages, no build step, served by GitHub Pages.

## Design system

The site's design system is Night signal: a black ground, hairline rules, condensed capitals, mono labels, and the pink-to-cyan of the Neta mark.

- `design-system/README.md`: the brand book (voice, colour, type, layout, motion, marks). Start here.
- `design-system/components/<Name>.md`: each part of the pages (header and Initiatives menu, sections, hero, stats, timeline, cards, tiles, panels, proposals, footer, the radio bar) with its markup.
- `design-system/tokens.json`: colours, type, spacing and radii, as `css/night.css` defines them.
- `css/night.css`: the stylesheet every page loads. `js/main.js`: the Initiatives menu, the Academy card's film, the live proposals. `radio/radio.js`: Neta DAO Radio, shared with academy.netadao.org and fork.netadao.org.

academy.netadao.org and fork.netadao.org keep their own design systems in their own repositories.

## Local preview

Run `python -m http.server 8791 --bind 127.0.0.1` in this folder, then open `http://127.0.0.1:8791`.
