# Tiles

The homepage's last row: ways to join, as small linked tiles beside a display heading.

## Use
- `ns-join`: the `h2` (Barlow Condensed 800) and `ns-tiles`, a grid of `ns-tile`s (180px at least, 12px apart): a title in Barlow Condensed with ↗, one line in `--ns-muted`.
- `ns-tile--key` (an `--ns-text` border) marks the main one, staking.

## Markup
```html
<div class="ns-tiles">
        <a class="ns-tile" href="https://x.com/Neta_DAO" target="_blank" rel="noopener"><b>Follow on X ↗</b><span>News and announcements from Neta DAO.</span></a>
        <a class="ns-tile ns-tile--key" href="https://daodao.zone/dao/juno1c5v6jkmre5xa9vf9aas6yxewc7aqmjy0rlkkyk4d88pnwuhclyhsrhhns6" target="_blank" rel="noopener"><b>Stake $NETA ↗</b><span>Governance rights only, no yield. 91-day unbonding.</span></a>
        <a class="ns-tile" href="https://discord.com/invite/gvjC86WXC2" target="_blank" rel="noopener"><b>Weekly Congress ↗</b><span>Saturdays at 15:00 UTC, on Discord. Open to all.</span></a>
      </div>
```
