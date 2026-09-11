# Ma-Pah — Grabber for Online Media

A personal command center for bookmarked media, links, and profiles — a Jarvis-style
dashboard with tiles, favorites, and per-device preferences.

**Version 1 (this repo): fully static, client-side only, deployable to GitHub Pages.**
Bookmarks and preferences are stored in your browser's `localStorage` — nothing is
sent to a server. No accounts, no OAuth, no downloads yet — those land in Version 2.

## What's in v1

- Consent/age gate (age confirmation, terms, POPIA-aligned privacy notice, local-storage consent) shown once
- A first-run tutorial (4 quick animated steps) that walks new users through the dashboard
- Dashboard grid of tiles: add a link, favorite it, filter by type
- Preferences drawer: default platform, SFW/NSFW mode, parental lock, privacy lock,
  notifications, recommendations — all saved locally
- Real About and Privacy pages describing exactly what this version does (and doesn't do)
- A reusable "signature" footer — the Jozi Nites calling card — drop it into any future app
- Jarvis/HUD-inspired dark UI

## What's deliberately NOT in v1

- No actual downloading of media from any platform
- No watermark handling of any kind
- No bulk/profile scraping
- No server, no database, no API keys

Version 2 will add an official-API-based importer (OAuth, pulling only *your own*
uploaded content from platforms that support it) and a format converter — both of
which need a small serverless backend, which is why v2 moves to Vercel.

## Uploading this project to GitHub (browser only, no desktop app or git needed)

1. Go to [github.com/new](https://github.com/new) and create a new repository named `ma-pah`
   (public, no README/gitignore template — this project already has those).
2. Open your new repo, click **Add file → Upload files**.
3. On your computer, open the unzipped `ma-pah` folder and drag in *everything except*
   `node_modules` (there shouldn't be one yet anyway) — including the hidden `.github`
   folder. Most browsers let you drag a whole folder structure in at once; if yours
   doesn't show `.github`, upload it separately using **Add file → Create new file**
   and typing the path `.github/workflows/deploy.yml`, then pasting its contents.
4. Scroll down and click **Commit changes**.
5. Go to **Settings → Pages** (left sidebar). Under **Build and deployment → Source**,
   choose **GitHub Actions**.
6. Go to the **Actions** tab — you should see the "Deploy to GitHub Pages" workflow
   running automatically. Wait for it to finish (green check).
7. Your app is live at `https://<your-username>.github.io/ma-pah/`.

Every time you want to update the app afterwards, edit files directly on github.com
(the pencil icon on any file) or use **Add file → Upload files** again to replace
them — each commit re-triggers the same automatic deploy.

### If you rename the repo

Update two places to match: `base: "/your-repo-name/"` in `vite.config.js`, and
`homepage` in `package.json`. Otherwise the deployed site's CSS/JS won't load correctly.

## Local development (optional — only if you ever use a computer with Node.js)

```bash
npm install
npm run dev
```

## Project structure

```
src/
  components/
    ConsentGate.jsx        age gate + consent checkboxes
    Dashboard.jsx           add-bar, filters, tile grid
    Tile.jsx                a single dashboard card
    PreferencesDrawer.jsx   settings panel
    Tutorial.jsx             first-run animated how-to
    About.jsx / Privacy.jsx  real project pages
    Signature.jsx            reusable Jozi Nites calling-card footer
    Modal.jsx                shared modal shell
  store/
    useStore.js             localStorage-backed state
  styles/
    index.css               design tokens, HUD background
```
