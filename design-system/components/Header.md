# Header

The same bar on every page: the Neta DAO mark and name, the four sections, the Initiatives menu, and the DAO DAO pill.

## Use
- `ns-header` over a 1px `--ns-line` rule; inside, `ns-wrap ns-header__inner` lays out the brand left and `ns-nav` right, wrapping on phones.
- `ns-brand`: the mark (`images/neta-mark-night.png`, 28px) and "Neta DAO" in Barlow Condensed 800.
- `ns-nav`: About, Initiatives, Governance, NetaDATA, Get involved, in mono capitals; the current page gets `aria-current="page"` (an underline in `--ns-text`). The DAO DAO link is a pill (`ns-pill`) and takes ↗.
- **Initiatives** (`ns-menu`, `data-ns-menu`): a button that opens a list of the family's sites, each with its name in Barlow Condensed and one mono line: Academy (Free public seminars), Fork (The journal), and Play, listed but not linked until it opens (`ns-menu__soon`, its line in `--ns-cyan`). It opens on hover with a pointer, or with its button; Escape, a click outside or moving focus away closes it (`js/main.js`).
- Put the skip link (`ns-skip`, "Skip to content") before it.

## Markup
```html
<header class="ns-header">
  <div class="ns-wrap ns-header__inner">
    <a class="ns-brand" href="/"><img src="images/neta-mark-night.png" alt="" width="251" height="192"><span>Neta DAO</span></a>
    <nav class="ns-nav" aria-label="Main"><a href="about.html">About</a><div class="ns-menu" data-ns-menu><button class="ns-menu__toggle" type="button" aria-expanded="false" aria-controls="ns-initiatives">Initiatives<svg viewBox="0 0 12 12" aria-hidden="true"><path d="M2.5 4.5 6 8l3.5-3.5"/></svg></button><ul class="ns-menu__list" id="ns-initiatives"><li><a href="https://academy.netadao.org"><b>Academy</b><span>Free public seminars</span></a></li><li><a href="https://fork.netadao.org"><b>Fork</b><span>The journal</span></a></li><li><span class="ns-menu__soon" aria-disabled="true"><b>Play</b><span>Opens Fall 2026</span></span></li></ul></div><a href="governance.html">Governance</a><a href="netadata.html">NetaDATA</a><a href="getinvolved.html">Get involved</a><a class="ns-pill" href="https://daodao.zone/dao/juno1c5v6jkmre5xa9vf9aas6yxewc7aqmjy0rlkkyk4d88pnwuhclyhsrhhns6" target="_blank" rel="noopener">DAO DAO ↗</a></nav>
  </div>
</header>
```
