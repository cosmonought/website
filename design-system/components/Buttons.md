# Buttons

Pill buttons and mono links.

## Variants
- `ns-btn`: a 1px `--ns-text` outline pill, mono capitals (13px). Hover fills `--ns-raised`.
- `ns-btn--solid`: `--ns-text` fill, black label; the page's one main action. Hover turns it `--ns-cyan`.
- `ns-btn--sm`: a smaller pill for tight places.
- `ns-link`: a mono capitals text link (12px), cyan on hover, for "→" and "↗" links in panels and lists (`ns-linklist` stacks them).
- Group buttons in `ns-actions` (wraps, 12px gaps); the solid one first.

## Markup
```html
<p class="ns-actions"><a class="ns-btn ns-btn--solid" href="about.html">Our mission</a><a class="ns-btn" href="https://github.com/netadao/organizational-docs" target="_blank" rel="noopener">The Constitution ↗</a></p>
<a class="ns-link" href="about.html">DAO structure →</a>
```
