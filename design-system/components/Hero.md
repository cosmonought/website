# Hero

The homepage's opening: the headline beside the looping Neta mark.

## Use
- `ns-hero`: `ns-hero__copy` (kicker, `ns-h1` with its last words in `ns-grad`, `ns-lede`, `ns-actions`) and `ns-hero__mark`, the mark's looping film (WebM then MP4, poster `images/neta-mark-poster.webp`, muted, inline, `mix-blend-mode: screen`).
- The headline is the institution's thesis: "Public blockchains deserve public institutions."
- Under reduced motion the film is paused on its poster.

## Markup
```html
<section class="ns-wrap ns-hero" aria-labelledby="hero">
    <div class="ns-hero__copy">
      <p class="ns-kicker">Interchain · Nonprofit · On-chain</p>
      <h1 class="ns-h1" id="hero">Public blockchains deserve <span class="ns-grad">public institutions.</span></h1>
      <p class="ns-lede">Neta DAO is a nonprofit serving the Cosmos ecosystem and the Interchain: a constitutional institution that governs on-chain and teaches in public, for free.</p>
      <p class="ns-actions"><a class="ns-btn ns-btn--solid" href="about.html">Our mission</a><a class="ns-btn" href="https://github.com/netadao/organizational-docs" target="_blank" rel="noopener">The Constitution ↗</a></p>
    </div>
    <video class="ns-hero__mark hero-mark" autoplay muted loop playsinline preload="auto" poster="images/neta-mark-poster.webp" width="560" height="560" aria-label="The Neta DAO mark">
      <source src="video/neta-mark-loop.webm" type="video/webm">
      <source src="video/neta-mark-loop.mp4" type="video/mp4">
    </video>
  </section>
```
