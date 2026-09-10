# 💚 Girlfriend Website — Complete Beginner's Tutorial

> A full guide to understanding, personalizing, and deploying your website.  
> No coding experience needed for most changes.

**Tip:** Open this file in VS Code and press `Cmd + Shift + V` (Mac) or `Ctrl + Shift + V` (Windows) to view it as a nicely formatted preview.

---

## 📖 What You Have Now (File Separation)

The site is **no longer a single giant HTML file**. It was carefully split so everything is easier to maintain:

```
girlfriend-website/
├── index.html          ← Structure (the page layout & all the tabs)
├── style.css           ← Design (colors, fonts, layout, animations)
├── app.js              ← Logic + CONFIG (almost everything you edit lives here)
├── gate.js             ← Password gate (the lock screen)
├── photos/             ← Your images
├── news-backend/       ← Optional Cloudflare Worker for better news
├── .github/workflows/  ← Automatic deploy + secret injection
├── firebase_setup.md   ← How to connect Firebase (sync)
├── memories_setup.md   ← How to connect Cloudinary (photo uploads)
├── SECURITY.md
└── website_tutorial.md ← This file
```

### What each main file does

| File        | Purpose                                      | Do you edit it often? |
|-------------|----------------------------------------------|-----------------------|
| `index.html`| HTML structure, tabs, modals                 | Rarely                |
| `style.css` | All visual design (colors, spacing, fonts)   | Only for design tweaks|
| `app.js`    | **CONFIG** + all interactive features        | **Yes — main file**   |
| `gate.js`   | Password lock screen                         | Only to change password|

**Most of the time you only need to open `app.js` and edit the `CONFIG` object.**

---

## 🛠️ 1. Tools You Need

1. **VS Code** (free) → https://code.visualstudio.com/
2. A modern browser (Chrome, Firefox, Safari, Edge)
3. Optional but recommended: **Git** + a **GitHub** account (for publishing)

You do **not** need Node.js, Python, or any other language for normal personalization.

---

## 📁 2. Project Structure After Separation

```
Girlfriend Website/
├── index.html
├── style.css
├── app.js              ← edit CONFIG here
├── gate.js
├── photos/
│   ├── hero.jpeg
│   ├── final.jpeg
│   └── ... (all your album photos)
├── news-backend/       (optional)
└── .github/
    └── workflows/
        └── deploy.yml  (handles Firebase + Cloudinary secrets)
```

---

## ⭐ 3. The Most Important Rule

**Almost everything editable lives in one place:**

Open `app.js` and search for:

```javascript
const CONFIG = {
```

This is the only section most people ever need to touch.

---

## 🗂️ 4. All the Tabs & Features

The site currently has these main sections:

| Tab              | What it contains                                      | Synced?                  |
|------------------|-------------------------------------------------------|--------------------------|
| **Our Story**    | Hero, countdown, weather, “Things I Miss”, growth, little things, Today widget | Local + some Firebase   |
| **Our Album**    | Photo categories + live “Our Memories” uploads        | Photos → Cloudinary<br>Metadata → Firebase |
| **Us**           | Favorites, Fun Facts, Firsts                          | Local                    |
| **Open When...** | Special messages she can open                         | Local                    |
| **Bucket List**  | Shared to-do list you both can edit, plus a "Movie Nights" watchlist (TMDB search + shared ratings) | **Firebase**             |
| **Quizzes**      | Multiple interactive quizzes                          | Local                    |
| **Music**        | Playlists + ability to add/reorder songs              | **Firebase**             |
| **Calendar**     | Shared calendar / events with daily, weekly, monthly, or yearly repeats | **Firebase**             |
| **Day Cards**    | Special day cards                                     | **Firebase**             |
| **Our Games**    | Fun little games for the two of you                   | Local                    |
| **Thommy Personal** | Private personal area (password protected inside)  | Optional Firebase        |

### Extra features

