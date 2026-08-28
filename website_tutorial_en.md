Here's the complete tutorial in Markdown format that you can save as `README.md` in your project:

```markdown
# 💚 Girlfriend Website: Beginner's Tutorial

> A complete guide to personalizing your website — no coding experience needed.

**Tip:** Open this file in VS Code and press `Cmd + Shift + V` (Mac) or `Ctrl + Shift + V` (Windows) to view it as a nicely formatted preview.

---

## 📖 What You Have

Your website is a **single HTML file** called `index.html`. It contains everything:

- **Structure** (HTML)
- **Design** (CSS)
- **Interactions** (JavaScript)
- **Your content** (CONFIG section)

Most of what you'll want to change is in one place — the `CONFIG` object at the bottom of the file. **You don't need to understand all the code.**

---

## 🛠️ 1. Install VS Code on Your Mac

If you don't have VS Code:

1. Go to: https://code.visualstudio.com/
2. Download the Mac version
3. Open the downloaded file and move VS Code to your Applications folder
4. Open VS Code

**You don't need Node.js, Python, Git, or anything else just to edit this website.**

---

## 📁 2. Set Up Your Project Folder

1. Open Finder
2. Go to **Documents**
3. Create a folder called **Girlfriend Website**
4. Put `index.html` inside it

Your folder should look like:

```
Girlfriend Website/
└── index.html
```

### When you add photos:

```
Girlfriend Website/
├── index.html
└── photos/
    ├── hero.jpg
    ├── final.jpg
    ├── photo1.jpg
    ├── photo2.jpg
    └── ...
