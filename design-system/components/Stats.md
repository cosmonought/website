# Stats

The state of the DAO in four facts, label over value, on hairlines.

## Use
- `ns-stats`: a `dl` of four; terms in `ns-label` style, values in Barlow Condensed 700 26px. A value that is not current is `ns-quiet` ("Paused").
- Two columns under 900px; one fact to a row under 600px (label left, value right).
- Facts are exact and dated: never round, estimate or invent.

## Markup
```html
<dl class="ns-stats">
      <div><dt>Constitution</dt><dd>Ratified 5 Sep 2023</dd></div>
      <div><dt>Proposals</dt><dd>3 executed · A1–A3</dd></div>
      <div><dt>Congress</dt><dd>Saturdays · 15:00 UTC</dd></div>
      <div><dt>Validators</dt><dd class="ns-quiet">Paused</dd></div>
    </dl>
```