- **Bilingual** — full English / Portuguese toggle (language is remembered)
- **Password Gate** — the whole site starts locked; the real password is supplied through the GitHub Actions secret `GATE_PASSWORD`
- **While-you-were-away notifications** — recent shared additions/edits can appear when you return; they expire after 24 hours
- **Secret messages**:
  - Click the footer heart **5 times** → secret message
  - Click the header “us” brand **9 times** → longer secret card
- **Today widget** (on Our Story) — news, daily quote, mood, notes
- **Attention dots** — blue dots appear on tabs when new shared content arrives
- **Live photo uploads** in Album → “Our Memories”
- **Photo Booth** — live browser-to-browser video calls, with optional TURN relay support for different networks
- **Weather** for both cities, including each location’s local time
- **Calendar repeats** — events can repeat daily, weekly, monthly, or yearly
- **Countdown** to the next reunion
- **News** (via Cloudflare Worker or public proxies)

---

## 📝 5. How to Edit Content (CONFIG)

Open `app.js` and find `const CONFIG = {`.

### Basic identity & dates

```javascript
names: { me: "Thommy", her: "Fiel" },

relationshipStart: "2026-05-02T03:00:00",
reunionDate: "2026-12-20T10:00:00",

myLocation: { city: "Florianopolis, Brazil", lat: -27.59, lon: -48.55 },
herLocation: { city: "San Francisco, US", lat: 37.77, lon: -122.41 },
```

### Hero section

```javascript
hero: {
  eyebrow: "a little place that's just ours",
  title: "For You, My Love",
  subtitle: "...",
  message: "...",
},
```

### Photos (static ones)

```javascript
photos: {
  hero: "photos/hero.jpeg",
  final: "photos/final.jpeg",
},
```

### Things I Miss / You Made Me Better / Little Things

These are simple arrays of objects. Just edit the text or add new items following the same pattern.

### Album (static photo folders)

```javascript
album: [
  {
    category: "Us",
    items: [
      {
        caption: "Us, somewhere ordinary",
        date: "08/02/2026",
        img: "photos/us-1.jpeg",
      },
      // more photos...
    ],
  },
  // more categories...
],
```

### Open When messages

```javascript
openWhen: [
  {
    icon: "💚",
    label: "Open when you're sad",
    title: "Open When You're Sad",
    text: "Hey. I know I can't be there...",
  },
  // more...
],
```

### Secret messages

```javascript
secretMessage: "There's actually one more thing...",

brandSecret: {
  clicks: 9,
  eyebrow: "You found it 🔓",
  title: "A little secret",
  body: "For you, Eduarda.\n\nI did all of this for you...",
},
```

### Bucket List (starter items)

These only appear the **first time** the database is empty. After that, everything is live from Firebase.

```javascript
bucketList: [
  { text: "Watch the sunset from a rooftop together", done: false },
  // ...
],
```

### Music / Playlists

```javascript
playlists: [
  {
    id: "our-playlist",          // never change once set
    label: "Our Playlist",
    labelPt: "Nossa Playlist",
    description: "...",
    descriptionPt: "...",
    songs: [
      {
        title: "Song Name",
        artist: "Artist Name",
        youtubeId: "BW9Fzwuf43c",   // only the ID!
        description: "Why this song matters",
        descriptionPt: "...",
      },
    ],
  },
],
```

**Important YouTube tip:**  
Use only the video ID (`BW9Fzwuf43c`), not the full URL.  
Some videos block embedding — those will show a blank player.

### Firebase & Cloudinary (leave the placeholders)

```javascript
firebase: {
  apiKey: "__FIREBASE_API_KEY__",
  // ... other __PLACEHOLDERS__
},

cloudinary: {
  cloudName: "__CLOUDINARY_CLOUD_NAME__",
  uploadPreset: "__CLOUDINARY_UPLOAD_PRESET__",
},
```

These are automatically replaced during deploy by GitHub Actions using repository secrets.  
**Never put the real keys in the code** if the repo is public.

---

## 🔐 6. Password Gate