```

---

## 📝 3. Open the Website in VS Code

1. Open VS Code
2. Choose **File → Open Folder...**
3. Select **Documents → Girlfriend Website**
4. Click **Open**

On the left side, you should see:

```
Girlfriend Website
└── index.html
```

Click `index.html` to open it.

**Don't worry about understanding all the code.** For personalization, you only need to edit the `CONFIG` section.

---

## ⭐ 4. The Most Important Rule

**Everything editable lives in one place.**

Press `Cmd + F` (Mac) or `Ctrl + F` (Windows) and search for:

```javascript
const CONFIG = {
```

This is where you'll personalize:

| What | What to change |
|------|----------------|
| Names | Your names |
| Introduction | The welcome message |
| Dates | When you started dating, when you'll meet next |
| Locations | Your cities, weather coordinates |
| Photos | Hero photo, final photo |
| Things I Miss | What you miss about her |
| "You Made Me Better" | How she helped you grow |
| Little Things | Small things you love |
| Album | Photos and captions |
| Favorites | Favorite things |
| Fun Facts | Fun facts about you two |
| Firsts | Milestones |
| Open When | Messages for different moods |
| Secret Message | Hidden message |
| Quizzes | Questions and answers |
| Music | Playlists and songs |

---

## ✏️ 5. How to Edit Safely

You'll see things like:

```javascript
names: { me: "M", her: "Your Name" },
```

**Change only the content inside the quotation marks:**

```javascript
names: { me: "Thomas", her: "Eduarda" },
```

### ✅ Correct:
```javascript
her: "Eduarda"
```

### ❌ Incorrect:
```javascript
her: Eduarda  // Missing quotation marks!
```

### 🛡️ Safe Rule:

**Change the text, not the structure.**

- Keep quotation marks: `" "`
- Keep commas: `,`
- Keep colons: `:`
- Keep brackets: `{ } [ ]`

When in doubt, **only change what's between the quotation marks**.

---

## 📊 6. Change the Relationship Counter

Find:

```javascript
relationshipStart: "2023-06-14T00:00:00",
```

Change the date to when your relationship started.

**Format:** `YYYY-MM-DDTHH:MM:SS`

Example:

```javascript
relationshipStart: "2026-03-15T00:00:00",
```

The counter automatically calculates:
- Years
- Months
- Days
- Hours
- Minutes
- Seconds

**Updates every second.** No manual calculation needed.

---

## ⏱️ 7. Change the Reunion Countdown

Find:

```javascript
reunionDate: "2026-12-20T15:00:00",
```

Change it to when you'll see each other again.

**Format:** `YYYY-MM-DDTHH:MM:SS`

Example:

```javascript
reunionDate: "2026-09-15T18:30:00",
```

When the countdown hits zero, the website shows:

> **Today. Finally. ♥**

---

## 🌍 8. Change Your Cities

Find:

```javascript
myLocation:  { city: "São Paulo, Brazil", lat: -23.55, lon: -46.63 },
herLocation: { city: "Lisbon, Portugal",  lat: 38.72, lon: -9.14 },
```

Change the city names and coordinates.

Example:

```javascript
myLocation:  { city: "Florianópolis, Brazil", lat: -27.59, lon: -48.55 },
herLocation: { city: "San Francisco, USA", lat: 37.77, lon: -122.42 },
```

**City name** = What's displayed on the website
**Latitude/Longitude** = Used for weather (get these from Google Maps)

---

## ☀️ 9. Weather (No API Key Needed!)

The website uses **Open-Meteo** — completely free, no API key required.

Weather automatically uses the latitude/longitude from your city settings.

**Shows:**
- Current temperature
- Weather condition
- "Feels like" temperature
- Humidity

**Effects:**
- ☀️ Sun glow
- 🌧️ Rain drops
- 🌙 Stars at night

**Updates every 15 minutes.**

---

## 🌙 10. Moon Phase (No API Key Needed!)

The moon phase is calculated astronomically — no API required.

**Shows:**
- Moon phase name
- Percentage illuminated
- Visual moon

**Updates every hour.**

---

## 📸 11. Add Your Photos

Find:

```javascript
photos: {
  hero: null,
  final: null
},
```

1. Create a `photos` folder inside your project folder
2. Add your images (use `.jpg`, `.jpeg`, `.png`, or `.webp`)
3. Update the config:

```javascript
photos: {
  hero: "photos/hero.jpg",
  final: "photos/final.jpg"
},
```

**Important:** The filename must match **exactly** (including capitalization).

---

## 💭 12. "Things I Miss"

Find:

```javascript
thingsIMiss: [
```

Each entry:

```javascript
{ icon: "🤗", text: "Your warm hugs that make everything better.", extra: "" },
```

- `icon`: The emoji shown
- `text`: The main message
- `extra`: A second message revealed when clicked (leave `""` if none)

### Example with extra message:

```javascript
{
  icon: "🤗",
  text: "Your warm hugs that make everything better.",
  extra: "I don't think you realize how much I miss them."
},
```

---

## 🌱 13. "You Made Me Better"

Find:

```javascript
youMadeMeBetter: [
```

Each paragraph is a separate string:

```javascript
youMadeMeBetter: [
  "You helped me become more patient and understanding.",
  "You motivated me to take my goals and studying more seriously.",
  "You made me want to become a better version of myself.",
  "You showed me a deeper kind of love and companionship."
],
```

Add, remove, or rewrite as many as you want.

---

## 💕 14. "Little Things I Love About Us"

Find:

```javascript
littleThings: [
```

Each item becomes a small chip/card:

```javascript
littleThings: [
  "Your laugh",
  "Our stupid jokes",
  "Late-night conversations",
  "Being able to be ourselves",
  "Talking about our future"
],
```

Add as many as you want.

---

## 🖼️ 15. Our Album

Find:

```javascript
album: [
```

Album has **categories** with **items**:

```javascript
{
  category: "Us",
  items: [
    { caption: "Us, somewhere ordinary", date: "August 15, 2026", img: "photos/us1.jpg" },
    { caption: "That afternoon we didn't want to end", date: "August 14, 2026", img: "photos/us2.jpg" }
  ]
}
```

**Fields:**
- `category`: Section title
- `caption`: Photo description
- `date`: When it was taken (optional)
- `img`: Path to the photo

**Photos show in a grid** (3 across on desktop, 2 on mobile).

---

## ⭐ 16. Favorites

Find:

```javascript
favorites: {
```

```javascript
favorites: {
  "Favorite food": "Sushi",
  "Favorite movie": "Interstellar",
  "Favorite song": "Our song",
  "Favorite place": "The beach",
  "Favorite activity": "Late-night drives",
  "Favorite inside joke": "That one thing we never explain"
},
```

Replace the dash `"—"` with your actual answers.

---

## 🎯 17. Fun Facts

Find:

```javascript
funFacts: [
```

Each line becomes a card:

```javascript
funFacts: [
  "Who said \"I love you\" first: Me",
  "Who is more stubborn: Her",
  "Who takes longer to get ready: Her"
],
```

**Note:** Use `\"` inside the text for quotation marks.

---

## 📅 18. "Our Firsts"

Find:

```javascript
firsts: [
```

Each item has:

```javascript
{
  title: "First date",
  date: "June 20, 2026",
  desc: "The day everything started feeling a little different."
}
```

Edit or add more milestones.

---

## ✉️ 19. "Open When..." Messages

Find:

```javascript
openWhen: [
```

Each message:

```javascript
{
  icon:"💚",
  label:"Open when you're sad",
  title:"Open When You're Sad",
  text:"Your personalized message goes here."
}
```

**Fields:**
- `icon`: Emoji shown on the button
- `label`: What's written on the button
- `title`: Title inside the popup
- `text`: The actual message she reads

### 💡 Ideas:
- Open when you're sad
- Open when you're missing me
- Open when you're happy
- Open when you need motivation
- Open when you're stressed
- Open when you can't sleep
- Open when you're angry
- Open when you need a hug
- Open when you're feeling insecure
- Open when you need to smile
- Open when you want to remember us
- Open when you just want to hear from me

Add as many as you want!

---

## 💚 20. Green Heart Button

The main page has a button:

> **Click this ♥**

When clicked:
- 💚 Green hearts burst upward
- Message appears: "Just a little reminder that I love you. 💚"

**You don't need to edit anything here** — it's already working.

---

## 🤫 21. Secret Message

At the bottom of the page, there's a tiny heart `♥`.

**Click it 5 times** and a secret message appears.

To change the message:

```javascript
secretMessage: "There's actually one more thing I wanted you to know..."
```

Write something only she would understand.

---

## ▶️ 22. How to Run the Website

### Method 1: Simplest (Double-click)

1. Save your file: `Cmd + S`
2. Open Finder
3. Go to: `Girlfriend Website/index.html`
4. Double-click to open in your browser
5. Refresh the page after making changes

### Method 2: VS Code Live Server (Recommended)

1. In VS Code, click the **Extensions** icon (left sidebar)
2. Search for: **Live Server**
3. Install it
4. Right-click `index.html` → **Open with Live Server**
5. Browser opens at: `http://127.0.0.1:5500/index.html`

**Pro:** Auto-refreshes when you save changes.

### Method 3: Python Server (For YouTube Embeds)

Some features (like YouTube embeds) require a server:

```bash
# Navigate to your website folder
cd ~/Documents/Girlfriend\ Website

# Start the server
python3 -m http.server 8000
```

Open your browser at: `http://localhost:8000`

**To stop:** Press `Ctrl + C` in the terminal.

---

## ❓ 23. If Something Goes Wrong

### Website is completely blank
- Check for missing `</script>` tag
- Check for missing comma or quote in CONFIG

### Photo doesn't appear
- Is it in the `photos` folder?
- Does the filename match exactly?
- Did you use the correct path?

### Weather doesn't work
- Check latitude/longitude are numbers (not text)
- Check internet connection
- Try Live Server or Python server instead of double-clicking

### YouTube embed doesn't work
- **First:** Are you using a server? YouTube blocks embeds on `file://`
- **Second:** Does the video allow embedding? Some labels (like UMG) block embeds

**Test with a working video:**
```javascript
youtubeId: "5qap5aO4i9A"  // Always works
```

If the test works, your setup is fine — the specific video just doesn't allow embedding.

### Website looks broken
- You probably deleted a comma, quote, or bracket accidentally

### Example of broken code (missing comma):
```javascript
// ❌ BROKEN
hero: {
  title: "For You"
  subtitle: "Something special"
},

// ✅ FIXED
hero: {
  title: "For You",
  subtitle: "Something special"
},
```

---

## 🔑 24. Quick Reference: What NOT to Edit

**DO NOT edit anything below** the closing `}` of the CONFIG object.

The code below controls:
- Counters and countdowns
- Weather and moon
- Animations
- Album and lightbox
- Modals
- Navigation
- Quiz logic
- Music player

**For basic personalization, leave it alone.**

---

## 📝 25. Your Workflow

**Don't try to do everything at once!** Follow this order:

1. **Make it run** — Open the website successfully
2. **Names** — Change your names
3. **Dates** — Relationship start, reunion date
4. **Locations** — Cities, coordinates
5. **Photos** — Add hero and final photos
6. **Content** — Things I Miss, "You Made Me Better", Little Things
7. **Album** — Add photos and captions
8. **Favorites/Fun Facts/Firsts** — Fill them in
9. **Open When** — Write your messages
10. **Secret Message** — Write something special
11. **Test Everything** — Click every tab, button, and link

---

## 🧠 26. Mental Model

```
index.html
│
├── CONFIG ← YOU EDIT THIS
│   ├── Names
│   ├── Introduction
│   ├── Dates
│   ├── Locations
│   ├── Photos
│   ├── Things I Miss
│   ├── You Made Me Better
│   ├── Little Things
│   ├── Album
│   ├── Favorites
│   ├── Fun Facts
│   ├── Firsts
│   ├── Open When
│   ├── Secret Message
│   ├── QUIZ_DATA ← Quiz questions
│   └── playlists ← Music playlists
│
└── Website Logic ← LEAVE THIS ALONE
```

---

## 🎵 27. Quizzes: How to Edit

### Finding the Quizzes

Inside CONFIG, find:

```javascript
const QUIZ_DATA = {
  eduarda: {
    title: { en: "Eduarda Quiz", pt: "Quiz da Eduarda" },
    questions: [
      // Question objects go here
    ]
  },
  thommy: {
    title: { en: "Thommy Quiz", pt: "Quiz do Thommy" },
    questions: [
      // Question objects go here
    ]
  },
  us: {
    title: { en: "Us Together Quiz", pt: "Quiz de Nós Dois" },
    questions: [
      // Question objects go here
    ]
  }
};
```

### Question Structure

```javascript
{
  q: { en: "Question in English", pt: "Question in Portuguese" },
  options: [
    { en: "Option 1 English", pt: "Option 1 Portuguese" },
    { en: "Option 2 English", pt: "Option 2 Portuguese" },
    { en: "Option 3 English", pt: "Option 3 Portuguese" },
    { en: "Option 4 English", pt: "Option 4 Portuguese" }
  ],
  correct: 0  // Index of correct answer (0, 1, 2, or 3)
}
```

### Adding a New Question

```javascript
{
  q: {
    en: "What was the name of our first restaurant date?",
    pt: "Qual era o nome do nosso primeiro restaurante no date?"
  },
  options: [
    { en: "Bistro dos Sete Ais", pt: "Bistro dos Sete Ais" },
    { en: "Arquipélago", pt: "Arquipélago" },
    { en: "McDonald's", pt: "McDonald's" },
    { en: "Artezanno", pt: "Artezanno" }
  ],
  correct: 0
}
```

### Special Messages

Add custom messages for correct/wrong answers:

```javascript
{
  q: { en: "Who said 'I love you' first?", pt: "Quem disse 'eu te amo' primeiro?" },
  options: [
    { en: "You", pt: "Você" },
    { en: "Me", pt: "Eu" }
  ],
  correct: 0,
  correctSpecial: {
    en: "You got it! 😊",
    pt: "Você acertou! 😊"
  },
  wrongSpecial: {
    en: "Really? It was definitely you! 😂",
    pt: "Sério? Foi definitivamente você! 😂"
  }
}
```

### True/False Questions

```javascript
{
  q: { en: "We met in May 2026. True or false?", pt: "A gente se conheceu em maio de 2026. Verdadeiro ou falso?" },
  options: [
    { en: "True", pt: "Verdadeiro" },
    { en: "False", pt: "Falso" }
  ],
  correct: 0  // 0 = True, 1 = False
}
```

---

## 🎶 28. Music: How to Edit Playlists

### Finding the Music Section

Inside CONFIG, find:

```javascript
playlists: [
  {
    id: "listen-when",
    label: "Listen When…",
    labelPt: "Ouça Quando…",
    description: "Songs for specific moods and moments.",
    descriptionPt: "Músicas para humores e momentos específicos.",
    songs: [
      // Song objects go here
    ]
  }
]
```

### Playlist Structure

```javascript
{
  id: "unique-id",        // Must be unique (e.g., "our-songs")
  label: "English name",  // Button label in English
  labelPt: "Portuguese name",
  description: "English description",
  descriptionPt: "Portuguese description",
  songs: [ /* array of song objects */ ]
}
```

### Song Structure

```javascript
{
  title: "Song Name",
  artist: "Artist Name",
  youtubeId: "XXXXXXXXXXX",  // 11-character YouTube ID
  description: "English description",
  descriptionPt: "Portuguese description"
}
```

### How to Get a YouTube Video ID

| URL Type | Example | ID |
|----------|---------|-----|
| Standard | `youtube.com/watch?v=dQw4w9WgXcQ` | `dQw4w9WgXcQ` |
| Short | `youtu.be/dQw4w9WgXcQ` | `dQw4w9WgXcQ` |
| With extras | `youtube.com/watch?v=dQw4w9WgXcQ&feature=shared` | `dQw4w9WgXcQ` |

**The ID is always 11 characters long.**

### Adding a New Playlist

```javascript
{
  id: "road-trip",
  label: "Road Trip Mix",
  labelPt: "Mistura de Viagem",
  description: "Songs for long drives.",
  descriptionPt: "Músicas para viagens longas.",
  songs: [
    {
      title: "Song Name",
      artist: "Artist Name",
      youtubeId: "XXXXXXXXXXX",
      description: "Good driving song.",
      descriptionPt: "Boa música para dirigir."
    }
  ]
}
```

### Adding a New Song to an Existing Playlist

```javascript
songs: [
  {
    title: "Use Somebody",
    artist: "Kings of Leon",
    youtubeId: "gL55LKd7Ln0",
    description: "One of our songs.",
    descriptionPt: "Uma das nossas músicas."
  },
  // ADD NEW SONGS HERE
  {
    title: "Your New Song",
    artist: "Artist Name",
    youtubeId: "XXXXXXXXXXX",
    description: "Why this song matters.",
    descriptionPt: "Por que essa música importa."
  }
]
```

### YouTube Embed Troubleshooting

| Problem | Solution |
|---------|----------|
| **"Content blocked by UMG"** | Try a different upload (audio only, lyric video, or fan upload) |
| **Video doesn't load at all** | Are you using a server? (Live Server or Python) |
| **"Embedding disabled"** | The video owner disabled embeds — find another upload |

**Test with a known working video:**
```javascript
youtubeId: "5qap5aO4i9A"  // Always works
```

If this works, your code is perfect — the problem is the specific video.

---

## 🚀 29. Publishing with GitHub Pages

1. **Create a GitHub account** (if you don't have one)
2. **Create a new repository** (public is simpler for personal projects)
3. **Upload your files**:
   - `index.html`
   - `photos/` folder
4. **Enable GitHub Pages**:
   - Go to **Settings → Pages**
   - Under "Build and deployment", choose:
     - Source: **"Deploy from a branch"**
     - Branch: `main`
     - Folder: `/ (root)`
   - Click **Save**
5. **Get your URL** after a minute or two:
   ```
   https://yourusername.github.io/your-repo-name/
   ```

**That's the link you send her!** 🌸

Any time you update `index.html` and re-upload it, the site updates automatically within a minute.

---

## 🔗 30. Bucket List Sync (Optional)

The Bucket List tab lets you add, edit, and check off items right on the website.

**By default:** Changes only stay on your device.

**To sync between both of you:** See `FIREBASE_SETUP.md` — it's a free ~10 minute setup with Firebase.

---

## 🏁 Final Takeaway

**You're not starting a programming project from scratch.**

Your job is simply to:

1. **Open** `index.html`
2. **Find** `CONFIG = {`
3. **Personalize** your content
4. **Add** photos
5. **Test** with Live Server or Python server
6. **Publish** with GitHub Pages

**The complicated JavaScript underneath is already doing the work for you.** 💚

---

## 📚 Quick Reference: CONFIG Sections

| Section | What it changes |
|---------|-----------------|
| `names` | Your names |
| `hero` | Welcome text |
| `relationshipStart` | When you started dating |
| `reunionDate` | When you'll meet next |
| `myLocation` / `herLocation` | Cities and weather |
| `photos` | Hero and final photos |
| `thingsIMiss` | Things you miss about her |
| `youMadeMeBetter` | How she helped you grow |
| `littleThings` | Small things you love |
| `album` | Photo album |
| `favorites` | Favorite things |
| `funFacts` | Fun facts about you two |
| `firsts` | Relationship milestones |
| `openWhen` | "Open When" messages |
| `secretMessage` | Hidden message (5 clicks) |
| `QUIZ_DATA` | Quiz questions |
| `playlists` | Music playlists |

---

**Made with love, just for you.** 💚
```

---

## 📥 How to Use This

1. **Save this as `README.md`** in your project folder
2. Open it in VS Code and press `Cmd + Shift + V` to preview
3. Use it as your guide while personalizing the website

This is a complete, beginner-friendly guide that covers everything from setup to publishing! 🚀