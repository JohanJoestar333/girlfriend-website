# 💚 Girlfriend Website

A private, bilingual (English / Portuguese) romantic website built for two people.  
It is a single-page experience with a password gate, shared live data, photo memories, Photo Booth video calls, countdown timers, weather with local time, games, quizzes, music, calendar repeats, and more.

This project is meant to be **personalized**. Almost everything you will ever change lives in one place: the `CONFIG` object inside `app.js`.

---

## ✨ Features

| Tab / Area          | What’s inside                                              | Data |
|---------------------|------------------------------------------------------------|------|
| **Our Story**       | Hero, relationship countdown, weather for both cities, “Things I Miss”, growth notes, little things, Today widget (news + quote + mood) | Mostly local + some Firebase |
| **Our Album**       | Static photo categories + live “Our Memories” uploads      | Photos → Cloudinary<br>Metadata → Firebase |
| **Us**              | Favorites, fun facts, firsts                               | Local |
| **Open When...**    | Special messages to open on different days/moods           | Local |
| **Bucket List**     | Shared to-do list both of you can edit                     | **Firebase** |
| **Quizzes**         | Interactive quizzes                                        | Local |
| **Music**           | Shared playlists (add / reorder songs)                     | **Firebase** |
| **Calendar**        | Shared events with daily / weekly / monthly / yearly repeats | **Firebase** |
| **Photobooth**      | Snap photos together remotely and download your split photostrip. | **Metered** |
| **Day Cards**       | Special day cards                                          | **Firebase** |
| **Our Games**       | Small games for the two of you                             | Local |
| **Personal area**   | Extra private section (extra password)                     | Optional Firebase |

### Extra touches
- Password gate on first visit (`gate.js`) — password supplied securely at deploy time via GitHub Actions
- “While you were away” change notifications for recent shared updates (24-hour window)
- Full English ↔ Portuguese toggle (choice is remembered)
- Attention dots on tabs when new shared content arrives
- Secret messages (click the footer heart 5× or the header brand 9×)
- Weather for both locations + each location’s local time + moon phase
- Countdown to the next reunion
- Optional Cloudflare Worker for cleaner world-news headlines

---

## 📁 Project structure

```
girlfriend-website/
├── index.html              # Page structure & tabs
├── style.css               # All design (colors, layout, animations)
├── app.js                  # CONFIG + all interactive logic  ← edit this most
├── gate.js                 # Password lock screen
├── photos/                 # Static images used by the site
├── news-backend/           # Optional Cloudflare Worker for news
├── .github/workflows/      # GitHub Actions deploy + secret injection
├── website_tutorial.md     # Full beginner-friendly guide
├── firebase_setup.md       # How to connect Firebase
├── memories_setup.md       # How to connect Cloudinary (photo uploads)
├── metered_turn_setup.md    # How to fix Photo Booth calls across networks
├── SECURITY.md             # Security model & intentional trade-offs
└── README.md               # This file
```

---

## 🚀 Quick start (local)

You only need a static file server (the site will not work correctly from `file://`).

```bash
# from the project root
python3 -m http.server 8000
# then open http://localhost:8000
```

Or use the **Live Server** extension in VS Code.

Most personalization is done by editing the big `CONFIG` object at the top of `app.js`.  
See **`website_tutorial.md`** for a complete walkthrough (names, dates, photos, messages, colors, etc.).

---

## 🔐 Password gate

The site starts behind a password gate. The **real password is not stored in the source files**. GitHub Actions injects only a SHA-256 hash into `gate.js` during deployment.

### Change the password

1. Open the GitHub repository.
2. Go to **Settings → Secrets and variables → Actions**.
3. Under **Repository secrets**, create or edit:
   - Name: `GATE_PASSWORD`
   - Value: your new password
4. Push to `main` or manually run the deployment workflow.

Do **not** put the real password in `gate.js`, `app.js`, `index.html`, or any committed file. The checked-in `gate.js` contains only the placeholder `__GATE_PASSWORD_HASH__`, which is replaced during deployment.

The unlock state is remembered locally in each browser. If you want the password screen to appear again on a device, clear the site’s local storage or use a private/incognito window.

