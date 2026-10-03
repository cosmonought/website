# Footer

The sign-off on every page: the looping Neta mark with the name, the DAO's address, and the family's sites.

## Use
- `ns-footer` over a 1px rule; `ns-footer__brand` holds the small looping mark (`images/neta-mark-loop-small.webp`, 36px, lazy) and "Neta DAO".
- The DAO's address in full (`ns-footer__addr`, mono, breaks anywhere).
- Links in mono capitals, `--ns-muted`, cyan on hover: Academy, Fork, Play, GitHub.

## Markup
```html
<footer class="ns-footer">
  <div class="ns-wrap ns-footer__inner">
    <a class="ns-footer__brand" href="/"><img src="images/neta-mark-loop-small.webp" alt="" width="160" height="106" loading="lazy">Neta DAO</a>
    <span class="ns-footer__addr">juno1c5v6jkmre5xa9vf9aas6yxewc7aqmjy0rlkkyk4d88pnwuhclyhsrhhns6</span>
    <nav aria-label="Footer"><a href="https://academy.netadao.org">Academy</a><a href="https://fork.netadao.org">Fork</a><a href="https://play.netadao.org">Play</a><a href="https://github.com/netadao" target="_blank" rel="noopener">GitHub</a></nav>
  </div>
</footer>
```
