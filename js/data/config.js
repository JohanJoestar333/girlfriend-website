/* ================================================================
   CONFIG — js/data/config.js
   ----------------------------------------------------------------
   Everything you personalize lives in this one object: names, dates,
   cities, photos, messages, playlists and the optional service keys.

   Loaded first (see index.html), so every other script can read CONFIG.
   Nothing outside js/data/ needs editing for normal personalization.

   Values like "__FIREBASE_API_KEY__" are placeholders. The GitHub
   Actions deploy replaces them from repository secrets — never paste
   real keys into this file. See docs/tutorial.md for a walkthrough.
   ================================================================ */

const CONFIG = {
  names: { me: "Thommy", her: "Fiel" },

  hero: {
    eyebrow: "a little place that's just ours",
    title: "For You, My Love",
    subtitle:
      "A collection of the moments, feelings, memories, and little things that make us... us.",
    message:
      "Sometimes I wish I could put everything I feel for you into words. Since I can't, I made you a little place where some of those feelings can live.",
  },

  // ISO date strings, e.g. "2023-06-14T00:00:00"
  relationshipStart: "2026-05-02T03:00:00",
  reunionDate: "2026-12-20T10:00:00",

  // City name + lat/lon (needed for weather; find coords with any map)
  myLocation: { city: "Florianopolis, Brazil", lat: -27.59, lon: -48.55 },
  herLocation: { city: "San Francisco, US", lat: 37.77, lon: -122.41 },

  photos: {
    hero: "assets/photos/hero.jpeg", // path or URL; use null to hide
    final: "assets/photos/final.jpeg",
  },

  // Photo Booth editor stickers. Drop transparent PNGs into assets/stickers/,
  // then list each one here, e.g. "assets/stickers/heart.png".
  // Names must match the files exactly. They appear under
  // Stickers → My stickers on every device.
  // (The bouquet uses the same folder; its flowers, bows and wraps
  // are listed in js/app.js — search BOUQUET_FLOWERS.)
  photoBoothStickers: [
    "assets/stickers/beanie-glasses-cat.png",
    "assets/stickers/billiard-ball-number-7.png",
    "assets/stickers/blue-button.png",
    "assets/stickers/blue-striped-bow.png",
    "assets/stickers/bow-camera.png",
    "assets/stickers/brown-satin-bow.png",
    "assets/stickers/brown-teddy-bear.png",
    "assets/stickers/cat-drinking-champagne.png",
    "assets/stickers/cat-in-shark-costume.png",
    "assets/stickers/cat-pink-bow-sticker.png",
    "assets/stickers/cream-spiral-shell.png",
    "assets/stickers/dark-red-paper-heart.png",
    "assets/stickers/flower-blue-periwinkle.png",
    "assets/stickers/flower-bright-pink-hibiscus.png",
    "assets/stickers/flower-cream-lily.png",
    "assets/stickers/flower-cream-plumeria.png",
    "assets/stickers/flower-dark-red-lily.png",
    "assets/stickers/flower-golden-lily.png",
    "assets/stickers/flower-green-gerbera-daisy-1.png",
    "assets/stickers/flower-iridescent-glass.png",
    "assets/stickers/flower-leopard-print-lily.png",
    "assets/stickers/flower-pale-pink-orchid.png",
    "assets/stickers/flower-purple-cornflower.png",
    "assets/stickers/flower-white-pink-lily.png",
    "assets/stickers/fuzzy-bear-face.png",
    "assets/stickers/green-plaid-bow.png",
    "assets/stickers/lavender-bouquet.png",
    "assets/stickers/orange-conch-shell.png",
    "assets/stickers/orange-starfish.png",
    "assets/stickers/pink-tulip-bouquet.png",
    "assets/stickers/red-electric-guitar.png",
    "assets/stickers/soft-pretzel.png",
    "assets/stickers/star-vinyl-record.png",
    "assets/stickers/sunflower-bouquet.png",
    "assets/stickers/vintage-brown-button.png",
    "assets/stickers/vinyl-record-sleeve.png",
    "assets/stickers/yellow-retro-tv-frame.png",
  ],

  // News backend (Cloudflare Worker). After deploy, paste your URL here:
  // e.g. "https://gf-news.YOUR_SUBDOMAIN.workers.dev"  (no trailing slash)
  // Leave "" to use public CORS proxies as fallback.
  newsBackendUrl: "https://gf-news.johanjoestar333.workers.dev",

  thingsIMiss: [
    {
      icon: "🤗",
      text: "Your warm hugs that make everything better.",
      extra: "",
    },
    {
      icon: "🗣️",
      text: "Hearing your voice in person, not through a screen.",
      extra: "",
    },
    {
      icon: "🌙",
      text: "Our late-night conversations face to face.",
      extra: "",
    },
    {
      icon: "☀️",
      text: "Waking up next to you in the morning.",
      extra: "",
    },
    {
      icon: "🤝",
      text: "Holding your hand while we walk together.",
      extra: "",
    },
    {
      icon: "😄",
      text: "Your laugh that fills the room with joy.",
      extra: "",
    },
    {
      icon: "✨",
      text: "The way you look at me when you're happy.",
      extra: "",
    },
    {
      icon: "🛋️",
      text: "Just being in the same room as you.",
      extra: "",
    },
    {
      icon: "💫",
      text: "Every little moment we share together.",
      extra: "",
    },
  ],

  youMadeMeBetter: [
    "One of the things I value most about you is how you've helped me grow. You've made me more patient, more mature, more understanding.",
    "You motivated me to take my goals seriously, to study harder, to actually follow through on the things I say I want.",
    "You made me want to become a better person, not because you asked me to, but because being around you made it feel worth it.",
    "You taught me to appreciate consistency and slow, quiet growth over grand gestures.",
    "And more than anything, you helped me understand a deeper kind of love, one that isn't only about big romantic moments, but about becoming someone who supports, listens, understands, and grows alongside another person.",
  ],

  littleThings: [
    "Your laugh",
    "Our stupid jokes",
    "Late-night conversations",
    "Being able to be ourselves",
    "Getting excited about seeing each other",
    "The way we miss each other",
    "Doing absolutely nothing together",
    "Talking about our future",
    "Making memories out of ordinary days",
  ],

  // ---------------------------------------------------------------------
  // ALBUM
  // ---------------------------------------------------------------------
  // Each category needs a "category" name — that's the album heading, and
  // the name shown in the "Add a photo" dropdown — and an "items" list.
  // "items" can stay empty: the category still shows up and still accepts
  // photos added live from the "Our Album" tab (those are stored separately,
  // not here). This is only for photos you want to hardcode into the code
  // itself, the way this file used to.
  //
  // To hardcode a photo, add an item to the matching category like this:
  //   {
  //     caption: "Us, somewhere ordinary",  // shown under the photo
  //     date: "08/02/2026",                 // optional, shown next to the caption
  //     img: "assets/photos/us-1.jpeg",            // path to a file in the /photos folder
  //   },
  //
  // (The photos that used to be hardcoded here — Us, Favorite Memories,
  // Foods We've Eaten, Places We've Been, Polaroid Pictures, Party Pictures —
  // were removed from /photos and from here on purpose, so they wouldn't
  // sit in the public GitHub repo. They're still on the live site as photos
  // added through "Our Album", which are stored separately from this file.)
  album: [
    { category: "Us", items: [] },
    { category: "Favorite Memories", items: [] },
    { category: "Foods We've Eaten", items: [] },
    { category: "Places We've Been", items: [] },
    { category: "Polaroid Pictures", items: [] },
    { category: "Party Pictures", items: [] },
  ],

  favorites: {
    "Favorite food": "Churrasco/ Sushi",
    "Favorite color": "Baby Pink/ Green",
    "Favorite song": "Use Somebody/ Tometown Glory",
    "Favorite soocer team": "Inter/ Botafogo",
    "Favorite hour": "Golden/ Blue",
    "Favorite weekday": "Wednsday/ Thursday",
  },

  funFacts: [
    'Who said "I love you" first: Thommy',
    "Who is more stubborn: Fiel",
    "Who takes longer to shower: Thommy",
    "Who is more likely to fall asleep first: Thommy",
    "Who eats more: Fiel",
    "Who has the better tan: Thommy",
    "Who is more dramatic: Fiel",
    "Who misses the other person more: Thommy",
  ],

  firsts: [
    {
      title: "First time we met",
      date: "May 2, 2026",
      desc: "At 3 a.m. in front of a closed mall. After the party, I picked you and Mary up with Lucca. My first impression was that you were beautiful—but also a little shy.",
    },
    {
      title: "First conversation",
      date: "May 2, 2026",
      desc: "At the apartment in Novo Campeche, just the two of us on the couch, talking about all kinds of things. You were smart, funny, and kind. I was nervous because you didn’t laugh much at my jokes.",
    },
    {
      title: "First date",
      date: "May 30, 2026",
      desc: "Our first real date unfolded around Lagoa da Conceição. I had planned the entire day just for us. We began at Meskla Café, sharing warm pão de queijo, rich coffee, and soft banana bread—the food was wonderful, but being across from you made it even better.\n\nI had secretly reserved a table at a mysterious restaurant later that evening, wanting to surprise you. Since we still had hours ahead of us, we simply lingered together—talking, laughing softly, savoring each other’s company, and sharing an ice cream as the afternoon drifted by.\n\nWhen the time finally came, we stepped into Bistro dos Sete Ais, a lovely restaurant inside an elegant hotel. The dinner was beautiful, the atmosphere warm, and the whole evening felt like the perfect beginning of something special.",
    },
    {
      title: "First photo together",
      date: "June 22, 2026",
      desc: "It was at your last open bar here in Florianópolis, just before you left for your exchange program. Our very first photo is of us kissing at Toma Tudo; number 257 on your digital camera. A simple moment that somehow became one of the most special ones.",
    },
    {
      title: "First trip",
      date: "August 12",
      desc: "The day before you left, we spontaneously booked an Airbnb.. our first time doing something like that together. It wasn’t a big trip, just a quiet place outside our usual home, but it felt special. We spent the time fully present with each other, laughing, talking without holding anything back, and connecting on a deeper level than ever before. That was also the day we said “I love you” to each other for the first time, a simple, honest moment that made everything feel even more real.",
    },
    {
      title: "First time we had to be apart",
      date: "August 14, 2026",
      desc: "Besides the short trips to Lajeado and Rio to visit our families, the real separation came the day you left for your exchange program. I dropped you off at the airport knowing I wouldn’t see you for months. Watching you walk away filled me with a deep sadness, the kind that sits heavy in your chest... but at the same time, I felt genuinely happy that you were about to begin a new chapter of your life.\n\nThe distance hurts. Being apart from you is hard in ways I can’t always put into words. But my love for you has no distance. It stays with me every day, steady and certain, no matter how many kilometers are between us.",
    },
  ],

  openWhen: [
    {
      icon: "💚",
      label: "Open when you're sad",
      title: "Open When You're Sad",
      text: "Hey. I know I can't be there to hug you right now, and I wish I could change that. But please remember that whatever you're going through, you don't have to carry it alone. Take a breath, give yourself some time, and remember that there's someone out here who cares about you more than you probably realize. And if none of that works... come here. Big virtual hug. ♥",
    },
    {
      icon: "💚",
      label: "Open when you're missing me",
      title: "Open When You're Missing Me",
      text: "I miss you too. Probably more than I know how to explain. But instead of thinking about how far apart we are, think about everything we're going to do when we're together again. Every hug, every conversation, every stupid little moment. We're getting closer to that moment every day.",
    },
    {
      icon: "💚",
      label: "Open when you're happy",
      title: "Open When You're Happy",
      text: "I hope you stay in this moment for a while. Seeing you happy is one of my favorite things in the world. Whatever made you smile today, I hope you get a thousand more reasons to smile tomorrow.",
    },
    {
      icon: "💚",
      label: "Open when you need motivation",
      title: "Open When You Need Motivation",
      text: "Remember who you are and how much you're capable of. You don't have to have everything figured out today. Just take the next step. I'm proud of you, and I'll always be cheering for you.",
    },
    {
      icon: "💚",
      label: "Open when you're stressed",
      title: "Open When You're Stressed",
      text: "Take a breath. Whatever it is, it doesn't all have to be solved right now. Do one small thing, then the next one. I'm not there to make you tea, but pretend I did.",
    },
    {
      icon: "💚",
      label: "Open when you can't sleep",
      title: "Open When You Can't Sleep",
      text: "Close your eyes and imagine I'm right there next to you, the way we've fallen asleep before. If that doesn't work, just give me a call and we can fall a sleep on the phone.",
    },
    {
      icon: "💚",
      label: "Open when you're angry",
      title: "Open When You're Angry",
      text: "Whatever it is, feel it fully, you're allowed to. I'm here when you're ready to talk, and I'm not going anywhere in the meantime.",
    },
    {
      icon: "💚",
      label: "Open when you need a hug",
      title: "Open When You Need a Hug",
      text: "Here’s a hug, sent straight from me to you. Go grab Don, spray a little of my perfume on him, and hold him tight. Feel my love through our little one. I’m right there with you.",
    },
    {
      icon: "💚",
      label: "Open when you're feeling insecure",
      title: "Open When You're Feeling Insecure",
      text: "Whatever that voice in your head is telling you right now, it’s wrong. I see you clearly, and what I see is someone kind, beautiful, and deeply worth loving. I’m endlessly glad I found you, and nothing you feel insecure about could ever change that.",
    },
    {
      icon: "💚",
      label: "Open when you need to smile",
      title: "Open When You Need to Smile",
      text: "Think about the last time we laughed so hard neither of us could breathe. That's my favorite version of you. Go find a little bit of that today.",
    },
    {
      icon: "💚",
      label: "Open when you want to remember us",
      title: "Open When You Want to Remember Us",
      text: "We've built something real, one ordinary day at a time. That's worth remembering, especially on the days it feels far away.",
    },
    {
      icon: "💚",
      label: "Open when you just want to hear from me",
      title: "Open When You Just Want to Hear From Me",
      text: "Hey, it’s me. I know you can’t hear my voice right now, but I want you to feel like I’m right here. I miss you, I think about you constantly, and I love everything about you... your laugh, your little expressions, the way the world feels safer with you in it. Even from far away, you’re still my favorite person. Consider this me saying hi, holding your hand, and reminding you that you’re deeply loved.",
    },
    {
      icon: "💚",
      label: "Open when you're overwhelmed",
      title: "Open When You're Overwhelmed",
      text: "When your head feels like it has forty tabs open, picture us on the couch after a long day, not talking about any of it, just existing side by side. That's really the only cure I have for overwhelm, us, together, no deadline attached. You don't have to hold today by yourself, even from here I'm holding some of it with you.",
    },
    {
      icon: "💚",
      label: "Open when you feel like giving up",
      title: "Open When You Feel Like Giving Up",
      text: "I've watched you push through things that would've stopped most people, that's part of why I fell for you. Whatever this is, we've survived harder, an ocean between us and counting. You're not doing this alone even though it might feel that way right now. Finish this one for both of us, and I'll be right here when you do.",
    },
    {
      icon: "💚",
      label: "Open when you did something you're proud of",
      title: "Open When You Did Something You're Proud Of",
      text: "I want to be the first person you tell when something good happens, even from this far away. So tell me. Let me be loud about how proud I am of you, because I am, more than you probably let yourself believe. Whatever you did, it's ours to celebrate too, we're a team even when we're on different continents.",
    },
    {
      icon: "💚",
      label: "Open when you're homesick",
      title: "Open When You're Homesick",
      text: "I know you're missing home, and I need you to know I'm part of that ache too, not just Floripa, not just your bed with Don curled up at the end of it, but me. The version of home you're missing is really just us being in the same room. Close your eyes and go there for a second, I'll meet you. This distance is temporary, what we're building isn't.",
    },
    {
      icon: "💚",
      label: "Open when you need a distraction",
      title: "Open When You Need a Distraction",
      text: "Put this down for a bit, but not without me, call me while you do it and put me on speaker. Go for a walk, play a song you love, whatever it is, let me be background noise to it. I'd rather be a small part of your distraction than no part of your day at all.",
    },
    {
      icon: "💚",
      label: "Open when it's a bad day",
      title: "Open When It's a Bad Day",
      text: "Today was hard, and I can't fix that from this far away, but I can tell you this: it's going to be okay. You don't have to carry today by yourself, I'm here, even if here is just a call away. We've gotten through every bad day so far together, and this one is no different. Call me, let me be the person you land on.",
    },
  ],

  // Footer ♥ secret (click the footer heart 5 times)
  secretMessage:
    "There's actually one more thing I wanted you to know... No matter how many pages I make, pictures I add, or words I write, none of them are enough to explain how happy I am that I met you.(Unfinished)",

  // Header "us" secret card — click the brand 9 times to open.
  // Edit title / body below (EN + PT). clicks: how many taps needed.
  brandSecret: {
    clicks: 9,
    eyebrow: "You found it 🔓",
    eyebrowPt: "Você encontrou 🔓",
    title: "A little secret",
    titlePt: "Um segredinho",
    // Write your secret message here ↓
    body: "For you, Eduarda.\n\nI did all of this for you.\n\nMaybe, looking from the outside, it seems like just a website. A few pages, some photos, songs, messages, inside jokes, and a few things I coded. But to me, it is so much more than that.\n\nI wanted to find a way to be just a little bit closer to you during these four months where life has put some miles between us. I wanted to create a place that was ours. A place where I could keep the things I feel, the memories we already share, the things I miss about you, and, most of all, everything I still want to experience by your side.\n\nI didn't do this because I thought a website could replace being with you. It can't. No screen can replace holding you, hearing your voice in person, holding your hand, laughing at our silly things, or simply being next to you without needing to do anything at all.\n\nBut I wanted you to have a place to come back to whenever the distance felt like too much.\n\nA place to remind you of us.\n\nI made this place because you are far too important to me to just spend four months apart and let the distance speak louder than what I feel.\n\nIf I could, I would be there right now.\n\nBut since I can't just yet, I left a little piece of me here.\n\nFor you.\n\nWhile I count down the days until I can trade this screen for a hug.\n\nI hope you like it.\n\nAnd above all, I hope this is just the first of many places, memories, and stories that we will still build together.\n\nUntil then, even from far away, I want you to never forget:\n\nThere is someone here on the other side of the map thinking about you, missing you, and wanting so much to live all of this by your side.\n\nWith all the love I could turn into words, photos, songs, and code,\n\nThommy. ♥",
    bodyPt:
      "Para você, Eduarda.\n\nEu fiz isso tudo para você.\n\nTalvez, olhando de fora, pareça apenas um site. Algumas páginas, algumas fotos, músicas, mensagens, brincadeiras e algumas coisas que eu programei. Mas, para mim, é muito mais do que isso.\n\nEu queria encontrar uma maneira de estar um pouquinho mais perto de você nesses quatro meses em que a vida colocou alguns quilômetros entre nós. Eu queria criar um lugar que fosse nosso. Um lugar onde eu pudesse guardar as coisas que sinto, as memórias que já temos, as coisas que sinto falta em você e, principalmente, todas as coisas que ainda quero viver ao seu lado.\n\nEu não fiz isso porque achei que um site poderia substituir estar com você. Não pode. Nenhuma tela consegue substituir um abraço seu, ouvir sua voz pessoalmente, segurar sua mão, rir das nossas coisas bobas ou simplesmente ficar do seu lado sem precisar fazer absolutamente nada.\n\nMas eu queria que, quando a saudade apertasse, você tivesse um lugar para voltar.\n\nUm lugar que lembrasse você de nós.\n\nEu fiz esse lugar porque você é importante demais para mim para simplesmente passar quatro meses longe e deixar a distância falar mais alto que aquilo que sinto.\n\nSe eu pudesse, estaria aí agora.\n\nMas como ainda não posso, deixei um pedacinho de mim aqui.\n\nPara você.\n\nEnquanto eu conto os dias para poder trocar essa tela por um abraço.\n\nEu espero que você goste.\n\nE espero, principalmente, que esse seja apenas o primeiro de muitos lugares, memórias e histórias que ainda vamos construir juntos.\n\nAté lá, mesmo estando longe, eu quero que você nunca esqueça:\n\nExiste alguém aqui do outro lado do mapa pensando em você, sentindo sua falta e querendo muito viver tudo isso ao seu lado.\n\nCom todo o carinho que eu consegui transformar em palavras, fotos, músicas e código,\n\nThommy. ♥",
  },

  // ---- Firebase — live sync ----
  // Powers every shared feature (Bucket List, Movies, Music, Memories,
  // Calendar, Day Cards, Bouquet, moods, Photo Booth signaling, ...).
  // With no valid config the site still works, but each device only
  // remembers its own changes.
  // Leave the __PLACEHOLDERS__ as they are: the deploy fills them in from
  // GitHub secrets. Setup walkthrough: docs/firebase-setup.md.
  firebase: {
    apiKey: "__FIREBASE_API_KEY__",
    authDomain: "__FIREBASE_AUTH_DOMAIN__",
    projectId: "__FIREBASE_PROJECT_ID__",
    storageBucket: "__FIREBASE_STORAGE_BUCKET__",
    messagingSenderId: "__FIREBASE_MESSAGING_SENDER_ID__",
    appId: "__FIREBASE_APP_ID__",
  },

  // ---- TURN relay (Photo Booth across different networks) ----
  // The Photo Booth uses WebRTC. Two people on the same wifi connect
  // directly, but different networks (e.g. wifi vs mobile data) need a
  // TURN relay. Free Metered account, no card needed. Without it the
  // booth only works when you are on the same network.
  // Leave the placeholders; the deploy injects them. Setup:
  // docs/turn-setup.md.
  meteredTurn: {
    domain: "__METERED_TURN_DOMAIN__",
    apiKey: "__METERED_TURN_API_KEY__",
  },

  // ---- Cloudinary — "Our Memories" photo uploads ----
  // Photos are uploaded to Cloudinary's free tier; only the resulting
  // URL is saved in Firestore. The unsigned upload preset is designed to
  // sit in client-side code. Setup: docs/cloudinary-setup.md.
  cloudinary: {
    cloudName: "__CLOUDINARY_CLOUD_NAME__",
    uploadPreset: "__CLOUDINARY_UPLOAD_PRESET__",
  },

  // ---- TMDB (The Movie Database) — movie search for Movie Nights ----
  // Optional and free. Without it you can still add movies by typing the
  // title. Get the "API Read Access Token" from your TMDB account
  // (Settings > API) and store it as the GitHub secret TMDB_ACCESS_TOKEN.
  tmdb: {
    accessToken: "__TMDB_ACCESS_TOKEN__",
  },

  // Movies starting list (optional). Like bucketList below, these only
  // get loaded once, the very first time the site connects to a fresh/
  // empty Firestore database. Leave empty and just use the search box
  // on the live site instead — this is only here if you want to
  // pre-seed a couple of movies.
  movieList: [
    // { title: "The Princess Bride", year: "1987", status: "towatch" },
  ],

  // Bucket list starting items. These only get loaded once, the very
  // first time the site connects to a fresh/empty Firestore database
  // (or on any device before Firebase is configured at all).
  // After that, everyone's add/check/edit/delete actions on the live
  // site are what's shown — not this array.
  bucketList: [
    { text: "Watch the sunset from a rooftop together", done: false },
    { text: "Cook a full dinner together, start to finish", done: false },
    {
      text: "Take a spontaneous weekend trip, no real plan",
      done: false,
    },
    { text: "Go somewhere neither of us has ever been", done: false },
  ],

  /* ================================================================
     MUSIC / PLAYLISTS
     ---------------------------------------------------------------
     HOW TO EDIT:
     1. Each object in `playlists` is one category button (e.g. "Our Songs").
     2. `id`          — unique key, don't change once set.
     3. `label`       — English name shown on the button.
     4. `labelPt`     — Portuguese name (used when language is PT).
     5. `description` — short English note under the track list.
     6. `descriptionPt` — Portuguese version of that note.
     7. `songs`       — array of tracks in this playlist.

     HOW TO ADD A SONG (IMPORTANT — only the ID, not the full link):
       { title: "Song Name",
         artist: "Artist Name",
         youtubeId: "BW9Fzwuf43c",   // <-- ONLY this part
         description: "Why this song matters / when to play it",
         descriptionPt: "Por que essa música importa / quando tocar" }

     From a link like:
       https://youtu.be/BW9Fzwuf43c?si=LXWukgoV6rc_x8j0
       https://www.youtube.com/watch?v=BW9Fzwuf43c
     the youtubeId is:  BW9Fzwuf43c
     (everything after youtu.be/ or v=  — stop before ? or &)

     You can also paste a full YouTube URL in youtubeId — the site
     will try to extract the ID automatically.

     TROUBLESHOOTING Error 153 / blank player:
     - Do NOT open index.html by double-clicking (file://).
       YouTube blocks many embeds on local files.
       Fix: host the site online, OR run a tiny local server, e.g.:
         cd folder-with-index.html
         python3 -m http.server 8000
       then open http://localhost:8000
     - Some videos have embedding disabled by the uploader — those
       will never play in an iframe. Use a different upload of the song.

     HOW TO ADD A NEW PLAYLIST:
       Copy an existing playlist object, give it a new id + labels,
       and fill in your songs array. It will appear as a new button
       automatically.
     ================================================================ */
  playlists: [
    {
      id: "our-playlist",
      label: "Our Playlist",
      labelPt: "Nossa Playlist",
      description: "The shared playlist — everything we both like.",
      descriptionPt: "A playlist compartilhada — tudo que os dois gostam.",
      songs: [],
    },
    {
      id: "study",
      label: "Study Playlist",
      labelPt: "Playlist de Estudo",
      description: "Focus mode — softer tracks for studying.",
      descriptionPt: "Modo foco — músicas mais suaves para estudar.",
      songs: [
        {
          title: "Lofi Hip-hop radio",
          artist: "Lofi Girl",
          youtubeId: "https://www.youtube.com/watch?v=rFZHOHl-L8A",
          description: "Soft focus background.",
          descriptionPt: "Fundo suave para concentração.",
        },
        {
          title: "Lock in music",
          artist: "Lucent",
          youtubeId: "https://www.youtube.com/watch?v=1mAMpmFvceY",
          description: "Background songs to lockin.",
          descriptionPt: "Musica de fundo para surper foco.",
        },
        {
          title: "Hyper Focus Music",
          artist: "Pure Grit Studio",
          youtubeId: "https://www.youtube.com/watch?v=BIiqeNqYTI4",
          description: "Background songs for hyper focus.",
          descriptionPt: "Músicas de fundo para foco máximo.",
        },
        {
          title: "Productivity Music Mix",
          artist: "Productivity FM",
          youtubeId: "https://www.youtube.com/watch?v=eL5rWVPguoc",
          description: "Background songs to be productive.",
          descriptionPt: "Músicas de fundo para ser produtivo.",
        },
      ],
    },
    {
      id: "listen-when",
      label: "Listen When…",
      labelPt: "Ouça Quando…",
      description: "Songs for specific moods and moments.",
      descriptionPt: "Músicas para humores e momentos específicos.",
      songs: [],
    },
    {
      id: "thommy-favs",
      label: "Thommy's Favorites",
      labelPt: "Favoritas do Thommy",
      description: "His go-to songs.",
      descriptionPt: "As músicas preferidas dele.",
      songs: [
        {
          title: "Hometown Glory",
          artist: "Adele",
          youtubeId: "PDZcqBgCS74",
          description: "One of his favorites.",
          descriptionPt: "Uma das favoritas dele.",
        },
        {
          title: "Have you ever seen the rain",
          artist: "Creedence Clearwater Revival",
          youtubeId: "https://www.youtube.com/watch?v=H75lMWMHmVY",
          description: "Favorite childhood song.",
          descriptionPt: "Musica favorita da infância.",
        },
        {
          title: "Heaven Passing Through",
          artist: "Turnpike Troubadours",
          youtubeId: "https://www.youtube.com/watch?v=5yypTkkxJXc",
          description: "Favorite country song.",
          descriptionPt: "Musica favorita country.",
        },
        {
          title: "Texas Sun",
          artist: "Khruangbin ft. Leon Bridges",
          youtubeId: "https://www.youtube.com/watch?v=BIMh-kVfwxE",
          description: "Favorite childhood song.",
          descriptionPt: "Musica favorita da infância.",
        },
        {
          title: "Whats Love",
          artist: "Nemzzz ft. Centra Cee",
          youtubeId: "https://www.youtube.com/watch?v=R-3DRTQz4sk",
          description: "Favorite Nemzzz song.",
          descriptionPt: "Musica favorita do Nemzzz.",
        },
      ],
    },
    {
      id: "eduarda-favs",
      label: "Eduarda's Favorites",
      labelPt: "Favoritas da Eduarda",
      description: "Her go-to songs.",
      descriptionPt: "As músicas preferidas dela.",
      songs: [
        {
          title: "Use Somebody",
          artist: "https://www.youtube.com/watch?v=tIC_fdz7mXA",
          youtubeId: "gL55LKd7Ln0",
          description: "One of her favorites.",
          descriptionPt: "Uma das favoritas dela.",
        },
        {
          title: "Poesia Acustica 9",
          artist: "Pineapple Storm",
          youtubeId: "https://www.youtube.com/watch?v=DXifhTW_ZAg",
          description: "Her favorite poesia acustica.",
          descriptionPt: "Poesia acustica favorita dela.",
        },
        {
          title: "Goodbyes",
          artist: "Post Malone",
          youtubeId: "https://www.youtube.com/watch?v=O5amIdSD8eI",
          description: "Her favorite Post Malone song.",
          descriptionPt: "Música favorita do Post Malone dela.",
        },
        {
          title: "Ilusao",
          artist: "Felipe Ret",
          youtubeId: "https://www.youtube.com/watch?v=bEnykpistAs",
          description: "One of her favorite songs from Felipe Ret.",
          descriptionPt: "Uma das músicas favoritas do Felipe Ret dela.",
        },
        {
          title: "Set do GM 6.0",
          artist: "Crias de SP",
          youtubeId: "https://www.youtube.com/watch?v=Lu_-odNj5iU",
          description: "Her favorite set de SP.",
          descriptionPt: "Set de SP favorito dela.",
        },
      ],
    },
  ],
};
