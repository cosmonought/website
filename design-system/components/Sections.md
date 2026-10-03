# Sections

How a page is divided: wrapped bands of content, separated by rules or set on a darker band, each opening with a kicker or a section head.

## Use
- `ns-wrap`: centres content at `--ns-max` with `--ns-pad` at the sides.
- `ns-section`: 48–88px of vertical padding. `ns-section--rule` opens a section with a full-width 1px rule. `ns-band` sets a section on `--ns-band` between two rules (two bands in a row share one).
- `ns-section-head`: the section's kicker or `ns-h2` on the left, a link or legend on the right, 32px above the content.
- `ns-split`: two columns, 5:7, stacking under 900px.
- `ns-pagehead`: an inner page's opening: `ns-pagehead__copy` (kicker, `ns-h1 ns-h1--page` with a few words in `ns-grad`, `ns-lede`) and an optional `ns-pagehead__aside` (a figure such as `ns-est`, the founding year in giant display type).
- `ns-statement`: one sentence in display capitals, its turn in `ns-quiet` ("We are not a protocol, a fund, or a product. <span class="ns-quiet">We are an institution.</span>").

## Markup
```html
<section class="ns-wrap ns-pagehead" aria-labelledby="about-title">
    <div class="ns-pagehead__copy">
      <p class="ns-kicker">About Neta DAO</p>
      <h1 class="ns-h1 ns-h1--page" id="about-title">A nonprofit built on <span class="ns-grad">civic principle.</span></h1>
      <p class="ns-lede">We believe that public blockchains deserve permanent public institutions to serve them. Neta DAO exists to be one.</p>
    </div>
    <div class="ns-pagehead__aside ns-est" aria-label="Established 2022, on the Juno Network, in the Cosmos ecosystem">
      <span class="ns-label">Established</span>
      <b>2022</b>
      <span class="ns-label">Juno Network · Cosmos ecosystem</span>
    </div>
  </section>
```