The lock screen is controlled by `gate.js`, but the **real password should never be edited into that file**. The repository version contains a placeholder hash and the GitHub Actions deployment calculates the SHA-256 hash from the repository secret at build time.

### Change the password

In GitHub, open **Settings → Secrets and variables → Actions → Repository secrets** and create/update:

```text
Name: GATE_PASSWORD
Value: your new password
```

Then push to `main` or run the deployment workflow manually. The workflow checks that the secret exists and injects only its SHA-256 hash into `gate.js`.

**Do not write the real password in `gate.js`, `app.js`, `index.html`, README files, or other committed files.**

The unlock state is saved in each browser’s localStorage so the password normally only needs to be entered once per browser/device.

---

## 🌐 7. Language (English ↔ Portuguese)

The site is fully bilingual.  
A language toggle appears on the page. The choice is remembered.

Most UI strings are translated automatically.  
For your own content in `CONFIG`, many places already support both languages (look for `label` / `labelPt`, `description` / `descriptionPt`, etc.).

If you add new fixed text, you can extend the `PT_TRANSLATIONS` object in `app.js`.

---

## ☁️ 8. Syncing Data (Firebase + Cloudinary)

### What needs Firebase (Cloud Firestore)
- Bucket List
- Movies (the watchlist/watched list inside the Bucket List tab)
- Music songs (the ones added on the live site)
- Memories metadata (captions, dates, Cloudinary URLs)
- Calendar events
- Day Cards
- Moods / Today widget shared data
- (optional) Thommy Personal shared data

### What needs Cloudinary
- Actual photo / video files uploaded through “Our Memories”

### What needs TMDB (The Movie Database)
- Movie search inside the Bucket List's Movies section (adding posters,
  release years, and picking the right title from search results).
  Optional — without it, typing a title and hitting "Search" just adds
  that title as a plain entry with no poster.

### Setup guides already included
- **Firebase** → read `firebase_setup.md`
- **Cloudinary** → read `memories_setup.md`
- **TMDB** → free key from https://www.themoviedb.org (Settings → API);
  see the comment above `CONFIG.tmdb` in `app.js`

### How secrets stay safe
The real Firebase, Cloudinary, and TMDB values are stored as **GitHub repository secrets**.  
The deploy workflow automatically injects them into `app.js` (and `index.html` as a safety net) right before publishing.

Required secret names:
- `FIREBASE_API_KEY`
- `FIREBASE_AUTH_DOMAIN`
- `FIREBASE_PROJECT_ID`
- `FIREBASE_STORAGE_BUCKET`
- `FIREBASE_MESSAGING_SENDER_ID`
- `FIREBASE_APP_ID`
- `CLOUDINARY_CLOUD_NAME`
- `CLOUDINARY_UPLOAD_PRESET`
- `TMDB_ACCESS_TOKEN`
- `METERED_TURN_DOMAIN`
- `METERED_TURN_API_KEY`
- `GATE_PASSWORD`

`TMDB_ACCESS_TOKEN` enables TMDB-powered movie search. The Metered values enable
reliable Photo Booth calls across different networks. `GATE_PASSWORD` is the
site's access password; the workflow hashes it before publishing the site.

If TMDB is not configured, Movie Nights can still be used in manual-add mode.
If Metered TURN is not configured, the Photo Booth can still work when WebRTC
can establish a direct connection (for example, on the same network).

---

## 🚀 9. Deploying to GitHub Pages

1. Push your code to the `main` branch of your GitHub repository.
2. The workflow in `.github/workflows/deploy.yml` will:
   - Inject the secrets into `app.js`
   - Build the site
   - Publish it to GitHub Pages
3. Your live URL will be something like:
   ```
   https://yourusername.github.io/your-repo-name/
   ```

You can also trigger a deploy manually from the **Actions** tab → “Deploy to GitHub Pages” → “Run workflow”.

### After every deploy
- Hard-refresh the live site (`Ctrl + Shift + R` / `Cmd + Shift + R`)
- Or open it in a private window
- Check the browser console (F12) if anything looks wrong

---

## 🔔 10. “While you were away” notifications

