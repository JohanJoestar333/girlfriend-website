# 💚 Girlfriend Website

A private, bilingual (English / Portuguese) website built for two people: a
single-page app with a password gate, shared live data, photo memories, a
Photo Booth video call, a weekly bouquet, games, quizzes, music, a shared
calendar and more. It is plain HTML, CSS and JavaScript — **no build step**.

Almost everything you will personalize lives in one file: the `CONFIG` object
in [`js/data/config.js`](js/data/config.js).

---

## ✨ Features

| Tab / area | What's inside | Data |
|---|---|---|
| **Our Story** | Hero, relationship counter, reunion countdown, weather for both cities (current + 7-day forecast, local time, moon phase), "Things I Miss", growth notes, little things, and the **Today** widget (moods, calendar, day card, bouquet, quote, news) | Local + Firebase |
| **Our Album** | Static photo categories + live "Our Memories" uploads, lightbox | Photos → Cloudinary, metadata → Firebase |
| **Us** | Favorites, fun facts, "Our Firsts" timeline | Local |
| **Open When…** | Letters to open on different days / moods | Local |
| **Bucket List** | Shared to-do list, plus **Movie Nights**: To Watch / Watched lists, TMDB search with posters, and a 5-star rating from each of you | Firebase (+ TMDB) |
| **Quizzes** | Interactive quizzes about each other | Local |
| **Music** | Shared playlists (YouTube / SoundCloud) with a persistent **mini-player** that keeps playing while you browse | Firebase |
| **Bouquet** 💐 | Arrange a digital bouquet on a notebook page (see below) | Firebase |
| **Photo Booth** | Live two-camera video call, take a photo strip together, then style it in the strip editor | WebRTC (+ TURN) |
| **Calendar** | Shared events with daily / weekly / monthly / yearly repeats | Firebase |
| **Day Cards** | Short notes (optionally voice) that expire after 24 h unless saved; can be read aloud | Firebase |
| **Our Games** | Five card decks for couples | Local |
| **Personal area** | Private section with its own passwords (goals, notes) | Optional Firebase |

### 💐 Bouquet

Send each other flowers. Pick one of **5 wraps**, add any of **12 flowers and
3 bows**, then drag, resize, rotate and reorder them on a notebook page (there
is also "tuck behind wrap"), with an optional note. The bouquet:

- stays fresh for **one week**, then wilts and deletes itself — or is replaced
  the moment a new one is made (only one is live at a time);
- shows up in the **Today** widget on the home page, with a freshness badge;
- can be saved as a **PNG**, with or without the notebook page;
- syncs live through the `bouquets` Firestore collection.

Art lives in `assets/stickers/` (`flower-*`, `bouquet-wrap-*`, `*-bow`). To add
a flower, drop a transparent PNG there and add a line to `BOUQUET_FLOWERS` in
`js/app.js`.

### Extra touches

- **Password gate** on first visit (`js/gate.js`); the password is supplied at
  deploy time and only its hash is published.
- **Installable app (PWA)**: add it to your home screen or dock; it opens
  full-screen and the core site works offline.
- **"While you were away"** notifications for shared changes from the last 24 h,
  plus attention dots on tabs.
- **English ↔ Portuguese** toggle (remembered per device) and a **dark mode**.
- **Haptics**: subtle vibration feedback on phones (Android and iOS 17.4+),
  with an on/off switch in the footer.
- **Secret messages**: click the footer heart 5× or the header brand 9×.
- Optional Cloudflare Worker for cleaner world-news headlines.

---

## 📁 Project structure

```text
girlfriend-website/
├── index.html                 Page structure and tabs
├── manifest.json              PWA name, icons, colors
├── service-worker.js          PWA offline cache (must stay at the root)
│
├── css/
│   ├── style.css              Base design + components
│   ├── enhancements.css       Scroll panes, depth and motion polish
│   ├── photobooth-studio.css  Photo Booth strip editor
│   └── modern.css             Apple-style redesign — colour tokens live here
│
├── js/
│   ├── data/
│   │   ├── config.js          ⭐ CONFIG — names, dates, photos, keys (edit this)
│   │   ├── translations.js    English → Portuguese strings
│   │   ├── quotes.js          365 bundled daily quotes
│   │   ├── quizzes.js         Quiz questions
│   │   └── games.js           Game decks
│   ├── gate.js                Password lock screen
│   ├── app.js                 All site behaviour (start with its table of contents)
│   ├── enhancements.js        Scroll panes and visual polish
│   ├── photobooth-studio.js   Strip editor (stickers, text, filters, backdrop, export)
│   ├── haptics.js             Vibration feedback
│   └── pwa.js                 Service-worker registration + update banner
│
├── assets/
│   ├── photos/                Hero and static photos
│   ├── stickers/              Transparent PNGs: Photo Booth stickers + bouquet art
│   └── icons/                 PWA and Apple touch icons
│
├── docs/                      Setup guides (see below)
├── news-backend/              Optional Cloudflare Worker for news
└── .github/workflows/         GitHub Actions deploy
```

Scripts are loaded in the order listed in `index.html`: data files first, then
`app.js`, then the add-ons. See [`docs/architecture.md`](docs/architecture.md).

---

## 🚀 Quick start (local)

The site needs a static file server (it does not work from `file://`):

```bash
python3 -m http.server 8000     # from the project root
# then open http://localhost:8000
```

