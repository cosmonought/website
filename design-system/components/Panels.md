# Panels

The inner pages' blocks: panels, facts on hairlines, notes and figures.

## Use
- `ns-panels`: a grid of `ns-panel`s (280px at least; `ns-panels--two`, 420px). A panel: `--ns-band`, 1px rule, 6px radius; `ns-panel__tag` (mono label, numbered where the panels are steps: "01 · Governance"), an `h3` in Barlow Condensed 800 34px, text at 15px in `--ns-soft`, and `ns-panel__foot` for its links or button.
- `ns-facts`: label over text on hairlines (Constitution provisions, validator details); `ns-facts--pairs` puts label and value on one line (parameters: Quorum 10%).
- `ns-note`: a bordered aside inside a panel, led by an `ns-label` ("Important").
- `ns-figure`: a bordered band for a diagram (the governance structure), its caption a kicker.
- `ns-mono` for addresses, written in full.

## Markup
```html
<article class="ns-panel">
        <p class="ns-panel__tag">01 · Governance</p>
        <h3>Stake $NETA</h3>
        <p>Staking $NETA in the DAO grants you voting rights on governance proposals. Every decision Neta DAO makes — from operations to constitutional changes — is decided by stakers.</p>
        <div class="ns-note"><span class="ns-label">Important</span><p>Staking with Neta DAO confers governance rights only — there are no yield rewards. Unbonding period: 91 days.</p></div>
        <div class="ns-panel__foot">
          <a class="ns-btn ns-btn--solid" href="https://daodao.zone/dao/juno1c5v6jkmre5xa9vf9aas6yxewc7aqmjy0rlkkyk4d88pnwuhclyhsrhhns6" target="_blank" rel="noopener">Stake on DAO DAO ↗</a>
          <p class="ns-mono">DAO address:<br>juno1c5v6jkmre5xa9vf9aas6yxewc7aqmjy0rlkkyk4d88pnwuhclyhsrhhns6</p>
        </div>
      </article>

<dl class="ns-facts ns-facts--pairs">
            <div><dt>Quorum</dt><dd>10%</dd></div>
            <div><dt>Threshold</dt><dd>Majority</dd></div>
            <div><dt>Voting period</dt><dd>5 days</dd></div>
            <div><dt>Unstaking</dt><dd>~91 days</dd></div>
            <div><dt>Revoting</dt><dd>Allowed</dd></div>
          </dl>
```
