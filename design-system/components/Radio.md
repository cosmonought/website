# Radio

Neta DAO Radio: one bar shared by netadao.org, the Academy and Fork, from `radio/radio.js` on this site.

## Use
- Every page of the three sites loads `https://netadao.org/radio/radio.js` (here: `/radio/radio.js`), deferred. It adds a 52px bar fixed to the bottom (`--ns-band`, a top rule, mono capitals) with play, the mark, the station's name and state, and a volume slider, and a spacer so it never covers the page's end.
- Playing keeps the station going between pages: family links open inside a frame above the bar while it plays; other links open a new tab.
- The Academy's intro lowers the radio under its own sound (`NetaDAORadio.duck`) and brings it back.
- Its styles are its own and Night signal's on every site; don't restyle it per site, and keep site CSS from sizing its image (a page rule like `img { height: auto }` must not outrank `.ndr-mark`).
