# Cards

The family's initiatives on the homepage: the Academy, Fork and Play, each a card that is one link.

## Use
- `ns-cards`: a grid of `ns-card`s (300px at least, 16px apart). A card: `--ns-band`, 1px `--ns-line`, 6px radius, at least 300px tall; its border strengthens on hover.
- `ns-card__mark`: the initiative's own mark. The Academy's word in Sofia Sans Extra Condensed (`ns-liquid`) fills with its pigment film on hover (`data-film`; the film loads on the first hover). Fork's cut mark (`ns-fork`) cuts on hover: the lower half slips and the slash draws, pink to blue (`#C9338A` to `#5B8EF0`), as on the Academy and on Fork. Play, before it opens, is a dashed `ns-tbd` box: its address and "Name and wordmark to come"; the card is not a link until it opens.
- `ns-card__state`: what is happening, in mono: `--now` (pink, "● Now · Sex, and/or Love"), `--ahead` (cyan).
- `ns-card__body` in `--ns-soft`; `ns-card__foot` names the site (↗).
- Each card's link text must read as a sentence: give the card a visually hidden name ("Neta DAO Academy.") before its body.

## Markup
```html
<div class="ns-cards">
      <a class="ns-card" href="https://academy.netadao.org" data-film="images/academy-film.webp">
        <span class="ns-card__mark"><span class="ns-liquid"><span>Academy</span><span class="ns-liquid__film" aria-hidden="true">Academy</span></span></span>
        <span class="ns-card__state ns-card__state--now">● Now · Sex, and/or Love</span>
        <span class="ns-card__body"><span class="ns-visually-hidden">Neta DAO Academy. </span>Free public seminars on the Interchain as political and philosophical terrain.</span>
        <span class="ns-card__foot">academy.netadao.org ↗</span>
      </a>
      <a class="ns-card" href="https://fork.netadao.org">
        <span class="ns-card__mark"><svg class="ns-fork" viewBox="0 25 240 65" aria-hidden="true" focusable="false"><defs><linearGradient id="ns-fork-slash" x1="0" x2="1" y1="0" y2="0"><stop offset="0" stop-color="#C9338A"/><stop offset="1" stop-color="#5B8EF0"/></linearGradient></defs><path class="ns-fork__slash" stroke="url(#ns-fork-slash)" d="M0 58.5 240 43.5"/><path fill="currentColor" d="M111.7 50.02 75.13 52.3V26.46Q75.13 25.87 75.46 25.54Q75.8 25.2 76.39 25.2H95.29Q100.33 25.2 104.23 27.59Q108.14 29.99 110.32 34.23Q112.51 38.47 112.51 43.93Q112.51 47.22 111.7 50.02ZM73.26 52.42 57.47 53.41V41.83Q57.47 40.07 56.72 39.06Q55.96 38.05 54.62 38.05Q53.27 38.05 52.52 39.06Q51.76 40.07 51.76 41.83V53.76L35.97 54.75V42.5Q35.97 34.27 41.05 29.4Q46.13 24.53 54.62 24.53Q63.1 24.53 68.18 29.4Q73.26 34.27 73.26 42.5V52.42ZM34.52 38.72H18.48Q17.98 38.72 17.98 39.23V47.29Q17.98 47.8 18.48 47.8H26.8Q27.38 47.8 27.72 48.13Q28.06 48.47 28.06 49.06V55.25L2.18 56.86V26.46Q2.18 25.87 2.52 25.54Q2.86 25.2 3.44 25.2H34.52Q35.11 25.2 35.45 25.54Q35.78 25.87 35.78 26.46V37.46Q35.78 38.05 35.45 38.39Q35.11 38.72 34.52 38.72ZM143.93 48 114.29 49.86V26.46Q114.29 25.87 114.62 25.54Q114.96 25.2 115.55 25.2H128.82Q129.41 25.2 129.74 25.54Q130.08 25.87 130.08 26.46V43.09Q130.08 43.43 130.29 43.47Q130.5 43.51 130.67 43.18L137.72 26.21Q138.14 25.2 139.24 25.2H153.1Q153.77 25.2 154.1 25.62Q154.44 26.04 154.1 26.71L143.93 48ZM91.42 38.72Q90.92 38.72 90.92 39.23V48.89Q90.92 49.39 91.42 49.39H92.52Q94.36 49.39 95.54 48.01Q96.72 46.62 96.72 44.1Q96.72 41.5 95.58 40.11Q94.45 38.72 92.52 38.72Z"/><path class="ns-fork__bottom" fill="currentColor" d="M120.29 87.74V52.86L150.91 50.94L148.26 56.49Q148.18 56.83 148.26 57.16L160.44 87.57Q160.52 87.82 160.52 88.16Q160.52 89 159.43 89H145.49Q144.4 89 143.98 87.99L137.51 70.77Q137.42 70.35 137.21 70.35Q137 70.35 136.84 70.77L136.16 72.45Q136.08 72.62 136.08 73.12V87.74Q136.08 88.33 135.74 88.66Q135.41 89 134.82 89H121.55Q120.96 89 120.62 88.66Q120.29 88.33 120.29 87.74ZM102.72 87.91 97.59 66.82Q97.42 66.4 97.26 66.4Q96.92 66.4 96.92 66.91V87.74Q96.92 88.33 96.58 88.66Q96.25 89 95.66 89H82.39Q81.8 89 81.46 88.66Q81.13 88.33 81.13 87.74V55.3L97.09 54.31Q97.22 54.39 97.42 54.39H98.52Q99.33 54.39 100.01 54.12L118.17 52.99Q117.77 55.24 116.91 57.21Q115.32 60.86 112.29 63.13Q111.96 63.38 112.04 63.8L118.84 87.57Q118.93 87.74 118.93 87.99Q118.93 89 117.75 89H104.06Q102.97 89 102.72 87.91ZM41.97 71.7V57.75L57.76 56.76V72.37Q57.76 74.13 58.52 75.14Q59.27 76.15 60.62 76.15Q61.96 76.15 62.72 75.14Q63.47 74.13 63.47 72.37V56.41L79.26 55.42V71.7Q79.26 79.93 74.18 84.8Q69.1 89.67 60.62 89.67Q52.13 89.67 47.05 84.8Q41.97 79.93 41.97 71.7ZM34.06 58.25V65.06Q34.06 65.65 33.72 65.98Q33.38 66.32 32.8 66.32H24.48Q23.98 66.32 23.98 66.82V87.74Q23.98 88.33 23.64 88.66Q23.3 89 22.72 89H9.44Q8.86 89 8.52 88.66Q8.18 88.33 8.18 87.74V59.86L34.06 58.25Z"/></svg></span>
        <span class="ns-card__state">First call for papers · <span class="ns-nowrap">Winter 2026–27</span></span>
        <span class="ns-card__body"><span class="ns-visually-hidden">Fork. </span>The Journal of Interchain Theory and Politics: open access, peer reviewed, free to publish in.</span>
        <span class="ns-card__foot">fork.netadao.org ↗</span>
      </a>
      <div class="ns-card">
        <span class="ns-card__mark"><span class="ns-tbd"><b>play.netadao.org</b><span>Name and wordmark to come</span></span></span>
        <span class="ns-card__state ns-card__state--ahead">Opens Fall 2026</span>
        <span class="ns-card__body"><span class="ns-visually-hidden">play.netadao.org. </span>Games for the Interchain, beginning with Project 18XX.</span>
        <span class="ns-card__foot">play.netadao.org</span>
      </div>
    </div>
```
