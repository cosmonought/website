# Neta DAO Website

The official website for [Neta DAO](https://netadao.org) — a nonprofit public institution for the Interchain.

## How to upload these files to GitHub

### First time setup

1. Go to your GitHub repository (e.g. `github.com/netadao/netadao.github.io`)
2. Click **"uploading an existing file"** or the **"Add file"** → **"Upload files"** button
3. Drag and drop ALL files and folders from this zip:
   - `index.html`
   - `about.html`
   - `governance.html`
   - `academy.html`
   - `CNAME`
   - `css/` folder (with `style.css` inside)
   - `js/` folder (with `main.js` inside)
4. Scroll down, write a commit message like `Initial site upload`, and click **Commit changes**

### Updating content later

To edit any page later:
1. Navigate to the file in GitHub (e.g. click `about.html`)
2. Click the pencil ✏️ icon to edit
3. Make your changes
4. Click **Commit changes**

Your site will update within ~60 seconds.

## File structure

```
netadao.org/
├── index.html          ← Home page
├── about.html          ← About Neta DAO
├── governance.html     ← Live on-chain proposals
├── academy.html        ← Neta DAO Academy
├── CNAME               ← Custom domain (do not delete)
├── css/
│   └── style.css       ← All site styles
└── js/
    └── main.js         ← Navigation, animations, DAO DAO API
```

## Live data

The governance page pulls proposals live from the DAO DAO indexer API at:
`https://indexer.daodao.zone/juno-1/contract/[DAO_ADDRESS]/...`

No API key required. If proposals aren't loading, the DAO DAO indexer may be temporarily unavailable — the page will show a fallback link to DAO DAO directly.

## Future subdomains

Planned future sites:
- `academy.netadao.org` → Neta DAO Academy (separate GitHub Pages site under NetaDAOAcademy org)
- `fork.netadao.org` → Fork: The Journal of Interchain Theory and Politics

Each subdomain will need its own CNAME DNS record in Squarespace pointing to the respective GitHub Pages URL, and its own `CNAME` file in the repository.