> **Security note:** This is still a client-side access gate, not server-side authentication. It is designed to keep casual visitors out, not to protect sensitive data from someone deliberately inspecting or bypassing the site. See `SECURITY.md`.

---

## ☁️ Live sync (Firebase + Cloudinary)

Shared features (Bucket List, Music, Calendar, Day Cards, live photo memories) need a free Firebase project. Photo *files* themselves go to Cloudinary (free tier is more than enough).

1. Follow **`firebase_setup.md`** — create a Firebase project, enable Firestore, set security rules, and add the config.
2. Follow **`memories_setup.md`** — create a Cloudinary account and an unsigned upload preset.

When deploying with the included GitHub Action, put the Firebase and Cloudinary values in repository secrets so they stay out of the public source.

---

## 🔔 “While you were away” notifications

The site can show a catch-up notification when you return after shared content has changed. These notifications are separate from normal action toasts.

- Recent additions/edits can be reported when you come back.
- A change is eligible for a catch-up alert for **24 hours only**.
- After that window, the old change is ignored rather than appearing days later.
- The notification remains visible longer than a normal toast so it is easier to notice.
- The tracking is browser/device-local, while the shared content itself remains in Firebase.

This is intentionally a lightweight “while you were away” system, not a push-notification service.

---

## 📸 Photo Booth across different networks

The Photo Booth provides a live browser-to-browser video call. When both people are on the same wifi it can usually connect directly; across different networks (for example, wifi ↔ mobile data), a TURN relay may be needed. Follow **`metered_turn_setup.md`** to configure the optional Metered TURN relay for reliable cross-network calls.

---

## 📰 Optional news backend

The “Today → World news” widget works with public CORS proxies by default. For cleaner results you can deploy the small Cloudflare Worker in `news-backend/`:

```bash
cd news-backend
npm i -g wrangler   # once
wrangler login
wrangler deploy
```

Then put the worker URL into `CONFIG.newsBackendUrl` in `app.js`.  
Full instructions are in `news-backend/README.md`.

---

## 🌐 Deployment

The repository includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) that:

- Builds / prepares the static site
- Injects Firebase, Cloudinary, TMDB, Metered TURN, and password secrets at deploy time
- Hashes `GATE_PASSWORD` before putting the result into the published `gate.js`
- Publishes to **GitHub Pages**

After the first successful run, the site will be available at the usual `https://<user>.github.io/<repo>/` URL (or a custom domain if you configure one).

---

## 🛠️ Common customizations

| What you want to change          | Where to edit                          |
|----------------------------------|----------------------------------------|
| Names                            | `CONFIG.names` in `app.js`             |
| Relationship / reunion dates     | `relationshipStart`, `reunionDate`     |
| Cities & weather                 | `myLocation`, `herLocation`            |
| Hero text & message              | `CONFIG.hero`                          |
| Static photos                    | `CONFIG.photos` + `CONFIG.album` + files in `photos/` |
| “Open When…” messages            | `CONFIG.openWhen`                      |
| Secret messages                  | `secretMessage` / `brandSecret`        |
| Starting bucket-list items       | `CONFIG.bucketList`                    |
| Music playlists                  | `CONFIG.playlists`                     |
| Site password                    | GitHub Actions secret `GATE_PASSWORD` |
| Colors, fonts, spacing           | CSS variables at the top of `style.css`|

For deeper changes (new tabs, new Firebase collections, design overhaul) read the full guide in `website_tutorial.md`.

---

## 🔒 Security

This is a personal hobby project, not a multi-user product. The security model (client-side password, public Firebase config with intentionally permissive rules for a few low-sensitivity collections, unsigned Cloudinary preset) is documented in **`SECURITY.md`**.

If you later add more sensitive data, tighten the Firestore rules and/or add real authentication.

---

## 📖 Documentation map

| File                    | Purpose                                      |
|-------------------------|----------------------------------------------|
| `website_tutorial.md`   | Complete beginner guide — start here         |
| `firebase_setup.md`     | Firebase / Firestore setup                   |
| `memories_setup.md`     | Cloudinary photo-upload setup                |
| `news-backend/README.md`| Cloudflare Worker for news                   |
| `SECURITY.md`           | Security model and known trade-offs          |

---

Made with ♥ for someone special.
