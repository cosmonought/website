# Timeline

On the record, and ahead: the DAO's history as a line of dated steps, solid where done and dashed where planned.

## Use
- `ns-timeline` scrolls sideways on narrow screens (`tabindex="0"`, labelled); its track draws the done part in `--ns-grad` and the part ahead dashed in `--ns-cyan`, fading out.
- Each `li`: a dot (`ns-timeline__dot`, its colour stepping along the gradient through `--dot`), the when in mono (`ns-timeline__when`) and the what (`ns-timeline__what`). A done step's dot is filled with its colour; steps ahead are `is-ahead`: an open, dashed dot and a cyan when.
- The track takes the count from `--steps` (how many) and `--done` (how many are done), set on `ns-timeline__track`: the columns, the solid line up to the last done dot and the dashed line after it all follow, so a step is added in the markup alone. Each column is at least 130px; past that the row scrolls.
- Its section head carries the legend (`ns-legend`: Done, Ahead).

## Markup
```html
<div class="ns-timeline" tabindex="0" aria-label="Timeline">
        <div class="ns-timeline__track" style="--steps: 8; --done: 6">
          <span class="ns-timeline__done" aria-hidden="true"></span>
          <span class="ns-timeline__ahead" aria-hidden="true"></span>
          <ol>
          <li><span class="ns-timeline__dot" style="--dot: #F2559B"></span><span class="ns-timeline__when">Juno’s first proposals</span><span class="ns-timeline__what">$NETA is airdropped to the wallets that voted, for civic engagement, not economic activity.</span></li>
          <li><span class="ns-timeline__dot" style="--dot: #D967AC"></span><span class="ns-timeline__when">Dec 2022 · A1</span><span class="ns-timeline__what">DAO Incorporation passes, 98.8% yes.</span></li>
          <!-- … -->
          </ol>
        </div>
      </div>
```
