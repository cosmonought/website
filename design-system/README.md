# Night signal — Neta DAO's design system

netadao.org is Neta DAO's front door: a nonprofit, constitutional institution serving the Cosmos ecosystem and the Interchain. Its identity is Night signal: a black ground, hairline rules, condensed capitals, mono labels, and one signal colour, the pink-to-cyan of the Neta mark. Everything in it is in `css/night.css`; the behaviours (the Initiatives menu, the Academy card's film, the live proposals) are in `js/main.js`, and the shared radio bar is `radio/radio.js`.

The Academy (academy.netadao.org) and Fork (fork.netadao.org) have their own systems, in their own repositories. The three share the Neta DAO mark, IBM Plex Mono for labels, the Fork mark and the radio bar.

## Using this system

- Every page loads `css/night.css` (it imports its fonts from Google Fonts), then `js/main.js` at the end of `body`, and `radio/radio.js` (deferred) in the head. Build a page as the existing ones are: the header and footer (`components/Header.md`, `components/Footer.md`, the same on every page), a page head (`components/Sections.md`), then sections.
- Class names start `ns-`. A few older names (`container`, `section-title`, `btn`, `badge`, `proposal-*`) remain for the NetaDATA register and the live proposals; don't use them on new pages.
- One theme: Night. There is no light mode.

## Content fundamentals

- **Voice**: civic, plain and confident. An institution speaking, not a product selling. Real lines: "Public blockchains deserve public institutions." "We are not a protocol, a fund, or a product. We are an institution."
- **Names**: Neta DAO (DAO in capitals), $NETA, the Interchain, the Cosmos ecosystem, Juno, DAO DAO, Neta DAO Academy, Fork, Play. The Constitution with a capital C.
- **Times are UTC**: "Saturdays · 15:00 UTC". Dates: "5 Sep 2023" in compact facts, "Dec 2022 · A1" on the timeline.
- **Numbers and records**: proposals are numbered A1, A2, A3; addresses are written in full in mono (`ns-mono`) and may break anywhere.
- **Casing**: sentence case in the source; CSS sets the capitals of display type, labels and buttons.
- **Actions**: verb first ("Stake on DAO DAO ↗", "Our mission"); another site takes "↗", a page of this site "→".
- **Honesty about staking**: say that staking confers governance rights only, no yield, and give the unbonding period (91 days). Never invent figures: a value that isn't live or recorded is left out or shown as unknown.
- No emoji, no exclamation marks, no hype.

## Visual foundations

### Colour (tokens in `tokens.json`, variables in `night.css`)

- The ground is `--ns-bg` (black). Bands and panels are `--ns-band`; hover fills `--ns-raised`. Rules are 1px `--ns-line`; dashed and stronger borders `--ns-line-strong`.
- Text is `--ns-text`; reading copy `--ns-soft`; secondary `--ns-muted`; labels and metadata `--ns-dim` (5:1 on black, the lowest text may go).
- The signal: `--ns-pink` and `--ns-cyan`, and between them `--ns-grad`. The gradient fills a few words of a display line (`ns-grad`), the timeline's past, the legend. Pink means now (the Academy's current seminar, an executed proposal); cyan means ahead or interactive (hover, focus, what is planned, Play's opening). Never a gradient fill on a block.
- Focus: a 2px `--ns-cyan` ring, offset 3px.

### Type

- **Display: Barlow Condensed** 700–800, uppercase, tight leading (.86–.95): `ns-h1` (60–120px), `ns-h1--page` (56–104px), `ns-h2` (44–64px), `ns-statement` (40–76px), `ns-h3` (26px), card and panel titles (34px).
- **Wordmarks**: Sofia Sans Extra Condensed 800 sets the Academy's word on its card (`ns-liquid`). The Neta DAO wordmark beside the mark is Barlow Condensed 800.
- **Reading: Barlow** 400/500: `ns-lede` 19/1.6, `ns-prose` 17/1.65 (stops at 640px), body 16/1.6, panels 15/1.6.
- **Labels: IBM Plex Mono**, uppercase, 11–13px, tracked .1–.14em: `ns-kicker`, `ns-label`, navigation, buttons, `ns-mono` for addresses.

### Layout

- Content centres at `--ns-max` (1360px) with `--ns-pad` (16–40px) at the sides (`ns-wrap`).
- Sections pad 48–88px (`ns-section`), separated by full-width 1px rules (`ns-section--rule`) or set on a band (`ns-band`).
- Panels and cards are the only boxes: 1px `--ns-line`, 6px radius, `--ns-band` fill. Buttons and the header's pill are pills (999px). Nothing has a shadow.
- Two-column blocks use `ns-split` (5:7), stacking under 900px.

### Motion

- Little, and only on interaction: the Academy card's word fills with its pigment film on hover (the film loads on first hover); the Fork card's mark cuts on hover (the lower half slips, the pink-to-blue slash draws, as on the Academy and Fork); the Initiatives menu opens. The hero's Neta mark is a looping film. All of it stops under reduced motion.

### Imagery and marks

- The Neta DAO mark is supplied artwork: `images/neta-mark-night.png` in the header (28px), the looping film in the hero (`video/neta-mark-loop.*`, poster `images/neta-mark-poster.webp`) and the small loop in the footer (`images/neta-mark-loop-small.webp`). Never redraw, recolour or crop it.
- The Fork mark (cut, with its pink-to-blue slash `#C9338A` to `#5B8EF0`) and the Academy's word come from their own systems.
- No stock imagery. Diagrams (the governance structure) are drawn in SVG in the palette, inside `ns-figure`.

### Iconography

- None beyond text glyphs: "↗", "→", "●" for a live state, the menu's chevron, and the radio bar's play mark. The X and Discord marks appear on the Academy only.

## Components

The guidelines are in `components/`: Header, Buttons, Sections, Hero, Stats, Timeline, Cards, Tiles, Panels, Proposals, Footer, Radio.