The site has a lightweight catch-up notification system for shared updates. It
is separate from normal action toasts. When the site notices recent additions
or edits that happened while a browser was away, it can show a longer-lived
“While you were away” message.

The important rule is the **24-hour window**: a change is only eligible for a
catch-up alert for 24 hours after it was made. If nobody opens the site for
more than 24 hours, that old change is ignored instead of appearing as a stale
notification later. This tracking is browser/device-local; it does not require
a push-notification service or a new Firebase service.

---

## 🛠️ 11. Local Testing

**Never open `index.html` by double-clicking** (file://).  
YouTube embeds and some features break that way.

Instead run a tiny local server:

```bash
cd path/to/girlfriend-website
python3 -m http.server 8000
```

Then open: http://localhost:8000

Or use the **Live Server** extension in VS Code.

---

## 🔧 12. Common Things People Want to Change

| Goal                              | Where to edit                          |
|-----------------------------------|----------------------------------------|
| Names                             | `CONFIG.names` in `app.js`             |
| Dates / countdown                 | `relationshipStart`, `reunionDate`     |
| Cities & weather                  | `myLocation`, `herLocation`            |
| Hero text                         | `CONFIG.hero`                          |
| Static photos                     | `CONFIG.photos` + `CONFIG.album`       |
| Open When messages                | `CONFIG.openWhen`                      |
| Secret messages                   | `secretMessage` + `brandSecret`        |
| Starting Bucket List              | `CONFIG.bucketList`                    |
| Starting Movies list               | `CONFIG.movieList`                     |
| TMDB access token (movie search)    | GitHub Actions secret `TMDB_ACCESS_TOKEN` |
| Music playlists                   | `CONFIG.playlists`                     |
| Password                          | GitHub Actions secret `GATE_PASSWORD` |
| Colors / fonts                    | `style.css` (CSS variables at the top) |
| Add a completely new tab          | Advanced — edit `index.html` + `app.js`|

---

## 🎨 12.5 Changing the Website Colors

You can customize the colors of the website without changing the JavaScript. Almost all of the main colors are controlled by **CSS variables at the very top of `style.css`**.

Open:

```text
style.css
```

Then look near the top for:

```css
:root {
  --cream: #faf6f0;
  --cream-dim: #f3ede3;
  --ink: #2b2622;
  --ink-soft: #5c534b;
  --blush: #e3aeb0;
  --blush-soft: #f2d9d6;
  --sage: #8ca88a;
  --sage-dim: #dce6d8;
  --green: #4f6f52;
  --green-deep: #35502f;
  --gold: #c9a66b;
  --night: #1b2333;
  --night-deep: #0f1522;
  --stars: #f4efe0;
  --amber: #c98b4b;
  --plum: #6f5b8a;
}
```

### How to change a color

A color is written as a **hex code**, such as `#e3aeb0`.

For example, to make the main blush/pink color more purple, change:

```css
--blush: #e3aeb0;
```

to something like:

```css
--blush: #c9a7e8;
```

You can use any hex color you like. A useful color picker is available at **Google's color picker** — search Google for `color picker`, choose your color, and copy the HEX value.

### What the main colors control

| Variable | Mainly used for |
|----------|-----------------|
| `--cream` | Main page/background surfaces |
| `--cream-dim` | Softer background sections |
| `--ink` | Main text |
| `--ink-soft` | Secondary/muted text |
| `--blush` | Pink/blush accents, buttons and highlights |
| `--blush-soft` | Light pink backgrounds |
| `--sage` | Green/sage accents |
| `--sage-dim` | Soft green backgrounds |
| `--green` | Green buttons and accents |
| `--green-deep` | Darker green accents |
| `--gold` | Gold highlights |
| `--night` | Dark/night-mode surfaces |
| `--night-deep` | Darkest night-mode surfaces |
| `--stars` | Star/night decorative elements |
| `--amber` | Warm orange/amber accents |
| `--plum` | Purple/plum accents |

### 🌙 Dark mode colors

There is a second color section in `style.css` specifically for dark mode:

```css
html[data-theme="dark"] {
  /* dark-mode color variables */
}
```

The same variable names are redefined there. This means you can give the website a completely different color palette at night.

For example, if you change `--blush` in the normal `:root` section, also check the `--blush` value inside `html[data-theme="dark"]` so the color looks good in both modes.

### 🎨 Easy color-theme ideas

You can create your own theme by changing several variables together. For example:

**Pink & romantic:**

```css
--blush: #e7a6b2;
--blush-soft: #f5d8de;
--sage: #9aaa8c;
--gold: #c9a66b;
```

**Lavender & dreamy:**

```css
--blush: #c9a7e8;
--blush-soft: #eadff7;
--sage: #9caeaa;
--gold: #c7ae72;
```

**Blue & calm:**

```css
--blush: #9ebfe3;
--blush-soft: #dceaf7;
--sage: #91aaa1;
--gold: #c8ad72;
```

**Important:** You do not need to edit `app.js` just to change these colors. Start with the variables in `style.css`. If you change a color and something does not look right, use your browser's **Inspect** tool to see which CSS rule controls that element.

After saving `style.css`, refresh the website to see your changes.

---

## 🆘 13. Troubleshooting

**“Nothing is synced / yellow pills”**
- Check that the GitHub secrets exist and the latest deploy succeeded
- For the site password, confirm `GATE_PASSWORD` exists under **Settings → Secrets and variables → Actions**
- If catch-up notifications seem missing, remember that only changes from the previous 24 hours are eligible
- Open the live site → F12 → Console and look for Firebase errors
- Confirm Firestore rules allow the collections you need

**Photos upload but don’t appear for the other person**
- Cloudinary worked, but Firebase metadata sync failed
- Check the `memories` collection in Firestore and the rules

**YouTube player is blank**
- Don’t open via `file://`
- Some videos have embedding disabled by the uploader

**Site looks broken after a change**
- Make sure there are no leftover git conflict markers (`<<<<<<<`, `=======`, `>>>>>>>`)
- Hard-refresh or clear cache

**Password gate keeps appearing**
- Clear localStorage for the site, or change the storage key in `gate.js`

---

## 📚 Quick Reference — CONFIG Sections

| Section              | What it controls                          |
|----------------------|-------------------------------------------|
| `names`              | Your names                                |
| `hero`               | Welcome / hero text                       |
| `relationshipStart`  | Anniversary / “together since” counter    |
| `reunionDate`        | Countdown target                          |
| `myLocation` / `herLocation` | Cities + weather                   |
| `photos`             | Hero & final photos                       |
| `thingsIMiss`        | Things you miss                           |
| `youMadeMeBetter`    | How she made you better                   |
| `littleThings`       | Small things you love                     |
| `album`              | Static photo categories                   |
| `favorites`          | Favorite things                           |
| `funFacts`           | Fun facts                                 |
| `firsts`             | Relationship firsts                       |
| `openWhen`           | Open-when messages                        |
| `secretMessage`      | Footer heart secret                       |
| `brandSecret`        | Header “us” secret card                   |
| `bucketList`         | Initial bucket list items                 |
| `movieList`          | Initial movies list (optional)            |
| `tmdb`               | TMDB API key for movie search (optional)  |
| `playlists`          | Music categories & songs                  |
| `firebase`           | Firebase config (injected at deploy)      |
| `cloudinary`         | Cloudinary config (injected at deploy)    |
| `newsBackendUrl`     | Optional Cloudflare Worker for news       |

---

## 🏁 Final Takeaway

You are **not** building a website from scratch.

Your job is simply:

1. Open `app.js`
2. Find `const CONFIG = {`
3. Personalize the content
4. Add photos to the `photos/` folder
5. (Optional) Set up Firebase + Cloudinary once
6. Push to GitHub → the site updates automatically

The complicated JavaScript, the design, the syncing, the password gate, the bilingual support, and all the tabs are already done for you.

**Made with love, just for you.** 💚