Or use the **Live Server** extension in VS Code. Locally the gate password and
the service keys are placeholders, so shared features run in local-only mode.
Edit `js/data/config.js` and refresh to see your changes.

---

## 🔐 Password gate

The real password is **not** in the source. The deploy hashes the
`GATE_PASSWORD` secret (SHA-256) and puts only the hash in the published
`gate.js`.

1. GitHub repo → **Settings → Secrets and variables → Actions**.
2. Create or edit the repository secret `GATE_PASSWORD`.
3. Push to `main` or re-run the deploy workflow.

Unlock state is remembered per browser; use a private window to see the gate
again. This is a client-side gate for keeping casual visitors out, not real
authentication — see [`SECURITY.md`](SECURITY.md).

---

## ☁️ Live sync and other services

| Service | Used for | Guide |
|---|---|---|
| Firebase (Firestore) | All shared features | [`docs/firebase-setup.md`](docs/firebase-setup.md) |
| Cloudinary | Memory photo uploads | [`docs/cloudinary-setup.md`](docs/cloudinary-setup.md) |
| Metered TURN | Photo Booth across different networks | [`docs/turn-setup.md`](docs/turn-setup.md) |
| TMDB | Movie search (optional) | `CONFIG.tmdb` comment in `config.js` |
| Cloudflare Worker | News headlines (optional) | [`news-backend/README.md`](news-backend/README.md) |

All of them are free tiers. Without Firebase the site still works, but each
device only keeps its own data.

---

## 🌐 Deployment

`.github/workflows/deploy.yml` publishes to **GitHub Pages** on every push to
`main`. It:

1. copies only the site files (`index.html`, manifest, service worker, `css/`,
   `js/`, `assets/`) into a staging folder — docs and backend code are not
   published;
2. injects the `__PLACEHOLDER__` values from repository secrets. `TP_PASSWORD`
   (the personal-area password) is **required** — the deploy fails without it.
   Everything else is optional: a missing secret only switches that feature
   off, with a warning in the log;
3. hashes `GATE_PASSWORD` into `gate.js`;
4. stamps the service-worker cache with the commit id, so installed copies of
   the app always update — **you no longer bump `CACHE_VERSION` by hand**.

Repository secrets: `GATE_PASSWORD` and `TP_PASSWORD` (required);
`TP_NOTES_PASSWORD` (notes password; defaults to `TP_PASSWORD`),
`TP_OLD_PASSWORD` (joke password; off if unset); `FIREBASE_API_KEY`, `FIREBASE_AUTH_DOMAIN`,
`FIREBASE_PROJECT_ID`, `FIREBASE_STORAGE_BUCKET`,
`FIREBASE_MESSAGING_SENDER_ID`, `FIREBASE_APP_ID`, `CLOUDINARY_CLOUD_NAME`,
`CLOUDINARY_UPLOAD_PRESET`, `TMDB_ACCESS_TOKEN`, `METERED_TURN_DOMAIN`,
`METERED_TURN_API_KEY` (optional).

---

## 🎞️ Photo Booth strip editor

After the photos are taken, the strip opens in an editor
(`js/photobooth-studio.js`):

- **Tabs:** Frame · Stickers · Text · Dot art · Filters · Spot · Backdrop
- **Toolbar:** Undo/Redo, Zoom, Eye line, Gutters, Cut strip, Reset
- **Controls:** drag to move, corner to resize, top handle to rotate, arrow
  keys to nudge, `Delete` to remove, `Ctrl/Cmd + Z` to undo, pinch on touch
- **Export:** PNG (1080×1920 with a backdrop)

**Your own stickers:** save transparent PNGs in `assets/stickers/`, then list
them in `CONFIG.photoBoothStickers`:

```js
photoBoothStickers: ["assets/stickers/heart.png", "assets/stickers/bow.png"],
```

They appear under **Stickers → My stickers ⭐** on every device. Only use
images you made or have the right to use.

---

## 🛠️ Common customizations

| To change | Edit |
|---|---|
| Names, dates, cities | `CONFIG.names`, `relationshipStart`, `reunionDate`, `myLocation`, `herLocation` |
| Hero text and photo | `CONFIG.hero`, `CONFIG.photos.hero` |
| Album | `CONFIG.photos` + `CONFIG.album` + files in `assets/photos/` |
| Open When letters | `CONFIG.openWhen` |
| Secret messages | `secretMessage`, `brandSecret` |
| Starting bucket-list items | `CONFIG.bucketList` |
| Playlists | `CONFIG.playlists` |
| Portuguese text | `js/data/translations.js` |
| Colors, fonts | Section 1 of `css/modern.css` |
| Gate password | GitHub secret `GATE_PASSWORD` |

For new tabs, new Firestore collections or a design overhaul, read the
[tutorial](docs/tutorial.md).

---

## 📖 Documentation map

| File | Purpose |
|---|---|
| [`docs/tutorial.md`](docs/tutorial.md) | Beginner guide — start here |
| [`docs/architecture.md`](docs/architecture.md) | How the code is organized |
| [`docs/firebase-setup.md`](docs/firebase-setup.md) | Firebase / Firestore setup and rules |
| [`docs/cloudinary-setup.md`](docs/cloudinary-setup.md) | Photo upload setup |
| [`docs/turn-setup.md`](docs/turn-setup.md) | Photo Booth across networks |
| [`news-backend/README.md`](news-backend/README.md) | News Cloudflare Worker |
| [`SECURITY.md`](SECURITY.md) | Security model and trade-offs |

---

Made with ♥ for someone special.
