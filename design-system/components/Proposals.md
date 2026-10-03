# Proposals

The governance page's live list, written by `js/main.js` from the DAO DAO indexer.

## Use
- Each proposal is a link (`proposal-item`): its number in mono (A1, A2…), the title in Barlow Condensed 800, a mono line of dates (UTC) and a status badge.
- Badges (`badge`, pill, mono): Executed in `--ns-pink`, Passed in `--ns-cyan`, Open in `--ns-text`, Failed in `--ns-dim`. The word is always there, so status never rests on colour alone.
- While loading, and if the indexer fails, `proposals-loading` says so and links to DAO DAO.
- These keep their older class names; don't reuse them elsewhere.
