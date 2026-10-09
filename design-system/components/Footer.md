# Footer

The footer every Neta DAO site shares (netadao.org, the Academy, Fork, Ludum), set here in Night: the looping Neta mark with the name, the DAO's address, the family's sites, X, Discord and GitHub as their own marks, and the copyright.

## Use
- `ns-footer` over a 1px rule; `ns-footer__brand` holds the small looping mark (`images/neta-mark-loop-small.webp`, 36px, lazy) and "Neta DAO", linking home.
- The DAO's address in full (`ns-footer__addr`, mono, breaks anywhere).
- `ns-footer__sites`: Academy, Fork, Ludum in mono capitals, `--ns-muted`, cyan on hover, closed by a hairline.
- `ns-footer__marks`: X (@Neta_DAO), Discord and GitHub as 20px glyphs in 32px targets, each with an `aria-label`; never as words.
- `ns-footer__print`: "© 2026 Neta DAO".
- One line on desktop; it wraps on narrower screens, and on phones the links take a row of their own.

## Markup
```html
<footer class="ns-footer">
  <div class="ns-wrap ns-footer__inner">
    <a class="ns-footer__brand" href="/"><img src="images/neta-mark-loop-small.webp" alt="" width="160" height="106" loading="lazy">Neta DAO</a>
    <span class="ns-footer__addr">juno1c5v6jkmre5xa9vf9aas6yxewc7aqmjy0rlkkyk4d88pnwuhclyhsrhhns6</span>
    <nav class="ns-footer__nav" aria-label="Neta DAO">
      <ul class="ns-footer__sites"><li><a href="https://academy.netadao.org">Academy</a></li><li><a href="https://fork.netadao.org">Fork</a></li><li><a href="https://ludum.netadao.org">Ludum</a></li></ul>
      <ul class="ns-footer__marks">
        <li><a class="ns-footer__icon" href="https://x.com/Neta_DAO" aria-label="Neta DAO on X"><svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117Z"/></svg></a></li>
        <li><a class="ns-footer__icon" href="https://discord.com/invite/gvjC86WXC2" aria-label="Neta DAO on Discord"><svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M20.317 4.37a19.79 19.79 0 0 0-4.885-1.515c-.074.127-.158.298-.217.432a18.27 18.27 0 0 0-5.487 0 4.64 4.64 0 0 0-.218-.432A19.736 19.736 0 0 0 4.625 4.37 20.02 20.02 0 0 0 1 18.855a19.9 19.9 0 0 0 5.993 3.03 14.62 14.62 0 0 0 1.226-1.994 12.7 12.7 0 0 1-1.93-.934c.162-.12.32-.246.474-.373a14.18 14.18 0 0 0 12.281 0c.155.127.313.252.475.373-.616.366-1.265.68-1.93.934a14.49 14.49 0 0 0 1.225 1.994 19.87 19.87 0 0 0 5.994-3.03A20.03 20.03 0 0 0 20.317 4.37ZM8.02 15.332c-1.17 0-2.128-1.065-2.128-2.366S6.85 10.6 8.02 10.6c1.18 0 2.147 1.075 2.128 2.366 0 1.301-.947 2.366-2.128 2.366Zm7.974 0c-1.17 0-2.128-1.065-2.128-2.366s.958-2.366 2.128-2.366c1.18 0 2.147 1.075 2.128 2.366 0 1.301-.947 2.366-2.128 2.366Z"/></svg></a></li>
        <li><a class="ns-footer__icon" href="https://github.com/netadao" target="_blank" rel="noopener" aria-label="Neta DAO on GitHub"><svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg></a></li>
      </ul>
    </nav>
    <p class="ns-footer__print">© 2026 Neta DAO</p>
  </div>
</footer>
```
