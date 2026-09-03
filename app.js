      /* ================================================================
   CONFIG — edit everything here. Nothing below this object should
   need to change for basic personalization.
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
          hero: "photos/hero.jpeg", // e.g. "photos/hero.jpg" — replace null with a path/URL to enable
          final: "photos/final.jpeg",
        },

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

        album: [
          {
            category: "Us",
            items: [
              {
                caption: "Us, somewhere ordinary",
                date: "08/02/2026",
                img: "photos/us-1.jpeg",
              },
              {
                caption: "That afternoon we didn't want to end",
                date: "08/14/2026",
                img: "photos/us-2.jpeg",
              },
              {
                caption: "Us, mid-phonecall",
                date: "08/17/2026",
                img: "photos/us-3.jpeg",
              },
              {
                caption: "Us, kissing",
                date: "06/22/2026",
                img: "photos/us-4.jpeg",
              },
            ],
          },
          {
            category: "Favorite Memories",
            items: [
              {
                caption: "Our last date togheter",
                date: "08/14/2026",
                img: "photos/memories-1.jpeg",
              },
              {
                caption: "A very good day",
                date: "08/10/2026",
                img: "photos/memories-2.jpeg",
              },
            ],
          },
          {
            category: "Foods We've Eaten",
            items: [
              {
                caption: "Restaurant at Sao Jose",
                date: "05/18/2026",
                img: "photos/foods-1.jpeg",
              },
              {
                caption: "Restaurant at Lagoa",
                date: "05/18/2026",
                img: "photos/foods-2.jpeg",
              },
              {
                caption: "Restaurant at Santa Monica",
                date: "07/08/2026",
                img: "photos/foods-3.jpeg",
              },
              {
                caption: "Restaurant at Rio Tavarez",
                date: "08/10/2026",
                img: "photos/foods-4.jpeg",
              },
              {
                caption: "Starbucks do Iguatemi",
                date: "07/09/2026",
                img: "photos/foods-5.jpeg",
              },
              {
                caption: "Match And Hotchocolate at PB",
                date: "07/31/2026",
                img: "photos/foods-6.jpeg",
              },
              {
                caption: "First Homemade Meal",
                date: "08/14/2026",
                img: "photos/foods-7.jpeg",
              },
            ],
          },
          {
            category: "Places We've Been",
            items: [
              {
                caption: "Miami Red String Teory",
                date: "01/10/2025",
                img: "photos/places-1.jpeg",
              },
              {
                caption: "That one Airbnb",
                date: "08/14/2026",
                img: "photos/places-2.jpeg",
              },
            ],
          },
          {
            category: "Polaroid Pictures",
            items: [
              {
                caption: "Polaroid one",
                date: "08/07/2026",
                img: "photos/polaroid-1.jpeg",
              },
              {
                caption: "Polaroid two",
                date: "08/07/2026",
                img: "photos/polaroid-2.jpeg",
              },
              {
                caption: "Polaroid three",
                date: "08/07/2026",
                img: "photos/polaroid-3.jpeg",
              },
              {
                caption: "Polaroid four",
                date: "08/12/2026",
                img: "photos/polaroid-4.jpeg",
              },
              {
                caption: "Polaroid two",
                date: "08/13/2026",
                img: "photos/polaroid-5.jpeg",
              },
            ],
          },
          {
            category: "Party Pictures",
            items: [
              {
                caption: "Toma Tudo",
                date: "06/22/2026",
                img: "photos/party-1.jpeg",
              },
              {
                caption: "Toma Tudo",
                date: "06/22/2026",
                img: "photos/party-2.jpeg",
              },
              {
                caption: "Spartano",
                date: "08/10/2026",
                img: "photos/party-3.jpeg",
              },
              {
                caption: "Spartano",
                date: "08/10/2026",
                img: "photos/party-4.jpeg",
              },
              {
                caption: "Spartano",
                date: "08/10/2026",
                img: "photos/party-5.jpeg",
              },
            ],
          },
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

        // ---- Firebase (only for the Bucket List's cross-device sync) ----
        // Leave apiKey as "YOUR_API_KEY" and the bucket list still works, but
        // only remembers changes on the current device/browser (no syncing).
        // To turn on syncing between both of your phones/computers:
        //   1. Go to https://console.firebase.google.com and create a free project.
        //   2. In the project, click "Build > Firestore Database" and create a database
        //      (choose "Start in test mode" for a simple personal site like this).
        //   3. Click the gear icon > Project settings > scroll to "Your apps" >
        //      click the </> (web) icon > register an app (no hosting needed) >
        //      copy the firebaseConfig object it gives you into the object below.
        // Full walkthrough with screenshots: see FIREBASE_SETUP.md in this folder.
        firebase: {
          apiKey: "__FIREBASE_API_KEY__",
          authDomain: "__FIREBASE_AUTH_DOMAIN__",
          projectId: "__FIREBASE_PROJECT_ID__",
          storageBucket: "__FIREBASE_STORAGE_BUCKET__",
          messagingSenderId: "__FIREBASE_MESSAGING_SENDER_ID__",
          appId: "__FIREBASE_APP_ID__",
        },

        // ---- Cloudinary (for the "Our Memories" live photo uploads) ----
        // Firebase Storage now requires the paid Blaze plan even for tiny sites,
        // so photo uploads go to Cloudinary's free tier instead — only the
        // resulting image URL gets saved in Firestore (which is just text, no
        // size problem there). Unlike the Firebase keys above, these two values
        // are NOT secret and don't need GitHub Actions/secrets treatment — an
        // "unsigned upload preset" is specifically designed to be safe sitting
        // in public client-side code. See MEMORIES_SETUP.md for the 5-minute
        // setup (free account, no credit card).
        cloudinary: {
          cloudName: "__CLOUDINARY_CLOUD_NAME__",
          uploadPreset: "__CLOUDINARY_UPLOAD_PRESET__",
        },

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
            descriptionPt:
              "A playlist compartilhada — tudo que os dois gostam.",
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

      /* ================================================================
   LANGUAGE / TRANSLATION
   ---------------------------------------------------------------
   The site supports English (EN) and Portuguese (PT).
   Change the text in CONFIG as usual. If you change/add text that
   should also have a Portuguese version, add it to PT_TRANSLATIONS.
   The selected language is saved in the browser.
   ================================================================ */
      const PT_TRANSLATIONS = {
        // Navigation / buttons / section headings
        "Our Story": "Nossa História",
        "Our Album": "Nosso Álbum",
        Us: "Nós",
        "Open When...": "Abra Quando...",
        "Bucket List": "Lista de Desejos",
        Quizzes: "Quizzes",
        Music: "Músicas",
        "Our Games": "Nossos Jogos",
        "A little collection, just for us": "Uma pequena coleção, só nossa",
        "Five decks, five different feelings. Pick one and draw a card.":
          "Cinco baralhos, cinco sensações diferentes. Escolha um e puxe uma carta.",
        "🎲 Random": "🎲 Aleatório",
        "♡ My Favorites": "♡ Meus Favoritos",
        "My Favorites": "Meus Favoritos",
        "💌 Card of the Day": "💌 Carta do Dia",
        Categories: "Categorias",
        Rounds: "Rodadas",
        "∞ Endless": "∞ Sem Fim",
        "All categories": "Todas as categorias",
        "Select one or more categories": "Selecione uma ou mais categorias",
        "Start Game": "Começar Jogo",
        "← Back to Our Games": "← Voltar aos Nossos Jogos",
        "✕ Exit": "✕ Sair",
        Skip: "Pular",
        "Next Card →": "Próxima Carta →",
        "End game & see summary": "Terminar e ver o resumo",
        "Play Again": "Jogar de Novo",
        "Our Game Stats": "Estatísticas dos Nossos Jogos",
        "Total cards played": "Total de cartas jogadas",
        "No favorites yet — tap ♡ on any card to save it here.":
          "Ainda sem favoritos — toque em ♡ em qualquer carta para guardá-la aqui.",
        "Nicely played ♥": "Muito bem jogado ♥",
        "Cards played": "Cartas jogadas",
        Matches: "Combinações",
        Disasters: "Desastres",
        "Prediction accuracy": "Precisão da previsão",
        "🔮 Predict my answer first": "🔮 Prever minha resposta primeiro",
        "Did the prediction match?": "A previsão bateu?",
        "Both answered — did you match?": "Os dois responderam — vocês combinaram?",
        "🎯 Match!": "🎯 Combinou!",
        "😂 Disaster!": "😂 Desastre!",
        "cards": "cartas",
        "Really Know Us": "Conhecer de Verdade",
        Deep: "Profundo",
        "Meaningful questions about memories, values, and each other.":
          "Perguntas significativas sobre memórias, valores e sobre vocês dois.",
        "You or Me?": "Você ou Eu?",
        "Would You Rather": "Prefere Que",
        "Impossible choices, funny and romantic. Discuss, then reveal.":
          "Escolhas impossíveis, engraçadas e românticas. Conversem e depois revelem.",
        "After Dark": "Depois do Anoitecer",
        Flirty: "Flerte",
        "Playful, romantic, and a little bold. Skip anything, anytime.":
          "Brincalhão, romântico e um pouco ousado. Pule qualquer carta, a qualquer momento.",
        "Couple Chaos": "Caos do Casal",
        Chaos: "Caos",
        "Ridiculous scenarios. Answer secretly, then see if you match.":
          "Cenários ridículos. Respondam em segredo e vejam se combinam.",
        Someday: "Um Dia",
        Future: "Futuro",
        "Dream about the life you're building together.":
          "Sonhem com a vida que estão construindo juntos.",
        "Press play": "Aperte o play",
        "Songs for every mood — ours, yours, and everything in between.":
          "Músicas para cada humor — nossas, suas e tudo no meio.",
        "Now playing": "Tocando agora",
        "No songs in this playlist yet.":
          "Ainda não há músicas nesta playlist.",
        "🟢 Synced — songs save for both of you.":
          "🟢 Sincronizado — as músicas ficam salvas para nós dois.",
        "🟡 Not synced yet — songs only stay on this device.":
          "🟡 Ainda não sincronizado — as músicas ficam apenas neste dispositivo.",
        "Add a song ♥": "Adicionar música ♥",
        "Add song ♥": "Adicionar ♥",

        "Test your memory": "Teste sua memória",
        "How well do you really know us? Pick a quiz and find out.":
          "Quão bem você realmente nos conhece? Escolha um quiz e descubra.",
        "Eduarda Quiz": "Quiz da Eduarda",
        "Thommy Quiz": "Quiz do Thommy",
        "Us Together": "Nós Dois",
        "15 questions about her": "15 perguntas sobre ela",
        "15 questions about him": "15 perguntas sobre ele",
        "15 questions about us": "15 perguntas sobre nós",
        "← Back to quizzes": "← Voltar aos quizzes",
        "Next →": "Próxima →",
        "Try again ♥": "Tentar de novo ♥",
        "← All quizzes": "← Todos os quizzes",
        Results: "Resultado",
        "Final score": "Resultado final",
        "Explore Our Story ♥": "Explore Nossa História ♥",
        "Today ♥": "Hoje ♥",
        "Explore Our Story": "Explore Nossa História",
        "Right now": "Agora",
        Today: "Hoje",
        "Tap to open": "Toque para abrir",
        "Tap to close": "Toque para fechar",
        "A little snapshot of us — news, a daily quote, mood, plans & notes.":
          "Um resumo de nós — notícias, frase do dia, mood, planos e notas.",
        "A little snapshot of us — news, mood, plans & notes.":
          "Um resumo de nós — notícias, frase do dia, mood, planos e notas.",
        "World news today": "Notícias do dia",
        "On this day": "Nesse dia",
        "Quote of the day": "Frase do dia",
        "Loading quote…": "A carregar a frase…",
        "Unsave": "Tirar dos guardados",
        "Save": "Guardar",
        "Loading headlines…": "A carregar manchetes…",
        "Our mood": "Nosso humor",
        "On the calendar": "No calendário",
        "Latest day card": "Último cartão",
        days: "dias",
        hrs: "hrs",
        min: "min",
        "Pick a mood": "Escolhe um humor",
        "Together, in numbers": "Juntos, em números",
        "How Long We've Been Us": "Há Quanto Tempo Estamos Juntos",
        "The wait is almost over": "A espera está quase acabando",
        "Until I See You Again": "Até Eu Te Ver de Novo",
        "For now, though": "Por enquanto",
        "Where We Are": "Onde Estamos",
        "Different places. Same moon. Same love. Just counting the days until we're together again.":
          "Lugares diferentes. A mesma lua. O mesmo amor. Só contando os dias até estarmos juntos de novo.",
        "No more distance. Just us now. ♥":
          "Sem mais distância. Agora somos só nós. ♥",
        "Together ♥": "Juntos ♥",
        "Right now": "Agora",
        "What the Sky Looks Like Where We Are": "Como Está o Céu Onde Estamos",
        "Look up": "Olhe para cima",
        "The Same Moon": "A Mesma Lua",
        "No matter how far apart we are, there's something comforting about knowing we're still under the same moon.":
          "Não importa quão longe estejamos, há algo reconfortante em saber que ainda estamos sob a mesma lua.",
        "Small things, mostly": "Pequenas coisas, principalmente",
        "Things I Miss About You": "Coisas de Que Sinto Falta em Você",
        "There are so many little things I miss. Some are big. Most are actually incredibly simple.":
          "Há tantas coisinhas de que sinto falta. Algumas são grandes. A maioria, na verdade, é bem simples.",
        "The real reason": "O verdadeiro motivo",
        "You Made Me Better": "Você Me Tornou uma Pessoa Melhor",
        "Just because": "Só porque sim",
        "Little Things I Love About Us":
          "Pequenas Coisas que Amo na Nossa História",
        "Click this ♥": "Clique aqui ♥",
        "Just a little reminder that I love you. 💚":
          "Só um pequeno lembrete de que eu te amo. 💚",
        "A little collection": "Um pequeno cantinho",
        "Our Little Collection": "Nossa Pequena Coleção",
        "Some of my favorite memories of us.":
          "Algumas das minhas lembranças favoritas de nós.",
        "According to us": "Segundo nós",
        "Us, According to Us": "Nós, Segundo Nós",
        "Our Favorites": "Nossos Favoritos",
        "Fun Facts About Us": "Curiosidades Sobre Nós",
        "Our Firsts": "Nossos Primeiros",
        "For when I can't be there":
          "Para quando eu não puder estar aí com você",
        "Open When You Need Me": "Abra Quando Precisar de Mim",
        "For the moments when I can't physically be there, but I still want to be there for you.":
          "Para aqueles momentos em que eu não puder estar aí de verdade, mas ainda quiser estar pertinho de você.",
        "Everything we still want to do": "Tudo que ainda queremos fazer",
        "Our Bucket List": "Nossa Lista de Coisas que Queremos Fazer",
        "A running list of the places we want to see, the things we want to try, and the little (and big) adventures we're saving for each other.":
          "Uma lista dos lugares que ainda queremos conhecer, das coisas que queremos experimentar e das pequenas (e grandes) aventuras que ainda temos pela frente.",
        "Add something to the list...": "Adicione alguma coisa à lista...",
        "Add ♥": "Adicionar ♥",
        "Made with love, just for you.": "Feito com carinho, só para você.",
        Years: "Anos",
        Months: "Meses",
        Days: "Dias",
        Hours: "Horas",
        Minutes: "Minutos",
        Seconds: "Segundos",
        "And somehow, every day with you still feels like something I want more of.":
          "E, de algum jeito, cada dia com você ainda me faz querer viver mais um pouquinho da vida ao seu lado.",
        "loading sky...": "carregando o céu...",
        "Weather unavailable right now.":
          "Não foi possível carregar o clima agora.",
        "Clear skies": "Céu limpo",
        Cloudy: "Nublado",
        Rainy: "Chuvoso",
        Snowy: "Nevando",
        Thunderstorms: "Tempestades",
        Foggy: "Nebuloso",
        "Clear night": "Noite limpa",
        "Feels like": "Sensação de",
        "New Moon": "Lua Nova",
        "Waxing Crescent": "Lua Crescente",
        "First Quarter": "Lua Quarto Crescente",
        "Waxing Gibbous": "Gibosa Crescente",
        "Full Moon": "Lua Cheia",
        "Waning Gibbous": "Gibosa Minguante",
        "Last Quarter": "Quarto Minguante",
        "Waning Crescent": "Lua Minguante",
        illuminated: "iluminada",
        "You found it. ": "Você encontrou. ",
        "Nothing here yet — add the first thing above.":
          "Nada aqui ainda — adicione a primeira coisa acima.",
        "Mark as not done": "Marcar como não concluído",
        "Mark as done": "Marcar como concluído",
        Edit: "Editar",
        Delete: "Excluir",
        done: "concluídos",
        "Move up": "Mover para cima",
        "Move down": "Mover para baixo",
        "🟢 Synced — changes save for both of you.":
          "🟢 Sincronizado — as mudanças ficam salvas para nós dois.",
        "🟡 Not synced yet — changes only stay on this device.":
          "🟡 Ainda não sincronizado — as mudanças ficam apenas neste dispositivo.",
        "Today. Finally. ♥": "Hoje. Finalmente. ♥",
        "Different places. Same moon. Same love. Just counting the days until we're together again.":
          "Lugares diferentes. A mesma lua. O mesmo amor. Só contando os dias até estarmos juntos de novo.",
        "add photo in CONFIG.album": "adicione a foto em CONFIG.album",
        "replace with": "troque por",
        "your favorite": "sua foto favorita",
        "photo of you two": "de vocês dois",
        "our photo": "nossa foto",
        "probably working on something.": "provavelmente fazendo alguma coisa.",

        // Final section / closing message
        "One more thing": "Mais uma coisa",
        "Until Then...": "Até lá...",
        "Until I can hold you again, I'll keep collecting little moments, memories, pictures, and reasons to look forward to the next one.":
          "Até poder te abraçar de novo, vou continuar colecionando pequenos momentos, lembranças, fotos e motivos para esperar ansiosamente pelo nosso próximo encontro.",
        "Thank you for being you.": "Obrigado por ser você.",
        "See you soon. ♥": "Até logo. ♥",

        // Personal CONFIG content
        "a little place that's just ours": "um cantinho que é só nosso",
        "For You, My Love": "Para Você, Meu Amor",
        "A collection of the moments, feelings, memories, and little things that make us... us.":
          "Uma coleção dos momentos, sentimentos, lembranças e pequenas coisas que fazem a nossa história ser o que é.",
        "Sometimes I wish I could put everything I feel for you into words. Since I can't, I made you a little place where some of those feelings can live.":
          "Às vezes eu queria conseguir colocar em palavras tudo o que sinto por você. Como nem sempre consigo, criei um cantinho onde pelo menos um pouco disso pode ficar.",
        "Your warm hugs that make everything better.":
          "Seus abraços quentinhos que fazem tudo parecer melhor.",
        "Hearing your voice in person, not through a screen.":
          "Ouvir sua voz de perto, e não através de uma tela.",
        "Our late-night conversations face to face.":
          "Nossas conversas de madrugada, nós dois ali, cara a cara.",
        "Waking up next to you in the morning.": "Acordar ao seu lado.",
        "Holding your hand while we walk together.":
          "Segurar sua mão enquanto a gente caminha.",
        "Your laugh that fills the room with joy.":
          "Sua risada enchendo o ambiente inteiro.",
        "The way you look at me when you're happy.":
          "O jeito que você olha para mim quando está feliz.",
        "Just being in the same room as you.":
          "Só estar no mesmo lugar que você.",
        "Every little moment we share together.":
          "Cada pequeno momento que a gente vive junto.",
        "One of the things I value most about you is how you've helped me grow. You've made me more patient, more mature, more understanding.":
          "Uma das coisas que mais valorizo em você é o quanto você me ajudou a crescer. Com você, aprendi a ter mais paciência, mais maturidade e mais compreensão.",
        "You motivated me to take my goals seriously, to study harder, to actually follow through on the things I say I want.":
          "Você me motivou a levar meus objetivos mais a sério, estudar mais e realmente correr atrás daquilo que eu digo que quero.",
        "You made me want to become a better person, not because you asked me to, but because being around you made it feel worth it.":
          "Você me fez querer ser uma pessoa melhor, não porque me pediu isso, mas porque estar ao seu lado me fez querer evoluir por mim mesmo.",
        "You taught me to appreciate consistency and slow, quiet growth over grand gestures.":
          "Você me ensinou a valorizar a constância e aquele crescimento tranquilo, aos poucos, em vez de achar que tudo precisa ser um grande gesto.",
        "And more than anything, you helped me understand a deeper kind of love, one that isn't only about big romantic moments, but about becoming someone who supports, listens, understands, and grows alongside another person.":
          "E, mais do que tudo, você me ajudou a entender um tipo mais profundo de amor — não só pelos grandes momentos românticos, mas por aprender a apoiar, ouvir, entender e crescer ao lado de alguém.",
        "Your laugh": "Sua risada",
        "Our stupid jokes": "Nossas piadas sem noção",
        "Late-night conversations": "Conversas de madrugada",
        "Being able to be ourselves": "Poder ser a gente mesmo",
        "Getting excited about seeing each other":
          "A ansiedade boa de nos vermos de novo",
        "The way we miss each other":
          "O jeito que a gente sente saudade um do outro",
        "Doing absolutely nothing together":
          "Não fazer absolutamente nada, juntos",
        "Talking about our future": "Falar sobre nosso futuro",
        "Making memories out of ordinary days":
          "Transformar dias comuns em lembranças",
        Us: "Nós",
        "Favorite Memories": "Memórias Favoritas",
        "Foods We've Eaten": "Comidas que Já Comemos",
        "Places We've Been": "Lugares Onde Já Fomos",
        "Polaroid Pictures": "Fotos Polaroid",
        "Party Pictures": "Fotos de Festa",
        "Our Memories": "Nossas Lembranças",
        "— add your own!": "— adicione as suas!",
        "Add a photo ♥": "Adicionar uma foto ♥",
        "Choose which album it belongs to.":
          "Escolha a que álbum ela pertence.",
        Album: "Álbum",
        Calendar: "Calendário",
        "Day Cards": "Cartões do dia",
        "Little notes": "Bilhetes",
        "Write each other something during the day. Cards expire after 24 hours.":
          "Escrevam um ao outro durante o dia. Os cartões expiram em 24 horas.",
        "Your message": "A tua mensagem",
        "Thinking of you…": "A pensar em ti…",
        "Thinking of you… (optional if you send audio)":
          "A pensar em ti… (opcional se enviares áudio)",
        "Send card ♥": "Enviar cartão ♥",
        "No cards yet — leave the first one above.":
          "Ainda sem cartões — deixa o primeiro em cima.",
        "Clear audio": "Limpar áudio",
        "Upload audio": "Enviar áudio",
        "Optional: use Kikivoice (cloned voice)":
          "Opcional: usar Kikivoice (voz clonada)",
        Listen: "Ouvir",
        Save: "Guardar",
        Saved: "Guardado",
        "Expires in": "Expira em",
        From: "De",
        Record: "Gravar",

        More: "Mais",
        All: "Todos",
        Both: "Os dois",
        "Both of us": "Os dois",
        "From bucket list (optional)": "Da bucket list (opcional)",
        "— None —": "— Nenhum —",
        "Add to calendar": "Agendar no calendário",

        "New album": "Novo álbum",
        "Create a folder for new memories — it appears in the list above when you upload.":
          "Cria uma pasta para novas lembranças — aparece na lista quando enviares fotos.",
        "Album name": "Nome do álbum",
        "e.g. Trip to the beach": "ex.: Viagem à praia",
        "Add album ♥": "Adicionar álbum ♥",
        "Our schedules": "Nossas agendas",
        "Shared Calendar": "Calendário Compartilhado",
        "See each other's plans so we know when to text — and when to wait.":
          "Veja os planos um do outro pra saber quando mandar mensagem — e quando esperar.",
        Both: "Os dois",
        "Add to the calendar ♥": "Adicionar ao calendário ♥",
        What: "O quê",
        Who: "Quem",
        "Start (optional)": "Início (opcional)",
        "End (optional)": "Fim (opcional)",
        "Notes (optional)": "Notas (opcional)",
        "Add event ♥": "Adicionar evento ♥",
        "Select a day": "Selecione um dia",
        "No plans this day.": "Nada agendado neste dia.",
        "Class, work, study, date night…": "Aula, trabalho, estudo, date…",
        "Don't call during this, or free after…":
          "Não ligar durante isso, ou livre depois…",
        "Edit event ♥": "Editar evento ♥",
        "Save event ♥": "Salvar evento ♥",
        Repeat: "Repetir",
        "Does not repeat": "Não se repete",
        "Every day": "Todos os dias",
        "Every week": "Toda semana",
        "Every month": "Todo mês",
        "Repeat until (optional)": "Repetir até (opcional)",
        "Event added.": "Evento adicionado.",
        "Event updated.": "Evento atualizado.",
        "Event deleted.": "Evento apagado.",
        "(repeats)": "(repete)",
        Icon: "Ícone",
        "● Normal": "● Normal",
        "★ Important": "★ Importante",
        "♥ Special": "♥ Especial",

        "Choose a photo": "Escolha uma foto",
        Caption: "Legenda",
        "Date (optional)": "Data (opcional)",
        "Add Memory ♥": "Adicionar Lembrança ♥",
        "Converting & uploading...": "A converter e enviar...",
        "WebP is not allowed. Use JPEG or PNG (PNG is auto-converted to JPEG).":
          "WebP não é permitido. Usa JPEG ou PNG (PNG vira JPEG automaticamente).",
        "Choose a photo first.": "Escolha uma foto primeiro.",
        "Choose an album.": "Escolha um álbum.",
        "Unsorted (pick an album next time)":
          "Sem álbum (escolha um ao reenviar)",
        "Sem álbum (escolha um ao reenviar)":
          "Sem álbum (escolha um ao reenviar)",

        "Us, somewhere ordinary": "Nós, em algum lugar comum",
        "That afternoon we didn't want to end":
          "Aquela tarde que não queríamos que acabasse",
        "Us, mid-phonecall": "Nós, no meio de uma ligação",
        "Us, kissing": "Nós, nos beijando",
        "Our last date togheter": "Nosso último encontro",
        "A very good day": "Um dia muito bom",
        "Restaurant at Sao Jose": "Restaurante em São José",
        "Restaurant at Lagoa": "Restaurante na Lagoa",
        "Restaurant at Santa Monica": "Restaurante em Santa Monica",
        "Restaurant at Rio Tavarez": "Restaurante no Rio Tavares",
        "Starbucks do Iguatemi": "Starbucks do Iguatemi",
        "Match And Hotchocolate at PB": "Matcha e chocolate quente no PB",
        "First Homemade Meal": "Nossa Primeira Refeição Feita em Casa",
        "Miami Red String Teory": "Teoria do Fio Vermelho em Miami",
        "That one Airbnb": "Aquele Airbnb",
        "Polaroid one": "Polaroid um",
        "Polaroid two": "Polaroid dois",
        "Polaroid three": "Polaroid três",
        "Polaroid four": "Polaroid quatro",
        "Toma Tudo": "Toma Tudo",
        Spartano: "Spartano",
        "Favorite food": "Comida favorita",
        "Favorite color": "Cor favorita",
        "Favorite song": "Música favorita",
        "Favorite soocer team": "Time de futebol favorito",
        "Favorite hour": "Horário favorito",
        "Favorite weekday": "Dia da semana favorito",
        'Who said \"I love you\" first: Thommy':
          'Quem disse \"eu te amo\" primeiro: Thommy',
        "Who is more stubborn: Fiel": "Quem é mais teimoso: Fiel",
        "Who takes longer to shower: Thommy":
          "Quem demora mais para tomar banho: Thommy",
        "Who is more likely to fall asleep first: Thommy":
          "Quem tem mais chance de dormir primeiro: Thommy",
        "Who eats more: Fiel": "Quem come mais: Fiel",
        "Who has the better tan: Thommy": "Quem tem o bronzeado melhor: Thommy",
        "Who is more dramatic: Fiel": "Quem é mais dramático: Fiel",
        "Who misses the other person more: Thommy":
          "Quem sente mais saudade: Thommy",
        "First time we met": "Primeira vez que nos conhecemos",
        "First conversation": "Primeira conversa",
        "First date": "Primeiro encontro",
        "First photo together": "Primeira foto juntos",
        "First trip": "Primeira viagem",
        "First time we had to be apart": "Primeira vez que ficamos separados",
        "At 3 a.m. in front of a closed mall. After the party, I picked you and Mary up with Lucca. My first impression was that you were beautiful—but also a little shy.":
          "Às 3 da manhã, em frente a um shopping fechado. Depois da festa, busquei você e a Mary com o Lucca. Minha primeira impressão foi que você era linda — mas também um pouco tímida.",
        "At the apartment in Novo Campeche, just the two of us on the couch, talking about all kinds of things. You were smart, funny, and kind. I was nervous because you didn’t laugh much at my jokes.":
          "No apartamento no Novo Campeche, só nós dois no sofá, conversando sobre todo tipo de coisa. Você era inteligente, engraçada e gentil. Eu estava nervoso porque você não ria muito das minhas piadas.",
        "Open when you're sad": "Abra quando estiver triste",
        "Open when you're missing me": "Abra quando estiver com saudade de mim",
        "Open when you're happy": "Abra quando estiver feliz",
        "Open when you need motivation": "Abra quando precisar de motivação",
        "Open when you're stressed": "Abra quando estiver estressada",
        "Open when you can't sleep": "Abra quando não conseguir dormir",
        "Open when you're angry": "Abra quando estiver com raiva",
        "Open when you need a hug": "Abra quando precisar de um abraço",
        "Open when you're feeling insecure":
          "Abra quando estiver se sentindo insegura",
        "Open when you need to smile": "Abra quando precisar sorrir",
        "Open when you want to remember us":
          "Abra quando quiser lembrar da gente",
        "Open when you just want to hear from me":
          "Abra quando só quiser ouvir um pouquinho de mim",
        "Open when you're overwhelmed": "Abra quando estiver sobrecarregada",
        "Open when you feel like giving up":
          "Abra quando sentir vontade de desistir",
        "Open when you did something you're proud of":
          "Abra quando estiver orgulhosa de algo que fez",
        "Open when you're homesick": "Abra quando estiver com saudades de casa",
        "Open when you need a distraction":
          "Abra quando precisar de uma distração",
        "Open when it's a bad day": "Abra quando for um dia ruim",
        "Open When You're Sad": "Abra Quando Você Estiver Triste",
        "Open When You're Missing Me": "Abra Quando Estiver Com Saudade de Mim",
        "Open When You're Happy": "Abra Quando Você Estiver Feliz",
        "Open When You Need Motivation": "Abra Quando Precisar de Motivação",
        "Open When You're Stressed": "Abra Quando Estiver Estressada",
        "Open When You Can't Sleep": "Abra Quando Não Conseguir Dormir",
        "Open When You're Angry": "Abra Quando Estiver Com Raiva",
        "Open When You Need a Hug": "Abra Quando Precisar de Um Abraço",
        "Open When You're Feeling Insecure":
          "Abra Quando Estiver Se Sentindo Insegura",
        "Open When You Need to Smile": "Abra Quando Precisar Sorrir",
        "Open When You Want to Remember Us":
          "Abra Quando Quiser Lembrar de Nós",
        "Open When You Just Want to Hear From Me":
          "Abra Quando Só Quiser Ouvir de Mim",
        "Open When You're Overwhelmed": "Abra Quando Estiver Sobrecarregada",
        "Open When You Feel Like Giving Up":
          "Abra Quando Sentir Vontade De Desistir",
        "Open When You Did Something You're Proud Of":
          "Abra Quando Estiver Orgulhosa De Algo Que Fez",
        "Open When You're Homesick": "Abra Quando Estiver Com Saudades De Casa",
        "Open When You Need a Distraction":
          "Abra Quando Precisar De Uma Distração",
        "Open When It's a Bad Day": "Abra Quando For Um Dia Ruim",
        "Hey. I know I can't be there to hug you right now, and I wish I could change that. But please remember that whatever you're going through, you don't have to carry it alone. Take a breath, give yourself some time, and remember that there's someone out here who cares about you more than you probably realize. And if none of that works... come here. Big virtual hug. ♥":
          "Ei. Eu sei que não posso estar aí para te dar um abraço agora, e queria muito poder mudar isso. Mas, seja lá pelo que você estiver passando, você não precisa enfrentar tudo sozinha. Respira, dá um tempinho para você e lembra que tem alguém aqui que se importa com você mais do que talvez você perceba. E se nada disso funcionar... vem cá. Um abraço virtual bem apertado. ♥",
        "I miss you too. Probably more than I know how to explain. But instead of thinking about how far apart we are, think about everything we're going to do when we're together again. Every hug, every conversation, every stupid little moment. We're getting closer to that moment every day.":
          "Eu também estou com saudade. Provavelmente mais do que consigo explicar. Mas, em vez de pensar na distância, pensa em tudo que a gente vai fazer quando estiver junto de novo. Cada abraço, cada conversa, cada momento bobo. A cada dia, estamos um pouquinho mais perto disso.",
        "I hope you stay in this moment for a while. Seeing you happy is one of my favorite things in the world. Whatever made you smile today, I hope you get a thousand more reasons to smile tomorrow.":
          "Espero que você aproveite esse momento por um tempinho. Ver você feliz é uma das minhas coisas favoritas no mundo. Seja o que for que te fez sorrir hoje, espero que amanhã apareçam mil motivos a mais para você sorrir.",
        "Remember who you are and how much you're capable of. You don't have to have everything figured out today. Just take the next step. I'm proud of you, and I'll always be cheering for you.":
          "Lembra de quem você é e de tudo o que é capaz de fazer. Você não precisa ter tudo resolvido hoje. Só dá o próximo passo. Tenho orgulho de você e vou estar sempre aqui torcendo por você.",
        "Take a breath. Whatever it is, it doesn't all have to be solved right now. Do one small thing, then the next one. I'm not there to make you tea, but pretend I did.":
          "Respira. Seja lá o que for, você não precisa resolver tudo agora. Faz uma coisinha de cada vez. Eu não estou aí para fazer um chá para você, mas finge que eu fiz.",
        "Close your eyes and imagine I'm right there next to you, the way we've fallen asleep before. If that doesn't work, just give me a call and we can fall a sleep on the phone.":
          "Fecha os olhos e imagina que estou aí do seu lado, como nas vezes em que a gente dormiu junto. Se não funcionar, me liga e a gente pode dormir no telefone.",
        "Whatever it is, feel it fully, you're allowed to. I'm here when you're ready to talk, and I'm not going anywhere in the meantime.":
          "Seja lá o que for, sente tudo. Você não precisa fingir que está tudo bem. Estou aqui quando você estiver pronta para conversar e não vou a lugar nenhum.",
        "Here’s a hug, sent straight from me to you. Go grab Don, spray a little of my perfume on him, and hold him tight. Feel my love through our little one. I’m right there with you.":
          "Aqui vai um abraço, direto de mim para você. Pega o Don, passa um pouquinho do meu perfume nele e abraça ele bem forte. Sente meu carinho através do nosso pequeno. Eu estou aí com você.",
        "Whatever that voice in your head is telling you right now, it’s wrong. I see you clearly, and what I see is someone kind, beautiful, and deeply worth loving. I’m endlessly glad I found you, and nothing you feel insecure about could ever change that.":
          "Seja lá o que essa voz na sua cabeça esteja dizendo agora, ela está errada. Eu vejo você como você realmente é: gentil, linda e alguém que merece ser amada. Sou muito feliz por ter encontrado você, e nada daquilo que te deixa insegura muda o que eu vejo em você.",
        "Think about the last time we laughed so hard neither of us could breathe. That's my favorite version of you. Go find a little bit of that today.":
          "Lembra da última vez que a gente riu tanto que mal conseguia respirar? Essa é uma das minhas versões favoritas de você. Vai atrás de um pouquinho dessa felicidade hoje.",
        "We've built something real, one ordinary day at a time. That's worth remembering, especially on the days it feels far away.":
          "A gente construiu algo real, um dia comum de cada vez. Vale a pena lembrar disso, principalmente naqueles dias em que tudo parece tão distante.",
        "Hey, it’s me. I know you can’t hear my voice right now, but I want you to feel like I’m right here. I miss you, I think about you constantly, and I love everything about you... your laugh, your little expressions, the way the world feels safer with you in it. Even from far away, you’re still my favorite person. Consider this me saying hi, holding your hand, and reminding you that you’re deeply loved.":
          "Ei, sou eu. Eu sei que você não pode ouvir minha voz agora, mas quero que sinta como se eu estivesse aí. Estou com saudade, penso em você o tempo todo e amo tudo em você... sua risada, suas pequenas expressões, o jeito que o mundo parece um pouco mais seguro com você por perto. Mesmo de longe, você continua sendo minha pessoa favorita. Então considera isso como eu dizendo oi, segurando sua mão e lembrando que você é muito amada.",
        "When your head feels like it has forty tabs open, picture us on the couch after a long day, not talking about any of it, just existing side by side. That's really the only cure I have for overwhelm, us, together, no deadline attached. You don't have to hold today by yourself, even from here I'm holding some of it with you.":
          "Quando sua cabeça estiver parecendo ter quarenta abas abertas, imagina a gente no sofá depois de um dia longo, sem falar sobre nada disso, só existindo lado a lado. Essa é, de verdade, a única cura que eu conheço pra sobrecarga: nós dois, juntos, sem prazo nenhum. Você não precisa carregar o dia de hoje sozinha, mesmo daqui eu estou carregando uma parte disso com você.",
        "I've watched you push through things that would've stopped most people, that's part of why I fell for you. Whatever this is, we've survived harder, an ocean between us and counting. You're not doing this alone even though it might feel that way right now. Finish this one for both of us, and I'll be right here when you do.":
          "Eu já te vi superar coisas que teriam parado a maioria das pessoas, isso é parte do motivo pelo qual me apaixonei por você. Seja lá o que for isso, a gente já sobreviveu a coisa pior, um oceano inteiro entre nós e contando. Você não está fazendo isso sozinha, mesmo que pareça agora. Termina essa por nós dois, que eu vou estar bem aqui quando você conseguir.",
        "I want to be the first person you tell when something good happens, even from this far away. So tell me. Let me be loud about how proud I am of you, because I am, more than you probably let yourself believe. Whatever you did, it's ours to celebrate too, we're a team even when we're on different continents.":
          "Eu quero ser a primeira pessoa pra quem você conta quando algo bom acontece, mesmo estando tão longe. Então me conta. Deixa eu gritar o quanto tenho orgulho de você, porque eu tenho, muito mais do que você provavelmente deixa a si mesma acreditar. Seja lá o que você fez, isso também é nosso pra comemorar, a gente é um time mesmo em continentes diferentes.",
        "I know you're missing home, and I need you to know I'm part of that ache too, not just Floripa, not just your bed with Don curled up at the end of it, but me. The version of home you're missing is really just us being in the same room. Close your eyes and go there for a second, I'll meet you. This distance is temporary, what we're building isn't.":
          "Eu sei que você está com saudade de casa, e preciso que você saiba que eu também sou parte dessa saudade, não só Floripa, não só sua cama com o Don enrolado na ponta dela, mas eu. A versão de casa que você está sentindo falta é, na verdade, nós dois no mesmo lugar. Fecha os olhos e vai até lá por um segundo, eu te encontro. Essa distância é passageira, o que a gente está construindo não é.",
        "Put this down for a bit, but not without me, call me while you do it and put me on speaker. Go for a walk, play a song you love, whatever it is, let me be background noise to it. I'd rather be a small part of your distraction than no part of your day at all.":
          "Larga isso aqui por um tempinho, mas não sem mim, me liga enquanto você faz isso e me deixa no viva-voz. Vai caminhar, coloca uma música que você ama, seja lá o que for, deixa eu ser o barulhinho de fundo disso. Prefiro ser uma parte pequena da sua distração do que nenhuma parte do seu dia.",
        "Today was hard, and I can't fix that from this far away, but I can tell you this: it's going to be okay. You don't have to carry today by yourself, I'm here, even if here is just a call away. We've gotten through every bad day so far together, and this one is no different. Call me, let me be the person you land on.":
          "Hoje foi difícil, e eu não consigo resolver isso daqui de longe, mas posso te dizer uma coisa: vai ficar tudo bem. Você não precisa carregar o dia de hoje sozinha, eu estou aqui, mesmo que aqui seja só uma ligação de distância. A gente já passou por todo dia ruim até agora juntos, e esse não vai ser diferente. Me liga, deixa eu ser a pessoa em quem você se apoia.",
        "There's actually one more thing I wanted you to know... No matter how many pages I make, pictures I add, or words I write, none of them are enough to explain how happy I am that I met you.(Unfinished)":
          "Na verdade, tem mais uma coisa que eu queria que você soubesse... Não importa quantas páginas eu faça, quantas fotos eu coloque ou quantas palavras eu escreva, nada disso consegue explicar o quanto eu sou feliz por ter te conhecido. (Inacabado)",
        "Churrasco/ Sushi": "Churrasco / Sushi",
        "Baby Pink/ Green": "Rosa bebê / Verde",
        "Use Somebody/ Tometown Glory": "Use Somebody / Tometown Glory",
        "Inter/ Botafogo": "Inter / Botafogo",
        "Golden/ Blue": "Dourado / Azul",
        "Wednsday/ Thursday": "Quarta-feira / Quinta-feira",
        // ---- Our Games card translations (auto) ----

        "Letters": "Cartas",
        "Nostalgia": "Nostalgia",
        "Pets": "Pets",
        "Pop Culture": "Cultura pop",
        "Ranking": "Ranking",
        "Roots": "Raízes",
        "Speed Round": "Rodada rápida",
        "Superlatives": "Superlativos",
        "This or That": "Isso ou aquilo",
        "Time Capsule": "Cápsula do tempo",
        "Two Truths and a Lie": "Duas verdades e uma mentira",
        "Wildcard": "Curinga",
        "What was the very first thing you noticed about me?": "Qual foi a primeira coisa que você notou em mim?",
        "When did you first realize you liked me as more than a friend?": "Quando você percebeu que gostava de mim mais do que como amigo?",
        "What was your first impression of my laugh?": "Qual foi sua primeira impressão da minha risada?",
        "What's a small, ordinary moment with me that you still think about?": "Qual é um momento pequeno e comum comigo que você ainda pensa?",
        "What is your favorite memory of us so far, and why?": "Qual é a sua lembrança favorita de nós até agora e por quê?",
        "Describe a moment when you felt proud of us as a couple.": "Descreva um momento em que você sentiu orgulho de nós como casal.",
        "What's a photo of us that always makes you smile?": "Qual é a nossa foto que sempre te faz sorrir?",
        "What's something small I do that you don't think I know you appreciate?": "O que é algo pequeno que eu faço e você acha que eu não sei que você aprecia?",
        "What is one habit of mine that you secretly love?": "Qual é um hábito meu que você ama secretamente?",
        "When do you feel most proud of me?": "Quando você se sente mais orgulhoso de mim?",
        "What's a side of my personality that took you time to understand?": "Qual lado da minha personalidade você demorou para entender?",
        "How would you describe me to someone who has never met me?": "Como você me descreveria para alguém que nunca me conheceu?",
        "What do you think is my greatest strength?": "Qual você acha que é minha maior força?",
        "What is something about me that still surprises you?": "O que há em mim que ainda te surpreende?",
        "What is something I do that makes you feel loved without me saying a word?": "O que eu faço que faz você se sentir amado sem que eu diga uma palavra?",
        "How do you prefer to receive love from me?": "Como você prefere receber meu amor?",
        "What does 'home' feel like when you're with me?": "Qual é a sensação de 'casa' quando você está comigo?",
        "When do you feel most heard by me?": "Quando você se sente mais ouvido por mim?",
        "What's the best way for me to check in with you on a hard day?": "Qual é a melhor maneira de entrar em contato com você em um dia difícil?",
        "Is there a topic you wish we talked about more often?": "Existe algum assunto sobre o qual você gostaria que falássemos com mais frequência?",
        "What's something from your childhood you wish I understood better?": "O que há de sua infância que você gostaria que eu entendesse melhor?",
        "What childhood dream still lives somewhere in you?": "Que sonho de infância ainda vive em você?",
        "Who in your family shaped how you love the most?": "Quem na sua família moldou a forma como você mais ama?",
        "What is a dream of yours that you haven't told many people about?": "Qual é o seu sonho que você não contou para muitas pessoas?",
        "What would a perfect ordinary day with me look like?": "Como seria um dia normal e perfeito comigo?",
        "What is something about me that you think you understand better than most people?": "O que há em mim que você acha que entende melhor do que a maioria das pessoas?",
        "What inside joke of ours would you never explain to a stranger?": "Que piada interna nossa você nunca explicaria a um estranho?",
        "What song will always remind you of us?": "Que música sempre lembrará você de nós?",
        "What do you think has changed most about us since we met?": "O que você acha que mais mudou em nós desde que nos conhecemos?",
        "What is one thing we do well as a team?": "O que fazemos bem como equipe?",
        "What is one thing you'd like us to get better at together?": "O que você gostaria que melhorássemos juntos?",
        "When do you feel closest to me?": "Quando você se sente mais próximo de mim?",
        "What's a value of mine that you didn't expect to admire so much?": "Qual é um valor meu que você não esperava admirar tanto?",
        "What principle would you never want us to compromise on?": "Qual princípio você nunca gostaria que comprometêssemos?",
        "What's a fear about us that you rarely say out loud?": "Qual é o medo sobre nós que você raramente diz em voz alta?",
        "What helps you feel safe when you're anxious about us?": "O que ajuda você a se sentir seguro quando está ansioso por nós?",
        "What part of our future are you most excited about, and what part scares you a little?": "Com que parte do nosso futuro você está mais animado e que parte te assusta um pouco?",
        "What tradition do you hope we create together?": "Que tradição você espera que criemos juntos?",
        "What's something you've never told me because you were afraid of how I'd react?": "O que você nunca me contou porque tinha medo de como eu reagiria?",
        "When was the last time you felt truly vulnerable with me?": "Quando foi a última vez que você se sentiu verdadeiramente vulnerável comigo?",
        "What do you need from me when you're hurting that I might not always know?": "O que você precisa de mim quando está sofrendo e que eu nem sempre saberei?",
        "What is something you wish I asked you about more often?": "O que você gostaria que eu perguntasse com mais frequência?",
        "Is there a compliment you've wanted to give me but haven't?": "Existe algum elogio que você queria me fazer, mas não fez?",
        "What's something hard you want to say, but gently?": "O que é algo difícil que você quer dizer, mas gentilmente?",
        "What builds trust for you the fastest in a relationship?": "O que gera confiança para você mais rapidamente em um relacionamento?",
        "When have you felt most trusted by me?": "Quando você se sentiu mais confiável para mim?",
        "How do you prefer we repair after a disagreement?": "Como você prefere que consertemos após um desentendimento?",
        "What is something I do during conflict that helps you, even if I don't realize it?": "O que faço durante o conflito que ajuda você, mesmo que não perceba?",
        "What is a disagreement we handled well, and what made it work?": "Qual é um desacordo que lidamos bem e o que o fez funcionar?",
        "In what way have I helped you grow since we met?": "De que forma eu ajudei você a crescer desde que nos conhecemos?",
        "What is something you've learned about love from being with me?": "O que você aprendeu sobre o amor por estar comigo?",
        "What version of me do you hope I keep becoming?": "Que versão de mim você espera que eu continue me tornando?",
        "What do you think I worry about more than I admit?": "Com o que você acha que me preocupo mais do que admito?",
        "What do you think makes me feel most confident?": "O que você acha que me faz sentir mais confiante?",
        "If you had to guess my biggest insecurity, what would you say?": "Se você tivesse que adivinhar minha maior insegurança, o que diria?",
        "What do you think is my love language, and why?": "Qual você acha que é minha linguagem de amor e por quê?",
        "Name three things you're grateful for about us right now.": "Cite três coisas pelas quais você é grato em nós agora.",
        "What was a moment when you thought, 'I really love this person'?": "Qual foi o momento em que você pensou: 'Eu realmente amo essa pessoa'?",
        "Tell the story of a day with me that felt perfect in a simple way.": "Conte a história de um dia comigo que pareceu perfeito de uma forma simples.",
        "What does loyalty mean to you in our relationship?": "O que lealdade significa para você em nosso relacionamento?",
        "How do you know when I need reassurance?": "Como você sabe quando preciso de garantias?",
        "What is our superpower as a couple?": "Qual é o nosso superpoder como casal?",
        "What would you miss most about us if we couldn't talk for a week?": "Do que você mais sentiria falta de nós se não pudéssemos conversar por uma semana?",
        "Do you feel more comfortable texting or talking when something is serious?": "Você se sente mais confortável enviando mensagens de texto ou conversando quando algo é sério?",
        "What is a boundary of yours that you want me to always respect?": "Qual é o seu limite que você quer que eu sempre respeite?",
        "What makes you feel most like yourself around me?": "O que faz você se sentir mais igual perto de mim?",
        "What shared goal feels most important to you this year?": "Qual objetivo compartilhado parece mais importante para você este ano?",
        "What kind of partner do you try to be for me?": "Que tipo de parceiro você tenta ser para mim?",
        "What would make you feel distant from me, and how can we avoid that?": "O que faria você se sentir distante de mim e como podemos evitar isso?",
        "What does honesty look like to you on ordinary days, not just big ones?": "Como é a honestidade para você nos dias normais, não apenas nos grandes?",
        "What is something you're still learning about being in a relationship?": "O que você ainda está aprendendo sobre estar em um relacionamento?",
        "What is a soft spot of yours that you only show people you trust?": "Qual é o seu ponto fraco que você só mostra às pessoas em quem confia?",
        "If our relationship were a season, which one would it be right now and why?": "Se nosso relacionamento fosse uma temporada, qual seria agora e por quê?",
        "Tell them something you've never said out loud before.": "Diga a eles algo que você nunca disse em voz alta antes.",
        "Pick a memory and tell the full story, with all the details you remember.": "Escolha uma lembrança e conte a história completa, com todos os detalhes que você lembra.",
        "In one minute, say everything you love about me without stopping.": "Em um minuto, diga tudo o que você ama em mim sem parar.",
        "Share a fear about the future and let the other person respond with care.": "Compartilhe um medo sobre o futuro e deixe a outra pessoa reagir com cuidado.",
        "Ask the question you've been avoiding — gently.": "Faça a pergunta que você tem evitado – gentilmente.",
        "What is the kindest thing I've ever done for you?": "Qual foi a coisa mais gentil que já fiz por você?",
        "What trip or outing with me would you do again tomorrow if you could?": "Que viagem ou passeio comigo você faria novamente amanhã, se pudesse?",
        "What did you almost get wrong about me at the beginning?": "O que você quase errou sobre mim no começo?",
        "What part of your younger self still shows up when you're with me?": "Que parte do seu eu mais jovem ainda aparece quando você está comigo?",
        "What is something you need me to hear, even if it's hard to say?": "O que você precisa que eu ouça, mesmo que seja difícil de dizer?",
        "When was the last time I made you laugh until it hurt?": "Quando foi a última vez que fiz você rir até doer?",
        "What is your favorite way we say goodbye or goodnight?": "Qual é a sua maneira favorita de dizer adeus ou boa noite?",
        "What about my personality balances yours?": "E a minha personalidade equilibra a sua?",
        "What does quality time look like for you with me?": "Como é um tempo de qualidade para você comigo?",
        "If we could teleport somewhere for 24 hours, where would we go?": "Se pudéssemos nos teletransportar para algum lugar por 24 horas, para onde iríamos?",
        "What does 'forever' mean to you in practical, everyday terms?": "O que 'para sempre' significa para você em termos práticos e cotidianos?",
        "What reassures you fastest when you overthink?": "O que o tranquiliza mais rapidamente quando você pensa demais?",
        "What is a promise between us that means a lot to you?": "Qual é a promessa entre nós que significa muito para você?",
        "What is one thing I do better now than when we first met?": "O que faço melhor agora do que quando nos conhecemos?",
        "What snack would I pick if I were stressed?": "Que lanche eu escolheria se estivesse estressado?",
        "What would I order at a café without looking at the menu?": "O que eu pediria em um café sem olhar o cardápio?",
        "What is a signal that you're done arguing and ready to reconnect?": "Qual é o sinal de que você parou de discutir e está pronto para se reconectar?",
        "What emoji would you use to describe me today?": "Que emoji você usaria para me descrever hoje?",
        "What is a hard moment we got through that made us stronger?": "Qual foi o momento difícil que passamos que nos tornou mais fortes?",
        "What does commitment look like to you on the boring days?": "Como é o compromisso para você nos dias chatos?",
        "What story about us do you hope we tell people in ten years?": "Que história sobre nós você espera que contemos às pessoas daqui a dez anos?",
        "When do you find it hardest to ask for help from me?": "Quando você acha mais difícil pedir minha ajuda?",
        "If we buried a time capsule today, what's the one object you'd insist goes in it?": "Se enterrássemos uma cápsula do tempo hoje, qual objeto você insistiria que fosse colocada nela?",
        "What message would you leave for us to read in ten years?": "Que mensagem você deixaria para lermos daqui a dez anos?",
        "What current inside joke do you hope we still laugh at in a decade?": "De que piada interna atual você espera que ainda riamos em uma década?",
        "What's a photo from this exact month you want us to remember forever?": "Qual é a foto deste mês exato que você deseja que lembremos para sempre?",
        "If you could freeze one week of this year in amber, which would it be?": "Se você pudesse congelar uma semana deste ano em âmbar, qual seria?",
        "What's something about \"us right now\" that you don't want to change?": "O que há em “nós agora” que você não quer mudar?",
        "What would you tell past-you on the day we met?": "O que você diria a você no dia em que nos conhecemos?",
        "What's a prediction you have for where we'll be exactly one year from today?": "Qual é a sua previsão de onde estaremos exatamente daqui a um ano?",
        "What object in our home tells the truest story about us?": "Que objeto em nossa casa conta a história mais verdadeira sobre nós?",
        "If aliens found only our text messages, what would they think we're like?": "Se os alienígenas encontrassem apenas nossas mensagens de texto, como pensariam que somos?",
        "What tradition from your family do you hope we carry into our own?": "Que tradição da sua família você espera que carreguemos para a nossa?",
        "What's a lesson your parents taught you, on purpose or not, about love?": "Qual lição seus pais lhe ensinaram, de propósito ou não, sobre o amor?",
        "What's a memory from home that shaped how you show affection?": "Qual é a lembrança de casa que moldou a forma como você demonstra afeto?",
        "Who from your past changed how you love now, and how?": "Quem do seu passado mudou a forma como você ama agora e como?",
        "What's something about your hometown you want me to understand better?": "O que há em sua cidade natal que você deseja que eu entenda melhor?",
        "What family recipe or ritual do you want to teach me?": "Que receita ou ritual de família você quer me ensinar?",
        "What's a story about your grandparents' love that stuck with you?": "Qual história sobre o amor dos seus avós que ficou com você?",
        "What did you learn about conflict from the adults around you growing up?": "O que você aprendeu sobre conflitos com os adultos ao seu redor enquanto crescia?",
        "What's a value your family instilled in you that still guides you?": "Qual valor que sua família incutiu em você e que ainda o orienta?",
        "If your younger self met me today, what would surprise them most?": "Se o seu eu mais jovem me conhecesse hoje, o que mais o surpreenderia?",
        "Which love language do you think I express without realizing it?": "Qual linguagem de amor você acha que expresso sem perceber?",
        "What's a way I could say \"I love you\" without using those words?": "De que maneira eu poderia dizer “eu te amo” sem usar essas palavras?",
        "Do you feel loved more through words, actions, or presence — and has that changed with us?": "Você se sente mais amado por meio de palavras, ações ou presença – e isso mudou conosco?",
        "What's a language, literal or made-up, we've built that's just ours?": "Qual é a linguagem, literal ou inventada, que construímos e que é só nossa?",
        "What's the kindest sentence I've ever said to you?": "Qual foi a frase mais gentil que já disse para você?",
        "What phrase do you wish I said more often?": "Que frase você gostaria que eu dissesse com mais frequência?",
        "If our relationship had a motto, what would it be?": "Se nosso relacionamento tivesse um lema, qual seria?",
        "What's a gesture that means more to you than any words could?": "Qual gesto significa mais para você do que qualquer palavra poderia significar?",
        "How do you say \"I'm sorry\" best, and how do I?": "Qual a melhor forma de dizer \"sinto muito\" e como faço?",
        "What's something you've never had to explain to me because I just understood?": "O que você nunca teve que me explicar porque eu simplesmente entendi?",
        "How has being with me changed the way you see yourself?": "Como estar comigo mudou a maneira como você se vê?",
        "What part of your identity feels safest to show only around me?": "Que parte da sua identidade parece mais segura para ser mostrada apenas perto de mim?",
        "What's a label or role you've outgrown since we got together?": "Qual rótulo ou função você superou desde que ficamos juntos?",
        "What do you want people to understand about you that they usually miss?": "O que você quer que as pessoas entendam sobre você e que geralmente não percebem?",
        "What's something you're still figuring out about who you want to be?": "O que você ainda está descobrindo sobre quem você quer ser?",
        "How do you want to be remembered by the people who love you?": "Como você quer ser lembrado pelas pessoas que te amam?",
        "What's a version of yourself you're proud you left behind?": "Qual é a versão de você mesmo que você tem orgulho de ter deixado para trás?",
        "What does \"being yourself\" around me actually feel like?": "Qual é a sensação real de “ser você mesmo” perto de mim?",
        "What's a strength you didn't know you had until this relationship?": "Qual é a força que você não sabia que tinha até esse relacionamento?",
        "If you had to introduce yourself only through what you love, what would you say?": "Se você tivesse que se apresentar apenas através daquilo que você ama, o que você diria?",
        "What's something ordinary today that you're quietly grateful for?": "O que é algo comum hoje pelo qual você está silenciosamente grato?",
        "Name a hard season that ended up giving you something good.": "Cite uma temporada difícil que acabou lhe proporcionando algo bom.",
        "What's a small kindness I did recently that you haven't mentioned?": "Qual foi a pequena gentileza que fiz recentemente e que você não mencionou?",
        "What's something about your health or body you're grateful for right now?": "O que há em sua saúde ou corpo pelo qual você está grato agora?",
        "Who besides me are you especially thankful for lately, and why?": "A quem além de mim você está especialmente grato ultimamente e por quê?",
        "What's a comfort in your daily life you don't take for granted?": "Qual é o conforto em sua vida diária que você não considera garantido?",
        "What's something about this exact stage of our relationship you're thankful for?": "O que há nesse estágio exato do nosso relacionamento pelo qual você está grato?",
        "What's a mistake that taught you something you're now grateful for?": "Qual foi o erro que lhe ensinou algo pelo qual você agora é grato?",
        "What's a small luxury that makes your week better?": "Qual é um pequeno luxo que torna a sua semana melhor?",
        "What do you want to remember to be grateful for on a hard day?": "O que você quer lembrar para ser grato em um dia difícil?",
        "Would you rather I remembered your stories in perfect detail or always show up when it matters most?": "Você prefere que eu me lembre de suas histórias com detalhes perfeitos ou sempre apareça quando for mais importante?",
        "Would you rather we grow slowly and steadily or in sudden big leaps?": "Você prefere que cresçamos lenta e continuamente ou em grandes saltos repentinos?",
        "Would you rather know all my flaws upfront or discover them slowly?": "Você prefere conhecer todas as minhas falhas antecipadamente ou descobri-las lentamente?",
        "Would you rather I comfort you with words or with quiet company?": "Você prefere que eu o console com palavras ou com uma companhia tranquila?",
        "Would you rather matching daily routines or separate ones that overlap on weekends?": "Você prefere combinar rotinas diárias ou separar rotinas que se sobrepõem nos finais de semana?",
        "Would you rather I ask more about your day or share more about mine first?": "Você prefere que eu pergunte mais sobre o seu dia ou compartilhe mais sobre o meu primeiro?",
        "Would you rather celebrate wins loudly together or quietly between just us?": "Você prefere comemorar as vitórias em voz alta juntos ou em silêncio apenas entre nós?",
        "Would you rather we process feelings out loud immediately or need time to think first?": "Você prefere que processemos os sentimentos em voz alta imediatamente ou precisamos de tempo para pensar primeiro?",
        "Would you rather I challenge your ideas more or support them more?": "Você prefere que eu desafie mais suas ideias ou as apoie mais?",
        "Would you rather build a life that's mostly familiar or mostly new?": "Você prefere construir uma vida que seja principalmente familiar ou nova?",
        "Tell me two true things about how you feel today and one made-up one.": "Diga-me duas coisas verdadeiras sobre como você se sente hoje e uma inventada.",
        "Share two real childhood memories and one invented one.": "Compartilhe duas memórias reais de infância e uma inventada.",
        "Give two true reasons you're with me and one fake reason.": "Dê dois motivos verdadeiros para você estar comigo e um motivo falso.",
        "Name two real fears and one fake one.": "Cite dois medos reais e um falso.",
        "Tell two true stories from before we met and one false one.": "Conte duas histórias verdadeiras de antes de nos conhecermos e uma falsa.",
        "Share two real dreams for our future and one made-up dream.": "Compartilhe dois sonhos reais para o nosso futuro e um sonho inventado.",
        "Give two true opinions about me and one exaggerated one.": "Dê duas opiniões verdadeiras sobre mim e uma exagerada.",
        "Tell two real habits of yours and one you're making up.": "Conte dois hábitos reais seus e um que você está inventando.",
        "Share two true favorite memories of us and one invented memory.": "Compartilhe duas memórias verdadeiras e favoritas de nós e uma memória inventada.",
        "Name two real things you'd change about your day and one fake one.": "Cite duas coisas reais que você mudaria no seu dia e uma falsa.",
        "First word that comes to mind when you think of \"us\"?": "A primeira palavra que vem à mente quando você pensa em “nós”?",
        "One thing you need right now, in five words or less?": "Algo que você precisa agora, em cinco palavras ou menos?",
        "Best decision you've made this year, in one sentence?": "A melhor decisão que você tomou este ano, em uma frase?",
        "Describe today in exactly three words.": "Descreva hoje em exatamente três palavras.",
        "What's the first memory of me that comes to mind, no filter?": "Qual é a primeira lembrança minha que vem à cabeça, sem filtro?",
        "Name the last thing that made you laugh, fast.": "Cite a última coisa que fez você rir, rápido.",
        "One thing you're avoiding thinking about — just name it, don't explain.": "Uma coisa em que você está evitando pensar é apenas nomear, não explicar.",
        "What's the truest thing you know about yourself right now?": "Qual é a coisa mais verdadeira que você sabe sobre você agora?",
        "Say the nicest thing about me you can think of in three seconds.": "Diga a coisa mais legal sobre mim que você puder imaginar em três segundos.",
        "What do you want right this second — say it before you think.": "O que você quer neste segundo - diga antes de pensar.",
        "Ask me any question you've been holding onto — right now.": "Faça-me qualquer pergunta que você esteja segurando - agora mesmo.",
        "Skip the question. Instead, just tell me something true.": "Pule a pergunta. Em vez disso, apenas me diga algo verdadeiro.",
        "Ask me a \"Really Know Us\" question you make up on the spot.": "Faça-me uma pergunta \"Really Know Us\" que você inventa na hora.",
        "Whoever answers first gets to ask the next question instead of drawing.": "Quem responder primeiro faz a próxima pergunta em vez de desenhar.",
        "Say a toast for us that starts with \"To us, because...\"": "Faça um brinde para nós que comece com \"Para nós, porque...\"",
        "Answer as if you were writing our story's next chapter.": "Responda como se estivesse escrevendo o próximo capítulo da nossa história.",
        "If this card were a plot twist in our story, what would it reveal?": "Se esta carta fosse uma reviravolta na história da nossa história, o que ela revelaria?",
        "Give an answer using only questions.": "Dê uma resposta usando apenas perguntas.",
        "Pick a random object near you and explain how it reminds you of me.": "Escolha um objeto aleatório perto de você e explique como ele te lembra de mim.",
        "Say the truest, scariest, most honest thing on your mind about us right now.": "Diga a coisa mais verdadeira, mais assustadora e mais honesta que você pensa sobre nós agora.",
        "If you wrote me a letter to open in a hard moment, what's one line it would include?": "Se você me escrevesse uma carta para abrir em um momento difícil, qual linha ela incluiria?",
        "What would the subject line be if you emailed future-you about today?": "Qual seria o assunto se você enviasse um e-mail para o futuro sobre hoje?",
        "Say the first sentence of a letter thanking me for something specific.": "Diga a primeira frase de uma carta me agradecendo por algo específico.",
        "What would you want me to know if you couldn't tell me in person?": "O que você gostaria que eu soubesse se não pudesse me contar pessoalmente?",
        "If you left me a note for tomorrow morning, what would it say?": "Se você me deixasse um bilhete para amanhã de manhã, o que diria?",
        "What's something you'd only have the courage to say in writing?": "O que você só teria coragem de dizer por escrito?",
        "If our relationship got one page in a book, what's the last line?": "Se nosso relacionamento tem uma página de livro, qual é a última linha?",
        "Would you rather share a toothbrush for a week or a pillow for a year?": "Você prefere compartilhar uma escova de dente por uma semana ou um travesseiro por um ano?",
        "Would you rather be stuck in a karaoke booth with me for 3 hours or a silent library?": "Você prefere ficar preso em uma cabine de karaokê comigo por 3 horas ou em uma biblioteca silenciosa?",
        "Would you rather relive our first date forever, or fast-forward to our future wedding day?": "Você prefere reviver nosso primeiro encontro para sempre ou avançar para o dia do nosso futuro casamento?",
        "Would you rather get one long love letter a year, or one small sweet note every week?": "Você prefere receber uma longa carta de amor por ano ou um pequeno bilhete doce por semana?",
        "Would you rather we lived somewhere loud and exciting, or somewhere quiet and slow?": "Você preferiria que morássemos em algum lugar barulhento e emocionante ou em algum lugar calmo e lento?",
        "Would you rather I planned every date for a month, or you did?": "Você prefere que eu planeje todos os encontros durante um mês, ou você planejou?",
        "Would you rather I accidentally sent you my whole search history, or my entire camera roll?": "Você prefere que eu envie acidentalmente todo o meu histórico de pesquisa ou todo o rolo da câmera?",
        "Would you rather be the planner or the spontaneous one in our duo?": "Você prefere ser o planejador ou o espontâneo da nossa dupla?",
        "Would you rather we could read each other's minds for a day, or swap bodies for a day?": "Você prefere que possamos ler a mente um do outro por um dia ou trocar de corpo por um dia?",
        "Would you rather have a theme song that plays when we hug, or subtitles for our sarcasm?": "Você prefere uma música tema que toca quando nos abraçamos ou legendas para o nosso sarcasmo?",
        "Would you rather I remembered every important date perfectly, or always showed up early?": "Você prefere que eu me lembre perfeitamente de todas as datas importantes ou sempre chegue cedo?",
        "Would you rather only speak in questions for an hour or only answer with song lyrics?": "Você prefere apenas falar em perguntas por uma hora ou responder apenas com letras de músicas?",
        "Would you rather road trip with no playlist or flight with no snacks?": "Você prefere uma viagem sem playlist ou um voo sem lanches?",
        "Would you rather brunch every weekend or late-night snacks every night?": "Você prefere um brunch todo fim de semana ou lanches noturnos todas as noites?",
        "Would you rather a clean minimalist home or a cozy cluttered one?": "Você prefere uma casa limpa e minimalista ou uma casa aconchegante e desordenada?",
        "Would you rather more physical affection or more verbal affection?": "Você prefere mais afeto físico ou mais afeto verbal?",
        "Would you rather a small intimate wedding or a big joyful party?": "Você prefere um casamento pequeno e íntimo ou uma grande festa alegre?",
        "Would you rather your partner see your childhood photos or your middle-school diary?": "Você prefere que seu parceiro veja as fotos de sua infância ou seu diário do ensino médio?",
        "Would you rather be called out lovingly or comforted first when you're wrong?": "Você prefere ser chamado com amor ou consolado primeiro quando estiver errado?",
        "Would you rather share one dream every night or one secret every week?": "Você prefere compartilhar um sonho todas as noites ou um segredo todas as semanas?",
        "Would you rather I learn your hobby or you learn mine?": "Você prefere que eu aprenda o seu hobby ou você aprenda o meu?",
        "Would you rather cook a complicated recipe together or assemble furniture together?": "Você prefere preparar uma receita complicada juntos ou montar móveis juntos?",
        "Would you rather a partner who steals the blankets or steals the fries?": "Você prefere um parceiro que roube os cobertores ou as batatas fritas?",
        "Would you rather slow dance in the kitchen or kiss in the rain?": "Você prefere dançar lentamente na cozinha ou beijar na chuva?",
        "Would you rather mountains or ocean for our next getaway?": "Você prefere montanhas ou oceano em nossa próxima escapadela?",
        "Would you rather try every street food in a city or one fancy tasting menu?": "Você prefere experimentar todas as comidas de rua de uma cidade ou um menu de degustação sofisticado?",
        "Would you rather work from home together or commute and meet after work?": "Você prefere trabalhar juntos em casa ou viajar e se encontrar depois do trabalho?",
        "Would you rather weekly check-ins about feelings or only talk when needed?": "Você prefere fazer check-ins semanais sobre seus sentimentos ou apenas conversar quando necessário?",
        "Would you rather adopt a rescue pet next year or wait until we're more settled?": "Você prefere adotar um animal de estimação resgatado no próximo ano ou esperar até que estejamos mais acomodados?",
        "Would you rather be slightly bored together or constantly busy apart?": "Vocês preferem ficar um pouco entediados juntos ou constantemente ocupados separados?",
        "Would you rather a slow long-distance chapter with deep talks, or a chaotic in-person week?": "Você prefere um capítulo lento de longa distância com conversas profundas ou uma semana caótica presencial?",
        "Would you rather I adopt your slang or you adopt mine forever?": "Você prefere que eu adote sua gíria ou você adote a minha para sempre?",
        "Would you rather a spontaneous road trip tonight or a carefully planned one next month?": "Você prefere uma viagem espontânea esta noite ou uma cuidadosamente planejada no próximo mês?",
        "Would you rather I always choose the music or always choose the photos we post?": "Você prefere que eu sempre escolha a música ou sempre escolha as fotos que postamos?",
        "Would you rather a movie about our love story or a book?": "Você prefere um filme sobre nossa história de amor ou um livro?",
        "Would you rather grow old in one city or move every five years?": "Você prefere envelhecer em uma cidade ou se mudar a cada cinco anos?",
        "Would you rather I narrated our relationship like a nature documentary or a soap opera?": "Você prefere que eu narre nosso relacionamento como um documentário sobre a natureza ou uma novela?",
        "Would you rather I always won at rock-paper-scissors or always lost on purpose to make you happy?": "Você prefere que eu sempre ganhe em pedra-papel-tesoura ou sempre perca de propósito para te fazer feliz?",
        "Would you rather have a signature dance move or a signature catchphrase as a couple?": "Você prefere ter um movimento de dança de assinatura ou um bordão de assinatura como um casal?",
        "Would you rather I laughed at all your jokes, even bad ones, or was brutally honest about them?": "Você prefere que eu ria de todas as suas piadas, mesmo as ruins, ou fui brutalmente honesto sobre elas?",
        "Would you rather we had a couple's theme song that played every time we entered a room?": "Você preferiria que tivéssemos uma música tema de casal que tocasse toda vez que entrássemos em uma sala?",
        "Would you rather I texted in all lowercase forever or ALL CAPS forever?": "Você prefere que eu mande mensagens em letras minúsculas para sempre ou em letras MAIÚSCULAS para sempre?",
        "Would you rather our future pet judged only me or only you?": "Você prefere que nosso futuro animal de estimação julgue apenas eu ou apenas você?",
        "Would you rather I mispronounced one word forever or you did?": "Você prefere que eu pronuncie mal uma palavra para sempre ou você fez?",
        "Would you rather we had matching ringtones or matching typing sounds?": "Você preferiria que tivéssemos toques ou sons de digitação correspondentes?",
        "Would you rather I snorted when I laughed or you did, for the rest of our lives?": "Você preferiria que eu bufasse quando ria ou você o fez, pelo resto de nossas vidas?",
        "Would you rather a candlelit dinner at home or a picnic under the stars?": "Prefere um jantar à luz de velas em casa ou um piquenique sob as estrelas?",
        "Would you rather I wrote you poetry or sang you a love song, badly?": "Você prefere que eu te escreva poesia ou cante uma canção de amor, mal?",
        "Would you rather we recreate our first kiss every anniversary or invent a new tradition each year?": "Você prefere que recriemos nosso primeiro beijo a cada aniversário ou inventemos uma nova tradição a cada ano?",
        "Would you rather a slow dance in the kitchen at midnight or a quiet walk at sunrise?": "Você prefere uma dança lenta na cozinha à meia-noite ou uma caminhada tranquila ao nascer do sol?",
        "Would you rather I surprised you with breakfast in bed or a spontaneous day trip?": "Você prefere que eu te surpreenda com café da manhã na cama ou uma viagem de um dia espontânea?",
        "Would you rather we exchange love letters once a year or leave little notes constantly?": "Você prefere trocar cartas de amor uma vez por ano ou deixar pequenos bilhetes constantemente?",
        "Would you rather a shared playlist that grows forever or one perfect mixtape?": "Você prefere uma playlist compartilhada que cresça para sempre ou uma mixtape perfeita?",
        "Would you rather we renew our vows every five years or never need to because nothing changes?": "Você prefere que renovemos nossos votos a cada cinco anos ou nunca precisemos, porque nada muda?",
        "Would you rather I remembered every anniversary perfectly or surprised you on random ordinary days?": "Você prefere que eu me lembre de cada aniversário perfeitamente ou que te surpreenda em dias normais aleatórios?",
        "Would you rather a long slow hug every morning or a quick kiss every time we part?": "Você prefere um abraço longo e lento todas as manhãs ou um beijo rápido toda vez que nos separamos?",
        "Would you rather we get hopelessly lost in a beautiful city or arrive exactly on schedule to somewhere boring?": "Você preferiria que nos perdêssemos irremediavelmente em uma bela cidade ou chegássemos exatamente no horário para algum lugar chato?",
        "Would you rather road trip through deserts or through mountains?": "Você prefere viajar por desertos ou montanhas?",
        "Would you rather visit ten countries fast or live in one country slowly for a year?": "Você prefere visitar dez países rapidamente ou viver em um país lentamente por um ano?",
        "Would you rather camp under real stars or glamp with all the comforts?": "Você prefere acampar sob estrelas de verdade ou acampar com todos os confortos?",
        "Would you rather I planned every detail of our trip or we wing it completely?": "Você prefere que eu planeje todos os detalhes da nossa viagem ou nós improvisamos completamente?",
        "Would you rather learn to say \"I love you\" in every language we visit, or order food perfectly instead?": "Você prefere aprender a dizer \"eu te amo\" em todos os idiomas que visitamos ou pedir comida perfeitamente?",
        "Would you rather a trip with zero phone signal or one with perfect wifi the whole time?": "Prefere uma viagem sem sinal de telefone ou uma com Wi-Fi perfeito o tempo todo?",
        "Would you rather explore ancient ruins together or dive a coral reef together?": "Você prefere explorar ruínas antigas juntos ou mergulhar em um recife de coral juntos?",
        "Would you rather travel with a huge group of friends or completely alone, just us?": "Você prefere viajar com um grupo enorme de amigos ou completamente sozinho, só nós?",
        "Would you rather a spontaneous overnight train or a slow scenic ferry?": "Você prefere um trem noturno espontâneo ou uma balsa panorâmica lenta?",
        "Would you rather cook a five-course meal together or order the weirdest thing on a menu and share it?": "Você prefere cozinhar uma refeição de cinco pratos juntos ou pedir a coisa mais estranha em um cardápio e compartilhá-la?",
        "Would you rather share dessert always or never share dessert again?": "Com quem você preferiria dividir uma ilha deserta, Thomas Edison ou John Lennon?",
        "Would you rather I made your coffee perfectly every morning or you made mine?": "Você prefere que eu faça seu café perfeitamente todas as manhãs ou você fez o meu?",
        "Would you rather try a food neither of us has heard of or go back to our favorite comfort meal?": "Você prefere experimentar uma comida que nenhum de nós conhece ou voltar à nossa comida favorita?",
        "Would you rather a \"no phones at dinner\" rule forever or a \"dessert before dinner sometimes\" rule?": "Você prefere uma regra permanente de &quot;nada de celulares durante o jantar&quot; ou uma regra de &quot;sobremesa antes do jantar, às vezes&quot;?",
        "Would you rather cook disasters together and laugh about it, or always follow the recipe perfectly?": "Você prefere cozinhar desastres juntos e rir disso, ou sempre seguir a receita perfeitamente?",
        "Would you rather a home that always smells like fresh bread or always like fresh coffee?": "Prefere uma casa que cheire sempre a pão fresco ou sempre a café fresco?",
        "Would you rather eat street food from every stall or one incredible tasting menu?": "Você prefere comer comida de rua de todas as barracas ou um menu de degustação incrível?",
        "Would you rather breakfast for dinner every week or dinner for breakfast every week?": "Você prefere café da manhã para o jantar todas as semanas ou jantar para o café da manhã todas as semanas?",
        "Would you rather I remembered your order exactly, or you remembered mine?": "Você preferiria que eu me lembrasse exatamente do seu pedido, ou você se lembrou do meu?",
        "Would you rather a home full of books or a home full of plants?": "Prefere uma casa cheia de livros ou uma casa cheia de plantas?",
        "Would you rather live somewhere with four real seasons or somewhere warm all year?": "Você prefere morar em algum lugar com quatro estações reais ou em algum lugar quente o ano todo?",
        "Would you rather wake up early together or stay up late together, permanently?": "Vocês preferem acordar cedo juntos ou ficar acordados até tarde juntos, permanentemente?",
        "Would you rather a minimalist life with less stuff or a cozy life with more?": "Prefere uma vida minimalista com menos coisas ou uma vida acolhedora com mais?",
        "Would you rather a weekly game night or a weekly movie night, forever?": "Você prefere uma noite de jogos semanal ou uma noite de cinema semanal, para sempre?",
        "Would you rather split chores strictly by category or trade off randomly?": "Você prefere dividir as tarefas estritamente por categoria ou trocar aleatoriamente?",
        "Would you rather a loud, social weekend every week or a quiet one every week?": "Você prefere um fim de semana social barulhento todas as semanas ou um fim de semana tranquilo todas as semanas?",
        "Would you rather live near the ocean or near mountains?": "Você prefere morar perto do oceano ou perto de montanhas?",
        "Would you rather a home office each, or one shared creative space?": "Você prefere um escritório em casa ou um espaço criativo compartilhado?",
        "Would you rather a Sunday routine that never changes, or one that's different every week?": "Você prefere uma rotina de domingo que nunca muda, ou uma que é diferente a cada semana?",
        "Would you rather never run out of things to talk about, or never run out of comfortable silence?": "Você prefere nunca ficar sem coisas para falar ou nunca ficar sem um silêncio confortável?",
        "Would you rather always know exactly how the other feels, or always be a little curious?": "Você prefere sempre saber exatamente como o outro se sente, ou sempre ser um pouco curioso?",
        "Would you rather compliment each other daily, or save them for when they really count?": "Você prefere elogiar um ao outro diariamente ou guardá-los para quando eles realmente contam?",
        "Would you rather resolve fights the same night, or take a full day to think first?": "Você prefere resolver brigas na mesma noite ou tirar um dia inteiro para pensar primeiro?",
        "Would you rather a couple's therapist we check in with yearly, or handle everything ourselves?": "Você prefere um terapeuta de casal com quem verificamos anualmente ou cuidamos de tudo sozinhos?",
        "Would you rather be best friends who fell in love, or lovers who became best friends?": "Vocês preferem ser melhores amigos que se apaixonaram ou amantes que se tornaram melhores amigos?",
        "Would you rather express love through big gestures or tiny daily ones?": "Você prefere expressar amor através de grandes gestos ou pequenos gestos diários?",
        "Would you rather I remembered the small details, or the big milestones better?": "Você prefere que eu me lembre melhor dos pequenos detalhes ou dos grandes marcos?",
        "Would you rather we grow at the exact same pace, or take turns leading?": "Você prefere que cresçamos exatamente no mesmo ritmo ou nos revezemos liderando?",
        "Would you rather a relationship with zero secrets, or one with a little mystery left?": "Você prefere um relacionamento com zero segredos ou um com um pouco de mistério?",
        "Would you rather retire early and modestly, or retire late but wealthy?": "Você prefere se aposentar cedo e modestamente, ou se aposentar tarde, mas rico?",
        "Would you rather a wedding abroad, or a wedding at home with everyone we love?": "Você prefere um casamento no exterior ou um casamento em casa com todos que amamos?",
        "Would you rather one big family reunion a year, or small visits often?": "Você prefere uma grande reunião familiar por ano ou pequenas visitas frequentes?",
        "Would you rather our kids, if any, look more like you or act more like you?": "Você prefere que nossos filhos, se houver algum, se pareçam mais com você ou ajam mais como você?",
        "Would you rather build our dream home from scratch, or renovate an old one full of character?": "Você prefere construir a casa dos nossos sonhos do zero ou renovar uma antiga cheia de personalidade?",
        "Would you rather one joint bank account for everything, or separate with shared bills only?": "Você prefere uma conta bancária conjunta para tudo ou separada apenas com contas compartilhadas?",
        "Would you rather move for my dream job, or yours, if it ever came down to it?": "Você preferiria se mudar para o meu emprego dos sonhos, ou o seu, se alguma vez chegasse a esse ponto?",
        "Would you rather grow old in the same house, or move somewhere new later?": "Você prefere envelhecer na mesma casa ou se mudar para um lugar novo mais tarde?",
        "Would you rather leave a legacy through work, or through the family and love we build?": "Você prefere deixar um legado através do trabalho, ou através da família e do amor que construímos?",
        "Would you rather plan our future in five-year chunks, or take it one year at a time?": "Você prefere planejar nosso futuro em pedaços de cinco anos ou levá-lo um ano de cada vez?",
        "Would you rather get snowed in together for a week with no wifi, or stuck at an airport for 24 hours?": "Vocês preferem ficar juntos por uma semana sem Wi-Fi ou ficar presos em um aeroporto por 24 horas?",
        "Would you rather our car break down in the middle of nowhere, or our flight get cancelled at 3am?": "Você prefere que nosso carro quebre no meio do nada ou que nosso voo seja cancelado às 3 da manhã?",
        "Would you rather accidentally match outfits at a party, or show up to the wrong event together?": "Você prefere combinar roupas acidentalmente em uma festa ou aparecer no evento errado juntos?",
        "Would you rather lose the wifi password forever, or lose the TV remote forever?": "Você prefere perder a senha do Wi-Fi para sempre ou perder o controle remoto da TV para sempre?",
        "Would you rather both forget an anniversary in the same year, or both remember it twice?": "Você prefere que ambos se esqueçam de um aniversário no mesmo ano ou que ambos se lembrem dele duas vezes?",
        "Would you rather survive a blackout with candles and card games, or a heatwave with one fan?": "Você prefere sobreviver a um apagão com velas e jogos de cartas ou a uma onda de calor com um ventilador?",
        "Would you rather get soaked in a surprise storm on a date, or freeze walking home from one?": "Você prefere ficar encharcado em uma tempestade surpresa em um encontro, ou congelar a pé para casa de um?",
        "Would you rather both oversleep and miss something important, or both show up two hours early?": "Você prefere dormir demais e perder algo importante, ou ambos aparecem duas horas mais cedo?",
        "Would you rather adopt a chaotic puppy together, or foster ten fish that all need names?": "Você prefere adotar um filhote caótico juntos ou criar dez peixes que precisam de nomes?",
        "Would you rather deal with a flat tire on a road trip, or a dead phone battery on a hike?": "Você prefere lidar com um pneu furado em uma viagem ou uma bateria de telefone descarregada em uma caminhada?",
        "Would you rather relive the day we met exactly as it happened, or relive our best date so far?": "Você prefere reviver o dia em que nos conhecemos exatamente como aconteceu ou reviver nosso melhor encontro até agora?",
        "Would you rather rewatch our first year together like a movie, or skip to a highlight reel?": "Você prefere assistir novamente ao nosso primeiro ano juntos como um filme ou pular para um rolo de destaque?",
        "Would you rather keep every old photo of us, or keep only the best ten forever?": "Você prefere manter todas as nossas fotos antigas ou manter apenas as dez melhores para sempre?",
        "Would you rather remember every text we ever sent, or only the handwritten notes?": "Você prefere se lembrar de todas as mensagens que enviamos ou apenas das anotações manuscritas?",
        "Would you rather revisit our first date spot every year, or find a new one every year?": "Você prefere revisitar nosso primeiro ponto de encontro todos os anos ou encontrar um novo a cada ano?",
        "Would you rather relive our worst fight to fix it perfectly, or leave it in the past untouched?": "Você prefere reviver nossa pior luta para consertá-la perfeitamente, ou deixá-la no passado intocada?",
        "Would you rather rewatch how nervous we both were at the start, or skip to how comfortable we are now?": "Você prefere observar o quão nervosos nós dois estávamos no início ou pular para o quão confortáveis estamos agora?",
        "Would you rather keep the exact playlist from when we started dating, or update it every year?": "Você prefere manter a lista de reprodução exata de quando começamos a namorar ou atualizá-la todos os anos?",
        "Would you rather remember my first-date outfit forever, or forget it and be surprised by old photos?": "Você prefere se lembrar da minha roupa de primeiro encontro para sempre, ou esquecê-la e se surpreender com fotos antigas?",
        "Would you rather relive the moment you knew you loved me, or the moment I first said it back?": "Você prefere reviver o momento em que soube que me amava ou o momento em que eu disse isso pela primeira vez?",
        "Would you rather our love story be a slow-burn indie film, or a big flashy musical?": "Você prefere que nossa história de amor seja um filme indie de queima lenta ou um grande musical chamativo?",
        "Would you rather I serenaded you badly in public, or wrote you a private song instead?": "Você preferiria que eu fizesse uma serenata em público ou escrevesse uma música particular para você?",
        "Would you rather cosplay as our favorite fictional couple for a day, or invent our own?": "Você prefere fazer cosplay como nosso casal fictício favorito por um dia ou inventar o nosso?",
        "Would you rather binge an entire series in one weekend, or watch one episode a week for a year?": "Você prefere assistir a uma série inteira em um fim de semana ou assistir a um episódio por semana durante um ano?",
        "Would you rather our relationship playlist be all one genre, or a chaotic mix of everything?": "Você prefere que nossa playlist de relacionamento seja um gênero ou uma mistura caótica de tudo?",
        "Would you rather I quoted movies constantly, or you did?": "Você prefere que eu cite filmes constantemente, ou você fez?",
        "Would you rather a couple's karaoke duet we're actually good at, or hilariously bad at?": "Você prefere um dueto de karaokê de casal em que somos realmente bons ou hilariantemente ruins?",
        "Would you rather live in a rom-com plot, or a low-key slice-of-life story?": "Você prefere viver em um enredo de comédia romântica ou em uma história de vida discreta?",
        "Would you rather I dressed as your favorite character for Halloween, or you dressed as mine?": "Você prefere que eu me vista como seu personagem favorito para o Halloween, ou você se vestiu como meu?",
        "Would you rather our text notification be a movie quote, or a song lyric?": "Você prefere que nossa notificação por texto seja uma citação de filme ou uma letra de música?",
        "What is the first thing you find yourself noticing about me when I walk into a room?": "Qual é a primeira coisa que você percebe sobre mim quando entro em uma sala?",
        "What is your favorite flirty text I've ever sent you?": "Qual é a sua mensagem de paquera favorita que eu já te enviei?",
        "How do you flirt when you're trying not to be obvious?": "Como você flerta quando está tentando não ser óbvio?",
        "Give me a compliment you don't say often enough.": "Me dê um elogio que você não diz com frequência suficiente.",
        "What is a physical feature of mine you notice more than I think?": "Qual é uma característica física minha que você percebe mais do que eu penso?",
        "Compliment my personality in the most specific way you can.": "Elogie minha personalidade da maneira mais específica possível.",
        "What's a completely ordinary thing I do that you secretly find attractive?": "O que é uma coisa completamente comum que eu faço que você secretamente acha atraente?",
        "What outfit of mine is your soft spot?": "Qual roupa minha é o seu ponto fraco?",
        "When do I look most 'like myself' to you?": "Quando eu pareço mais \"eu mesmo\" para você?",
        "When did you first feel real chemistry between us?": "Quando você sentiu a verdadeira química entre nós?",
        "What instantly puts you in a flirty mood with me?": "O que instantaneamente coloca você em um clima de flerte comigo?",
        "Describe our chemistry in three words.": "Descreva nossa química em três palavras.",
        "Describe your favorite kiss we've had, and why it stands out.": "Descreva seu beijo favorito que tivemos e por que ele se destaca.",
        "Are you more of a slow kiss or a sudden kiss person?": "Você é mais uma pessoa que beija devagar ou de repente?",
        "Where is your favorite place to be kissed?": "Qual é o seu lugar favorito para ser beijado?",
        "Do you prefer slow and teasing, or spontaneous and a little wild? Tell me why.": "Você prefere lento e provocador, ou espontâneo e um pouco selvagem? Me diga por quê.",
        "What kind of attention from me makes you melt?": "Que tipo de atenção minha faz você derreter?",
        "Lights on or lights off — and what else matters to you?": "Luzes acesas ou apagadas — e o que mais importa para você?",
        "Plan our perfect flirty date night in three sentences.": "Planeje nossa noite perfeita de namoro em três frases.",
        "Tell me exactly how you want me to miss you.": "Diga-me exatamente como quer que eu sinta sua falta.",
        "Act out (or describe) how you'd pull me closer.": "Aja (ou descreva) como você me aproximaria.",
        "Narrate the next time we close a door behind us.": "Narre da próxima vez que fecharmos uma porta atrás de nós.",
        "What makes our connection feel unique compared to past ones?": "O que faz com que nossa conexão pareça única em comparação com as anteriores?",
        "What is a soft, non-physical thing that still feels intimate?": "O que é uma coisa suave, não física, que ainda parece íntima?",
        "Send a flirty emoji only you would understand.": "Envie um emoji de paquera que só você entenderia.",
        "Would you rather candles or fairy lights?": "Você prefere velas ou luzes de fadas?",
        "Flirt with me for 30 seconds without stopping.": "Flerte comigo por 30 segundos sem parar.",
        "List five things that attract you to me, fast.": "Liste cinco coisas que te atraem para mim, rápido.",
        "Write a cheesy pickup line about me — then a sincere one.": "Escreva uma frase extravagante sobre mim — depois uma sincera.",
        "Book (or pretend to book) our next flirty plan out loud.": "Reserve (ou finja reservar) nosso próximo plano de flerte em voz alta.",
        "What's a small crush detail you noticed this week?": "O que é um pequeno detalhe de paixão que você notou esta semana?",
        "What should I text you right now to make you smile?": "O que devo enviar agora para você sorrir?",
        "How do you want goodnight to feel when we're apart?": "Como você quer que a boa noite se sinta quando estivermos separados?",
        "Describe us sharing headphones on public transit.": "Descreva-nos compartilhando fones de ouvido no transporte público.",
        "When did a simple 'hi' from me feel different?": "Quando é que um simples &quot;oi&quot; meu passou a ter um significado diferente?",
        "Tell me your honest preference about pace and pressure — no guessing.": "Diga-me sua preferência honesta sobre ritmo e pressão — sem adivinhar.",
        "Guide me: how do you like to be kissed when you've missed me?": "Guie-me: como você gosta de ser beijada quando sente minha falta?",
        "Share one desire and one boundary in the same breath.": "Compartilhe um desejo e um limite no mesmo fôlego.",
        "Create a secret code word that means 'come closer'.": "Crie uma palavra de código secreto que signifique \"aproxime-se\".",
        "What's a flirty habit of mine you wish I did more often?": "Qual é o meu hábito de paquera que você gostaria que eu fizesse com mais frequência?",
        "If you had to flirt with me using only your eyes across a room, how would you do it?": "Se você tivesse que flertar comigo usando apenas seus olhos em uma sala, como você faria isso?",
        "What's the boldest way you've ever flirted with me?": "Qual foi a maneira mais ousada de você flertar comigo?",
        "What flirty move works on you every single time?": "Que movimento de flerte funciona em você todas as vezes?",
        "How would you flirt with me if we were meeting for the very first time again?": "Como você flertaria comigo se estivéssemos nos encontrando pela primeira vez de novo?",
        "What's a flirty text you've drafted but never sent?": "O que é uma mensagem de paquera que você redigiu, mas nunca enviou?",
        "What's the difference between how you flirt in public versus in private?": "Qual é a diferença entre como você flerta em público e em particular?",
        "Compliment the way I say your name.": "Elogie o jeito que eu digo seu nome.",
        "What's a compliment about me you think I don't believe enough?": "O que é um elogio sobre mim que você acha que eu não acredito o suficiente?",
        "Tell me something about my hands, my laugh, or my walk that you love.": "Conte-me algo sobre minhas mãos, minha risada ou minha caminhada que você ama.",
        "What compliment would surprise me the most right now?": "Que elogio me surpreenderia mais agora?",
        "Say something flattering about how I make you feel, not just how I look.": "Diga algo lisonjeiro sobre como eu faço você se sentir, não apenas como eu pareço.",
        "What's the most honest compliment you can give me in ten seconds?": "Qual é o elogio mais honesto que você pode me dar em dez segundos?",
        "What do you compliment me on to other people when I'm not around?": "O que você me elogia quando não estou por perto?",
        "What's an unexpected thing about me that you find irresistibly attractive?": "O que há de inesperado em mim que você acha irresistivelmente atraente?",
        "When am I most attractive to you — dressed up, or completely relaxed at home?": "Quando sou mais atraente para você — vestido ou completamente relaxado em casa?",
        "What's a sound I make that you find surprisingly attractive?": "Qual é o som que eu faço que você acha surpreendentemente atraente?",
        "What's something I do without thinking that pulls you in every time?": "O que é algo que eu faço sem pensar que te atrai todas as vezes?",
        "Describe the moment you realize, mid-conversation, that you're really into me.": "Descreva o momento em que você percebe, no meio da conversa, que você realmente gosta de mim.",
        "What's an attraction you didn't expect to develop over time?": "O que é uma atração que você não esperava desenvolver ao longo do tempo?",
        "What's the most attractive thing about the way I treat other people?": "Qual é a coisa mais atraente sobre a maneira como trato as outras pessoas?",
        "What's a look we give each other that says everything without words?": "Qual é o olhar que damos um ao outro que diz tudo sem palavras?",
        "Describe the feeling of the room changing when we lock eyes.": "Descreva a sensação da sala mudando quando fechamos os olhos.",
        "What's a moment lately where our chemistry surprised even you?": "Qual foi o momento ultimamente em que nossa química surpreendeu até você?",
        "How do you know, physically, when the mood between us shifts?": "Como você sabe, fisicamente, quando o clima entre nós muda?",
        "What's a color, scent, or song that instantly brings our chemistry to mind?": "O que é uma cor, perfume ou música que instantaneamente traz nossa química à mente?",
        "What happens in your body when I walk into the room?": "O que acontece em seu corpo quando entro na sala?",
        "Describe our chemistry as if it were the opening line of a novel.": "Descreva nossa química como se fosse a linha de abertura de um romance.",
        "Slow and lingering or quick and playful — what's your mood tonight?": "Lento e persistente ou rápido e brincalhão — qual é o seu humor esta noite?",
        "What's the kiss you think about most when we're apart?": "Qual é o beijo que você mais pensa quando estamos separados?",
        "Where on my face or neck do you love kissing most?": "Onde no meu rosto ou pescoço você mais gosta de beijar?",
        "Describe the perfect \"hello\" kiss versus the perfect \"goodbye\" kiss.": "Descreva o beijo perfeito de \"olá\" versus o beijo perfeito de \"adeus\".",
        "What's a kiss we haven't had yet that you'd love to?": "O que é um beijo que ainda não tivemos que você adoraria?",
        "How do you want to be kissed when you've had a hard day?": "Como você quer ser beijada quando teve um dia difícil?",
        "What's the most unexpected place we've ever kissed?": "Qual foi o lugar mais inesperado que já beijamos?",
        "What's a boundary you want to reaffirm, even if we've talked about it before?": "Qual é um limite que você quer reafirmar, mesmo que já tenhamos conversado sobre isso antes?",
        "What helps you feel most desired by me?": "O que ajuda você a se sentir mais desejado por mim?",
        "What's something intimate that has nothing to do with physical touch?": "O que é algo íntimo que não tem nada a ver com o toque físico?",
        "What pace feels right for us tonight — slow, playful, or intense?": "Que ritmo parece certo para nós esta noite — lento, brincalhão ou intenso?",
        "What word or signal could we use to check in with each other in the moment?": "Que palavra ou sinal poderíamos usar para verificar um com o outro no momento?",
        "What does feeling safe with me, physically, look like to you?": "O que significa sentir-se seguro comigo, fisicamente, para você?",
        "What's something you want more of from me after dark — attention, patience, or playfulness?": "O que você quer mais de mim depois do anoitecer — atenção, paciência ou brincadeira?",
        "Show me the face you make right before you kiss me.": "Mostre-me a cara que você faz antes de me beijar.",
        "Show me how close is \"too close\" and how close is \"just right.\"": "Mostre-me o quão perto está \"muito perto\" e o quão perto está \"certo\".",
        "Show me one thing your hands do when you're nervous around me.": "Mostre-me uma coisa que suas mãos fazem quando você está nervosa perto de mim.",
        "Do you prefer slow mornings together, or spontaneous middle-of-the-day moments?": "Você prefere manhãs lentas juntos ou momentos espontâneos no meio do dia?",
        "What's your ideal balance between playful teasing and sincere affection?": "Qual é o seu equilíbrio ideal entre provocações lúdicas e afeto sincero?",
        "Do you prefer being pursued, or being the one who pursues?": "Você prefere ser perseguido ou ser aquele que persegue?",
        "What's more you: candlelight and music, or comfortable pajamas and honesty?": "Além disso, você: luz de velas e música, ou pijamas confortáveis e honestidade?",
        "Do you prefer affection in public, in private, or an even mix?": "Você prefere afeto em público, em particular ou uma mistura uniforme?",
        "What's your preferred way to be reassured when you feel insecure, intimately?": "Qual é a sua maneira preferida de se sentir seguro quando se sente inseguro, intimamente?",
        "Do you prefer surprises in the moment, or a little advance warning?": "Você prefere surpresas no momento, ou um pequeno aviso prévio?",
        "Describe us slow dancing in the kitchen with nowhere to be.": "Descreva-nos dançando lentamente na cozinha sem ter para onde ir.",
        "Narrate a rainy day spent entirely wrapped up together.": "Narre um dia chuvoso passado totalmente embrulhado.",
        "Describe the drive home from a date that went a little too well.": "Descreva a viagem para casa de um encontro que correu um pouco bem demais.",
        "Narrate the first five minutes after I surprise you at your door.": "Narre os primeiros cinco minutos depois que eu te surpreender na sua porta.",
        "Describe a lazy Sunday morning that turns romantic without either of us planning it.": "Descreva uma manhã preguiçosa de domingo que se torna romântica sem que nenhum de nós planeje.",
        "Narrate us getting ready for a night out and being a little too distracted by each other.": "Narre-nos nos preparando para uma noite fora e nos distraindo um pouco um com o outro.",
        "Describe the quiet moment after a long day when all either of us wants is closeness.": "Descreva o momento de silêncio depois de um longo dia em que tudo o que queremos é proximidade.",
        "Whisper, or write, the first word that comes to mind when you think \"desire.\"": "Sussurre, ou escreva, a primeira palavra que vem à mente quando você pensa em \"desejo\".",
        "Skip this question and instead close the distance between us right now.": "Ignore esta pergunta e, em vez disso, diminua a distância entre nós agora.",
        "Who would survive longer in a zombie apocalypse?": "Quem sobreviveria mais tempo em um apocalipse zumbi?",
        "Who would be the better reality TV contestant?": "Quem seria o melhor concorrente de reality show?",
        "Who would accidentally start a cult with a group project speech?": "Quem acidentalmente iniciaria um culto com um discurso de projeto em grupo?",
        "Who would become friends with the flight attendant first?": "Quem se tornaria amigo da comissária de bordo primeiro?",
        "Who would win in a dance-off with no practice?": "Quem venceria em um duelo de dança sem prática?",
        "Who is more likely to accidentally become famous online?": "Quem tem mais probabilidade de se tornar famoso acidentalmente online?",
        "Who is more likely to trip in public and pretend it was on purpose?": "Quem é mais propenso a tropeçar em público e fingir que foi de propósito?",
        "Who is more likely to cry during a movie?": "Quem é mais propenso a chorar durante um filme?",
        "Who is more likely to adopt a street animal on impulse?": "Quem é mais propenso a adotar um animal de rua por impulso?",
        "Who is more likely to forget why they walked into a room?": "Quem é mais propenso a esquecer por que entrou em uma sala?",
        "Who is more likely to wave back at someone who wasn't waving at them?": "Quem é mais propenso a acenar de volta para alguém que não estava acenando para eles?",
        "Who is more likely to send a text to the wrong person?": "Quem é mais propenso a enviar uma mensagem de texto para a pessoa errada?",
        "Who is more likely to have food on their face without noticing?": "Quem é mais propenso a ter comida no rosto sem perceber?",
        "Who would win an argument if neither of you could use facts?": "Quem ganharia uma discussão se nenhum de vocês pudesse usar fatos?",
        "Who is more stubborn when you're both wrong?": "Quem é mais teimoso quando vocês dois estão errados?",
        "Who apologizes first after a silly fight?": "Quem se desculpa primeiro depois de uma briga boba?",
        "Who would handle a sudden power outage better?": "Quem lidaria melhor com uma queda de energia repentina?",
        "Who would stay calmer if the car broke down?": "Quem ficaria mais calmo se o carro quebrasse?",
        "Who would negotiate better with a landlord?": "Quem negociaria melhor com um senhorio?",
        "Who would get lost even while using GPS?": "Quem se perderia mesmo usando GPS?",
        "Who would forget their own birthday first?": "Quem esqueceria seu próprio aniversário primeiro?",
        "Who would talk to a plant like it's a roommate?": "Quem falaria com uma planta como se fosse uma colega de quarto?",
        "Who is the better cook, honestly?": "Quem é o melhor cozinheiro, honestamente?",
        "Who has better taste in music?": "Quem tem melhor gosto musical?",
        "Who is funnier at 1 a.m.?": "Quem é mais engraçado à 1 da manhã?",
        "Who will fall asleep first tonight?": "Quem vai dormir primeiro esta noite?",
        "Who will text first tomorrow morning?": "Quem enviará a primeira mensagem amanhã de manhã?",
        "Who will suggest dessert first?": "Quem vai sugerir a sobremesa primeiro?",
        "Who is more dramatic about being a little sick?": "Quem é mais dramático sobre estar um pouco doente?",
        "Who steals more of the blanket?": "Quem rouba mais do cobertor?",
        "Who is more likely to say 'I'm fine' when not fine?": "Quem é mais propenso a dizer \"estou bem\" quando não está bem?",
        "Which one of your inside jokes would confuse a stranger the most?": "Qual das suas piadas internas mais confundiria um estranho?",
        "Who starts the inside jokes more often?": "Quem começa as piadas internas com mais frequência?",
        "Who would last longer without their phone?": "Quem duraria mais tempo sem o celular?",
        "Who would win a staring contest?": "Quem ganharia um concurso de olhares fixos?",
        "Who would survive a week of only spicy food?": "Quem sobreviveria a uma semana apenas de comida picante?",
        "Who would spend $500 on something completely unnecessary?": "Quem gastaria $ 500 em algo completamente desnecessário?",
        "Who would win at charades?": "Quem venceria em charadas?",
        "Who would make a better podcast host?": "Quem seria um anfitrião de podcast melhor?",
        "Recreate your first date, right now, as best you can from memory.": "Recrie seu primeiro encontro, agora, da melhor maneira que puder, de memória.",
        "Whoever laughs first has to do a silly dance.": "Quem ri primeiro tem que fazer uma dança boba.",
        "Who would pack lighter for a trip?": "Quem levaria mais leve para uma viagem?",
        "Who would become the group chat admin everyone fears?": "Quem se tornaria o administrador de chat em grupo que todos temem?",
        "Who is more likely to rewatch the same series again?": "Quem é mais propenso a assistir novamente à mesma série?",
        "Who is more likely to buy a gadget that never gets used?": "Quem é mais propenso a comprar um gadget que nunca é usado?",
        "Who is more likely to mishear lyrics confidently?": "Quem é mais propenso a ouvir mal as letras com confiança?",
        "Who uses more sarcasm in a disagreement?": "Quem usa mais sarcasmo em um desentendimento?",
        "Who would lead if you got locked out of the house?": "Quem lideraria se você ficasse trancado fora de casa?",
        "Who would befriend a raccoon energy person first?": "Quem faria amizade com uma pessoa de energia de guaxinim primeiro?",
        "Who takes better photos of the other person?": "Quem tira fotos melhores da outra pessoa?",
        "Who will say 'I told you so' next?": "Quem vai dizer 'eu te avisei' a seguir?",
        "Who is slower to leave the house?": "Quem é mais lento para sair de casa?",
        "What meme energy are you as a couple?": "Que energia de meme vocês são como um casal?",
        "Who would win at Mario Kart with one hand?": "Quem ganharia no Mario Kart com uma mão?",
        "Who would survive a week as a barista better?": "Quem sobreviveria melhor a uma semana como barista?",
        "Who would accidentally join a pyramid scheme first?": "Quem se juntaria acidentalmente a um esquema de pirâmide primeiro?",
        "Who is more likely to name a pet something ridiculous?": "Quem é mais propenso a chamar um animal de estimação de algo ridículo?",
        "Who is more likely to have a public wardrobe fail?": "Quem é mais propenso a ter uma falha no guarda-roupa público?",
        "Who changes the subject to food mid-fight?": "Quem muda de assunto para comida no meio da luta?",
        "Who would handle a cancelled flight better?": "Quem lidaria melhor com um voo cancelado?",
        "Who would talk during a horror movie more?": "Quem falaria mais durante um filme de terror?",
        "Who is messier in the kitchen?": "Quem é mais bagunçado na cozinha?",
        "Who will suggest a nap first this weekend?": "Quem vai sugerir um cochilo primeiro neste fim de semana?",
        "Who is more competitive about board games?": "Quem é mais competitivo em jogos de tabuleiro?",
        "Who quotes movies more out of context?": "Quem cita filmes mais fora de contexto?",
        "Who can hold a plank longer?": "Quem pode segurar uma prancha por mais tempo?",
        "Who would invent a worse startup idea?": "Quem inventaria uma ideia de startup pior?",
        "Who would become a conspiracy theory believer as a bit?": "Quem se tornaria um crente da teoria da conspiração?",
        "Who is more likely to cry at an airport goodbye?": "Quem é mais propenso a chorar em um aeroporto de despedida?",
        "Who is more likely to call a teacher 'mom'?": "Quem é mais propenso a chamar um professor de 'mãe'?",
        "Who needs more time to cool down?": "Quem precisa de mais tempo para se refrescar?",
        "Who would remember the insurance password?": "Quem se lembraria da senha do seguro?",
        "Who would name their WiFi something embarrassing?": "Quem chamaria seu WiFi de algo embaraçoso?",
        "Who is better at gift-giving?": "Quem é melhor em dar presentes?",
        "Who will become a morning person first?": "Quem se tornará uma pessoa matinal primeiro?",
        "Who leaves more dishes 'to soak'?": "Quem deixa mais pratos 'para molhar'?",
        "Who does the better impression of the other?": "Quem faz a melhor impressão do outro?",
        "Who can name more capitals in 30 seconds?": "Quem pode nomear mais capitais em 30 segundos?",
        "Who would survive a reality dating show longer?": "Quem sobreviveria a um reality show por mais tempo?",
        "Who would write a viral tweet by accident?": "Quem escreveria um tweet viral por acidente?",
        "Who is more likely to fall for a prank twice?": "Quem é mais propenso a cair em uma pegadinha duas vezes?",
        "Who is more likely to wave at a reflective window?": "Quem é mais propenso a acenar em uma janela reflexiva?",
        "Who brings up old screenshots in a playful roast?": "Quem traz capturas de tela antigas em um assado brincalhão?",
        "Who would stay calm in a haunted house?": "Quem ficaria calmo em uma casa assombrada?",
        "Who would collect too many mugs?": "Quem colecionaria canecas demais?",
        "Who is better at parallel parking?": "Quem é melhor em estacionamento paralelo?",
        "Who will suggest ordering takeout first?": "Quem vai sugerir pedir comida para viagem primeiro?",
        "Who is more likely to say 'one more episode'?": "Quem é mais propenso a dizer \"mais um episódio\"?",
        "Who creates nicknames faster?": "Quem cria apelidos mais rápido?",
        "Who would win a silent contest for 5 minutes?": "Quem ganharia um concurso silencioso por 5 minutos?",
        "Who would become a food critic on pure confidence?": "Quem se tornaria um crítico de alimentos por pura confiança?",
        "Who would accidentally become the favorite of a random grandma?": "Quem acidentalmente se tornaria o favorito de uma avó aleatória?",
        "Who is more likely to start a plant collection?": "Quem é mais propenso a iniciar uma coleção de plantas?",
        "Who is more likely to trip while trying to look cool?": "Quem é mais propenso a tropeçar enquanto tenta parecer legal?",
        "Who wins when the debate is about movie plots?": "Quem ganha quando o debate é sobre enredos de filmes?",
        "Who would fix a leaky faucet with pure stubbornness?": "Quem consertaria uma torneira com vazamento com pura teimosia?",
        "Who would talk to Alexa like a person?": "Quem falaria com Alexa como uma pessoa?",
        "Who has the better 'I told you so' face?": "Quem tem a melhor cara de 'eu te disse'?",
        "Who will finish their drink first on the next date?": "Quem terminará a bebida primeiro no próximo encontro?",
        "Who is more likely to hide online shopping packages?": "Quem é mais propenso a esconder pacotes de compras online?",
        "Who would win a pillow fight in under 10 seconds?": "Quem venceria uma luta de travesseiros em menos de 10 segundos?",
        "Who would forget they're on a video call and start singing?": "Quem esqueceria que está em uma videochamada e começaria a cantar?",
        "Who would talk their way out of a speeding ticket?": "Quem conseguiria escapar de uma multa por excesso de velocidade?",
        "Who would end up on a first-name basis with every waiter in town?": "Quem acabaria em uma base de primeiro nome com todos os garçons da cidade?",
        "Who would win an argument with a self-checkout machine?": "Quem ganharia uma discussão com uma máquina de autoatendimento?",
        "Who would accidentally become a regular extra in someone else's vacation photos?": "Quem acidentalmente se tornaria um figurante comum nas fotos de férias de outra pessoa?",
        "Who would survive being locked out in pajamas the longest?": "Quem sobreviveria mais tempo trancado de pijama?",
        "Who would win a debate against a toddler?": "Quem venceria um debate contra uma criança?",
        "Who is more likely to text \"we need to talk\" as a joke?": "Quem é mais propenso a escrever \"precisamos conversar\" como uma piada?",
        "Who is more likely to fall asleep during a movie they picked?": "Quem é mais propenso a adormecer durante um filme que escolheu?",
        "Who is more likely to buy matching outfits without asking first?": "Quem é mais propenso a comprar roupas combinando sem perguntar primeiro?",
        "Who is more likely to start clapping at the wrong moment?": "Quem é mais propenso a começar a aplaudir no momento errado?",
        "Who is more likely to over-explain a simple answer?": "Quem é mais propenso a explicar demais uma resposta simples?",
        "Who is more likely to name every houseplant?": "Quem é mais propenso a nomear cada planta de casa?",
        "Who is more likely to get emotionally attached to a video game character?": "Quem é mais propenso a se apegar emocionalmente a um personagem de videogame?",
        "Who is more likely to save a spider instead of squashing it?": "Quem é mais propenso a salvar uma aranha em vez de esmagá-la?",
        "Who is more likely to laugh at their own joke before finishing it?": "Quem é mais propenso a rir de sua própria piada antes de terminá-la?",
        "Who is more likely to walk into a glass door?": "Quem é mais propenso a entrar em uma porta de vidro?",
        "Who is more likely to clap when a plane lands?": "Quem é mais propenso a aplaudir quando um avião pousa?",
        "Who is more likely to sing the wrong lyrics with total confidence?": "Quem é mais propenso a cantar as letras erradas com total confiança?",
        "Who is more likely to answer a call meant for someone else and keep talking?": "Quem é mais propenso a atender uma ligação destinada a outra pessoa e continuar falando?",
        "Who is more likely to accidentally like an old photo while stalking someone's profile?": "Quem é mais propenso a gostar acidentalmente de uma foto antiga enquanto persegue o perfil de alguém?",
        "Who is more likely to say \"you too\" when a waiter says \"enjoy your meal\"?": "Quem é mais propenso a dizer \"você também\" quando um garçom diz \"aproveite sua refeição\"?",
        "Who is more likely to get caught talking to themselves in the mirror?": "Quem é mais propenso a ser pego falando sozinho no espelho?",
        "Who holds a grudge about the thermostat the longest?": "Quem guarda rancor do termostato por mais tempo?",
        "Who is more likely to bring receipts, literal or figurative, into an argument?": "Quem é mais propenso a trazer recibos, literais ou figurativos, para um argumento?",
        "Who wins the debate over who's the better driver?": "Quem vence o debate sobre quem é o melhor piloto?",
        "Who is quicker to admit they're wrong, even a little?": "Quem é mais rápido em admitir que está errado, mesmo que um pouco?",
        "Who turns an argument into a bit within five minutes?": "Quem transforma um argumento em um pouco em cinco minutos?",
        "Who is more stubborn about the \"right\" way to load a dishwasher?": "Quem é mais teimoso sobre a maneira \"certa\" de carregar uma máquina de lavar louça?",
        "Who wins the \"who's more tired\" competition every single time?": "Quem ganha a competição \"quem está mais cansado\" todas as vezes?",
        "Who is more likely to fake being asleep to avoid a conversation?": "Quem é mais propenso a fingir estar dormindo para evitar uma conversa?",
        "Who would take charge if the wifi went out during a big game?": "Quem assumiria o controle se o Wi-Fi saísse durante um grande jogo?",
        "Who would handle discovering a leak under the sink better?": "Quem lidaria melhor com a descoberta de um vazamento sob a pia?",
        "Who would stay calmer if we missed our own flight?": "Quem ficaria mais calmo se perdêssemos nosso próprio voo?",
        "Who would improvise dinner best if the stove broke?": "Quem improvisaria melhor o jantar se o fogão quebrasse?",
        "Who would be more useful in a zombie apocalypse grocery run?": "Quem seria mais útil em uma corrida de supermercado do apocalipse zumbi?",
        "Who would keep their cool if the GPS sent us the wrong way for an hour?": "Quem manteria a calma se o GPS nos enviasse para o lado errado por uma hora?",
        "Who would handle a surprise in-law visit with zero notice better?": "Quem lidaria melhor com uma visita surpresa de sogro sem aviso prévio?",
        "Who would fix a jammed door faster — with tools or brute force?": "Quem consertaria uma porta emperrada mais rápido — com ferramentas ou força bruta?",
        "Who would try to befriend a very suspicious pigeon?": "Quem tentaria fazer amizade com um pombo muito suspeito?",
        "Who would narrate grocery shopping like a nature documentary?": "Quem narraria as compras de supermercado como um documentário sobre a natureza?",
        "Who would give a dramatic TED talk about their favorite snack?": "Quem daria uma palestra dramática no TED sobre seu lanche favorito?",
        "Who would name their car something oddly specific?": "Quem chamaria seu carro de algo estranhamente específico?",
        "Who would try to have a full conversation with a self-driving car?": "Quem tentaria ter uma conversa completa com um carro autônomo?",
        "Who would organize a spontaneous parade over good news?": "Quem organizaria um desfile espontâneo sobre boas notícias?",
        "Who would negotiate with a vending machine that ate their money?": "Quem negociaria com uma máquina de venda automática que comeu seu dinheiro?",
        "Who would treat a robot vacuum like a pet?": "Quem trataria um robô aspirador como um animal de estimação?",
        "Who is the better multitasker, honestly?": "Quem é o melhor multitarefa, honestamente?",
        "Who has the more useful \"life hacks\"?": "Quem tem os \"truques de vida\" mais úteis?",
        "Who is better at remembering directions without GPS?": "Quem é melhor em lembrar direções sem GPS?",
        "Who tells a story with better pacing?": "Quem conta uma história com melhor ritmo?",
        "Who is more patient in long lines?": "Quem é mais paciente em longas filas?",
        "Who negotiates a better deal shopping?": "Quem negocia um melhor negócio de compras?",
        "Who has the stronger poker face?": "Quem tem a cara de poker mais forte?",
        "Who packs a suitcase more efficiently?": "Quem faz as malas com mais eficiência?",
        "Who will be the first to suggest getting a pet this year?": "Quem será o primeiro a sugerir a compra de um animal de estimação este ano?",
        "Who will bring up a vacation idea first this season?": "Quem trará uma ideia de férias primeiro nesta temporada?",
        "Who will fall for the next viral trend first?": "Quem vai se apaixonar pela próxima tendência viral primeiro?",
        "Who will start a new hobby first this year?": "Quem começará um novo hobby primeiro este ano?",
        "Who will cave and order dessert first tonight?": "Quem vai ceder e pedir a sobremesa primeiro esta noite?",
        "Who will remember to water the plants without being asked?": "Quem se lembrará de regar as plantas sem ser solicitado?",
        "Who will suggest canceling plans to stay in first?": "Quem sugerirá o cancelamento dos planos para ficar em primeiro lugar?",
        "Who takes up more closet space, if we're honest?": "Quem ocupa mais espaço no armário, se formos honestos?",
        "Who is more particular about how the towels are folded?": "Quem é mais específico sobre como as toalhas são dobradas?",
        "Who \"borrows\" the other's charger and never gives it back?": "Quem \"pega emprestado\" o carregador do outro e nunca o devolve?",
        "Who is louder chewing, and who will actually admit it?": "Quem mastiga mais alto e quem realmente admite isso?",
        "Who leaves the cabinet doors open more?": "Quem deixa as portas do armário mais abertas?",
        "Who hogs the good blanket first?": "Quem monopoliza o bom cobertor primeiro?",
        "Who is more particular about the \"correct\" TV volume?": "Quem é mais específico sobre o volume de TV \"correto\"?",
        "Who takes longer to pick something to watch?": "Quem leva mais tempo para escolher algo para assistir?",
        "What's a word only the two of you use, and what does it actually mean?": "O que é uma palavra que apenas vocês dois usam e o que ela realmente significa?",
        "What's a face one of you makes that instantly cracks the other up?": "O que é um rosto que um de vocês faz que instantaneamente quebra o outro?",
        "What bit have you done so many times it's basically tradition now?": "O que você já fez tantas vezes que é basicamente tradição agora?",
        "Who started your longest-running inside joke, and how?": "Quem começou sua piada interna mais antiga e como?",
        "What's a movie line you two quote way too often?": "O que é uma fala de filme que vocês dois citam com muita frequência?",
        "What's the weirdest thing that's become \"your song\" as a joke?": "Qual é a coisa mais estranha que se tornou \"sua música\" como uma piada?",
        "What's an overreaction one of you had that's now a running bit?": "O que é uma reação exagerada que um de vocês teve que agora é um pouco recorrente?",
        "What nickname exists only because of an inside joke?": "Que apelido existe apenas por causa de uma piada interna?",
        "Who can go the longest without checking their phone right now?": "Quem pode passar mais tempo sem verificar o telefone agora?",
        "Who can list five countries faster?": "Quem pode listar cinco países mais rapidamente?",
        "Who can do a better impression of the other, right now?": "Quem pode fazer uma melhor impressão do outro, agora?",
        "Who can hold eye contact the longest without laughing?": "Quem consegue manter contato visual por mais tempo sem rir?",
        "Who can come up with a rhyme for \"us\" the fastest?": "Quem pode criar uma rima para \"nós\" mais rápido?",
        "Who can guess the other's next words in a familiar story?": "Quem pode adivinhar as próximas palavras do outro em uma história familiar?",
        "Who can name more of each other's favorite things in 20 seconds?": "Quem pode nomear mais as coisas favoritas um do outro em 20 segundos?",
        "Who can keep a straight face the longest while the other tries to make them laugh?": "Quem consegue manter uma cara séria por mais tempo enquanto o outro tenta fazê-los rir?",
        "Who would win a debate about pineapple on pizza?": "Quem ganharia um debate sobre o abacaxi na pizza?",
        "Who would be a better game show contestant, honestly?": "Quem seria um concorrente de game show melhor, honestamente?",
        "Who would survive longer without coffee or tea?": "Quem sobreviveria mais tempo sem café ou chá?",
        "Who would win at a trivia night about each other?": "Quem ganharia em uma noite de curiosidades sobre o outro?",
        "Who would make friends with a stranger in line faster?": "Quem faria amizade com um estranho na fila mais rápido?",
        "Who would be more likely to cry at a commercial?": "Quem seria mais propenso a chorar em um comercial?",
        "Who would win a \"who can be quieter\" contest for one hour?": "Quem ganharia um concurso \"quem pode ser mais silencioso\" por uma hora?",
        "Who would be funnier live-tweeting a boring meeting?": "Quem seria mais engraçado twittando ao vivo uma reunião chata?",
        "Who is most likely to become the \"fun one\" at every party you both attend?": "Quem é mais propenso a se tornar o \"divertido\" em todas as festas que vocês dois participam?",
        "Who is most likely to remember a stranger's name better than their own coworker's?": "Quem é mais propenso a lembrar o nome de um estranho melhor do que o de seu próprio colega de trabalho?",
        "Who is most likely to turn a five-minute errand into an hour-long adventure?": "Quem é mais propenso a transformar uma missão de cinco minutos em uma aventura de uma hora?",
        "Who is most likely to win \"best hype person\" at the other's big moment?": "Quem tem mais probabilidade de ganhar \"melhor pessoa sensacionalista\" no grande momento do outro?",
        "What country should we visit together first?": "Que país devemos visitar juntos primeiro?",
        "Beach vacation, city trip, or nature escape — what's our next move?": "Férias na praia, viagem à cidade ou fuga da natureza — qual é o nosso próximo passo?",
        "What is a place from your childhood you'd like to show me?": "Que lugar da sua infância você gostaria de me mostrar?",
        "Would you rather a slow train journey or a quick flight for our trips?": "Você prefere uma viagem de trem lenta ou um voo rápido para nossas viagens?",
        "What would our dream home look like?": "Como seria a casa dos nossos sonhos?",
        "What is non-negotiable in a place we live?": "O que não é negociável em um lugar em que vivemos?",
        "Do you picture plants, pets, art — what makes a house feel like ours?": "Você imagina plantas, animais de estimação, arte — o que faz uma casa parecer nossa?",
        "City apartment or house with a yard?": "Apartamento urbano ou casa com quintal?",
        "Where do you picture your career five years from now?": "Onde você imagina sua carreira daqui a cinco anos?",
        "How can I best support your work goals?": "Como posso apoiar melhor seus objetivos de trabalho?",
        "What does work-life balance look like for us as a team?": "Como é o equilíbrio entre trabalho e vida pessoal para nós como equipe?",
        "If money didn't matter for one year, what would we do?": "Se o dinheiro não importasse por um ano, o que faríamos?",
        "What money habit do you want us to build together?": "Que hábito de dinheiro você quer que construamos juntos?",
        "Save for a house, travel, or experiences first — what's your priority?": "Poupe para uma casa, viagem ou experiências em primeiro lugar — qual é a sua prioridade?",
        "What would our perfect ordinary Sunday look like?": "Como seria o nosso domingo comum perfeito?",
        "Are we more morning coffee people or late-night talk people long-term?": "Somos mais pessoas que tomam café pela manhã ou pessoas que conversam tarde da noite a longo prazo?",
        "How social do you want our life to be — dinners out or quiet home?": "Quão social você quer que nossa vida seja — jantares fora ou casa tranquila?",
        "What kind of family life do you picture for us?": "Que tipo de vida familiar você imagina para nós?",
        "How involved do you want extended family to be in our daily life?": "Quão envolvido você quer que a família extensa esteja em nossa vida diária?",
        "What family tradition from your side do you want to keep?": "Que tradição familiar do seu lado você quer manter?",
        "Do you picture a pet in our future — and if so, what kind?": "Você imagina um animal de estimação em nosso futuro — e, em caso afirmativo, de que tipo?",
        "Dog, cat, or something unexpected?": "Cachorro, gato ou algo inesperado?",
        "What's one adventure you want us to take before we settle down?": "Qual é a aventura que você quer que a gente faça antes de se estabelecer?",
        "What scare (skydiving, camping, karaoke) should we try together?": "Que susto (paraquedismo, acampamento, karaokê) devemos tentar juntos?",
        "What does marriage mean to you, in your own words?": "O que o casamento significa para você, em suas próprias palavras?",
        "What would make a wedding feel like 'us'?": "O que faria um casamento parecer \"nós\"?",
        "Describe, in one paragraph, what you imagine our wedding day feeling like.": "Descreva, em um parágrafo, como você imagina o dia do nosso casamento.",
        "What tradition would you want us to create together?": "Que tradição você gostaria que criássemos juntos?",
        "Weekly date night, annual trip, or something weirder?": "Noite de encontro semanal, viagem anual ou algo mais estranho?",
        "How do you imagine we'll spend the holidays once we're together full-time?": "Como você imagina que passaremos as férias quando estivermos juntos em tempo integral?",
        "Do you prefer hosting or traveling for holidays?": "Prefere hospedar ou viajar de férias?",
        "What do you imagine us doing when we're old together?": "O que você nos imagina fazendo quando envelhecermos juntos?",
        "Where do you hope we grow old?": "Onde você espera que envelheçamos?",
        "What's a dream of yours that you want us to chase together?": "Qual é o seu sonho que você quer que perseguamos juntos?",
        "What personal dream should never get lost because of the relationship?": "Que sonho pessoal nunca deve ser perdido por causa do relacionamento?",
        "What's one thing you'd want on a shared bucket list right now?": "O que você gostaria de ter em uma lista de desejos compartilhada agora?",
        "Name three things we should do before five years pass.": "Cite três coisas que devemos fazer antes que passem cinco anos.",
        "Where do you think we'll be living five years from now?": "Onde você acha que estaremos vivendo daqui a cinco anos?",
        "Do you see us in Brazil, abroad, or both across different seasons?": "Você nos vê no Brasil, no exterior ou em ambas as estações?",
        "Plan our next date, right now, in detail.": "Planeje nossa próxima data, agora, em detalhes.",
        "What language would you want us to learn together?": "Que idioma você gostaria que aprendêssemos juntos?",
        "What color is our future kitchen, in your head?": "Qual é a cor da nossa futura cozinha, na sua cabeça?",
        "How do you feel about joint vs separate finances long-term?": "Como você se sente sobre finanças conjuntas versus separadas a longo prazo?",
        "How important is living near friends?": "Qual é a importância de morar perto de amigos?",
        "How do you feel about kids — timing, openness, fears?": "Como você se sente em relação às crianças — tempo, abertura, medos?",
        "What rules would our future pet have to follow?": "Que regras nosso futuro animal de estimação teria que seguir?",
        "What festival or concert should be on our list?": "Que festival ou concerto deve estar na nossa lista?",
        "What vows matter more to you: poetic or practical?": "O que os votos importam mais para você: poéticos ou práticos?",
        "What should we always do on our anniversary?": "O que devemos sempre fazer no nosso aniversário?",
        "New Year's Eve in or out, years from now?": "Véspera de Ano Novo dentro ou fora, daqui a alguns anos?",
        "What hobby do you hope we're still doing at 70?": "Que hobby você espera que ainda estejamos fazendo aos 70 anos?",
        "If we wrote a five-year plan tonight, what tops the list?": "Se escrevermos um plano de cinco anos esta noite, o que encabeça a lista?",
        "One spontaneous item and one planned item for the list.": "Um item espontâneo e um item planejado para a lista.",
        "Urban energy or quieter life — where does your gut go?": "Energia urbana ou vida mais tranquila — para onde vai o seu instinto?",
        "What memory do you hope we create this year?": "Que memória você espera que criemos este ano?",
        "Road trip across a country — which one?": "Viagem de carro por um país — qual?",
        "Guest room or home office if we had to choose one?": "Quarto de hóspedes ou escritório em casa, se tivéssemos que escolher um?",
        "How do we handle busy seasons without losing us?": "Como lidamos com as estações movimentadas sem nos perder?",
        "What does 'enough' money mean to you?": "O que o dinheiro \"suficiente\" significa para você?",
        "How much routine vs spontaneity do you want long-term?": "Quanta rotina vs espontaneidade você quer a longo prazo?",
        "What values do you hope our household has?": "Que valores você espera que nossa família tenha?",
        "Would you rather foster first or adopt for life?": "Você prefere adotar primeiro ou adotar por toda a vida?",
        "Camping for a weekend — yes, no, or luxury glamping only?": "Acampar por um fim de semana — sim, não ou apenas glamping de luxo?",
        "How do you want to handle last names, if at all?": "Como você quer lidar com sobrenomes, se for o caso?",
        "Sunday morning ritual idea — go.": "Ideia de ritual matinal de domingo — vá.",
        "Which holiday do you want to make 'ours'?": "Que feriado você quer fazer \"nosso\"?",
        "Travel when old, or deep roots in one place?": "Viajar quando velho, ou raízes profundas em um só lugar?",
        "What creative project could we do as a couple someday?": "Que projeto criativo poderíamos fazer como casal algum dia?",
        "A kind of food destination you want to travel for.": "Um tipo de destino gastronômico para o qual você deseja viajar.",
        "Same city forever or chapters in different places?": "A mesma cidade para sempre ou capítulos em lugares diferentes?",
        "Describe a random Tuesday with us in ten years.": "Descreva uma terça-feira aleatória conosco em dez anos.",
        "First class once or more trips on a budget?": "Primeira classe uma ou mais viagens com orçamento limitado?",
        "What is the first thing you'd hang on the wall?": "Qual é a primeira coisa que você penduraria na parede?",
        "Whose job would dictate a move, if either?": "O trabalho de quem ditaria uma mudança, se for o caso?",
        "Gym partners, hobby partners, or independent hobbies?": "Parceiros de academia, parceiros de hobby ou hobbies independentes?",
        "How do you want to show up for each other's parents?": "Como vocês querem aparecer para os pais um do outro?",
        "First Impressions": "Primeiras impressões",
        "Memories": "Memórias",
        "Appreciation": "Apreciação",
        "Personality": "Personalidade",
        "Love": "Amor",
        "Communication": "Comunicação",
        "Childhood": "Infância",
        "Dreams": "Sonhos",
        "Us": "Nós",
        "Relationship": "Relacionamento",
        "Values": "Valores",
        "Fears": "Medos",
        "Future": "Futuro",
        "Vulnerability": "Vulnerabilidade",
        "Things We Haven't Said": "O que ainda não dissemos",
        "Trust": "Confiança",
        "Conflict": "Conflito",
        "Growth": "Crescimento",
        "How Well Do You Know Me": "O quanto você me conhece",
        "Language of Love": "Linguagem do amor",
        "Identity": "Identidade",
        "Gratitude": "Gratidão",
        "Funny": "Engraçado",
        "Romantic": "Romântico",
        "Impossible Choices": "Escolhas impossíveis",
        "Travel": "Viagem",
        "Food": "Comida",
        "Lifestyle": "Estilo de vida",
        "Embarrassing": "Constrangedor",
        "Hypothetical": "Hipotético",
        "Choose Between Us": "Escolha entre nós",
        "Chaos": "Caos",
        "Flirting": "Flertes",
        "Compliments": "Elogios",
        "Attraction": "Atração",
        "Chemistry": "Química",
        "Kissing": "Beijos",
        "Preferences": "Preferências",
        "Date Night": "Encontro",
        "Confessions": "Confissões",
        "Rate": "Avalie",
        "Tell Me": "Me diga",
        "Show Me": "Me mostre",
        "Romantic Scenarios": "Cenários românticos",
        "Choose": "Escolha",
        "Playful Challenges": "Desafios brincalhões",
        "Who Would": "Quem iria",
        "Most Likely": "Mais provável",
        "Arguments": "Discussões",
        "Hypothetical Disasters": "Desastres hipotéticos",
        "Weird Scenarios": "Cenários estranhos",
        "Predictions": "Previsões",
        "Petty Debates": "Debates bobos",
        "Inside Jokes": "Piadas internas",
        "Challenges": "Desafios",
        "Random": "Aleatório",
        "Home": "Lar",
        "Career": "Carreira",
        "Money": "Dinheiro",
        "Family": "Família",
        "Adventures": "Aventuras",
        "Marriage": "Casamento",
        "Traditions": "Tradições",
        "Holidays": "Festas",
        "Retirement": "Aposentadoria",
        "Where Will We Be": "Onde estaremos",
        "Future Memories": "Memórias futuras",
        "Legacy": "Legado",
        "Why?": "Por quê?",
        "What does comfort look like to you after a hard day?": "Como é o conforto para você depois de um dia difícil?",
        "Comfort": "Conforto",
        "What is the smallest thing I do that makes you feel calmer?": "Qual é a menor coisa que eu faço que te deixa mais calmo(a)?",
        "When you're overwhelmed, do you want solutions or just my presence?": "Quando você está sobrecarregado(a), você quer soluções ou só a minha presença?",
        "What's a place, real or imagined, where you feel completely safe with me?": "Qual é um lugar, real ou imaginário, onde você se sente completamente seguro(a) comigo?",
        "What sound or silence helps you settle down the fastest?": "Que som ou silêncio te ajuda a se acalmar mais rápido?",
        "What's something you never had to ask me for, because I just noticed you needed it?": "O que é algo que você nunca precisou me pedir, porque eu simplesmente percebi que você precisava?",
        "Do you prefer a hug, a joke, or silence when you're upset?": "Você prefere um abraço, uma piada ou silêncio quando está chateado(a)?",
        "What's the most comforted you've ever felt in your life, and was I there?": "Quando você já se sentiu mais confortado(a) na vida, e eu estava presente?",
        "What's one thing I say that instantly makes you feel better?": "Qual frase minha faz você se sentir melhor instantaneamente?",
        "What comfort do you wish you'd asked for as a kid that you can ask me for now?": "Que conforto você gostaria de ter pedido quando criança, que pode me pedir agora?",
        "You don't have to answer fully — even sharing a little counts.": "Você não precisa responder completamente — até compartilhar um pouco já conta.",
        "What's one ordinary Tuesday you're quietly grateful for?": "Qual é uma terça-feira comum pela qual você é grato(a) em silêncio?",
        "Name a small thing about our routine you'd genuinely miss if it disappeared.": "Cite algo pequeno da nossa rotina que você realmente sentiria falta se desaparecesse.",
        "What's something hard you went through that you're grateful I saw you through?": "O que é algo difícil que você passou e pelo qual é grato(a) por eu ter te acompanhado?",
        "What part of your day am I usually not there for, that you wish I could see?": "Em que parte do seu dia eu geralmente não estou, mas você gostaria que eu visse?",
        "What's a risk you took because you knew I'd support you either way?": "Que risco você correu porque sabia que eu te apoiaria de qualquer jeito?",
        "What is something about your life now that you don't take for granted anymore?": "O que na sua vida hoje você não considera mais garantido?",
        "What's a version of gratitude you feel for me that's hard to put into words?": "Que tipo de gratidão por mim é difícil de colocar em palavras?",
        "What's a habit of mine you didn't expect to be thankful for?": "Que hábito meu você não esperava agradecer por ter?",
        "When do you catch yourself feeling lucky about us, out of nowhere?": "Quando você se pega sentindo sorte por nós, do nada?",
        "Say three things about me you've never actually thanked me for.": "Diga três coisas sobre mim pelas quais você nunca me agradeceu de verdade.",
        "What makes a place feel like 'home' to you when I'm not physically there?": "O que faz um lugar parecer 'lar' para você quando eu não estou fisicamente presente?",
        "What smell or sound instantly makes you think of home?": "Que cheiro ou som te faz pensar em lar instantaneamente?",
        "Do you feel more 'home' in silence with me, or in noise and activity?": "Você se sente mais 'em casa' no silêncio comigo, ou no barulho e na atividade?",
        "What is one object that, if lost, would feel like losing a piece of us?": "Qual objeto, se perdido, pareceria perder um pedaço de nós?",
        "Have I ever felt like home to you before we even had a shared address?": "Eu já parecia lar para você mesmo antes de termos um endereço em comum?",
        "What does it mean to you to build a home, versus just live in a house?": "O que significa construir um lar para você, em vez de apenas morar numa casa?",
        "What's your favorite corner of wherever you live right now, and why?": "Qual é o seu canto favorito de onde você mora agora, e por quê?",
        "What routine, however small, makes a place feel lived-in and ours?": "Que rotina, por menor que seja, faz um lugar parecer habitado e nosso?",
        "If home were a feeling instead of a place, how would you describe it?": "Se lar fosse um sentimento em vez de um lugar, como você o descreveria?",
        "What's something from your childhood home you want to recreate in ours someday?": "O que da casa da sua infância você quer recriar na nossa algum dia?",
        "What part of who you are today did you build because of us?": "Que parte de quem você é hoje você construiu por causa de nós?",
        "What's something about yourself you understand better since being with me?": "O que sobre você mesmo(a) você entende melhor desde que está comigo?",
        "What identity or role matters most to you outside of being my partner?": "Qual identidade ou papel importa mais para você fora de ser meu(minha) parceiro(a)?",
        "How do you protect your individuality inside a relationship?": "Como você protege sua individualidade dentro de um relacionamento?",
        "What's a label you used to define yourself by that you've outgrown?": "Que rótulo você costumava usar para se definir e já superou?",
        "What's something true about you that has nothing to do with me at all?": "O que é algo verdadeiro sobre você que não tem nada a ver comigo?",
        "What part of yourself are you still figuring out, even now?": "Que parte de você mesmo(a) você ainda está descobrindo, até agora?",
        "Do you feel more like yourself when you're alone, or when you're with me?": "Você se sente mais você mesmo(a) sozinho(a), ou quando está comigo?",
        "What's a belief about yourself I helped you unlearn?": "Qual crença sobre você mesmo(a) eu te ajudei a desaprender?",
        "If you introduced yourself with no job title and no relationship status, who are you?": "Se você se apresentasse sem cargo e sem status de relacionamento, quem você é?",
        "What moment made you realize 'this is serious' between us?": "Que momento fez você perceber 'isso é sério' entre nós?",
        "Milestones": "Marcos",
        "What's a milestone of ours, big or small, that people would underestimate?": "Qual marco nosso, grande ou pequeno, as pessoas subestimariam?",
        "What milestone are you most looking forward to next?": "Qual marco você está mais ansioso(a) para viver a seguir?",
        "Which milestone changed how you saw our future the most?": "Qual marco mudou mais a forma como você via o nosso futuro?",
        "What's a 'first' with me you still remember in detail?": "Qual 'primeira vez' comigo você ainda lembra em detalhes?",
        "What milestone do you wish we'd celebrated more than we did?": "Qual marco você gostaria que tivéssemos comemorado mais do que comemoramos?",
        "What private milestone, one nobody else knows about, matters most to you?": "Qual marco privado, que ninguém mais sabe, importa mais para você?",
        "What's a small 'we made it' moment we don't talk about enough?": "Qual pequeno momento de 'conseguimos' nós não comentamos o suficiente?",
        "What milestone still ahead of us scares you a little, in a good way?": "Qual marco que ainda está por vir te assusta um pouco, de um jeito bom?",
        "Tell the full story of the moment you knew we'd last.": "Conte a história completa do momento em que você soube que duraríamos.",
        "Would you rather I remembered your coffee order or your schedule perfectly?": "Você prefere que eu lembrasse do seu pedido de café ou da sua agenda perfeitamente?",
        "Would you rather we texted all day or called once at night?": "Você prefere que a gente trocasse mensagens o dia todo ou ligasse uma vez à noite?",
        "Would you rather I noticed when you're quiet or when you're loud?": "Você prefere que eu percebesse quando você está quieto(a) ou quando está agitado(a)?",
        "Would you rather we made big plans together or lived more day by day?": "Você prefere que a gente fizesse grandes planos juntos ou vivesse mais dia a dia?",
        "Would you rather I asked more questions or shared more of my own thoughts?": "Você prefere que eu fizesse mais perguntas ou compartilhasse mais meus próprios pensamentos?",
        "Would you rather I was the one who worries or the one who reassures?": "Você prefere que eu fosse quem se preocupa ou quem tranquiliza?",
        "Would you rather we kept most things private or shared almost everything with friends?": "Você prefere que a gente mantivesse a maioria das coisas privadas ou compartilhasse quase tudo com os amigos?",
        "Would you rather I planned surprises or asked you what you actually want?": "Você prefere que eu planejasse surpresas ou perguntasse o que você realmente quer?",
        "Would you rather our love be loud and obvious or quiet and steady?": "Você prefere que o nosso amor fosse alto e óbvio ou quieto e constante?",
        "Would you rather I forgave quickly or took time to really process first?": "Você prefere que eu perdoasse rápido ou levasse tempo para realmente processar primeiro?",
        "One word for how you feel right now, no thinking.": "Uma palavra para como você se sente agora, sem pensar.",
        "No overthinking — first answer only.": "Sem pensar demais — só a primeira resposta.",
        "The last thing that surprised you, in five words or less.": "A última coisa que te surpreendeu, em cinco palavras ou menos.",
        "Name a smell that instantly reminds you of me.": "Cite um cheiro que te lembra instantaneamente de mim.",
        "The first place you'd want to go, right now, no planning.": "O primeiro lugar para onde você iria agora, sem planejar.",
        "One thing you're proud of yourself for this week.": "Uma coisa da qual você se orgulha esta semana.",
        "Say the first nickname for me that comes to mind.": "Diga o primeiro apelido meu que vier à mente.",
        "The emoji that best describes today, no explanation.": "O emoji que melhor descreve hoje, sem explicação.",
        "One thing you want more of in your life right now.": "Uma coisa que você quer mais na sua vida agora.",
        "First song lyric that pops into your head.": "Primeira frase de música que vem à sua cabeça.",
        "The truest compliment you can give me in three words.": "O elogio mais verdadeiro que você pode me dar em três palavras.",
        "Trade questions: ask me anything you've always wanted to know, right now.": "Troque as perguntas: me pergunte qualquer coisa que sempre quis saber, agora.",
        "Describe today as if it were a chapter title in our story.": "Descreva hoje como se fosse o título de um capítulo da nossa história.",
        "Pick one word to ban from our vocabulary for the rest of the night, and why.": "Escolha uma palavra para banir do nosso vocabulário pelo resto da noite, e por quê.",
        "Answer this question, but only using questions of your own.": "Responda esta pergunta, mas usando apenas perguntas suas.",
        "Say something true about us that you've never said out loud before.": "Diga algo verdadeiro sobre nós que você nunca disse em voz alta antes.",
        "If tonight had a soundtrack, what's the one song that plays right now?": "Se hoje à noite tivesse uma trilha sonora, qual música tocaria agora?",
        "Invent a new rule for our relationship, on the spot, and commit to it.": "Invente uma nova regra para o nosso relacionamento, na hora, e se comprometa com ela.",
        "Skip your turn and instead do something kind for me right now.": "Pule sua vez e, em vez disso, faça algo gentil por mim agora.",
        "Pick an object nearby and explain, honestly, what it says about our life together.": "Escolha um objeto por perto e explique, honestamente, o que ele diz sobre nossa vida juntos.",
        "Say the most honest thing on your mind right now, no matter how small.": "Diga a coisa mais honesta em sua mente agora, não importa quão pequena.",
        "What value did your family raise you with that you now question?": "Qual valor sua família te ensinou que você agora questiona?",
        "What matters more to you in a hard decision: logic or feeling?": "O que importa mais para você numa decisão difícil: lógica ou sentimento?",
        "What's a value we don't share but you've come to respect in me anyway?": "Qual valor nós não compartilhamos, mas você passou a respeitar em mim mesmo assim?",
        "What do you think a relationship owes each person, at minimum?": "O que você acha que um relacionamento deve a cada pessoa, no mínimo?",
        "What's something you'd never compromise on, even for me?": "O que você nunca abriria mão, nem mesmo por mim?",
        "What does integrity look like in the small, unwatched moments?": "Como é a integridade nos pequenos momentos, quando ninguém está olhando?",
        "What value do you hope we pass on if we ever raise a family?": "Qual valor você espera que a gente transmita se algum dia criarmos uma família?",
        "What's a small act of kindness that says a lot about someone's character?": "Qual pequeno ato de bondade diz muito sobre o caráter de alguém?",
        "What does 'showing up' for someone really mean to you?": "O que significa realmente 'estar presente' por alguém para você?",
        "What's a value you've had to defend, even when it wasn't easy?": "Qual valor você já teve que defender, mesmo quando não foi fácil?",
        "If you could freeze one hour with me forever, which one would it be?": "Se você pudesse congelar uma hora comigo para sempre, qual seria?",
        "Time": "Tempo",
        "Do you feel like time moves faster or slower when you're with me?": "Você sente que o tempo passa mais rápido ou mais devagar quando está comigo?",
        "What's a moment you wish had lasted longer than it did?": "Qual momento você gostaria que tivesse durado mais do que durou?",
        "What do you want us to make more time for this year?": "Para que você quer que a gente reserve mais tempo este ano?",
        "If we could relive any single day together exactly as it happened, which one?": "Se pudéssemos reviver um único dia juntos exatamente como aconteceu, qual seria?",
        "What's something you used to think we had plenty of time for, and now don't take for granted?": "O que você costumava achar que teríamos bastante tempo, e agora não considera mais garantido?",
        "What time of day do you feel most connected to me?": "Em que horário do dia você se sente mais conectado(a) comigo?",
        "If you had one more hour with the version of us from a year ago, what would you say?": "Se você tivesse mais uma hora com a versão de nós de um ano atrás, o que diria?",
        "What's a slow, uneventful memory of us that you wouldn't trade for anything?": "Qual memória lenta e sem grandes eventos você não trocaria por nada?",
        "How has your sense of 'the future' changed since we started counting time together?": "Como sua noção de 'futuro' mudou desde que passamos a contar o tempo juntos?",
        "Would you rather I narrated our whole day like a nature documentary, or in a movie-trailer voice?": "Você prefere que eu narrasse o nosso dia inteiro como um documentário de natureza, ou com voz de trailer de filme?",
        "Would you rather I laughed at my own jokes before finishing them, or never laughed at yours?": "Você prefere que eu risse das minhas próprias piadas antes de terminá-las, ou nunca risse das suas?",
        "Would you rather we had matching ridiculous hats, or matching ringtones?": "Você prefere que a gente tivesse chapéus ridículos combinando, ou toques de celular iguais?",
        "Would you rather I hummed constantly and off-key, or talked to myself out loud?": "Você prefere que eu cantarolasse sem parar e desafinado, ou falasse sozinho(a) em voz alta?",
        "Would you rather we had a secret handshake we use in public, or a code word for 'save me'?": "Você prefere que a gente tivesse um cumprimento secreto em público, ou uma palavra-código para 'me salva'?",
        "Would you rather I wrote you poetry badly, or sang to you badly?": "Você prefere que eu escrevesse poesia mal para você, ou cantasse mal para você?",
        "Would you rather a candlelit dinner at home, or a picnic under the stars?": "Você prefere um jantar à luz de velas em casa, ou um piquenique sob as estrelas?",
        "Would you rather I left little notes around the house, or sent sweet texts during the day?": "Você prefere que eu deixasse bilhetinhos pela casa, ou mandasse mensagens fofas durante o dia?",
        "Would you rather slow dance in the kitchen, or in the rain?": "Você prefere dançar devagar na cozinha, ou na chuva?",
        "Would you rather I remembered every anniversary exactly, or surprised you on random ordinary days instead?": "Você prefere que eu lembrasse exatamente de cada aniversário, ou te surpreendesse em dias comuns aleatórios?",
        "Would you rather lose all our photos or all our voice messages?": "Você prefere perder todas as nossas fotos ou todos os nossos áudios?",
        "Would you rather only be able to hug or only be able to hold hands, forever?": "Você prefere só poder abraçar ou só poder dar as mãos, para sempre?",
        "Would you rather I always told the truth bluntly, or softened it every time?": "Você prefere que eu sempre falasse a verdade sem rodeios, ou a suavizasse sempre?",
        "Would you rather have unlimited time but less money, or unlimited money but less time?": "Você prefere ter tempo ilimitado mas menos dinheiro, ou dinheiro ilimitado mas menos tempo?",
        "Would you rather road-trip with no destination, or fly somewhere with a strict itinerary?": "Você prefere uma viagem de carro sem destino, ou voar para algum lugar com um roteiro rígido?",
        "Would you rather camp in the mountains together, or stay in a fancy city hotel?": "Você prefere acampar nas montanhas juntos, ou ficar num hotel chique na cidade?",
        "Would you rather we learned a new language together for a trip, or relied entirely on translation apps?": "Você prefere que a gente aprendesse um novo idioma juntos para uma viagem, ou dependesse totalmente de aplicativos de tradução?",
        "Would you rather visit ten countries in a month, or one country for a whole year?": "Você prefere visitar dez países em um mês, ou um país durante um ano inteiro?",
        "Would you rather cook an elaborate meal together every Sunday, or always order in on Sundays?": "Você prefere cozinhar uma refeição elaborada juntos todo domingo, ou sempre pedir comida aos domingos?",
        "Would you rather share dessert every time, or always get your own?": "Você prefere sempre dividir a sobremesa, ou sempre pedir a sua própria?",
        "Would you rather I criticized your cooking honestly, or lied and said it's perfect?": "Você prefere que eu criticasse sua comida honestamente, ou mentisse dizendo que está perfeita?",
        "Would you rather we lived minimally with few things, or surrounded by things that remind us of memories?": "Você prefere que a gente vivesse com poucas coisas, ou cercados de coisas que nos lembram memórias?",
        "Would you rather have a strict weekly routine together, or completely wing it every week?": "Você prefere ter uma rotina semanal rígida juntos, ou improvisar completamente toda semana?",
        "Would you rather we hosted friends often, or kept our home mostly just for us?": "Você prefere que a gente recebesse amigos com frequência, ou mantivesse nossa casa mais reservada para nós?",
        "Would you rather we never went to bed angry, or always took space to cool off first?": "Você prefere que a gente nunca fosse dormir bravo, ou sempre desse um tempo para esfriar a cabeça primeiro?",
        "Would you rather I initiated conversations about feelings, or you did?": "Você prefere que eu iniciasse as conversas sobre sentimentos, ou você?",
        "Would you rather have one big yearly vacation, or several small weekend trips?": "Você prefere uma grande viagem anual, ou várias viagens curtas de fim de semana?",
        "Would you rather we celebrated small wins constantly, or saved celebration for big milestones?": "Você prefere que a gente comemorasse pequenas vitórias sempre, ou guardasse a comemoração para grandes marcos?",
        "Would you rather we settled down early, or explored freely before settling?": "Você prefere que a gente se estabelecesse cedo, ou explorasse livremente antes de se estabelecer?",
        "Would you rather have a detailed 10-year plan, or figure it out as we go?": "Você prefere ter um plano detalhado de 10 anos, ou ir descobrindo aos poucos?",
        "Would you rather prioritize career growth or lifestyle flexibility in our next big decision?": "Você prefere priorizar o crescimento na carreira ou a flexibilidade de estilo de vida na nossa próxima grande decisão?",
        "Would you rather I told an embarrassing story about you at a party, or you told one about me?": "Você prefere que eu contasse uma história vergonhosa sobre você numa festa, ou você contasse uma sobre mim?",
        "Would you rather sing karaoke terribly in front of my family, or dance terribly in front of yours?": "Você prefere cantar karaokê terrivelmente na frente da minha família, ou dançar terrivelmente na frente da sua?",
        "Would you rather accidentally like an old photo of mine from years ago, or comment the wrong thing publicly?": "Você prefere curtir sem querer uma foto antiga minha de anos atrás, ou comentar a coisa errada publicamente?",
        "Would you rather I was more spontaneous, or more reliable?": "Você prefere que eu fosse mais espontâneo(a), ou mais confiável?",
        "Would you rather a partner who challenges you daily, or one who keeps things calm and steady?": "Você prefere um(a) parceiro(a) que te desafia todos os dias, ou um que mantém tudo calmo e estável?",
        "Would you rather I was more competitive, or more laid-back about winning and losing?": "Você prefere que eu fosse mais competitivo(a), ou mais tranquilo(a) sobre ganhar e perder?",
        "Would you rather live one perfect year together and forget it, or remember an average one forever?": "Você prefere viver um ano perfeito juntos e esquecê-lo, ou lembrar de um ano mediano para sempre?",
        "Would you rather have a soundtrack that plays whenever you're falling for me, or one for when you're mad at me?": "Você prefere ter uma trilha sonora que toca quando você está se apaixonando por mim, ou uma para quando está bravo(a) comigo?",
        "Would you rather we could pause time only for us once a year, or rewind one mistake once a year?": "Você prefere que a gente pudesse pausar o tempo só para nós uma vez por ano, ou voltar atrás em um erro uma vez por ano?",
        "Would you rather I always drove, or you always drove?": "Você prefere que eu sempre dirigisse, ou você sempre dirigisse?",
        "Would you rather I handled all the planning, or you handled all the planning?": "Você prefere que eu cuidasse de todo o planejamento, ou você cuidasse?",
        "Would you rather I always picked the music, or you always picked the music?": "Você prefere que eu sempre escolhesse a música, ou você sempre escolhesse?",
        "Would you rather our apartment flooded a little, or our internet died for a week?": "Você prefere que nosso apartamento alagasse um pouco, ou que nossa internet caísse por uma semana?",
        "Would you rather both get food poisoning before a big event, or both oversleep and miss it entirely?": "Você prefere que ambos passassem mal de comida antes de um grande evento, ou que ambos dormissem demais e perdessem tudo?",
        "Would you rather get a flat tire far from home, or lock ourselves out at midnight?": "Você prefere furar um pneu longe de casa, ou ficar trancados do lado de fora à meia-noite?",
        "Would you rather relive our very last fight to end it better, or forget it happened at all?": "Você prefere reviver nossa última briga para terminá-la melhor, ou esquecer que ela aconteceu?",
        "Would you rather keep the exact voice memo from our first 'I love you,' or the memory alone, unrecorded?": "Você prefere guardar o áudio exato do nosso primeiro 'eu te amo', ou só a memória, sem gravação?",
        "Would you rather relive the nervous excitement before our first kiss, or the comfort of a thousandth one?": "Você prefere reviver o nervosismo antes do nosso primeiro beijo, ou o conforto do milésimo?",
        "Would you rather our love story get a tragic prestige-drama ending, or a cheesy happy one?": "Você prefere que nossa história de amor tivesse um final trágico de drama premiado, ou um final feliz meloso?",
        "Would you rather I quoted your favorite show constantly, or you quoted mine constantly?": "Você prefere que eu citasse sua série favorita o tempo todo, ou você citasse a minha?",
        "Would you rather we had a couple's theme song chosen by our friends, or one we picked ourselves?": "Você prefere que a gente tivesse uma música-tema de casal escolhida pelos amigos, ou uma que a gente mesmo escolhesse?",
        "Would you rather I worked from home forever, or traveled constantly for work?": "Você prefere que eu trabalhasse de casa para sempre, ou viajasse constantemente a trabalho?",
        "Would you rather have more free time with less money, or more money with less free time?": "Você prefere ter mais tempo livre com menos dinheiro, ou mais dinheiro com menos tempo livre?",
        "Would you rather we worked in the same field, or completely different ones?": "Você prefere que a gente trabalhasse na mesma área, ou em áreas completamente diferentes?",
        "Would you rather I took a big career risk with your full support, or played it safe together?": "Você prefere que eu corresse um grande risco na carreira com seu apoio total, ou que jogássemos seguro juntos?",
        "Would you rather be stuck together in a heatwave with no AC, or a snowstorm with no heating?": "Você prefere ficar preso(a) comigo numa onda de calor sem ar-condicionado, ou numa nevasca sem aquecimento?",
        "Weather": "Clima",
        "Would you rather rainy days in together, or sunny days out together?": "Você prefere dias de chuva em casa juntos, ou dias de sol fora juntos?",
        "Would you rather chase storms for the thrill, or always seek out calm, clear skies?": "Você prefere perseguir tempestades pela emoção, ou sempre buscar céus calmos e claros?",
        "Would you rather we deleted social media for a year, or never turned off notifications?": "Você prefere que a gente deletasse as redes sociais por um ano, ou nunca desligasse as notificações?",
        "Technology": "Tecnologia",
        "Would you rather text in full sentences always, or only in abbreviations and emojis?": "Você prefere sempre mandar mensagem com frases completas, ou só com abreviações e emojis?",
        "Would you rather have a smart home that does everything, or keep everything old-fashioned and manual?": "Você prefere uma casa inteligente que faz tudo, ou manter tudo à moda antiga e manual?",
        "Would you rather rewatch our favorite movie every year on the same day, or always find something new?": "Você prefere reassistir nosso filme favorito todo ano no mesmo dia, ou sempre encontrar algo novo?",
        "Movies": "Filmes",
        "Would you rather I cried at every sad movie, or never showed emotion during them?": "Você prefere que eu chorasse em todo filme triste, ou nunca demonstrasse emoção neles?",
        "Would you rather our life be adapted into a comedy, or a romantic drama?": "Você prefere que nossa vida virasse uma comédia, ou um drama romântico?",
        "Would you rather play on the same team, or be friendly rivals in a sport?": "Você prefere jogar no mesmo time, ou ser rivais amigáveis em um esporte?",
        "Sports": "Esportes",
        "Would you rather I was your loudest cheerleader, or your calm, quiet support?": "Você prefere que eu fosse seu(sua) torcedor(a) mais barulhento(a), ou seu apoio calmo e silencioso?",
        "Would you rather train for a marathon together, or take up a chill hobby instead?": "Você prefere treinar para uma maratona juntos, ou adotar um hobby mais tranquilo?",
        "Would you rather I remembered your childhood stories perfectly, or your daily preferences perfectly?": "Você prefere que eu lembrasse perfeitamente das suas histórias de infância, ou das suas preferências diárias?",
        "Would you rather never fight again but grow apart slowly, or fight sometimes but stay close?": "Você prefere nunca mais brigar, mas se distanciar aos poucos, ou brigar às vezes, mas continuar próximos?",
        "Would you rather I always agreed with you, or always gave an honest opinion even if different?": "Você prefere que eu sempre concordasse com você, ou sempre desse uma opinião honesta mesmo que diferente?",
        "Would you rather live near the beach, or in the mountains, for the rest of our lives?": "Você prefere morar perto da praia, ou nas montanhas, pelo resto da nossa vida?",
        "Would you rather I made up a ridiculous nickname for everyone we meet, or narrated our arguments like a sports commentator?": "Você prefere que eu inventasse um apelido ridículo para todo mundo que a gente conhece, ou narrasse nossas brigas como um comentarista esportivo?",
        "Would you rather I did an accent for a full day, or only spoke in movie quotes?": "Você prefere que eu falasse com sotaque o dia inteiro, ou só falasse em frases de filmes?",
        "Would you rather write our love story down for our kids to read someday, or keep it just between us?": "Você prefere escrever nossa história de amor para nossos filhos lerem um dia, ou mantê-la só entre nós?",
        "Would you rather one grand romantic gesture a year, or tiny ones every single day?": "Você prefere um grande gesto romântico por ano, ou pequenos gestos todos os dias?",
        "Would you rather always know exactly how the other feels, or keep a little mystery?": "Você prefere sempre saber exatamente como o outro se sente, ou manter um pouco de mistério?",
        "Would you rather resolve conflict with humor, or with a serious, direct conversation?": "Você prefere resolver conflitos com humor, ou com uma conversa séria e direta?",
        "Would you rather chase one big shared dream, or support each other's separate dreams?": "Você prefere perseguir um grande sonho em comum, ou apoiar os sonhos separados um do outro?",
        "Would you rather have kids early, later, or leave it open entirely?": "Você prefere ter filhos cedo, mais tarde, ou deixar totalmente em aberto?",
        "Would you rather explore your home country fully first, or go abroad right away?": "Você prefere explorar totalmente o seu país primeiro, ou ir para o exterior imediatamente?",
        "Would you rather travel with a big group of friends, or always just the two of us?": "Você prefere viajar com um grande grupo de amigos, ou sempre só nós dois?",
        "Would you rather give up coffee together, or give up sweets together?": "Você prefere abrir mão do café juntos, ou abrir mão dos doces juntos?",
        "Would you rather learn to cook one cuisine perfectly, or a little of every cuisine?": "Você prefere aprender a cozinhar uma culinária perfeitamente, ou um pouco de cada culinária?",
        "Would you rather live somewhere with four seasons, or somewhere warm all year?": "Você prefere morar em um lugar com quatro estações, ou em um lugar quente o ano todo?",
        "Would you rather early bedtimes and early mornings, or late nights and slow mornings, together?": "Você prefere dormir e acordar cedo, ou noites tardias e manhãs devagar, juntos?",
        "Would you rather I was quieter in public and louder at home, or the opposite?": "Você prefere que eu fosse mais quieto(a) em público e mais falante em casa, ou o contrário?",
        "Would you rather a partner who over-explains, or one who under-explains?": "Você prefere um(a) parceiro(a) que explica demais, ou um que explica de menos?",
        "Would you rather I mixed up your family members' names at a gathering, or forgot an important date out loud?": "Você prefere que eu confundisse o nome dos seus parentes numa reunião, ou esquecesse uma data importante em voz alta?",
        "Would you rather switch lives for a day to understand each other better, or never know exactly what the other's day is like?": "Você prefere trocar de vida por um dia para se entenderem melhor, ou nunca saber exatamente como é o dia do outro?",
        "Would you rather I chose our vacations, or you chose our vacations, every time?": "Você prefere que eu escolhesse nossas férias, ou você escolhesse, sempre?",
        "Would you rather both lose your voice the day before something important, or both catch a cold on a trip?": "Você prefere que ambos perdessem a voz um dia antes de algo importante, ou pegassem um resfriado numa viagem?",
        "Would you rather remember every single detail of how we met, or only the feeling of it?": "Você prefere lembrar de cada detalhe de como nos conhecemos, ou apenas da sensação?",
        "Would you rather our relationship be turned into a reality show, or a documentary?": "Você prefere que nosso relacionamento virasse um reality show, ou um documentário?",
        "Would you rather I brought work stress home sometimes, or never talked about work at all?": "Você prefere que eu trouxesse o estresse do trabalho para casa às vezes, ou nunca falasse sobre trabalho?",
        "Would you rather a perfect sunny wedding, or a dramatic rainy one we'll never forget?": "Você prefere um casamento perfeito e ensolarado, ou um dramático e chuvoso que nunca esqueceremos?",
        "Would you rather I read every message the second it arrives, or take hours to reply sometimes?": "Você prefere que eu lesse toda mensagem assim que chega, ou demorasse horas para responder às vezes?",
        "Would you rather cry together at a sad film, or laugh together through the whole thing instead?": "Você prefere chorar juntos num filme triste, ou rir juntos o tempo todo em vez disso?",
        "Would you rather we bonded over watching sports together, or bonded over something totally different?": "Você prefere que a gente se conectasse assistindo esportes juntos, ou por meio de algo totalmente diferente?",
        "Would you rather relive our happiest day on repeat, or keep discovering new happiest days?": "Você prefere reviver nosso dia mais feliz repetidamente, ou continuar descobrindo novos dias mais felizes?",
        "What's the smallest flirty gesture that gets your attention every time?": "Qual é o menor gesto de flerte que sempre chama sua atenção?",
        "How do you flirt when you're trying to make me laugh instead of blush?": "Como você flerta quando está tentando me fazer rir em vez de corar?",
        "What's a look I give you that you've learned to read perfectly?": "Que olhar meu você aprendeu a ler perfeitamente?",
        "What's your go-to flirty line, even if it's a little cheesy?": "Qual é sua cantada preferida, mesmo que seja um pouco brega?",
        "Do you flirt more with words, with touch, or with teasing?": "Você flerta mais com palavras, com toque, ou provocando?",
        "What's a compliment about my hands, eyes, or smile that you actually mean?": "Qual elogio sobre minhas mãos, olhos ou sorriso você realmente quer dizer?",
        "Compliment the way I text you good morning.": "Elogie a forma como eu te mando mensagem de bom dia.",
        "What's something about my confidence, or lack of it, that you find endearing?": "O que sobre minha confiança, ou a falta dela, você acha encantador?",
        "Tell me the compliment you give me most in your head but rarely say out loud.": "Diga o elogio que você mais me dá na sua cabeça, mas raramente fala em voz alta.",
        "What's an unexpected thing about me that caught your attention early on?": "O que de inesperado em mim chamou sua atenção logo no início?",
        "What's a version of me — tired, focused, laughing — that you're most drawn to?": "Qual versão minha — cansado(a), concentrado(a), rindo — te atrai mais?",
        "What's something I wear that you secretly hope I wear again?": "O que eu visto que você secretamente espera que eu use de novo?",
        "What moment recently made you feel a spark out of nowhere?": "Que momento recente te fez sentir uma faísca do nada?",
        "How does our chemistry show up differently now compared to the beginning?": "Como nossa química se manifesta diferente agora comparado ao começo?",
        "What's a silent moment between us that felt more intense than words?": "Qual momento de silêncio entre nós pareceu mais intenso do que palavras?",
        "What's the difference between a good kiss and a great one, for you?": "Qual é a diferença entre um beijo bom e um ótimo, para você?",
        "Forehead, cheek, or lips — which good morning kiss do you crave most?": "Testa, bochecha ou lábios — qual beijo de bom dia você mais deseja?",
        "Do you like being surprised with affection, or asked first?": "Você gosta de ser surpreendido(a) com carinho, ou de ser perguntado(a) antes?",
        "What's more you: playful teasing all night, or one intense moment?": "O que combina mais com você: provocação divertida a noite toda, ou um momento intenso?",
        "Design a date night with zero talking allowed until dessert.": "Crie um encontro noturno sem conversa permitida até a sobremesa.",
        "What's a flirty twist you'd add to a totally normal dinner date?": "Que toque de flerte você adicionaria a um jantar completamente normal?",
        "Confess something you find yourself wanting more of, physically, lately.": "Confesse algo que você tem sentido vontade de ter mais, fisicamente, ultimamente.",
        "What's a thought about me you had today that you're only now admitting?": "Qual pensamento sobre mim você teve hoje e só agora está admitindo?",
        "Rate how well I read your mood today, and tell me what gave it away.": "Avalie o quanto eu entendi seu humor hoje, e diga o que te entregou.",
        "Tell me the exact moment today you thought about me unprompted.": "Me diga o exato momento hoje em que você pensou em mim sem motivo.",
        "Tell me what makes you feel most desired by me.": "Me diga o que te faz sentir mais desejado(a) por mim.",
        "Show me the exact face you make when you're pretending not to be flirting.": "Me mostre a cara exata que você faz quando finge que não está flertando.",
        "Show me how you'd get my attention from across a room, no words.": "Me mostre como você chamaria minha atenção do outro lado da sala, sem palavras.",
        "Narrate the perfect five minutes right before we fall asleep together.": "Narre os cinco minutos perfeitos logo antes de dormirmos juntos.",
        "Describe a slow Saturday morning where neither of us wants to get up.": "Descreva uma manhã de sábado devagar em que nenhum de nós quer levantar.",
        "What builds anticipation for you more: waiting, or knowing exactly when?": "O que constrói mais expectativa para você: a espera, ou saber exatamente quando?",
        "Would you rather I surprised you with affection mid-day, or planned it for the evening?": "Você prefere que eu te surpreendesse com carinho no meio do dia, ou planejasse para a noite?",
        "Would you rather a slow, teasing goodbye, or a quick, intense one?": "Você prefere uma despedida lenta e provocante, ou uma rápida e intensa?",
        "What's a small thing I do that instantly shifts the mood for you?": "O que é uma pequena coisa que eu faço que muda o clima instantaneamente para você?",
        "Tell me exactly what you want tonight, without hesitating.": "Me diga exatamente o que você quer hoje à noite, sem hesitar.",
        "Dare me to say something bold before the next round starts.": "Desafie-me a dizer algo ousado antes da próxima rodada começar.",
        "Make up a silly rule about touching for the rest of the game.": "Invente uma regra boba sobre toque para o resto do jogo.",
        "Whisper, or write, one word that describes how you feel right now.": "Sussurre, ou escreva, uma palavra que descreve como você se sente agora.",
        "Skip this card and give me one long, slow kiss instead.": "Pule esta carta e me dê um beijo longo e lento em vez disso.",
        "What's the flirtiest thing about the way I move through a room?": "O que há de mais sedutor na forma como eu me movo por um ambiente?",
        "When do you feel the most playful, flirty version of yourself with me?": "Quando você se sente na versão mais brincalhona e sedutora de si mesmo(a) comigo?",
        "What's the sexiest compliment you've never actually said out loud?": "Qual é o elogio mais sedutor que você nunca disse em voz alta?",
        "Compliment my voice, specifically, and what it does to you.": "Elogie especificamente minha voz, e o que ela causa em você.",
        "What's something I do without thinking that you find irresistibly attractive?": "O que eu faço sem pensar que você acha irresistivelmente atraente?",
        "Casual clothes or dressed up — which version of me pulls your focus more?": "Roupas casuais ou arrumado(a) — qual versão minha prende mais sua atenção?",
        "What's your favorite unexpected place we've kissed?": "Qual é seu lugar favorito inesperado onde já nos beijamos?",
        "Describe the kiss you think about when you miss me the most.": "Descreva o beijo em que você pensa quando sente mais a minha falta.",
        "Would you rather I initiated a kiss in public, or saved it for when we're alone?": "Você prefere que eu iniciasse um beijo em público, ou guardasse para quando estivermos sozinhos?",
        "Plan a date that ends with neither of us wanting to say goodnight.": "Planeje um encontro que termine sem que nenhum de nós queira dizer boa noite.",
        "Confess a small thing you do on purpose just to get my attention.": "Confesse uma pequena coisa que você faz de propósito só para chamar minha atenção.",
        "What's a fantasy about us you've only recently let yourself think about?": "Qual fantasia sobre nós você só recentemente se permitiu pensar?",
        "Tell me what 'missing me' actually feels like in your body.": "Me diga o que 'sentir minha falta' realmente parece no seu corpo.",
        "Show me your favorite way to be pulled closer.": "Me mostre sua forma favorita de ser puxado(a) para mais perto.",
        "Narrate the moment right after a long hug when neither of us lets go first.": "Narre o momento logo depois de um abraço longo quando nenhum de nós solta primeiro.",
        "What's a look across a crowded room that instantly says everything?": "Qual olhar do outro lado de uma sala cheia diz tudo instantaneamente?",
        "Would you rather a slow dance with no music, or music with no dancing?": "Você prefere uma dança lenta sem música, ou música sem dançar?",
        "What's something intimate that feels different now than it did when we started?": "O que há de íntimo que parece diferente agora do que quando começamos?",
        "Challenge me to a staring contest where the loser gives the winner a kiss.": "Desafie-me para um jogo de olhar fixo em que quem perder dá um beijo no vencedor.",
        "Say the boldest true thing you're thinking, right now, out loud.": "Diga a coisa mais ousada e verdadeira que você está pensando, agora, em voz alta.",
        "What's a flirty compliment you'd only say after a glass of wine?": "Qual elogio sedutor você só diria depois de uma taça de vinho?",
        "What's the most attractive thing about how I handle a hard day?": "O que há de mais atraente na forma como eu lido com um dia difícil?",
        "Slow and lingering, or quick and surprising — what's your kiss mood today?": "Devagar e demorado, ou rápido e surpreendente — qual é seu humor para beijo hoje?",
        "What's your ideal way to be woken up in the morning?": "Qual é sua forma ideal de ser acordado(a) de manhã?",
        "What's one flirty tradition you want us to start on date nights?": "Qual tradição sedutora você quer que a gente comece nas noites de encontro?",
        "Confess the last time you couldn't stop thinking about a specific moment with me.": "Confesse a última vez que você não conseguiu parar de pensar num momento específico comigo.",
        "Tell me one word for how you want tonight to feel.": "Me diga uma palavra para como você quer que hoje à noite pareça.",
        "Show me the exact hug you need right now.": "Me mostre o abraço exato que você precisa agora.",
        "Describe getting ready together for a night out, distracted by each other the whole time.": "Descreva se arrumando juntos para uma noite, distraídos um pelo outro o tempo todo.",
        "What's something about tension between us that you secretly enjoy?": "O que sobre a tensão entre nós você secretamente gosta?",
        "Would you rather I teased you all evening and delivered later, or got straight to the point?": "Você prefere que eu te provocasse a noite toda e entregasse depois, ou fosse direto ao ponto?",
        "What's something you want more of that you haven't asked for directly?": "O que você quer mais que ainda não pediu diretamente?",
        "Dare me to whisper something in your ear before this round ends.": "Desafie-me a sussurrar algo no seu ouvido antes que esta rodada termine.",
        "What's the flirtiest thing about my handwriting, my texts, or the way I type?": "O que há de mais sedutor na minha caligrafia, minhas mensagens, ou no jeito que eu digito?",
        "Compliment the way I hold you, specifically.": "Elogie especificamente a forma como eu te abraço.",
        "What version of confident-me do you find most magnetic?": "Qual versão minha, confiante, você acha mais magnética?",
        "What's the perfect length for a goodbye kiss, in your opinion?": "Qual é a duração perfeita para um beijo de despedida, na sua opinião?",
        "Do you want more spontaneous affection, or more planned romantic moments?": "Você quer mais carinho espontâneo, ou mais momentos românticos planejados?",
        "What's a flirty dare you'd want built into our next date night?": "Que desafio sedutor você gostaria que fosse incluído no nosso próximo encontro?",
        "Confess one thing you find yourself doing just to make me look at you.": "Confesse uma coisa que você faz só para me fazer olhar para você.",
        "Tell me what makes a regular Tuesday feel romantic to you.": "Me diga o que faz uma terça-feira comum parecer romântica para você.",
        "Show me how you look at me when you think I'm not paying attention.": "Me mostre como você me olha quando acha que não estou prestando atenção.",
        "Narrate the quiet moment right before either of us says something we've been holding back.": "Narre o momento quieto logo antes de qualquer um de nós dizer algo que estava guardando.",
        "What's a physical detail of mine that gets more attractive to you over time, not less?": "Qual detalhe físico meu fica mais atraente para você com o tempo, e não menos?",
        "Would you rather a bold move from me first, or a bold move from you first?": "Você prefere que eu faça o primeiro movimento ousado, ou que você faça?",
        "What makes you feel most wanted, specifically, versus just loved?": "O que te faz sentir mais desejado(a), especificamente, e não só amado(a)?",
        "Make up a flirty forfeit for whoever answers the next card worst.": "Invente uma penalidade sedutora para quem responder pior a próxima carta.",
        "Say the one thing you'd want me to do right now if you could ask for anything.": "Diga a única coisa que você gostaria que eu fizesse agora, se pudesse pedir qualquer coisa.",
        "What's a flirty habit of mine you hope I never grow out of?": "Qual hábito sedutor meu você espera que eu nunca perca?",
        "Compliment the last thing I said that made you smile.": "Elogie a última coisa que eu disse que te fez sorrir.",
        "What's an attractive quality of mine that has nothing to do with looks?": "Qual qualidade atraente minha não tem nada a ver com aparência?",
        "What's a moment you wish had turned into a kiss, but didn't?": "Qual momento você gostaria que tivesse virado um beijo, mas não virou?",
        "Do you prefer affection that starts slow, or affection that's sudden and surprising?": "Você prefere carinho que começa devagar, ou carinho que é súbito e surpreendente?",
        "What's the most romantic thing that could happen on an otherwise ordinary night in?": "Qual é a coisa mais romântica que poderia acontecer numa noite comum em casa?",
        "Confess something about desire you've never said to anyone before, not just me.": "Confesse algo sobre desejo que você nunca disse a ninguém antes, nem mesmo a mim.",
        "Tell me the difference between how you flirt now versus at the very beginning.": "Me diga a diferença entre como você flerta agora e como flertava no início.",
        "Show me the exact reaction you have when I surprise you.": "Me mostre a reação exata que você tem quando eu te surpreendo.",
        "Describe the version of us, ten years from now, still flirting like this.": "Descreva a versão de nós, daqui a dez anos, ainda flertando assim.",
        "What's the fastest our chemistry has ever gone from calm to electric?": "Qual foi a vez mais rápida em que nossa química foi do calmo ao elétrico?",
        "Would you rather a whispered compliment, or a written one you can keep?": "Você prefere um elogio sussurrado, ou um escrito que você pode guardar?",
        "What's a boundary that, when respected, actually makes you feel closer to me?": "Qual limite, quando respeitado, na verdade te faz sentir mais próximo(a) de mim?",
        "Who would win a scavenger hunt in a place they've never been?": "Quem venceria uma caça ao tesouro num lugar onde nunca esteve?",
        "Who would talk their way out of a speeding ticket first?": "Quem conseguiria escapar de uma multa por excesso de velocidade primeiro?",
        "Who would win a blindfolded taste test of our favorite snacks?": "Quem venceria um teste de sabor de olhos vendados com nossos lanches favoritos?",
        "Who would become the unofficial mayor of any small town we visited?": "Quem se tornaria o prefeito não-oficial de qualquer cidade pequena que visitássemos?",
        "Who would survive better if we suddenly had to live off-grid for a month?": "Quem sobreviveria melhor se de repente tivéssemos que viver sem energia por um mês?",
        "Who would end up adopting a stray animal on a random walk?": "Quem acabaria adotando um animal de rua numa caminhada aleatória?",
        "Who would win a cooking competition with a mystery basket of ingredients?": "Quem venceria uma competição de culinária com uma cesta misteriosa de ingredientes?",
        "Who would talk to literally every stranger at a party?": "Quem conversaria literalmente com todo desconhecido numa festa?",
        "Who would win a spontaneous dance battle in the kitchen?": "Quem venceria uma batalha de dança espontânea na cozinha?",
        "Who is more likely to start a hobby and quit within a week?": "Quem é mais propenso(a) a começar um hobby e desistir em uma semana?",
        "Who is more likely to talk to a pet like it fully understands English?": "Quem é mais propenso(a) a falar com um animal de estimação como se ele entendesse tudo?",
        "Who is more likely to get emotionally attached to a plant?": "Quem é mais propenso(a) a se apegar emocionalmente a uma planta?",
        "Who is more likely to send a voice message instead of just typing?": "Quem é mais propenso(a) a mandar um áudio em vez de simplesmente digitar?",
        "Who is more likely to win an argument by simply outlasting the other?": "Quem é mais propenso(a) a vencer uma discussão apenas por resistir mais tempo?",
        "Who is more likely to buy something just because it was on sale?": "Quem é mais propenso(a) a comprar algo só porque estava em promoção?",
        "Who is more likely to laugh at the worst possible moment?": "Quem é mais propenso(a) a rir no pior momento possível?",
        "Who is more likely to walk into a glass door in public?": "Quem é mais propenso(a) a esbarrar numa porta de vidro em público?",
        "Who is more likely to accidentally reply-all to an embarrassing message?": "Quem é mais propenso(a) a responder a todos por acidente numa mensagem constrangedora?",
        "Who brings up an argument from months ago at the worst time?": "Quem traz à tona uma discussão de meses atrás na pior hora?",
        "Who is more likely to end an argument with a joke that actually works?": "Quem é mais propenso(a) a terminar uma discussão com uma piada que realmente funciona?",
        "Who would handle losing the house keys in a foreign city better?": "Quem lidaria melhor com a perda das chaves de casa numa cidade estrangeira?",
        "Who would stay calmer if we both got separated in a crowded place?": "Quem ficaria mais calmo(a) se nos separássemos num lugar cheio de gente?",
        "Who would end up giving a stranger unsolicited relationship advice?": "Quem acabaria dando conselhos de relacionamento sem pedirem para um desconhecido?",
        "Who would try to make friends with a very unfriendly cat?": "Quem tentaria fazer amizade com um gato muito arisco?",
        "Who would accidentally end up in the background of a stranger's photoshoot?": "Quem acabaria aparecendo sem querer no fundo de um ensaio fotográfico de um desconhecido?",
        "Who has better handwriting?": "Quem tem letra melhor?",
        "Who is the better dancer, honestly, no bias?": "Quem dança melhor, honestamente, sem viés?",
        "Who gives better advice under pressure?": "Quem dá melhores conselhos sob pressão?",
        "Who will be the first to fall asleep on the couch tonight?": "Quem vai ser o primeiro a dormir no sofá hoje à noite?",
        "Who will suggest ordering dessert before we even finish the main course?": "Quem vai sugerir pedir sobremesa antes mesmo de terminarmos o prato principal?",
        "Who takes longer getting ready to leave the house?": "Quem demora mais para se arrumar para sair?",
        "Who is pickier about how the dishwasher gets loaded?": "Quem é mais exigente sobre como a lava-louças é carregada?",
        "What's the dumbest joke that still makes both of you laugh every time?": "Qual é a piada mais boba que ainda faz vocês dois rirem toda vez?",
        "What's a phrase that means something completely different only to you two?": "Qual frase significa algo completamente diferente só para vocês dois?",
        "Who can name more of each other's exes without flinching?": "Quem consegue citar mais ex-namorados(as) do outro sem se abalar?",
        "Who can go longer without saying 'um' or 'like' while talking?": "Quem consegue falar mais tempo sem dizer 'tipo' ou 'né'?",
        "Who would win if you both tried to build furniture with no instructions?": "Quem venceria se ambos tentassem montar um móvel sem instruções?",
        "Who would be funnier narrating a nature documentary?": "Quem seria mais engraçado narrando um documentário de natureza?",
        "Who is most likely to fall in love with a random dog on the street?": "Quem é mais propenso(a) a se apaixonar por um cachorro qualquer na rua?",
        "Who is most likely to accidentally start a trend among your friends?": "Quem é mais propenso(a) a começar uma moda sem querer entre os amigos?",
        "Who would win a debate about which decade had the best music?": "Quem venceria um debate sobre qual década teve a melhor música?",
        "Who would be the first to cave and check their phone during a 'no phones' rule?": "Quem seria o primeiro a ceder e checar o celular durante uma regra de 'sem celular'?",
        "Who is more likely to plan an entire trip in one sitting out of excitement?": "Quem é mais propenso(a) a planejar uma viagem inteira de uma vez só de tão animado(a)?",
        "Who is more likely to make a to-do list and never look at it again?": "Quem é mais propenso(a) a fazer uma lista de tarefas e nunca mais olhar para ela?",
        "Who is more likely to laugh so hard they can't finish a sentence?": "Quem é mais propenso(a) a rir tanto que não consegue terminar uma frase?",
        "Who is more likely to text an apology instead of saying it in person?": "Quem é mais propenso(a) a mandar um pedido de desculpas por mensagem em vez de dizer pessoalmente?",
        "Who would panic first if the power went out during a movie night?": "Quem entraria em pânico primeiro se a luz caísse numa noite de filme?",
        "Who would end up narrating their own life out loud without noticing?": "Quem acabaria narrando a própria vida em voz alta sem perceber?",
        "Who is more likely to win a spelling bee under pressure?": "Quem é mais propenso(a) a vencer um soletrando sob pressão?",
        "Who will bring up getting a bigger TV first?": "Quem vai sugerir comprar uma TV maior primeiro?",
        "Who leaves more half-empty glasses of water around the house?": "Quem deixa mais copos de água pela metade espalhados pela casa?",
        "What's a mispronounced word that became permanently part of your vocabulary as a couple?": "Qual palavra pronunciada errada virou permanentemente parte do vocabulário de vocês como casal?",
        "Who can list the most countries in one minute?": "Quem consegue listar mais países em um minuto?",
        "Who would be a better contestant on a cooking reality show?": "Quem seria um(a) melhor participante num reality show de culinária?",
        "Who is most likely to turn a boring chore into a game?": "Quem é mais propenso(a) a transformar uma tarefa chata em um jogo?",
        "Who would win a competition for who can nap the fastest?": "Quem venceria uma competição de quem tira uma soneca mais rápido?",
        "Who would give the more convincing fake excuse to skip a boring event?": "Quem daria a desculpa falsa mais convincente para faltar a um evento chato?",
        "Who is more likely to become emotionally invested in a stranger's drama online?": "Quem é mais propenso(a) a se envolver emocionalmente no drama online de um desconhecido?",
        "Who is more likely to get caught talking about someone right as they walk in?": "Quem é mais propenso(a) a ser pego(a) falando de alguém bem na hora em que a pessoa entra?",
        "Who is quicker to say 'you're right' just to end an argument?": "Quem fala 'você tem razão' mais rápido só para acabar com uma discussão?",
        "Who would come up with a better backup plan if our first plan totally failed?": "Quem teria um plano B melhor se nosso primeiro plano falhasse completamente?",
        "Who would befriend the world's most talkative taxi driver?": "Quem faria amizade com o taxista mais falante do mundo?",
        "Who tells better bedtime stories, even for adults?": "Quem conta melhores histórias para dormir, mesmo para adultos?",
        "Who will suggest a spontaneous weekend trip first this year?": "Quem vai sugerir uma viagem espontânea de fim de semana primeiro este ano?",
        "Who is more particular about how the bed gets made?": "Quem é mais exigente sobre como a cama é arrumada?",
        "What's a text typo that became a running joke you still use?": "Qual erro de digitação virou uma piada que vocês ainda usam?",
        "Who can hold their breath longer, right now?": "Quem consegue prender a respiração por mais tempo, agora?",
        "Who would win at karaoke on a song neither of you knows well?": "Quem venceria no karaokê numa música que nenhum dos dois conhece bem?",
        "Who is most likely to accidentally befriend a celebrity in real life?": "Quem é mais propenso(a) a acidentalmente fazer amizade com uma celebridade na vida real?",
        "Who would out-negotiate a street vendor first?": "Quem conseguiria negociar melhor com um vendedor de rua primeiro?",
        "Who is more likely to fall for an obvious April Fools' joke?": "Quem é mais propenso(a) a cair numa pegadinha óbvia de primeiro de abril?",
        "Who is more likely to accidentally show up to a costume party in regular clothes?": "Quem é mais propenso(a) a aparecer sem querer numa festa a fantasia com roupa normal?",
        "Who is better at arguing calmly instead of raising their voice?": "Quem é melhor em discutir com calma em vez de levantar a voz?",
        "Who would be first to suggest calling it a night if a plan started going wrong?": "Quem seria o primeiro a sugerir encerrar a noite se um plano começasse a dar errado?",
        "Who would try to teach a parrot to say something ridiculous?": "Quem tentaria ensinar um papagaio a dizer algo ridículo?",
        "Who is a better judge of character on a first meeting?": "Quem tem melhor julgamento de caráter num primeiro encontro?",
        "Who will be the one to suggest redecorating a room first?": "Quem vai sugerir redecorar um cômodo primeiro?",
        "Who leaves their shoes in the most inconvenient spot?": "Quem deixa os sapatos no lugar mais inconveniente?",
        "What's a costume, prop, or object that's become a couple's tradition prop?": "Qual fantasia, adereço ou objeto virou um item tradicional do casal?",
        "Who can balance something on their head the longest, right now?": "Quem consegue equilibrar algo na cabeça por mais tempo, agora?",
        "Who would survive a week eating only what's in the fridge right now?": "Quem sobreviveria uma semana comendo só o que está na geladeira agora?",
        "Who is most likely to turn a five-star review into a personal mission?": "Quem é mais propenso(a) a transformar uma avaliação de cinco estrelas numa missão pessoal?",
        "Who would win a competition to make the other laugh first, no talking allowed?": "Quem venceria uma competição para fazer o outro rir primeiro, sem falar?",
        "Who is more likely to fall in love with a new hobby overnight?": "Quem é mais propenso(a) a se apaixonar por um novo hobby da noite para o dia?",
        "Who is more likely to send a voice message that's way too long by accident?": "Quem é mais propenso(a) a mandar um áudio acidentalmente longo demais?",
        "Who is the one who needs the last word, even in a silly disagreement?": "Quem precisa ter a última palavra, mesmo numa discussão boba?",
        "Who would take charge if we both got food poisoning on vacation?": "Quem assumiria o controle se ambos passássemos mal de comida nas férias?",
        "Who would end up giving directions to a lost tourist, even in an unfamiliar city?": "Quem acabaria dando informações a um turista perdido, mesmo numa cidade desconhecida?",
        "Who is better at keeping a secret, honestly?": "Quem é melhor em guardar segredo, honestamente?",
        "Who will bring up trying a new restaurant first this month?": "Quem vai sugerir experimentar um novo restaurante primeiro este mês?",
        "Who takes over the aux cord more often on car rides?": "Quem toma conta do controle da música com mais frequência nas viagens de carro?",
        "What's an accent or voice one of you does that's become a household bit?": "Qual sotaque ou voz que um de vocês faz virou uma piada de casa?",
        "Who can come up with a better excuse for being late, on the spot?": "Quem consegue inventar uma desculpa melhor para o atraso, na hora?",
        "Who would win an eating contest with something neither of you likes?": "Quem venceria um concurso de comer algo que nenhum dos dois gosta?",
        "Who is most likely to become the group's designated planner for every trip?": "Quem é mais propenso(a) a se tornar o(a) planejador(a) oficial de todas as viagens do grupo?",
        "Who is most likely to know the lyrics to a song neither of you claims to like?": "Quem é mais propenso(a) a saber a letra de uma música que nenhum dos dois admite gostar?",
        "Who would win a game of chess against a suspiciously confident stranger?": "Quem venceria uma partida de xadrez contra um desconhecido suspeitosamente confiante?",
        "Who is more likely to name every plant in the house something ridiculous?": "Quem é mais propenso(a) a dar nomes ridículos para todas as plantas de casa?",
        "What's a trip we should take specifically to celebrate a milestone?": "Qual viagem deveríamos fazer especificamente para comemorar um marco?",
        "Would you rather explore one continent deeply, or touch every continent briefly?": "Você prefere explorar um continente a fundo, ou visitar rapidamente todos os continentes?",
        "What's a travel tradition you want us to have every single year?": "Qual tradição de viagem você quer que a gente tenha todo ano?",
        "What's one room in our future home that's entirely your vision?": "Qual cômodo da nossa futura casa será totalmente da sua visão?",
        "Do you want a home that's always ready for guests, or one that's just for us?": "Você quer uma casa sempre pronta para visitas, ou uma só para nós?",
        "What's a small ritual you want built into how we start mornings at home?": "Qual pequeno ritual você quer incorporar em como começamos as manhãs em casa?",
        "What does success look like for you outside of a job title?": "Como é o sucesso para você fora de um cargo?",
        "How do you want us to handle it if one of our careers takes off faster than the other's?": "Como você quer que a gente lide se a carreira de um decolar mais rápido que a do outro?",
        "What's a splurge you want us to allow ourselves without guilt?": "Qual gasto extra você quer que a gente se permita sem culpa?",
        "How do you want us to make big financial decisions — together every time, or with some independence?": "Como você quer que a gente tome grandes decisões financeiras — sempre juntos, ou com alguma independência?",
        "What's a habit you hope we build together in the next year?": "Qual hábito você espera que a gente construa juntos no próximo ano?",
        "Do you want our weekends to be mostly planned, or mostly open?": "Você quer que nossos fins de semana sejam mais planejados, ou mais livres?",
        "What role do you hope our future household plays for extended family?": "Que papel você espera que nosso futuro lar tenha para a família estendida?",
        "What's something from my family's way of doing things you'd want to adopt?": "O que na forma da minha família fazer as coisas você gostaria de adotar?",
        "If we got a pet tomorrow, what would we name it and why?": "Se a gente adotasse um bicho amanhã, como o chamaríamos e por quê?",
        "What's a physical challenge, like a hike or a race, you want us to train for together?": "Qual desafio físico, como uma trilha ou corrida, você quer que a gente treine juntos?",
        "What's a wedding detail that would mean nothing to guests but everything to you?": "Qual detalhe do casamento não significaria nada para os convidados, mas tudo para você?",
        "What's a tradition from a friend's family you secretly want to steal for ours?": "Qual tradição da família de um amigo você secretamente quer roubar para a nossa?",
        "What's one holiday you'd want to completely reinvent for just the two of us?": "Qual feriado você gostaria de reinventar completamente só para nós dois?",
        "What's a skill you want to have fully mastered by the time we retire?": "Qual habilidade você quer ter dominado completamente até nos aposentarmos?",
        "What's a dream you'd chase even if it meant a few years of instability?": "Qual sonho você perseguiria mesmo que significasse alguns anos de instabilidade?",
        "What's a bucket list item that would surprise people who think they know you?": "Qual item da lista de desejos surpreenderia quem acha que te conhece?",
        "If you had to bet, what city do you think we'll actually end up in?": "Se você tivesse que apostar, em qual cidade acha que a gente realmente vai acabar morando?",
        "What's a moment you're already looking forward to remembering, even before it happens?": "Qual momento você já está ansioso para lembrar, mesmo antes de acontecer?",
        "What's something you want people to say about how we treated each other?": "O que você quer que as pessoas digam sobre como nós nos tratávamos?",
        "What habit do you want us to build to take care of each other physically as we age?": "Qual hábito você quer que a gente construa para cuidar um do outro fisicamente conforme envelhecemos?",
        "Health": "Saúde",
        "How do you want us to support each other through a tough health scare, if it ever happens?": "Como você quer que a gente se apoie durante um susto de saúde, se algum dia acontecer?",
        "What does taking care of your mind, not just your body, look like for you long-term?": "Como é cuidar da sua mente, não só do corpo, para você no longo prazo?",
        "What kind of friend group do you hope we build together over the years?": "Que tipo de grupo de amigos você espera que a gente construa ao longo dos anos?",
        "Community": "Comunidade",
        "How involved do you want us to be in a neighborhood or local community someday?": "O quão envolvidos você quer que a gente esteja numa vizinhança ou comunidade local algum dia?",
        "What's a cause or group you'd want us to volunteer for together?": "Qual causa ou grupo você gostaria que a gente ajudasse voluntariamente juntos?",
        "What's a fear you want to have outgrown together by next year?": "Qual medo você quer ter superado junto comigo até o próximo ano?",
        "What's a version of 'us' five years from now that you're actively working toward?": "Qual versão de 'nós' daqui a cinco anos você está ativamente trabalhando para alcançar?",
        "What skill do you want us to learn together purely to grow closer?": "Qual habilidade você quer que a gente aprenda junto só para ficarmos mais próximos?",
        "What's a destination that scares you a little but you'd still want to visit with me?": "Qual destino te assusta um pouco, mas você ainda gostaria de visitar comigo?",
        "Would you rather move abroad for a year as an experiment, or never leave home for more than a month?": "Você prefere morar no exterior por um ano como experiência, ou nunca ficar fora de casa por mais de um mês?",
        "What's a piece of furniture or art you want to keep forever, no matter how many times we move?": "Qual móvel ou obra de arte você quer manter para sempre, não importa quantas vezes a gente se mude?",
        "Should our future home be closer to nature, or closer to everything convenient?": "Nossa futura casa deveria ficar mais perto da natureza, ou mais perto de tudo conveniente?",
        "What's a professional dream of yours I might not fully know about yet?": "Qual sonho profissional seu eu talvez ainda não conheça completamente?",
        "How do you want us to celebrate each other's career wins, big and small?": "Como você quer que a gente comemore as vitórias profissionais um do outro, grandes e pequenas?",
        "What financial goal do you want us to hit together in the next three years?": "Qual meta financeira você quer que a gente alcance juntos nos próximos três anos?",
        "Would you rather live below our means comfortably, or stretch for a bigger lifestyle?": "Você prefere viver confortavelmente abaixo do nosso orçamento, ou se esforçar por um estilo de vida maior?",
        "What's something you want our future life to have less of?": "O que você quer que a nossa futura vida tenha menos?",
        "What's a fear about family, yours or mine, that you want us to face together?": "Qual medo sobre família, a sua ou a minha, você quer que a gente enfrente junto?",
        "How do you imagine our future pet fitting into a normal weekday?": "Como você imagina nosso futuro bicho de estimação se encaixando num dia de semana normal?",
        "What's an adventure you want to have before any major life change, like kids or a move?": "Qual aventura você quer viver antes de uma grande mudança de vida, como filhos ou uma mudança de cidade?",
        "What's a fear about marriage you want to talk through honestly before it happens?": "Qual medo sobre casamento você quer conversar com honestidade antes que aconteça?",
        "What tradition do you want to be known for, specifically, among our friends?": "Por qual tradição você quer ser conhecido(a), especificamente, entre nossos amigos?",
        "What's your ideal balance between tradition and doing something completely new each year?": "Qual é o seu equilíbrio ideal entre tradição e fazer algo completamente novo a cada ano?",
        "What conversation about retirement do you want us to start having now, even if it's far off?": "Qual conversa sobre aposentadoria você quer que a gente comece a ter agora, mesmo que ainda esteja longe?",
        "What's a dream that would need both of us fully on board to actually happen?": "Qual sonho precisaria de nós dois totalmente comprometidos para realmente acontecer?",
        "What's an item on the list that only makes sense once we're older?": "Qual item da lista só faz sentido quando formos mais velhos?",
        "What would make you say 'yes, this is exactly where we're supposed to be'?": "O que te faria dizer 'sim, é exatamente aqui que devíamos estar'?",
        "What's a small future memory, not a big milestone, that you're quietly hoping for?": "Qual pequena memória futura, não um grande marco, você está esperando em silêncio?",
        "If we only left behind one lesson for people who knew us, what should it be?": "Se deixássemos apenas uma lição para quem nos conheceu, qual deveria ser?",
        "What's a healthy habit you want us to hold each other accountable for?": "Qual hábito saudável você quer que a gente cobre um do outro?",
        "How do you want us to stay connected to old friends as life gets busier?": "Como você quer que a gente continue conectado com velhos amigos conforme a vida fica mais corrida?",
        "What's something about conflict you want us to get better at handling together?": "O que sobre conflito você quer que a gente melhore em lidar juntos?",
        "What's a trip you'd want to take completely unplanned, with nothing booked in advance?": "Qual viagem você gostaria de fazer completamente sem planejamento, sem nada reservado com antecedência?",
        "What's the first thing you want to do the day we move into our first real home together?": "Qual é a primeira coisa que você quer fazer no dia em que nos mudarmos para nossa primeira casa de verdade juntos?",
        "If our careers ever pulled us to different cities, how do you want us to decide what to do?": "Se nossas carreiras algum dia nos levassem para cidades diferentes, como você quer que a gente decida o que fazer?",
        "What's something money-related that stressed you in the past that you want us to handle differently?": "O que relacionado a dinheiro te estressou no passado que você quer que a gente lide de forma diferente?",
        "What does 'a good life,' in the simplest terms, mean to you?": "O que significa 'uma vida boa', nos termos mais simples, para você?",
        "What's a family pattern from your upbringing you actively want to break?": "Qual padrão familiar da sua criação você quer ativamente quebrar?",
        "Would having a pet change how you picture our future travel plans?": "Ter um bicho de estimação mudaria como você imagina nossos futuros planos de viagem?",
        "What's an adventure that would only be fun because it's with me specifically?": "Qual aventura só seria divertida porque é comigo especificamente?",
        "What's one thing you'd want a close friend to say in a wedding speech about us?": "O que você gostaria que um amigo próximo dissesse num discurso de casamento sobre nós?",
        "What's a tradition we already have that you didn't realize was a tradition until now?": "Qual tradição a gente já tem que você não percebeu que era uma tradição até agora?",
        "How do you want us to handle it if our families have very different holiday expectations?": "Como você quer que a gente lide se nossas famílias tiverem expectativas muito diferentes para os feriados?",
        "What's something you want to have let go of completely by the time we retire?": "O que você quer ter deixado para trás completamente até nos aposentarmos?",
        "What's a dream you have for me that you've never actually told me?": "Qual sonho você tem para mim que nunca me contou de verdade?",
        "What's the most expensive item on your bucket list, and is it worth saving for?": "Qual é o item mais caro da sua lista de desejos, e vale a pena economizar para ele?",
        "What's a place neither of us has considered yet that might actually be perfect for us?": "Qual lugar nenhum de nós considerou ainda que pode ser perfeito para nós?",
        "What everyday object do you think will one day remind us of exactly this era of our life?": "Qual objeto do dia a dia você acha que um dia vai nos lembrar exatamente desta fase da nossa vida?",
        "What's a small kindness you hope becomes 'our thing' that others remember us for?": "Qual pequena gentileza você espera que se torne 'a nossa marca' pela qual os outros vão nos lembrar?",
        "What's a stress-relief habit you want us to practice together regularly?": "Qual hábito de alívio de estresse você quer que a gente pratique juntos regularmente?",
        "What kind of neighbors do you hope we become to the people around us?": "Que tipo de vizinhos você espera que a gente se torne para as pessoas ao redor?",
        "What's a version of yourself you're actively trying to grow into, and how can I help?": "Qual versão de você mesmo(a) você está tentando ativamente se tornar, e como eu posso ajudar?",
        "What's a place we visited once that you'd want to live in for a season, just to try it?": "Qual lugar que já visitamos você gostaria de morar por uma temporada, só para experimentar?",
        "How important is it to you that our home reflects both our personalities equally?": "O quão importante é para você que nossa casa reflita as duas personalidades igualmente?",
        "What's a boundary you want us to protect around work, even during busy seasons?": "Qual limite você quer que a gente proteja em relação ao trabalho, mesmo em épocas corridas?",
        "What's a purchase you'd want us to save up for together as a shared goal?": "Qual compra você gostaria que a gente economizasse juntos como uma meta em comum?",
        "Would you rather a life full of variety, or a life with a few things done perfectly?": "Você prefere uma vida cheia de variedade, ou uma vida com poucas coisas feitas perfeitamente?",
        "What's something about building a family, however that looks for us, that excites you most?": "O que sobre construir uma família, seja lá como for para nós, mais te empolga?",
        "If we ever had multiple pets, how do you imagine they'd each fit into our home?": "Se a gente algum dia tivesse vários bichos, como você imagina que cada um se encaixaria em nossa casa?",
        "What's a spontaneous adventure we could actually plan for next month?": "Qual aventura espontânea a gente poderia realmente planejar para o mês que vem?",
        "What part of planning a future wedding are you most excited to do together?": "Qual parte de planejar um futuro casamento você está mais animado(a) para fazer junto?",
        "What tradition do you want to make sure survives even a big move or life change?": "Qual tradição você quer garantir que sobreviva mesmo a uma grande mudança de vida?",
        "What's the most 'us' way you can imagine spending a holiday that has nothing to do with tradition?": "Qual é a forma mais 'a nossa cara' de passar um feriado que não tem nada a ver com tradição?",
        "What's a version of 'slowing down' that actually sounds appealing to you, not scary?": "Qual versão de 'desacelerar' realmente parece atraente para você, e não assustadora?",
        "What dream have you never said out loud because it felt too big to admit?": "Qual sonho você nunca disse em voz alta porque parecia grande demais para admitir?",
        "What's a bucket list item you'd only ever want to do with me, no one else?": "Qual item da lista de desejos você só gostaria de fazer comigo, com mais ninguém?",
        "How much does being near the ocean, mountains, or a specific landscape matter to you long-term?": "O quanto estar perto do oceano, montanhas, ou uma paisagem específica importa para você no longo prazo?",
        "What's a moment from a future birthday, yours or mine, that you're already imagining?": "Qual momento de um futuro aniversário, seu ou meu, você já está imaginando?",
        "What do you hope this specific chapter of our life is remembered for, later on?": "Pelo que você espera que este capítulo específico da nossa vida seja lembrado, mais tarde?",
        "What's a way you want us to celebrate simply being healthy together, not just fix problems?": "De que forma você quer que a gente celebre simplesmente estar saudável junto, e não só resolver problemas?",
        "What's a local tradition or event you'd want us to make a yearly habit?": "Qual tradição ou evento local você gostaria que a gente tornasse um hábito anual?",
        "What's a compliment about your own growth you'd want to hear from me a year from now?": "Qual elogio sobre seu próprio crescimento você gostaria de ouvir de mim daqui a um ano?",
        "What's a trip that would be more about the journey than the destination for you?": "Qual viagem seria mais sobre o trajeto do que o destino para você?",
        "What's a dream you'd chase differently now than you would have five years ago?": "Qual sonho você perseguiria de forma diferente agora do que perseguiria há cinco anos?",
      };

      const PT_FIRST_DESC = {
        "First time we met":
          "Às 3 da manhã, em frente a um shopping fechado. Depois da festa, busquei você e a Mary com o Lucca. Minha primeira impressão foi que você era linda — mas também um pouco tímida.",
        "First conversation":
          "No apartamento no Novo Campeche, só nós dois no sofá, conversando sobre todo tipo de coisa. Você era inteligente, engraçada e gentil. Eu estava nervoso porque você não ria muito das minhas piadas.",
        "First date": `Nosso primeiro encontro de verdade aconteceu pela Lagoa da Conceição. Eu tinha planejado o dia inteiro só para nós. Começamos no Meskla Café, dividindo pão de queijo quentinho, café e banana bread — a comida estava maravilhosa, mas estar sentado na sua frente deixou tudo ainda melhor.\n\nEu tinha reservado secretamente uma mesa em um restaurante misterioso para mais tarde naquela noite, querendo te surpreender. Como ainda tínhamos horas pela frente, simplesmente ficamos juntos — conversando, rindo baixinho, aproveitando a companhia um do outro e tomando um sorvete enquanto a tarde passava.\n\nQuando finalmente chegou a hora, entramos no Bistro dos Sete Ais, um restaurante lindo dentro de um hotel elegante. O jantar foi especial, o ambiente aconchegante, e toda a noite pareceu o começo perfeito de algo especial.`,
        "First photo together":
          "Foi no seu último open bar aqui em Florianópolis, pouco antes de você partir para o intercâmbio. Nossa primeira foto juntos é de nós nos beijando no Toma Tudo; número 257 na sua câmera digital. Um momento simples que, de alguma forma, se tornou um dos mais especiais.",
        "First trip": `No dia antes de você partir, reservamos espontaneamente um Airbnb... nossa primeira vez fazendo algo assim juntos. Não foi uma grande viagem, apenas um lugar tranquilo fora de casa, mas foi especial. Passamos o tempo totalmente presentes um com o outro, rindo, conversando sem esconder nada e nos conectando de uma forma mais profunda do que nunca. Foi também o dia em que dissemos “eu te amo” um para o outro pela primeira vez, um momento simples e sincero que fez tudo parecer ainda mais real.`,
        "First time we had to be apart": `Além das viagens curtas para Lajeado e Rio para visitar nossas famílias, a verdadeira separação aconteceu no dia em que você partiu para o intercâmbio. Eu te deixei no aeroporto sabendo que não te veria por meses. Ver você indo embora me encheu de uma tristeza profunda, daquelas que pesam no peito... mas, ao mesmo tempo, fiquei genuinamente feliz por você estar prestes a começar um novo capítulo da sua vida.\n\nA distância dói. Ficar longe de você é difícil de maneiras que nem sempre consigo colocar em palavras. Mas o meu amor por você não tem distância. Ele permanece comigo todos os dias, constante e certo, não importa quantos quilômetros existam entre nós.`,
      };

      function currentLanguage() {
        return localStorage.getItem("gfLanguage") || "en";
      }
      function tr(text) {
        if (currentLanguage() !== "pt" || typeof text !== "string") return text;
        return PT_TRANSLATIONS[text] || text;
      }
      function translateStaticDOM() {
        if (currentLanguage() !== "pt") return;
        const walker = document.createTreeWalker(
          document.body,
          NodeFilter.SHOW_TEXT,
        );
        const nodes = [];
        while (walker.nextNode()) nodes.push(walker.currentNode);
        nodes.forEach((n) => {
          const raw = n.nodeValue;
          const key = raw.trim();
          if (PT_TRANSLATIONS[key])
            n.nodeValue = raw.replace(key, PT_TRANSLATIONS[key]);
        });
        document.querySelectorAll("[placeholder]").forEach((el) => {
          if (PT_TRANSLATIONS[el.getAttribute("placeholder")])
            el.setAttribute(
              "placeholder",
              PT_TRANSLATIONS[el.getAttribute("placeholder")],
            );
        });
      }
      function updateLanguageButtons() {
        const pt = currentLanguage() === "pt";
        ["langEN", "langENMobile"].forEach((id) => {
          const el = document.getElementById(id);
          if (el) el.classList.toggle("active", !pt);
        });
        ["langPT", "langPTMobile"].forEach((id) => {
          const el = document.getElementById(id);
          if (el) el.classList.toggle("active", pt);
        });
      }
      function setLanguage(lang) {
        localStorage.setItem("gfLanguage", lang);
        location.reload();
      }
      updateLanguageButtons();
      document
        .getElementById("langEN")
        ?.addEventListener("click", () => setLanguage("en"));
      document
        .getElementById("langPT")
        ?.addEventListener("click", () => setLanguage("pt"));
      document
        .getElementById("langENMobile")
        ?.addEventListener("click", () => setLanguage("en"));
      document
        .getElementById("langPTMobile")
        ?.addEventListener("click", () => setLanguage("pt"));

      // ---------- dark / night mode ----------
      // Preference stored in localStorage key "gfTheme" = "light" | "dark"
      function currentTheme() {
        const t = localStorage.getItem("gfTheme");
        if (t === "light" || t === "dark") return t;
        try {
          if (
            window.matchMedia &&
            window.matchMedia("(prefers-color-scheme: dark)").matches
          ) {
            return "dark";
          }
        } catch (e) {}
        return "light";
      }
      function applyTheme(theme) {
        const dark = theme === "dark";
        if (dark) document.documentElement.setAttribute("data-theme", "dark");
        else document.documentElement.removeAttribute("data-theme");
        const label = dark
          ? currentLanguage() === "pt"
            ? "Modo claro"
            : "Light mode"
          : currentLanguage() === "pt"
            ? "Modo noturno"
            : "Dark mode";
        const icon = dark ? "☀️" : "🌙";
        ["themeToggle", "themeToggleMobile"].forEach((id) => {
          const btn = document.getElementById(id);
          if (!btn) return;
          btn.textContent = icon;
          btn.title = label;
          btn.setAttribute("aria-label", label);
        });
      }
      function toggleTheme() {
        const next = currentTheme() === "dark" ? "light" : "dark";
        localStorage.setItem("gfTheme", next);
        applyTheme(next);
      }
      applyTheme(currentTheme());
      document
        .getElementById("themeToggle")
        ?.addEventListener("click", toggleTheme);
      document
        .getElementById("themeToggleMobile")
        ?.addEventListener("click", toggleTheme);

      /* ================================================================
   Below this line is the site logic. You shouldn't need to touch
   it unless you want to change how something behaves.
   ================================================================ */

      // ---------- particles ----------
      (function initParticles() {
        const wrap = document.getElementById("particles");
        const n = window.innerWidth < 600 ? 10 : 18;
        for (let i = 0; i < n; i++) {
          const p = document.createElement("div");
          p.className = "particle";
          p.textContent = Math.random() > 0.5 ? "♥" : "·";
          p.style.left = Math.random() * 100 + "vw";
          p.style.animationDuration = 14 + Math.random() * 14 + "s";
          p.style.animationDelay = Math.random() * 14 + "s";
          p.style.fontSize = 10 + Math.random() * 10 + "px";
          wrap.appendChild(p);
        }
      })();

      // ---------- nav / tabs + cross-device attention dots ----------
      // Blue dots work in three cases:
      //  1) You add something while on another tab → dot stays until you open it
      //  2) You add something while already on that tab → brief flash
      //  3) The other person adds something (Firebase) → when YOU open the site
      //     later, a dot appears if you haven't opened that tab since then.
      //
      // Cross-device memory uses localStorage keys:
      //   gf_lastSeen_bucketlist  /  gf_lastSeen_music
      // Each stores a timestamp (ms). Anything with createdAt newer than that
      // is treated as "unseen" for this browser/device.
      let activeTab = "story";
      const tabDotTimers = {}; // tab name → timeout id (auto-clear flash)

      function itemCreatedMs(item) {
        if (!item) return 0;
        const c = item.createdAt;
        if (!c) return 0;
        if (typeof c.toMillis === "function") return c.toMillis(); // Firestore Timestamp
        if (typeof c.seconds === "number") return c.seconds * 1000;
        if (typeof c === "number") return c;
        const parsed = Date.parse(c);
        return Number.isNaN(parsed) ? 0 : parsed;
      }

      function getLastSeenMs(tab) {
        const raw = localStorage.getItem("gf_lastSeen_" + tab);
        if (raw === null || raw === "") return null; // never visited this tab on this device
        const n = parseInt(raw, 10);
        return Number.isFinite(n) ? n : null;
      }

      function markTabSeen(tab, items) {
        // Remember the newest item time (and at least "now") so we don't re-flag
        // the same items the next time this browser loads the site.
        let max = Date.now();
        (items || []).forEach((it) => {
          const t = itemCreatedMs(it);
          if (t > max) max = t;
        });
        localStorage.setItem("gf_lastSeen_" + tab, String(max));
      }

      function hasUnseenItems(tab, items) {
        const last = getLastSeenMs(tab);
        if (last === null) return false; // first load baseline happens in refreshTabDotsFromData
        return (items || []).some((it) => itemCreatedMs(it) > last);
      }

      // Call after Firebase data arrives (and on first load) to show dots for
      // items added since this device last opened that tab.
      function refreshTabDotsFromData(tab, items) {
        const last = getLastSeenMs(tab);
        if (last === null) {
          // First time on this browser: baseline without alarming about old items
          markTabSeen(tab, items);
          return;
        }
        if (activeTab === tab) {
          // Looking at it right now → mark seen, no sticky dot
          markTabSeen(tab, items);
          return;
        }
        if (hasUnseenItems(tab, items)) setTabDot(tab);
      }

      function setTabDot(tab) {
        const dots = document.querySelectorAll(
          `.tab-dot[data-dot-for="${tab}"]`,
        );
        if (!dots.length) return;

        if (tabDotTimers[tab]) {
          clearTimeout(tabDotTimers[tab]);
          tabDotTimers[tab] = null;
        }

        if (activeTab === tab) {
          // Already on this tab → short flash, then hide
          dots.forEach((d) => {
            d.hidden = false;
            d.classList.remove("flash");
            void d.offsetWidth;
            d.classList.add("flash");
          });
          tabDotTimers[tab] = setTimeout(() => {
            clearTabDot(tab);
            tabDotTimers[tab] = null;
          }, 2400);
        } else {
          // Different tab → keep until they open it
          dots.forEach((d) => {
            d.classList.remove("flash");
            d.hidden = false;
          });
        }
      }

      function clearTabDot(tab) {
        if (tabDotTimers[tab]) {
          clearTimeout(tabDotTimers[tab]);
          tabDotTimers[tab] = null;
        }
        document
          .querySelectorAll(`.tab-dot[data-dot-for="${tab}"]`)
          .forEach((d) => {
            d.hidden = true;
            d.classList.remove("flash");
          });
      }

      // Tabs that live under the ··· "More" menu (add future ones here)
      const MORE_TABS = ["calendar", "daycards", "games", "personal"];

      // Valid tab ids — used for URL hash routing (#album, #music, #calendar, …)
      const VALID_TABS = [
        "story",
        "album",
        "us",
        "openwhen",
        "bucketlist",
        "quizzes",
        "music",
        "personal",
        "calendar",
        "daycards",
        "games",
      ];

      function closeNavMore() {
        const menu = document.getElementById("navMoreMenu");
        const btn = document.getElementById("navMoreBtn");
        if (menu) menu.classList.remove("open");
        if (btn) {
          btn.classList.remove("open");
          btn.setAttribute("aria-expanded", "false");
        }
      }

      function updateNavMoreActive(name) {
        const btn = document.getElementById("navMoreBtn");
        if (!btn) return;
        btn.classList.toggle("active-section", MORE_TABS.includes(name));
      }

      function tabFromHash() {
        const raw = (location.hash || "")
          .replace(/^#/, "")
          .trim()
          .toLowerCase();
        if (VALID_TABS.includes(raw)) return raw;
        return "story";
      }

      // updateHash: write #tab to the URL (default true)
      // scroll: scroll to top (default true; false on first load from hash)
      function switchTab(name, opts) {
        opts = opts || {};
        const updateHash = opts.updateHash !== false;
        const scroll = opts.scroll !== false;

        if (!VALID_TABS.includes(name)) name = "story";
        if (!document.getElementById("tab-" + name)) name = "story";

        activeTab = name;
        clearTabDot(name);
        // Opening the tab marks everything currently loaded as "seen" for this device
        if (name === "bucketlist")
          markTabSeen(
            "bucketlist",
            typeof bucketItems !== "undefined" ? bucketItems : [],
          );
        if (name === "music")
          markTabSeen(
            "music",
            typeof musicSongs !== "undefined" ? musicSongs : [],
          );
        if (name === "calendar")
          markTabSeen(
            "calendar",
            typeof calEvents !== "undefined" ? calEvents : [],
          );
        if (name === "album")
          markTabSeen(
            "album",
            typeof memoriesItems !== "undefined" ? memoriesItems : [],
          );
        if (name === "daycards")
          markTabSeen(
            "daycards",
            typeof dayCards !== "undefined" ? dayCards : [],
          );
        if (name === "games" && typeof renderGamesHub === "function") {
          try {
            renderGamesHub();
          } catch (e) {}
        }
        if (name === "personal" && typeof tpRender === "function") {
          try {
            tpRender();
          } catch (e) {}
        }

        document
          .querySelectorAll(".tab-panel")
          .forEach((p) => p.classList.remove("active"));
        const panel = document.getElementById("tab-" + name);
        if (panel) panel.classList.add("active");
        document
          .querySelectorAll(".tab-btn")
          .forEach((b) => b.classList.toggle("active", b.dataset.tab === name));
        updateNavMoreActive(name);
        closeNavMore();
        const mobileMenu = document.getElementById("mobileMenu");
        if (mobileMenu) mobileMenu.classList.remove("open");
        if (scroll) {
          try {
            window.scrollTo({ top: 0, behavior: "smooth" });
          } catch (e) {
            window.scrollTo(0, 0);
          }
        }
        // Only call when the music helpers have already been defined
        if (
          name === "music" &&
          typeof showMusicCopyrightBanner === "function"
        ) {
          try {
            showMusicCopyrightBanner();
          } catch (e) {}
        }

        // Keep the URL in sync so refresh / share / back-button stay on this tab
        if (updateHash) {
          const next = "#" + name;
          if (location.hash !== next) {
            try {
              history.pushState({ tab: name }, "", next);
            } catch (e) {
              // file:// or strict browsers may block pushState — fall back
              try {
                location.hash = name;
              } catch (e2) {}
            }
          }
        }
      }
      document
        .querySelectorAll(".tab-btn")
        .forEach((b) =>
          b.addEventListener("click", () => switchTab(b.dataset.tab)),
        );
      document.getElementById("hamburgerBtn")?.addEventListener("click", () => {
        document.getElementById("mobileMenu")?.classList.toggle("open");
        closeNavMore();
      });

      // Tab routing from the URL is initialized at the END of this script
      // (see initTabRouting) so every helper already exists — avoids freezes
      // on refresh when the hash points at Music / Calendar / Day Cards.

      // ··· More menu (desktop)
      (function initNavMore() {
        const btn = document.getElementById("navMoreBtn");
        const menu = document.getElementById("navMoreMenu");
        if (!btn || !menu) return;
        btn.addEventListener("click", (e) => {
          e.stopPropagation();
          const open = menu.classList.toggle("open");
          btn.classList.toggle("open", open);
          btn.setAttribute("aria-expanded", open ? "true" : "false");
        });
        document.addEventListener("click", (e) => {
          if (!e.target.closest("#navMore")) closeNavMore();
        });
        document.addEventListener("keydown", (e) => {
          if (e.key === "Escape") closeNavMore();
        });
      })();

      // ---------- hero ----------
      document.getElementById("heroEyebrow").textContent = tr(
        CONFIG.hero.eyebrow,
      );
      document.getElementById("heroTitle").textContent = tr(CONFIG.hero.title);
      document.getElementById("heroSubtitle").textContent = tr(
        CONFIG.hero.subtitle,
      );
      document.getElementById("heroMessage").textContent = tr(
        CONFIG.hero.message,
      );
      if (CONFIG.photos.hero) {
        document.getElementById("heroPhoto").outerHTML =
          `<img src="${CONFIG.photos.hero}" class="hero-photo" alt="Us">`;
      }
      if (CONFIG.photos.final) {
        document.getElementById("finalPhoto").outerHTML =
          `<img src="${CONFIG.photos.final}" style="width:100%; height:100%; object-fit:cover;" alt="Us">`;
      }

      // ---------- together counter ----------
      function updateTogether() {
        const start = new Date(CONFIG.relationshipStart);
        const now = new Date();
        let diffMs = now - start;
        if (diffMs < 0) diffMs = 0;

        let years = now.getFullYear() - start.getFullYear();
        let months = now.getMonth() - start.getMonth();
        let days = now.getDate() - start.getDate();
        let hours = now.getHours() - start.getHours();
        let mins = now.getMinutes() - start.getMinutes();
        let secs = now.getSeconds() - start.getSeconds();

        if (secs < 0) {
          secs += 60;
          mins--;
        }
        if (mins < 0) {
          mins += 60;
          hours--;
        }
        if (hours < 0) {
          hours += 24;
          days--;
        }
        if (days < 0) {
          const prevMonth = new Date(
            now.getFullYear(),
            now.getMonth(),
            0,
          ).getDate();
          days += prevMonth;
          months--;
        }
        if (months < 0) {
          months += 12;
          years--;
        }

        document.getElementById("c-years").textContent = Math.max(0, years);
        document.getElementById("c-months").textContent = Math.max(0, months);
        document.getElementById("c-days").textContent = Math.max(0, days);
        document.getElementById("c-hours").textContent = Math.max(0, hours);
        document.getElementById("c-mins").textContent = Math.max(0, mins);
        document.getElementById("c-secs").textContent = Math.max(0, secs);
      }
      setInterval(updateTogether, 1000);
      updateTogether();

      // ---------- reunion + final countdown ----------
      function pad(n) {
        return String(n).padStart(2, "0");
      }
      function updateReunion() {
        const target = new Date(CONFIG.reunionDate);
        const now = new Date();
        let diff = target - now;
        const card = document.getElementById("countdownCard");
        const isPt = currentLanguage() === "pt";
        if (diff <= 0) {
          if (card)
            card.innerHTML =
              '<div class="zero-state">' +
              (isPt ? "Hoje. Finalmente. ♥" : "Today. Finally. ♥") +
              "</div>";
          ["f-days", "f-hours", "f-mins", "f-secs"].forEach((id) => {
            const el = document.getElementById(id);
            if (el) el.textContent = "0";
          });
          return;
        }
        const d = Math.floor(diff / 86400000);
        diff -= d * 86400000;
        const h = Math.floor(diff / 3600000);
        diff -= h * 3600000;
        const m = Math.floor(diff / 60000);
        diff -= m * 60000;
        const s = Math.floor(diff / 1000);
        const rd = document.getElementById("r-days"),
          rh = document.getElementById("r-hours"),
          rm = document.getElementById("r-mins"),
          rs = document.getElementById("r-secs");
        if (rd) {
          rd.textContent = d;
          rh.textContent = pad(h);
          rm.textContent = pad(m);
          rs.textContent = pad(s);
        }
        const fd = document.getElementById("f-days"),
          fh = document.getElementById("f-hours"),
          fm = document.getElementById("f-mins"),
          fs = document.getElementById("f-secs");
        if (fd) {
          fd.textContent = d;
          fh.textContent = pad(h);
          fm.textContent = pad(m);
          fs.textContent = pad(s);
        }
      }
      setInterval(updateReunion, 1000);
      updateReunion();

      // ---------- Today widget (mood / calendar / day card) ----------
      // Defined early; Firebase mood sync starts after getSharedFirestore exists.
      const MOOD_TTL_MS = 24 * 60 * 60 * 1000;
      const MOOD_OPTIONS = [
        { emoji: "😊", en: "Happy", pt: "Feliz" },
        { emoji: "🥰", en: "In love", pt: "Apaixonado(a)" },
        { emoji: "🤒", en: "Sick", pt: "Doente" },
        { emoji: "🥹", en: "Teary / touched", pt: "Olhinhos d'água" },
        { emoji: "😴", en: "Sleepy", pt: "Com sono" },
        { emoji: "🤔", en: "Thinking", pt: "A pensar" },
        { emoji: "😈", en: "Playful trouble", pt: "Diabrete" },
        { emoji: "😌", en: "Calm", pt: "Em paz" },
      ];
      let moodState = { me: "", her: "", meAt: 0, herAt: 0 };
      let moodDb = null;

      function moodLabel(emoji) {
        const found = MOOD_OPTIONS.find((m) => m.emoji === emoji);
        if (!found) return "";
        return currentLanguage() === "pt" ? found.pt : found.en;
      }
      function moodTimeMs(val) {
        if (!val) return 0;
        if (typeof val.toMillis === "function") return val.toMillis();
        if (typeof val.seconds === "number") return val.seconds * 1000;
        if (typeof val === "number") return val;
        const p = Date.parse(val);
        return Number.isNaN(p) ? 0 : p;
      }
      function applyMoodExpiry(writeBack) {
        const now = Date.now();
        ["me", "her"].forEach((who) => {
          const at = moodState[who + "At"] || 0;
          if (moodState[who] && at && now - at > MOOD_TTL_MS) {
            moodState[who] = "";
            moodState[who + "At"] = 0;
            if (writeBack && moodDb) {
              const payload = {};
              payload[who] = "";
              payload[who + "At"] = null;
              moodDb
                .collection("moods")
                .doc("shared")
                .set(payload, { merge: true })
                .catch(() => {});
            }
          }
        });
      }
      function renderTodayMoods() {
        applyMoodExpiry(true);
        const meName = document.getElementById("todayMoodMeName");
        const herName = document.getElementById("todayMoodHerName");
        if (meName) meName.textContent = CONFIG.names.me;
        if (herName) herName.textContent = CONFIG.names.her;
        const meE = document.getElementById("todayMoodMeEmoji");
        const herE = document.getElementById("todayMoodHerEmoji");
        if (meE) meE.textContent = moodState.me || "—";
        if (herE) herE.textContent = moodState.her || "—";
        const meM = document.getElementById("todayMoodMeMeaning");
        const herM = document.getElementById("todayMoodHerMeaning");
        const pickHint =
          currentLanguage() === "pt" ? "Escolhe um humor" : "Pick a mood";
        if (meM)
          meM.textContent = moodState.me ? moodLabel(moodState.me) : pickHint;
        if (herM)
          herM.textContent = moodState.her
            ? moodLabel(moodState.her)
            : pickHint;
        ["me", "her"].forEach((who) => {
          const pick = document.getElementById(
            who === "me" ? "todayMoodMePick" : "todayMoodHerPick",
          );
          if (!pick) return;
          if (!pick.dataset.ready) {
            pick.dataset.ready = "1";
            MOOD_OPTIONS.forEach((m) => {
              const btn = document.createElement("button");
              btn.type = "button";
              btn.textContent = m.emoji;
              btn.dataset.emoji = m.emoji;
              btn.title = currentLanguage() === "pt" ? m.pt : m.en;
              btn.addEventListener("click", () => setMood(who, m.emoji));
              pick.appendChild(btn);
            });
          }
          pick.querySelectorAll("button").forEach((btn) => {
            const em = btn.dataset.emoji || btn.textContent;
            btn.classList.toggle("active", moodState[who] === em);
            const opt = MOOD_OPTIONS.find((o) => o.emoji === em);
            if (opt) btn.title = currentLanguage() === "pt" ? opt.pt : opt.en;
          });
        });
      }
      function setMood(who, emoji) {
        if (who !== "me" && who !== "her") return;
        const clearing = moodState[who] === emoji;
        const next = clearing ? "" : emoji;
        moodState[who] = next;
        moodState[who + "At"] = next ? Date.now() : 0;
        renderTodayMoods();
        if (moodDb) {
          const payload = {};
          payload[who] = next;
          payload[who + "At"] = next
            ? firebase.firestore.FieldValue.serverTimestamp()
            : null;
          moodDb
            .collection("moods")
            .doc("shared")
            .set(payload, { merge: true })
            .catch(() => {});
        }
      }
      function renderTodayCalendar() {
        const list = document.getElementById("todayCalList");
        if (!list) return;
        const isPt = currentLanguage() === "pt";
        const today = new Date();
        const key =
          typeof calDateKey === "function"
            ? calDateKey(today.getFullYear(), today.getMonth(), today.getDate())
            : [
                today.getFullYear(),
                String(today.getMonth() + 1).padStart(2, "0"),
                String(today.getDate()).padStart(2, "0"),
              ].join("-");
        let events = [];
        if (typeof calEventsForDay === "function") {
          events = calEventsForDay(key);
        } else if (typeof calEvents !== "undefined") {
          events = (calEvents || []).filter((e) => e.date === key);
        }
        if (!events.length) {
          list.innerHTML = `<p class="today-empty">${isPt ? "Nada no calendário hoje." : "Nothing on the calendar today."}</p>
            <button type="button" class="today-link" data-go="calendar">${isPt ? "Abrir calendário" : "Open calendar"}</button>`;
        } else {
          list.innerHTML = events
            .slice(0, 4)
            .map((ev) => {
              const who =
                typeof calNormalizePerson === "function"
                  ? calNormalizePerson(ev.person)
                  : ev.person || "me";
              const whoLabel =
                typeof calPersonLabel === "function"
                  ? calPersonLabel(who)
                  : who;
              let time = "";
              if (ev.startTime && ev.endTime)
                time = ev.startTime + " – " + ev.endTime;
              else if (ev.startTime) time = ev.startTime;
              return `<div class="today-cal-item">
                <span class="who ${who}">${whoLabel}</span>
                <div><div class="title"></div>${time ? `<div class="time">${time}</div>` : ""}</div>
              </div>`;
            })
            .join("");
          Array.from(list.querySelectorAll(".today-cal-item")).forEach(
            (row, i) => {
              const t = row.querySelector(".title");
              if (t) t.textContent = events[i].title || "";
            },
          );
          const more = document.createElement("button");
          more.type = "button";
          more.className = "today-link";
          more.dataset.go = "calendar";
          more.textContent = isPt ? "Ver calendário" : "See calendar";
          list.appendChild(more);
        }
        list.querySelectorAll("[data-go]").forEach((btn) => {
          btn.addEventListener("click", () =>
            switchTab(btn.dataset.go, { updateHash: true, scroll: true }),
          );
        });
      }
      function renderTodayDaycard() {
        const box = document.getElementById("todayDaycard");
        if (!box) return;
        const isPt = currentLanguage() === "pt";
        const list =
          typeof dayCards !== "undefined"
            ? dayCards.filter((c) =>
                typeof daycardIsExpired === "function"
                  ? !daycardIsExpired(c)
                  : true,
              )
            : [];
        const sorted = list.slice().sort((a, b) => {
          const ta =
            typeof daycardTimeMs === "function"
              ? daycardTimeMs(a.createdAt)
              : 0;
          const tb =
            typeof daycardTimeMs === "function"
              ? daycardTimeMs(b.createdAt)
              : 0;
          return tb - ta;
        });
        const card = sorted[0];
        if (!card) {
          box.innerHTML = `<p class="today-empty">${isPt ? "Ainda sem cartões." : "No day cards yet."}</p>
            <button type="button" class="today-link" data-go="daycards">${isPt ? "Escrever um" : "Write one"}</button>`;
        } else {
          const who = card.from === "her" ? "her" : "me";
          const name = who === "her" ? CONFIG.names.her : CONFIG.names.me;
          const text =
            (card.text || "").trim() ||
            (card.audioUrl ? (isPt ? "(áudio)" : "(audio)") : "");
          box.innerHTML = `<div class="from ${who}"></div><div class="txt"></div>
            <button type="button" class="today-link" data-go="daycards">${isPt ? "Ver cartões" : "See day cards"}</button>`;
          box.querySelector(".from").textContent = name;
          box.querySelector(".txt").textContent = text;
        }
        box.querySelectorAll("[data-go]").forEach((btn) => {
          btn.addEventListener("click", () =>
            switchTab(btn.dataset.go, { updateHash: true, scroll: true }),
          );
        });
      }
      // ---- "On this day" photo (matches today's month/day against album dates) ----
      function parseAlbumDateParts(dateStr) {
        // Accepts "MM/DD/YYYY", "M/D/YYYY", and "YYYY-MM-DD" (from <input type="date">).
        if (!dateStr) return null;
        const s = String(dateStr).trim();
        let m = s.match(/^(\d{4})-(\d{1,2})-(\d{1,2})$/);
        if (m) {
          const month = parseInt(m[2], 10);
          const day = parseInt(m[3], 10);
          if (!month || !day) return null;
          return { month, day };
        }
        m = s.match(/^(\d{1,2})\/(\d{1,2})\/(\d{2,4})$/);
        if (!m) return null;
        const month = parseInt(m[1], 10);
        const day = parseInt(m[2], 10);
        if (!month || !day) return null;
        return { month, day };
      }

      function findPhotosMatchingToday() {
        const today = new Date();
        const todayMonth = today.getMonth() + 1;
        const todayDay = today.getDate();
        const matches = [];
        const seenImg = new Set();

        function consider(item, categoryLabel) {
          if (!item || !item.img) return;
          const parts = parseAlbumDateParts(item.date);
          if (!parts) return;
          if (parts.month !== todayMonth || parts.day !== todayDay) return;
          if (seenImg.has(item.img)) return;
          seenImg.add(item.img);
          matches.push({
            img: item.img,
            caption: item.caption || "",
            date: item.date || "",
            category: categoryLabel || "",
          });
        }

        (CONFIG.album || []).forEach((cat) => {
          (cat.items || []).forEach((item) => consider(item, cat.category));
        });
        if (typeof memoriesItems !== "undefined") {
          (memoriesItems || []).forEach((m) =>
            consider({ img: m.url, caption: m.caption, date: m.date }, m.category),
          );
        }
        return matches;
      }

      function renderTodayOnThisDay() {
        const card = document.getElementById("todayOnThisDayCard");
        const list = document.getElementById("todayOnThisDayList");
        if (!card || !list) return;
        const isPt = currentLanguage() === "pt";
        const matches = findPhotosMatchingToday();
        if (!matches.length) {
          card.hidden = true;
          list.innerHTML = "";
          return;
        }
        list.innerHTML = matches
          .slice(0, 1)
          .map(
            () => `<a class="today-onthisday-photo" data-idx="0">
              <img alt="">
              <div>
                <div class="caption"></div>
                <div class="sub"></div>
              </div>
            </a>`,
          )
          .join("");
        Array.from(list.querySelectorAll(".today-onthisday-photo")).forEach(
          (el, i) => {
            const m = matches[i];
            const img = el.querySelector("img");
            const cap = el.querySelector(".caption");
            const sub = el.querySelector(".sub");
            if (img) {
              img.src = m.img;
              img.alt = m.caption || "";
            }
            if (cap) cap.textContent = m.caption || (isPt ? "Uma lembrança" : "A memory");
            if (sub)
              sub.textContent = (isPt ? "Nesse dia · " : "On this day · ") + m.date;
            el.addEventListener("click", () =>
              switchTab("album", { updateHash: true, scroll: true }),
            );
          },
        );
        card.hidden = false;
      }

      // ---- World news (automatic daily headlines) ----
      // Prefers CONFIG.newsBackendUrl (Cloudflare Worker). Falls back to RSS
      // via public CORS proxies. Client cache ~6h. Not affiliated with CNN10.
      const NEWS_CACHE_KEY = "gfNewsCache_v2";
      const NEWS_CACHE_MS = 6 * 60 * 60 * 1000;
      const NEWS_FEEDS = {
        en: "https://feeds.bbci.co.uk/news/world/rss.xml",
        pt: "https://feeds.bbci.co.uk/portuguese/rss.xml",
      };

      function newsDayKey() {
        const d = new Date();
        return (
          d.getFullYear() +
          "-" +
          String(d.getMonth() + 1).padStart(2, "0") +
          "-" +
          String(d.getDate()).padStart(2, "0")
        );
      }

      function readNewsCache(lang) {
        try {
          const raw = localStorage.getItem(NEWS_CACHE_KEY);
          if (!raw) return null;
          const data = JSON.parse(raw);
          if (
            data &&
            data.lang === lang &&
            data.day === newsDayKey() &&
            data.at &&
            Date.now() - data.at < NEWS_CACHE_MS &&
            Array.isArray(data.items) &&
            data.items.length
          ) {
            return data.items;
          }
        } catch (e) {}
        return null;
      }

      function writeNewsCache(lang, items) {
        try {
          localStorage.setItem(
            NEWS_CACHE_KEY,
            JSON.stringify({
              lang,
              day: newsDayKey(),
              at: Date.now(),
              items,
            }),
          );
        } catch (e) {}
      }

      function parseRssItems(xmlText, limit) {
        const out = [];
        try {
          const doc = new DOMParser().parseFromString(xmlText, "text/xml");
          const nodes = doc.querySelectorAll("item");
          nodes.forEach((item) => {
            if (out.length >= limit) return;
            const title = (
              item.querySelector("title")?.textContent || ""
            ).trim();
            const link = (
              item.querySelector("link")?.textContent ||
              item.querySelector("guid")?.textContent ||
              ""
            ).trim();
            const pub =
              (item.querySelector("pubDate")?.textContent || "").trim() || "";
            if (title) out.push({ title, link, pub });
          });
        } catch (e) {}
        return out;
      }

      async function fetchWorldNews() {
        const lang = currentLanguage() === "pt" ? "pt" : "en";
        const cached = readNewsCache(lang);
        if (cached) return { items: cached, fromCache: true, lang };

        let items = [];
        let source = "";

        // 1) Preferred: your Cloudflare Worker / Node backend
        const backend = (CONFIG.newsBackendUrl || "").replace(/\/$/, "");
        if (backend) {
          try {
            const ctrl =
              typeof AbortController !== "undefined"
                ? new AbortController()
                : null;
            const timer = ctrl ? setTimeout(() => ctrl.abort(), 12000) : null;
            const res = await fetch(
              backend + "/?lang=" + encodeURIComponent(lang),
              ctrl ? { signal: ctrl.signal } : {},
            );
            if (timer) clearTimeout(timer);
            if (res.ok) {
              const data = await res.json();
              if (data && Array.isArray(data.items) && data.items.length) {
                items = data.items
                  .slice(0, 5)
                  .map((it) => ({
                    title: it.title || "",
                    link: it.link || "",
                    pub: it.pub || "",
                  }))
                  .filter((it) => it.title);
                source = data.source || "";
              }
            }
          } catch (e) {}
        }

        // 2) Fallback: public CORS proxies + BBC RSS
        if (!items.length) {
          const feed = NEWS_FEEDS[lang] || NEWS_FEEDS.en;
          const proxies = [
            "https://api.allorigins.win/raw?url=" + encodeURIComponent(feed),
            "https://corsproxy.io/?" + encodeURIComponent(feed),
          ];
          for (const url of proxies) {
            try {
              const ctrl =
                typeof AbortController !== "undefined"
                  ? new AbortController()
                  : null;
              const timer = ctrl ? setTimeout(() => ctrl.abort(), 12000) : null;
              const res = await fetch(url, ctrl ? { signal: ctrl.signal } : {});
              if (timer) clearTimeout(timer);
              if (!res.ok) continue;
              const text = await res.text();
              items = parseRssItems(text, 5);
              if (items.length) {
                source = lang === "pt" ? "BBC Português" : "BBC World";
                break;
              }
            } catch (e) {}
          }
        }

        if (items.length) writeNewsCache(lang, items);
        return { items, fromCache: false, lang, source };
      }

      function renderTodayNewsItems(items, lang, source) {
        const box = document.getElementById("todayNewsList");
        if (!box) return;
        const isPt = lang === "pt" || currentLanguage() === "pt";
        if (!items || !items.length) {
          box.innerHTML = `<p class="today-empty">${
            isPt
              ? "Não foi possível carregar notícias agora."
              : "Couldn't load headlines right now."
          }</p>`;
          return;
        }
        const metaLabel = source || (isPt ? "BBC Português" : "BBC World");
        box.innerHTML = items
          .map((it) => {
            const href = it.link
              ? `href="${String(it.link).replace(/"/g, "")}" target="_blank" rel="noopener noreferrer"`
              : "";
            return `<a class="today-news-item" ${href}>
              <div class="headline"></div>
              <div class="meta"></div>
            </a>`;
          })
          .join("");
        Array.from(box.querySelectorAll(".today-news-item")).forEach(
          (el, i) => {
            const h = el.querySelector(".headline");
            const m = el.querySelector(".meta");
            if (h) h.textContent = items[i].title || "";
            if (m) m.textContent = metaLabel;
          },
        );
        const foot = document.createElement("p");
        foot.className = "today-news-source";
        foot.textContent = isPt
          ? "Resumo automático · " + metaLabel
          : "Automatic brief · " + metaLabel;
        box.appendChild(foot);

        const watchCnn = document.createElement("a");
        watchCnn.className = "today-news-watch";
        watchCnn.href = "https://www.youtube.com/@CNN10";
        watchCnn.target = "_blank";
        watchCnn.rel = "noopener noreferrer";
        watchCnn.textContent = isPt ? "▶ CNN10" : "▶ CNN10";
        box.appendChild(watchCnn);

        const watchWorld = document.createElement("a");
        watchWorld.className = "today-news-watch alt";
        watchWorld.href = "https://www.youtube.com/@TheWorldAtoZ/videos";
        watchWorld.target = "_blank";
        watchWorld.rel = "noopener noreferrer";
        watchWorld.textContent = isPt ? "▶ TheWorldAtoZ" : "▶ TheWorldAtoZ";
        box.appendChild(watchWorld);
      }

      async function renderTodayNews() {
        const box = document.getElementById("todayNewsList");
        if (!box) return;
        const isPt = currentLanguage() === "pt";
        box.innerHTML = `<p class="today-empty">${
          isPt ? "A carregar manchetes…" : "Loading headlines…"
        }</p>`;
        try {
          const { items, lang, source } = await fetchWorldNews();
          renderTodayNewsItems(items, lang, source);
        } catch (e) {
          box.innerHTML = `<p class="today-empty">${
            isPt
              ? "Não foi possível carregar notícias agora."
              : "Couldn't load headlines right now."
          }</p>`;
        }
      }

      // ---- Daily quote (ZenQuotes) — one quote per calendar day, cached locally ----
      const QUOTE_CACHE_KEY = "gfDailyQuote_v1";
      const QUOTE_API = "https://zenquotes.io/api/today";
      let quoteRefreshing = false;

      const FALLBACK_QUOTES = [
        { q: "In all the world, there is no heart for me like yours.", a: "Maya Angelou" },
        { q: "Wherever you are, and whatever you do, be in love.", a: "Rumi" },
        { q: "The best thing to hold onto in life is each other.", a: "Audrey Hepburn" },
        { q: "Love is composed of a single soul inhabiting two bodies.", a: "Aristotle" },
        { q: "We loved with a love that was more than love.", a: "Edgar Allan Poe" },
        { q: "To love and be loved is to feel the sun from both sides.", a: "David Viscott" },
        { q: "You are my today and all of my tomorrows.", a: "Leo Christopher" },
        { q: "I have found the one whom my soul loves.", a: "Song of Solomon 3:4" },
      ];

      function quoteTodayKey() {
        const d = new Date();
        return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0");
      }

      function readQuoteCache() {
        try {
          const raw = localStorage.getItem(QUOTE_CACHE_KEY);
          if (!raw) return null;
          const data = JSON.parse(raw);
          if (!data || !data.date || !data.q) return null;
          return data;
        } catch (e) {
          return null;
        }
      }

      function writeQuoteCache(payload) {
        try {
          localStorage.setItem(QUOTE_CACHE_KEY, JSON.stringify(payload));
        } catch (e) {}
      }

      function pickFallbackQuote() {
        const key = quoteTodayKey();
        let hash = 0;
        for (let i = 0; i < key.length; i++) hash = (hash * 31 + key.charCodeAt(i)) >>> 0;
        return FALLBACK_QUOTES[hash % FALLBACK_QUOTES.length];
      }

      async function fetchJsonWithTimeout(url, timeoutMs) {
        timeoutMs = timeoutMs || 9000;
        const ctrl = typeof AbortController !== "undefined" ? new AbortController() : null;
        const timer = ctrl ? setTimeout(function () { ctrl.abort(); }, timeoutMs) : null;
        try {
          const res = await fetch(url, {
            cache: "no-store",
            signal: ctrl ? ctrl.signal : undefined,
          });
          if (!res.ok) throw new Error("HTTP " + res.status);
          return await res.json();
        } finally {
          if (timer) clearTimeout(timer);
        }
      }

      function normalizeQuotePayload(data) {
        let item = null;
        if (Array.isArray(data) && data.length) item = data[0];
        else if (data && typeof data === "object" && data.q) item = data;
        if (!item || !item.q) return null;
        return {
          q: String(item.q).trim(),
          a: String(item.a || "Unknown").trim(),
          date: quoteTodayKey(),
          source: "zenquotes",
        };
      }

      async function fetchDailyQuote(force) {
        const today = quoteTodayKey();
        if (!force) {
          const cached = readQuoteCache();
          if (cached && cached.date === today && cached.q) {
            return { ...cached, fromCache: true };
          }
        }

        const attempts = [
          QUOTE_API,
          "https://api.allorigins.win/raw?url=" + encodeURIComponent(QUOTE_API),
          "https://corsproxy.io/?" + encodeURIComponent(QUOTE_API),
        ];

        for (let i = 0; i < attempts.length; i++) {
          try {
            const data = await fetchJsonWithTimeout(attempts[i]);
            const normalized = normalizeQuotePayload(data);
            if (!normalized) throw new Error("Empty quote");
            writeQuoteCache(normalized);
            return { ...normalized, fromCache: false };
          } catch (e) {
            console.warn("Quote source failed:", attempts[i], e);
          }
        }

        const stale = readQuoteCache();
        if (stale && stale.q) {
          return { ...stale, fromCache: true, stale: true };
        }

        const fb = pickFallbackQuote();
        const payload = { q: fb.q, a: fb.a, date: today, source: "fallback" };
        writeQuoteCache(payload);
        return { ...payload, fromCache: false, fallback: true };
      }

      function renderTodayQuoteItems(data) {
        const body = document.getElementById("todayQuoteBody");
        const author = document.getElementById("todayQuoteAuthor");
        const source = document.getElementById("todayQuoteSource");
        if (!body) return;
        const isPt = currentLanguage() === "pt";
        if (!data || !data.q) {
          body.innerHTML = '<p class="today-empty">' + (isPt ? "Não foi possível carregar a frase agora." : "Couldn't load a quote right now.") + "</p>";
          if (author) author.textContent = "";
          if (source) source.textContent = "";
          return;
        }
        body.textContent = "\u201c" + data.q + "\u201d";
        if (author) author.textContent = data.a ? "\u2014 " + data.a : "";
        if (source) {
          if (data.fallback) {
            source.textContent = isPt ? "Frase local · atualiza amanhã" : "Local quote · updates tomorrow";
          } else if (data.stale) {
            source.textContent = isPt ? "Última frase salva · ZenQuotes" : "Last saved quote · ZenQuotes";
          } else {
            source.textContent = isPt ? "ZenQuotes · frase do dia" : "ZenQuotes · quote of the day";
          }
        }
      }

      async function renderTodayQuote(force) {
        const body = document.getElementById("todayQuoteBody");
        const btn = document.getElementById("todayQuoteRefresh");
        if (!body || quoteRefreshing) return;
        const isPt = currentLanguage() === "pt";
        quoteRefreshing = true;
        if (btn) btn.disabled = true;
        const cached = readQuoteCache();
        if (!cached || cached.date !== quoteTodayKey() || force) {
          body.innerHTML = '<p class="today-empty">' + (isPt ? "A carregar a frase…" : "Loading quote…") + "</p>";
          const author = document.getElementById("todayQuoteAuthor");
          const source = document.getElementById("todayQuoteSource");
          if (author) author.textContent = "";
          if (source) source.textContent = "";
        }
        try {
          const data = await fetchDailyQuote(!!force);
          renderTodayQuoteItems(data);
        } catch (e) {
          const fb = pickFallbackQuote();
          renderTodayQuoteItems({ q: fb.q, a: fb.a, fallback: true });
        } finally {
          quoteRefreshing = false;
          if (btn) btn.disabled = false;
        }
      }

      document.getElementById("todayQuoteRefresh")?.addEventListener("click", () => renderTodayQuote(true));

      function renderTodayWidget() {
        renderTodayMoods();
        renderTodayCalendar();
        renderTodayDaycard();
        renderTodayNews();
        renderTodayQuote();
        renderTodayOnThisDay();
      }
      function initTodayToggle() {
        const btn = document.getElementById("todayToggle");
        const panel = document.getElementById("todayPanel");
        const hint = document.getElementById("todayToggleHint");
        if (!btn || !panel) return;
        function setOpen(open) {
          btn.setAttribute("aria-expanded", open ? "true" : "false");
          panel.hidden = !open;
          if (hint)
            hint.textContent = open
              ? currentLanguage() === "pt"
                ? "Toque para fechar"
                : "Tap to close"
              : currentLanguage() === "pt"
                ? "Toque para abrir"
                : "Tap to open";
          if (open) renderTodayWidget();
        }
        btn.addEventListener("click", () => {
          setOpen(btn.getAttribute("aria-expanded") !== "true");
        });
        document.querySelectorAll('a[href="#todayWidget"]').forEach((a) => {
          a.addEventListener("click", () =>
            setTimeout(() => setOpen(true), 50),
          );
        });
        setOpen(false);
      }
      initTodayToggle();
      setInterval(() => {
        if (
          document.getElementById("todayPanel") &&
          !document.getElementById("todayPanel").hidden
        ) {
          renderTodayWidget();
        }
      }, 30000);

      // ---------- distance ----------
      document.getElementById("myCityPill").textContent =
        currentLanguage() === "pt"
          ? CONFIG.myLocation.city === "Florianopolis, Brazil"
            ? "Florianópolis, Brasil"
            : CONFIG.myLocation.city
          : CONFIG.myLocation.city;
      document.getElementById("herCityPill").textContent =
        currentLanguage() === "pt"
          ? CONFIG.herLocation.city === "San Francisco, US"
            ? "São Francisco, EUA"
            : CONFIG.herLocation.city
          : CONFIG.herLocation.city;

      function haversineKm(lat1, lon1, lat2, lon2) {
        const R = 6371;
        const toRad = (d) => (d * Math.PI) / 180;
        const dLat = toRad(lat2 - lat1);
        const dLon = toRad(lon2 - lon1);
        const a =
          Math.sin(dLat / 2) ** 2 +
          Math.cos(toRad(lat1)) *
            Math.cos(toRad(lat2)) *
            Math.sin(dLon / 2) ** 2;
        return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      }

      (function renderDistance() {
        const dotted = document.getElementById("dottedLine");
        const valueEl = document.getElementById("distanceValue");
        const noteEl = document.getElementById("distanceNote");
        const reached = Date.now() >= new Date(CONFIG.reunionDate).getTime();

        if (reached) {
          dotted.classList.add("together");
          dotted.innerHTML = '<span class="together-badge">Together ♥</span>';
          valueEl.style.display = "none";
          noteEl.textContent = "No more distance. Just us now. ♥";
        } else {
          const km = haversineKm(
            CONFIG.myLocation.lat,
            CONFIG.myLocation.lon,
            CONFIG.herLocation.lat,
            CONFIG.herLocation.lon,
          );
          if (currentLanguage() === "pt") {
            valueEl.textContent =
              Math.round(km).toLocaleString("pt-BR") + " km de distância";
          } else {
            const miles = km * 0.621371;
            valueEl.textContent =
              Math.round(miles).toLocaleString("en-US") + " miles apart";
          }
        }
      })();

      // ---------- weather (Open-Meteo, no API key required) ----------
      const WEATHER_ICONS = {
        clear: "☀️",
        cloudy: "☁️",
        rain: "🌧️",
        snow: "❄️",
        storm: "⛈️",
        fog: "🌫️",
        night: "🌙",
      };
      function classifyWeather(code, isDay) {
        if (!isDay) return "night";
        if (code === 0) return "clear";
        if ([1, 2, 3].includes(code)) return "cloudy";
        if ([45, 48].includes(code)) return "fog";
        if ([51, 53, 55, 56, 57, 61, 63, 65, 66, 67, 80, 81, 82].includes(code))
          return "rain";
        if ([71, 73, 75, 77, 85, 86].includes(code)) return "snow";
        if ([95, 96, 99].includes(code)) return "storm";
        return "cloudy";
      }
      function weatherLabel(kind) {
        return tr(
          {
            clear: "Clear skies",
            cloudy: "Cloudy",
            rain: "Rainy",
            snow: "Snowy",
            storm: "Thunderstorms",
            fog: "Foggy",
            night: "Clear night",
          }[kind] || "Clear",
        );
      }
      function renderWeatherCard(el, cityName, data) {
        if (!data) {
          el.innerHTML = `<div class="city">${cityName}</div><p style="font-size:0.85rem;opacity:0.7;">${tr("Weather unavailable right now.")}</p>`;
          return;
        }
        const cw = data.current;
        const kind = classifyWeather(cw.weather_code, cw.is_day);
        el.className =
          "weather-card " +
          (kind === "night"
            ? "night"
            : kind === "rain" || kind === "storm"
              ? "rainy"
              : kind === "cloudy" || kind === "fog"
                ? "cloudy"
                : "sunny");
        let fx = "";
        if (el.className.includes("rainy")) {
          for (let i = 0; i < 10; i++) {
            fx += `<div class="rain-drop" style="left:${Math.random() * 100}%; animation-delay:${Math.random()}s;"></div>`;
          }
        } else if (el.className.includes("sunny")) {
          fx = '<div class="sun-glow"></div>';
        } else if (el.className.includes("night")) {
          for (let i = 0; i < 14; i++) {
            fx += `<div class="star" style="left:${Math.random() * 100}%; top:${Math.random() * 60}%; animation-delay:${Math.random() * 2}s;"></div>`;
          }
        }
        el.innerHTML = `${fx}
    <div class="city">${cityName}</div>
    <div class="weather-icon">${WEATHER_ICONS[kind]}</div>
    <div class="temp">${Math.round(cw.temperature_2m)}°</div>
    <div class="cond">${weatherLabel(kind)}</div>
    <div class="feels">${tr("Feels like")} ${Math.round(cw.apparent_temperature)}° · ${cw.relative_humidity_2m}% ${currentLanguage() === "pt" ? "umidade" : "humidity"}</div>`;
      }
      async function fetchWeather(loc, el) {
        try {
          const url = `https://api.open-meteo.com/v1/forecast?latitude=${loc.lat}&longitude=${loc.lon}&current=temperature_2m,apparent_temperature,relative_humidity_2m,weather_code,is_day`;
          const res = await fetch(url);
          const data = await res.json();
          renderWeatherCard(el, loc.city, data);
        } catch (e) {
          renderWeatherCard(el, loc.city, null);
        }
      }
      fetchWeather(CONFIG.myLocation, document.getElementById("myWeather"));
      fetchWeather(CONFIG.herLocation, document.getElementById("herWeather"));
      setInterval(
        () => {
          fetchWeather(CONFIG.myLocation, document.getElementById("myWeather"));
          fetchWeather(
            CONFIG.herLocation,
            document.getElementById("herWeather"),
          );
        },
        15 * 60 * 1000,
      );

      // ---------- moon phase (no API needed — astronomical calculation) ----------
      function getMoonPhase(date) {
        // Days since a known new moon (2000-01-06), synodic month ~29.53059 days
        const synodic = 29.530588853;
        const known = new Date(Date.UTC(2000, 0, 6, 18, 14, 0));
        const diffDays = (date - known) / 86400000;
        let phase = (diffDays % synodic) / synodic;
        if (phase < 0) phase += 1;
        return phase; // 0 = new moon, 0.5 = full moon
      }
      function moonPhaseName(phase) {
        if (phase < 0.03 || phase > 0.97) return "New Moon";
        if (phase < 0.22) return "Waxing Crescent";
        if (phase < 0.28) return "First Quarter";
        if (phase < 0.47) return "Waxing Gibbous";
        if (phase < 0.53) return "Full Moon";
        if (phase < 0.72) return "Waning Gibbous";
        if (phase < 0.78) return "Last Quarter";
        return "Waning Crescent";
      }
      function renderMoon() {
        const phase = getMoonPhase(new Date());
        const illum = Math.round(
          ((1 - Math.cos(phase * 2 * Math.PI)) / 2) * 100,
        );
        document.getElementById("moonPhaseName").textContent = tr(
          moonPhaseName(phase),
        );
        document.getElementById("moonPct").textContent =
          illum + "% " + tr("illuminated");

        const shadow = document.getElementById("moonShadow");
        const waxing = phase < 0.5;
        // width of the shadow cap grows/shrinks as an ellipse; approximate with a sliding div
        const pct = phase <= 0.5 ? phase * 2 : (1 - phase) * 2; // 0 (new/full) .. 1 (quarter)
        if (phase < 0.5) {
          // waxing: shadow recedes from the left
          shadow.style.left = "0";
          shadow.style.right = "auto";
          shadow.style.width = 100 - phase * 200 + "%";
          if (phase > 0.5) {
            shadow.style.width = "0%";
          }
        } else {
          shadow.style.right = "0";
          shadow.style.left = "auto";
          shadow.style.width = (phase - 0.5) * 200 + "%";
        }
      }
      renderMoon();
      setInterval(renderMoon, 60 * 60 * 1000);

      // ---------- things I miss ----------
      const missGrid = document.getElementById("missGrid");
      CONFIG.thingsIMiss.forEach((item) => {
        const card = document.createElement("div");
        card.className = "miss-card";
        card.innerHTML = `<div class="ic">${item.icon}</div><p class="txt">${tr(item.text)}</p>${item.extra ? `<div class="extra">${tr(item.extra)}</div>` : ""}`;
        if (item.extra) {
          card.addEventListener("click", () => card.classList.toggle("open"));
        }
        missGrid.appendChild(card);
      });

      // ---------- you made me better ----------
      const betterBlock = document.getElementById("betterBlock");
      CONFIG.youMadeMeBetter.forEach((p) => {
        const el = document.createElement("p");
        el.textContent = tr(p);
        betterBlock.appendChild(el);
      });

      // ---------- little things ----------
      const littleGrid = document.getElementById("littleGrid");
      CONFIG.littleThings.forEach((t) => {
        const chip = document.createElement("div");
        chip.className = "little-chip";
        chip.textContent = tr(t);
        littleGrid.appendChild(chip);
      });

      // ---------- green heart button ----------
      document.getElementById("heartBtn").addEventListener("click", (e) => {
        const rect = e.target.getBoundingClientRect();
        const count = 22;
        for (let i = 0; i < count; i++) {
          const h = document.createElement("div");
          h.className = "floating-heart";
          h.textContent = "💚";
          const startX = rect.left + rect.width / 2 + (Math.random() * 60 - 30);
          h.style.left = startX + "px";
          h.style.top = rect.top + "px";
          h.style.fontSize = 14 + Math.random() * 16 + "px";
          document.body.appendChild(h);
          const dx = Math.random() * 140 - 70;
          const dur = 1600 + Math.random() * 900;
          h.animate(
            [
              { transform: "translate(0,0)", opacity: 1 },
              {
                transform: `translate(${dx}px, -${220 + Math.random() * 140}px)`,
                opacity: 0,
              },
            ],
            { duration: dur, easing: "ease-out" },
          );
          setTimeout(() => h.remove(), dur + 50);
        }
        const msg = document.getElementById("heartMsg");
        msg.classList.add("show");
        setTimeout(() => msg.classList.remove("show"), 3000);
      });

      // ---------- album ----------
      // Static photos: CONFIG.album (folder photos).
      // Custom albums: Firebase collection "albums" { name, order, createdAt }
      //   (or local-only if Firebase isn't set up).
      // Live uploads: memories with a category matching either list.
      const albumWrap = document.getElementById("albumWrap");
      let allPhotos = [];
      let memoriesItems = [];
      let customAlbums = []; // { id, name, order, createdAt }
      let albumsDb = null;
      let albumsSyncLive = false;

      function getStaticAlbumNames() {
        return (CONFIG.album || []).map((c) => c.category);
      }

      function getCustomAlbumNames() {
        return customAlbums
          .slice()
          .sort((a, b) => {
            const ao = typeof a.order === "number" ? a.order : 1e9;
            const bo = typeof b.order === "number" ? b.order : 1e9;
            if (ao !== bo) return ao - bo;
            return String(a.name || "").localeCompare(String(b.name || ""));
          })
          .map((a) => a.name)
          .filter(Boolean);
      }

      // All album names for the upload dropdown (static + custom, unique)
      function getAlbumCategories() {
        const staticNames = getStaticAlbumNames();
        const custom = getCustomAlbumNames().filter(
          (n) => !staticNames.includes(n),
        );
        return staticNames.concat(custom);
      }

      function fillMemoryAlbumSelect() {
        const sel = document.getElementById("memoryAlbumSelect");
        if (!sel) return;
        const prev = sel.value;
        sel.innerHTML = "";
        const cats = getAlbumCategories();
        cats.forEach((cat) => {
          const opt = document.createElement("option");
          opt.value = cat;
          opt.textContent = tr(cat);
          sel.appendChild(opt);
        });
        if (prev && cats.includes(prev)) sel.value = prev;
      }

      // Normalize image identity so the same photo never shows twice
      // (e.g. photos/us-1.jpeg vs a Cloudinary copy, or the same URL twice).
      function albumImgKey(src) {
        if (!src) return "";
        const clean = String(src)
          .split("?")[0]
          .split("#")[0]
          .trim()
          .toLowerCase();
        const parts = clean.split("/");
        const file = parts[parts.length - 1] || clean;
        // Also keep full path without protocol/host for local vs absolute comparisons
        const pathOnly = clean.replace(/^https?:\/\/[^/]+/, "");
        return { file, pathOnly, full: clean };
      }

      function albumAlreadyShown(seen, src) {
        const k = albumImgKey(src);
        if (!k.file && !k.full) return true;
        if (k.full && seen.full.has(k.full)) return true;
        if (k.file && seen.files.has(k.file)) return true;
        if (k.pathOnly && seen.paths.has(k.pathOnly)) return true;
        return false;
      }

      function albumMarkShown(seen, src) {
        const k = albumImgKey(src);
        if (k.full) seen.full.add(k.full);
        if (k.file) seen.files.add(k.file);
        if (k.pathOnly) seen.paths.add(k.pathOnly);
      }

      function makeStaticPhotoTile(item, idx) {
        const fig = document.createElement("figure");
        fig.className = "photo-tile";
        const inner = item.img
          ? `<img src="${item.img}" alt="${item.caption || ""}" loading="lazy" style="width:100%; height:100%; object-fit:cover; aspect-ratio:3/4;">`
          : `<div class="ph-inner">${tr(item.caption)}<br><small style="opacity:0.6;">(${tr("add photo in CONFIG.album")})</small></div>`;
        fig.innerHTML = `${inner}<figcaption>${tr(item.caption)}${item.date ? " · " + item.date : ""}</figcaption>`;
        fig.addEventListener("click", () => openLightbox(idx));
        return fig;
      }

      function makeLivePhotoTile(m, idx) {
        const fig = document.createElement("figure");
        fig.className = "photo-tile";
        fig.innerHTML = `
    <img src="${m.url}" alt="${m.caption || ""}" loading="lazy" style="width:100%; height:100%; object-fit:cover; aspect-ratio:3/4;">
    <button type="button" class="memory-edit" aria-label="Edit" title="Edit">✎</button>
    <button type="button" class="memory-del" aria-label="Delete" title="Delete">✕</button>
    <figcaption>${m.caption || ""}${m.date ? " · " + formatMemoryDateDisplay(m.date) : ""}</figcaption>
  `;
        fig.addEventListener("click", () => openLightbox(idx));
        fig.querySelector(".memory-edit").addEventListener("click", (e) => {
          e.stopPropagation();
          startEditMemory(m);
        });
        fig.querySelector(".memory-del").addEventListener("click", (e) => {
          e.stopPropagation();
          deleteMemory(m);
        });
        return fig;
      }

      function appendLivePhotosToMasonry(masonry, categoryName, seen) {
        const liveInCat = (memoriesItems || []).filter(
          (m) => (m.category || "") === categoryName,
        );
        liveInCat.forEach((m) => {
          if (!m.url || albumAlreadyShown(seen, m.url)) return;
          albumMarkShown(seen, m.url);
          const idx = allPhotos.length;
          allPhotos.push({
            caption: m.caption || "",
            date: m.date || "",
            category: tr(categoryName),
            img: m.url,
          });
          masonry.appendChild(makeLivePhotoTile(m, idx));
        });
        return liveInCat.length;
      }

      function renderAlbum() {
        if (!albumWrap) return;
        albumWrap.innerHTML = "";
        allPhotos = [];
        const seen = { full: new Set(), files: new Set(), paths: new Set() };
        const staticNames = getStaticAlbumNames();

        // 1) Built-in CONFIG albums
        (CONFIG.album || []).forEach((cat) => {
          const catEl = document.createElement("div");
          catEl.className = "album-cat";
          catEl.innerHTML = `<h3>${tr(cat.category)}</h3>`;
          const masonry = document.createElement("div");
          masonry.className = "masonry";

          (cat.items || []).forEach((item) => {
            if (item.img && albumAlreadyShown(seen, item.img)) return;
            if (item.img) albumMarkShown(seen, item.img);
            const idx = allPhotos.length;
            allPhotos.push({
              caption: tr(item.caption),
              date: item.date,
              category: tr(cat.category),
              img: item.img,
            });
            masonry.appendChild(makeStaticPhotoTile(item, idx));
          });

          appendLivePhotosToMasonry(masonry, cat.category, seen);
          catEl.appendChild(masonry);
          albumWrap.appendChild(catEl);
        });

        // 2) Custom albums created on the site (not already in CONFIG)
        customAlbums
          .slice()
          .sort((a, b) => {
            const ao = typeof a.order === "number" ? a.order : 1e9;
            const bo = typeof b.order === "number" ? b.order : 1e9;
            if (ao !== bo) return ao - bo;
            return String(a.name || "").localeCompare(String(b.name || ""));
          })
          .forEach((alb) => {
            if (!alb.name || staticNames.includes(alb.name)) return;
            const catEl = document.createElement("div");
            catEl.className = "album-cat";
            const head = document.createElement("div");
            head.className = "album-cat-head";
            const h3 = document.createElement("h3");
            h3.textContent = alb.name;
            const del = document.createElement("button");
            del.type = "button";
            del.className = "album-del-btn";
            del.title =
              currentLanguage() === "pt" ? "Apagar álbum" : "Delete album";
            del.setAttribute("aria-label", del.title);
            del.textContent = "✕";
            del.addEventListener("click", () => deleteCustomAlbum(alb));
            head.appendChild(h3);
            head.appendChild(del);
            catEl.appendChild(head);

            const masonry = document.createElement("div");
            masonry.className = "masonry";
            const countBefore = masonry.children.length;
            appendLivePhotosToMasonry(masonry, alb.name, seen);
            if (masonry.children.length === countBefore) {
              const empty = document.createElement("p");
              empty.className = "album-cat-empty";
              empty.textContent =
                currentLanguage() === "pt"
                  ? "Ainda sem fotos — escolhe este álbum ao enviar."
                  : "No photos yet — pick this album when you upload.";
              catEl.appendChild(empty);
            }
            catEl.appendChild(masonry);
            albumWrap.appendChild(catEl);
          });

        // 3) Uploads with unknown category
        const cats = getAlbumCategories();
        const unsorted = (memoriesItems || []).filter((m) => {
          if (!m.url || albumAlreadyShown(seen, m.url)) return false;
          return !m.category || !cats.includes(m.category);
        });
        if (unsorted.length) {
          const catEl = document.createElement("div");
          catEl.className = "album-cat";
          catEl.innerHTML = `<h3>${currentLanguage() === "pt" ? "Sem álbum (escolha um ao reenviar)" : "Unsorted (pick an album next time)"}</h3>`;
          const masonry = document.createElement("div");
          masonry.className = "masonry";
          unsorted.forEach((m) => {
            if (!m.url || albumAlreadyShown(seen, m.url)) return;
            albumMarkShown(seen, m.url);
            const idx = allPhotos.length;
            allPhotos.push({
              caption: m.caption || "",
              date: m.date || "",
              category: "",
              img: m.url,
            });
            masonry.appendChild(makeLivePhotoTile(m, idx));
          });
          if (masonry.children.length) {
            catEl.appendChild(masonry);
            albumWrap.appendChild(catEl);
          }
        }

        fillMemoryAlbumSelect();
      }

      function addCustomAlbum() {
        const input = document.getElementById("newAlbumNameInput");
        const status = document.getElementById("newAlbumStatus");
        const isPt = currentLanguage() === "pt";
        const name = (input && input.value ? input.value : "").trim();
        if (!name) {
          if (status)
            status.textContent = isPt
              ? "Escreve o nome do álbum."
              : "Enter an album name.";
          return;
        }
        const existing = getAlbumCategories().map((c) => c.toLowerCase());
        if (existing.includes(name.toLowerCase())) {
          if (status)
            status.textContent = isPt
              ? "Esse álbum já existe."
              : "That album already exists.";
          return;
        }
        const maxOrder = customAlbums.reduce(
          (m, a) => Math.max(m, typeof a.order === "number" ? a.order : -1),
          -1,
        );
        const payload = {
          name,
          order: maxOrder + 1,
        };

        if (albumsSyncLive && albumsDb) {
          albumsDb
            .collection("albums")
            .add({
              ...payload,
              createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            })
            .then(() => {
              if (input) input.value = "";
              if (status) status.textContent = "";
              showToast(isPt ? "Álbum criado." : "Album created.", "created");
              setTabDot("album");
            })
            .catch(() => {
              customAlbums.push({ id: "local-" + Date.now(), ...payload });
              if (input) input.value = "";
              if (status) status.textContent = "";
              showToast(isPt ? "Álbum criado." : "Album created.", "created");
              setTabDot("album");
              renderAlbum();
            });
        } else {
          customAlbums.push({ id: "local-" + Date.now(), ...payload });
          if (input) input.value = "";
          if (status) status.textContent = "";
          showToast(isPt ? "Álbum criado." : "Album created.", "created");
          setTabDot("album");
          renderAlbum();
        }
      }

      async function deleteCustomAlbum(alb) {
        if (!alb) return;
        const isPt = currentLanguage() === "pt";
        const photoCount = (memoriesItems || []).filter(
          (m) => (m.category || "") === alb.name,
        ).length;
        const msg =
          photoCount > 0
            ? isPt
              ? `Apagar o álbum "${alb.name}"? As ${photoCount} foto(s) passam para "Sem álbum" (não são apagadas).`
              : `Delete album "${alb.name}"? Its ${photoCount} photo(s) move to Unsorted (photos are kept).`
            : isPt
              ? `Apagar o álbum "${alb.name}"?`
              : `Delete album "${alb.name}"?`;
        const ok = await customConfirm(msg);
        if (!ok) return;

        if (
          albumsSyncLive &&
          albumsDb &&
          alb.id &&
          !String(alb.id).startsWith("local-")
        ) {
          albumsDb
            .collection("albums")
            .doc(alb.id)
            .delete()
            .then(() => {
              showToast(isPt ? "Álbum apagado." : "Album deleted.", "deleted");
            })
            .catch(() => {
              customAlbums = customAlbums.filter((a) => a.id !== alb.id);
              showToast(isPt ? "Álbum apagado." : "Album deleted.", "deleted");
              renderAlbum();
            });
        } else {
          customAlbums = customAlbums.filter((a) => a.id !== alb.id);
          showToast(isPt ? "Álbum apagado." : "Album deleted.", "deleted");
          renderAlbum();
        }
      }

      document
        .getElementById("newAlbumBtn")
        ?.addEventListener("click", addCustomAlbum);
      document
        .getElementById("newAlbumNameInput")
        ?.addEventListener("keydown", (e) => {
          if (e.key === "Enter") addCustomAlbum();
        });

      fillMemoryAlbumSelect();
      renderAlbum();

      let lbIndex = 0;
      function openLightbox(idx) {
        lbIndex = idx;
        renderLightbox();
        document.getElementById("lightbox").classList.add("open");
      }
      function renderLightbox() {
        const p = allPhotos[lbIndex];
        const lbImg = document.getElementById("lbImg");
        if (p.img) {
          lbImg.innerHTML = `<img src="${p.img}" alt="${p.caption}" style="width:100%; height:100%; object-fit:cover; border-radius:inherit;">`;
        } else {
          lbImg.textContent = p.caption;
        }
        document.getElementById("lbCap").textContent =
          `${p.caption}${p.date ? " · " + p.date : ""}`;
      }
      document
        .getElementById("lbClose")
        .addEventListener("click", () =>
          document.getElementById("lightbox").classList.remove("open"),
        );
      document.getElementById("lightbox").addEventListener("click", (e) => {
        if (e.target.id === "lightbox")
          document.getElementById("lightbox").classList.remove("open");
      });
      document.getElementById("lbPrev").addEventListener("click", () => {
        lbIndex = (lbIndex - 1 + allPhotos.length) % allPhotos.length;
        renderLightbox();
      });
      document.getElementById("lbNext").addEventListener("click", () => {
        lbIndex = (lbIndex + 1) % allPhotos.length;
        renderLightbox();
      });

      // ---------- favorites ----------
      const favGrid = document.getElementById("favGrid");
      Object.entries(CONFIG.favorites).forEach(([k, v]) => {
        const el = document.createElement("div");
        el.className = "fav-item";
        el.innerHTML = `<span class="k">${tr(k)}</span><span class="v">${tr(v)}</span>`;
        favGrid.appendChild(el);
      });

      // ---------- fun facts ----------
      const factGrid = document.getElementById("factGrid");
      CONFIG.funFacts.forEach((f) => {
        const el = document.createElement("div");
        el.className = "fact-card";
        el.textContent = tr(f);
        factGrid.appendChild(el);
      });

      // ---------- firsts timeline ----------
      const timelineWrap = document.getElementById("timelineWrap");
      CONFIG.firsts.forEach((f) => {
        const el = document.createElement("div");
        el.className = "tl-item";
        el.innerHTML = `<div class="tl-title">${tr(f.title)}</div><div class="tl-date">${f.date || "&nbsp;"}</div><div class="tl-desc">${currentLanguage() === "pt" ? PT_FIRST_DESC[f.title] || f.desc : f.desc}</div>`;
        timelineWrap.appendChild(el);
      });

      // ---------- open when ----------
      const owGrid = document.getElementById("owGrid");
      CONFIG.openWhen.forEach((item) => {
        const btn = document.createElement("button");
        btn.className = "ow-card";
        btn.textContent = tr(item.label);
        btn.addEventListener("click", () => {
          document.getElementById("owModalTitle").textContent = tr(item.title);
          document.getElementById("owModalText").textContent = tr(item.text);
          document.getElementById("owModal").classList.add("open");
        });
        owGrid.appendChild(btn);
      });
      document
        .getElementById("owModalClose")
        .addEventListener("click", () =>
          document.getElementById("owModal").classList.remove("open"),
        );
      document.getElementById("owModal").addEventListener("click", (e) => {
        if (e.target.id === "owModal")
          document.getElementById("owModal").classList.remove("open");
      });

      // ---------- secret interaction (footer heart — 5 clicks) ----------
      let secretClicks = 0;
      document.getElementById("secretHeart").addEventListener("click", () => {
        secretClicks++;
        if (secretClicks >= 5) {
          const reveal = document.getElementById("secretReveal");
          reveal.textContent = tr("You found it. ") + tr(CONFIG.secretMessage);
          reveal.classList.add("show");
        }
      });

      // ---------- brand secret (header "us" — default 9 clicks) ----------
      // Same modal style as Open When. Edit the text in CONFIG.brandSecret.
      (function initBrandSecret() {
        const brand = document.getElementById("brandSecret");
        const overlay = document.getElementById("brandSecretOverlay");
        const closeBtn = document.getElementById("brandSecretClose");
        if (!brand || !overlay) return;

        const cfg = CONFIG.brandSecret || {};
        const need = Math.max(1, cfg.clicks || 9);
        let taps = 0;
        let resetTimer = null;

        function fillSecretCard() {
          const pt = currentLanguage() === "pt";
          document.getElementById("brandSecretTitle").textContent = pt
            ? cfg.titlePt || cfg.title || "Um segredinho"
            : cfg.title || "A little secret";
          const bodyEl = document.getElementById("brandSecretBody");
          bodyEl.textContent = pt
            ? cfg.bodyPt || cfg.body || ""
            : cfg.body || "";
          bodyEl.scrollTop = 0;
        }

        function openBrandSecret() {
          fillSecretCard();
          overlay.classList.add("open");
          const pt = currentLanguage() === "pt";
          showToast(
            pt
              ? "Conseguiste encontrar isto? ✨"
              : "Did you really find this? ✨",
            "created",
          );
        }

        function closeBrandSecret() {
          overlay.classList.remove("open");
        }

        brand.addEventListener("click", (e) => {
          e.preventDefault();
          taps++;
          if (resetTimer) clearTimeout(resetTimer);
          resetTimer = setTimeout(() => {
            taps = 0;
          }, 2500);
          if (taps >= need) {
            taps = 0;
            openBrandSecret();
          }
        });

        closeBtn?.addEventListener("click", closeBrandSecret);
        overlay.addEventListener("click", (e) => {
          if (e.target === overlay) closeBrandSecret();
        });
        document.addEventListener("keydown", (e) => {
          if (e.key === "Escape" && overlay.classList.contains("open"))
            closeBrandSecret();
        });
      })();

      // ---------- footer ----------
      // ---------- bucket list (add / edit / delete / check, synced via Firebase) ----------
      // Each item looks like: { id, text, done }.
      // If CONFIG.firebase is filled in, items live in a Firestore collection and
      // update in real time on every device viewing the site. If it's still the
      // placeholder config, everything still works, but only in this browser tab's
      // memory — refreshing the page resets it back to CONFIG.bucketList.
      let bucketDb = null;
      let bucketSyncLive = false;
      let bucketItems = []; // local working copy, always what's rendered
      let bucketUnsub = null; // Firestore listener unsubscribe fn

      /* ================================================================
   Custom confirm dialog — replaces native confirm(), which several
   local preview environments (VS Code Simple Browser/Live Preview,
   some embedded webviews) silently block or auto-dismiss, making
   delete buttons look broken even though the code is fine.
   Returns a Promise<boolean> so callers can `await` it.
   ================================================================ */
      function customConfirm(message) {
        return new Promise((resolve) => {
          const overlay = document.getElementById("confirmModal");
          const textEl = document.getElementById("confirmModalText");
          const okBtn = document.getElementById("confirmModalOk");
          const cancelBtn = document.getElementById("confirmModalCancel");

          textEl.textContent = message;
          okBtn.textContent = tr("Delete");
          cancelBtn.textContent =
            currentLanguage() === "pt" ? "Cancelar" : "Cancel";
          overlay.classList.add("open");

          function cleanup(result) {
            overlay.classList.remove("open");
            okBtn.removeEventListener("click", onOk);
            cancelBtn.removeEventListener("click", onCancel);
            overlay.removeEventListener("click", onOverlay);
            resolve(result);
          }
          function onOk() {
            cleanup(true);
          }
          function onCancel() {
            cleanup(false);
          }
          function onOverlay(e) {
            if (e.target === overlay) cleanup(false);
          }

          okBtn.addEventListener("click", onOk);
          cancelBtn.addEventListener("click", onCancel);
          overlay.addEventListener("click", onOverlay);
        });
      }

      /* ================================================================
   TOAST NOTIFICATIONS — little pop-ups confirming an item was
   created, updated, or deleted, for both the Bucket List and the
   Music playlist. Messages are picked randomly from a pool for
   variety, and shown in whichever language the site is currently in.
   ================================================================ */
      const NOTIF_MESSAGES = {
        bucketCreated: [
          {
            en: "New dream added to the list! ✨",
            pt: "Novo sonho adicionado à lista! ✨",
          },
          {
            en: "Added! One step closer to doing it together. 💚",
            pt: "Adicionado! Mais um passo pra fazer isso juntos. 💚",
          },
          {
            en: "On the list it goes — let's make it happen. ♥",
            pt: "Foi pra lista — vamos fazer acontecer. ♥",
          },
          {
            en: "Added! Future us is going to be so happy about this.",
            pt: "Adicionado! O futuro a gente vai ficar muito feliz com isso.",
          },
        ],
        bucketUpdated: [
          {
            en: "Updated! Even better than before. ✏️",
            pt: "Atualizado! Ainda melhor que antes. ✏️",
          },
          { en: "Tweaked and saved.", pt: "Ajustado e salvo." },
          {
            en: "Got it — updated for both of you.",
            pt: "Feito — atualizado pra vocês dois.",
          },
          {
            en: "Changed! The dream just got an upgrade.",
            pt: "Mudado! O sonho acabou de ganhar um upgrade.",
          },
        ],
        bucketDeleted: [
          {
            en: "Removed from the list. Onto the next adventure! 👋",
            pt: "Removido da lista. Rumo à próxima aventura! 👋",
          },
          {
            en: "Gone — guess that dream retired.",
            pt: "Foi! Esse sonho se aposentou.",
          },
          {
            en: "Deleted. We'll dream up something else. ♥",
            pt: "Apagado. A gente pensa em outra coisa. ♥",
          },
          {
            en: "Poof! One less thing on the list.",
            pt: "Puf! Uma coisa menos na lista.",
          },
        ],
        songCreated: [
          {
            en: "New song added to the playlist! 🎶",
            pt: "Nova música adicionada à playlist! 🎶",
          },
          {
            en: "Added! Great choice. 🎧",
            pt: "Adicionada! Ótima escolha. 🎧",
          },
          {
            en: "Track added — queue it up! ♥",
            pt: "Faixa adicionada — bora ouvir! ♥",
          },
          { en: "New tune in the mix!", pt: "Nova música no repertório!" },
        ],
        songUpdated: [
          { en: "Song updated! 🎵", pt: "Música atualizada! 🎵" },
          {
            en: "Saved the changes to that track.",
            pt: "Alterações salvas nessa faixa.",
          },
          { en: "Updated — sounding good.", pt: "Atualizado — ficou bom." },
        ],
        songDeleted: [
          {
            en: "Song removed from the playlist.",
            pt: "Música removida da playlist.",
          },
          {
            en: "Deleted! Less clutter, more room for new favorites. 🎶",
            pt: "Apagada! Menos bagunça, mais espaço pra novas favoritas. 🎶",
          },
          { en: "Gone from the playlist. 👋", pt: "Saiu da playlist. 👋" },
        ],
        calCreated: [
          {
            en: "On the calendar — noted! 📅",
            pt: "No calendário — anotado! 📅",
          },
          {
            en: "Schedule updated. We'll both see it. ♥",
            pt: "Agenda atualizada. Os dois vão ver. ♥",
          },
          {
            en: "Added to the shared calendar.",
            pt: "Adicionado ao calendário compartilhado.",
          },
        ],
        calUpdated: [
          { en: "Event updated.", pt: "Evento atualizado." },
          { en: "Schedule change saved.", pt: "Mudança na agenda salva." },
        ],
        calDeleted: [
          { en: "Removed from the calendar.", pt: "Removido do calendário." },
          {
            en: "That plan is off the board.",
            pt: "Esse plano saiu da agenda.",
          },
        ],
        memoryCreated: [
          { en: "New memory added! 📸", pt: "Nova lembrança adicionada! 📸" },
          { en: "Added to the collection. ♥", pt: "Adicionada à coleção. ♥" },
          {
            en: "Saved! Another moment worth keeping.",
            pt: "Salvo! Mais um momento que vale a pena guardar.",
          },
          {
            en: "Snapshot added — the album keeps growing. 💚",
            pt: "Foto adicionada — o álbum só cresce. 💚",
          },
        ],
        memoryUpdated: [
          { en: "Memory updated. ✏️", pt: "Lembrança atualizada. ✏️" },
          {
            en: "Saved your edits to this photo.",
            pt: "Edições desta foto salvas.",
          },
        ],
        memoryDeleted: [
          { en: "Memory removed.", pt: "Lembrança removida." },
          { en: "Gone from the album. 👋", pt: "Saiu do álbum. 👋" },
          {
            en: "Deleted. The rest of the memories stay put.",
            pt: "Apagada. O resto das lembranças continua guardado.",
          },
        ],
      };

      function ensureToastContainer() {
        let c = document.getElementById("toastContainer");
        if (!c) {
          c = document.createElement("div");
          c.id = "toastContainer";
          document.body.appendChild(c);
        }
        return c;
      }

      function showToast(message, kind) {
        const container = ensureToastContainer();
        const toast = document.createElement("div");
        toast.className = "toast " + (kind || "created");
        const icon =
          kind === "deleted" ? "🗑️" : kind === "updated" ? "✏️" : "✨";
        toast.innerHTML = `<span class="toast-icon">${icon}</span><span class="toast-text"></span>`;
        toast.querySelector(".toast-text").textContent = message;
        container.appendChild(toast);
        setTimeout(() => {
          toast.classList.add("leaving");
          setTimeout(() => toast.remove(), 320);
        }, 3400);
      }

      // key: one of the NOTIF_MESSAGES keys above (e.g. 'bucketCreated', 'songDeleted')
      function notify(key) {
        const pool = NOTIF_MESSAGES[key];
        if (!pool || !pool.length) return;
        const pick = pool[Math.floor(Math.random() * pool.length)];
        const message = currentLanguage() === "pt" ? pick.pt : pick.en;
        const kind = key.endsWith("Deleted")
          ? "deleted"
          : key.endsWith("Updated")
            ? "updated"
            : "created";
        showToast(message, kind);
        // Blue tab dots for new items (cleared automatically when that tab is opened)
        if (key === "bucketCreated") setTabDot("bucketlist");
        if (key === "songCreated") setTabDot("music");
        if (key === "calCreated") setTabDot("calendar");
        if (key === "memoryCreated") setTabDot("album");
        if (key === "daycardCreated") setTabDot("daycards");
        if (key === "concursoFavorited") setTabDot("today");
      }

      function isFirebaseConfigured() {
        const f = CONFIG.firebase;
        return (
          f &&
          f.apiKey &&
          f.apiKey !== "YOUR_API_KEY" &&
          f.projectId &&
          f.projectId !== "YOUR_PROJECT"
        );
      }

      function setBucketSyncPill() {
        const pill = document.getElementById("bucketSyncPill");
        if (bucketSyncLive) {
          pill.textContent = tr("🟢 Synced — changes save for both of you.");
          pill.className = "bucket-sync-pill live";
        } else {
          pill.textContent = tr(
            "🟡 Not synced yet — changes only stay on this device.",
          );
          pill.className = "bucket-sync-pill local";
        }
      }

      // Sort bucket items by "order" (0,1,2…). Items without order fall after
      // ones that have it, using their array index so old data still sorts stably.
      function getSortedBucketItems() {
        return bucketItems
          .map((item, i) => ({ ...item, __idx: i }))
          .sort((a, b) => {
            const ao =
              typeof a.order === "number" ? a.order : 1000000 + a.__idx;
            const bo =
              typeof b.order === "number" ? b.order : 1000000 + b.__idx;
            return ao - bo;
          });
      }

      // direction: -1 up, +1 down. Renumbers the whole list 0..n-1 so legacy
      // items without an order field never collide and get stuck.
      function moveBucketOrder(item, direction) {
        const sorted = getSortedBucketItems();
        const idx = sorted.findIndex((s) => s.id === item.id);
        const swapIdx = idx + direction;
        if (idx < 0 || swapIdx < 0 || swapIdx >= sorted.length) return;

        const reordered = sorted.slice();
        const [moved] = reordered.splice(idx, 1);
        reordered.splice(swapIdx, 0, moved);
        const updates = reordered.map((s, i) => ({ id: s.id, order: i }));

        if (bucketSyncLive && bucketDb) {
          const batch = bucketDb.batch();
          let wrote = 0;
          updates.forEach((u) => {
            if (u.id && !String(u.id).startsWith("local-")) {
              batch.update(bucketDb.collection("bucketlist").doc(u.id), {
                order: u.order,
              });
              wrote++;
            } else {
              const local = bucketItems.find((s) => s.id === u.id);
              if (local) local.order = u.order;
            }
          });
          if (wrote) batch.commit().catch(() => {});
          else renderBucketList();
        } else {
          updates.forEach((u) => {
            const local = bucketItems.find((s) => s.id === u.id);
            if (local) local.order = u.order;
          });
          renderBucketList();
        }
      }

      function renderBucketList() {
        const wrap = document.getElementById("bucketList");
        wrap.innerHTML = "";
        const sorted = getSortedBucketItems();

        if (sorted.length === 0) {
          wrap.innerHTML = `<p class="bucket-empty">${tr("Nothing here yet — add the first thing above.")}</p>`;
        } else {
          sorted.forEach((item, i) => {
            const row = document.createElement("div");
            row.className = "bucket-item" + (item.done ? " done" : "");

            const check = document.createElement("button");
            check.className = "bucket-check";
            check.type = "button";
            check.setAttribute(
              "aria-label",
              item.done ? tr("Mark as not done") : tr("Mark as done"),
            );
            check.textContent = item.done ? "✓" : "";
            check.addEventListener("click", () => toggleBucketItem(item));

            const text = document.createElement("span");
            text.className = "bucket-text";
            text.textContent = tr(item.text);

            const actions = document.createElement("div");
            actions.className = "bucket-actions";

            const moveGroup = document.createElement("div");
            moveGroup.className = "bucket-move-group";
            const upBtn = document.createElement("button");
            upBtn.type = "button";
            upBtn.className = "bucket-move";
            upBtn.textContent = "↑";
            upBtn.title = tr("Move up");
            upBtn.setAttribute("aria-label", tr("Move up"));
            upBtn.disabled = i === 0;
            upBtn.addEventListener("click", () => moveBucketOrder(item, -1));
            const downBtn = document.createElement("button");
            downBtn.type = "button";
            downBtn.className = "bucket-move";
            downBtn.textContent = "↓";
            downBtn.title = tr("Move down");
            downBtn.setAttribute("aria-label", tr("Move down"));
            downBtn.disabled = i === sorted.length - 1;
            downBtn.addEventListener("click", () => moveBucketOrder(item, 1));
            moveGroup.appendChild(upBtn);
            moveGroup.appendChild(downBtn);

            const editBtn = document.createElement("button");
            editBtn.className = "bucket-icon-btn";
            editBtn.type = "button";
            editBtn.setAttribute("aria-label", tr("Edit"));
            editBtn.textContent = "✎";
            editBtn.addEventListener("click", () =>
              startEditBucketItem(item, row),
            );

            const delBtn = document.createElement("button");
            delBtn.className = "bucket-icon-btn delete";
            delBtn.type = "button";
            delBtn.setAttribute("aria-label", tr("Delete"));
            delBtn.textContent = "✕";
            delBtn.addEventListener("click", () => deleteBucketItem(item));

            // Schedule on calendar (opens Calendar tab with form pre-filled)
            const calBtn = document.createElement("button");
            calBtn.className = "bucket-icon-btn";
            calBtn.type = "button";
            calBtn.setAttribute(
              "aria-label",
              currentLanguage() === "pt"
                ? "Agendar no calendário"
                : "Add to calendar",
            );
            calBtn.title =
              currentLanguage() === "pt"
                ? "Agendar no calendário"
                : "Add to calendar";
            // Monochrome calendar icon (matches ✎ / ✕ style)
            calBtn.innerHTML =
              '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18"/><path d="M8 3v4M16 3v4"/></svg>';
            calBtn.addEventListener("click", () =>
              scheduleBucketOnCalendar(item),
            );

            actions.appendChild(moveGroup);
            actions.appendChild(calBtn);
            actions.appendChild(editBtn);
            actions.appendChild(delBtn);
            row.appendChild(check);
            row.appendChild(text);
            row.appendChild(actions);
            wrap.appendChild(row);
          });
        }

        // Keep calendar dropdown in sync when bucket list changes
        if (typeof fillCalBucketSelect === "function") fillCalBucketSelect();

        const total = sorted.length;
        const doneCount = sorted.filter((i) => i.done).length;
        const progressWrap = document.getElementById("bucketProgress");
        if (total > 0) {
          progressWrap.style.display = "block";
          const pct = Math.round((doneCount / total) * 100);
          document.getElementById("bucketProgressFill").style.width = pct + "%";
          document.getElementById("bucketProgressLabel").textContent =
            `${doneCount} ${currentLanguage() === "pt" ? "de" : "of"} ${total} ${tr("done")}`;
        } else {
          progressWrap.style.display = "none";
        }
      }

      // Bucket → Calendar: open calendar tab with this item linked in the form
      function scheduleBucketOnCalendar(item) {
        if (!item) return;
        const isPt = currentLanguage() === "pt";
        switchTab("calendar", { updateHash: true, scroll: true });
        // Let the tab paint, then fill the form
        setTimeout(() => {
          clearCalForm();
          if (typeof fillCalBucketSelect === "function") fillCalBucketSelect();
          const titleEl = document.getElementById("calTitle");
          const linkEl = document.getElementById("calBucketLink");
          const personEl = document.getElementById("calPerson");
          const dateEl = document.getElementById("calDate");
          if (titleEl) titleEl.value = item.text || "";
          if (linkEl) {
            // Ensure option exists even if item is "done"
            let opt = Array.from(linkEl.options).find(
              (o) => o.value === String(item.id),
            );
            if (!opt && item.id) {
              opt = document.createElement("option");
              opt.value = item.id;
              opt.textContent = item.text || item.id;
              linkEl.appendChild(opt);
            }
            linkEl.value = item.id ? String(item.id) : "";
          }
          if (personEl) personEl.value = "both";
          if (dateEl && !dateEl.value && calState && calState.selected) {
            dateEl.value = calState.selected;
          }
          document
            .getElementById("calAddForm")
            ?.scrollIntoView({ behavior: "smooth", block: "center" });
          if (dateEl) dateEl.focus();
          showToast(
            isPt
              ? "Escolhe a data e grava o evento ♥"
              : "Pick a date and save the event ♥",
            "created",
          );
        }, 80);
      }

      function startEditBucketItem(item, row) {
        const oldText = item.text;
        const input = document.createElement("input");
        input.type = "text";
        input.className = "bucket-text-input";
        input.value = oldText;
        input.maxLength = 140;

        const textSpan = row.querySelector(".bucket-text");
        row.replaceChild(input, textSpan);
        input.focus();
        input.select();

        let committed = false;
        function commit() {
          if (committed) return;
          committed = true;
          const val = input.value.trim();
          if (val && val !== oldText) editBucketItem(item, val);
          else renderBucketList();
        }
        input.addEventListener("keydown", (e) => {
          if (e.key === "Enter") commit();
          if (e.key === "Escape") {
            committed = true;
            renderBucketList();
          }
        });
        input.addEventListener("blur", commit);
      }

      // ---- CRUD operations: each one updates Firestore when synced, or the
      // local array (and re-renders immediately) when running local-only.
      function addBucketItem() {
        const input = document.getElementById("bucketNewInput");
        const val = input.value.trim();
        if (!val) return;
        input.value = "";

        // New items go to the end of the ordered list
        const sorted = getSortedBucketItems();
        const maxOrder = sorted.reduce(
          (max, s) => Math.max(max, typeof s.order === "number" ? s.order : -1),
          -1,
        );
        const order = maxOrder + 1;

        if (bucketSyncLive) {
          bucketDb
            .collection("bucketlist")
            .add({
              text: val,
              done: false,
              order,
              createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            })
            .then(() => notify("bucketCreated"))
            .catch(() => {});
        } else {
          bucketItems.push({
            id: "local-" + Date.now(),
            text: val,
            done: false,
            order,
          });
          renderBucketList();
          notify("bucketCreated");
        }
      }

      function toggleBucketItem(item) {
        if (bucketSyncLive) {
          bucketDb
            .collection("bucketlist")
            .doc(item.id)
            .update({ done: !item.done })
            .catch(() => {});
        } else {
          item.done = !item.done;
          renderBucketList();
        }
      }

      function editBucketItem(item, newText) {
        if (bucketSyncLive) {
          bucketDb
            .collection("bucketlist")
            .doc(item.id)
            .update({ text: newText })
            .then(() => notify("bucketUpdated"))
            .catch(() => {});
        } else {
          item.text = newText;
          renderBucketList();
          notify("bucketUpdated");
        }
      }

      async function deleteBucketItem(item) {
        const msg =
          currentLanguage() === "pt"
            ? `Tem certeza que quer apagar "${item.text}"?`
            : `Are you sure you want to delete "${item.text}"?`;
        const ok = await customConfirm(msg);
        if (!ok) return;

        if (bucketSyncLive) {
          bucketDb
            .collection("bucketlist")
            .doc(item.id)
            .delete()
            .then(() => notify("bucketDeleted"))
            .catch(() => {});
        } else {
          bucketItems = bucketItems.filter((i) => i.id !== item.id);
          renderBucketList();
          notify("bucketDeleted");
        }
      }

      document
        .getElementById("bucketAddBtn")
        .addEventListener("click", addBucketItem);
      document
        .getElementById("bucketNewInput")
        .addEventListener("keydown", (e) => {
          if (e.key === "Enter") addBucketItem();
        });

      // ---- boot up: connect to Firestore if configured, else run local-only ----
      function getSharedFirestore() {
        if (!isFirebaseConfigured()) return null;
        try {
          if (!firebase.apps.length) firebase.initializeApp(CONFIG.firebase);
          return firebase.firestore();
        } catch (e) {
          return null;
        }
      }

      (function initBucketList() {
        const db = getSharedFirestore();
        if (db) {
          try {
            bucketDb = db;
            bucketSyncLive = true;
            setBucketSyncPill();

            const col = bucketDb.collection("bucketlist");
            bucketUnsub = col.orderBy("createdAt", "asc").onSnapshot(
              (snapshot) => {
                const next = snapshot.docs.map((doc) => ({
                  id: doc.id,
                  ...doc.data(),
                }));
                bucketItems = next;
                renderBucketList();
                // Show blue dot if partner added items since this device last opened the tab
                // (works both live and when reopening the site later)
                refreshTabDotsFromData("bucketlist", next);
              },
              () => {
                bucketSyncLive = false;
                setBucketSyncPill();
                bucketItems = JSON.parse(JSON.stringify(CONFIG.bucketList)).map(
                  (it, i) => ({ id: "local-" + i, order: i, ...it }),
                );
                renderBucketList();
              },
            );

            col
              .limit(1)
              .get()
              .then((snap) => {
                if (snap.empty) {
                  CONFIG.bucketList.forEach((item, i) => {
                    col.add({
                      text: item.text,
                      done: !!item.done,
                      order: i,
                      createdAt:
                        firebase.firestore.FieldValue.serverTimestamp(),
                    });
                  });
                }
              })
              .catch(() => {});
          } catch (e) {
            bucketSyncLive = false;
            setBucketSyncPill();
            bucketItems = JSON.parse(JSON.stringify(CONFIG.bucketList)).map(
              (it, i) => ({ id: "local-" + i, order: i, ...it }),
            );
            renderBucketList();
          }
        } else {
          bucketSyncLive = false;
          setBucketSyncPill();
          bucketItems = JSON.parse(JSON.stringify(CONFIG.bucketList)).map(
            (it, i) => ({ id: "local-" + i, ...it }),
          );
          renderBucketList();
        }
      })();

      document.getElementById("footerNames").textContent =
        `${CONFIG.names.me} ♥ ${CONFIG.names.her}`;
      document.getElementById("footerYear").textContent =
        new Date().getFullYear();

      /* ================================================================
   QUIZZES
   ================================================================ */
      const QUIZ_DATA = {
        eduarda: {
          title: { en: "Eduarda Quiz", pt: "Quiz da Eduarda" },
          questions: [
            {
              q: {
                en: "What is Eduarda's full name?",
                pt: "Qual é o nome completo da Eduarda?",
              },
              options: [
                { en: "Eduarda Silva", pt: "Eduarda Silva" },
                { en: "Maria Eduarda", pt: "Maria Eduarda" },
                { en: "Eduarda Salton", pt: "Eduarda Salton" },
                { en: "Eduarda Pessoa", pt: "Eduarda Pessoa" },
              ],
              correct: 2,
            },
            {
              q: {
                en: "Who is her best friend?",
                pt: "Qual a melhor amiga dela?",
              },
              options: [
                { en: "Lucca", pt: "Lucca" },
                { en: "Mari", pt: "Mari" },
                { en: "Ana", pt: "Ana" },
                { en: "Júlia", pt: "Júlia" },
              ],
              correct: 1,
            },
            {
              q: {
                en: "She has a sensitivity/allergy to which common seasoning?",
                pt: "Ela tem alguma sensibilidade/alergia a um tempero bem comum?",
              },
              options: [
                { en: "Onion", pt: "Cebola" },
                { en: "Garlic", pt: "Alho" },
                { en: "Pepper", pt: "Pimenta" },
                { en: "Cilantro", pt: "Coentro" },
              ],
              correct: 1,
            },
            {
              q: {
                en: "What was her favorite concert?",
                pt: "Qual foi o show favorito dela?",
              },
              options: [
                { en: "Post Malone", pt: "Post Malone" },
                { en: "Felipe Ret", pt: "Felipe Ret" },
                { en: "Katy Perry", pt: "Katy Perry" },
                { en: "Matuê", pt: "Matuê" },
              ],
              correct: 0,
            },
            {
              q: {
                en: "What is her favorite color?",
                pt: "Qual a cor favorita dela?",
              },
              options: [
                { en: "Hot pink", pt: "Rosa shock" },
                { en: "Navy blue", pt: "Azul-marinho" },
                { en: "Baby pink", pt: "Rosa bebê" },
                { en: "Lime green", pt: "Verde lima" },
              ],
              correct: 2,
            },
            {
              q: {
                en: "Which sports does she like to follow?",
                pt: "Ela gosta de acompanhar quais esportes?",
              },
              options: [
                { en: "Volleyball / Skating", pt: "Vôlei / Patins" },
                { en: "Basketball / Hockey", pt: "Basquete / Hockey" },
                { en: "Soccer / Tennis", pt: "Futebol / Tênis" },
                { en: "UFC / Polo", pt: "UFC / Polo" },
              ],
              correct: 2,
            },
            {
              q: {
                en: "What word does she hate the most when Thommy says it?",
                pt: "Qual a palavra que ela mais odeia que o Thommy fala?",
              },
              options: [
                { en: "Keke", pt: "Keke" },
                { en: "De boas", pt: "De boas" },
                { en: "Fac", pt: "Fac" },
                { en: "Da hora", pt: "Da hora" },
              ],
              correct: 0,
            },
            {
              q: {
                en: "She has already broken a bone. True or false?",
                pt: "Ela já quebrou um osso. Verdadeiro ou falso?",
              },
              options: [
                { en: "True", pt: "Verdadeiro" },
                { en: "False", pt: "Falso" },
              ],
              correct: 1,
            },
            {
              q: {
                en: "What is her favorite food?",
                pt: "Qual a comida favorita dela?",
              },
              options: [
                { en: "Sushi", pt: "Sushi" },
                { en: "Hamburger", pt: "Hambúrguer" },
                { en: "Churrasco (BBQ)", pt: "Churrasco" },
                { en: "Popcorn", pt: "Pipoca" },
              ],
              correct: 2,
            },
            {
              q: {
                en: "Which Brazilian state is her family from?",
                pt: "De qual estado do Brasil a família dela é?",
              },
              options: [
                { en: "SP", pt: "SP" },
                { en: "RJ", pt: "RJ" },
                { en: "RS (Rio Grande do Sul)", pt: "RS (Rio Grande do Sul)" },
                { en: "MG", pt: "MG" },
              ],
              correct: 2,
            },
            {
              q: {
                en: "What is her favorite season?",
                pt: "Qual a época do ano favorita dela?",
              },
              options: [
                { en: "Winter", pt: "Inverno" },
                { en: "Summer", pt: "Verão" },
                { en: "Spring", pt: "Primavera" },
                { en: "Fall", pt: "Outono" },
              ],
              correct: 1,
            },
            {
              q: {
                en: "What is her favorite song?",
                pt: "Qual a música favorita dela?",
              },
              options: [
                { en: "Poker Face", pt: "Poker Face" },
                { en: "Someone Like You", pt: "Someone Like You" },
                { en: "Use Somebody", pt: "Use Somebody" },
                { en: "Californication", pt: "Californication" },
              ],
              correct: 2,
            },
            {
              q: {
                en: "Who is her favorite soccer player?",
                pt: "Qual o jogador de futebol favorito dela?",
              },
              options: [
                { en: "Neymar", pt: "Neymar" },
                { en: "Pedri", pt: "Pedri" },
                { en: "Messi", pt: "Messi" },
                { en: "Thomas Müller", pt: "Thomas Müller" },
              ],
              correct: 3,
            },
            {
              q: {
                en: "What is her favorite day of the week?",
                pt: "Qual o dia favorito da semana dela?",
              },
              options: [
                { en: "Wednesday", pt: "Quarta-feira" },
                { en: "Saturday", pt: "Sábado" },
                { en: "Friday", pt: "Sexta-feira" },
                { en: "Sunday", pt: "Domingo" },
              ],
              correct: 0,
            },
            {
              q: {
                en: "At what age did she move to Floripa?",
                pt: "Qual idade ela se mudou para Floripa?",
              },
              options: [
                { en: "18", pt: "18" },
                { en: "16", pt: "16" },
                { en: "20", pt: "20" },
                { en: "11", pt: "11" },
              ],
              correct: 1,
            },
          ],
        },
        thommy: {
          title: { en: "Thommy Quiz", pt: "Quiz do Thommy" },
          questions: [
            {
              q: {
                en: "What is Thommy's full name?",
                pt: "Qual é o nome completo do Thommy?",
              },
              options: [
                { en: "Thomas Silva Duarte", pt: "Thomas Silva Duarte" },
                {
                  en: "Thomas Repsold Duarte Pessoa",
                  pt: "Thomas Repsold Duarte Pessoa",
                },
                { en: "Tommy Pessoa", pt: "Tommy Pessoa" },
                { en: "Thomas Duarte Repsold", pt: "Thomas Duarte Repsold" },
              ],
              correct: 1,
            },
            {
              q: {
                en: "What is his favorite animal?",
                pt: "Qual é o animal favorito dele?",
              },
              options: [
                { en: "Dog", pt: "Cachorro" },
                { en: "Cat", pt: "Gato" },
                { en: "Owl", pt: "Coruja" },
                { en: "Fish", pt: "Peixe" },
              ],
              correct: 2,
            },
            {
              q: {
                en: "What color did he say is his favorite?",
                pt: "Qual cor ele disse que é a favorita?",
              },
              options: [
                { en: "Blue", pt: "Azul" },
                { en: "Black", pt: "Preto" },
                { en: "Green", pt: "Verde" },
                { en: "Red", pt: "Vermelho" },
              ],
              correct: 2,
            },
            {
              q: {
                en: "What is his favorite sport / martial art?",
                pt: "Qual esporte/arte marcial favorita?",
              },
              options: [
                { en: "Muay Thai", pt: "Muay Thai" },
                { en: "Jiu-jitsu", pt: "Jiu-jitsu" },
                { en: "Boxing", pt: "Boxe" },
                { en: "Regular gym", pt: "Academia normal" },
              ],
              correct: 1,
            },
            {
              q: {
                en: "He hates which sandwich topping?",
                pt: "Ele odeia qual legume/conserva que costuma vir em sanduíches?",
              },
              options: [
                { en: "Lettuce", pt: "Alface" },
                { en: "Tomato", pt: "Tomate" },
                { en: "Pickles", pt: "Pickles" },
                { en: "Onion", pt: "Cebola" },
              ],
              correct: 2,
            },
            {
              q: {
                en: "What is his favorite city?",
                pt: "Qual a cidade favorita dele?",
              },
              options: [
                { en: "New York", pt: "Nova York" },
                { en: "Miami", pt: "Miami" },
                { en: "Tokyo", pt: "Tóquio" },
                { en: "San Diego", pt: "San Diego" },
              ],
              correct: 0,
            },
            {
              q: {
                en: "Who is his favorite superhero?",
                pt: "Qual o super-herói favorito dele?",
              },
              options: [
                { en: "Spider-Man", pt: "Homem-Aranha" },
                { en: "Superman", pt: "Super-Homem" },
                { en: "Batman", pt: "Batman" },
                { en: "Aquaman", pt: "Aquaman" },
              ],
              correct: 0,
            },
            {
              q: {
                en: "Which city was he born in?",
                pt: "Em qual cidade ele nasceu?",
              },
              options: [
                { en: "Rio de Janeiro", pt: "Rio de Janeiro" },
                { en: "Fort Lauderdale", pt: "Fort Lauderdale" },
                { en: "Miami", pt: "Miami" },
                { en: "Boca Raton", pt: "Boca Raton" },
              ],
              correct: 3,
            },
            {
              q: {
                en: "What is his favorite song?",
                pt: "Qual a música favorita dele?",
              },
              options: [
                { en: "Hometown Glory", pt: "Hometown Glory" },
                { en: "4AM", pt: "4AM" },
                { en: "Sex and Candy", pt: "Sex and Candy" },
                { en: "21 Questions", pt: "21 Questions" },
              ],
              correct: 0,
            },
            {
              q: {
                en: "Does he love Café Cultura? True or false?",
                pt: "Ele ama o Café Cultura? Verdadeiro ou falso?",
              },
              options: [
                { en: "True", pt: "Verdadeiro" },
                { en: "False (he hates it)", pt: "Falso (ele odeia)" },
              ],
              correct: 1,
              wrongSpecial: {
                en: "Are you kidding me… he hates that place 😂",
                pt: "Tá de sacanagem… ele odeia aquele lugar 😂",
              },
            },
            {
              q: {
                en: "Who is his favorite rapper?",
                pt: "Qual o rapper favorito dele?",
              },
              options: [
                { en: "21 Savage", pt: "21 Savage" },
                { en: "Drake", pt: "Drake" },
                { en: "Nemzzz", pt: "Nemzzz" },
                { en: "Eminem", pt: "Eminem" },
              ],
              correct: 2,
            },
            {
              q: {
                en: "What is his favorite time of day?",
                pt: "Qual a hora do dia favorita dele?",
              },
              options: [
                { en: "Blue hour", pt: "Hora azul" },
                { en: "Golden hour", pt: "Hora dourada" },
                { en: "Orange hour", pt: "Hora laranja" },
                { en: "Gray hour", pt: "Hora cinza" },
              ],
              correct: 0,
            },
            {
              q: {
                en: "What is his favorite season?",
                pt: "Qual a época do ano favorita dele?",
              },
              options: [
                { en: "Winter", pt: "Inverno" },
                { en: "Summer", pt: "Verão" },
                { en: "Fall", pt: "Outono" },
                { en: "Spring", pt: "Primavera" },
              ],
              correct: 0,
            },
            {
              q: {
                en: "Which sport does he follow the most?",
                pt: "Qual o esporte que ele mais acompanha?",
              },
              options: [
                { en: "UFC", pt: "UFC" },
                { en: "Surf", pt: "Surf" },
                { en: "Soccer", pt: "Futebol" },
                { en: "Bowling", pt: "Boliche" },
              ],
              correct: 0,
              wrongSpecialIdx: 3,
              wrongSpecial: {
                en: "Bowling? Really? Next you'll say his favorite snack is celery 🎳",
                pt: "Boliche? Sério? Daqui a pouco você diz que o lanche favorito dele é aipo 🎳",
              },
            },
            {
              q: {
                en: "When is his birthday?",
                pt: "Qual o aniversário dele?",
              },
              options: [
                { en: "February 21", pt: "21 de fevereiro" },
                { en: "July 29", pt: "29 de julho" },
                { en: "January 10", pt: "10 de janeiro" },
                { en: "December 1", pt: "1 de dezembro" },
              ],
              correct: 2,
            },
          ],
        },
        us: {
          title: { en: "Us Together Quiz", pt: "Quiz de Nós Dois" },
          questions: [
            {
              q: {
                en: "What day did we meet?",
                pt: "Qual dia a gente se conheceu?",
              },
              options: [
                { en: "May 2, 2026", pt: "2 de maio de 2026" },
                { en: "May 23, 2026", pt: "23 de maio de 2026" },
                { en: "April 7, 2026", pt: "7 de abril de 2026" },
                { en: "February 31, 2026", pt: "31 de fevereiro de 2026" },
              ],
              correct: 0,
              wrongSpecialIdx: 3,
              wrongSpecial: {
                en: "February 31 doesn't even exist… nice try 😂",
                pt: "31 de fevereiro nem existe… boa tentativa 😂",
              },
            },
            {
              q: {
                en: "What animal were we joking about getting at the start?",
                pt: "Qual animal a gente ia ter de brincadeira no começo do relacionamento?",
              },
              options: [
                { en: "Cat", pt: "Gato" },
                { en: "Fish", pt: "Peixe" },
                { en: "Hamster", pt: "Hamster" },
                { en: "Dog", pt: "Cachorro" },
              ],
              correct: 1,
            },
            {
              q: {
                en: "Who has more alcohol tolerance?",
                pt: "Quem tem mais resistência à bebida?",
              },
              options: [
                { en: "Eduarda", pt: "Eduarda" },
                { en: "Thommy", pt: "Thommy" },
                { en: "We're equal", pt: "Os dois iguais" },
                { en: "Neither", pt: "Nenhum" },
              ],
              correct: 0,
            },
            {
              q: {
                en: "What was the restaurant of our first real date?",
                pt: "Qual foi o restaurante do primeiro date?",
              },
              options: [
                { en: "Bistro dos Sete Ais", pt: "Bistro dos Sete Ais" },
                { en: "Arquipélago", pt: "Arquipélago" },
                { en: "McDonald's", pt: "Mc Donald's" },
                { en: "Artezanno", pt: "Artezanno" },
              ],
              correct: 0,
            },
            {
              q: {
                en: "Who likes being the little spoon when cuddling?",
                pt: "Quem gosta de ser a conchinha menor quando estão abraçados?",
              },
              options: [
                { en: "Eduarda", pt: "Eduarda" },
                { en: "Thommy", pt: "Thommy" },
              ],
              correct: 1,
            },
            {
              q: {
                en: "Which ingredient does Eduarda remove from burgers but Thommy loves?",
                pt: "Qual ingrediente a Eduarda remove dos hambúrgueres mas o Thommy ama?",
              },
              options: [
                { en: "Tomato", pt: "Tomate" },
                { en: "Lettuce", pt: "Alface" },
                { en: "Pickles", pt: "Pickles" },
                { en: "Cheese", pt: "Queijo" },
              ],
              correct: 0,
            },
            {
              q: {
                en: "Which seasoning does Eduarda avoid and Thommy loves?",
                pt: "Qual o tempero que a Eduarda evita e o Thommy acha delícia?",
              },
              options: [
                { en: "Pepper", pt: "Pimenta" },
                { en: "Garlic", pt: "Alho" },
                { en: "Oregano", pt: "Orégano" },
                { en: "Salt", pt: "Sal" },
              ],
              correct: 1,
            },
            {
              q: {
                en: "Who usually pays the bills on dates?",
                pt: "Quem paga as contas nos dates?",
              },
              options: [
                { en: "Thommy", pt: "Thommy" },
                { en: "Both", pt: "Os dois" },
                { en: "Paulo", pt: "Paulo" },
                { en: "Eduarda", pt: "Eduarda" },
              ],
              correct: 3,
            },
            {
              q: {
                en: "What was the first movie we watched together?",
                pt: "Qual o primeiro filme que viram juntos?",
              },
              options: [
                { en: "Dead Poets Society", pt: "Sociedade dos Poetas Mortos" },
                { en: "Minions", pt: "Minions" },
                { en: "Love and Other Drugs", pt: "Love and Other Drugs" },
                { en: "The Devil's Advocate", pt: "O Advogado do Diabo" },
              ],
              correct: 2,
            },
            {
              q: {
                en: "What was the first movie we saw in the cinema together?",
                pt: "Qual o primeiro filme que vimos no cinema juntos?",
              },
              options: [
                { en: "The Odyssey", pt: "A Odisseia" },
                { en: "Spider-Man", pt: "Homem-Aranha" },
                { en: "SpongeBob", pt: "Bob Esponja" },
                { en: "Fast & Furious", pt: "Velozes e Furiosos" },
              ],
              correct: 1,
            },
            {
              q: {
                en: "_____ always asks for water at restaurants and _____ refuses to order it but always takes a sip?",
                pt: "_____ sempre pede água nos restaurantes e ______ recusa a pedir, mas sempre pede um gole?",
              },
              options: [
                { en: "Thommy / Eduarda", pt: "Thommy / Eduarda" },
                { en: "Eduarda / Thommy", pt: "Eduarda / Thommy" },
              ],
              correct: 1,
            },
            {
              q: {
                en: "_____ always orders matcha and _____ always orders espresso?",
                pt: "_____ sempre pede matcha e ______ sempre pede café expresso?",
              },
              options: [
                { en: "Eduarda / Thommy", pt: "Eduarda / Thommy" },
                { en: "Thommy / Eduarda", pt: "Thommy / Eduarda" },
              ],
              correct: 1,
            },
            {
              q: {
                en: "_____ always takes photos and _____ always covers their face?",
                pt: "_____ sempre tira fotos e ______ sempre tapa o rosto?",
              },
              options: [
                { en: "Thommy / Eduarda", pt: "Thommy / Eduarda" },
                { en: "Eduarda / Thommy", pt: "Eduarda / Thommy" },
              ],
              correct: 0,
            },
            {
              q: {
                en: "_____ always goes to sleep early and _____ always stays up yapping?",
                pt: "_____ sempre dorme cedo e ______ sempre fica tagarelando?",
              },
              options: [
                { en: "Eduarda / Thommy", pt: "Eduarda / Thommy" },
                { en: "Thommy / Eduarda", pt: "Thommy / Eduarda" },
              ],
              correct: 1,
            },
            {
              q: {
                en: "Who knows more about politics?",
                pt: "Quem manja mais de política?",
              },
              options: [
                { en: "Eduarda", pt: "Eduarda" },
                { en: "Thommy", pt: "Thommy" },
              ],
              correct: 0,
              correctSpecial: {
                en: "See, I was being nice… but we both know the real answer 😌",
                pt: "Viu, fui bonzinho… mas nós dois sabemos a resposta certa 😌",
              },
              wrongSpecial: {
                en: "I can't believe you picked me 😂😂",
                pt: "Não acredito que você selecionou eu kkkkk",
              },
            },
          ],
        },
      };

      const QUIZ_MSGS = {
        eduarda: {
          correct: {
            en: [
              "She would be proud 🌸",
              "Yes! You know your girl!",
              "Eduarda energy unlocked!",
              "Correct — she taught you well!",
              "Nailed her detail!",
              "That's pure Eduarda knowledge!",
              "She'd high-five you for that!",
              "Exactly how she is 😌",
            ],
            pt: [
              "Ela ficaria orgulhosa 🌸",
              "Sim! Você conhece a sua menina!",
              "Energia Eduarda liberada!",
              "Correto — ela te ensinou bem!",
              "Acertou o detalhe dela!",
              "Isso é conhecimento puro dela!",
              "Ela te daria um high-five!",
              "Exatamente como ela é 😌",
            ],
          },
          wrong: {
            en: [
              "You should know that about her… 👀",
              "Oof. Did you even pay attention to Eduarda?",
              "Wrong! Go ask her yourself.",
              "Nope. She deserves better memory from you.",
              "That one would make her raise an eyebrow 🤨",
              "Incorrect. Studying Eduarda 101 is required.",
              "Not quite… reread her texts?",
              "Missed it! She notices everything, you know.",
            ],
            pt: [
              "Você deveria saber isso sobre ela… 👀",
              "Eita. Você presta atenção na Eduarda?",
              "Errado! Vai perguntar pra ela.",
              "Não. Ela merece memória melhor de você.",
              "Essa faria ela levantar a sobrancelha 🤨",
              "Incorreto. Estudo Eduarda 101 é obrigatório.",
              "Quase… relê as mensagens dela?",
              "Errou! Ela nota tudo, sabia?",
            ],
          },
          streak: {
            en: {
              3: "3 about her in a row! 🌸",
              5: "5 streak on Eduarda — she's impressed!",
              7: "7 correct about her — legendary boyfriend energy!",
              10: "10 in a row on Eduarda?! You live in her brain!",
            },
            pt: {
              3: "3 sobre ela seguidas! 🌸",
              5: "Sequência de 5 na Eduarda — ela tá impressionada!",
              7: "7 certas sobre ela — energia de namorado lendário!",
              10: "10 seguidas na Eduarda?! Você mora na cabeça dela!",
            },
          },
          reviews: {
            en: {
              low: "0–25%: Do you… know Eduarda? At all? Maybe sit her down for a long talk. Or just open the chat and start over. She still loves you though 😂",
              mid: "26–60%: Not a disaster, but not boyfriend-of-the-year material either. You know some things about her — now go learn the rest. She's worth the study time.",
              good: "61–80%: Solid Eduarda knowledge! You clearly pay attention most of the time. A few gaps, but she'd still be proud of the effort.",
              great:
                "81–98%: Almost perfect. You basically have a degree in Eduarda Studies. Very impressive — she chose well.",
              near: "99%: ONE point off perfection on the Eduarda quiz. So close it hurts. Still incredibly good.",
              perfect:
                "100%: Absolute legend. You know Eduarda better than she knows herself sometimes. She is so lucky to have someone who pays this much attention. This is the kind of love that shows up in the details. 🌸💚",
            },
            pt: {
              low: "0–25%: Você… conhece a Eduarda? De verdade? Talvez sentar e conversar bastante. Ou abrir o chat e recomeçar. Ela ainda te ama, hein 😂",
              mid: "26–60%: Não é desastre, mas também não é namorado do ano. Você sabe algumas coisas — agora vai aprender o resto. Ela vale o estudo.",
              good: "61–80%: Conhecimento sólido da Eduarda! Você presta atenção na maior parte do tempo. Alguns furos, mas ela ficaria orgulhosa do esforço.",
              great:
                "81–98%: Quase perfeito. Você basicamente tem diploma em Estudos Eduarda. Muito impressionante — ela escolheu bem.",
              near: "99%: UM ponto da perfeição no quiz da Eduarda. Tão perto que dói. Ainda assim incrível.",
              perfect:
                "100%: Lenda absoluta. Você conhece a Eduarda melhor do que ela mesma às vezes. Ela tem muita sorte de ter alguém que presta tanta atenção. Esse é o tipo de amor que aparece nos detalhes. 🌸💚",
            },
          },
        },
        thommy: {
          correct: {
            en: [
              "That's my boy 🦉",
              "Yes! You know Thommy!",
              "Thommy core unlocked!",
              "Correct — he would approve!",
              "Nailed his detail!",
              "Pure Thommy knowledge!",
              "He’d nod and say ‘exact’!",
              "That’s how he is 😌",
            ],
            pt: [
              "Esse é o meu menino 🦉",
              "Sim! Você conhece o Thommy!",
              "Essência Thommy liberada!",
              "Correto — ele aprovaria!",
              "Acertou o detalhe dele!",
              "Conhecimento puro do Thommy!",
              "Ele assentiria e diria ‘exato’!",
              "É assim que ele é 😌",
            ],
          },
          wrong: {
            en: [
              "You should know that about him… 👀",
              "Oof. Thommy is judging you right now.",
              "Wrong! Go do jiu-jitsu and think about it.",
              "Nope. He deserves better memory from you.",
              "That one would make him go ‘no way’ 😒",
              "Incorrect. Thommy 101 is required reading.",
              "Not quite… reread his voice notes?",
              "Missed it! He notices more than you think.",
            ],
            pt: [
              "Você deveria saber isso sobre ele… 👀",
              "Eita. O Thommy tá te julgando agora.",
              "Errado! Vai treinar jiu e pensar nisso.",
              "Não. Ele merece memória melhor de você.",
              "Essa faria ele falar ‘no way’ 😒",
              "Incorreto. Thommy 101 é leitura obrigatória.",
              "Quase… relê os áudios dele?",
              "Errou! Ele nota mais do que você pensa.",
            ],
          },
          streak: {
            en: {
              3: "3 about him in a row! 🦉",
              5: "5 streak on Thommy — he's impressed!",
              7: "7 correct about him — legendary girlfriend energy!",
              10: "10 in a row on Thommy?! You live in his brain!",
            },
            pt: {
              3: "3 sobre ele seguidas! 🦉",
              5: "Sequência de 5 no Thommy — ele tá impressionado!",
              7: "7 certas sobre ele — energia de namorada lendária!",
              10: "10 seguidas no Thommy?! Você mora na cabeça dele!",
            },
          },
          reviews: {
            en: {
              low: "0–25%: Do you… know Thommy? The owl guy? The jiu-jitsu one? Maybe sit him down. Or just open the chat. He still loves you 😂",
              mid: "26–60%: Not terrible, but not ‘knows him inside out’ either. You got some things right — now go learn the rest. He’s worth it.",
              good: "61–80%: Solid Thommy knowledge! You clearly listen most of the time. A few gaps, but he’d still be proud.",
              great:
                "81–98%: Almost perfect. You basically have a degree in Thommy Studies. Very impressive — he chose well.",
              near: "99%: ONE point off perfection on the Thommy quiz. So close it hurts. Still incredibly good.",
              perfect:
                "100%: Absolute legend. You know Thommy better than he knows himself sometimes. He is so lucky to have someone who pays this much attention. This is the kind of love that shows up in the details. 🦉💚",
            },
            pt: {
              low: "0–25%: Você… conhece o Thommy? O da coruja? O do jiu-jitsu? Talvez sentar e conversar. Ou abrir o chat. Ele ainda te ama 😂",
              mid: "26–60%: Não é péssimo, mas também não é ‘conhece ele de cabo a rabo’. Você acertou algumas — agora vai aprender o resto. Ele vale a pena.",
              good: "61–80%: Conhecimento sólido do Thommy! Você escuta na maior parte do tempo. Alguns furos, mas ele ficaria orgulhoso.",
              great:
                "81–98%: Quase perfeito. Você basicamente tem diploma em Estudos Thommy. Muito impressionante — ele escolheu bem.",
              near: "99%: UM ponto da perfeição no quiz do Thommy. Tão perto que dói. Ainda assim incrível.",
              perfect:
                "100%: Lenda absoluta. Você conhece o Thommy melhor do que ele mesmo às vezes. Ele tem muita sorte de ter alguém que presta tanta atenção. Esse é o tipo de amor que aparece nos detalhes. 🦉💚",
            },
          },
        },
        us: {
          correct: {
            en: [
              "Us knowledge unlocked 💚",
              "Yes! You remember us!",
              "Couple memory activated!",
              "Correct — that’s our story!",
              "Nailed an us detail!",
              "That’s pure ‘us’ energy!",
              "We’d high-five for that!",
              "Exactly how we are 😌",
            ],
            pt: [
              "Conhecimento de nós liberado 💚",
              "Sim! Você lembra da gente!",
              "Memória de casal ativada!",
              "Correto — essa é a nossa história!",
              "Acertou um detalhe nosso!",
              "Isso é energia pura de ‘nós’!",
              "A gente te daria um high-five!",
              "Exatamente como a gente é 😌",
            ],
          },
          wrong: {
            en: [
              "You should know that about us… 👀",
              "Oof. Our shared history is disappointed.",
              "Wrong! Relive the dates in your head.",
              "Nope. We deserve better couple memory.",
              "That one would make both of us side-eye you 🤨",
              "Incorrect. Us 101 is required.",
              "Not quite… open the photo album?",
              "Missed it! We remember everything, you know.",
            ],
            pt: [
              "Você deveria saber isso sobre a gente… 👀",
              "Eita. Nossa história em comum tá decepcionada.",
              "Errado! Reviva os dates na cabeça.",
              "Não. A gente merece memória de casal melhor.",
              "Essa faria os dois te olhar de lado 🤨",
              "Incorreto. Nós 101 é obrigatório.",
              "Quase… abre o álbum de fotos?",
              "Errou! A gente lembra de tudo, sabia?",
            ],
          },
          streak: {
            en: {
              3: "3 about us in a row! 💚",
              5: "5 streak on us — couple goals!",
              7: "7 correct about us — legendary partner energy!",
              10: "10 in a row on us?! You live in our story!",
            },
            pt: {
              3: "3 sobre a gente seguidas! 💚",
              5: "Sequência de 5 em nós — couple goals!",
              7: "7 certas sobre a gente — energia de parceiro lendário!",
              10: "10 seguidas em nós?! Você mora na nossa história!",
            },
          },
          reviews: {
            en: {
              low: "0–25%: Do you… know us as a couple? At all? Maybe sit down with the album and the chat. We still love you 😂",
              mid: "26–60%: Not a disaster, but not ‘knows our story by heart’ either. You got some moments right — now go relive the rest.",
              good: "61–80%: Solid knowledge of us! You clearly remember a lot of our story. A few gaps, but we’re proud of the effort.",
              great:
                "81–98%: Almost perfect. You basically have a degree in Us Studies. Very impressive — we chose well.",
              near: "99%: ONE point off perfection on the Us quiz. So close it hurts. Still incredibly good.",
              perfect:
                "100%: Absolute legend. You know our story better than we do sometimes. We are so lucky to have someone who pays this much attention to us. This is the kind of love that shows up in every little shared detail. 💚✨",
            },
            pt: {
              low: "0–25%: Você… conhece a gente como casal? De verdade? Talvez sentar com o álbum e o chat. A gente ainda te ama 😂",
              mid: "26–60%: Não é desastre, mas também não é ‘sabe a história de cor’. Você acertou alguns momentos — agora vai reviver o resto.",
              good: "61–80%: Conhecimento sólido de nós! Você lembra bastante da nossa história. Alguns furos, mas estamos orgulhosos do esforço.",
              great:
                "81–98%: Quase perfeito. Você basicamente tem diploma em Estudos Nós. Muito impressionante — a gente escolheu bem.",
              near: "99%: UM ponto da perfeição no quiz de nós. Tão perto que dói. Ainda assim incrível.",
              perfect:
                "100%: Lenda absoluta. Você conhece a nossa história melhor do que a gente às vezes. Temos muita sorte de ter alguém que presta tanta atenção em nós. Esse é o tipo de amor que aparece em cada detalhezinho compartilhado. 💚✨",
            },
          },
        },
      };

      let quizState = {
        id: null,
        idx: 0,
        score: 0,
        streak: 0,
        answered: false,
      };

      function quizLang() {
        return currentLanguage() === "pt" ? "pt" : "en";
      }
      function qText(obj) {
        if (!obj) return "";
        return obj[quizLang()] || obj.en || obj;
      }

      function showQuizToast(msg, good) {
        const t = document.getElementById("quizToast");
        t.textContent = msg;
        t.className = "quiz-toast show " + (good ? "good" : "bad");
        clearTimeout(showQuizToast._tm);
        showQuizToast._tm = setTimeout(() => t.classList.remove("show"), 2200);
      }

      function startQuiz(id) {
        quizState = { id, idx: 0, score: 0, streak: 0, answered: false };
        document.getElementById("quizSelect").style.display = "none";
        document.getElementById("quizResult").classList.remove("active");
        document.getElementById("quizPlay").classList.add("active");
        renderQuizQuestion();
      }

      function quitQuiz() {
        document.getElementById("quizPlay").classList.remove("active");
        document.getElementById("quizResult").classList.remove("active");
        document.getElementById("quizSelect").style.display = "";
      }

      function renderQuizQuestion() {
        const data = QUIZ_DATA[quizState.id];
        const total = data.questions.length;
        const q = data.questions[quizState.idx];
        const lang = quizLang();

        document.getElementById("quizProgressFill").style.width =
          (quizState.idx / total) * 100 + "%";
        document.getElementById("quizProgressLabel").textContent =
          lang === "pt"
            ? `Pergunta ${quizState.idx + 1} de ${total}`
            : `Question ${quizState.idx + 1} of ${total}`;
        document.getElementById("quizScoreLive").textContent =
          lang === "pt"
            ? `Pontuação: ${quizState.score}`
            : `Score: ${quizState.score}`;
        document.getElementById("quizQNum").textContent =
          lang === "pt"
            ? `Pergunta ${quizState.idx + 1}`
            : `Question ${quizState.idx + 1}`;
        document.getElementById("quizQuestion").textContent = qText(q.q);
        document.getElementById("quizStreak").textContent = "";
        document.getElementById("quizNextBtn").style.display = "none";
        quizState.answered = false;

        const fb = document.getElementById("quizFeedback");
        fb.className = "quiz-feedback";
        fb.textContent = "";

        const opts = document.getElementById("quizOptions");
        opts.innerHTML = "";
        q.options.forEach((opt, i) => {
          const btn = document.createElement("button");
          btn.className = "quiz-opt";
          btn.type = "button";
          btn.textContent = qText(opt);
          btn.addEventListener("click", () => answerQuiz(i));
          opts.appendChild(btn);
        });
      }

      function answerQuiz(choice) {
        if (quizState.answered) return;
        quizState.answered = true;

        const data = QUIZ_DATA[quizState.id];
        const q = data.questions[quizState.idx];
        const lang = quizLang();
        const opts = document.querySelectorAll("#quizOptions .quiz-opt");
        const fb = document.getElementById("quizFeedback");

        opts.forEach((b, i) => {
          b.disabled = true;
          if (i === q.correct) b.classList.add("correct");
          else if (i === choice) b.classList.add("wrong");
          else b.classList.add("dim");
        });

        const msgs = QUIZ_MSGS[quizState.id];
        if (choice === q.correct) {
          quizState.score++;
          quizState.streak++;
          let msg =
            msgs.correct[lang][
              Math.floor(Math.random() * msgs.correct[lang].length)
            ];
          if (q.correctSpecial) msg = qText(q.correctSpecial);
          fb.textContent = msg;
          fb.className = "quiz-feedback show ok";
          showQuizToast(msg, true);

          const streakMsgs = msgs.streak[lang];
          if (streakMsgs[quizState.streak]) {
            document.getElementById("quizStreak").textContent =
              streakMsgs[quizState.streak];
            showQuizToast(streakMsgs[quizState.streak], true);
          }
        } else {
          quizState.streak = 0;
          let msg =
            msgs.wrong[lang][
              Math.floor(Math.random() * msgs.wrong[lang].length)
            ];
          if (
            q.wrongSpecial &&
            (q.wrongSpecialIdx === undefined || q.wrongSpecialIdx === choice)
          ) {
            msg = qText(q.wrongSpecial);
          }
          fb.textContent = msg;
          fb.className = "quiz-feedback show bad";
          showQuizToast(msg, false);
        }

        document.getElementById("quizScoreLive").textContent =
          lang === "pt"
            ? `Pontuação: ${quizState.score}`
            : `Score: ${quizState.score}`;
        document.getElementById("quizNextBtn").style.display = "inline-flex";
        document.getElementById("quizProgressFill").style.width =
          ((quizState.idx + 1) / data.questions.length) * 100 + "%";
      }

      function nextQuizQuestion() {
        const data = QUIZ_DATA[quizState.id];
        if (quizState.idx + 1 >= data.questions.length) {
          finishQuiz();
        } else {
          quizState.idx++;
          renderQuizQuestion();
        }
      }

      function finishQuiz() {
        const data = QUIZ_DATA[quizState.id];
        const total = data.questions.length;
        const score = quizState.score;
        const pct = Math.round((score / total) * 100);
        const lang = quizLang();
        const msgs = QUIZ_MSGS[quizState.id];

        document.getElementById("quizPlay").classList.remove("active");
        document.getElementById("quizResult").classList.add("active");
        document.getElementById("quizFinalScore").textContent =
          score + "/" + total;
        document.getElementById("quizFinalPct").textContent = pct + "%";

        let reviewKey = "low";
        if (pct === 100) reviewKey = "perfect";
        else if (pct === 99) reviewKey = "near";
        else if (pct >= 81) reviewKey = "great";
        else if (pct >= 61) reviewKey = "good";
        else if (pct >= 26) reviewKey = "mid";

        const titles = {
          en: {
            perfect: "Perfect score! 💚",
            near: "So close…",
            great: "Almost perfect!",
            good: "Really solid!",
            mid: "Could be better…",
            low: "Oof…",
          },
          pt: {
            perfect: "Nota perfeita! 💚",
            near: "Quase…",
            great: "Quase perfeito!",
            good: "Bem sólido!",
            mid: "Dá pra melhorar…",
            low: "Eita…",
          },
        };
        document.getElementById("quizResultTitle").textContent =
          titles[lang][reviewKey];
        document.getElementById("quizReview").textContent =
          msgs.reviews[lang][reviewKey];

        if (pct === 100) {
          // Extra celebration for a perfect score
          const perfectToasts = {
            eduarda: {
              en: "100% on Eduarda! She is so proud of you 🌸✨",
              pt: "100% na Eduarda! Ela está tão orgulhosa de você 🌸✨",
            },
            thommy: {
              en: "100% on Thommy! He is so proud of you 🦉✨",
              pt: "100% no Thommy! Ele está tão orgulhoso de você 🦉✨",
            },
            us: {
              en: "100% on Us! We are so proud of you 💚✨",
              pt: "100% em Nós! Estamos tão orgulhosos de você 💚✨",
            },
          };
          showQuizToast(perfectToasts[quizState.id][lang], true);
          // Burst of hearts
          for (let i = 0; i < 28; i++) {
            const h = document.createElement("div");
            h.className = "floating-heart";
            h.textContent =
              quizState.id === "eduarda"
                ? "🌸"
                : quizState.id === "thommy"
                  ? "🦉"
                  : "💚";
            h.style.left = 20 + Math.random() * 60 + "vw";
            h.style.top = 60 + Math.random() * 30 + "vh";
            h.style.fontSize = 16 + Math.random() * 18 + "px";
            document.body.appendChild(h);
            const dx = Math.random() * 160 - 80;
            const dur = 1800 + Math.random() * 1200;
            h.animate(
              [
                { transform: "translate(0,0)", opacity: 1 },
                {
                  transform: `translate(${dx}px, -${260 + Math.random() * 160}px)`,
                  opacity: 0,
                },
              ],
              { duration: dur, easing: "ease-out" },
            );
            setTimeout(() => h.remove(), dur + 50);
          }
        }
      }

      document.querySelectorAll(".quiz-select-card").forEach((card) => {
        card.addEventListener("click", () => startQuiz(card.dataset.quiz));
      });
      document
        .getElementById("quizNextBtn")
        .addEventListener("click", nextQuizQuestion);
      document
        .getElementById("quizQuitBtn")
        .addEventListener("click", quitQuiz);
      document
        .getElementById("quizHomeBtn")
        .addEventListener("click", quitQuiz);
      document.getElementById("quizRetryBtn").addEventListener("click", () => {
        if (quizState.id) startQuiz(quizState.id);
      });

      /* ================================================================
   MUSIC PLAYER (+ Firebase sync, same idea as Bucket List)
   ---------------------------------------------------------------
   Playlist categories still come from CONFIG.playlists (labels).
   Songs live in Firestore collection "musicsongs" when Firebase
   is configured — both of you can add/edit/delete and it syncs live.
   Without Firebase, songs stay from CONFIG / this browser only.

   Each song can be source: "youtube" (default) or "soundcloud".
   youtubeId = YouTube video id or URL
   soundcloudUrl = full SoundCloud track page URL
   ================================================================ */
      let musicState = {
        playlistId: null,
        trackIdx: 0,
        editingId: null,
        currentSongId: null,
      };
      let musicDb = null;
      let musicSyncLive = false;
      // All songs from DB (or local): { id, playlistId, title, artist, youtubeId, description, descriptionPt }
      let musicSongs = [];

      function setMusicSyncPill() {
        const pill = document.getElementById("musicSyncPill");
        if (!pill) return;
        if (musicSyncLive) {
          pill.textContent = tr("🟢 Synced — songs save for both of you.");
          pill.className = "music-sync-pill live";
        } else {
          pill.textContent = tr(
            "🟡 Not synced yet — songs only stay on this device.",
          );
          pill.className = "music-sync-pill local";
        }
      }

      function getSongsForPlaylist(playlistId) {
        return musicSongs
          .map((s, i) => ({ ...s, __idx: i }))
          .filter((s) => s.playlistId === playlistId)
          .sort((a, b) => {
            // Songs without an "order" yet (added before this feature existed)
            // fall back to their original arrival order, and always sort after
            // any song that already has a real order value.
            const ao =
              typeof a.order === "number" ? a.order : 1000000 + a.__idx;
            const bo =
              typeof b.order === "number" ? b.order : 1000000 + b.__idx;
            return ao - bo;
          });
      }

      // direction: -1 to move up, +1 to move down.
      // Rebuilds the playlist order as contiguous 0,1,2,... after the move so
      // songs that never had an "order" field (legacy) can't collide with real
      // order values and get stuck at the top/bottom.
      function moveSongOrder(song, direction) {
        const songs = getSongsForPlaylist(song.playlistId);
        const idx = songs.findIndex((s) => s.id === song.id);
        const swapIdx = idx + direction;
        if (idx < 0 || swapIdx < 0 || swapIdx >= songs.length) return;

        // Physically reorder the sorted list, then assign clean sequential orders
        const reordered = songs.slice();
        const [moved] = reordered.splice(idx, 1);
        reordered.splice(swapIdx, 0, moved);

        const updates = reordered.map((s, i) => ({ id: s.id, order: i }));

        if (musicSyncLive && musicDb) {
          const batch = musicDb.batch();
          let wrote = 0;
          updates.forEach((u) => {
            if (u.id && !String(u.id).startsWith("local-")) {
              batch.update(musicDb.collection("musicsongs").doc(u.id), {
                order: u.order,
              });
              wrote++;
            } else {
              const local = musicSongs.find((s) => s.id === u.id);
              if (local) local.order = u.order;
            }
          });
          if (wrote) batch.commit().catch(() => {});
          else renderMusicTracks();
        } else {
          updates.forEach((u) => {
            const local = musicSongs.find((s) => s.id === u.id);
            if (local) local.order = u.order;
          });
          renderMusicTracks();
        }

        // Keep the currently playing song highlighted after reorder
        if (musicState.currentSongId) {
          const newIdx = reordered.findIndex(
            (s) => s.id === musicState.currentSongId,
          );
          if (newIdx >= 0) musicState.trackIdx = newIdx;
        }
      }

      function seedMusicFromConfig() {
        const seeded = [];
        (CONFIG.playlists || []).forEach((pl) => {
          (pl.songs || []).forEach((song, i) => {
            seeded.push({
              id: "local-" + pl.id + "-" + i,
              playlistId: pl.id,
              order: i,
              title: song.title,
              artist: song.artist || "",
              source: song.source || "youtube",
              youtubeId: song.youtubeId || "",
              soundcloudUrl: song.soundcloudUrl || "",
              description: song.description || "",
              descriptionPt: song.descriptionPt || "",
            });
          });
        });
        return seeded;
      }

      function showMusicCopyrightBanner() {
        const banner = document.getElementById("musicCopyrightBanner");
        if (!banner) return;
        const dismissed =
          sessionStorage.getItem("musicCopyrightDismissed") === "1";
        if (dismissed) {
          banner.style.display = "none";
          return;
        }
        banner.style.display = "flex";
        const pt = currentLanguage() === "pt";
        document.getElementById("musicCopyrightTitle").textContent = pt
          ? "Sobre os embeds"
          : "Note about embeds";
        document.getElementById("musicCopyrightText").textContent = pt
          ? "Alguns vídeos do YouTube não tocam aqui por causa de restrições de direitos autorais do artista ou gravadora. Se uma música falhar, tente outro upload da mesma música ou use um link do SoundCloud."
          : "Some YouTube videos won't play here because of copyright restrictions set by the artist or label. If a song fails, try another upload of the same song, or use a SoundCloud link instead.";
      }

      function updateMusicSourceFields() {
        const source =
          document.querySelector('input[name="musicSource"]:checked')?.value ||
          "youtube";
        document.getElementById("musicLinkFieldYt").style.display =
          source === "youtube" ? "" : "none";
        document.getElementById("musicLinkFieldSc").style.display =
          source === "soundcloud" ? "" : "none";
      }

      function setMusicFormMode(editing) {
        const heading = document.getElementById("musicAddHeading");
        const btn = document.getElementById("musicAddBtn");
        const cancel = document.getElementById("musicCancelEditBtn");
        const pt = currentLanguage() === "pt";
        if (editing) {
          if (heading)
            heading.textContent = pt ? "Editar música ♥" : "Edit song ♥";
          if (btn) btn.textContent = pt ? "Salvar ♥" : "Save ♥";
          if (cancel) cancel.style.display = "";
        } else {
          if (heading)
            heading.textContent = pt ? "Adicionar música ♥" : "Add a song ♥";
          if (btn) btn.textContent = pt ? "Adicionar ♥" : "Add song ♥";
          if (cancel) cancel.style.display = "none";
          musicState.editingId = null;
        }
      }

      function fillMusicAddPlaylistSelect() {
        const sel = document.getElementById("musicAddPlaylist");
        if (!sel) return;
        const current = sel.value || musicState.playlistId;
        sel.innerHTML = "";
        (CONFIG.playlists || []).forEach((pl) => {
          const opt = document.createElement("option");
          opt.value = pl.id;
          opt.textContent =
            currentLanguage() === "pt" ? pl.labelPt || pl.label : pl.label;
          sel.appendChild(opt);
        });
        if (current) sel.value = current;
      }

      function initMusic() {
        const playlists = CONFIG.playlists || [];
        const nav = document.getElementById("musicPlaylistNav");
        if (!nav) return;
        nav.innerHTML = "";
        playlists.forEach((pl, i) => {
          const btn = document.createElement("button");
          btn.className = "music-pl-btn" + (i === 0 ? " active" : "");
          btn.type = "button";
          btn.dataset.id = pl.id;
          btn.textContent =
            currentLanguage() === "pt" ? pl.labelPt || pl.label : pl.label;
          btn.addEventListener("click", () => selectMusicPlaylist(pl.id));
          nav.appendChild(btn);
        });
        fillMusicAddPlaylistSelect();
        setMusicFormMode(false);
        updateMusicSourceFields();
        showMusicCopyrightBanner();

        if (playlists.length) selectMusicPlaylist(playlists[0].id);

        document
          .getElementById("musicAddBtn")
          ?.addEventListener("click", saveMusicSong);
        document
          .getElementById("musicCancelEditBtn")
          ?.addEventListener("click", () => {
            clearMusicAddForm();
            setMusicFormMode(false);
          });
        document.querySelectorAll('input[name="musicSource"]').forEach((r) => {
          r.addEventListener("change", updateMusicSourceFields);
        });
        document
          .getElementById("musicCopyrightDismiss")
          ?.addEventListener("click", () => {
            sessionStorage.setItem("musicCopyrightDismissed", "1");
            const b = document.getElementById("musicCopyrightBanner");
            if (b) b.style.display = "none";
          });
      }

      function selectMusicPlaylist(id) {
        musicState.playlistId = id;
        musicState.trackIdx = 0;
        musicState.currentSongId = null;
        document.querySelectorAll(".music-pl-btn").forEach((b) => {
          b.classList.toggle("active", b.dataset.id === id);
        });
        const pl = (CONFIG.playlists || []).find((p) => p.id === id);
        const note = document.getElementById("musicNote");
        if (pl) {
          note.textContent =
            currentLanguage() === "pt"
              ? pl.descriptionPt || pl.description || ""
              : pl.description || "";
        }
        const sel = document.getElementById("musicAddPlaylist");
        if (sel) sel.value = id;
        renderMusicTracks();
        const songs = getSongsForPlaylist(id);
        if (songs.length) {
          playMusicTrack(0);
        } else {
          document.getElementById("musicPlayerWrap").style.display = "none";
          document.getElementById("musicEmbed").innerHTML = "";
        }
      }

      function renderMusicTracks() {
        const songs = getSongsForPlaylist(musicState.playlistId);
        const list = document.getElementById("musicTrackList");
        list.innerHTML = "";
        if (!songs.length) {
          list.innerHTML = `<p class="music-empty">${tr("No songs in this playlist yet.")}</p>`;
          return;
        }
        songs.forEach((song, i) => {
          const isActive = musicState.currentSongId
            ? song.id === musicState.currentSongId
            : i === musicState.trackIdx;
          const row = document.createElement("div");
          row.className = "music-track" + (isActive ? " active" : "");
          const srcLabel = song.source === "soundcloud" ? "SC" : "YT";
          row.innerHTML = `
      <span class="track-num">${i + 1}</span>
      <span class="track-info" style="cursor:pointer;">
        <div class="track-title">${song.title}</div>
        <div class="track-artist">${song.artist || ""} · ${srcLabel}</div>
      </span>
      <span class="track-play" style="cursor:pointer;">${isActive ? "♪" : "▶"}</span>
      <div class="track-move-group">
        <button type="button" class="track-move track-move-up" aria-label="${tr("Move up")}" title="${tr("Move up")}">↑</button>
        <button type="button" class="track-move track-move-down" aria-label="${tr("Move down")}" title="${tr("Move down")}">↓</button>
      </div>
      <button type="button" class="track-edit" aria-label="Edit" title="Edit">✎</button>
      <button type="button" class="track-del" aria-label="Delete" title="Delete">✕</button>
    `;
          row
            .querySelector(".track-info")
            .addEventListener("click", () => playMusicTrack(i));
          row
            .querySelector(".track-play")
            .addEventListener("click", () => playMusicTrack(i));
          row.querySelector(".track-num").style.cursor = "pointer";
          row
            .querySelector(".track-num")
            .addEventListener("click", () => playMusicTrack(i));
          const upBtn = row.querySelector(".track-move-up");
          const downBtn = row.querySelector(".track-move-down");
          if (i === 0) upBtn.disabled = true;
          if (i === songs.length - 1) downBtn.disabled = true;
          upBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            moveSongOrder(song, -1);
          });
          downBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            moveSongOrder(song, 1);
          });
          row.querySelector(".track-edit").addEventListener("click", (e) => {
            e.stopPropagation();
            startEditMusicSong(song);
          });
          row.querySelector(".track-del").addEventListener("click", (e) => {
            e.stopPropagation();
            deleteMusicSong(song);
          });
          list.appendChild(row);
        });
      }

      function extractYoutubeId(raw) {
        if (!raw) return "";
        const s = String(raw).trim();
        if (/^[a-zA-Z0-9_-]{11}$/.test(s)) return s;
        const m = s.match(
          /(?:youtu\.be\/|v=|embed\/|shorts\/)([a-zA-Z0-9_-]{11})/,
        );
        return m ? m[1] : s;
      }

      function playMusicTrack(idx) {
        const songs = getSongsForPlaylist(musicState.playlistId);
        if (!songs[idx]) return;
        musicState.trackIdx = idx;
        const song = songs[idx];
        musicState.currentSongId = song.id;
        const source = song.source || "youtube";
        const wrap = document.getElementById("musicPlayerWrap");
        const embed = document.getElementById("musicEmbed");
        wrap.style.display = "block";

        if (source === "soundcloud") {
          const scUrl = song.soundcloudUrl || song.youtubeId || "";
          const playerUrl =
            "https://w.soundcloud.com/player/?url=" +
            encodeURIComponent(scUrl) +
            "&color=%234F6F52&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false";
          embed.classList.add("soundcloud");
          embed.innerHTML = `<iframe scrolling="no" frameborder="no" allow="autoplay" src="${playerUrl}" title="${song.title}" loading="lazy"></iframe>`;
          const openLink = document.getElementById("musicOpenLink");
          openLink.href = scUrl.startsWith("http")
            ? scUrl
            : "https://soundcloud.com/" + scUrl;
          openLink.title =
            currentLanguage() === "pt"
              ? "Abrir no SoundCloud"
              : "Open on SoundCloud";
        } else {
          const videoId = extractYoutubeId(song.youtubeId);
          embed.classList.remove("soundcloud");
          embed.innerHTML = `<iframe src="https://www.youtube-nocookie.com/embed/${videoId}?rel=0&modestbranding=1&playsinline=1" title="${song.title}" referrerpolicy="strict-origin-when-cross-origin" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen loading="lazy"></iframe>`;
          const openLink = document.getElementById("musicOpenLink");
          openLink.href = "https://www.youtube.com/watch?v=" + videoId;
          openLink.title =
            currentLanguage() === "pt" ? "Abrir no YouTube" : "Open on YouTube";
        }

        document.getElementById("musicNowLabel").textContent =
          tr("Now playing");
        document.getElementById("musicNowTitle").textContent = song.title;
        document.getElementById("musicNowArtist").textContent =
          song.artist || "";
        const desc =
          currentLanguage() === "pt"
            ? song.descriptionPt || song.description || ""
            : song.description || "";
        const descEl = document.getElementById("musicNowDesc");
        descEl.textContent = desc;
        descEl.style.display = desc ? "" : "none";
        document
          .getElementById("musicOpenLink")
          .setAttribute(
            "aria-label",
            document.getElementById("musicOpenLink").title,
          );
        renderMusicTracks();
      }

      function collectMusicFormPayload() {
        const playlistId =
          document.getElementById("musicAddPlaylist")?.value ||
          musicState.playlistId;
        const title = (
          document.getElementById("musicAddTitleInput")?.value || ""
        ).trim();
        const artist = (
          document.getElementById("musicAddArtist")?.value || ""
        ).trim();
        const source =
          document.querySelector('input[name="musicSource"]:checked')?.value ||
          "youtube";
        const description = (
          document.getElementById("musicAddDescEn")?.value || ""
        ).trim();
        const descriptionPt = (
          document.getElementById("musicAddDescPt")?.value || ""
        ).trim();
        const ytLink = (
          document.getElementById("musicAddLink")?.value || ""
        ).trim();
        const scLink = (
          document.getElementById("musicAddScLink")?.value || ""
        ).trim();
        const youtubeId = source === "youtube" ? extractYoutubeId(ytLink) : "";
        const soundcloudUrl = source === "soundcloud" ? scLink : "";

        if (!title) {
          alert(
            currentLanguage() === "pt"
              ? "Preencha o título da música."
              : "Please fill in the song title.",
          );
          return null;
        }
        if (source === "youtube" && !youtubeId) {
          alert(
            currentLanguage() === "pt"
              ? "Preencha o link/ID do YouTube."
              : "Please fill in the YouTube link/ID.",
          );
          return null;
        }
        if (source === "soundcloud" && !soundcloudUrl) {
          alert(
            currentLanguage() === "pt"
              ? "Cole o link da faixa no SoundCloud."
              : "Paste the SoundCloud track link.",
          );
          return null;
        }

        return {
          playlistId,
          title,
          artist,
          source,
          youtubeId,
          soundcloudUrl,
          description,
          descriptionPt,
        };
      }

      function saveMusicSong() {
        const payload = collectMusicFormPayload();
        if (!payload) return;

        if (musicState.editingId) {
          // UPDATE
          if (
            musicSyncLive &&
            musicDb &&
            !String(musicState.editingId).startsWith("local-")
          ) {
            musicDb
              .collection("musicsongs")
              .doc(musicState.editingId)
              .update(payload)
              .then(() => {
                notify("songUpdated");
                clearMusicAddForm();
                setMusicFormMode(false);
              })
              .catch(() =>
                alert(
                  currentLanguage() === "pt"
                    ? "Não deu pra salvar."
                    : "Could not save.",
                ),
              );
          } else {
            const idx = musicSongs.findIndex(
              (s) => s.id === musicState.editingId,
            );
            if (idx >= 0) musicSongs[idx] = { ...musicSongs[idx], ...payload };
            clearMusicAddForm();
            setMusicFormMode(false);
            notify("songUpdated");
            if (musicState.playlistId === payload.playlistId) {
              renderMusicTracks();
              const songs = getSongsForPlaylist(payload.playlistId);
              const playIdx = songs.findIndex(
                (s) =>
                  s.id === musicState.editingId || s.title === payload.title,
              );
              if (playIdx >= 0) playMusicTrack(playIdx);
            }
          }
          return;
        }

        // ADD — new songs go to the end of their playlist's order
        const existingInPl = getSongsForPlaylist(payload.playlistId);
        const maxOrder = existingInPl.reduce(
          (max, s) => Math.max(max, typeof s.order === "number" ? s.order : 0),
          -1,
        );
        const orderedPayload = { ...payload, order: maxOrder + 1 };

        if (musicSyncLive && musicDb) {
          musicDb
            .collection("musicsongs")
            .add({
              ...orderedPayload,
              createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            })
            .then(() => {
              notify("songCreated");
              clearMusicAddForm();
              setMusicFormMode(false);
            })
            .catch(() => {
              alert(
                currentLanguage() === "pt"
                  ? "Não deu pra salvar. Confira as regras do Firebase."
                  : "Could not save. Check Firebase rules.",
              );
            });
        } else {
          musicSongs.push({ id: "local-" + Date.now(), ...orderedPayload });
          clearMusicAddForm();
          setMusicFormMode(false);
          notify("songCreated");
          if (musicState.playlistId === payload.playlistId) {
            renderMusicTracks();
            const songs = getSongsForPlaylist(payload.playlistId);
            playMusicTrack(songs.length - 1);
          }
        }
      }

      function startEditMusicSong(song) {
        if (!song) return;
        musicState.editingId = song.id;
        setMusicFormMode(true);
        document.getElementById("musicAddPlaylist").value =
          song.playlistId || musicState.playlistId;
        document.getElementById("musicAddTitleInput").value = song.title || "";
        document.getElementById("musicAddArtist").value = song.artist || "";
        document.getElementById("musicAddDescEn").value =
          song.description || "";
        document.getElementById("musicAddDescPt").value =
          song.descriptionPt || "";
        const source = song.source || "youtube";
        document.querySelectorAll('input[name="musicSource"]').forEach((r) => {
          r.checked = r.value === source;
        });
        updateMusicSourceFields();
        document.getElementById("musicAddLink").value = song.youtubeId || "";
        document.getElementById("musicAddScLink").value =
          song.soundcloudUrl || "";
        document
          .getElementById("musicAddForm")
          ?.scrollIntoView({ behavior: "smooth", block: "center" });
      }

      function clearMusicAddForm() {
        [
          "musicAddTitleInput",
          "musicAddArtist",
          "musicAddLink",
          "musicAddScLink",
          "musicAddDescEn",
          "musicAddDescPt",
        ].forEach((id) => {
          const el = document.getElementById(id);
          if (el) el.value = "";
        });
        const yt = document.querySelector(
          'input[name="musicSource"][value="youtube"]',
        );
        if (yt) yt.checked = true;
        updateMusicSourceFields();
        musicState.editingId = null;
      }

      async function deleteMusicSong(song) {
        if (!song) return;
        const msg =
          currentLanguage() === "pt"
            ? `Tem certeza que quer apagar "${song.title}"?`
            : `Are you sure you want to delete "${song.title}"?`;
        const ok = await customConfirm(msg);
        if (!ok) return;

        if (
          musicSyncLive &&
          musicDb &&
          song.id &&
          !String(song.id).startsWith("local-")
        ) {
          musicDb
            .collection("musicsongs")
            .doc(song.id)
            .delete()
            .then(() => notify("songDeleted"))
            .catch(() => {});
        } else {
          musicSongs = musicSongs.filter((s) => s.id !== song.id);
          notify("songDeleted");
          const songs = getSongsForPlaylist(musicState.playlistId);
          if (!songs.length) {
            document.getElementById("musicPlayerWrap").style.display = "none";
            document.getElementById("musicEmbed").innerHTML = "";
            musicState.trackIdx = 0;
            musicState.currentSongId = null;
          } else if (musicState.trackIdx >= songs.length) {
            musicState.trackIdx = songs.length - 1;
            playMusicTrack(musicState.trackIdx);
            return;
          }
          renderMusicTracks();
        }
      }

      (function initMusicSync() {
        const db = getSharedFirestore();
        if (db) {
          try {
            musicDb = db;
            musicSyncLive = true;
            setMusicSyncPill();
            const col = musicDb.collection("musicsongs");
            col.onSnapshot(
              (snapshot) => {
                const next = snapshot.docs.map((doc) => ({
                  id: doc.id,
                  ...doc.data(),
                }));
                musicSongs = next;
                if (musicState.playlistId) {
                  const songs = getSongsForPlaylist(musicState.playlistId);
                  if (musicState.currentSongId) {
                    const idx = songs.findIndex(
                      (s) => s.id === musicState.currentSongId,
                    );
                    if (idx >= 0) musicState.trackIdx = idx;
                    else if (songs.length)
                      musicState.trackIdx = Math.min(
                        musicState.trackIdx,
                        songs.length - 1,
                      );
                  }
                  renderMusicTracks();
                }
                // Show blue dot if partner added songs since this device last opened Music
                refreshTabDotsFromData("music", next);
              },
              () => {
                musicSyncLive = false;
                setMusicSyncPill();
                musicSongs = seedMusicFromConfig();
                if (musicState.playlistId) renderMusicTracks();
              },
            );

            // Seed once if empty
            col
              .limit(1)
              .get()
              .then((snap) => {
                if (snap.empty) {
                  seedMusicFromConfig().forEach((s) => {
                    col.add({
                      playlistId: s.playlistId,
                      order: s.order,
                      title: s.title,
                      artist: s.artist,
                      source: s.source || "youtube",
                      youtubeId: s.youtubeId || "",
                      soundcloudUrl: s.soundcloudUrl || "",
                      description: s.description,
                      descriptionPt: s.descriptionPt,
                      createdAt:
                        firebase.firestore.FieldValue.serverTimestamp(),
                    });
                  });
                }
              })
              .catch(() => {});
          } catch (e) {
            musicSyncLive = false;
            setMusicSyncPill();
            musicSongs = seedMusicFromConfig();
          }
        } else {
          musicSyncLive = false;
          setMusicSyncPill();
          musicSongs = seedMusicFromConfig();
        }
        initMusic();
      })();

      // ================================================================
      // OUR MEMORIES — live photo uploads (Firestore stores the caption/
      // date/URL as text; the actual image bytes live on Cloudinary's
      // free tier, since Firebase Storage now requires a paid plan).
      // ================================================================
      let memoriesDb = null;
      let memoriesSyncLive = false;
      // memoriesItems is declared above near renderAlbum()

      function isCloudinaryConfigured() {
        const c = CONFIG.cloudinary;
        return (
          c &&
          c.cloudName &&
          c.cloudName !== "YOUR_CLOUD_NAME" &&
          c.uploadPreset &&
          c.uploadPreset !== "YOUR_UPLOAD_PRESET"
        );
      }

      function setMemoriesSyncPill() {
        const pill = document.getElementById("memoriesSyncPill");
        if (!pill) return;
        if (memoriesSyncLive) {
          pill.textContent =
            currentLanguage() === "pt"
              ? "🟢 Sincronizado — visível para os dois"
              : "🟢 Synced — visible to both of you";
          pill.className = "bucket-sync-pill live";
        } else {
          pill.textContent =
            currentLanguage() === "pt"
              ? "🟡 Ainda não sincronizado (só neste aparelho)"
              : "🟡 Not synced yet (this device only)";
          pill.className = "bucket-sync-pill local";
        }
      }

      // Detect file type by MIME and extension (some phones omit or lie about type).
      function memoryFileInfo(file) {
        const name = (file && file.name ? file.name : "").toLowerCase();
        const mime = (file && file.type ? file.type : "").toLowerCase();
        const ext = (name.match(/\.([a-z0-9]+)$/) || [])[1] || "";
        return { name, mime, ext };
      }

      function isWebpFile(file) {
        const { mime, ext } = memoryFileInfo(file);
        return mime === "image/webp" || ext === "webp";
      }

      function isAllowedMemoryFile(file) {
        const { mime, ext } = memoryFileInfo(file);
        if (isWebpFile(file)) return false;
        const okMime =
          !mime || (mime.startsWith("image/") && !mime.includes("webp"));
        const okExt =
          !ext ||
          [
            "jpg",
            "jpeg",
            "png",
            "heic",
            "heif",
            "gif",
            "bmp",
            "tif",
            "tiff",
          ].includes(ext);
        // Allow common camera formats; always rejected: webp
        return okMime && okExt;
      }

      // Resizes + re-compresses in the browser before upload.
      // PNG (and anything the browser can decode) is drawn onto a canvas and
      // exported as JPEG — so transparent PNGs become solid JPEG and shrink a lot.
      function compressImage(file, maxDim, quality) {
        maxDim = maxDim || 1600;
        quality = quality || 0.75;
        return new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.onload = (e) => {
            const img = new Image();
            img.onload = () => {
              let { width, height } = img;
              if (width > height && width > maxDim) {
                height = Math.round((height * maxDim) / width);
                width = maxDim;
              } else if (height >= width && height > maxDim) {
                width = Math.round((width * maxDim) / height);
                height = maxDim;
              }
              const canvas = document.createElement("canvas");
              canvas.width = width;
              canvas.height = height;
              const ctx = canvas.getContext("2d");
              // White background so PNG transparency doesn't become black in JPEG
              ctx.fillStyle = "#ffffff";
              ctx.fillRect(0, 0, width, height);
              ctx.drawImage(img, 0, 0, width, height);
              canvas.toBlob(
                (blob) => {
                  if (!blob) return reject(new Error("compress failed"));
                  // Always a JPEG blob, regardless of original PNG/JPEG/HEIC input
                  resolve(blob);
                },
                "image/jpeg",
                quality,
              );
            };
            img.onerror = () => reject(new Error("Could not decode image"));
            img.src = e.target.result;
          };
          reader.onerror = reject;
          reader.readAsDataURL(file);
        });
      }

      async function uploadToCloudinary(blob) {
        const formData = new FormData();
        // Force a .jpg filename so Cloudinary stores it as JPEG
        formData.append("file", blob, "upload.jpg");
        formData.append("upload_preset", CONFIG.cloudinary.uploadPreset);
        const res = await fetch(
          `https://api.cloudinary.com/v1_1/${CONFIG.cloudinary.cloudName}/image/upload`,
          {
            method: "POST",
            body: formData,
          },
        );
        if (!res.ok) throw new Error("Cloudinary upload failed");
        const data = await res.json();
        return data.secure_url;
      }

      // Rebuild the album grid (static CONFIG + live uploads by category)
      function renderMemories() {
        renderAlbum();
      }

      // Editing state for live album photos (caption / date / album / optional new file)
      let memoryEditingId = null;
      let memoryEditingUrl = "";

      // Normalize dates for matching "On this day" and for display.
      // Accepts MM/DD/YYYY, M/D/YYYY, YYYY-MM-DD (from <input type="date">).
      function normalizeMemoryDate(raw) {
        if (!raw) return "";
        const s = String(raw).trim();
        let m = s.match(/^(\d{4})-(\d{1,2})-(\d{1,2})$/);
        if (m) {
          return (
            String(parseInt(m[2], 10)).padStart(2, "0") +
            "/" +
            String(parseInt(m[3], 10)).padStart(2, "0") +
            "/" +
            m[1]
          );
        }
        m = s.match(/^(\d{1,2})\/(\d{1,2})\/(\d{2,4})$/);
        if (m) {
          let y = m[3];
          if (y.length === 2) y = "20" + y;
          return (
            String(parseInt(m[1], 10)).padStart(2, "0") +
            "/" +
            String(parseInt(m[2], 10)).padStart(2, "0") +
            "/" +
            y
          );
        }
        return s;
      }

      function memoryDateToInputValue(raw) {
        const n = normalizeMemoryDate(raw);
        const m = n.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/);
        if (!m) return "";
        return (
          m[3] +
          "-" +
          String(parseInt(m[1], 10)).padStart(2, "0") +
          "-" +
          String(parseInt(m[2], 10)).padStart(2, "0")
        );
      }

      function formatMemoryDateDisplay(raw) {
        return normalizeMemoryDate(raw) || raw || "";
      }

      function setMemoryFormMode(editing) {
        const title = document.getElementById("liveMemoriesTitle");
        const btn = document.getElementById("memoryUploadBtn");
        const cancel = document.getElementById("memoryCancelEditBtn");
        const photoLabel = document.getElementById("memoryPhotoLabel");
        const isPt = currentLanguage() === "pt";
        if (editing) {
          if (title)
            title.textContent = isPt ? "Editar foto ♥" : "Edit photo ♥";
          if (btn) btn.textContent = isPt ? "Salvar ♥" : "Save ♥";
          if (cancel) cancel.style.display = "";
          if (photoLabel)
            photoLabel.textContent = isPt
              ? "Nova foto (opcional)"
              : "New photo (optional)";
        } else {
          if (title)
            title.textContent = isPt ? "Adicionar uma foto ♥" : "Add a photo ♥";
          if (btn) btn.textContent = isPt ? "Adicionar ♥" : "Add Memory ♥";
          if (cancel) cancel.style.display = "none";
          if (photoLabel)
            photoLabel.textContent = isPt ? "Escolha uma foto" : "Choose a photo";
          memoryEditingId = null;
          memoryEditingUrl = "";
        }
      }

      function clearMemoryForm() {
        const fileInput = document.getElementById("memoryPhotoInput");
        const captionInput = document.getElementById("memoryCaptionInput");
        const dateInput = document.getElementById("memoryDateInput");
        const statusEl = document.getElementById("memoryUploadStatus");
        if (fileInput) fileInput.value = "";
        if (captionInput) captionInput.value = "";
        if (dateInput) dateInput.value = "";
        if (statusEl) statusEl.textContent = "";
        setMemoryFormMode(false);
      }

      function startEditMemory(m) {
        if (!m) return;
        memoryEditingId = m.id;
        memoryEditingUrl = m.url || "";
        setMemoryFormMode(true);
        fillMemoryAlbumSelect();
        const albumSelect = document.getElementById("memoryAlbumSelect");
        const captionInput = document.getElementById("memoryCaptionInput");
        const dateInput = document.getElementById("memoryDateInput");
        const fileInput = document.getElementById("memoryPhotoInput");
        if (albumSelect && m.category) albumSelect.value = m.category;
        if (captionInput) captionInput.value = m.caption || "";
        if (dateInput) dateInput.value = memoryDateToInputValue(m.date || "");
        if (fileInput) fileInput.value = "";
        document
          .getElementById("memoryUploadForm")
          ?.scrollIntoView({ behavior: "smooth", block: "center" });
      }

      async function addMemory() {
        const fileInput = document.getElementById("memoryPhotoInput");
        const captionInput = document.getElementById("memoryCaptionInput");
        const dateInput = document.getElementById("memoryDateInput");
        const albumSelect = document.getElementById("memoryAlbumSelect");
        const statusEl = document.getElementById("memoryUploadStatus");
        const btn = document.getElementById("memoryUploadBtn");
        const isPt = currentLanguage() === "pt";
        const editing = !!memoryEditingId;

        const file = fileInput.files && fileInput.files[0];
        if (!editing && !file) {
          statusEl.textContent = isPt
            ? "Escolha uma foto primeiro."
            : "Choose a photo first.";
          return;
        }
        if (file && (isWebpFile(file) || !isAllowedMemoryFile(file))) {
          statusEl.textContent = isPt
            ? "WebP não é permitido. Usa JPEG ou PNG (PNG vira JPEG automaticamente)."
            : "WebP is not allowed. Use JPEG or PNG (PNG is auto-converted to JPEG).";
          fileInput.value = "";
          return;
        }
        const category =
          (albumSelect && albumSelect.value) || getAlbumCategories()[0] || "";
        if (!category) {
          statusEl.textContent = isPt
            ? "Escolha um álbum."
            : "Choose an album.";
          return;
        }
        if (file && !isCloudinaryConfigured()) {
          statusEl.textContent = isPt
            ? "Configure o Cloudinary primeiro (veja MEMORIES_SETUP.md)."
            : "Cloudinary isn't set up yet (see MEMORIES_SETUP.md).";
          return;
        }

        btn.disabled = true;
        statusEl.textContent = file
          ? isPt
            ? "A converter e enviar..."
            : "Converting & uploading..."
          : isPt
            ? "A salvar..."
            : "Saving...";

        try {
          let url = memoryEditingUrl || "";
          if (file) {
            const compressed = await compressImage(file);
            url = await uploadToCloudinary(compressed);
          }
          if (!url) {
            statusEl.textContent = isPt
              ? "Escolha uma foto primeiro."
              : "Choose a photo first.";
            return;
          }
          const payload = {
            url,
            caption: (captionInput.value || "").trim(),
            date: normalizeMemoryDate(dateInput.value || ""),
            category,
          };

          if (editing) {
            if (
              memoriesSyncLive &&
              memoriesDb &&
              !String(memoryEditingId).startsWith("local-")
            ) {
              await memoriesDb
                .collection("memories")
                .doc(memoryEditingId)
                .update(payload);
            } else {
              const idx = memoriesItems.findIndex(
                (x) => x.id === memoryEditingId,
              );
              if (idx >= 0)
                memoriesItems[idx] = { ...memoriesItems[idx], ...payload };
              renderMemories();
            }
            notify("memoryUpdated");
          } else {
            if (memoriesSyncLive && memoriesDb) {
              await memoriesDb.collection("memories").add({
                ...payload,
                createdAt: firebase.firestore.FieldValue.serverTimestamp(),
              });
            } else {
              memoriesItems.push({ id: "local-" + Date.now(), ...payload });
              renderMemories();
            }
            notify("memoryCreated");
          }
          clearMemoryForm();
        } catch (err) {
          statusEl.textContent = isPt
            ? "Não deu pra enviar. Tente de novo."
            : "Couldn't upload. Try again.";
        } finally {
          btn.disabled = false;
        }
      }

      async function deleteMemory(item) {
        const isPt = currentLanguage() === "pt";
        const msg = isPt
          ? `Tem certeza que quer apagar essa lembrança${item.caption ? ' ("' + item.caption + '")' : ""}?`
          : `Are you sure you want to delete this memory${item.caption ? ' ("' + item.caption + '")' : ""}?`;
        const ok = await customConfirm(msg);
        if (!ok) return;

        if (
          memoriesSyncLive &&
          memoriesDb &&
          item.id &&
          !String(item.id).startsWith("local-")
        ) {
          memoriesDb
            .collection("memories")
            .doc(item.id)
            .delete()
            .then(() => notify("memoryDeleted"))
            .catch(() => {});
        } else {
          memoriesItems = memoriesItems.filter((m) => m.id !== item.id);
          renderMemories();
          notify("memoryDeleted");
        }
      }

      document
        .getElementById("memoryUploadBtn")
        .addEventListener("click", addMemory);
      document
        .getElementById("memoryCancelEditBtn")
        ?.addEventListener("click", clearMemoryForm);

      (function initMemories() {
        fillMemoryAlbumSelect();
        const db = getSharedFirestore();
        if (db) {
          try {
            memoriesDb = db;
            memoriesSyncLive = true;
            setMemoriesSyncPill();
            const col = memoriesDb.collection("memories");
            col.onSnapshot(
              (snapshot) => {
                memoriesItems = snapshot.docs.map((doc) => ({
                  id: doc.id,
                  ...doc.data(),
                }));
                renderMemories();
                refreshTabDotsFromData("album", memoriesItems);
              },
              () => {
                memoriesSyncLive = false;
                setMemoriesSyncPill();
                renderMemories();
              },
            );
          } catch (e) {
            memoriesSyncLive = false;
            setMemoriesSyncPill();
            renderMemories();
          }
        } else {
          memoriesSyncLive = false;
          setMemoriesSyncPill();
          renderMemories();
        }
      })();

      // Custom album folders (collection "albums") — same Firestore app as memories
      (function initCustomAlbums() {
        const db = getSharedFirestore();
        if (db) {
          try {
            albumsDb = db;
            albumsSyncLive = true;
            albumsDb.collection("albums").onSnapshot(
              (snapshot) => {
                customAlbums = snapshot.docs.map((doc) => ({
                  id: doc.id,
                  ...doc.data(),
                }));
                renderAlbum();
                refreshTabDotsFromData("album", customAlbums);
              },
              () => {
                albumsSyncLive = false;
              },
            );
          } catch (e) {
            albumsSyncLive = false;
          }
        } else {
          albumsSyncLive = false;
        }
      })();

      // ================================================================
      // SHARED CALENDAR — month view + events for each person, synced
      // via Firestore collection "calendar". Blue tab dots use the same
      // last-seen system as Bucket List / Music.
      // ================================================================
      let calDb = null;
      let calSyncLive = false;
      let calEvents = [];
      let calEditingId = null;
      const calState = {
        year: new Date().getFullYear(),
        month: new Date().getMonth(), // 0-11
        filter: "all", // all | me | her
        selected: null, // 'YYYY-MM-DD'
      };

      function setCalSyncPill() {
        const pill = document.getElementById("calSyncPill");
        if (!pill) return;
        if (calSyncLive) {
          pill.textContent =
            currentLanguage() === "pt"
              ? "🟢 Sincronizado — a agenda dos dois aparece aqui"
              : "🟢 Synced — both of your schedules show up here";
          pill.className = "bucket-sync-pill cal-sync-pill live";
        } else {
          pill.textContent =
            currentLanguage() === "pt"
              ? "🟡 Ainda não sincronizado (só neste aparelho)"
              : "🟡 Not synced yet (this device only)";
          pill.className = "bucket-sync-pill cal-sync-pill local";
        }
      }

      function calPersonLabel(person) {
        if (person === "both") {
          return currentLanguage() === "pt" ? "Os dois" : "Both of us";
        }
        if (person === "her") return CONFIG.names.her;
        return CONFIG.names.me;
      }

      function calNormalizePerson(p) {
        if (p === "her" || p === "both") return p;
        return "me";
      }

      function calPad(n) {
        return String(n).padStart(2, "0");
      }

      function calDateKey(y, m, d) {
        return y + "-" + calPad(m + 1) + "-" + calPad(d);
      }

      function calFormatDayTitle(key) {
        if (!key) return tr("Select a day");
        const [y, m, d] = key.split("-").map(Number);
        const dt = new Date(y, m - 1, d);
        const locale = currentLanguage() === "pt" ? "pt-BR" : "en-US";
        return dt.toLocaleDateString(locale, {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        });
      }

      function calMonthName(y, m) {
        const locale = currentLanguage() === "pt" ? "pt-BR" : "en-US";
        return new Date(y, m, 1).toLocaleDateString(locale, {
          month: "long",
          year: "numeric",
        });
      }

      // Does this event occur on dayKey? Supports one-off + daily/weekly/monthly.
      function calEventOccursOn(ev, dayKey) {
        if (!ev || !ev.date || !dayKey) return false;
        const repeat = ev.repeat || "none";
        if (repeat === "none" || !repeat) return ev.date === dayKey;
        if (dayKey < ev.date) return false;
        if (ev.repeatUntil && dayKey > ev.repeatUntil) return false;

        const [sy, sm, sd] = ev.date.split("-").map(Number);
        const [dy, dm, dd] = dayKey.split("-").map(Number);
        const start = new Date(sy, sm - 1, sd);
        const day = new Date(dy, dm - 1, dd);
        if (day < start) return false;

        if (repeat === "daily") return true;
        if (repeat === "weekly") {
          const ms = day - start;
          const days = Math.round(ms / 86400000);
          return days % 7 === 0;
        }
        if (repeat === "monthly") {
          // Same day-of-month when possible (skip months that don't have that day)
          return dd === sd;
        }
        return ev.date === dayKey;
      }

      function calEventsForDay(key) {
        return calEvents
          .filter((ev) => {
            if (!calEventOccursOn(ev, key)) return false;
            const who = calNormalizePerson(ev.person);
            if (calState.filter === "me") return who === "me";
            if (calState.filter === "her") return who === "her";
            if (calState.filter === "both") return who === "both";
            return true;
          })
          .sort((a, b) =>
            String(a.startTime || "").localeCompare(String(b.startTime || "")),
          );
      }

      // Markers for a day cell: { person, marker } — colors by who, shape by importance
      // green = me, pink = her, blue = both
      function calMarkersForDay(key) {
        const out = [];
        const seen = new Set();
        calEvents.forEach((ev) => {
          if (!calEventOccursOn(ev, key)) return;
          const person = calNormalizePerson(ev.person);
          if (calState.filter === "me" && person !== "me") return;
          if (calState.filter === "her" && person !== "her") return;
          if (calState.filter === "both" && person !== "both") return;
          const marker =
            ev.marker === "star" || ev.marker === "heart"
              ? ev.marker
              : "circle";
          const k = person + ":" + marker + ":" + (ev.id || "");
          if (seen.has(k)) return;
          seen.add(k);
          out.push({ person, marker });
        });
        return out;
      }

      function calMarkerChar(marker) {
        if (marker === "star") return "★";
        if (marker === "heart") return "♥";
        return ""; // circle is drawn with CSS
      }

      // Simple toast for calendar — same style as bucket, fixed text (no random "charm" lines)
      function calNotify(kind) {
        const isPt = currentLanguage() === "pt";
        const messages = {
          created: isPt ? "Evento adicionado." : "Event added.",
          updated: isPt ? "Evento atualizado." : "Event updated.",
          deleted: isPt ? "Evento apagado." : "Event deleted.",
        };
        const toastKind =
          kind === "deleted"
            ? "deleted"
            : kind === "updated"
              ? "updated"
              : "created";
        showToast(messages[kind] || messages.created, toastKind);
        if (kind === "created") setTabDot("calendar");
      }

      function renderCalendar() {
        const grid = document.getElementById("calGrid");
        const label = document.getElementById("calMonthLabel");
        if (!grid || !label) return;

        label.textContent = calMonthName(calState.year, calState.month);
        grid.innerHTML = "";

        const dows =
          currentLanguage() === "pt"
            ? ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"]
            : ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        dows.forEach((d) => {
          const el = document.createElement("div");
          el.className = "cal-dow";
          el.textContent = d;
          grid.appendChild(el);
        });

        const first = new Date(calState.year, calState.month, 1);
        const startPad = first.getDay(); // 0 Sun
        const daysInMonth = new Date(
          calState.year,
          calState.month + 1,
          0,
        ).getDate();
        const prevDays = new Date(calState.year, calState.month, 0).getDate();
        const today = new Date();
        const todayKey = calDateKey(
          today.getFullYear(),
          today.getMonth(),
          today.getDate(),
        );

        // leading days from previous month
        for (let i = startPad - 1; i >= 0; i--) {
          const d = prevDays - i;
          const y = calState.month === 0 ? calState.year - 1 : calState.year;
          const m = calState.month === 0 ? 11 : calState.month - 1;
          grid.appendChild(calBuildDayCell(y, m, d, true, todayKey));
        }
        for (let d = 1; d <= daysInMonth; d++) {
          grid.appendChild(
            calBuildDayCell(calState.year, calState.month, d, false, todayKey),
          );
        }
        // trailing to fill weeks
        const totalCells = startPad + daysInMonth;
        const trailing = (7 - (totalCells % 7)) % 7;
        for (let d = 1; d <= trailing; d++) {
          const y = calState.month === 11 ? calState.year + 1 : calState.year;
          const m = calState.month === 11 ? 0 : calState.month + 1;
          grid.appendChild(calBuildDayCell(y, m, d, true, todayKey));
        }

        renderCalDayPanel();
      }

      function calBuildDayCell(y, m, d, other, todayKey) {
        const key = calDateKey(y, m, d);
        const cell = document.createElement("button");
        cell.type = "button";
        cell.className =
          "cal-day" +
          (other ? " other" : "") +
          (key === todayKey ? " today" : "") +
          (key === calState.selected ? " selected" : "");
        cell.innerHTML = `<span class="cal-day-num">${d}</span>`;
        const dots = document.createElement("div");
        dots.className = "cal-dots";
        calMarkersForDay(key).forEach(({ person, marker }) => {
          const el = document.createElement("span");
          el.className = "cal-mark " + person + " " + marker;
          el.textContent = calMarkerChar(marker);
          el.title =
            calPersonLabel(person) +
            (marker === "star" ? " ★" : marker === "heart" ? " ♥" : "");
          dots.appendChild(el);
        });
        cell.appendChild(dots);
        cell.addEventListener("click", () => {
          calState.selected = key;
          const dateInput = document.getElementById("calDate");
          if (dateInput && !calEditingId) dateInput.value = key;
          renderCalendar();
        });
        return cell;
      }

      function renderCalDayPanel() {
        const title = document.getElementById("calDayTitle");
        const list = document.getElementById("calDayEvents");
        if (!title || !list) return;
        title.textContent = calFormatDayTitle(calState.selected);
        list.innerHTML = "";
        if (!calState.selected) {
          list.innerHTML = `<p class="cal-empty">${tr("Select a day")}</p>`;
          return;
        }
        const events = calEventsForDay(calState.selected);
        if (!events.length) {
          list.innerHTML = `<p class="cal-empty">${tr("No plans this day.")}</p>`;
          return;
        }
        events.forEach((ev) => {
          const row = document.createElement("div");
          row.className = "cal-event";
          const who = calNormalizePerson(ev.person);
          const marker =
            ev.marker === "star" || ev.marker === "heart"
              ? ev.marker
              : "circle";
          let timeStr = "";
          if (ev.startTime && ev.endTime)
            timeStr = ev.startTime + " – " + ev.endTime;
          else if (ev.startTime) timeStr = ev.startTime;
          else if (ev.endTime) timeStr = "– " + ev.endTime;
          const markChar =
            marker === "star" ? "★ " : marker === "heart" ? "♥ " : "";
          const bucketBadge = ev.bucketId
            ? `<span class="cal-bucket-badge" title="${currentLanguage() === "pt" ? "Da bucket list" : "From bucket list"}">☑ Bucket</span>`
            : "";
          row.innerHTML = `
      <span class="cal-event-who ${who}">${calPersonLabel(who)}</span>
      <div class="cal-event-body">
        <div class="cal-event-title"></div>
        ${bucketBadge}
        ${timeStr ? `<div class="cal-event-time">${timeStr}</div>` : ""}
        ${ev.notes ? `<div class="cal-event-notes"></div>` : ""}
      </div>
      <div class="cal-event-actions">
        <button type="button" class="bucket-icon-btn" data-act="edit" aria-label="${tr("Edit")}">✎</button>
        <button type="button" class="bucket-icon-btn delete" data-act="del" aria-label="${tr("Delete")}">✕</button>
      </div>
    `;
          row.querySelector(".cal-event-title").textContent =
            markChar + (ev.title || "");
          if (ev.notes)
            row.querySelector(".cal-event-notes").textContent = ev.notes;
          row
            .querySelector('[data-act="edit"]')
            .addEventListener("click", () => startEditCalEvent(ev));
          row
            .querySelector('[data-act="del"]')
            .addEventListener("click", () => deleteCalEvent(ev));
          list.appendChild(row);
        });
      }

      function setCalFormMode(editing) {
        const heading = document.getElementById("calAddHeading");
        const btn = document.getElementById("calAddBtn");
        const cancel = document.getElementById("calCancelEditBtn");
        if (editing) {
          if (heading) heading.textContent = tr("Edit event ♥");
          if (btn) btn.textContent = tr("Save event ♥");
          if (cancel) cancel.style.display = "";
        } else {
          if (heading) heading.textContent = tr("Add to the calendar ♥");
          if (btn) btn.textContent = tr("Add event ♥");
          if (cancel) cancel.style.display = "none";
          calEditingId = null;
        }
      }

      function fillCalBucketSelect(selectedId) {
        const sel = document.getElementById("calBucketLink");
        if (!sel) return;
        const prev = selectedId != null ? String(selectedId) : sel.value;
        const isPt = currentLanguage() === "pt";
        sel.innerHTML = "";
        const none = document.createElement("option");
        none.value = "";
        none.textContent = isPt ? "— Nenhum —" : "— None —";
        sel.appendChild(none);
        const items =
          typeof bucketItems !== "undefined" && Array.isArray(bucketItems)
            ? bucketItems
            : [];
        // Incomplete first, then done (so you can still link an old item)
        const sorted = items.slice().sort((a, b) => {
          if (!!a.done !== !!b.done) return a.done ? 1 : -1;
          return String(a.text || "").localeCompare(String(b.text || ""));
        });
        sorted.forEach((item) => {
          if (!item || !item.id) return;
          const opt = document.createElement("option");
          opt.value = String(item.id);
          const label = (item.text || "").trim() || String(item.id);
          const short = label.length > 42 ? label.slice(0, 39) + "…" : label;
          opt.textContent = item.done ? "✓ " + short : short;
          sel.appendChild(opt);
        });
        if (prev && Array.from(sel.options).some((o) => o.value === prev)) {
          sel.value = prev;
        }
      }

      function clearCalForm() {
        // Always exit edit mode first so the next save creates a NEW event
        calEditingId = null;
        [
          "calTitle",
          "calStart",
          "calEnd",
          "calNotes",
          "calRepeatUntil",
        ].forEach((id) => {
          const el = document.getElementById(id);
          if (el) el.value = "";
        });
        const rep = document.getElementById("calRepeat");
        if (rep) rep.value = "none";
        const marker = document.getElementById("calMarker");
        if (marker) marker.value = "circle";
        const person = document.getElementById("calPerson");
        if (person) person.value = "me";
        const date = document.getElementById("calDate");
        if (date) date.value = calState.selected || "";
        const link = document.getElementById("calBucketLink");
        if (link) link.value = "";
        setCalFormMode(false);
      }

      function finishCalWrite(kind, dateKey) {
        if (dateKey) calState.selected = dateKey;
        clearCalForm();
        renderCalendar();
        calNotify(kind);
      }

      function startEditCalEvent(ev) {
        if (!ev) return;
        calEditingId = ev.id;
        setCalFormMode(true);
        fillCalBucketSelect(ev.bucketId || "");
        document.getElementById("calTitle").value = ev.title || "";
        document.getElementById("calDate").value = ev.date || "";
        document.getElementById("calPerson").value = calNormalizePerson(
          ev.person,
        );
        document.getElementById("calStart").value = ev.startTime || "";
        document.getElementById("calEnd").value = ev.endTime || "";
        document.getElementById("calNotes").value = ev.notes || "";
        const rep = document.getElementById("calRepeat");
        if (rep) rep.value = ev.repeat || "none";
        const until = document.getElementById("calRepeatUntil");
        if (until) until.value = ev.repeatUntil || "";
        const marker = document.getElementById("calMarker");
        if (marker)
          marker.value =
            ev.marker === "star" || ev.marker === "heart"
              ? ev.marker
              : "circle";
        const link = document.getElementById("calBucketLink");
        if (link && ev.bucketId) link.value = String(ev.bucketId);
        document
          .getElementById("calAddForm")
          ?.scrollIntoView({ behavior: "smooth", block: "center" });
      }

      function collectCalPayload() {
        const title = (document.getElementById("calTitle")?.value || "").trim();
        const date = (document.getElementById("calDate")?.value || "").trim();
        const person = calNormalizePerson(
          document.getElementById("calPerson")?.value,
        );
        const startTime = (
          document.getElementById("calStart")?.value || ""
        ).trim();
        const endTime = (document.getElementById("calEnd")?.value || "").trim();
        const notes = (document.getElementById("calNotes")?.value || "").trim();
        const repeat = document.getElementById("calRepeat")?.value || "none";
        const repeatUntil = (
          document.getElementById("calRepeatUntil")?.value || ""
        ).trim();
        const rawMarker =
          document.getElementById("calMarker")?.value || "circle";
        const marker =
          rawMarker === "star" || rawMarker === "heart" ? rawMarker : "circle";
        const bucketId = (
          document.getElementById("calBucketLink")?.value || ""
        ).trim();
        let bucketText = "";
        if (bucketId && typeof bucketItems !== "undefined") {
          const found = bucketItems.find((b) => String(b.id) === bucketId);
          if (found) bucketText = found.text || "";
        }
        const isPt = currentLanguage() === "pt";
        if (!title) {
          alert(
            isPt
              ? "Escreve o que é o evento."
              : "Please enter what the event is.",
          );
          return null;
        }
        if (!date) {
          alert(isPt ? "Escolhe uma data." : "Please pick a date.");
          return null;
        }
        if (repeatUntil && repeatUntil < date) {
          alert(
            isPt
              ? 'A data "até" tem de ser depois do início.'
              : "Repeat-until must be on or after the start date.",
          );
          return null;
        }
        return {
          title,
          date,
          person,
          startTime,
          endTime,
          notes,
          repeat,
          repeatUntil,
          marker,
          bucketId: bucketId || "",
          bucketText: bucketText || "",
        };
      }

      function saveCalEvent() {
        const payload = collectCalPayload();
        if (!payload) return;
        const editingId = calEditingId; // capture before any async clear

        if (editingId) {
          if (calSyncLive && calDb && !String(editingId).startsWith("local-")) {
            // Clear form immediately so the user can add a new event right away
            clearCalForm();
            calDb
              .collection("calendar")
              .doc(editingId)
              .update(payload)
              .then(() => finishCalWrite("updated", payload.date))
              .catch(() => {
                const idx = calEvents.findIndex((e) => e.id === editingId);
                if (idx >= 0)
                  calEvents[idx] = { ...calEvents[idx], ...payload };
                finishCalWrite("updated", payload.date);
              });
          } else {
            const idx = calEvents.findIndex((e) => e.id === editingId);
            if (idx >= 0) calEvents[idx] = { ...calEvents[idx], ...payload };
            finishCalWrite("updated", payload.date);
          }
          return;
        }

        if (calSyncLive && calDb) {
          clearCalForm();
          calDb
            .collection("calendar")
            .add({
              ...payload,
              createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            })
            .then(() => finishCalWrite("created", payload.date))
            .catch(() => {
              calEvents.push({ id: "local-" + Date.now(), ...payload });
              finishCalWrite("created", payload.date);
            });
        } else {
          calEvents.push({ id: "local-" + Date.now(), ...payload });
          finishCalWrite("created", payload.date);
        }
      }

      async function deleteCalEvent(ev) {
        if (!ev) return;
        const msg =
          currentLanguage() === "pt"
            ? `Tem certeza que quer apagar "${ev.title}"?`
            : `Are you sure you want to delete "${ev.title}"?`;
        const ok = await customConfirm(msg);
        if (!ok) return;

        if (
          calSyncLive &&
          calDb &&
          ev.id &&
          !String(ev.id).startsWith("local-")
        ) {
          calDb
            .collection("calendar")
            .doc(ev.id)
            .delete()
            .then(() => calNotify("deleted"))
            .catch(() => {
              calEvents = calEvents.filter((e) => e.id !== ev.id);
              calNotify("deleted");
              renderCalendar();
            });
        } else {
          calEvents = calEvents.filter((e) => e.id !== ev.id);
          calNotify("deleted");
          renderCalendar();
        }
      }

      function initCalendarUI() {
        // Person labels from CONFIG
        const meName = CONFIG.names.me;
        const herName = CONFIG.names.her;
        const filterMe = document.getElementById("calFilterMe");
        const filterHer = document.getElementById("calFilterHer");
        if (filterMe) filterMe.textContent = meName;
        if (filterHer) filterHer.textContent = herName;
        const personSel = document.getElementById("calPerson");
        if (personSel) {
          const bothLabel =
            currentLanguage() === "pt" ? "Os dois" : "Both of us";
          personSel.innerHTML = `
      <option value="me">${meName}</option>
      <option value="her">${herName}</option>
      <option value="both">${bothLabel}</option>
    `;
        }
        const filterBoth = document.getElementById("calFilterBoth");
        if (filterBoth) {
          filterBoth.textContent =
            currentLanguage() === "pt" ? "Os dois" : "Both";
        }

        document
          .getElementById("calPrevMonth")
          ?.addEventListener("click", () => {
            calState.month--;
            if (calState.month < 0) {
              calState.month = 11;
              calState.year--;
            }
            renderCalendar();
          });
        document
          .getElementById("calNextMonth")
          ?.addEventListener("click", () => {
            calState.month++;
            if (calState.month > 11) {
              calState.month = 0;
              calState.year++;
            }
            renderCalendar();
          });
        document
          .querySelectorAll("#calFilters .cal-filter-btn")
          .forEach((btn) => {
            btn.addEventListener("click", () => {
              calState.filter = btn.dataset.filter || "all";
              document
                .querySelectorAll("#calFilters .cal-filter-btn")
                .forEach((b) => b.classList.toggle("active", b === btn));
              renderCalendar();
            });
          });
        document
          .getElementById("calAddBtn")
          ?.addEventListener("click", saveCalEvent);
        document
          .getElementById("calCancelEditBtn")
          ?.addEventListener("click", clearCalForm);

        // Link a bucket-list item → fill title if empty
        document
          .getElementById("calBucketLink")
          ?.addEventListener("change", () => {
            const sel = document.getElementById("calBucketLink");
            const titleEl = document.getElementById("calTitle");
            if (!sel || !sel.value || !titleEl) return;
            if (titleEl.value.trim()) return;
            const found =
              typeof bucketItems !== "undefined"
                ? bucketItems.find((b) => String(b.id) === sel.value)
                : null;
            if (found && found.text) titleEl.value = found.text;
          });

        // Default selected = today
        const t = new Date();
        calState.selected = calDateKey(
          t.getFullYear(),
          t.getMonth(),
          t.getDate(),
        );
        const dateInput = document.getElementById("calDate");
        if (dateInput) dateInput.value = calState.selected;

        fillCalBucketSelect();
        setCalFormMode(false);
        renderCalendar();
      }

      (function initCalendarSync() {
        initCalendarUI();
        const db = getSharedFirestore();
        if (db) {
          try {
            calDb = db;
            calSyncLive = true;
            setCalSyncPill();
            const col = calDb.collection("calendar");
            col.onSnapshot(
              (snapshot) => {
                calEvents = snapshot.docs.map((doc) => ({
                  id: doc.id,
                  ...doc.data(),
                }));
                renderCalendar();
                refreshTabDotsFromData("calendar", calEvents);
                if (typeof renderTodayWidget === "function")
                  renderTodayWidget();
              },
              () => {
                calSyncLive = false;
                setCalSyncPill();
                renderCalendar();
              },
            );
          } catch (e) {
            calSyncLive = false;
            setCalSyncPill();
          }
        } else {
          calSyncLive = false;
          setCalSyncPill();
        }
      })();

      // ================================================================
      // DAY CARDS — short notes to each other. Expire after 24h unless
      // saved. Text-to-speech via the browser. Firestore: "daycards".
      // ================================================================
      const DAYCARD_TTL_MS = 24 * 60 * 60 * 1000;
      const DAYCARD_MAX_REC_MS = 60 * 1000; // 60s max recording
      let daycardsDb = null;
      let daycardsSyncLive = false;
      let dayCards = [];
      // Pending audio for the next card: { blob, url, name }
      let daycardPendingAudio = null;
      let daycardMediaRecorder = null;
      let daycardRecChunks = [];
      let daycardRecStream = null;
      let daycardRecTimer = null;

      function setDaycardAudioStatus(msg, ready) {
        const el = document.getElementById("daycardAudioStatus");
        if (!el) return;
        el.textContent = msg || "";
        el.classList.toggle("ready", !!ready);
      }

      function clearDaycardPendingAudio() {
        if (daycardPendingAudio && daycardPendingAudio.url) {
          try {
            URL.revokeObjectURL(daycardPendingAudio.url);
          } catch (e) {}
        }
        daycardPendingAudio = null;
        const clearBtn = document.getElementById("daycardClearAudioBtn");
        if (clearBtn) clearBtn.style.display = "none";
        const fileInput = document.getElementById("daycardAudioFile");
        if (fileInput) fileInput.value = "";
        setDaycardAudioStatus("");
      }

      function setDaycardPendingAudio(blob, name) {
        if (daycardPendingAudio && daycardPendingAudio.url) {
          try {
            URL.revokeObjectURL(daycardPendingAudio.url);
          } catch (e) {}
        }
        const url = URL.createObjectURL(blob);
        daycardPendingAudio = {
          blob,
          url,
          name: name || "voice.webm",
        };
        const clearBtn = document.getElementById("daycardClearAudioBtn");
        if (clearBtn) clearBtn.style.display = "";
        const isPt = currentLanguage() === "pt";
        const secs = Math.max(1, Math.round(blob.size / 16000)); // rough hint only
        setDaycardAudioStatus(
          isPt ? "Áudio pronto para enviar ♥" : "Audio ready to send ♥",
          true,
        );
      }

      async function uploadDaycardAudio(blob, filename) {
        if (!isCloudinaryConfigured()) {
          // Fallback: short clips as data URL (local / no Cloudinary)
          if (blob.size > 900000) {
            throw new Error("Audio too large without Cloudinary");
          }
          return await new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () => resolve(reader.result);
            reader.onerror = reject;
            reader.readAsDataURL(blob);
          });
        }
        const formData = new FormData();
        formData.append("file", blob, filename || "voice.webm");
        formData.append("upload_preset", CONFIG.cloudinary.uploadPreset);
        // video/upload accepts audio files on most Cloudinary setups
        const res = await fetch(
          `https://api.cloudinary.com/v1_1/${CONFIG.cloudinary.cloudName}/video/upload`,
          { method: "POST", body: formData },
        );
        if (!res.ok) {
          // try raw upload as fallback
          const form2 = new FormData();
          form2.append("file", blob, filename || "voice.webm");
          form2.append("upload_preset", CONFIG.cloudinary.uploadPreset);
          const res2 = await fetch(
            `https://api.cloudinary.com/v1_1/${CONFIG.cloudinary.cloudName}/raw/upload`,
            { method: "POST", body: form2 },
          );
          if (!res2.ok) throw new Error("Audio upload failed");
          const data2 = await res2.json();
          return data2.secure_url;
        }
        const data = await res.json();
        return data.secure_url;
      }

      async function toggleDaycardRecording() {
        const btn = document.getElementById("daycardRecBtn");
        const isPt = currentLanguage() === "pt";
        if (
          daycardMediaRecorder &&
          daycardMediaRecorder.state === "recording"
        ) {
          daycardMediaRecorder.stop();
          return;
        }
        if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
          showToast(
            isPt
              ? "Gravação não disponível neste browser."
              : "Recording isn't available in this browser.",
            "updated",
          );
          return;
        }
        try {
          daycardRecStream = await navigator.mediaDevices.getUserMedia({
            audio: true,
          });
          daycardRecChunks = [];
          const mime = MediaRecorder.isTypeSupported("audio/webm;codecs=opus")
            ? "audio/webm;codecs=opus"
            : MediaRecorder.isTypeSupported("audio/webm")
              ? "audio/webm"
              : "";
          daycardMediaRecorder = mime
            ? new MediaRecorder(daycardRecStream, { mimeType: mime })
            : new MediaRecorder(daycardRecStream);
          daycardMediaRecorder.ondataavailable = (e) => {
            if (e.data && e.data.size) daycardRecChunks.push(e.data);
          };
          daycardMediaRecorder.onstop = () => {
            if (daycardRecStream) {
              daycardRecStream.getTracks().forEach((t) => t.stop());
              daycardRecStream = null;
            }
            if (daycardRecTimer) {
              clearTimeout(daycardRecTimer);
              daycardRecTimer = null;
            }
            if (btn) {
              btn.classList.remove("recording");
              btn.textContent = isPt ? "🎤 Gravar" : "🎤 Record";
            }
            const blob = new Blob(daycardRecChunks, {
              type: daycardMediaRecorder.mimeType || "audio/webm",
            });
            daycardMediaRecorder = null;
            if (blob.size < 500) {
              setDaycardAudioStatus(
                isPt ? "Gravação muito curta." : "Recording too short.",
              );
              return;
            }
            setDaycardPendingAudio(blob, "recording.webm");
          };
          daycardMediaRecorder.start();
          if (btn) {
            btn.classList.add("recording");
            btn.textContent = isPt ? "⏹ Parar" : "⏹ Stop";
          }
          setDaycardAudioStatus(
            isPt ? "A gravar… (máx. 60s)" : "Recording… (max 60s)",
          );
          daycardRecTimer = setTimeout(() => {
            if (
              daycardMediaRecorder &&
              daycardMediaRecorder.state === "recording"
            ) {
              daycardMediaRecorder.stop();
            }
          }, DAYCARD_MAX_REC_MS);
        } catch (err) {
          showToast(
            isPt
              ? "Permite o microfone para gravar."
              : "Please allow the microphone to record.",
            "updated",
          );
        }
      }

      function setDaycardsSyncPill() {
        const pill = document.getElementById("daycardsSyncPill");
        if (!pill) return;
        if (daycardsSyncLive) {
          pill.textContent =
            currentLanguage() === "pt"
              ? "🟢 Sincronizado — os dois veem os cartões"
              : "🟢 Synced — both of you see the cards";
          pill.className = "bucket-sync-pill live";
        } else {
          pill.textContent =
            currentLanguage() === "pt"
              ? "🟡 Ainda não sincronizado (só neste aparelho)"
              : "🟡 Not synced yet (this device only)";
          pill.className = "bucket-sync-pill local";
        }
      }

      function daycardTimeMs(val) {
        if (!val) return 0;
        if (typeof val.toMillis === "function") return val.toMillis();
        if (typeof val.seconds === "number") return val.seconds * 1000;
        if (typeof val === "number") return val;
        const p = Date.parse(val);
        return Number.isNaN(p) ? 0 : p;
      }

      function daycardIsExpired(card) {
        if (!card) return false;
        if (card.saved) return false;
        const exp = daycardTimeMs(card.expiresAt);
        if (!exp) {
          const created = daycardTimeMs(card.createdAt);
          if (!created) return false;
          return Date.now() > created + DAYCARD_TTL_MS;
        }
        return Date.now() > exp;
      }

      function daycardRemainingLabel(card) {
        const isPt = currentLanguage() === "pt";
        if (card.saved) return isPt ? "Guardado" : "Saved";
        let exp = daycardTimeMs(card.expiresAt);
        if (!exp) {
          const created = daycardTimeMs(card.createdAt);
          exp = created ? created + DAYCARD_TTL_MS : 0;
        }
        if (!exp) return "";
        const left = exp - Date.now();
        if (left <= 0) return isPt ? "A expirar…" : "Expiring…";
        const h = Math.floor(left / 3600000);
        const m = Math.floor((left % 3600000) / 60000);
        if (h > 0)
          return isPt ? `Expira em ${h}h ${m}m` : `Expires in ${h}h ${m}m`;
        return isPt ? `Expira em ${m}m` : `Expires in ${m}m`;
      }

      function speakDaycard(text) {
        if (!text || !window.speechSynthesis) {
          showToast(
            currentLanguage() === "pt"
              ? "Leitura em voz alta não disponível neste browser."
              : "Text-to-speech isn't available in this browser.",
            "updated",
          );
          return;
        }
        window.speechSynthesis.cancel();
        const u = new SpeechSynthesisUtterance(text);
        u.lang = currentLanguage() === "pt" ? "pt-BR" : "en-US";
        u.rate = 0.95;
        window.speechSynthesis.speak(u);
      }

      function purgeExpiredDaycards(list) {
        const keep = [];
        (list || []).forEach((c) => {
          if (daycardIsExpired(c)) {
            if (
              daycardsSyncLive &&
              daycardsDb &&
              c.id &&
              !String(c.id).startsWith("local-")
            ) {
              daycardsDb
                .collection("daycards")
                .doc(c.id)
                .delete()
                .catch(() => {});
            }
          } else {
            keep.push(c);
          }
        });
        return keep;
      }

      function renderDaycards() {
        const list = document.getElementById("daycardList");
        const empty = document.getElementById("daycardEmpty");
        if (!list) return;
        list.innerHTML = "";
        const visible = dayCards
          .filter((c) => !daycardIsExpired(c))
          .sort(
            (a, b) => daycardTimeMs(b.createdAt) - daycardTimeMs(a.createdAt),
          );
        if (empty) empty.hidden = visible.length > 0;
        visible.forEach((card) => {
          const who = card.from === "her" ? "her" : "me";
          const name = who === "her" ? CONFIG.names.her : CONFIG.names.me;
          const el = document.createElement("article");
          el.className =
            "daycard" +
            (who === "her" ? " from-her" : "") +
            (card.saved ? " saved" : "");
          const hasText = !!(card.text && String(card.text).trim());
          const hasAudio = !!(card.audioUrl && String(card.audioUrl).trim());
          el.innerHTML = `
            <div class="daycard-meta">
              <span class="daycard-from">${name}</span>
              <span class="daycard-badge${card.saved ? " saved" : ""}">${daycardRemainingLabel(card)}</span>
            </div>
            ${hasText ? `<div class="daycard-text"></div>` : ""}
            ${hasAudio ? `<audio class="daycard-player" controls preload="metadata" src=""></audio>` : ""}
            <div class="daycard-actions">
              ${
                hasText
                  ? `<button type="button" data-act="speak">${tr("Listen")} 🔊</button>`
                  : ""
              }
              <button type="button" data-act="${card.saved ? "unsave" : "save"}">${
                card.saved ? `${tr("Unsave")} ★` : `${tr("Save")} ☆`
              }</button>
              <button type="button" class="danger" data-act="del">${tr("Delete")}</button>
            </div>
          `;
          if (hasText) {
            el.querySelector(".daycard-text").textContent = card.text || "";
            const speakBtn = el.querySelector('[data-act="speak"]');
            if (speakBtn)
              speakBtn.addEventListener("click", () =>
                speakDaycard(card.text || ""),
              );
          }
          if (hasAudio) {
            const audioEl = el.querySelector("audio");
            if (audioEl) audioEl.src = card.audioUrl;
          }
          el.querySelector('[data-act="del"]').addEventListener("click", () =>
            deleteDaycard(card),
          );
          const saveToggleBtn = el.querySelector(
            '[data-act="save"], [data-act="unsave"]',
          );
          if (saveToggleBtn)
            saveToggleBtn.addEventListener("click", () =>
              card.saved ? unsaveDaycard(card) : saveDaycard(card),
            );
          list.appendChild(el);
        });
      }

      async function sendDaycard() {
        const ta = document.getElementById("daycardText");
        const fromSel = document.getElementById("daycardFrom");
        const btn = document.getElementById("daycardSendBtn");
        const text = (ta && ta.value ? ta.value : "").trim();
        const isPt = currentLanguage() === "pt";
        if (!text && !daycardPendingAudio) {
          showToast(
            isPt
              ? "Escreve uma mensagem ou grava/anexa um áudio."
              : "Write a message or record/upload audio.",
            "updated",
          );
          return;
        }
        const from = fromSel && fromSel.value === "her" ? "her" : "me";
        const now = Date.now();
        if (btn) btn.disabled = true;

        let audioUrl = "";
        try {
          if (daycardPendingAudio && daycardPendingAudio.blob) {
            setDaycardAudioStatus(
              isPt ? "A enviar áudio…" : "Uploading audio…",
            );
            audioUrl = await uploadDaycardAudio(
              daycardPendingAudio.blob,
              daycardPendingAudio.name,
            );
          }
        } catch (err) {
          if (btn) btn.disabled = false;
          showToast(
            isPt
              ? "Não deu para enviar o áudio. Tenta de novo."
              : "Couldn't upload audio. Try again.",
            "deleted",
          );
          return;
        }

        const payload = {
          text: text || "",
          from,
          saved: false,
          expiresAt: now + DAYCARD_TTL_MS,
          createdAt: now,
          audioUrl: audioUrl || "",
        };

        function afterSend() {
          if (ta) ta.value = "";
          clearDaycardPendingAudio();
          if (btn) btn.disabled = false;
          showToast(isPt ? "Cartão enviado." : "Card sent.", "created");
          setTabDot("daycards");
        }

        if (daycardsSyncLive && daycardsDb) {
          daycardsDb
            .collection("daycards")
            .add({
              ...payload,
              createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            })
            .then(() => afterSend())
            .catch(() => {
              dayCards.push({ id: "local-" + now, ...payload });
              afterSend();
              renderDaycards();
            });
        } else {
          dayCards.push({ id: "local-" + now, ...payload });
          afterSend();
          renderDaycards();
        }
      }

      function saveDaycard(card) {
        if (!card) return;
        const isPt = currentLanguage() === "pt";
        if (
          daycardsSyncLive &&
          daycardsDb &&
          card.id &&
          !String(card.id).startsWith("local-")
        ) {
          daycardsDb
            .collection("daycards")
            .doc(card.id)
            .update({ saved: true, expiresAt: null })
            .then(() => {
              showToast(isPt ? "Cartão guardado." : "Card saved.", "updated");
            })
            .catch(() => {
              card.saved = true;
              card.expiresAt = null;
              showToast(isPt ? "Cartão guardado." : "Card saved.", "updated");
              renderDaycards();
            });
        } else {
          card.saved = true;
          card.expiresAt = null;
          showToast(isPt ? "Cartão guardado." : "Card saved.", "updated");
          renderDaycards();
        }
      }

      function unsaveDaycard(card) {
        if (!card) return;
        const isPt = currentLanguage() === "pt";
        // Restart the 24h timer from now so the card doesn't vanish immediately
        const newExpiry = Date.now() + DAYCARD_TTL_MS;
        if (
          daycardsSyncLive &&
          daycardsDb &&
          card.id &&
          !String(card.id).startsWith("local-")
        ) {
          daycardsDb
            .collection("daycards")
            .doc(card.id)
            .update({ saved: false, expiresAt: newExpiry })
            .then(() => {
              showToast(
                isPt
                  ? "Cartão deixou de estar guardado — expira em 24h."
                  : "Card unsaved — expires in 24h.",
                "updated",
              );
            })
            .catch(() => {
              card.saved = false;
              card.expiresAt = newExpiry;
              showToast(
                isPt
                  ? "Cartão deixou de estar guardado — expira em 24h."
                  : "Card unsaved — expires in 24h.",
                "updated",
              );
              renderDaycards();
            });
        } else {
          card.saved = false;
          card.expiresAt = newExpiry;
          showToast(
            isPt
              ? "Cartão deixou de estar guardado — expira em 24h."
              : "Card unsaved — expires in 24h.",
            "updated",
          );
          renderDaycards();
        }
      }

      async function deleteDaycard(card) {
        if (!card) return;
        const isPt = currentLanguage() === "pt";
        const ok = await customConfirm(
          isPt ? "Apagar este cartão?" : "Delete this card?",
        );
        if (!ok) return;
        if (
          daycardsSyncLive &&
          daycardsDb &&
          card.id &&
          !String(card.id).startsWith("local-")
        ) {
          daycardsDb
            .collection("daycards")
            .doc(card.id)
            .delete()
            .then(() => {
              showToast(isPt ? "Cartão apagado." : "Card deleted.", "deleted");
            })
            .catch(() => {
              dayCards = dayCards.filter((c) => c.id !== card.id);
              showToast(isPt ? "Cartão apagado." : "Card deleted.", "deleted");
              renderDaycards();
            });
        } else {
          dayCards = dayCards.filter((c) => c.id !== card.id);
          showToast(isPt ? "Cartão apagado." : "Card deleted.", "deleted");
          renderDaycards();
        }
      }

      function initDaycardsUI() {
        const fromSel = document.getElementById("daycardFrom");
        if (fromSel) {
          fromSel.innerHTML = `
            <option value="me">${currentLanguage() === "pt" ? "De" : "From"} ${CONFIG.names.me}</option>
            <option value="her">${currentLanguage() === "pt" ? "De" : "From"} ${CONFIG.names.her}</option>
          `;
        }
        const recBtn = document.getElementById("daycardRecBtn");
        if (recBtn) {
          recBtn.textContent =
            currentLanguage() === "pt" ? "🎤 Gravar" : "🎤 Record";
          recBtn.addEventListener("click", toggleDaycardRecording);
        }
        document
          .getElementById("daycardClearAudioBtn")
          ?.addEventListener("click", clearDaycardPendingAudio);
        document
          .getElementById("daycardAudioFile")
          ?.addEventListener("change", (e) => {
            const file = e.target.files && e.target.files[0];
            if (!file) return;
            if (file.size > 8 * 1024 * 1024) {
              showToast(
                currentLanguage() === "pt"
                  ? "Áudio demasiado grande (máx. ~8 MB)."
                  : "Audio too large (max ~8 MB).",
                "updated",
              );
              e.target.value = "";
              return;
            }
            setDaycardPendingAudio(file, file.name || "upload.mp3");
          });
        document
          .getElementById("daycardSendBtn")
          ?.addEventListener("click", sendDaycard);
        setInterval(() => {
          if (activeTab === "daycards") renderDaycards();
        }, 60000);
      }

      (function initDaycardsSync() {
        initDaycardsUI();
        const db = getSharedFirestore();
        if (db) {
          try {
            daycardsDb = db;
            daycardsSyncLive = true;
            setDaycardsSyncPill();
            daycardsDb.collection("daycards").onSnapshot(
              (snapshot) => {
                let next = snapshot.docs.map((doc) => ({
                  id: doc.id,
                  ...doc.data(),
                }));
                next = purgeExpiredDaycards(next);
                dayCards = next;
                renderDaycards();
                refreshTabDotsFromData("daycards", dayCards);
                if (typeof renderTodayWidget === "function")
                  renderTodayWidget();
              },
              () => {
                daycardsSyncLive = false;
                setDaycardsSyncPill();
                renderDaycards();
              },
            );
          } catch (e) {
            daycardsSyncLive = false;
            setDaycardsSyncPill();
            renderDaycards();
          }
        } else {
          daycardsSyncLive = false;
          setDaycardsSyncPill();
          renderDaycards();
        }
      })();

      // Today widget — mood Firebase sync (after getSharedFirestore exists)
      (function initMoodAndTodaySync() {
        try {
          const db = getSharedFirestore();
          if (db) {
            moodDb = db;
            db.collection("moods")
              .doc("shared")
              .onSnapshot(
                (snap) => {
                  const data = snap.exists ? snap.data() : {};
                  moodState.me = data.me || "";
                  moodState.her = data.her || "";
                  moodState.meAt = moodTimeMs(data.meAt);
                  moodState.herAt = moodTimeMs(data.herAt);
                  applyMoodExpiry(true);
                  renderTodayMoods();
                },
                () => {},
              );
          }
        } catch (e) {}
        if (typeof renderTodayWidget === "function") renderTodayWidget();
      })();

      // ============================================================
      // OUR GAMES — five-deck couples card game system
      // Add more cards any time by pushing objects into GAMES_DATA[gameId];
      // no other code needs to change. Card shape:
      // { id, category, level(optional), question, followUp(optional), rare(optional) }
      // ============================================================
      const GAMES_META = {
        deep: {
          emoji: "💚",
          title: "Really Know Us",
          subtitle: "Deep",
          accent: "green",
          desc: "Meaningful questions about memories, values, and each other.",
          mechanic: "reveal",
        },
        wyr: {
          emoji: "🎲",
          title: "You or Me?",
          subtitle: "Would You Rather",
          accent: "gold",
          desc: "Impossible choices, funny and romantic. Discuss, then reveal.",
          mechanic: "predict",
        },
        flirty: {
          emoji: "🔥",
          title: "After Dark",
          subtitle: "Flirty",
          accent: "blush",
          desc: "Playful, romantic, and a little bold. Skip anything, anytime.",
          mechanic: "reveal",
        },
        chaos: {
          emoji: "😂",
          title: "Couple Chaos",
          subtitle: "Chaos",
          accent: "amber",
          desc: "Ridiculous scenarios. Answer secretly, then see if you match.",
          mechanic: "match",
        },
        future: {
          emoji: "🌎",
          title: "Someday",
          subtitle: "Future",
          accent: "plum",
          desc: "Dream about the life you're building together.",
          mechanic: "summary",
        },
      };

      const GAMES_DATA = {
        deep: [
          { id: "deep_001", category: "First Impressions", level: 1, question: "What was the very first thing you noticed about me?" },
          { id: "deep_002", category: "First Impressions", level: 1, question: "When did you first realize you liked me as more than a friend?" },
          { id: "deep_003", category: "First Impressions", level: 1, question: "What was your first impression of my laugh?" },
          { id: "deep_004", category: "Memories", level: 1, question: "What's a small, ordinary moment with me that you still think about?" },
          { id: "deep_005", category: "Memories", level: 1, question: "What is your favorite memory of us so far, and why?" },
          { id: "deep_006", category: "Memories", level: 1, question: "Describe a moment when you felt proud of us as a couple." },
          { id: "deep_007", category: "Memories", level: 1, question: "What's a photo of us that always makes you smile?" },
          { id: "deep_008", category: "Appreciation", level: 1, question: "What's something small I do that you don't think I know you appreciate?" },
          { id: "deep_009", category: "Appreciation", level: 1, question: "What is one habit of mine that you secretly love?" },
          { id: "deep_010", category: "Appreciation", level: 1, question: "When do you feel most proud of me?" },
          { id: "deep_011", category: "Personality", level: 2, question: "What's a side of my personality that took you time to understand?" },
          { id: "deep_012", category: "Personality", level: 2, question: "How would you describe me to someone who has never met me?" },
          { id: "deep_013", category: "Personality", level: 2, question: "What do you think is my greatest strength?" },
          { id: "deep_014", category: "Personality", level: 2, question: "What is something about me that still surprises you?" },
          { id: "deep_015", category: "Love", level: 2, question: "What is something I do that makes you feel loved without me saying a word?" },
          { id: "deep_016", category: "Love", level: 2, question: "How do you prefer to receive love from me?" },
          { id: "deep_017", category: "Love", level: 2, question: "What does 'home' feel like when you're with me?" },
          { id: "deep_018", category: "Communication", level: 2, question: "When do you feel most heard by me?" },
          { id: "deep_019", category: "Communication", level: 2, question: "What's the best way for me to check in with you on a hard day?" },
          { id: "deep_020", category: "Communication", level: 2, question: "Is there a topic you wish we talked about more often?" },
          { id: "deep_021", category: "Childhood", level: 2, question: "What's something from your childhood you wish I understood better?" },
          { id: "deep_022", category: "Childhood", level: 2, question: "What childhood dream still lives somewhere in you?" },
          { id: "deep_023", category: "Childhood", level: 2, question: "Who in your family shaped how you love the most?" },
          { id: "deep_024", category: "Dreams", level: 2, question: "What is a dream of yours that you haven't told many people about?" },
          { id: "deep_025", category: "Dreams", level: 2, question: "What would a perfect ordinary day with me look like?" },
          { id: "deep_026", category: "Us", level: 2, question: "What is something about me that you think you understand better than most people?" },
          { id: "deep_027", category: "Us", level: 2, question: "What inside joke of ours would you never explain to a stranger?" },
          { id: "deep_028", category: "Us", level: 2, question: "What song will always remind you of us?" },
          { id: "deep_029", category: "Relationship", level: 3, question: "What do you think has changed most about us since we met?" },
          { id: "deep_030", category: "Relationship", level: 3, question: "What is one thing we do well as a team?" },
          { id: "deep_031", category: "Relationship", level: 3, question: "What is one thing you'd like us to get better at together?" },
          { id: "deep_032", category: "Relationship", level: 3, question: "When do you feel closest to me?" },
          { id: "deep_033", category: "Values", level: 3, question: "What's a value of mine that you didn't expect to admire so much?" },
          { id: "deep_034", category: "Values", level: 3, question: "What principle would you never want us to compromise on?" },
          { id: "deep_035", category: "Fears", level: 3, question: "What's a fear about us that you rarely say out loud?" },
          { id: "deep_036", category: "Fears", level: 3, question: "What helps you feel safe when you're anxious about us?" },
          { id: "deep_037", category: "Future", level: 3, question: "What part of our future are you most excited about, and what part scares you a little?" },
          { id: "deep_038", category: "Future", level: 3, question: "What tradition do you hope we create together?" },
          { id: "deep_039", category: "Vulnerability", level: 4, question: "What's something you've never told me because you were afraid of how I'd react?", followUp: "You don't have to answer fully — even sharing a little counts." },
          { id: "deep_040", category: "Vulnerability", level: 4, question: "When was the last time you felt truly vulnerable with me?" },
          { id: "deep_041", category: "Vulnerability", level: 4, question: "What do you need from me when you're hurting that I might not always know?" },
          { id: "deep_042", category: "Things We Haven't Said", level: 4, question: "What is something you wish I asked you about more often?" },
          { id: "deep_043", category: "Things We Haven't Said", level: 4, question: "Is there a compliment you've wanted to give me but haven't?" },
          { id: "deep_044", category: "Things We Haven't Said", level: 4, question: "What's something hard you want to say, but gently?" },
          { id: "deep_045", category: "Trust", level: 4, question: "What builds trust for you the fastest in a relationship?" },
          { id: "deep_046", category: "Trust", level: 4, question: "When have you felt most trusted by me?" },
          { id: "deep_047", category: "Conflict", level: 3, question: "How do you prefer we repair after a disagreement?" },
          { id: "deep_048", category: "Conflict", level: 3, question: "What is something I do during conflict that helps you, even if I don't realize it?" },
          { id: "deep_049", category: "Conflict", level: 4, question: "What is a disagreement we handled well, and what made it work?" },
          { id: "deep_050", category: "Growth", level: 3, question: "In what way have I helped you grow since we met?" },
          { id: "deep_051", category: "Growth", level: 3, question: "What is something you've learned about love from being with me?" },
          { id: "deep_052", category: "Growth", level: 2, question: "What version of me do you hope I keep becoming?" },
          { id: "deep_053", category: "How Well Do You Know Me", level: 2, question: "What do you think I worry about more than I admit?" },
          { id: "deep_054", category: "How Well Do You Know Me", level: 2, question: "What do you think makes me feel most confident?" },
          { id: "deep_055", category: "How Well Do You Know Me", level: 3, question: "If you had to guess my biggest insecurity, what would you say?" },
          { id: "deep_056", category: "How Well Do You Know Me", level: 2, question: "What do you think is my love language, and why?" },
          { id: "deep_057", category: "Appreciation", level: 1, question: "Name three things you're grateful for about us right now." },
          { id: "deep_058", category: "Memories", level: 2, question: "What was a moment when you thought, 'I really love this person'?" },
          { id: "deep_059", category: "Memories", level: 2, question: "Tell the story of a day with me that felt perfect in a simple way." },
          { id: "deep_060", category: "Love", level: 3, question: "What does loyalty mean to you in our relationship?" },
          { id: "deep_061", category: "Love", level: 3, question: "How do you know when I need reassurance?" },
          { id: "deep_062", category: "Us", level: 3, question: "What is our superpower as a couple?" },
          { id: "deep_063", category: "Us", level: 3, question: "What would you miss most about us if we couldn't talk for a week?" },
          { id: "deep_064", category: "Communication", level: 3, question: "Do you feel more comfortable texting or talking when something is serious?" },
          { id: "deep_065", category: "Personality", level: 3, question: "What is a boundary of yours that you want me to always respect?" },
          { id: "deep_066", category: "Personality", level: 2, question: "What makes you feel most like yourself around me?" },
          { id: "deep_067", category: "Dreams", level: 3, question: "What shared goal feels most important to you this year?" },
          { id: "deep_068", category: "Values", level: 2, question: "What kind of partner do you try to be for me?" },
          { id: "deep_069", category: "Fears", level: 4, question: "What would make you feel distant from me, and how can we avoid that?" },
          { id: "deep_070", category: "Trust", level: 3, question: "What does honesty look like to you on ordinary days, not just big ones?" },
          { id: "deep_071", category: "Growth", level: 4, question: "What is something you're still learning about being in a relationship?" },
          { id: "deep_072", category: "Vulnerability", level: 3, question: "What is a soft spot of yours that you only show people you trust?" },
          { id: "deep_073", category: "Relationship", level: 4, question: "If our relationship were a season, which one would it be right now and why?" },
          { id: "deep_074", category: "Us", level: 5, question: "Tell them something you've never said out loud before.", rare: true },
          { id: "deep_075", category: "Us", level: 5, question: "Pick a memory and tell the full story, with all the details you remember.", rare: true },
          { id: "deep_076", category: "Love", level: 5, question: "In one minute, say everything you love about me without stopping.", rare: true },
          { id: "deep_077", category: "Vulnerability", level: 5, question: "Share a fear about the future and let the other person respond with care.", rare: true },
          { id: "deep_078", category: "Things We Haven't Said", level: 5, question: "Ask the question you've been avoiding — gently.", rare: true },
          { id: "deep_079", category: "Appreciation", level: 2, question: "What is the kindest thing I've ever done for you?" },
          { id: "deep_080", category: "Memories", level: 3, question: "What trip or outing with me would you do again tomorrow if you could?" },
          { id: "deep_081", category: "First Impressions", level: 2, question: "What did you almost get wrong about me at the beginning?" },
          { id: "deep_082", category: "Childhood", level: 3, question: "What part of your younger self still shows up when you're with me?" },
          { id: "deep_083", category: "Communication", level: 4, question: "What is something you need me to hear, even if it's hard to say?" },
          { id: "deep_084", category: "Love", level: 1, question: "When was the last time I made you laugh until it hurt?" },
          { id: "deep_085", category: "Us", level: 1, question: "What is your favorite way we say goodbye or goodnight?" },
          { id: "deep_086", category: "Appreciation", level: 3, question: "What about my personality balances yours?" },
          { id: "deep_087", category: "Relationship", level: 2, question: "What does quality time look like for you with me?" },
          { id: "deep_088", category: "Dreams", level: 1, question: "If we could teleport somewhere for 24 hours, where would we go?" },
          { id: "deep_089", category: "Values", level: 4, question: "What does 'forever' mean to you in practical, everyday terms?" },
          { id: "deep_090", category: "Fears", level: 2, question: "What reassures you fastest when you overthink?" },
          { id: "deep_091", category: "Trust", level: 2, question: "What is a promise between us that means a lot to you?" },
          { id: "deep_092", category: "Growth", level: 1, question: "What is one thing I do better now than when we first met?" },
          { id: "deep_093", category: "How Well Do You Know Me", level: 1, question: "What snack would I pick if I were stressed?" },
          { id: "deep_094", category: "How Well Do You Know Me", level: 1, question: "What would I order at a café without looking at the menu?" },
          { id: "deep_095", category: "Conflict", level: 2, question: "What is a signal that you're done arguing and ready to reconnect?" },
          { id: "deep_096", category: "Personality", level: 1, question: "What emoji would you use to describe me today?" },
          { id: "deep_097", category: "Memories", level: 4, question: "What is a hard moment we got through that made us stronger?" },
          { id: "deep_098", category: "Love", level: 4, question: "What does commitment look like to you on the boring days?" },
          { id: "deep_099", category: "Us", level: 4, question: "What story about us do you hope we tell people in ten years?" },
          { id: "deep_100", category: "Vulnerability", level: 2, question: "When do you find it hardest to ask for help from me?" },
          { id: "deep_101", category: "Time Capsule", level: 2, question: "If we buried a time capsule today, what's the one object you'd insist goes in it?" },
          { id: "deep_102", category: "Time Capsule", level: 2, question: "What message would you leave for us to read in ten years?" },
          { id: "deep_103", category: "Time Capsule", level: 2, question: "What current inside joke do you hope we still laugh at in a decade?" },
          { id: "deep_104", category: "Time Capsule", level: 2, question: "What's a photo from this exact month you want us to remember forever?" },
          { id: "deep_105", category: "Time Capsule", level: 2, question: "If you could freeze one week of this year in amber, which would it be?" },
          { id: "deep_106", category: "Time Capsule", level: 2, question: "What's something about \"us right now\" that you don't want to change?" },
          { id: "deep_107", category: "Time Capsule", level: 2, question: "What would you tell past-you on the day we met?" },
          { id: "deep_108", category: "Time Capsule", level: 2, question: "What's a prediction you have for where we'll be exactly one year from today?" },
          { id: "deep_109", category: "Time Capsule", level: 2, question: "What object in our home tells the truest story about us?" },
          { id: "deep_110", category: "Time Capsule", level: 2, question: "If aliens found only our text messages, what would they think we're like?" },
          { id: "deep_111", category: "Roots", level: 3, question: "What tradition from your family do you hope we carry into our own?" },
          { id: "deep_112", category: "Roots", level: 3, question: "What's a lesson your parents taught you, on purpose or not, about love?" },
          { id: "deep_113", category: "Roots", level: 3, question: "What's a memory from home that shaped how you show affection?" },
          { id: "deep_114", category: "Roots", level: 3, question: "Who from your past changed how you love now, and how?" },
          { id: "deep_115", category: "Roots", level: 3, question: "What's something about your hometown you want me to understand better?" },
          { id: "deep_116", category: "Roots", level: 3, question: "What family recipe or ritual do you want to teach me?" },
          { id: "deep_117", category: "Roots", level: 3, question: "What's a story about your grandparents' love that stuck with you?", rare: true },
          { id: "deep_118", category: "Roots", level: 3, question: "What did you learn about conflict from the adults around you growing up?" },
          { id: "deep_119", category: "Roots", level: 3, question: "What's a value your family instilled in you that still guides you?" },
          { id: "deep_120", category: "Roots", level: 3, question: "If your younger self met me today, what would surprise them most?" },
          { id: "deep_121", category: "Language of Love", level: 2, question: "Which love language do you think I express without realizing it?" },
          { id: "deep_122", category: "Language of Love", level: 2, question: "What's a way I could say \"I love you\" without using those words?" },
          { id: "deep_123", category: "Language of Love", level: 2, question: "Do you feel loved more through words, actions, or presence — and has that changed with us?" },
          { id: "deep_124", category: "Language of Love", level: 2, question: "What's a language, literal or made-up, we've built that's just ours?" },
          { id: "deep_125", category: "Language of Love", level: 2, question: "What's the kindest sentence I've ever said to you?" },
          { id: "deep_126", category: "Language of Love", level: 2, question: "What phrase do you wish I said more often?" },
          { id: "deep_127", category: "Language of Love", level: 2, question: "If our relationship had a motto, what would it be?" },
          { id: "deep_128", category: "Language of Love", level: 2, question: "What's a gesture that means more to you than any words could?" },
          { id: "deep_129", category: "Language of Love", level: 2, question: "How do you say \"I'm sorry\" best, and how do I?" },
          { id: "deep_130", category: "Language of Love", level: 2, question: "What's something you've never had to explain to me because I just understood?" },
          { id: "deep_131", category: "Identity", level: 3, question: "How has being with me changed the way you see yourself?" },
          { id: "deep_132", category: "Identity", level: 3, question: "What part of your identity feels safest to show only around me?" },
          { id: "deep_133", category: "Identity", level: 3, question: "What's a label or role you've outgrown since we got together?" },
          { id: "deep_134", category: "Identity", level: 3, question: "What do you want people to understand about you that they usually miss?" },
          { id: "deep_135", category: "Identity", level: 3, question: "What's something you're still figuring out about who you want to be?" },
          { id: "deep_136", category: "Identity", level: 3, question: "How do you want to be remembered by the people who love you?", rare: true },
          { id: "deep_137", category: "Identity", level: 3, question: "What's a version of yourself you're proud you left behind?" },
          { id: "deep_138", category: "Identity", level: 3, question: "What does \"being yourself\" around me actually feel like?" },
          { id: "deep_139", category: "Identity", level: 3, question: "What's a strength you didn't know you had until this relationship?" },
          { id: "deep_140", category: "Identity", level: 3, question: "If you had to introduce yourself only through what you love, what would you say?" },
          { id: "deep_141", category: "Gratitude", level: 1, question: "What's something ordinary today that you're quietly grateful for?" },
          { id: "deep_142", category: "Gratitude", level: 1, question: "Name a hard season that ended up giving you something good." },
          { id: "deep_143", category: "Gratitude", level: 1, question: "What's a small kindness I did recently that you haven't mentioned?" },
          { id: "deep_144", category: "Gratitude", level: 1, question: "What's something about your health or body you're grateful for right now?" },
          { id: "deep_145", category: "Gratitude", level: 1, question: "Who besides me are you especially thankful for lately, and why?" },
          { id: "deep_146", category: "Gratitude", level: 1, question: "What's a comfort in your daily life you don't take for granted?" },
          { id: "deep_147", category: "Gratitude", level: 1, question: "What's something about this exact stage of our relationship you're thankful for?" },
          { id: "deep_148", category: "Gratitude", level: 1, question: "What's a mistake that taught you something you're now grateful for?" },
          { id: "deep_149", category: "Gratitude", level: 1, question: "What's a small luxury that makes your week better?" },
          { id: "deep_150", category: "Gratitude", level: 1, question: "What do you want to remember to be grateful for on a hard day?" },
          { id: "deep_151", category: "This or That", level: 1, question: "Would you rather I remembered your stories in perfect detail or always show up when it matters most?" },
          { id: "deep_152", category: "This or That", level: 1, question: "Would you rather we grow slowly and steadily or in sudden big leaps?" },
          { id: "deep_153", category: "This or That", level: 1, question: "Would you rather know all my flaws upfront or discover them slowly?" },
          { id: "deep_154", category: "This or That", level: 1, question: "Would you rather I comfort you with words or with quiet company?" },
          { id: "deep_155", category: "This or That", level: 1, question: "Would you rather matching daily routines or separate ones that overlap on weekends?" },
          { id: "deep_156", category: "This or That", level: 1, question: "Would you rather I ask more about your day or share more about mine first?" },
          { id: "deep_157", category: "This or That", level: 1, question: "Would you rather celebrate wins loudly together or quietly between just us?" },
          { id: "deep_158", category: "This or That", level: 1, question: "Would you rather we process feelings out loud immediately or need time to think first?" },
          { id: "deep_159", category: "This or That", level: 1, question: "Would you rather I challenge your ideas more or support them more?" },
          { id: "deep_160", category: "This or That", level: 1, question: "Would you rather build a life that's mostly familiar or mostly new?" },
          { id: "deep_161", category: "Two Truths and a Lie", level: 2, question: "Tell me two true things about how you feel today and one made-up one.", followUp: "Guess which one is the lie, then tell them." },
          { id: "deep_162", category: "Two Truths and a Lie", level: 2, question: "Share two real childhood memories and one invented one.", followUp: "Guess which one is the lie, then tell them." },
          { id: "deep_163", category: "Two Truths and a Lie", level: 2, question: "Give two true reasons you're with me and one fake reason.", followUp: "Guess which one is the lie, then tell them.", rare: true },
          { id: "deep_164", category: "Two Truths and a Lie", level: 2, question: "Name two real fears and one fake one.", followUp: "Guess which one is the lie, then tell them." },
          { id: "deep_165", category: "Two Truths and a Lie", level: 2, question: "Tell two true stories from before we met and one false one.", followUp: "Guess which one is the lie, then tell them." },
          { id: "deep_166", category: "Two Truths and a Lie", level: 2, question: "Share two real dreams for our future and one made-up dream.", followUp: "Guess which one is the lie, then tell them." },
          { id: "deep_167", category: "Two Truths and a Lie", level: 2, question: "Give two true opinions about me and one exaggerated one.", followUp: "Guess which one is the lie, then tell them." },
          { id: "deep_168", category: "Two Truths and a Lie", level: 2, question: "Tell two real habits of yours and one you're making up.", followUp: "Guess which one is the lie, then tell them." },
          { id: "deep_169", category: "Two Truths and a Lie", level: 2, question: "Share two true favorite memories of us and one invented memory.", followUp: "Guess which one is the lie, then tell them." },
          { id: "deep_170", category: "Two Truths and a Lie", level: 2, question: "Name two real things you'd change about your day and one fake one.", followUp: "Guess which one is the lie, then tell them." },
          { id: "deep_171", category: "Speed Round", level: 1, question: "First word that comes to mind when you think of \"us\"?", followUp: "No overthinking — first answer only." },
          { id: "deep_172", category: "Speed Round", level: 1, question: "One thing you need right now, in five words or less?", followUp: "No overthinking — first answer only." },
          { id: "deep_173", category: "Speed Round", level: 1, question: "Best decision you've made this year, in one sentence?", followUp: "No overthinking — first answer only." },
          { id: "deep_174", category: "Speed Round", level: 1, question: "Describe today in exactly three words.", followUp: "No overthinking — first answer only." },
          { id: "deep_175", category: "Speed Round", level: 1, question: "What's the first memory of me that comes to mind, no filter?", followUp: "No overthinking — first answer only." },
          { id: "deep_176", category: "Speed Round", level: 1, question: "Name the last thing that made you laugh, fast.", followUp: "No overthinking — first answer only." },
          { id: "deep_177", category: "Speed Round", level: 1, question: "One thing you're avoiding thinking about — just name it, don't explain.", followUp: "No overthinking — first answer only." },
          { id: "deep_178", category: "Speed Round", level: 1, question: "What's the truest thing you know about yourself right now?", followUp: "No overthinking — first answer only." },
          { id: "deep_179", category: "Speed Round", level: 1, question: "Say the nicest thing about me you can think of in three seconds.", followUp: "No overthinking — first answer only." },
          { id: "deep_180", category: "Speed Round", level: 1, question: "What do you want right this second — say it before you think.", followUp: "No overthinking — first answer only." },
          { id: "deep_181", category: "Wildcard", level: 3, question: "Ask me any question you've been holding onto — right now." },
          { id: "deep_182", category: "Wildcard", level: 3, question: "Skip the question. Instead, just tell me something true." },
          { id: "deep_183", category: "Wildcard", level: 3, question: "Ask me a \"Really Know Us\" question you make up on the spot." },
          { id: "deep_184", category: "Wildcard", level: 3, question: "Whoever answers first gets to ask the next question instead of drawing." },
          { id: "deep_185", category: "Wildcard", level: 3, question: "Say a toast for us that starts with \"To us, because...\"" },
          { id: "deep_186", category: "Wildcard", level: 3, question: "Answer as if you were writing our story's next chapter." },
          { id: "deep_187", category: "Wildcard", level: 3, question: "If this card were a plot twist in our story, what would it reveal?" },
          { id: "deep_188", category: "Wildcard", level: 3, question: "Give an answer using only questions." },
          { id: "deep_189", category: "Wildcard", level: 3, question: "Pick a random object near you and explain how it reminds you of me." },
          { id: "deep_190", category: "Wildcard", level: 3, question: "Say the truest, scariest, most honest thing on your mind about us right now.", rare: true },
          { id: "deep_191", category: "Letters", level: 4, question: "If you wrote me a letter to open in a hard moment, what's one line it would include?", followUp: "Actually say it, not just think it." },
          { id: "deep_192", category: "Letters", level: 4, question: "What would the subject line be if you emailed future-you about today?", followUp: "Actually say it, not just think it." },
          { id: "deep_193", category: "Letters", level: 4, question: "Say the first sentence of a letter thanking me for something specific.", followUp: "Actually say it, not just think it." },
          { id: "deep_194", category: "Letters", level: 4, question: "What would you want me to know if you couldn't tell me in person?", followUp: "Actually say it, not just think it.", rare: true },
          { id: "deep_195", category: "Letters", level: 4, question: "If you left me a note for tomorrow morning, what would it say?", followUp: "Actually say it, not just think it." },
          { id: "deep_196", category: "Letters", level: 4, question: "What's a letter you never sent to someone, and what would it say?", followUp: "Actually say it, not just think it." },
          { id: "deep_197", category: "Letters", level: 4, question: "Compose one sentence you'd want read at our anniversary every year.", followUp: "Actually say it, not just think it." },
          { id: "deep_198", category: "Letters", level: 4, question: "What's something you'd only have the courage to say in writing?", followUp: "Actually say it, not just think it." },
          { id: "deep_199", category: "Letters", level: 4, question: "If our relationship got one page in a book, what's the last line?", followUp: "Actually say it, not just think it." },
          { id: "deep_200", category: "Letters", level: 4, question: "Write a two-line apology for something small you never actually apologized for.", followUp: "Actually say it, not just think it." },
          { id: "deep_201", category: "Comfort", level: 1, question: "What does comfort look like to you after a hard day?" },
          { id: "deep_202", category: "Comfort", level: 1, question: "What is the smallest thing I do that makes you feel calmer?" },
          { id: "deep_203", category: "Comfort", level: 2, question: "When you're overwhelmed, do you want solutions or just my presence?" },
          { id: "deep_204", category: "Comfort", level: 2, question: "What's a place, real or imagined, where you feel completely safe with me?" },
          { id: "deep_205", category: "Comfort", level: 2, question: "What sound or silence helps you settle down the fastest?" },
          { id: "deep_206", category: "Comfort", level: 3, question: "What's something you never had to ask me for, because I just noticed you needed it?" },
          { id: "deep_207", category: "Comfort", level: 1, question: "Do you prefer a hug, a joke, or silence when you're upset?" },
          { id: "deep_208", category: "Comfort", level: 3, question: "What's the most comforted you've ever felt in your life, and was I there?" },
          { id: "deep_209", category: "Comfort", level: 2, question: "What's one thing I say that instantly makes you feel better?" },
          { id: "deep_210", category: "Comfort", level: 4, question: "What comfort do you wish you'd asked for as a kid that you can ask me for now?", followUp: "You don't have to answer fully — even sharing a little counts.", rare: true },
          { id: "deep_211", category: "Gratitude", level: 1, question: "What's one ordinary Tuesday you're quietly grateful for?" },
          { id: "deep_212", category: "Gratitude", level: 1, question: "Name a small thing about our routine you'd genuinely miss if it disappeared." },
          { id: "deep_213", category: "Gratitude", level: 2, question: "What's something hard you went through that you're grateful I saw you through?" },
          { id: "deep_214", category: "Gratitude", level: 1, question: "What part of your day am I usually not there for, that you wish I could see?" },
          { id: "deep_215", category: "Gratitude", level: 2, question: "What's a risk you took because you knew I'd support you either way?" },
          { id: "deep_216", category: "Gratitude", level: 1, question: "What is something about your life now that you don't take for granted anymore?" },
          { id: "deep_217", category: "Gratitude", level: 3, question: "What's a version of gratitude you feel for me that's hard to put into words?" },
          { id: "deep_218", category: "Gratitude", level: 1, question: "What's a habit of mine you didn't expect to be thankful for?" },
          { id: "deep_219", category: "Gratitude", level: 2, question: "When do you catch yourself feeling lucky about us, out of nowhere?" },
          { id: "deep_220", category: "Gratitude", level: 4, question: "Say three things about me you've never actually thanked me for." },
          { id: "deep_221", category: "Home", level: 1, question: "What makes a place feel like 'home' to you when I'm not physically there?" },
          { id: "deep_222", category: "Home", level: 1, question: "What smell or sound instantly makes you think of home?" },
          { id: "deep_223", category: "Home", level: 2, question: "Do you feel more 'home' in silence with me, or in noise and activity?" },
          { id: "deep_224", category: "Home", level: 1, question: "What is one object that, if lost, would feel like losing a piece of us?" },
          { id: "deep_225", category: "Home", level: 2, question: "Have I ever felt like home to you before we even had a shared address?" },
          { id: "deep_226", category: "Home", level: 3, question: "What does it mean to you to build a home, versus just live in a house?" },
          { id: "deep_227", category: "Home", level: 1, question: "What's your favorite corner of wherever you live right now, and why?" },
          { id: "deep_228", category: "Home", level: 2, question: "What routine, however small, makes a place feel lived-in and ours?" },
          { id: "deep_229", category: "Home", level: 1, question: "If home were a feeling instead of a place, how would you describe it?" },
          { id: "deep_230", category: "Home", level: 3, question: "What's something from your childhood home you want to recreate in ours someday?" },
          { id: "deep_231", category: "Identity", level: 2, question: "What part of who you are today did you build because of us?" },
          { id: "deep_232", category: "Identity", level: 2, question: "What's something about yourself you understand better since being with me?" },
          { id: "deep_233", category: "Identity", level: 3, question: "What identity or role matters most to you outside of being my partner?" },
          { id: "deep_234", category: "Identity", level: 2, question: "How do you protect your individuality inside a relationship?" },
          { id: "deep_235", category: "Identity", level: 3, question: "What's a label you used to define yourself by that you've outgrown?" },
          { id: "deep_236", category: "Identity", level: 1, question: "What's something true about you that has nothing to do with me at all?" },
          { id: "deep_237", category: "Identity", level: 4, question: "What part of yourself are you still figuring out, even now?" },
          { id: "deep_238", category: "Identity", level: 2, question: "Do you feel more like yourself when you're alone, or when you're with me?" },
          { id: "deep_239", category: "Identity", level: 3, question: "What's a belief about yourself I helped you unlearn?" },
          { id: "deep_240", category: "Identity", level: 2, question: "If you introduced yourself with no job title and no relationship status, who are you?" },
          { id: "deep_241", category: "Milestones", level: 2, question: "What moment made you realize 'this is serious' between us?" },
          { id: "deep_242", category: "Milestones", level: 1, question: "What's a milestone of ours, big or small, that people would underestimate?" },
          { id: "deep_243", category: "Milestones", level: 2, question: "What milestone are you most looking forward to next?" },
          { id: "deep_244", category: "Milestones", level: 3, question: "Which milestone changed how you saw our future the most?" },
          { id: "deep_245", category: "Milestones", level: 1, question: "What's a 'first' with me you still remember in detail?" },
          { id: "deep_246", category: "Milestones", level: 2, question: "What milestone do you wish we'd celebrated more than we did?" },
          { id: "deep_247", category: "Milestones", level: 3, question: "What private milestone, one nobody else knows about, matters most to you?" },
          { id: "deep_248", category: "Milestones", level: 1, question: "What's a small 'we made it' moment we don't talk about enough?" },
          { id: "deep_249", category: "Milestones", level: 4, question: "What milestone still ahead of us scares you a little, in a good way?" },
          { id: "deep_250", category: "Milestones", level: 5, question: "Tell the full story of the moment you knew we'd last.", rare: true },
          { id: "deep_251", category: "This or That", level: 1, question: "Would you rather I remembered your coffee order or your schedule perfectly?" },
          { id: "deep_252", category: "This or That", level: 1, question: "Would you rather we texted all day or called once at night?" },
          { id: "deep_253", category: "This or That", level: 1, question: "Would you rather I noticed when you're quiet or when you're loud?" },
          { id: "deep_254", category: "This or That", level: 1, question: "Would you rather we made big plans together or lived more day by day?" },
          { id: "deep_255", category: "This or That", level: 1, question: "Would you rather I asked more questions or shared more of my own thoughts?" },
          { id: "deep_256", category: "This or That", level: 1, question: "Would you rather I was the one who worries or the one who reassures?" },
          { id: "deep_257", category: "This or That", level: 1, question: "Would you rather we kept most things private or shared almost everything with friends?" },
          { id: "deep_258", category: "This or That", level: 1, question: "Would you rather I planned surprises or asked you what you actually want?" },
          { id: "deep_259", category: "This or That", level: 1, question: "Would you rather our love be loud and obvious or quiet and steady?" },
          { id: "deep_260", category: "This or That", level: 1, question: "Would you rather I forgave quickly or took time to really process first?" },
          { id: "deep_261", category: "Speed Round", level: 1, question: "One word for how you feel right now, no thinking.", followUp: "No overthinking — first answer only." },
          { id: "deep_262", category: "Speed Round", level: 1, question: "The last thing that surprised you, in five words or less.", followUp: "No overthinking — first answer only." },
          { id: "deep_263", category: "Speed Round", level: 1, question: "Name a smell that instantly reminds you of me.", followUp: "No overthinking — first answer only." },
          { id: "deep_264", category: "Speed Round", level: 1, question: "The first place you'd want to go, right now, no planning.", followUp: "No overthinking — first answer only." },
          { id: "deep_265", category: "Speed Round", level: 1, question: "One thing you're proud of yourself for this week.", followUp: "No overthinking — first answer only." },
          { id: "deep_266", category: "Speed Round", level: 1, question: "Say the first nickname for me that comes to mind.", followUp: "No overthinking — first answer only." },
          { id: "deep_267", category: "Speed Round", level: 1, question: "The emoji that best describes today, no explanation.", followUp: "No overthinking — first answer only." },
          { id: "deep_268", category: "Speed Round", level: 1, question: "One thing you want more of in your life right now.", followUp: "No overthinking — first answer only." },
          { id: "deep_269", category: "Speed Round", level: 1, question: "First song lyric that pops into your head.", followUp: "No overthinking — first answer only." },
          { id: "deep_270", category: "Speed Round", level: 1, question: "The truest compliment you can give me in three words.", followUp: "No overthinking — first answer only." },
          { id: "deep_271", category: "Wildcard", level: 3, question: "Trade questions: ask me anything you've always wanted to know, right now." },
          { id: "deep_272", category: "Wildcard", level: 3, question: "Describe today as if it were a chapter title in our story." },
          { id: "deep_273", category: "Wildcard", level: 3, question: "Pick one word to ban from our vocabulary for the rest of the night, and why." },
          { id: "deep_274", category: "Wildcard", level: 3, question: "Answer this question, but only using questions of your own." },
          { id: "deep_275", category: "Wildcard", level: 4, question: "Say something true about us that you've never said out loud before." },
          { id: "deep_276", category: "Wildcard", level: 3, question: "If tonight had a soundtrack, what's the one song that plays right now?" },
          { id: "deep_277", category: "Wildcard", level: 3, question: "Invent a new rule for our relationship, on the spot, and commit to it." },
          { id: "deep_278", category: "Wildcard", level: 4, question: "Skip your turn and instead do something kind for me right now." },
          { id: "deep_279", category: "Wildcard", level: 3, question: "Pick an object nearby and explain, honestly, what it says about our life together." },
          { id: "deep_280", category: "Wildcard", level: 5, question: "Say the most honest thing on your mind right now, no matter how small.", rare: true },
          { id: "deep_281", category: "Values", level: 2, question: "What value did your family raise you with that you now question?" },
          { id: "deep_282", category: "Values", level: 2, question: "What matters more to you in a hard decision: logic or feeling?" },
          { id: "deep_283", category: "Values", level: 3, question: "What's a value we don't share but you've come to respect in me anyway?" },
          { id: "deep_284", category: "Values", level: 2, question: "What do you think a relationship owes each person, at minimum?" },
          { id: "deep_285", category: "Values", level: 3, question: "What's something you'd never compromise on, even for me?" },
          { id: "deep_286", category: "Values", level: 2, question: "What does integrity look like in the small, unwatched moments?" },
          { id: "deep_287", category: "Values", level: 3, question: "What value do you hope we pass on if we ever raise a family?" },
          { id: "deep_288", category: "Values", level: 1, question: "What's a small act of kindness that says a lot about someone's character?" },
          { id: "deep_289", category: "Values", level: 3, question: "What does 'showing up' for someone really mean to you?" },
          { id: "deep_290", category: "Values", level: 2, question: "What's a value you've had to defend, even when it wasn't easy?" },
          { id: "deep_291", category: "Time", level: 2, question: "If you could freeze one hour with me forever, which one would it be?" },
          { id: "deep_292", category: "Time", level: 1, question: "Do you feel like time moves faster or slower when you're with me?" },
          { id: "deep_293", category: "Time", level: 3, question: "What's a moment you wish had lasted longer than it did?" },
          { id: "deep_294", category: "Time", level: 2, question: "What do you want us to make more time for this year?" },
          { id: "deep_295", category: "Time", level: 2, question: "If we could relive any single day together exactly as it happened, which one?" },
          { id: "deep_296", category: "Time", level: 3, question: "What's something you used to think we had plenty of time for, and now don't take for granted?" },
          { id: "deep_297", category: "Time", level: 1, question: "What time of day do you feel most connected to me?" },
          { id: "deep_298", category: "Time", level: 4, question: "If you had one more hour with the version of us from a year ago, what would you say?" },
          { id: "deep_299", category: "Time", level: 2, question: "What's a slow, uneventful memory of us that you wouldn't trade for anything?" },
          { id: "deep_300", category: "Time", level: 3, question: "How has your sense of 'the future' changed since we started counting time together?" },
        ],
        wyr: [
          { id: "wyr_001", category: "Funny", question: "Would you rather I sang out loud every time I was happy, or danced badly every time I was excited?", followUp: "Why?" },
          { id: "wyr_002", category: "Funny", question: "Would you rather share a toothbrush for a week or a pillow for a year?", followUp: "Why?" },
          { id: "wyr_003", category: "Funny", question: "Would you rather only communicate in memes for a day or only in voice notes?", followUp: "Why?" },
          { id: "wyr_004", category: "Funny", question: "Would you rather I had a chaotic laugh or a chaotic sneeze?", followUp: "Why?" },
          { id: "wyr_005", category: "Funny", question: "Would you rather be stuck in a karaoke booth with me for 3 hours or a silent library?", followUp: "Why?" },
          { id: "wyr_006", category: "Romantic", question: "Would you rather relive our first date forever, or fast-forward to our future wedding day?", followUp: "Why?" },
          { id: "wyr_007", category: "Romantic", question: "Would you rather get one long love letter a year, or one small sweet note every week?", followUp: "Why?" },
          { id: "wyr_008", category: "Romantic", question: "Would you rather surprise me with flowers or with a home-cooked meal?", followUp: "Why?" },
          { id: "wyr_009", category: "Romantic", question: "Would you rather watch the sunrise together or the sunset?", followUp: "Why?" },
          { id: "wyr_010", category: "Romantic", question: "Would you rather hold hands in public always, or save the biggest affection for private?", followUp: "Why?" },
          { id: "wyr_011", category: "Impossible Choices", question: "Would you rather never argue again but rarely talk deeply, or argue sometimes but always talk deeply?", followUp: "Why?" },
          { id: "wyr_012", category: "Impossible Choices", question: "Would you rather know every thought I have for a day, or have me know every thought you have?", followUp: "Why?" },
          { id: "wyr_013", category: "Impossible Choices", question: "Would you rather give up social media for a month or give up desserts for a month?", followUp: "Why?" },
          { id: "wyr_014", category: "Impossible Choices", question: "Would you rather always be 10 minutes early or always fashionably late together?", followUp: "Why?" },
          { id: "wyr_015", category: "Travel", question: "Would you rather spend a year traveling on a tiny budget, or take one perfect two-week trip with no budget?", followUp: "Why?" },
          { id: "wyr_016", category: "Travel", question: "Would you rather explore a big city together or a quiet beach town?", followUp: "Why?" },
          { id: "wyr_017", category: "Travel", question: "Would you rather backpack with one backpack each, or travel with oversized suitcases?", followUp: "Why?" },
          { id: "wyr_018", category: "Travel", question: "Would you rather visit the same favorite place every year, or a new country every year?", followUp: "Why?" },
          { id: "wyr_019", category: "Travel", question: "Would you rather get lost together on purpose, or plan every hour of a trip?", followUp: "Why?" },
          { id: "wyr_020", category: "Food", question: "Would you rather I cooked for you every night for a month, or you cooked for me?", followUp: "Why?" },
          { id: "wyr_021", category: "Food", question: "Would you rather only eat spicy food for a week or only bland food for a week?", followUp: "Why?" },
          { id: "wyr_022", category: "Food", question: "Would you rather share every meal from the same plate, or never share food again?", followUp: "Why?" },
          { id: "wyr_023", category: "Food", question: "Would you rather try a scary new restaurant or stick to our usual place?", followUp: "Why?" },
          { id: "wyr_024", category: "Lifestyle", question: "Would you rather we lived somewhere loud and exciting, or somewhere quiet and slow?", followUp: "Why?" },
          { id: "wyr_025", category: "Lifestyle", question: "Would you rather a tiny cozy apartment or a big empty house?", followUp: "Why?" },
          { id: "wyr_026", category: "Lifestyle", question: "Would you rather mornings together or late nights together?", followUp: "Why?" },
          { id: "wyr_027", category: "Lifestyle", question: "Would you rather a pet that is chaos or a pet that is calm?", followUp: "Why?" },
          { id: "wyr_028", category: "Relationship", question: "Would you rather I planned every date for a month, or you did?", followUp: "Why?" },
          { id: "wyr_029", category: "Relationship", question: "Would you rather more deep talks or more silly adventures?", followUp: "Why?" },
          { id: "wyr_030", category: "Relationship", question: "Would you rather solve problems immediately or take space first?", followUp: "Why?" },
          { id: "wyr_031", category: "Relationship", question: "Would you rather matchy outfits or completely different styles?", followUp: "Why?" },
          { id: "wyr_032", category: "Future", question: "Would you rather know exactly where we'll be in 10 years, or be surprised by it?", followUp: "Why?" },
          { id: "wyr_033", category: "Future", question: "Would you rather live near family or build our own little world far away?", followUp: "Why?" },
          { id: "wyr_034", category: "Future", question: "Would you rather save aggressively for a big goal or enjoy more small treats along the way?", followUp: "Why?" },
          { id: "wyr_035", category: "Embarrassing", question: "Would you rather I accidentally sent you my whole search history, or my entire camera roll?", followUp: "Why?" },
          { id: "wyr_036", category: "Embarrassing", question: "Would you rather trip in public together or have a loud stomach growl on a quiet date?", followUp: "Why?" },
          { id: "wyr_037", category: "Embarrassing", question: "Would you rather mispronounce a word confidently or forget someone's name mid-intro?", followUp: "Why?" },
          { id: "wyr_038", category: "Personality", question: "Would you rather I was too honest, or too nice?", followUp: "Why?" },
          { id: "wyr_039", category: "Personality", question: "Would you rather a partner who teases you or a partner who is always gentle?", followUp: "Why?" },
          { id: "wyr_040", category: "Personality", question: "Would you rather be the planner or the spontaneous one in our duo?", followUp: "Why?" },
          { id: "wyr_041", category: "Hypothetical", question: "Would you rather we could read each other's minds for a day, or swap bodies for a day?", followUp: "Why?" },
          { id: "wyr_042", category: "Hypothetical", question: "Would you rather pause time for a perfect hour together, or rewind one imperfect moment?", followUp: "Why?" },
          { id: "wyr_043", category: "Hypothetical", question: "Would you rather have a theme song that plays when we hug, or subtitles for our sarcasm?", followUp: "Why?" },
          { id: "wyr_044", category: "Choose Between Us", question: "Would you rather I remembered every important date perfectly, or always showed up early?", followUp: "Why?" },
          { id: "wyr_045", category: "Choose Between Us", question: "Would you rather give up your phone for a week, or give up alone time for a week — just to be around me more?", followUp: "Why?", rare: true },
          { id: "wyr_046", category: "Choose Between Us", question: "Would you rather I pick the movie always, or you pick the restaurant always?", followUp: "Why?" },
          { id: "wyr_047", category: "Chaos", question: "Would you rather we got stuck in an elevator together for six hours, or on a long delayed flight together?", followUp: "Why?" },
          { id: "wyr_048", category: "Chaos", question: "Would you rather a power outage date night or a rainstorm that cancels all plans?", followUp: "Why?" },
          { id: "wyr_049", category: "Chaos", question: "Would you rather lose our keys together or our phones together for a day?", followUp: "Why?" },
          { id: "wyr_050", category: "Romantic", question: "Would you rather plan our next date together right now, or let me plan it as a surprise?", followUp: "If you pick 'plan it now' — actually do it before moving on.", rare: true },
          { id: "wyr_051", category: "Funny", question: "Would you rather only speak in questions for an hour or only answer with song lyrics?", followUp: "Why?" },
          { id: "wyr_052", category: "Travel", question: "Would you rather road trip with no playlist or flight with no snacks?", followUp: "Why?" },
          { id: "wyr_053", category: "Food", question: "Would you rather brunch every weekend or late-night snacks every night?", followUp: "Why?" },
          { id: "wyr_054", category: "Lifestyle", question: "Would you rather a clean minimalist home or a cozy cluttered one?", followUp: "Why?" },
          { id: "wyr_055", category: "Relationship", question: "Would you rather more physical affection or more verbal affection?", followUp: "Why?" },
          { id: "wyr_056", category: "Future", question: "Would you rather a small intimate wedding or a big joyful party?", followUp: "Why?" },
          { id: "wyr_057", category: "Embarrassing", question: "Would you rather your partner see your childhood photos or your middle-school diary?", followUp: "Why?" },
          { id: "wyr_058", category: "Personality", question: "Would you rather be called out lovingly or comforted first when you're wrong?", followUp: "Why?" },
          { id: "wyr_059", category: "Hypothetical", question: "Would you rather share one dream every night or one secret every week?", followUp: "Why?" },
          { id: "wyr_060", category: "Choose Between Us", question: "Would you rather I learn your hobby or you learn mine?", followUp: "Why?" },
          { id: "wyr_061", category: "Chaos", question: "Would you rather cook a complicated recipe together or assemble furniture together?", followUp: "Why?" },
          { id: "wyr_062", category: "Funny", question: "Would you rather a partner who steals the blankets or steals the fries?", followUp: "Why?" },
          { id: "wyr_063", category: "Romantic", question: "Would you rather slow dance in the kitchen or kiss in the rain?", followUp: "Why?" },
          { id: "wyr_064", category: "Travel", question: "Would you rather mountains or ocean for our next getaway?", followUp: "Why?" },
          { id: "wyr_065", category: "Food", question: "Would you rather try every street food in a city or one fancy tasting menu?", followUp: "Why?" },
          { id: "wyr_066", category: "Lifestyle", question: "Would you rather work from home together or commute and meet after work?", followUp: "Why?" },
          { id: "wyr_067", category: "Relationship", question: "Would you rather weekly check-ins about feelings or only talk when needed?", followUp: "Why?" },
          { id: "wyr_068", category: "Future", question: "Would you rather adopt a rescue pet next year or wait until we're more settled?", followUp: "Why?" },
          { id: "wyr_069", category: "Embarrassing", question: "Would you rather your laugh is the loudest in the room or your sneeze?", followUp: "Why?" },
          { id: "wyr_070", category: "Personality", question: "Would you rather a competitive partner or a cooperative partner in games?", followUp: "Why?" },
          { id: "wyr_071", category: "Hypothetical", question: "Would you rather switch our morning routines for a week or our sleep schedules?", followUp: "Why?" },
          { id: "wyr_072", category: "Choose Between Us", question: "Would you rather I text first always or you do?", followUp: "Why?" },
          { id: "wyr_073", category: "Chaos", question: "Would you rather host a chaotic dinner party or attend one?", followUp: "Why?" },
          { id: "wyr_074", category: "Funny", question: "Would you rather only whisper for a day or only shout?", followUp: "Why?" },
          { id: "wyr_075", category: "Romantic", question: "Would you rather a handwritten letter or a voice message that goes on forever?", followUp: "Why?" },
          { id: "wyr_076", category: "Travel", question: "Would you rather one long layover with me or a short flight with turbulence?", followUp: "Why?" },
          { id: "wyr_077", category: "Food", question: "Would you rather never eat pizza again or never eat ice cream again?", followUp: "Why?" },
          { id: "wyr_078", category: "Lifestyle", question: "Would you rather a plant-filled apartment or a candle-filled apartment?", followUp: "Why?" },
          { id: "wyr_079", category: "Relationship", question: "Would you rather more date nights out or more cozy nights in?", followUp: "Why?" },
          { id: "wyr_080", category: "Future", question: "Would you rather buy a house first or travel the world first?", followUp: "Why?" },
          { id: "wyr_081", category: "Embarrassing", question: "Would you rather your partner narrate your life like a documentary for a day?", followUp: "Why?" },
          { id: "wyr_082", category: "Personality", question: "Would you rather someone who challenges your ideas or always agrees?", followUp: "Why?" },
          { id: "wyr_083", category: "Hypothetical", question: "Would you rather freeze one perfect day with me or skip one hard day?", followUp: "Why?" },
          { id: "wyr_084", category: "Choose Between Us", question: "Would you rather share a calendar or keep some plans private?", followUp: "Why?" },
          { id: "wyr_085", category: "Chaos", question: "Would you rather a surprise visit or a planned weekend together?", followUp: "Why?" },
          { id: "wyr_086", category: "Funny", question: "Would you rather our pet could talk for one day or our furniture could gossip?", followUp: "Why?" },
          { id: "wyr_087", category: "Romantic", question: "Would you rather match necklaces or matching playlists?", followUp: "Why?" },
          { id: "wyr_088", category: "Travel", question: "Would you rather sleep in a tent or a fancy hotel?", followUp: "Why?" },
          { id: "wyr_089", category: "Food", question: "Would you rather cook with no recipe or follow a recipe exactly?", followUp: "Why?" },
          { id: "wyr_090", category: "Lifestyle", question: "Would you rather no notifications on dates or no phones in the bedroom?", followUp: "Why?" },
          { id: "wyr_091", category: "Relationship", question: "Would you rather long good morning texts or long goodnight calls?", followUp: "Why?" },
          { id: "wyr_092", category: "Future", question: "Would you rather raise kids in a city or in the countryside?", followUp: "Why?" },
          { id: "wyr_093", category: "Impossible Choices", question: "Would you rather always win board games or always win arguments?", followUp: "Why?" },
          { id: "wyr_094", category: "Impossible Choices", question: "Would you rather be slightly bored together or constantly busy apart?", followUp: "Why?" },
          { id: "wyr_095", category: "Romantic", question: "Would you rather a slow long-distance chapter with deep talks, or a chaotic in-person week?", followUp: "Why?" },
          { id: "wyr_096", category: "Funny", question: "Would you rather I adopt your slang or you adopt mine forever?", followUp: "Why?" },
          { id: "wyr_097", category: "Chaos", question: "Would you rather a spontaneous road trip tonight or a carefully planned one next month?", followUp: "Why?" },
          { id: "wyr_098", category: "Choose Between Us", question: "Would you rather I always choose the music or always choose the photos we post?", followUp: "Why?" },
          { id: "wyr_099", category: "Hypothetical", question: "Would you rather a movie about our love story or a book?", followUp: "Why?" },
          { id: "wyr_100", category: "Future", question: "Would you rather grow old in one city or move every five years?", followUp: "Why?" },
          { id: "wyr_101", category: "Funny", question: "Would you rather I narrated our relationship like a nature documentary or a soap opera?", followUp: "Why?" },
          { id: "wyr_102", category: "Funny", question: "Would you rather I always won at rock-paper-scissors or always lost on purpose to make you happy?", followUp: "Why?" },
          { id: "wyr_103", category: "Funny", question: "Would you rather have a signature dance move or a signature catchphrase as a couple?", followUp: "Why?" },
          { id: "wyr_104", category: "Funny", question: "Would you rather I laughed at all your jokes, even bad ones, or was brutally honest about them?", followUp: "Why?" },
          { id: "wyr_105", category: "Funny", question: "Would you rather we had a couple's theme song that played every time we entered a room?", followUp: "Why?", rare: true },
          { id: "wyr_106", category: "Funny", question: "Would you rather I texted in all lowercase forever or ALL CAPS forever?", followUp: "Why?" },
          { id: "wyr_107", category: "Funny", question: "Would you rather our future pet judged only me or only you?", followUp: "Why?" },
          { id: "wyr_108", category: "Funny", question: "Would you rather I mispronounced one word forever or you did?", followUp: "Why?" },
          { id: "wyr_109", category: "Funny", question: "Would you rather we had matching ringtones or matching typing sounds?", followUp: "Why?" },
          { id: "wyr_110", category: "Funny", question: "Would you rather I snorted when I laughed or you did, for the rest of our lives?", followUp: "Why?" },
          { id: "wyr_111", category: "Romantic", question: "Would you rather a candlelit dinner at home or a picnic under the stars?", followUp: "Why?" },
          { id: "wyr_112", category: "Romantic", question: "Would you rather I wrote you poetry or sang you a love song, badly?", followUp: "Why?" },
          { id: "wyr_113", category: "Romantic", question: "Would you rather we recreate our first kiss every anniversary or invent a new tradition each year?", followUp: "Why?" },
          { id: "wyr_114", category: "Romantic", question: "Would you rather a slow dance in the kitchen at midnight or a quiet walk at sunrise?", followUp: "Why?" },
          { id: "wyr_115", category: "Romantic", question: "Would you rather I surprised you with breakfast in bed or a spontaneous day trip?", followUp: "Why?" },
          { id: "wyr_116", category: "Romantic", question: "Would you rather we exchange love letters once a year or leave little notes constantly?", followUp: "Why?", rare: true },
          { id: "wyr_117", category: "Romantic", question: "Would you rather a shared playlist that grows forever or one perfect mixtape?", followUp: "Why?" },
          { id: "wyr_118", category: "Romantic", question: "Would you rather we renew our vows every five years or never need to because nothing changes?", followUp: "Why?" },
          { id: "wyr_119", category: "Romantic", question: "Would you rather I remembered every anniversary perfectly or surprised you on random ordinary days?", followUp: "Why?" },
          { id: "wyr_120", category: "Romantic", question: "Would you rather a long slow hug every morning or a quick kiss every time we part?", followUp: "Why?" },
          { id: "wyr_121", category: "Travel", question: "Would you rather we get hopelessly lost in a beautiful city or arrive exactly on schedule to somewhere boring?", followUp: "Why?" },
          { id: "wyr_122", category: "Travel", question: "Would you rather road trip through deserts or through mountains?", followUp: "Why?" },
          { id: "wyr_123", category: "Travel", question: "Would you rather visit ten countries fast or live in one country slowly for a year?", followUp: "Why?" },
          { id: "wyr_124", category: "Travel", question: "Would you rather camp under real stars or glamp with all the comforts?", followUp: "Why?" },
          { id: "wyr_125", category: "Travel", question: "Would you rather I planned every detail of our trip or we wing it completely?", followUp: "Why?" },
          { id: "wyr_126", category: "Travel", question: "Would you rather learn to say \"I love you\" in every language we visit, or order food perfectly instead?", followUp: "Why?" },
          { id: "wyr_127", category: "Travel", question: "Would you rather a trip with zero phone signal or one with perfect wifi the whole time?", followUp: "Why?" },
          { id: "wyr_128", category: "Travel", question: "Would you rather explore ancient ruins together or dive a coral reef together?", followUp: "Why?" },
          { id: "wyr_129", category: "Travel", question: "Would you rather travel with a huge group of friends or completely alone, just us?", followUp: "Why?" },
          { id: "wyr_130", category: "Travel", question: "Would you rather a spontaneous overnight train or a slow scenic ferry?", followUp: "Why?" },
          { id: "wyr_131", category: "Food", question: "Would you rather cook a five-course meal together or order the weirdest thing on a menu and share it?", followUp: "Why?" },
          { id: "wyr_132", category: "Food", question: "Would you rather share dessert always or never share dessert again?", followUp: "Why?" },
          { id: "wyr_133", category: "Food", question: "Would you rather I made your coffee perfectly every morning or you made mine?", followUp: "Why?" },
          { id: "wyr_134", category: "Food", question: "Would you rather try a food neither of us has heard of or go back to our favorite comfort meal?", followUp: "Why?" },
          { id: "wyr_135", category: "Food", question: "Would you rather a \"no phones at dinner\" rule forever or a \"dessert before dinner sometimes\" rule?", followUp: "Why?" },
          { id: "wyr_136", category: "Food", question: "Would you rather cook disasters together and laugh about it, or always follow the recipe perfectly?", followUp: "Why?" },
          { id: "wyr_137", category: "Food", question: "Would you rather a home that always smells like fresh bread or always like fresh coffee?", followUp: "Why?" },
          { id: "wyr_138", category: "Food", question: "Would you rather eat street food from every stall or one incredible tasting menu?", followUp: "Why?" },
          { id: "wyr_139", category: "Food", question: "Would you rather breakfast for dinner every week or dinner for breakfast every week?", followUp: "Why?" },
          { id: "wyr_140", category: "Food", question: "Would you rather I remembered your order exactly, or you remembered mine?", followUp: "Why?" },
          { id: "wyr_141", category: "Lifestyle", question: "Would you rather a home full of books or a home full of plants?", followUp: "Why?" },
          { id: "wyr_142", category: "Lifestyle", question: "Would you rather live somewhere with four real seasons or somewhere warm all year?", followUp: "Why?" },
          { id: "wyr_143", category: "Lifestyle", question: "Would you rather wake up early together or stay up late together, permanently?", followUp: "Why?" },
          { id: "wyr_144", category: "Lifestyle", question: "Would you rather a minimalist life with less stuff or a cozy life with more?", followUp: "Why?" },
          { id: "wyr_145", category: "Lifestyle", question: "Would you rather a weekly game night or a weekly movie night, forever?", followUp: "Why?" },
          { id: "wyr_146", category: "Lifestyle", question: "Would you rather split chores strictly by category or trade off randomly?", followUp: "Why?" },
          { id: "wyr_147", category: "Lifestyle", question: "Would you rather a loud, social weekend every week or a quiet one every week?", followUp: "Why?" },
          { id: "wyr_148", category: "Lifestyle", question: "Would you rather live near the ocean or near mountains?", followUp: "Why?" },
          { id: "wyr_149", category: "Lifestyle", question: "Would you rather a home office each, or one shared creative space?", followUp: "Why?" },
          { id: "wyr_150", category: "Lifestyle", question: "Would you rather a Sunday routine that never changes, or one that's different every week?", followUp: "Why?" },
          { id: "wyr_151", category: "Relationship", question: "Would you rather never run out of things to talk about, or never run out of comfortable silence?", followUp: "Why?" },
          { id: "wyr_152", category: "Relationship", question: "Would you rather always know exactly how the other feels, or always be a little curious?", followUp: "Why?" },
          { id: "wyr_153", category: "Relationship", question: "Would you rather compliment each other daily, or save them for when they really count?", followUp: "Why?" },
          { id: "wyr_154", category: "Relationship", question: "Would you rather resolve fights the same night, or take a full day to think first?", followUp: "Why?" },
          { id: "wyr_155", category: "Relationship", question: "Would you rather a couple's therapist we check in with yearly, or handle everything ourselves?", followUp: "Why?" },
          { id: "wyr_156", category: "Relationship", question: "Would you rather be best friends who fell in love, or lovers who became best friends?", followUp: "Why?" },
          { id: "wyr_157", category: "Relationship", question: "Would you rather express love through big gestures or tiny daily ones?", followUp: "Why?" },
          { id: "wyr_158", category: "Relationship", question: "Would you rather I remembered the small details, or the big milestones better?", followUp: "Why?" },
          { id: "wyr_159", category: "Relationship", question: "Would you rather we grow at the exact same pace, or take turns leading?", followUp: "Why?" },
          { id: "wyr_160", category: "Relationship", question: "Would you rather a relationship with zero secrets, or one with a little mystery left?", followUp: "Why?" },
          { id: "wyr_161", category: "Future", question: "Would you rather retire early and modestly, or retire late but wealthy?", followUp: "Why?" },
          { id: "wyr_162", category: "Future", question: "Would you rather a wedding abroad, or a wedding at home with everyone we love?", followUp: "Why?" },
          { id: "wyr_163", category: "Future", question: "Would you rather one big family reunion a year, or small visits often?", followUp: "Why?" },
          { id: "wyr_164", category: "Future", question: "Would you rather our kids, if any, look more like you or act more like you?", followUp: "Why?" },
          { id: "wyr_165", category: "Future", question: "Would you rather build our dream home from scratch, or renovate an old one full of character?", followUp: "Why?" },
          { id: "wyr_166", category: "Future", question: "Would you rather one joint bank account for everything, or separate with shared bills only?", followUp: "Why?" },
          { id: "wyr_167", category: "Future", question: "Would you rather move for my dream job, or yours, if it ever came down to it?", followUp: "Why?" },
          { id: "wyr_168", category: "Future", question: "Would you rather grow old in the same house, or move somewhere new later?", followUp: "Why?" },
          { id: "wyr_169", category: "Future", question: "Would you rather leave a legacy through work, or through the family and love we build?", followUp: "Why?" },
          { id: "wyr_170", category: "Future", question: "Would you rather plan our future in five-year chunks, or take it one year at a time?", followUp: "Why?" },
          { id: "wyr_171", category: "Chaos", question: "Would you rather get snowed in together for a week with no wifi, or stuck at an airport for 24 hours?", followUp: "Why?" },
          { id: "wyr_172", category: "Chaos", question: "Would you rather our car break down in the middle of nowhere, or our flight get cancelled at 3am?", followUp: "Why?" },
          { id: "wyr_173", category: "Chaos", question: "Would you rather accidentally match outfits at a party, or show up to the wrong event together?", followUp: "Why?" },
          { id: "wyr_174", category: "Chaos", question: "Would you rather lose the wifi password forever, or lose the TV remote forever?", followUp: "Why?" },
          { id: "wyr_175", category: "Chaos", question: "Would you rather both forget an anniversary in the same year, or both remember it twice?", followUp: "Why?" },
          { id: "wyr_176", category: "Chaos", question: "Would you rather survive a blackout with candles and card games, or a heatwave with one fan?", followUp: "Why?" },
          { id: "wyr_177", category: "Chaos", question: "Would you rather get soaked in a surprise storm on a date, or freeze walking home from one?", followUp: "Why?" },
          { id: "wyr_178", category: "Chaos", question: "Would you rather both oversleep and miss something important, or both show up two hours early?", followUp: "Why?" },
          { id: "wyr_179", category: "Chaos", question: "Would you rather adopt a chaotic puppy together, or foster ten fish that all need names?", followUp: "Why?", rare: true },
          { id: "wyr_180", category: "Chaos", question: "Would you rather deal with a flat tire on a road trip, or a dead phone battery on a hike?", followUp: "Why?" },
          { id: "wyr_181", category: "Nostalgia", question: "Would you rather relive the day we met exactly as it happened, or relive our best date so far?", followUp: "Why?" },
          { id: "wyr_182", category: "Nostalgia", question: "Would you rather rewatch our first year together like a movie, or skip to a highlight reel?", followUp: "Why?" },
          { id: "wyr_183", category: "Nostalgia", question: "Would you rather keep every old photo of us, or keep only the best ten forever?", followUp: "Why?" },
          { id: "wyr_184", category: "Nostalgia", question: "Would you rather remember every text we ever sent, or only the handwritten notes?", followUp: "Why?" },
          { id: "wyr_185", category: "Nostalgia", question: "Would you rather revisit our first date spot every year, or find a new one every year?", followUp: "Why?" },
          { id: "wyr_186", category: "Nostalgia", question: "Would you rather relive our worst fight to fix it perfectly, or leave it in the past untouched?", followUp: "Why?" },
          { id: "wyr_187", category: "Nostalgia", question: "Would you rather rewatch how nervous we both were at the start, or skip to how comfortable we are now?", followUp: "Why?" },
          { id: "wyr_188", category: "Nostalgia", question: "Would you rather keep the exact playlist from when we started dating, or update it every year?", followUp: "Why?" },
          { id: "wyr_189", category: "Nostalgia", question: "Would you rather remember my first-date outfit forever, or forget it and be surprised by old photos?", followUp: "Why?" },
          { id: "wyr_190", category: "Nostalgia", question: "Would you rather relive the moment you knew you loved me, or the moment I first said it back?", followUp: "Why?", rare: true },
          { id: "wyr_191", category: "Pop Culture", question: "Would you rather our love story be a slow-burn indie film, or a big flashy musical?", followUp: "Why?" },
          { id: "wyr_192", category: "Pop Culture", question: "Would you rather I serenaded you badly in public, or wrote you a private song instead?", followUp: "Why?" },
          { id: "wyr_193", category: "Pop Culture", question: "Would you rather cosplay as our favorite fictional couple for a day, or invent our own?", followUp: "Why?" },
          { id: "wyr_194", category: "Pop Culture", question: "Would you rather binge an entire series in one weekend, or watch one episode a week for a year?", followUp: "Why?" },
          { id: "wyr_195", category: "Pop Culture", question: "Would you rather our relationship playlist be all one genre, or a chaotic mix of everything?", followUp: "Why?" },
          { id: "wyr_196", category: "Pop Culture", question: "Would you rather I quoted movies constantly, or you did?", followUp: "Why?" },
          { id: "wyr_197", category: "Pop Culture", question: "Would you rather a couple's karaoke duet we're actually good at, or hilariously bad at?", followUp: "Why?", rare: true },
          { id: "wyr_198", category: "Pop Culture", question: "Would you rather live in a rom-com plot, or a low-key slice-of-life story?", followUp: "Why?" },
          { id: "wyr_199", category: "Pop Culture", question: "Would you rather I dressed as your favorite character for Halloween, or you dressed as mine?", followUp: "Why?" },
          { id: "wyr_200", category: "Pop Culture", question: "Would you rather our text notification be a movie quote, or a song lyric?", followUp: "Why?" },
          { id: "wyr_201", category: "Funny", question: "Would you rather I narrated our whole day like a nature documentary, or in a movie-trailer voice?", followUp: "Why?" },
          { id: "wyr_202", category: "Funny", question: "Would you rather I laughed at my own jokes before finishing them, or never laughed at yours?", followUp: "Why?" },
          { id: "wyr_203", category: "Funny", question: "Would you rather we had matching ridiculous hats, or matching ringtones?", followUp: "Why?" },
          { id: "wyr_204", category: "Funny", question: "Would you rather I hummed constantly and off-key, or talked to myself out loud?", followUp: "Why?" },
          { id: "wyr_205", category: "Funny", question: "Would you rather we had a secret handshake we use in public, or a code word for 'save me'?", followUp: "Why?" },
          { id: "wyr_206", category: "Romantic", question: "Would you rather I wrote you poetry badly, or sang to you badly?", followUp: "Why?" },
          { id: "wyr_207", category: "Romantic", question: "Would you rather a candlelit dinner at home, or a picnic under the stars?", followUp: "Why?" },
          { id: "wyr_208", category: "Romantic", question: "Would you rather I left little notes around the house, or sent sweet texts during the day?", followUp: "Why?" },
          { id: "wyr_209", category: "Romantic", question: "Would you rather slow dance in the kitchen, or in the rain?", followUp: "Why?" },
          { id: "wyr_210", category: "Romantic", question: "Would you rather I remembered every anniversary exactly, or surprised you on random ordinary days instead?", followUp: "Why?" },
          { id: "wyr_211", category: "Impossible Choices", question: "Would you rather lose all our photos or all our voice messages?", followUp: "Why?" },
          { id: "wyr_212", category: "Impossible Choices", question: "Would you rather only be able to hug or only be able to hold hands, forever?", followUp: "Why?" },
          { id: "wyr_213", category: "Impossible Choices", question: "Would you rather I always told the truth bluntly, or softened it every time?", followUp: "Why?" },
          { id: "wyr_214", category: "Impossible Choices", question: "Would you rather have unlimited time but less money, or unlimited money but less time?", followUp: "Why?" },
          { id: "wyr_215", category: "Travel", question: "Would you rather road-trip with no destination, or fly somewhere with a strict itinerary?", followUp: "Why?" },
          { id: "wyr_216", category: "Travel", question: "Would you rather camp in the mountains together, or stay in a fancy city hotel?", followUp: "Why?" },
          { id: "wyr_217", category: "Travel", question: "Would you rather we learned a new language together for a trip, or relied entirely on translation apps?", followUp: "Why?" },
          { id: "wyr_218", category: "Travel", question: "Would you rather visit ten countries in a month, or one country for a whole year?", followUp: "Why?" },
          { id: "wyr_219", category: "Food", question: "Would you rather cook an elaborate meal together every Sunday, or always order in on Sundays?", followUp: "Why?" },
          { id: "wyr_220", category: "Food", question: "Would you rather share dessert every time, or always get your own?", followUp: "Why?" },
          { id: "wyr_221", category: "Food", question: "Would you rather I criticized your cooking honestly, or lied and said it's perfect?", followUp: "Why?" },
          { id: "wyr_222", category: "Lifestyle", question: "Would you rather we lived minimally with few things, or surrounded by things that remind us of memories?", followUp: "Why?" },
          { id: "wyr_223", category: "Lifestyle", question: "Would you rather have a strict weekly routine together, or completely wing it every week?", followUp: "Why?" },
          { id: "wyr_224", category: "Lifestyle", question: "Would you rather we hosted friends often, or kept our home mostly just for us?", followUp: "Why?" },
          { id: "wyr_225", category: "Relationship", question: "Would you rather we never went to bed angry, or always took space to cool off first?", followUp: "Why?" },
          { id: "wyr_226", category: "Relationship", question: "Would you rather I initiated conversations about feelings, or you did?", followUp: "Why?" },
          { id: "wyr_227", category: "Relationship", question: "Would you rather have one big yearly vacation, or several small weekend trips?", followUp: "Why?" },
          { id: "wyr_228", category: "Relationship", question: "Would you rather we celebrated small wins constantly, or saved celebration for big milestones?", followUp: "Why?" },
          { id: "wyr_229", category: "Future", question: "Would you rather we settled down early, or explored freely before settling?", followUp: "Why?" },
          { id: "wyr_230", category: "Future", question: "Would you rather have a detailed 10-year plan, or figure it out as we go?", followUp: "Why?" },
          { id: "wyr_231", category: "Future", question: "Would you rather prioritize career growth or lifestyle flexibility in our next big decision?", followUp: "Why?" },
          { id: "wyr_232", category: "Embarrassing", question: "Would you rather I told an embarrassing story about you at a party, or you told one about me?", followUp: "Why?" },
          { id: "wyr_233", category: "Embarrassing", question: "Would you rather sing karaoke terribly in front of my family, or dance terribly in front of yours?", followUp: "Why?" },
          { id: "wyr_234", category: "Embarrassing", question: "Would you rather accidentally like an old photo of mine from years ago, or comment the wrong thing publicly?", followUp: "Why?" },
          { id: "wyr_235", category: "Personality", question: "Would you rather I was more spontaneous, or more reliable?", followUp: "Why?" },
          { id: "wyr_236", category: "Personality", question: "Would you rather a partner who challenges you daily, or one who keeps things calm and steady?", followUp: "Why?" },
          { id: "wyr_237", category: "Personality", question: "Would you rather I was more competitive, or more laid-back about winning and losing?", followUp: "Why?" },
          { id: "wyr_238", category: "Hypothetical", question: "Would you rather live one perfect year together and forget it, or remember an average one forever?", followUp: "Why?" },
          { id: "wyr_239", category: "Hypothetical", question: "Would you rather have a soundtrack that plays whenever you're falling for me, or one for when you're mad at me?", followUp: "Why?" },
          { id: "wyr_240", category: "Hypothetical", question: "Would you rather we could pause time only for us once a year, or rewind one mistake once a year?", followUp: "Why?" },
          { id: "wyr_241", category: "Choose Between Us", question: "Would you rather I always drove, or you always drove?", followUp: "Why?" },
          { id: "wyr_242", category: "Choose Between Us", question: "Would you rather I handled all the planning, or you handled all the planning?", followUp: "Why?" },
          { id: "wyr_243", category: "Choose Between Us", question: "Would you rather I always picked the music, or you always picked the music?", followUp: "Why?" },
          { id: "wyr_244", category: "Chaos", question: "Would you rather our apartment flooded a little, or our internet died for a week?", followUp: "Why?" },
          { id: "wyr_245", category: "Chaos", question: "Would you rather both get food poisoning before a big event, or both oversleep and miss it entirely?", followUp: "Why?" },
          { id: "wyr_246", category: "Chaos", question: "Would you rather get a flat tire far from home, or lock ourselves out at midnight?", followUp: "Why?" },
          { id: "wyr_247", category: "Nostalgia", question: "Would you rather relive our very last fight to end it better, or forget it happened at all?", followUp: "Why?" },
          { id: "wyr_248", category: "Nostalgia", question: "Would you rather keep the exact voice memo from our first 'I love you,' or the memory alone, unrecorded?", followUp: "Why?" },
          { id: "wyr_249", category: "Nostalgia", question: "Would you rather relive the nervous excitement before our first kiss, or the comfort of a thousandth one?", followUp: "Why?" },
          { id: "wyr_250", category: "Pop Culture", question: "Would you rather our love story get a tragic prestige-drama ending, or a cheesy happy one?", followUp: "Why?" },
          { id: "wyr_251", category: "Pop Culture", question: "Would you rather I quoted your favorite show constantly, or you quoted mine constantly?", followUp: "Why?" },
          { id: "wyr_252", category: "Pop Culture", question: "Would you rather we had a couple's theme song chosen by our friends, or one we picked ourselves?", followUp: "Why?" },
          { id: "wyr_253", category: "Career", question: "Would you rather I worked from home forever, or traveled constantly for work?", followUp: "Why?" },
          { id: "wyr_254", category: "Career", question: "Would you rather have more free time with less money, or more money with less free time?", followUp: "Why?" },
          { id: "wyr_255", category: "Career", question: "Would you rather we worked in the same field, or completely different ones?", followUp: "Why?" },
          { id: "wyr_256", category: "Career", question: "Would you rather I took a big career risk with your full support, or played it safe together?", followUp: "Why?" },
          { id: "wyr_257", category: "Weather", question: "Would you rather be stuck together in a heatwave with no AC, or a snowstorm with no heating?", followUp: "Why?" },
          { id: "wyr_258", category: "Weather", question: "Would you rather rainy days in together, or sunny days out together?", followUp: "Why?" },
          { id: "wyr_259", category: "Weather", question: "Would you rather chase storms for the thrill, or always seek out calm, clear skies?", followUp: "Why?" },
          { id: "wyr_260", category: "Technology", question: "Would you rather we deleted social media for a year, or never turned off notifications?", followUp: "Why?" },
          { id: "wyr_261", category: "Technology", question: "Would you rather text in full sentences always, or only in abbreviations and emojis?", followUp: "Why?" },
          { id: "wyr_262", category: "Technology", question: "Would you rather have a smart home that does everything, or keep everything old-fashioned and manual?", followUp: "Why?" },
          { id: "wyr_263", category: "Movies", question: "Would you rather rewatch our favorite movie every year on the same day, or always find something new?", followUp: "Why?" },
          { id: "wyr_264", category: "Movies", question: "Would you rather I cried at every sad movie, or never showed emotion during them?", followUp: "Why?" },
          { id: "wyr_265", category: "Movies", question: "Would you rather our life be adapted into a comedy, or a romantic drama?", followUp: "Why?" },
          { id: "wyr_266", category: "Sports", question: "Would you rather play on the same team, or be friendly rivals in a sport?", followUp: "Why?" },
          { id: "wyr_267", category: "Sports", question: "Would you rather I was your loudest cheerleader, or your calm, quiet support?", followUp: "Why?" },
          { id: "wyr_268", category: "Sports", question: "Would you rather train for a marathon together, or take up a chill hobby instead?", followUp: "Why?" },
          { id: "wyr_269", category: "Choose Between Us", question: "Would you rather I remembered your childhood stories perfectly, or your daily preferences perfectly?", followUp: "Why?" },
          { id: "wyr_270", category: "Impossible Choices", question: "Would you rather never fight again but grow apart slowly, or fight sometimes but stay close?", followUp: "Why?" },
          { id: "wyr_271", category: "Impossible Choices", question: "Would you rather I always agreed with you, or always gave an honest opinion even if different?", followUp: "Why?" },
          { id: "wyr_272", category: "Impossible Choices", question: "Would you rather live near the beach, or in the mountains, for the rest of our lives?", followUp: "Why?" },
          { id: "wyr_273", category: "Funny", question: "Would you rather I made up a ridiculous nickname for everyone we meet, or narrated our arguments like a sports commentator?", followUp: "Why?" },
          { id: "wyr_274", category: "Funny", question: "Would you rather I did an accent for a full day, or only spoke in movie quotes?", followUp: "Why?" },
          { id: "wyr_275", category: "Romantic", question: "Would you rather write our love story down for our kids to read someday, or keep it just between us?", followUp: "Why?" },
          { id: "wyr_276", category: "Romantic", question: "Would you rather one grand romantic gesture a year, or tiny ones every single day?", followUp: "Why?" },
          { id: "wyr_277", category: "Relationship", question: "Would you rather always know exactly how the other feels, or keep a little mystery?", followUp: "Why?" },
          { id: "wyr_278", category: "Relationship", question: "Would you rather resolve conflict with humor, or with a serious, direct conversation?", followUp: "Why?" },
          { id: "wyr_279", category: "Future", question: "Would you rather chase one big shared dream, or support each other's separate dreams?", followUp: "Why?" },
          { id: "wyr_280", category: "Future", question: "Would you rather have kids early, later, or leave it open entirely?", followUp: "Why?" },
          { id: "wyr_281", category: "Travel", question: "Would you rather explore your home country fully first, or go abroad right away?", followUp: "Why?" },
          { id: "wyr_282", category: "Travel", question: "Would you rather travel with a big group of friends, or always just the two of us?", followUp: "Why?" },
          { id: "wyr_283", category: "Food", question: "Would you rather give up coffee together, or give up sweets together?", followUp: "Why?" },
          { id: "wyr_284", category: "Food", question: "Would you rather learn to cook one cuisine perfectly, or a little of every cuisine?", followUp: "Why?" },
          { id: "wyr_285", category: "Lifestyle", question: "Would you rather live somewhere with four seasons, or somewhere warm all year?", followUp: "Why?" },
          { id: "wyr_286", category: "Lifestyle", question: "Would you rather early bedtimes and early mornings, or late nights and slow mornings, together?", followUp: "Why?" },
          { id: "wyr_287", category: "Personality", question: "Would you rather I was quieter in public and louder at home, or the opposite?", followUp: "Why?" },
          { id: "wyr_288", category: "Personality", question: "Would you rather a partner who over-explains, or one who under-explains?", followUp: "Why?" },
          { id: "wyr_289", category: "Embarrassing", question: "Would you rather I mixed up your family members' names at a gathering, or forgot an important date out loud?", followUp: "Why?" },
          { id: "wyr_290", category: "Hypothetical", question: "Would you rather switch lives for a day to understand each other better, or never know exactly what the other's day is like?", followUp: "Why?" },
          { id: "wyr_291", category: "Choose Between Us", question: "Would you rather I chose our vacations, or you chose our vacations, every time?", followUp: "Why?" },
          { id: "wyr_292", category: "Chaos", question: "Would you rather both lose your voice the day before something important, or both catch a cold on a trip?", followUp: "Why?" },
          { id: "wyr_293", category: "Nostalgia", question: "Would you rather remember every single detail of how we met, or only the feeling of it?", followUp: "Why?" },
          { id: "wyr_294", category: "Pop Culture", question: "Would you rather our relationship be turned into a reality show, or a documentary?", followUp: "Why?" },
          { id: "wyr_295", category: "Career", question: "Would you rather I brought work stress home sometimes, or never talked about work at all?", followUp: "Why?" },
          { id: "wyr_296", category: "Weather", question: "Would you rather a perfect sunny wedding, or a dramatic rainy one we'll never forget?", followUp: "Why?" },
          { id: "wyr_297", category: "Technology", question: "Would you rather I read every message the second it arrives, or take hours to reply sometimes?", followUp: "Why?" },
          { id: "wyr_298", category: "Movies", question: "Would you rather cry together at a sad film, or laugh together through the whole thing instead?", followUp: "Why?" },
          { id: "wyr_299", category: "Sports", question: "Would you rather we bonded over watching sports together, or bonded over something totally different?", followUp: "Why?" },
          { id: "wyr_300", category: "Impossible Choices", question: "Would you rather relive our happiest day on repeat, or keep discovering new happiest days?", followUp: "Why?" },
        ],
        flirty: [
          { id: "flirty_001", category: "Flirting", level: 1, question: "What is the first thing you find yourself noticing about me when I walk into a room?" },
          { id: "flirty_002", category: "Flirting", level: 1, question: "What is your favorite flirty text I've ever sent you?" },
          { id: "flirty_003", category: "Flirting", level: 1, question: "How do you flirt when you're trying not to be obvious?" },
          { id: "flirty_004", category: "Compliments", level: 1, question: "Give me a compliment you don't say often enough." },
          { id: "flirty_005", category: "Compliments", level: 1, question: "What is a physical feature of mine you notice more than I think?" },
          { id: "flirty_006", category: "Compliments", level: 1, question: "Compliment my personality in the most specific way you can." },
          { id: "flirty_007", category: "Attraction", level: 1, question: "What's a completely ordinary thing I do that you secretly find attractive?" },
          { id: "flirty_008", category: "Attraction", level: 1, question: "What outfit of mine is your soft spot?" },
          { id: "flirty_009", category: "Attraction", level: 1, question: "When do I look most 'like myself' to you?" },
          { id: "flirty_010", category: "Chemistry", level: 2, question: "When did you first feel real chemistry between us?" },
          { id: "flirty_011", category: "Chemistry", level: 2, question: "What instantly puts you in a flirty mood with me?" },
          { id: "flirty_012", category: "Chemistry", level: 2, question: "Describe our chemistry in three words." },
          { id: "flirty_013", category: "Kissing", level: 2, question: "Describe your favorite kiss we've had, and why it stands out." },
          { id: "flirty_014", category: "Kissing", level: 2, question: "Are you more of a slow kiss or a sudden kiss person?" },
          { id: "flirty_015", category: "Kissing", level: 2, question: "Where is your favorite place to be kissed?" },
          { id: "flirty_016", category: "Preferences", level: 2, question: "Do you prefer slow and teasing, or spontaneous and a little wild? Tell me why." },
          { id: "flirty_017", category: "Preferences", level: 2, question: "What kind of attention from me makes you melt?" },
          { id: "flirty_018", category: "Preferences", level: 2, question: "Lights on or lights off — and what else matters to you?" },
          { id: "flirty_019", category: "Date Night", level: 2, question: "Plan our perfect flirty date night in three sentences." },
          { id: "flirty_020", category: "Date Night", level: 2, question: "What would make a regular night feel more romantic?" },
          { id: "flirty_021", category: "Date Night", level: 2, question: "Pick a song for a private dance in the living room." },
          { id: "flirty_022", category: "Confessions", level: 3, question: "What's something flirty you've thought about saying to me but haven't?" },
          { id: "flirty_023", category: "Confessions", level: 3, question: "What is a fantasy of closeness you've imagined with me?" },
          { id: "flirty_024", category: "Confessions", level: 3, question: "Tell me a secret about how you feel when we're apart." },
          { id: "flirty_025", category: "Rate", level: 3, question: "On a scale of 1-10, how good am I at flirting with you — and what would make it a 10?" },
          { id: "flirty_026", category: "Rate", level: 3, question: "Rate our last reunion energy from 1-10 and explain." },
          { id: "flirty_027", category: "Tell Me", level: 3, question: "Tell me one thing you find irresistible about me." },
          { id: "flirty_028", category: "Tell Me", level: 3, question: "What do you miss most about my voice?" },
          { id: "flirty_029", category: "Tell Me", level: 3, question: "What do you want to hear me say more often?" },
          { id: "flirty_030", category: "Show Me", level: 3, question: "What's your favorite way to be greeted when we finally see each other again?" },
          { id: "flirty_031", category: "Show Me", level: 3, question: "How do you want me to touch your hand in public?" },
          { id: "flirty_032", category: "Show Me", level: 3, question: "Describe the ideal good-morning after sleeping in the same bed." },
          { id: "flirty_033", category: "Romantic Scenarios", level: 4, question: "Describe, in detail, how you'd want our reunion to go." },
          { id: "flirty_034", category: "Romantic Scenarios", level: 4, question: "If we had a hotel room with nowhere to be, how would the first hour go?" },
          { id: "flirty_035", category: "Romantic Scenarios", level: 4, question: "Write a short scene of us on a rainy night." },
          { id: "flirty_036", category: "Chemistry", level: 4, question: "What's something that instantly puts you in the mood to be close to me?" },
          { id: "flirty_037", category: "Chemistry", level: 4, question: "What scent, sound, or look of mine gets to you?" },
          { id: "flirty_038", category: "Choose", level: 4, question: "Would you rather I whispered something sweet, or something bold, in your ear right now?" },
          { id: "flirty_039", category: "Choose", level: 4, question: "Would you rather a long teasing text thread or a sudden call?" },
          { id: "flirty_040", category: "After Dark", level: 5, question: "Tell me, honestly, what you miss most about being physically close to me.", rare: true },
          { id: "flirty_041", category: "After Dark", level: 5, question: "Write a one-sentence love letter to me, right now.", rare: true },
          { id: "flirty_042", category: "Playful Challenges", level: 5, question: "Send me the flirtiest voice message or text you can think of, before the night is over.", rare: true },
          { id: "flirty_043", category: "Flirting", level: 2, question: "What nickname energy do you like — soft, silly, or bold?" },
          { id: "flirty_044", category: "Attraction", level: 2, question: "What is attractive about the way I talk?" },
          { id: "flirty_045", category: "Compliments", level: 2, question: "Compliment something I do, not something I am." },
          { id: "flirty_046", category: "Kissing", level: 3, question: "What makes a kiss feel meaningful to you?" },
          { id: "flirty_047", category: "Preferences", level: 3, question: "What pace feels right for us when we're reunited after time apart?" },
          { id: "flirty_048", category: "Date Night", level: 3, question: "Invent a flirty scavenger hunt for us in one city block." },
          { id: "flirty_049", category: "Confessions", level: 4, question: "What is something tender you've never admitted out loud?" },
          { id: "flirty_050", category: "Tell Me", level: 4, question: "Tell me how you want to be desired." },
          { id: "flirty_051", category: "Show Me", level: 4, question: "What is a small gesture that feels intimate to you?" },
          { id: "flirty_052", category: "Romantic Scenarios", level: 3, question: "Describe a perfect lazy Sunday morning together." },
          { id: "flirty_053", category: "Chemistry", level: 3, question: "When do you feel the spark most — texts, calls, or in person?" },
          { id: "flirty_054", category: "Flirting", level: 3, question: "What is your favorite way I tease you?" },
          { id: "flirty_055", category: "Attraction", level: 3, question: "What is sexy about kindness to you?" },
          { id: "flirty_056", category: "Compliments", level: 3, question: "Say something flattering about my mind." },
          { id: "flirty_057", category: "After Dark", level: 4, question: "What boundaries matter to you when things get more intimate?" },
          { id: "flirty_058", category: "After Dark", level: 3, question: "What helps you feel safe and open with me?" },
          { id: "flirty_059", category: "Playful Challenges", level: 3, question: "Challenge me to something flirty I can do today." },
          { id: "flirty_060", category: "Choose", level: 3, question: "Would you rather slow music or silence when we're close?" },
          { id: "flirty_061", category: "Date Night", level: 1, question: "Where should we go that feels a little more special than usual?" },
          { id: "flirty_062", category: "Flirting", level: 1, question: "What emoji feels like 'us' when we're being flirty?" },
          { id: "flirty_063", category: "Attraction", level: 1, question: "What is cute about me that I probably underrate?" },
          { id: "flirty_064", category: "Kissing", level: 1, question: "Forehead kiss or hand kiss — pick and defend." },
          { id: "flirty_065", category: "Preferences", level: 1, question: "Big hug first or kiss first when we meet?" },
          { id: "flirty_066", category: "Confessions", level: 2, question: "Have you ever rehearsed something sweet before saying it?" },
          { id: "flirty_067", category: "Tell Me", level: 2, question: "What do you notice about my eyes?" },
          { id: "flirty_068", category: "Show Me", level: 2, question: "How do you like to sit next to me on a couch?" },
          { id: "flirty_069", category: "Romantic Scenarios", level: 2, question: "Describe us cooking dinner while flirting the whole time." },
          { id: "flirty_070", category: "Chemistry", level: 1, question: "What song feels like our chemistry?" },
          { id: "flirty_071", category: "After Dark", level: 2, question: "What is a soft limit you want me to know?" },
          { id: "flirty_072", category: "Playful Challenges", level: 2, question: "Dare me to say something bold in our next call." },
          { id: "flirty_073", category: "Choose", level: 2, question: "Would you rather matching pajamas or a dressy date?" },
          { id: "flirty_074", category: "Flirting", level: 4, question: "How do you want me to flirt when we're around friends without being obvious?" },
          { id: "flirty_075", category: "Attraction", level: 4, question: "What is something about my body language you like?" },
          { id: "flirty_076", category: "Compliments", level: 4, question: "Give me a compliment you'd only say when we're alone." },
          { id: "flirty_077", category: "Kissing", level: 4, question: "Describe a kiss you've imagined but we haven't had yet." },
          { id: "flirty_078", category: "Preferences", level: 4, question: "What kind of aftercare or closeness do you want after intense moments?" },
          { id: "flirty_079", category: "Date Night", level: 4, question: "Plan a night that starts sweet and ends a little daring." },
          { id: "flirty_080", category: "Confessions", level: 5, question: "Confess a crush-on-you moment from early on.", rare: true },
          { id: "flirty_081", category: "Tell Me", level: 5, question: "Tell me exactly how you want me to miss you.", rare: true },
          { id: "flirty_082", category: "Show Me", level: 5, question: "Act out (or describe) how you'd pull me closer.", rare: true },
          { id: "flirty_083", category: "Romantic Scenarios", level: 5, question: "Narrate the next time we close a door behind us.", rare: true },
          { id: "flirty_084", category: "Chemistry", level: 5, question: "What makes our connection feel unique compared to past ones?", rare: true },
          { id: "flirty_085", category: "After Dark", level: 1, question: "What is a soft, non-physical thing that still feels intimate?" },
          { id: "flirty_086", category: "Playful Challenges", level: 1, question: "Send a flirty emoji only you would understand." },
          { id: "flirty_087", category: "Choose", level: 1, question: "Would you rather candles or fairy lights?" },
          { id: "flirty_088", category: "Flirting", level: 5, question: "Flirt with me for 30 seconds without stopping.", rare: true },
          { id: "flirty_089", category: "Attraction", level: 5, question: "List five things that attract you to me, fast.", rare: true },
          { id: "flirty_090", category: "Compliments", level: 5, question: "Write a cheesy pickup line about me — then a sincere one.", rare: true },
          { id: "flirty_091", category: "Date Night", level: 5, question: "Book (or pretend to book) our next flirty plan out loud.", rare: true },
          { id: "flirty_092", category: "Confessions", level: 1, question: "What's a small crush detail you noticed this week?" },
          { id: "flirty_093", category: "Tell Me", level: 1, question: "What should I text you right now to make you smile?" },
          { id: "flirty_094", category: "Show Me", level: 1, question: "How do you want goodnight to feel when we're apart?" },
          { id: "flirty_095", category: "Romantic Scenarios", level: 1, question: "Describe us sharing headphones on public transit." },
          { id: "flirty_096", category: "Chemistry", level: 1, question: "When did a simple 'hi' from me feel different?" },
          { id: "flirty_097", category: "Preferences", level: 5, question: "Tell me your honest preference about pace and pressure — no guessing.", rare: true },
          { id: "flirty_098", category: "Kissing", level: 5, question: "Guide me: how do you like to be kissed when you've missed me?", rare: true },
          { id: "flirty_099", category: "After Dark", level: 5, question: "Share one desire and one boundary in the same breath.", rare: true },
          { id: "flirty_100", category: "Playful Challenges", level: 4, question: "Create a secret code word that means 'come closer'." },
          { id: "flirty_101", category: "Flirting", level: 1, question: "What's a flirty habit of mine you wish I did more often?" },
          { id: "flirty_102", category: "Flirting", level: 1, question: "If you had to flirt with me using only your eyes across a room, how would you do it?" },
          { id: "flirty_103", category: "Flirting", level: 1, question: "What's the boldest way you've ever flirted with me?" },
          { id: "flirty_104", category: "Flirting", level: 1, question: "What flirty move works on you every single time?" },
          { id: "flirty_105", category: "Flirting", level: 1, question: "How would you flirt with me if we were meeting for the very first time again?" },
          { id: "flirty_106", category: "Flirting", level: 1, question: "What's a flirty text you've drafted but never sent?" },
          { id: "flirty_107", category: "Flirting", level: 1, question: "What's the difference between how you flirt in public versus in private?" },
          { id: "flirty_108", category: "Compliments", level: 1, question: "Compliment the way I say your name." },
          { id: "flirty_109", category: "Compliments", level: 1, question: "What's a compliment about me you think I don't believe enough?" },
          { id: "flirty_110", category: "Compliments", level: 1, question: "Tell me something about my hands, my laugh, or my walk that you love." },
          { id: "flirty_111", category: "Compliments", level: 1, question: "What compliment would surprise me the most right now?" },
          { id: "flirty_112", category: "Compliments", level: 1, question: "Say something flattering about how I make you feel, not just how I look." },
          { id: "flirty_113", category: "Compliments", level: 1, question: "What's the most honest compliment you can give me in ten seconds?" },
          { id: "flirty_114", category: "Compliments", level: 1, question: "What do you compliment me on to other people when I'm not around?" },
          { id: "flirty_115", category: "Attraction", level: 2, question: "What's an unexpected thing about me that you find irresistibly attractive?" },
          { id: "flirty_116", category: "Attraction", level: 2, question: "When am I most attractive to you — dressed up, or completely relaxed at home?" },
          { id: "flirty_117", category: "Attraction", level: 2, question: "What's a sound I make that you find surprisingly attractive?" },
          { id: "flirty_118", category: "Attraction", level: 2, question: "What's something I do without thinking that pulls you in every time?" },
          { id: "flirty_119", category: "Attraction", level: 2, question: "Describe the moment you realize, mid-conversation, that you're really into me." },
          { id: "flirty_120", category: "Attraction", level: 2, question: "What's an attraction you didn't expect to develop over time?" },
          { id: "flirty_121", category: "Attraction", level: 2, question: "What's the most attractive thing about the way I treat other people?" },
          { id: "flirty_122", category: "Chemistry", level: 2, question: "What's a look we give each other that says everything without words?" },
          { id: "flirty_123", category: "Chemistry", level: 2, question: "Describe the feeling of the room changing when we lock eyes." },
          { id: "flirty_124", category: "Chemistry", level: 2, question: "What's a moment lately where our chemistry surprised even you?" },
          { id: "flirty_125", category: "Chemistry", level: 2, question: "How do you know, physically, when the mood between us shifts?" },
          { id: "flirty_126", category: "Chemistry", level: 2, question: "What's a color, scent, or song that instantly brings our chemistry to mind?" },
          { id: "flirty_127", category: "Chemistry", level: 2, question: "What happens in your body when I walk into the room?" },
          { id: "flirty_128", category: "Chemistry", level: 2, question: "Describe our chemistry as if it were the opening line of a novel." },
          { id: "flirty_129", category: "Kissing", level: 2, question: "Slow and lingering or quick and playful — what's your mood tonight?" },
          { id: "flirty_130", category: "Kissing", level: 2, question: "What's the kiss you think about most when we're apart?" },
          { id: "flirty_131", category: "Kissing", level: 2, question: "Where on my face or neck do you love kissing most?" },
          { id: "flirty_132", category: "Kissing", level: 2, question: "Describe the perfect \"hello\" kiss versus the perfect \"goodbye\" kiss." },
          { id: "flirty_133", category: "Kissing", level: 2, question: "What's a kiss we haven't had yet that you'd love to?" },
          { id: "flirty_134", category: "Kissing", level: 2, question: "How do you want to be kissed when you've had a hard day?" },
          { id: "flirty_135", category: "Kissing", level: 2, question: "What's the most unexpected place we've ever kissed?" },
          { id: "flirty_136", category: "After Dark", level: 4, question: "What's a boundary you want to reaffirm, even if we've talked about it before?", rare: true },
          { id: "flirty_137", category: "After Dark", level: 4, question: "What helps you feel most desired by me?" },
          { id: "flirty_138", category: "After Dark", level: 4, question: "What's something intimate that has nothing to do with physical touch?" },
          { id: "flirty_139", category: "After Dark", level: 4, question: "What pace feels right for us tonight — slow, playful, or intense?", rare: true },
          { id: "flirty_140", category: "After Dark", level: 4, question: "What word or signal could we use to check in with each other in the moment?" },
          { id: "flirty_141", category: "After Dark", level: 4, question: "What does feeling safe with me, physically, look like to you?" },
          { id: "flirty_142", category: "After Dark", level: 4, question: "What's something you want more of from me after dark — attention, patience, or playfulness?" },
          { id: "flirty_143", category: "Playful Challenges", level: 2, question: "Send me one flirty word, right now, and make me guess what you mean by it." },
          { id: "flirty_144", category: "Playful Challenges", level: 2, question: "Dare me to whisper something to you before this game is over." },
          { id: "flirty_145", category: "Playful Challenges", level: 2, question: "Give me thirty seconds to convince you to kiss me — go.", rare: true },
          { id: "flirty_146", category: "Playful Challenges", level: 2, question: "Come up with a flirty nickname for me on the spot." },
          { id: "flirty_147", category: "Playful Challenges", level: 2, question: "Challenge me to guess what you're thinking just from your face right now." },
          { id: "flirty_148", category: "Playful Challenges", level: 2, question: "Dare me to slow dance with you to whatever song is stuck in your head." },
          { id: "flirty_149", category: "Playful Challenges", level: 2, question: "Make up a flirty rule for the rest of tonight and I have to follow it." },
          { id: "flirty_150", category: "Choose", level: 2, question: "Would you rather I whispered it or wrote it down?" },
          { id: "flirty_151", category: "Choose", level: 2, question: "Would you rather a slow build-up all evening, or straight to the point?" },
          { id: "flirty_152", category: "Choose", level: 2, question: "Would you rather soft lighting or total darkness?" },
          { id: "flirty_153", category: "Choose", level: 2, question: "Would you rather I initiated tonight, or you did?" },
          { id: "flirty_154", category: "Choose", level: 2, question: "Would you rather a long lingering hug, or a quick surprising kiss right now?" },
          { id: "flirty_155", category: "Choose", level: 2, question: "Would you rather music playing softly, or complete silence between us?" },
          { id: "flirty_156", category: "Choose", level: 2, question: "Would you rather I told you what I want, or showed you?" },
          { id: "flirty_157", category: "Date Night", level: 2, question: "Plan a \"just the two of us\" evening that starts ordinary and turns romantic." },
          { id: "flirty_158", category: "Date Night", level: 2, question: "What's a date idea you've been too shy to suggest?" },
          { id: "flirty_159", category: "Date Night", level: 2, question: "Describe the perfect ending to tonight, step by step." },
          { id: "flirty_160", category: "Date Night", level: 2, question: "What outfit do you want me in for our next date night?" },
          { id: "flirty_161", category: "Date Night", level: 2, question: "What's one thing you want to try on a date that we haven't yet?" },
          { id: "flirty_162", category: "Date Night", level: 2, question: "If tonight had a theme, what would it be?" },
          { id: "flirty_163", category: "Date Night", level: 2, question: "Describe the version of \"staying in\" that feels most romantic to you." },
          { id: "flirty_164", category: "Confessions", level: 3, question: "Confess something you find yourself thinking about more than you'd admit." },
          { id: "flirty_165", category: "Confessions", level: 3, question: "What's a moment recently you wished I could read your mind?" },
          { id: "flirty_166", category: "Confessions", level: 3, question: "Confess the last time you got a little jealous, even briefly.", rare: true },
          { id: "flirty_167", category: "Confessions", level: 3, question: "What's something you've wanted to ask for but haven't?" },
          { id: "flirty_168", category: "Confessions", level: 3, question: "Confess a daydream you've had about us this week.", rare: true },
          { id: "flirty_169", category: "Confessions", level: 3, question: "What's the boldest thought you've had about me and kept to yourself?" },
          { id: "flirty_170", category: "Confessions", level: 3, question: "Confess something you find charming about yourself when you're around me." },
          { id: "flirty_171", category: "Tell Me", level: 3, question: "Tell me exactly what makes you feel wanted." },
          { id: "flirty_172", category: "Tell Me", level: 3, question: "Tell me what you need to hear before things get more intimate." },
          { id: "flirty_173", category: "Tell Me", level: 3, question: "Tell me one thing you want me to notice about you tonight." },
          { id: "flirty_174", category: "Tell Me", level: 3, question: "Tell me how you want to be touched when words feel like too much.", rare: true },
          { id: "flirty_175", category: "Tell Me", level: 3, question: "Tell me what \"in the mood\" actually feels like for you." },
          { id: "flirty_176", category: "Tell Me", level: 3, question: "Tell me the difference between how you want comfort versus how you want passion." },
          { id: "flirty_177", category: "Tell Me", level: 3, question: "Tell me something you want me to ask you more often." },
          { id: "flirty_178", category: "Show Me", level: 3, question: "Show me your favorite way to be held." },
          { id: "flirty_179", category: "Show Me", level: 3, question: "Show me the look you give me when you're feeling flirty." },
          { id: "flirty_180", category: "Show Me", level: 3, question: "Show me how you'd get my attention across a crowded room." },
          { id: "flirty_181", category: "Show Me", level: 3, question: "Show me your best \"come here\" without saying a word." },
          { id: "flirty_182", category: "Show Me", level: 3, question: "Show me the face you make right before you kiss me.", rare: true },
          { id: "flirty_183", category: "Show Me", level: 3, question: "Show me how close is \"too close\" and how close is \"just right.\"" },
          { id: "flirty_184", category: "Show Me", level: 3, question: "Show me one thing your hands do when you're nervous around me." },
          { id: "flirty_185", category: "Preferences", level: 2, question: "Do you prefer slow mornings together, or spontaneous middle-of-the-day moments?" },
          { id: "flirty_186", category: "Preferences", level: 2, question: "What's your ideal balance between playful teasing and sincere affection?" },
          { id: "flirty_187", category: "Preferences", level: 2, question: "Do you prefer being pursued, or being the one who pursues?" },
          { id: "flirty_188", category: "Preferences", level: 2, question: "What's more you: candlelight and music, or comfortable pajamas and honesty?" },
          { id: "flirty_189", category: "Preferences", level: 2, question: "Do you prefer affection in public, in private, or an even mix?" },
          { id: "flirty_190", category: "Preferences", level: 2, question: "What's your preferred way to be reassured when you feel insecure, intimately?", rare: true },
          { id: "flirty_191", category: "Preferences", level: 2, question: "Do you prefer surprises in the moment, or a little advance warning?" },
          { id: "flirty_192", category: "Romantic Scenarios", level: 3, question: "Describe us slow dancing in the kitchen with nowhere to be." },
          { id: "flirty_193", category: "Romantic Scenarios", level: 3, question: "Narrate a rainy day spent entirely wrapped up together." },
          { id: "flirty_194", category: "Romantic Scenarios", level: 3, question: "Describe the drive home from a date that went a little too well." },
          { id: "flirty_195", category: "Romantic Scenarios", level: 3, question: "Narrate the first five minutes after I surprise you at your door." },
          { id: "flirty_196", category: "Romantic Scenarios", level: 3, question: "Describe a lazy Sunday morning that turns romantic without either of us planning it." },
          { id: "flirty_197", category: "Romantic Scenarios", level: 3, question: "Narrate us getting ready for a night out and being a little too distracted by each other.", rare: true },
          { id: "flirty_198", category: "Romantic Scenarios", level: 3, question: "Describe the quiet moment after a long day when all either of us wants is closeness." },
          { id: "flirty_199", category: "Wildcard", level: 4, question: "Whisper, or write, the first word that comes to mind when you think \"desire.\"" },
          { id: "flirty_200", category: "Wildcard", level: 4, question: "Skip this question and instead close the distance between us right now.", rare: true },
          { id: "flirty_201", category: "Flirting", level: 1, question: "What's the smallest flirty gesture that gets your attention every time?" },
          { id: "flirty_202", category: "Flirting", level: 1, question: "How do you flirt when you're trying to make me laugh instead of blush?" },
          { id: "flirty_203", category: "Flirting", level: 2, question: "What's a look I give you that you've learned to read perfectly?" },
          { id: "flirty_204", category: "Flirting", level: 1, question: "What's your go-to flirty line, even if it's a little cheesy?" },
          { id: "flirty_205", category: "Flirting", level: 2, question: "Do you flirt more with words, with touch, or with teasing?" },
          { id: "flirty_206", category: "Compliments", level: 1, question: "What's a compliment about my hands, eyes, or smile that you actually mean?" },
          { id: "flirty_207", category: "Compliments", level: 1, question: "Compliment the way I text you good morning." },
          { id: "flirty_208", category: "Compliments", level: 2, question: "What's something about my confidence, or lack of it, that you find endearing?" },
          { id: "flirty_209", category: "Compliments", level: 1, question: "Tell me the compliment you give me most in your head but rarely say out loud." },
          { id: "flirty_210", category: "Attraction", level: 1, question: "What's an unexpected thing about me that caught your attention early on?" },
          { id: "flirty_211", category: "Attraction", level: 2, question: "What's a version of me — tired, focused, laughing — that you're most drawn to?" },
          { id: "flirty_212", category: "Attraction", level: 1, question: "What's something I wear that you secretly hope I wear again?" },
          { id: "flirty_213", category: "Chemistry", level: 2, question: "What moment recently made you feel a spark out of nowhere?" },
          { id: "flirty_214", category: "Chemistry", level: 2, question: "How does our chemistry show up differently now compared to the beginning?" },
          { id: "flirty_215", category: "Chemistry", level: 3, question: "What's a silent moment between us that felt more intense than words?" },
          { id: "flirty_216", category: "Kissing", level: 2, question: "What's the difference between a good kiss and a great one, for you?" },
          { id: "flirty_217", category: "Kissing", level: 1, question: "Forehead, cheek, or lips — which good morning kiss do you crave most?" },
          { id: "flirty_218", category: "Preferences", level: 2, question: "Do you like being surprised with affection, or asked first?" },
          { id: "flirty_219", category: "Preferences", level: 2, question: "What's more you: playful teasing all night, or one intense moment?" },
          { id: "flirty_220", category: "Date Night", level: 2, question: "Design a date night with zero talking allowed until dessert." },
          { id: "flirty_221", category: "Date Night", level: 2, question: "What's a flirty twist you'd add to a totally normal dinner date?" },
          { id: "flirty_222", category: "Confessions", level: 3, question: "Confess something you find yourself wanting more of, physically, lately." },
          { id: "flirty_223", category: "Confessions", level: 3, question: "What's a thought about me you had today that you're only now admitting?" },
          { id: "flirty_224", category: "Rate", level: 3, question: "Rate how well I read your mood today, and tell me what gave it away." },
          { id: "flirty_225", category: "Tell Me", level: 3, question: "Tell me the exact moment today you thought about me unprompted." },
          { id: "flirty_226", category: "Tell Me", level: 3, question: "Tell me what makes you feel most desired by me." },
          { id: "flirty_227", category: "Show Me", level: 3, question: "Show me the exact face you make when you're pretending not to be flirting." },
          { id: "flirty_228", category: "Show Me", level: 3, question: "Show me how you'd get my attention from across a room, no words." },
          { id: "flirty_229", category: "Romantic Scenarios", level: 3, question: "Narrate the perfect five minutes right before we fall asleep together." },
          { id: "flirty_230", category: "Romantic Scenarios", level: 4, question: "Describe a slow Saturday morning where neither of us wants to get up." },
          { id: "flirty_231", category: "Chemistry", level: 4, question: "What builds anticipation for you more: waiting, or knowing exactly when?" },
          { id: "flirty_232", category: "Choose", level: 3, question: "Would you rather I surprised you with affection mid-day, or planned it for the evening?" },
          { id: "flirty_233", category: "Choose", level: 3, question: "Would you rather a slow, teasing goodbye, or a quick, intense one?" },
          { id: "flirty_234", category: "After Dark", level: 4, question: "What's a small thing I do that instantly shifts the mood for you?" },
          { id: "flirty_235", category: "After Dark", level: 5, question: "Tell me exactly what you want tonight, without hesitating.", rare: true },
          { id: "flirty_236", category: "Playful Challenges", level: 3, question: "Dare me to say something bold before the next round starts." },
          { id: "flirty_237", category: "Playful Challenges", level: 2, question: "Make up a silly rule about touching for the rest of the game." },
          { id: "flirty_238", category: "Wildcard", level: 4, question: "Whisper, or write, one word that describes how you feel right now." },
          { id: "flirty_239", category: "Wildcard", level: 4, question: "Skip this card and give me one long, slow kiss instead.", rare: true },
          { id: "flirty_240", category: "Flirting", level: 2, question: "What's the flirtiest thing about the way I move through a room?" },
          { id: "flirty_241", category: "Flirting", level: 1, question: "When do you feel the most playful, flirty version of yourself with me?" },
          { id: "flirty_242", category: "Compliments", level: 2, question: "What's the sexiest compliment you've never actually said out loud?" },
          { id: "flirty_243", category: "Compliments", level: 1, question: "Compliment my voice, specifically, and what it does to you." },
          { id: "flirty_244", category: "Attraction", level: 2, question: "What's something I do without thinking that you find irresistibly attractive?" },
          { id: "flirty_245", category: "Attraction", level: 1, question: "Casual clothes or dressed up — which version of me pulls your focus more?" },
          { id: "flirty_246", category: "Kissing", level: 2, question: "What's your favorite unexpected place we've kissed?" },
          { id: "flirty_247", category: "Kissing", level: 3, question: "Describe the kiss you think about when you miss me the most." },
          { id: "flirty_248", category: "Preferences", level: 2, question: "Would you rather I initiated a kiss in public, or saved it for when we're alone?" },
          { id: "flirty_249", category: "Date Night", level: 3, question: "Plan a date that ends with neither of us wanting to say goodnight." },
          { id: "flirty_250", category: "Confessions", level: 3, question: "Confess a small thing you do on purpose just to get my attention." },
          { id: "flirty_251", category: "Confessions", level: 4, question: "What's a fantasy about us you've only recently let yourself think about?", rare: true },
          { id: "flirty_252", category: "Tell Me", level: 3, question: "Tell me what 'missing me' actually feels like in your body." },
          { id: "flirty_253", category: "Show Me", level: 3, question: "Show me your favorite way to be pulled closer." },
          { id: "flirty_254", category: "Romantic Scenarios", level: 3, question: "Narrate the moment right after a long hug when neither of us lets go first." },
          { id: "flirty_255", category: "Chemistry", level: 3, question: "What's a look across a crowded room that instantly says everything?" },
          { id: "flirty_256", category: "Choose", level: 3, question: "Would you rather a slow dance with no music, or music with no dancing?" },
          { id: "flirty_257", category: "After Dark", level: 4, question: "What's something intimate that feels different now than it did when we started?" },
          { id: "flirty_258", category: "Playful Challenges", level: 2, question: "Challenge me to a staring contest where the loser gives the winner a kiss." },
          { id: "flirty_259", category: "Wildcard", level: 4, question: "Say the boldest true thing you're thinking, right now, out loud.", rare: true },
          { id: "flirty_260", category: "Flirting", level: 2, question: "What's a flirty compliment you'd only say after a glass of wine?" },
          { id: "flirty_261", category: "Attraction", level: 2, question: "What's the most attractive thing about how I handle a hard day?" },
          { id: "flirty_262", category: "Kissing", level: 2, question: "Slow and lingering, or quick and surprising — what's your kiss mood today?" },
          { id: "flirty_263", category: "Preferences", level: 3, question: "What's your ideal way to be woken up in the morning?" },
          { id: "flirty_264", category: "Date Night", level: 2, question: "What's one flirty tradition you want us to start on date nights?" },
          { id: "flirty_265", category: "Confessions", level: 3, question: "Confess the last time you couldn't stop thinking about a specific moment with me." },
          { id: "flirty_266", category: "Tell Me", level: 3, question: "Tell me one word for how you want tonight to feel." },
          { id: "flirty_267", category: "Show Me", level: 3, question: "Show me the exact hug you need right now." },
          { id: "flirty_268", category: "Romantic Scenarios", level: 4, question: "Describe getting ready together for a night out, distracted by each other the whole time." },
          { id: "flirty_269", category: "Chemistry", level: 3, question: "What's something about tension between us that you secretly enjoy?" },
          { id: "flirty_270", category: "Choose", level: 4, question: "Would you rather I teased you all evening and delivered later, or got straight to the point?" },
          { id: "flirty_271", category: "After Dark", level: 4, question: "What's something you want more of that you haven't asked for directly?" },
          { id: "flirty_272", category: "Playful Challenges", level: 2, question: "Dare me to whisper something in your ear before this round ends." },
          { id: "flirty_273", category: "Flirting", level: 1, question: "What's the flirtiest thing about my handwriting, my texts, or the way I type?" },
          { id: "flirty_274", category: "Compliments", level: 2, question: "Compliment the way I hold you, specifically." },
          { id: "flirty_275", category: "Attraction", level: 2, question: "What version of confident-me do you find most magnetic?" },
          { id: "flirty_276", category: "Kissing", level: 2, question: "What's the perfect length for a goodbye kiss, in your opinion?" },
          { id: "flirty_277", category: "Preferences", level: 2, question: "Do you want more spontaneous affection, or more planned romantic moments?" },
          { id: "flirty_278", category: "Date Night", level: 3, question: "What's a flirty dare you'd want built into our next date night?" },
          { id: "flirty_279", category: "Confessions", level: 3, question: "Confess one thing you find yourself doing just to make me look at you." },
          { id: "flirty_280", category: "Tell Me", level: 3, question: "Tell me what makes a regular Tuesday feel romantic to you." },
          { id: "flirty_281", category: "Show Me", level: 3, question: "Show me how you look at me when you think I'm not paying attention." },
          { id: "flirty_282", category: "Romantic Scenarios", level: 3, question: "Narrate the quiet moment right before either of us says something we've been holding back." },
          { id: "flirty_283", category: "Chemistry", level: 4, question: "What's a physical detail of mine that gets more attractive to you over time, not less?" },
          { id: "flirty_284", category: "Choose", level: 3, question: "Would you rather a bold move from me first, or a bold move from you first?" },
          { id: "flirty_285", category: "After Dark", level: 4, question: "What makes you feel most wanted, specifically, versus just loved?" },
          { id: "flirty_286", category: "Playful Challenges", level: 2, question: "Make up a flirty forfeit for whoever answers the next card worst." },
          { id: "flirty_287", category: "Wildcard", level: 4, question: "Say the one thing you'd want me to do right now if you could ask for anything.", rare: true },
          { id: "flirty_288", category: "Flirting", level: 2, question: "What's a flirty habit of mine you hope I never grow out of?" },
          { id: "flirty_289", category: "Compliments", level: 1, question: "Compliment the last thing I said that made you smile." },
          { id: "flirty_290", category: "Attraction", level: 2, question: "What's an attractive quality of mine that has nothing to do with looks?" },
          { id: "flirty_291", category: "Kissing", level: 3, question: "What's a moment you wish had turned into a kiss, but didn't?" },
          { id: "flirty_292", category: "Preferences", level: 2, question: "Do you prefer affection that starts slow, or affection that's sudden and surprising?" },
          { id: "flirty_293", category: "Date Night", level: 3, question: "What's the most romantic thing that could happen on an otherwise ordinary night in?" },
          { id: "flirty_294", category: "Confessions", level: 4, question: "Confess something about desire you've never said to anyone before, not just me.", rare: true },
          { id: "flirty_295", category: "Tell Me", level: 3, question: "Tell me the difference between how you flirt now versus at the very beginning." },
          { id: "flirty_296", category: "Show Me", level: 3, question: "Show me the exact reaction you have when I surprise you." },
          { id: "flirty_297", category: "Romantic Scenarios", level: 3, question: "Describe the version of us, ten years from now, still flirting like this." },
          { id: "flirty_298", category: "Chemistry", level: 3, question: "What's the fastest our chemistry has ever gone from calm to electric?" },
          { id: "flirty_299", category: "Choose", level: 3, question: "Would you rather a whispered compliment, or a written one you can keep?" },
          { id: "flirty_300", category: "After Dark", level: 4, question: "What's a boundary that, when respected, actually makes you feel closer to me?" },
        ],
        chaos: [
          { id: "chaos_001", category: "Who Would", question: "Who would survive longer in a zombie apocalypse?" },
          { id: "chaos_002", category: "Who Would", question: "Who would be the better reality TV contestant?" },
          { id: "chaos_003", category: "Who Would", question: "Who would accidentally start a cult with a group project speech?" },
          { id: "chaos_004", category: "Who Would", question: "Who would become friends with the flight attendant first?" },
          { id: "chaos_005", category: "Who Would", question: "Who would win in a dance-off with no practice?" },
          { id: "chaos_006", category: "Most Likely", question: "Who is more likely to accidentally become famous online?" },
          { id: "chaos_007", category: "Most Likely", question: "Who is more likely to trip in public and pretend it was on purpose?" },
          { id: "chaos_008", category: "Most Likely", question: "Who is more likely to cry during a movie?" },
          { id: "chaos_009", category: "Most Likely", question: "Who is more likely to adopt a street animal on impulse?" },
          { id: "chaos_010", category: "Most Likely", question: "Who is more likely to forget why they walked into a room?" },
          { id: "chaos_011", category: "Embarrassing", question: "Who is more likely to wave back at someone who wasn't waving at them?" },
          { id: "chaos_012", category: "Embarrassing", question: "Who is more likely to send a text to the wrong person?" },
          { id: "chaos_013", category: "Embarrassing", question: "Who is more likely to have food on their face without noticing?" },
          { id: "chaos_014", category: "Arguments", question: "Who would win an argument if neither of you could use facts?" },
          { id: "chaos_015", category: "Arguments", question: "Who is more stubborn when you're both wrong?" },
          { id: "chaos_016", category: "Arguments", question: "Who apologizes first after a silly fight?" },
          { id: "chaos_017", category: "Hypothetical Disasters", question: "Who would handle a sudden power outage better?" },
          { id: "chaos_018", category: "Hypothetical Disasters", question: "Who would stay calmer if the car broke down?" },
          { id: "chaos_019", category: "Hypothetical Disasters", question: "Who would negotiate better with a landlord?" },
          { id: "chaos_020", category: "Weird Scenarios", question: "Who would get lost even while using GPS?" },
          { id: "chaos_021", category: "Weird Scenarios", question: "Who would forget their own birthday first?" },
          { id: "chaos_022", category: "Weird Scenarios", question: "Who would talk to a plant like it's a roommate?" },
          { id: "chaos_023", category: "Ranking", question: "Who is the better cook, honestly?" },
          { id: "chaos_024", category: "Ranking", question: "Who has better taste in music?" },
          { id: "chaos_025", category: "Ranking", question: "Who is funnier at 1 a.m.?" },
          { id: "chaos_026", category: "Predictions", question: "Who will fall asleep first tonight?" },
          { id: "chaos_027", category: "Predictions", question: "Who will text first tomorrow morning?" },
          { id: "chaos_028", category: "Predictions", question: "Who will suggest dessert first?" },
          { id: "chaos_029", category: "Petty Debates", question: "Who is more dramatic about being a little sick?" },
          { id: "chaos_030", category: "Petty Debates", question: "Who steals more of the blanket?" },
          { id: "chaos_031", category: "Petty Debates", question: "Who is more likely to say 'I'm fine' when not fine?" },
          { id: "chaos_032", category: "Inside Jokes", question: "Which one of your inside jokes would confuse a stranger the most?" },
          { id: "chaos_033", category: "Inside Jokes", question: "Who starts the inside jokes more often?" },
          { id: "chaos_034", category: "Challenges", question: "Who would last longer without their phone?" },
          { id: "chaos_035", category: "Challenges", question: "Who would win a staring contest?" },
          { id: "chaos_036", category: "Challenges", question: "Who would survive a week of only spicy food?" },
          { id: "chaos_037", category: "Random", question: "Who would spend $500 on something completely unnecessary?" },
          { id: "chaos_038", category: "Random", question: "Who would win at charades?" },
          { id: "chaos_039", category: "Random", question: "Who would make a better podcast host?" },
          { id: "chaos_040", category: "Challenges", question: "Recreate your first date, right now, as best you can from memory.", rare: true },
          { id: "chaos_041", category: "Random", question: "Whoever laughs first has to do a silly dance.", rare: true },
          { id: "chaos_042", category: "Who Would", question: "Who would pack lighter for a trip?" },
          { id: "chaos_043", category: "Who Would", question: "Who would become the group chat admin everyone fears?" },
          { id: "chaos_044", category: "Most Likely", question: "Who is more likely to rewatch the same series again?" },
          { id: "chaos_045", category: "Most Likely", question: "Who is more likely to buy a gadget that never gets used?" },
          { id: "chaos_046", category: "Embarrassing", question: "Who is more likely to mishear lyrics confidently?" },
          { id: "chaos_047", category: "Arguments", question: "Who uses more sarcasm in a disagreement?" },
          { id: "chaos_048", category: "Hypothetical Disasters", question: "Who would lead if you got locked out of the house?" },
          { id: "chaos_049", category: "Weird Scenarios", question: "Who would befriend a raccoon energy person first?" },
          { id: "chaos_050", category: "Ranking", question: "Who takes better photos of the other person?" },
          { id: "chaos_051", category: "Predictions", question: "Who will say 'I told you so' next?" },
          { id: "chaos_052", category: "Petty Debates", question: "Who is slower to leave the house?" },
          { id: "chaos_053", category: "Inside Jokes", question: "What meme energy are you as a couple?" },
          { id: "chaos_054", category: "Challenges", question: "Who would win at Mario Kart with one hand?" },
          { id: "chaos_055", category: "Random", question: "Who would survive a week as a barista better?" },
          { id: "chaos_056", category: "Who Would", question: "Who would accidentally join a pyramid scheme first?" },
          { id: "chaos_057", category: "Most Likely", question: "Who is more likely to name a pet something ridiculous?" },
          { id: "chaos_058", category: "Embarrassing", question: "Who is more likely to have a public wardrobe fail?" },
          { id: "chaos_059", category: "Arguments", question: "Who changes the subject to food mid-fight?" },
          { id: "chaos_060", category: "Hypothetical Disasters", question: "Who would handle a cancelled flight better?" },
          { id: "chaos_061", category: "Weird Scenarios", question: "Who would talk during a horror movie more?" },
          { id: "chaos_062", category: "Ranking", question: "Who is messier in the kitchen?" },
          { id: "chaos_063", category: "Predictions", question: "Who will suggest a nap first this weekend?" },
          { id: "chaos_064", category: "Petty Debates", question: "Who is more competitive about board games?" },
          { id: "chaos_065", category: "Inside Jokes", question: "Who quotes movies more out of context?" },
          { id: "chaos_066", category: "Challenges", question: "Who can hold a plank longer?" },
          { id: "chaos_067", category: "Random", question: "Who would invent a worse startup idea?" },
          { id: "chaos_068", category: "Who Would", question: "Who would become a conspiracy theory believer as a bit?" },
          { id: "chaos_069", category: "Most Likely", question: "Who is more likely to cry at an airport goodbye?" },
          { id: "chaos_070", category: "Embarrassing", question: "Who is more likely to call a teacher 'mom'?" },
          { id: "chaos_071", category: "Arguments", question: "Who needs more time to cool down?" },
          { id: "chaos_072", category: "Hypothetical Disasters", question: "Who would remember the insurance password?" },
          { id: "chaos_073", category: "Weird Scenarios", question: "Who would name their WiFi something embarrassing?" },
          { id: "chaos_074", category: "Ranking", question: "Who is better at gift-giving?" },
          { id: "chaos_075", category: "Predictions", question: "Who will become a morning person first?" },
          { id: "chaos_076", category: "Petty Debates", question: "Who leaves more dishes 'to soak'?" },
          { id: "chaos_077", category: "Inside Jokes", question: "Who does the better impression of the other?" },
          { id: "chaos_078", category: "Challenges", question: "Who can name more capitals in 30 seconds?" },
          { id: "chaos_079", category: "Random", question: "Who would survive a reality dating show longer?" },
          { id: "chaos_080", category: "Who Would", question: "Who would write a viral tweet by accident?" },
          { id: "chaos_081", category: "Most Likely", question: "Who is more likely to fall for a prank twice?" },
          { id: "chaos_082", category: "Embarrassing", question: "Who is more likely to wave at a reflective window?" },
          { id: "chaos_083", category: "Arguments", question: "Who brings up old screenshots in a playful roast?" },
          { id: "chaos_084", category: "Hypothetical Disasters", question: "Who would stay calm in a haunted house?" },
          { id: "chaos_085", category: "Weird Scenarios", question: "Who would collect too many mugs?" },
          { id: "chaos_086", category: "Ranking", question: "Who is better at parallel parking?" },
          { id: "chaos_087", category: "Predictions", question: "Who will suggest ordering takeout first?" },
          { id: "chaos_088", category: "Petty Debates", question: "Who is more likely to say 'one more episode'?" },
          { id: "chaos_089", category: "Inside Jokes", question: "Who creates nicknames faster?" },
          { id: "chaos_090", category: "Challenges", question: "Who would win a silent contest for 5 minutes?" },
          { id: "chaos_091", category: "Random", question: "Who would become a food critic on pure confidence?" },
          { id: "chaos_092", category: "Who Would", question: "Who would accidentally become the favorite of a random grandma?" },
          { id: "chaos_093", category: "Most Likely", question: "Who is more likely to start a plant collection?" },
          { id: "chaos_094", category: "Embarrassing", question: "Who is more likely to trip while trying to look cool?" },
          { id: "chaos_095", category: "Arguments", question: "Who wins when the debate is about movie plots?" },
          { id: "chaos_096", category: "Hypothetical Disasters", question: "Who would fix a leaky faucet with pure stubbornness?" },
          { id: "chaos_097", category: "Weird Scenarios", question: "Who would talk to Alexa like a person?" },
          { id: "chaos_098", category: "Ranking", question: "Who has the better 'I told you so' face?" },
          { id: "chaos_099", category: "Predictions", question: "Who will finish their drink first on the next date?" },
          { id: "chaos_100", category: "Petty Debates", question: "Who is more likely to hide online shopping packages?", rare: true },
          { id: "chaos_101", category: "Who Would", question: "Who would win a pillow fight in under 10 seconds?" },
          { id: "chaos_102", category: "Who Would", question: "Who would forget they're on a video call and start singing?" },
          { id: "chaos_103", category: "Who Would", question: "Who would talk their way out of a speeding ticket?" },
          { id: "chaos_104", category: "Who Would", question: "Who would end up on a first-name basis with every waiter in town?" },
          { id: "chaos_105", category: "Who Would", question: "Who would win an argument with a self-checkout machine?" },
          { id: "chaos_106", category: "Who Would", question: "Who would accidentally become a regular extra in someone else's vacation photos?" },
          { id: "chaos_107", category: "Who Would", question: "Who would survive being locked out in pajamas the longest?" },
          { id: "chaos_108", category: "Who Would", question: "Who would win a debate against a toddler?" },
          { id: "chaos_109", category: "Most Likely", question: "Who is more likely to text \"we need to talk\" as a joke?" },
          { id: "chaos_110", category: "Most Likely", question: "Who is more likely to fall asleep during a movie they picked?" },
          { id: "chaos_111", category: "Most Likely", question: "Who is more likely to buy matching outfits without asking first?" },
          { id: "chaos_112", category: "Most Likely", question: "Who is more likely to start clapping at the wrong moment?" },
          { id: "chaos_113", category: "Most Likely", question: "Who is more likely to over-explain a simple answer?" },
          { id: "chaos_114", category: "Most Likely", question: "Who is more likely to name every houseplant?" },
          { id: "chaos_115", category: "Most Likely", question: "Who is more likely to get emotionally attached to a video game character?" },
          { id: "chaos_116", category: "Most Likely", question: "Who is more likely to save a spider instead of squashing it?" },
          { id: "chaos_117", category: "Embarrassing", question: "Who is more likely to laugh at their own joke before finishing it?" },
          { id: "chaos_118", category: "Embarrassing", question: "Who is more likely to walk into a glass door?" },
          { id: "chaos_119", category: "Embarrassing", question: "Who is more likely to clap when a plane lands?" },
          { id: "chaos_120", category: "Embarrassing", question: "Who is more likely to sing the wrong lyrics with total confidence?" },
          { id: "chaos_121", category: "Embarrassing", question: "Who is more likely to answer a call meant for someone else and keep talking?" },
          { id: "chaos_122", category: "Embarrassing", question: "Who is more likely to accidentally like an old photo while stalking someone's profile?" },
          { id: "chaos_123", category: "Embarrassing", question: "Who is more likely to say \"you too\" when a waiter says \"enjoy your meal\"?" },
          { id: "chaos_124", category: "Embarrassing", question: "Who is more likely to get caught talking to themselves in the mirror?" },
          { id: "chaos_125", category: "Arguments", question: "Who holds a grudge about the thermostat the longest?" },
          { id: "chaos_126", category: "Arguments", question: "Who is more likely to bring receipts, literal or figurative, into an argument?" },
          { id: "chaos_127", category: "Arguments", question: "Who wins the debate over who's the better driver?" },
          { id: "chaos_128", category: "Arguments", question: "Who is quicker to admit they're wrong, even a little?" },
          { id: "chaos_129", category: "Arguments", question: "Who turns an argument into a bit within five minutes?" },
          { id: "chaos_130", category: "Arguments", question: "Who is more stubborn about the \"right\" way to load a dishwasher?" },
          { id: "chaos_131", category: "Arguments", question: "Who wins the \"who's more tired\" competition every single time?" },
          { id: "chaos_132", category: "Arguments", question: "Who is more likely to fake being asleep to avoid a conversation?" },
          { id: "chaos_133", category: "Hypothetical Disasters", question: "Who would take charge if the wifi went out during a big game?" },
          { id: "chaos_134", category: "Hypothetical Disasters", question: "Who would handle discovering a leak under the sink better?" },
          { id: "chaos_135", category: "Hypothetical Disasters", question: "Who would stay calmer if we missed our own flight?" },
          { id: "chaos_136", category: "Hypothetical Disasters", question: "Who would improvise dinner best if the stove broke?" },
          { id: "chaos_137", category: "Hypothetical Disasters", question: "Who would be more useful in a zombie apocalypse grocery run?" },
          { id: "chaos_138", category: "Hypothetical Disasters", question: "Who would keep their cool if the GPS sent us the wrong way for an hour?" },
          { id: "chaos_139", category: "Hypothetical Disasters", question: "Who would handle a surprise in-law visit with zero notice better?" },
          { id: "chaos_140", category: "Hypothetical Disasters", question: "Who would fix a jammed door faster — with tools or brute force?" },
          { id: "chaos_141", category: "Weird Scenarios", question: "Who would try to befriend a very suspicious pigeon?" },
          { id: "chaos_142", category: "Weird Scenarios", question: "Who would narrate grocery shopping like a nature documentary?" },
          { id: "chaos_143", category: "Weird Scenarios", question: "Who would give a dramatic TED talk about their favorite snack?" },
          { id: "chaos_144", category: "Weird Scenarios", question: "Who would name their car something oddly specific?" },
          { id: "chaos_145", category: "Weird Scenarios", question: "Who would try to have a full conversation with a self-driving car?" },
          { id: "chaos_146", category: "Weird Scenarios", question: "Who would organize a spontaneous parade over good news?" },
          { id: "chaos_147", category: "Weird Scenarios", question: "Who would negotiate with a vending machine that ate their money?", rare: true },
          { id: "chaos_148", category: "Weird Scenarios", question: "Who would treat a robot vacuum like a pet?" },
          { id: "chaos_149", category: "Ranking", question: "Who is the better multitasker, honestly?" },
          { id: "chaos_150", category: "Ranking", question: "Who has the more useful \"life hacks\"?" },
          { id: "chaos_151", category: "Ranking", question: "Who is better at remembering directions without GPS?" },
          { id: "chaos_152", category: "Ranking", question: "Who tells a story with better pacing?" },
          { id: "chaos_153", category: "Ranking", question: "Who is more patient in long lines?" },
          { id: "chaos_154", category: "Ranking", question: "Who negotiates a better deal shopping?" },
          { id: "chaos_155", category: "Ranking", question: "Who has the stronger poker face?" },
          { id: "chaos_156", category: "Ranking", question: "Who packs a suitcase more efficiently?" },
          { id: "chaos_157", category: "Predictions", question: "Who will be the first to suggest getting a pet this year?" },
          { id: "chaos_158", category: "Predictions", question: "Who will bring up a vacation idea first this season?" },
          { id: "chaos_159", category: "Predictions", question: "Who will fall for the next viral trend first?" },
          { id: "chaos_160", category: "Predictions", question: "Who will start a new hobby first this year?" },
          { id: "chaos_161", category: "Predictions", question: "Who will cave and order dessert first tonight?" },
          { id: "chaos_162", category: "Predictions", question: "Who will remember to water the plants without being asked?" },
          { id: "chaos_163", category: "Predictions", question: "Who will suggest canceling plans to stay in first?" },
          { id: "chaos_164", category: "Predictions", question: "Who will bring up moving somewhere new first?" },
          { id: "chaos_165", category: "Petty Debates", question: "Who takes up more closet space, if we're honest?" },
          { id: "chaos_166", category: "Petty Debates", question: "Who is more particular about how the towels are folded?" },
          { id: "chaos_167", category: "Petty Debates", question: "Who \"borrows\" the other's charger and never gives it back?" },
          { id: "chaos_168", category: "Petty Debates", question: "Who is louder chewing, and who will actually admit it?" },
          { id: "chaos_169", category: "Petty Debates", question: "Who leaves the cabinet doors open more?" },
          { id: "chaos_170", category: "Petty Debates", question: "Who hogs the good blanket first?" },
          { id: "chaos_171", category: "Petty Debates", question: "Who is more particular about the \"correct\" TV volume?" },
          { id: "chaos_172", category: "Petty Debates", question: "Who takes longer to pick something to watch?" },
          { id: "chaos_173", category: "Inside Jokes", question: "What's a word only the two of you use, and what does it actually mean?" },
          { id: "chaos_174", category: "Inside Jokes", question: "What's a face one of you makes that instantly cracks the other up?" },
          { id: "chaos_175", category: "Inside Jokes", question: "What bit have you done so many times it's basically tradition now?", rare: true },
          { id: "chaos_176", category: "Inside Jokes", question: "Who started your longest-running inside joke, and how?" },
          { id: "chaos_177", category: "Inside Jokes", question: "What's a movie line you two quote way too often?" },
          { id: "chaos_178", category: "Inside Jokes", question: "What's the weirdest thing that's become \"your song\" as a joke?" },
          { id: "chaos_179", category: "Inside Jokes", question: "What's an overreaction one of you had that's now a running bit?" },
          { id: "chaos_180", category: "Inside Jokes", question: "What nickname exists only because of an inside joke?" },
          { id: "chaos_181", category: "Challenges", question: "Who can go the longest without checking their phone right now?", rare: true },
          { id: "chaos_182", category: "Challenges", question: "Who can list five countries faster?" },
          { id: "chaos_183", category: "Challenges", question: "Who can do a better impression of the other, right now?" },
          { id: "chaos_184", category: "Challenges", question: "Who can hold eye contact the longest without laughing?" },
          { id: "chaos_185", category: "Challenges", question: "Who can come up with a rhyme for \"us\" the fastest?" },
          { id: "chaos_186", category: "Challenges", question: "Who can guess the other's next words in a familiar story?" },
          { id: "chaos_187", category: "Challenges", question: "Who can name more of each other's favorite things in 20 seconds?" },
          { id: "chaos_188", category: "Challenges", question: "Who can keep a straight face the longest while the other tries to make them laugh?" },
          { id: "chaos_189", category: "Random", question: "Who would win a debate about pineapple on pizza?" },
          { id: "chaos_190", category: "Random", question: "Who would be a better game show contestant, honestly?" },
          { id: "chaos_191", category: "Random", question: "Who would survive longer without coffee or tea?" },
          { id: "chaos_192", category: "Random", question: "Who would win at a trivia night about each other?" },
          { id: "chaos_193", category: "Random", question: "Who would make friends with a stranger in line faster?" },
          { id: "chaos_194", category: "Random", question: "Who would be more likely to cry at a commercial?" },
          { id: "chaos_195", category: "Random", question: "Who would win a \"who can be quieter\" contest for one hour?" },
          { id: "chaos_196", category: "Random", question: "Who would be funnier live-tweeting a boring meeting?", rare: true },
          { id: "chaos_197", category: "Superlatives", question: "Who is most likely to become the \"fun one\" at every party you both attend?" },
          { id: "chaos_198", category: "Superlatives", question: "Who is most likely to remember a stranger's name better than their own coworker's?" },
          { id: "chaos_199", category: "Superlatives", question: "Who is most likely to turn a five-minute errand into an hour-long adventure?" },
          { id: "chaos_200", category: "Superlatives", question: "Who is most likely to win \"best hype person\" at the other's big moment?", rare: true },
          { id: "chaos_201", category: "Who Would", question: "Who would win a scavenger hunt in a place they've never been?" },
          { id: "chaos_202", category: "Who Would", question: "Who would talk their way out of a speeding ticket first?" },
          { id: "chaos_203", category: "Who Would", question: "Who would win a blindfolded taste test of our favorite snacks?" },
          { id: "chaos_204", category: "Who Would", question: "Who would become the unofficial mayor of any small town we visited?" },
          { id: "chaos_205", category: "Who Would", question: "Who would win an argument with a self-checkout machine?" },
          { id: "chaos_206", category: "Who Would", question: "Who would survive better if we suddenly had to live off-grid for a month?" },
          { id: "chaos_207", category: "Who Would", question: "Who would end up adopting a stray animal on a random walk?" },
          { id: "chaos_208", category: "Who Would", question: "Who would win a cooking competition with a mystery basket of ingredients?" },
          { id: "chaos_209", category: "Who Would", question: "Who would talk to literally every stranger at a party?" },
          { id: "chaos_210", category: "Who Would", question: "Who would win a spontaneous dance battle in the kitchen?" },
          { id: "chaos_211", category: "Most Likely", question: "Who is more likely to fall asleep during a movie they picked?" },
          { id: "chaos_212", category: "Most Likely", question: "Who is more likely to start a hobby and quit within a week?" },
          { id: "chaos_213", category: "Most Likely", question: "Who is more likely to talk to a pet like it fully understands English?" },
          { id: "chaos_214", category: "Most Likely", question: "Who is more likely to get emotionally attached to a plant?" },
          { id: "chaos_215", category: "Most Likely", question: "Who is more likely to send a voice message instead of just typing?" },
          { id: "chaos_216", category: "Most Likely", question: "Who is more likely to win an argument by simply outlasting the other?" },
          { id: "chaos_217", category: "Most Likely", question: "Who is more likely to buy something just because it was on sale?" },
          { id: "chaos_218", category: "Embarrassing", question: "Who is more likely to laugh at the worst possible moment?" },
          { id: "chaos_219", category: "Embarrassing", question: "Who is more likely to walk into a glass door in public?" },
          { id: "chaos_220", category: "Embarrassing", question: "Who is more likely to accidentally reply-all to an embarrassing message?" },
          { id: "chaos_221", category: "Arguments", question: "Who brings up an argument from months ago at the worst time?" },
          { id: "chaos_222", category: "Arguments", question: "Who is more likely to end an argument with a joke that actually works?" },
          { id: "chaos_223", category: "Hypothetical Disasters", question: "Who would handle losing the house keys in a foreign city better?" },
          { id: "chaos_224", category: "Hypothetical Disasters", question: "Who would stay calmer if we both got separated in a crowded place?" },
          { id: "chaos_225", category: "Weird Scenarios", question: "Who would end up giving a stranger unsolicited relationship advice?" },
          { id: "chaos_226", category: "Weird Scenarios", question: "Who would try to make friends with a very unfriendly cat?" },
          { id: "chaos_227", category: "Weird Scenarios", question: "Who would accidentally end up in the background of a stranger's photoshoot?" },
          { id: "chaos_228", category: "Ranking", question: "Who has better handwriting?" },
          { id: "chaos_229", category: "Ranking", question: "Who is the better dancer, honestly, no bias?" },
          { id: "chaos_230", category: "Ranking", question: "Who gives better advice under pressure?" },
          { id: "chaos_231", category: "Predictions", question: "Who will be the first to fall asleep on the couch tonight?" },
          { id: "chaos_232", category: "Predictions", question: "Who will suggest ordering dessert before we even finish the main course?" },
          { id: "chaos_233", category: "Petty Debates", question: "Who takes longer getting ready to leave the house?" },
          { id: "chaos_234", category: "Petty Debates", question: "Who is pickier about how the dishwasher gets loaded?" },
          { id: "chaos_235", category: "Inside Jokes", question: "What's the dumbest joke that still makes both of you laugh every time?" },
          { id: "chaos_236", category: "Inside Jokes", question: "What's a phrase that means something completely different only to you two?" },
          { id: "chaos_237", category: "Challenges", question: "Who can name more of each other's exes without flinching?" },
          { id: "chaos_238", category: "Challenges", question: "Who can go longer without saying 'um' or 'like' while talking?" },
          { id: "chaos_239", category: "Random", question: "Who would win if you both tried to build furniture with no instructions?" },
          { id: "chaos_240", category: "Random", question: "Who would be funnier narrating a nature documentary?" },
          { id: "chaos_241", category: "Superlatives", question: "Who is most likely to fall in love with a random dog on the street?" },
          { id: "chaos_242", category: "Superlatives", question: "Who is most likely to accidentally start a trend among your friends?" },
          { id: "chaos_243", category: "Who Would", question: "Who would win a debate about which decade had the best music?" },
          { id: "chaos_244", category: "Who Would", question: "Who would be the first to cave and check their phone during a 'no phones' rule?" },
          { id: "chaos_245", category: "Most Likely", question: "Who is more likely to plan an entire trip in one sitting out of excitement?" },
          { id: "chaos_246", category: "Most Likely", question: "Who is more likely to make a to-do list and never look at it again?" },
          { id: "chaos_247", category: "Embarrassing", question: "Who is more likely to laugh so hard they can't finish a sentence?" },
          { id: "chaos_248", category: "Arguments", question: "Who is more likely to text an apology instead of saying it in person?" },
          { id: "chaos_249", category: "Hypothetical Disasters", question: "Who would panic first if the power went out during a movie night?" },
          { id: "chaos_250", category: "Weird Scenarios", question: "Who would end up narrating their own life out loud without noticing?" },
          { id: "chaos_251", category: "Ranking", question: "Who is more likely to win a spelling bee under pressure?" },
          { id: "chaos_252", category: "Predictions", question: "Who will bring up getting a bigger TV first?" },
          { id: "chaos_253", category: "Petty Debates", question: "Who leaves more half-empty glasses of water around the house?" },
          { id: "chaos_254", category: "Inside Jokes", question: "What's a mispronounced word that became permanently part of your vocabulary as a couple?" },
          { id: "chaos_255", category: "Challenges", question: "Who can list the most countries in one minute?" },
          { id: "chaos_256", category: "Random", question: "Who would be a better contestant on a cooking reality show?" },
          { id: "chaos_257", category: "Superlatives", question: "Who is most likely to turn a boring chore into a game?" },
          { id: "chaos_258", category: "Who Would", question: "Who would win a competition for who can nap the fastest?" },
          { id: "chaos_259", category: "Who Would", question: "Who would give the more convincing fake excuse to skip a boring event?" },
          { id: "chaos_260", category: "Most Likely", question: "Who is more likely to become emotionally invested in a stranger's drama online?" },
          { id: "chaos_261", category: "Embarrassing", question: "Who is more likely to get caught talking about someone right as they walk in?" },
          { id: "chaos_262", category: "Arguments", question: "Who is quicker to say 'you're right' just to end an argument?" },
          { id: "chaos_263", category: "Hypothetical Disasters", question: "Who would come up with a better backup plan if our first plan totally failed?" },
          { id: "chaos_264", category: "Weird Scenarios", question: "Who would befriend the world's most talkative taxi driver?" },
          { id: "chaos_265", category: "Ranking", question: "Who tells better bedtime stories, even for adults?" },
          { id: "chaos_266", category: "Predictions", question: "Who will suggest a spontaneous weekend trip first this year?" },
          { id: "chaos_267", category: "Petty Debates", question: "Who is more particular about how the bed gets made?" },
          { id: "chaos_268", category: "Inside Jokes", question: "What's a text typo that became a running joke you still use?" },
          { id: "chaos_269", category: "Challenges", question: "Who can hold their breath longer, right now?" },
          { id: "chaos_270", category: "Random", question: "Who would win at karaoke on a song neither of you knows well?" },
          { id: "chaos_271", category: "Superlatives", question: "Who is most likely to accidentally befriend a celebrity in real life?" },
          { id: "chaos_272", category: "Who Would", question: "Who would out-negotiate a street vendor first?" },
          { id: "chaos_273", category: "Most Likely", question: "Who is more likely to fall for an obvious April Fools' joke?" },
          { id: "chaos_274", category: "Embarrassing", question: "Who is more likely to accidentally show up to a costume party in regular clothes?" },
          { id: "chaos_275", category: "Arguments", question: "Who is better at arguing calmly instead of raising their voice?" },
          { id: "chaos_276", category: "Hypothetical Disasters", question: "Who would be first to suggest calling it a night if a plan started going wrong?" },
          { id: "chaos_277", category: "Weird Scenarios", question: "Who would try to teach a parrot to say something ridiculous?" },
          { id: "chaos_278", category: "Ranking", question: "Who is a better judge of character on a first meeting?" },
          { id: "chaos_279", category: "Predictions", question: "Who will be the one to suggest redecorating a room first?" },
          { id: "chaos_280", category: "Petty Debates", question: "Who leaves their shoes in the most inconvenient spot?" },
          { id: "chaos_281", category: "Inside Jokes", question: "What's a costume, prop, or object that's become a couple's tradition prop?" },
          { id: "chaos_282", category: "Challenges", question: "Who can balance something on their head the longest, right now?", rare: true },
          { id: "chaos_283", category: "Random", question: "Who would survive a week eating only what's in the fridge right now?" },
          { id: "chaos_284", category: "Superlatives", question: "Who is most likely to turn a five-star review into a personal mission?" },
          { id: "chaos_285", category: "Who Would", question: "Who would win a competition to make the other laugh first, no talking allowed?", rare: true },
          { id: "chaos_286", category: "Most Likely", question: "Who is more likely to fall in love with a new hobby overnight?" },
          { id: "chaos_287", category: "Embarrassing", question: "Who is more likely to send a voice message that's way too long by accident?" },
          { id: "chaos_288", category: "Arguments", question: "Who is the one who needs the last word, even in a silly disagreement?" },
          { id: "chaos_289", category: "Hypothetical Disasters", question: "Who would take charge if we both got food poisoning on vacation?" },
          { id: "chaos_290", category: "Weird Scenarios", question: "Who would end up giving directions to a lost tourist, even in an unfamiliar city?" },
          { id: "chaos_291", category: "Ranking", question: "Who is better at keeping a secret, honestly?" },
          { id: "chaos_292", category: "Predictions", question: "Who will bring up trying a new restaurant first this month?" },
          { id: "chaos_293", category: "Petty Debates", question: "Who takes over the aux cord more often on car rides?" },
          { id: "chaos_294", category: "Inside Jokes", question: "What's an accent or voice one of you does that's become a household bit?" },
          { id: "chaos_295", category: "Challenges", question: "Who can come up with a better excuse for being late, on the spot?" },
          { id: "chaos_296", category: "Random", question: "Who would win an eating contest with something neither of you likes?" },
          { id: "chaos_297", category: "Superlatives", question: "Who is most likely to become the group's designated planner for every trip?" },
          { id: "chaos_298", category: "Superlatives", question: "Who is most likely to know the lyrics to a song neither of you claims to like?" },
          { id: "chaos_299", category: "Who Would", question: "Who would win a game of chess against a suspiciously confident stranger?" },
          { id: "chaos_300", category: "Most Likely", question: "Who is more likely to name every plant in the house something ridiculous?" },
        ],
        future: [
          { id: "future_001", category: "Travel", question: "What country should we visit together first?" },
          { id: "future_002", category: "Travel", question: "Beach vacation, city trip, or nature escape — what's our next move?" },
          { id: "future_003", category: "Travel", question: "What is a place from your childhood you'd like to show me?" },
          { id: "future_004", category: "Travel", question: "Would you rather a slow train journey or a quick flight for our trips?" },
          { id: "future_005", category: "Home", question: "What would our dream home look like?" },
          { id: "future_006", category: "Home", question: "What is non-negotiable in a place we live?" },
          { id: "future_007", category: "Home", question: "Do you picture plants, pets, art — what makes a house feel like ours?" },
          { id: "future_008", category: "Home", question: "City apartment or house with a yard?" },
          { id: "future_009", category: "Career", question: "Where do you picture your career five years from now?" },
          { id: "future_010", category: "Career", question: "How can I best support your work goals?" },
          { id: "future_011", category: "Career", question: "What does work-life balance look like for us as a team?" },
          { id: "future_012", category: "Money", question: "If money didn't matter for one year, what would we do?" },
          { id: "future_013", category: "Money", question: "What money habit do you want us to build together?" },
          { id: "future_014", category: "Money", question: "Save for a house, travel, or experiences first — what's your priority?" },
          { id: "future_015", category: "Lifestyle", question: "What would our perfect ordinary Sunday look like?" },
          { id: "future_016", category: "Lifestyle", question: "Are we more morning coffee people or late-night talk people long-term?" },
          { id: "future_017", category: "Lifestyle", question: "How social do you want our life to be — dinners out or quiet home?" },
          { id: "future_018", category: "Family", question: "What kind of family life do you picture for us?" },
          { id: "future_019", category: "Family", question: "How involved do you want extended family to be in our daily life?" },
          { id: "future_020", category: "Family", question: "What family tradition from your side do you want to keep?" },
          { id: "future_021", category: "Pets", question: "Do you picture a pet in our future — and if so, what kind?" },
          { id: "future_022", category: "Pets", question: "Dog, cat, or something unexpected?" },
          { id: "future_023", category: "Adventures", question: "What's one adventure you want us to take before we settle down?" },
          { id: "future_024", category: "Adventures", question: "What scare (skydiving, camping, karaoke) should we try together?" },
          { id: "future_025", category: "Marriage", question: "What does marriage mean to you, in your own words?" },
          { id: "future_026", category: "Marriage", question: "What would make a wedding feel like 'us'?" },
          { id: "future_027", category: "Marriage", question: "Describe, in one paragraph, what you imagine our wedding day feeling like.", rare: true },
          { id: "future_028", category: "Traditions", question: "What tradition would you want us to create together?" },
          { id: "future_029", category: "Traditions", question: "Weekly date night, annual trip, or something weirder?" },
          { id: "future_030", category: "Holidays", question: "How do you imagine we'll spend the holidays once we're together full-time?" },
          { id: "future_031", category: "Holidays", question: "Do you prefer hosting or traveling for holidays?" },
          { id: "future_032", category: "Retirement", question: "What do you imagine us doing when we're old together?" },
          { id: "future_033", category: "Retirement", question: "Where do you hope we grow old?" },
          { id: "future_034", category: "Dreams", question: "What's a dream of yours that you want us to chase together?" },
          { id: "future_035", category: "Dreams", question: "What personal dream should never get lost because of the relationship?" },
          { id: "future_036", category: "Bucket List", question: "What's one thing you'd want on a shared bucket list right now?" },
          { id: "future_037", category: "Bucket List", question: "Name three things we should do before five years pass." },
          { id: "future_038", category: "Where Will We Be", question: "Where do you think we'll be living five years from now?" },
          { id: "future_039", category: "Where Will We Be", question: "Do you see us in Brazil, abroad, or both across different seasons?" },
          { id: "future_040", category: "Future Memories", question: "Plan our next date, right now, in detail.", rare: true },
          { id: "future_041", category: "Travel", question: "What language would you want us to learn together?" },
          { id: "future_042", category: "Home", question: "What color is our future kitchen, in your head?" },
          { id: "future_043", category: "Career", question: "Would you support a big career risk if one of us needed it?" },
          { id: "future_044", category: "Money", question: "How do you feel about joint vs separate finances long-term?" },
          { id: "future_045", category: "Lifestyle", question: "How important is living near friends?" },
          { id: "future_046", category: "Family", question: "How do you feel about kids — timing, openness, fears?" },
          { id: "future_047", category: "Pets", question: "What rules would our future pet have to follow?" },
          { id: "future_048", category: "Adventures", question: "What festival or concert should be on our list?" },
          { id: "future_049", category: "Marriage", question: "What vows matter more to you: poetic or practical?" },
          { id: "future_050", category: "Traditions", question: "What should we always do on our anniversary?" },
          { id: "future_051", category: "Holidays", question: "New Year's Eve in or out, years from now?" },
          { id: "future_052", category: "Retirement", question: "What hobby do you hope we're still doing at 70?" },
          { id: "future_053", category: "Dreams", question: "If we wrote a five-year plan tonight, what tops the list?" },
          { id: "future_054", category: "Bucket List", question: "One spontaneous item and one planned item for the list." },
          { id: "future_055", category: "Where Will We Be", question: "Urban energy or quieter life — where does your gut go?" },
          { id: "future_056", category: "Future Memories", question: "What memory do you hope we create this year?" },
          { id: "future_057", category: "Travel", question: "Road trip across a country — which one?" },
          { id: "future_058", category: "Home", question: "Guest room or home office if we had to choose one?" },
          { id: "future_059", category: "Career", question: "How do we handle busy seasons without losing us?" },
          { id: "future_060", category: "Money", question: "What does 'enough' money mean to you?" },
          { id: "future_061", category: "Lifestyle", question: "How much routine vs spontaneity do you want long-term?" },
          { id: "future_062", category: "Family", question: "What values do you hope our household has?" },
          { id: "future_063", category: "Pets", question: "Would you rather foster first or adopt for life?" },
          { id: "future_064", category: "Adventures", question: "Camping for a weekend — yes, no, or luxury glamping only?" },
          { id: "future_065", category: "Marriage", question: "How do you want to handle last names, if at all?" },
          { id: "future_066", category: "Traditions", question: "Sunday morning ritual idea — go." },
          { id: "future_067", category: "Holidays", question: "Which holiday do you want to make 'ours'?" },
          { id: "future_068", category: "Retirement", question: "Travel when old, or deep roots in one place?" },
          { id: "future_069", category: "Dreams", question: "What creative project could we do as a couple someday?" },
          { id: "future_070", category: "Bucket List", question: "A kind of food destination you want to travel for." },
          { id: "future_071", category: "Where Will We Be", question: "Same city forever or chapters in different places?" },
          { id: "future_072", category: "Future Memories", question: "Describe a random Tuesday with us in ten years." },
          { id: "future_073", category: "Travel", question: "First class once or more trips on a budget?" },
          { id: "future_074", category: "Home", question: "What is the first thing you'd hang on the wall?" },
          { id: "future_075", category: "Career", question: "Whose job would dictate a move, if either?" },
          { id: "future_076", category: "Money", question: "Big wedding vs big honeymoon budget — lean?" },
          { id: "future_077", category: "Lifestyle", question: "Gym partners, hobby partners, or independent hobbies?" },
          { id: "future_078", category: "Family", question: "How do you want to show up for each other's parents?" },
          { id: "future_079", category: "Pets", question: "Name a ridiculous pet name you'd actually consider." },
          { id: "future_080", category: "Adventures", question: "Learn a sport together — which one?" },
          { id: "future_081", category: "Marriage", question: "What does partnership look like on hard financial months?" },
          { id: "future_082", category: "Traditions", question: "Photo tradition you want to keep every year." },
          { id: "future_083", category: "Holidays", question: "Would you create a new holiday just for us?" },
          { id: "future_084", category: "Retirement", question: "What promise do you want us to keep into old age?" },
          { id: "future_085", category: "Dreams", question: "If fear weren't a factor, what would we build?" },
          { id: "future_086", category: "Bucket List", question: "One skill to learn side by side." },
          { id: "future_087", category: "Where Will We Be", question: "Climate, culture, cost — what drives where we live?" },
          { id: "future_088", category: "Future Memories", question: "What should we document more so future-us can smile?" },
          { id: "future_089", category: "Travel", question: "Island hop or train across Europe?" },
          { id: "future_090", category: "Home", question: "Open-plan chaos or cozy separate rooms?" },
          { id: "future_091", category: "Career", question: "Sabbatical together someday — yes or no?" },
          { id: "future_092", category: "Money", question: "Charity or saving — how do we balance giving?" },
          { id: "future_093", category: "Lifestyle", question: "Digital detox weekends as a future rule?" },
          { id: "future_094", category: "Family", question: "Chosen family dinners — monthly idea?" },
          { id: "future_095", category: "Adventures", question: "Volunteer trip together — interested?" },
          { id: "future_096", category: "Marriage", question: "What support looks like during illness or stress." },
          { id: "future_097", category: "Traditions", question: "First dance song energy — classic or our song?" },
          { id: "future_098", category: "Dreams", question: "A home project you'd love to do with me." },
          { id: "future_099", category: "Bucket List", question: "See the northern lights or the Sahara?" },
          { id: "future_100", category: "Where Will We Be", question: "If we could only pick one city forever after next year, which?", rare: true },
          { id: "future_101", category: "Travel", question: "What's a trip you'd want to take only after we've been together ten years?" },
          { id: "future_102", category: "Travel", question: "Would you want a \"no itinerary\" trip once a year, just to see what happens?" },
          { id: "future_103", category: "Travel", question: "What's one travel tradition you want us to have before we're forty?" },
          { id: "future_104", category: "Travel", question: "Should we chase bucket-list destinations first, or comfort-return trips?" },
          { id: "future_105", category: "Travel", question: "What's a country you'd want to live in for a few months someday, not just visit?" },
          { id: "future_106", category: "Travel", question: "What kind of trip do you imagine us taking to celebrate a big future milestone?" },
          { id: "future_107", category: "Home", question: "What's a room in our future home you want to design entirely yourself?" },
          { id: "future_108", category: "Home", question: "Would you want a home that changes as our life does, or one we settle into forever?" },
          { id: "future_109", category: "Home", question: "What's a small comfort you want guaranteed in every home we ever have?" },
          { id: "future_110", category: "Home", question: "Should our future home be closer to nature or closer to the city center?" },
          { id: "future_111", category: "Home", question: "What's something from your current home you'd want to bring into ours?" },
          { id: "future_112", category: "Home", question: "What do you want our future front door to feel like when people walk through it?" },
          { id: "future_113", category: "Career", question: "What does \"successful\" mean to you ten years from now?" },
          { id: "future_114", category: "Career", question: "Would you want us to ever work on a project or business together?" },
          { id: "future_115", category: "Career", question: "What's a career risk you'd want my full support to take?" },
          { id: "future_116", category: "Career", question: "How should we handle it if one of us gets a huge opportunity in another city?" },
          { id: "future_117", category: "Career", question: "What does slowing down professionally look like for you someday?" },
          { id: "future_118", category: "Career", question: "What's a skill you want to have mastered by the time you're fifty?" },
          { id: "future_119", category: "Money", question: "What's a financial goal you want us to hit together in the next five years?" },
          { id: "future_120", category: "Money", question: "How do you feel about splitting big purchases evenly versus by income?" },
          { id: "future_121", category: "Money", question: "What's something you'd never want us to go into debt for?" },
          { id: "future_122", category: "Money", question: "Should we set a \"fun fund\" for spontaneous things, no questions asked?" },
          { id: "future_123", category: "Money", question: "What does financial security actually feel like to you, specifically?" },
          { id: "future_124", category: "Money", question: "How do you want us to handle money disagreements before they happen?" },
          { id: "future_125", category: "Lifestyle", question: "What's a daily ritual you hope we still have in twenty years?" },
          { id: "future_126", category: "Lifestyle", question: "Should our future be more social or more private, overall?" },
          { id: "future_127", category: "Lifestyle", question: "What's a habit you want us to build together this year that pays off later?" },
          { id: "future_128", category: "Lifestyle", question: "How much do you want technology involved in our future daily life?" },
          { id: "future_129", category: "Lifestyle", question: "What does a \"good week\" look like for us five years from now?" },
          { id: "future_130", category: "Lifestyle", question: "What's something you want to simplify about how we live, eventually?" },
          { id: "future_131", category: "Family", question: "What role do you want grandparents, yours or future ones, to play in our life?" },
          { id: "future_132", category: "Family", question: "How should we handle differing family traditions once we blend our lives?" },
          { id: "future_133", category: "Family", question: "What's a family pattern you want to intentionally break with me?" },
          { id: "future_134", category: "Family", question: "What does \"showing up\" for extended family look like for us long-term?" },
          { id: "future_135", category: "Family", question: "How many close family members do you hope stay in our daily orbit?" },
          { id: "future_136", category: "Family", question: "What family value do you most want to pass down, if we ever have kids?" },
          { id: "future_137", category: "Pets", question: "Would you want one pet for a long life, or several over the years?" },
          { id: "future_138", category: "Pets", question: "What's a pet responsibility you'd happily take fully off my plate?" },
          { id: "future_139", category: "Pets", question: "Should our future pet have free rein of the house or clear boundaries?" },
          { id: "future_140", category: "Pets", question: "What's a trait you'd want in a future pet that matches our personalities?" },
          { id: "future_141", category: "Pets", question: "Would you want to foster animals together at some point?" },
          { id: "future_142", category: "Pets", question: "What would our pet's \"job\" be in the family, emotionally speaking?" },
          { id: "future_143", category: "Adventures", question: "What's a physically challenging adventure you want us to attempt together?" },
          { id: "future_144", category: "Adventures", question: "Should we have a yearly \"do something scary together\" tradition?" },
          { id: "future_145", category: "Adventures", question: "What's an adventure you'd want to have solo, that I fully support?" },
          { id: "future_146", category: "Adventures", question: "What's the wildest thing you'd want to try once, just to say we did?" },
          { id: "future_147", category: "Adventures", question: "Would you want to learn a new skill together purely for the adventure of it?" },
          { id: "future_148", category: "Adventures", question: "What's a \"someday\" adventure you've never said out loud until now?" },
          { id: "future_149", category: "Marriage", question: "What does a strong marriage look like to you, day to day, not just on paper?" },
          { id: "future_150", category: "Marriage", question: "What's a promise you'd want written into our vows that's uniquely us?" },
          { id: "future_151", category: "Marriage", question: "How do you want us to keep choosing each other, actively, years in?", rare: true },
          { id: "future_152", category: "Marriage", question: "What tradition from a wedding you attended would you want to steal?" },
          { id: "future_153", category: "Marriage", question: "What's a compromise you'd already make for our future wedding?" },
          { id: "future_154", category: "Marriage", question: "How do you want us to celebrate our marriage on ordinary Tuesdays, not just anniversaries?" },
          { id: "future_155", category: "Traditions", question: "What's a tradition you want to start the very first year we live together?" },
          { id: "future_156", category: "Traditions", question: "Should our traditions be big and planned, or small and spontaneous?" },
          { id: "future_157", category: "Traditions", question: "What's one tradition from your childhood you refuse to give up?" },
          { id: "future_158", category: "Traditions", question: "What new tradition could only exist because the two of us exist?" },
          { id: "future_159", category: "Traditions", question: "What's a tradition you'd want passed down if we ever have kids or family?" },
          { id: "future_160", category: "Traditions", question: "What ritual do you want us to have for hard days, not just celebrations?" },
          { id: "future_161", category: "Holidays", question: "Should we alternate holidays between families or build our own new schedule?" },
          { id: "future_162", category: "Holidays", question: "What holiday do you want to eventually host at our own place?" },
          { id: "future_163", category: "Holidays", question: "What's a holiday tradition you want to invent that has nothing to do with either family?" },
          { id: "future_164", category: "Holidays", question: "How do you want us to handle holidays if we ever live far from family?" },
          { id: "future_165", category: "Holidays", question: "What's a low-key holiday you want to protect from ever becoming stressful?" },
          { id: "future_166", category: "Holidays", question: "What holiday gift tradition do you want us to keep forever?" },
          { id: "future_167", category: "Retirement", question: "What does an ideal retired Tuesday look like for us?" },
          { id: "future_168", category: "Retirement", question: "Would you want to travel constantly in retirement or settle somewhere and stay?" },
          { id: "future_169", category: "Retirement", question: "What hobby do you want us to pick up specifically for retirement?" },
          { id: "future_170", category: "Retirement", question: "What's something you want us to have finished, achieved, or built before we retire?" },
          { id: "future_171", category: "Retirement", question: "How do you want us to support each other if one of us struggles with aging?" },
          { id: "future_172", category: "Retirement", question: "What's a retirement dream you've never told anyone before?" },
          { id: "future_173", category: "Dreams", question: "What's a dream you've quietly given up on that I could help you revive?" },
          { id: "future_174", category: "Dreams", question: "If we had unlimited resources for one year, what would we build together?" },
          { id: "future_175", category: "Dreams", question: "What's a dream you have that has nothing to do with me, but that I should still know about?" },
          { id: "future_176", category: "Dreams", question: "What's the boldest version of our future you allow yourself to imagine?", rare: true },
          { id: "future_177", category: "Dreams", question: "What dream do you want us to chase even if it doesn't fully make sense yet?" },
          { id: "future_178", category: "Dreams", question: "What's something you want to be true about us in twenty years that isn't yet?" },
          { id: "future_179", category: "Bucket List", question: "What's one experience you'd regret never sharing with me?" },
          { id: "future_180", category: "Bucket List", question: "Name a bucket list item that only counts if we do it together." },
          { id: "future_181", category: "Bucket List", question: "What's something small you want on the list that people would find silly?" },
          { id: "future_182", category: "Bucket List", question: "What bucket list item should we actually schedule this year, not just talk about?" },
          { id: "future_183", category: "Bucket List", question: "What's a bucket list goal you'd want us to achieve before any major life change?" },
          { id: "future_184", category: "Bucket List", question: "What's on your list that scares you a little?" },
          { id: "future_185", category: "Where Will We Be", question: "In your gut, do you feel our future is here, abroad, or split between both?" },
          { id: "future_186", category: "Where Will We Be", question: "What's a place you've never lived that keeps quietly calling to you?" },
          { id: "future_187", category: "Where Will We Be", question: "What would make you feel most \"arrived\" — a city, a home, or a feeling?" },
          { id: "future_188", category: "Where Will We Be", question: "If we had to choose a home base for the next decade today, where would you lean?" },
          { id: "future_189", category: "Where Will We Be", question: "What's more important long-term: proximity to family or proximity to opportunity?", rare: true },
          { id: "future_190", category: "Where Will We Be", question: "Where do you picture us celebrating a milestone birthday, twenty years from now?" },
          { id: "future_191", category: "Future Memories", question: "Describe a memory you hope we're making exactly one year from today." },
          { id: "future_192", category: "Future Memories", question: "What's a moment you want to intentionally create, not just wait for?" },
          { id: "future_193", category: "Future Memories", question: "What ordinary future moment do you already know you'll want to remember?" },
          { id: "future_194", category: "Future Memories", question: "Describe the scene when we tell people how we built our life together.", rare: true },
          { id: "future_195", category: "Future Memories", question: "What's a memory you want us to be laughing about at eighty?" },
          { id: "future_196", category: "Future Memories", question: "If our future had a highlight reel, what's one scene you'd insist stays in it?" },
          { id: "future_197", category: "Legacy", question: "What do you want the two of us, together, to be known for?", rare: true },
          { id: "future_198", category: "Legacy", question: "What's something you hope people say about our relationship after knowing us a while?" },
          { id: "future_199", category: "Legacy", question: "What's a mark you want us to leave on the people closest to us?" },
          { id: "future_200", category: "Legacy", question: "If our life together were a story someone told for years, what would the moral be?" },
          { id: "future_201", category: "Travel", question: "What's a trip we should take specifically to celebrate a milestone?" },
          { id: "future_202", category: "Travel", question: "Would you rather explore one continent deeply, or touch every continent briefly?" },
          { id: "future_203", category: "Travel", question: "What's a travel tradition you want us to have every single year?" },
          { id: "future_204", category: "Home", question: "What's one room in our future home that's entirely your vision?" },
          { id: "future_205", category: "Home", question: "Do you want a home that's always ready for guests, or one that's just for us?" },
          { id: "future_206", category: "Home", question: "What's a small ritual you want built into how we start mornings at home?" },
          { id: "future_207", category: "Career", question: "What does success look like for you outside of a job title?" },
          { id: "future_208", category: "Career", question: "How do you want us to handle it if one of our careers takes off faster than the other's?" },
          { id: "future_209", category: "Money", question: "What's a splurge you want us to allow ourselves without guilt?" },
          { id: "future_210", category: "Money", question: "How do you want us to make big financial decisions — together every time, or with some independence?" },
          { id: "future_211", category: "Lifestyle", question: "What's a habit you hope we build together in the next year?" },
          { id: "future_212", category: "Lifestyle", question: "Do you want our weekends to be mostly planned, or mostly open?" },
          { id: "future_213", category: "Family", question: "What role do you hope our future household plays for extended family?" },
          { id: "future_214", category: "Family", question: "What's something from my family's way of doing things you'd want to adopt?" },
          { id: "future_215", category: "Pets", question: "If we got a pet tomorrow, what would we name it and why?" },
          { id: "future_216", category: "Adventures", question: "What's a physical challenge, like a hike or a race, you want us to train for together?" },
          { id: "future_217", category: "Marriage", question: "What's a wedding detail that would mean nothing to guests but everything to you?" },
          { id: "future_218", category: "Traditions", question: "What's a tradition from a friend's family you secretly want to steal for ours?" },
          { id: "future_219", category: "Holidays", question: "What's one holiday you'd want to completely reinvent for just the two of us?" },
          { id: "future_220", category: "Retirement", question: "What's a skill you want to have fully mastered by the time we retire?" },
          { id: "future_221", category: "Dreams", question: "What's a dream you'd chase even if it meant a few years of instability?" },
          { id: "future_222", category: "Bucket List", question: "What's a bucket list item that would surprise people who think they know you?" },
          { id: "future_223", category: "Where Will We Be", question: "If you had to bet, what city do you think we'll actually end up in?" },
          { id: "future_224", category: "Future Memories", question: "What's a moment you're already looking forward to remembering, even before it happens?" },
          { id: "future_225", category: "Legacy", question: "What's something you want people to say about how we treated each other?" },
          { id: "future_226", category: "Health", question: "What habit do you want us to build to take care of each other physically as we age?" },
          { id: "future_227", category: "Health", question: "How do you want us to support each other through a tough health scare, if it ever happens?" },
          { id: "future_228", category: "Health", question: "What does taking care of your mind, not just your body, look like for you long-term?" },
          { id: "future_229", category: "Community", question: "What kind of friend group do you hope we build together over the years?" },
          { id: "future_230", category: "Community", question: "How involved do you want us to be in a neighborhood or local community someday?" },
          { id: "future_231", category: "Community", question: "What's a cause or group you'd want us to volunteer for together?" },
          { id: "future_232", category: "Growth", question: "What's a fear you want to have outgrown together by next year?" },
          { id: "future_233", category: "Growth", question: "What's a version of 'us' five years from now that you're actively working toward?" },
          { id: "future_234", category: "Growth", question: "What skill do you want us to learn together purely to grow closer?" },
          { id: "future_235", category: "Travel", question: "What's a destination that scares you a little but you'd still want to visit with me?" },
          { id: "future_236", category: "Travel", question: "Would you rather move abroad for a year as an experiment, or never leave home for more than a month?" },
          { id: "future_237", category: "Home", question: "What's a piece of furniture or art you want to keep forever, no matter how many times we move?" },
          { id: "future_238", category: "Home", question: "Should our future home be closer to nature, or closer to everything convenient?" },
          { id: "future_239", category: "Career", question: "What's a professional dream of yours I might not fully know about yet?" },
          { id: "future_240", category: "Career", question: "How do you want us to celebrate each other's career wins, big and small?" },
          { id: "future_241", category: "Money", question: "What financial goal do you want us to hit together in the next three years?" },
          { id: "future_242", category: "Money", question: "Would you rather live below our means comfortably, or stretch for a bigger lifestyle?" },
          { id: "future_243", category: "Lifestyle", question: "What's something you want our future life to have less of?" },
          { id: "future_244", category: "Family", question: "What's a fear about family, yours or mine, that you want us to face together?" },
          { id: "future_245", category: "Pets", question: "How do you imagine our future pet fitting into a normal weekday?" },
          { id: "future_246", category: "Adventures", question: "What's an adventure you want to have before any major life change, like kids or a move?" },
          { id: "future_247", category: "Marriage", question: "What's a fear about marriage you want to talk through honestly before it happens?" },
          { id: "future_248", category: "Traditions", question: "What tradition do you want to be known for, specifically, among our friends?" },
          { id: "future_249", category: "Holidays", question: "What's your ideal balance between tradition and doing something completely new each year?" },
          { id: "future_250", category: "Retirement", question: "What conversation about retirement do you want us to start having now, even if it's far off?" },
          { id: "future_251", category: "Dreams", question: "What's a dream that would need both of us fully on board to actually happen?" },
          { id: "future_252", category: "Bucket List", question: "What's an item on the list that only makes sense once we're older?" },
          { id: "future_253", category: "Where Will We Be", question: "What would make you say 'yes, this is exactly where we're supposed to be'?" },
          { id: "future_254", category: "Future Memories", question: "What's a small future memory, not a big milestone, that you're quietly hoping for?" },
          { id: "future_255", category: "Legacy", question: "If we only left behind one lesson for people who knew us, what should it be?" },
          { id: "future_256", category: "Health", question: "What's a healthy habit you want us to hold each other accountable for?" },
          { id: "future_257", category: "Community", question: "How do you want us to stay connected to old friends as life gets busier?" },
          { id: "future_258", category: "Growth", question: "What's something about conflict you want us to get better at handling together?" },
          { id: "future_259", category: "Travel", question: "What's a trip you'd want to take completely unplanned, with nothing booked in advance?" },
          { id: "future_260", category: "Home", question: "What's the first thing you want to do the day we move into our first real home together?", rare: true },
          { id: "future_261", category: "Career", question: "If our careers ever pulled us to different cities, how do you want us to decide what to do?", rare: true },
          { id: "future_262", category: "Money", question: "What's something money-related that stressed you in the past that you want us to handle differently?" },
          { id: "future_263", category: "Lifestyle", question: "What does 'a good life,' in the simplest terms, mean to you?" },
          { id: "future_264", category: "Family", question: "What's a family pattern from your upbringing you actively want to break?", rare: true },
          { id: "future_265", category: "Pets", question: "Would having a pet change how you picture our future travel plans?" },
          { id: "future_266", category: "Adventures", question: "What's an adventure that would only be fun because it's with me specifically?" },
          { id: "future_267", category: "Marriage", question: "What's one thing you'd want a close friend to say in a wedding speech about us?" },
          { id: "future_268", category: "Traditions", question: "What's a tradition we already have that you didn't realize was a tradition until now?" },
          { id: "future_269", category: "Holidays", question: "How do you want us to handle it if our families have very different holiday expectations?" },
          { id: "future_270", category: "Retirement", question: "What's something you want to have let go of completely by the time we retire?" },
          { id: "future_271", category: "Dreams", question: "What's a dream you have for me that you've never actually told me?", rare: true },
          { id: "future_272", category: "Bucket List", question: "What's the most expensive item on your bucket list, and is it worth saving for?" },
          { id: "future_273", category: "Where Will We Be", question: "What's a place neither of us has considered yet that might actually be perfect for us?" },
          { id: "future_274", category: "Future Memories", question: "What everyday object do you think will one day remind us of exactly this era of our life?" },
          { id: "future_275", category: "Legacy", question: "What's a small kindness you hope becomes 'our thing' that others remember us for?" },
          { id: "future_276", category: "Health", question: "What's a stress-relief habit you want us to practice together regularly?" },
          { id: "future_277", category: "Community", question: "What kind of neighbors do you hope we become to the people around us?" },
          { id: "future_278", category: "Growth", question: "What's a version of yourself you're actively trying to grow into, and how can I help?" },
          { id: "future_279", category: "Travel", question: "What's a place we visited once that you'd want to live in for a season, just to try it?" },
          { id: "future_280", category: "Home", question: "How important is it to you that our home reflects both our personalities equally?" },
          { id: "future_281", category: "Career", question: "What's a boundary you want us to protect around work, even during busy seasons?" },
          { id: "future_282", category: "Money", question: "What's a purchase you'd want us to save up for together as a shared goal?" },
          { id: "future_283", category: "Lifestyle", question: "Would you rather a life full of variety, or a life with a few things done perfectly?" },
          { id: "future_284", category: "Family", question: "What's something about building a family, however that looks for us, that excites you most?" },
          { id: "future_285", category: "Pets", question: "If we ever had multiple pets, how do you imagine they'd each fit into our home?" },
          { id: "future_286", category: "Adventures", question: "What's a spontaneous adventure we could actually plan for next month?" },
          { id: "future_287", category: "Marriage", question: "What part of planning a future wedding are you most excited to do together?" },
          { id: "future_288", category: "Traditions", question: "What tradition do you want to make sure survives even a big move or life change?" },
          { id: "future_289", category: "Holidays", question: "What's the most 'us' way you can imagine spending a holiday that has nothing to do with tradition?" },
          { id: "future_290", category: "Retirement", question: "What's a version of 'slowing down' that actually sounds appealing to you, not scary?" },
          { id: "future_291", category: "Dreams", question: "What dream have you never said out loud because it felt too big to admit?", rare: true },
          { id: "future_292", category: "Bucket List", question: "What's a bucket list item you'd only ever want to do with me, no one else?" },
          { id: "future_293", category: "Where Will We Be", question: "How much does being near the ocean, mountains, or a specific landscape matter to you long-term?" },
          { id: "future_294", category: "Future Memories", question: "What's a moment from a future birthday, yours or mine, that you're already imagining?" },
          { id: "future_295", category: "Legacy", question: "What do you hope this specific chapter of our life is remembered for, later on?" },
          { id: "future_296", category: "Health", question: "What's a way you want us to celebrate simply being healthy together, not just fix problems?" },
          { id: "future_297", category: "Community", question: "What's a local tradition or event you'd want us to make a yearly habit?" },
          { id: "future_298", category: "Growth", question: "What's a compliment about your own growth you'd want to hear from me a year from now?" },
          { id: "future_299", category: "Travel", question: "What's a trip that would be more about the journey than the destination for you?" },
          { id: "future_300", category: "Dreams", question: "What's a dream you'd chase differently now than you would have five years ago?" },
        ],
      };

      const FUTURE_PHRASES = {
        Travel: "traveling together often",
        Home: "building a home base you both love",
        Career: "growing your careers side by side",
        Money: "being aligned about money and plans",
        Lifestyle: "shaping a lifestyle that fits you both",
        Family: "family being a big part of your future",
        Pets: "having a pet in your life together",
        Adventures: "chasing adventures together",
        Marriage: "imagining a life fully committed to each other",
        Traditions: "creating your own little traditions",
        Holidays: "spending the holidays together",
        Retirement: "picturing life together, even far down the road",
        Dreams: "chasing big dreams as a team",
        "Bucket List": "checking things off a shared bucket list",
        "Where Will We Be": "picturing exactly where you'll end up",
        "Future Memories": "already imagining memories you haven't made yet",
      };

      const GAMES_LS_SHOWN = "gfGamesShown_v1";
      const GAMES_LS_STATS = "gfGamesStats_v1";
      const GAMES_LS_DAILY = "gfGamesDaily_v1";

      function gamesLoadJSON(key, fallback) {
        try {
          const raw = localStorage.getItem(key);
          return raw ? JSON.parse(raw) : fallback;
        } catch (e) {
          return fallback;
        }
      }
      function gamesSaveJSON(key, val) {
        try {
          localStorage.setItem(key, JSON.stringify(val));
        } catch (e) {}
      }
      function getShownMap() {
        return gamesLoadJSON(GAMES_LS_SHOWN, {});
      }
      function markShown(gameId, cardId) {
        const m = getShownMap();
        m[gameId] = m[gameId] || [];
        if (!m[gameId].includes(cardId)) m[gameId].push(cardId);
        gamesSaveJSON(GAMES_LS_SHOWN, m);
      }
      function resetShown(gameId) {
        const m = getShownMap();
        m[gameId] = [];
        gamesSaveJSON(GAMES_LS_SHOWN, m);
      }
      function getGameStats() {
        return gamesLoadJSON(GAMES_LS_STATS, {});
      }
      function bumpGameStat(gameId, field, amount) {
        amount = amount || 1;
        const s = getGameStats();
        s[gameId] = s[gameId] || {};
        s[gameId][field] = (s[gameId][field] || 0) + amount;
        gamesSaveJSON(GAMES_LS_STATS, s);
        return s[gameId];
      }

      function buildDeck(gameId, categories) {
        let pool = (GAMES_DATA[gameId] || []).filter(
          (c) => !categories || categories.length === 0 || categories.includes(c.category),
        );
        if (!pool.length) pool = GAMES_DATA[gameId] || [];
        const shownMap = getShownMap();
        const shown = shownMap[gameId] || [];
        let unseen = pool.filter((c) => !shown.includes(c.id));
        if (!unseen.length) {
          resetShown(gameId);
          unseen = pool.slice();
        }
        const deck = unseen.slice();
        for (let i = deck.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [deck[i], deck[j]] = [deck[j], deck[i]];
        }
        return deck;
      }

      function todayKeyStr() {
        const d = new Date();
        return (
          d.getFullYear() +
          "-" +
          String(d.getMonth() + 1).padStart(2, "0") +
          "-" +
          String(d.getDate()).padStart(2, "0")
        );
      }
      function getCardOfDay() {
        const key = todayKeyStr();
        const saved = gamesLoadJSON(GAMES_LS_DAILY, null);
        if (saved && saved.date === key && saved.gameId === "wyr") return saved;
        const gameId = "wyr";
        const pool = GAMES_DATA[gameId] || [];
        const card = pool[Math.floor(Math.random() * pool.length)];
        const rec = { date: key, gameId, cardId: card ? card.id : null };
        gamesSaveJSON(GAMES_LS_DAILY, rec);
        return rec;
      }

      function generateFutureSummary(categories) {
        if (!categories.length)
          return tr(
            "You didn't get through enough cards yet to build a picture — draw a few more next time.",
          );
        const counts = {};
        categories.forEach((t) => {
          counts[t] = (counts[t] || 0) + 1;
        });
        const top = Object.keys(counts)
          .sort((a, b) => counts[b] - counts[a])
          .slice(0, 3);
        const phrases = top.map((t) => FUTURE_PHRASES[t] || t.toLowerCase());
        let joined;
        if (phrases.length === 1) joined = phrases[0];
        else if (phrases.length === 2) joined = phrases[0] + " and " + phrases[1];
        else joined = phrases.slice(0, -1).join(", ") + ", and " + phrases[phrases.length - 1];
        return tr("Tonight, you both leaned toward ") + joined + ".";
      }

      // ---------- state ----------
      let gState = {
        gameId: null,
        deck: [],
        idx: 0,
        maxRounds: 0,
        roundsPlayed: 0,
        selectedCategories: null,
        lobbyGameId: null,
        lobbyCategories: null,
        lobbyRounds: 0,
        session: { matches: 0, disasters: 0, predictCorrect: 0, predictTotal: 0, categories: [], cardsSeen: 0 },
      };

      function currentGameCard() {
        return gState.deck[gState.idx];
      }

      function showGamesView(view) {
        const map = {
          hub: "gamesHub",
          lobby: "gamesLobby",
          play: "gamesPlay",
          end: "gamesEnd",
        };
        Object.keys(map).forEach((v) => {
          const el = document.getElementById(map[v]);
          if (el) el.hidden = v !== view;
        });
        if (view === "hub") renderGamesHub();
      }

      function renderDailyCard() {
        const box = document.getElementById("gamesDailyCard");
        if (!box) return;
        const rec = getCardOfDay();
        const pool = GAMES_DATA[rec.gameId] || [];
        const card = pool.find((c) => c.id === rec.cardId);
        if (!card) {
          box.hidden = true;
          return;
        }
        document.getElementById("gamesDailyQ").textContent = tr(card.question);
        document.getElementById("gamesDailySub").textContent =
          GAMES_META[rec.gameId].emoji +
          " " +
          tr(GAMES_META[rec.gameId].title) +
          " · " +
          tr(card.category);
        box.hidden = false;
      }

      function renderGamesHub() {
        const grid = document.getElementById("gamesGrid");
        if (!grid) return;
        grid.innerHTML = Object.keys(GAMES_META)
          .map((id) => {
            const meta = GAMES_META[id];
            const count = (GAMES_DATA[id] || []).length;
            return `<div class="games-tile" data-tile="${id}" data-game="${id}">
              <div class="g-emoji">${meta.emoji}</div>
              <h3>${tr(meta.title)}</h3>
              <div class="g-sub">${tr(meta.subtitle)}</div>
              <p class="g-desc">${tr(meta.desc)}</p>
              <div class="g-count">${count} ${tr("cards")}</div>
            </div>`;
          })
          .join("");
        grid.querySelectorAll(".games-tile").forEach((t) =>
          t.addEventListener("click", () => openLobby(t.dataset.game)),
        );

        const stats = getGameStats();
        const rows = document.getElementById("gamesStatsRows");
        let total = 0;
        rows.innerHTML = Object.keys(GAMES_META)
          .map((id) => {
            const played = (stats[id] && stats[id].played) || 0;
            total += played;
            return `<span>${GAMES_META[id].emoji} ${tr(GAMES_META[id].title)}: ${played}</span>`;
          })
          .join("");
        document.getElementById("gamesStatsTotal").textContent =
          tr("Total cards played") + ": " + total;

        renderDailyCard();
      }

      function openLobby(gameId) {
        gState.lobbyGameId = gameId;
        gState.lobbyCategories = null;
        gState.lobbyRounds = 0;
        const meta = GAMES_META[gameId];
        document.getElementById("lobbyEmoji").textContent = meta.emoji;
        document.getElementById("lobbyTitle").textContent = tr(meta.title);
        document.getElementById("lobbySubtitle").textContent = tr(meta.desc);
        const total = (GAMES_DATA[gameId] || []).length;
        document.getElementById("lobbyCount").textContent =
          total + " " + tr("cards available");
        const cats = Array.from(new Set((GAMES_DATA[gameId] || []).map((c) => c.category)));
        const catBox = document.getElementById("lobbyCategories");
        gState.lobbyCategories = null;
        catBox.innerHTML =
          `<div class="games-multi-select" id="lobbyCatMulti">` +
          `<label class="games-multi-option"><input type="checkbox" data-cat="__all" checked> ${tr("All categories")}</label>` +
          cats
            .map(
              (c) =>
                `<label class="games-multi-option"><input type="checkbox" data-cat="${c}"> ${tr(c)}</label>`,
            )
            .join("") +
          `</div><p class="games-multi-hint">${tr("Select one or more categories")}</p>`;
        const syncCats = () => {
          const boxes = Array.from(catBox.querySelectorAll('input[type="checkbox"]'));
          const allBox = catBox.querySelector('input[data-cat="__all"]');
          const selected = boxes
            .filter((b) => b.checked && b.dataset.cat !== "__all")
            .map((b) => b.dataset.cat);
          if (allBox && allBox.checked) {
            boxes.forEach((b) => {
              if (b.dataset.cat !== "__all") b.checked = false;
            });
            gState.lobbyCategories = null;
          } else if (!selected.length) {
            if (allBox) allBox.checked = true;
            gState.lobbyCategories = null;
          } else {
            if (allBox) allBox.checked = false;
            gState.lobbyCategories = selected;
          }
        };
        catBox.querySelectorAll('input[type="checkbox"]').forEach((input) => {
          input.addEventListener("change", () => {
            if (input.dataset.cat === "__all" && input.checked) {
              catBox.querySelectorAll('input[type="checkbox"]').forEach((b) => {
                if (b.dataset.cat !== "__all") b.checked = false;
              });
            } else if (input.dataset.cat !== "__all" && input.checked) {
              const allBox = catBox.querySelector('input[data-cat="__all"]');
              if (allBox) allBox.checked = false;
            }
            syncCats();
          });
        });
        const roundsBox = document.getElementById("lobbyRounds");
        roundsBox.querySelectorAll(".games-chip").forEach((btn) => {
          btn.classList.toggle("active", btn.dataset.rounds === "0");
          btn.onclick = () => {
            roundsBox.querySelectorAll(".games-chip").forEach((b) => b.classList.remove("active"));
            btn.classList.add("active");
            gState.lobbyRounds = parseInt(btn.dataset.rounds, 10) || 0;
          };
        });
        showGamesView("lobby");
      }

      function startGame(gameId, categories, maxRounds) {
        gState.gameId = gameId;
        gState.selectedCategories = categories;
        gState.maxRounds = maxRounds || 0;
        gState.roundsPlayed = 0;
        gState.session = { matches: 0, disasters: 0, predictCorrect: 0, predictTotal: 0, categories: [], cardsSeen: 0 };
        gState.deck = buildDeck(gameId, categories);
        gState.idx = 0;
        if (!gState.deck.length) {
          showToast(tr("No cards available for that filter."), "updated");
          showGamesView("hub");
          return;
        }
        markShown(gameId, gState.deck[0].id);
        bumpGameStat(gameId, "played", 1);
        showGamesView("play");
        renderCurrentGameCard();
      }

      function goNextGameCard(played) {
        if (played) {
          const card = currentGameCard();
          if (card) gState.session.categories.push(card.category);
          gState.session.cardsSeen++;
          bumpGameStat(gState.gameId, "played", 1);
        }
        gState.roundsPlayed++;
        if (gState.maxRounds > 0 && gState.roundsPlayed >= gState.maxRounds) {
          endGame();
          return;
        }
        gState.idx++;
        if (gState.idx >= gState.deck.length) {
          gState.deck = buildDeck(gState.gameId, gState.selectedCategories);
          gState.idx = 0;
          if (!gState.deck.length) {
            endGame();
            return;
          }
        }
        markShown(gState.gameId, gState.deck[gState.idx].id);
        renderCurrentGameCard();
      }

      function renderCurrentGameCard() {
        const card = currentGameCard();
        if (!card) return;
        const meta = GAMES_META[gState.gameId];
        const cardEl = document.getElementById("gamesCard");
        cardEl.style.setProperty("--card-accent", "var(--" + meta.accent + ")");
        document.getElementById("cardEmoji").textContent = meta.emoji;
        document.getElementById("cardCategory").textContent =
          tr(card.category) + (card.level ? " · Lv " + card.level : "");
        document.getElementById("cardRare").hidden = !card.rare;
        document.getElementById("cardQuestion").textContent = tr(card.question);
        const fu = document.getElementById("cardFollowup");
        if (card.followUp) {
          fu.textContent = tr(card.followUp);
          fu.style.display = "";
        } else {
          fu.textContent = "";
          fu.style.display = "none";
        }

        const label =
          gState.maxRounds > 0
            ? tr("Card") + " " + (gState.roundsPlayed + 1) + " " + tr("of") + " " + gState.maxRounds
            : tr("Card") + " " + (gState.roundsPlayed + 1) + " · " + tr("Endless");
        document.getElementById("gamesProgressLabel").textContent = label;
        const pct = gState.maxRounds > 0 ? Math.min(100, Math.round((gState.roundsPlayed / gState.maxRounds) * 100)) : 100;
        document.getElementById("gamesProgressFill").style.width = pct + "%";

        cardEl.style.animation = "none";
        void cardEl.offsetWidth;
        cardEl.style.animation = "";
      }

      function endGame() {
        const meta = GAMES_META[gState.gameId];
        document.getElementById("endEmoji").textContent = meta.emoji;
        document.getElementById("endTitle").textContent = tr("Nicely played ♥");
        const statsHtml = tr("Cards played") + ": " + gState.session.cardsSeen;
        document.getElementById("endStats").innerHTML = statsHtml;
        const summaryBox = document.getElementById("futureSummary");
        if (meta.mechanic === "summary") {
          summaryBox.hidden = false;
          summaryBox.textContent = generateFutureSummary(gState.session.categories);
        } else {
          summaryBox.hidden = true;
        }
        showGamesView("end");
      }

      function initGames() {
        renderGamesHub();

        document.getElementById("cardSkipBtn")?.addEventListener("click", () => goNextGameCard(false));
        document.getElementById("cardNextBtn")?.addEventListener("click", () => goNextGameCard(true));
        document.getElementById("cardEndBtn")?.addEventListener("click", endGame);
        document.getElementById("gamesExitBtn")?.addEventListener("click", () => showGamesView("hub"));
        document.querySelectorAll("[data-games-back]").forEach((b) =>
          b.addEventListener("click", () => showGamesView("hub")),
        );
        document.getElementById("gamesSurpriseBtn")?.addEventListener("click", () => {
          const ids = Object.keys(GAMES_META);
          const pick = ids[Math.floor(Math.random() * ids.length)];
          showToast(tr("Random game") + ": " + tr(GAMES_META[pick].title), "updated");
          openLobby(pick);
        });
        document.getElementById("lobbyStartBtn")?.addEventListener("click", () => {
          startGame(gState.lobbyGameId, gState.lobbyCategories, gState.lobbyRounds);
        });
        document.getElementById("endPlayAgainBtn")?.addEventListener("click", () => {
          startGame(gState.gameId, gState.selectedCategories, gState.maxRounds);
        });
      }
      initGames();


      // ===================== THOMMY PERSONAL =====================
      const TP_PASS = "122100";
      const TP_LS = "thommyPersonal_v1";
      const TP_UNLOCK = "thommyPersonalUnlocked";

      function tpToday() {
        const d = new Date();
        return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0");
      }
      function tpUid() {
        return "tp_" + Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
      }
      function tpAttr(v) {
        return String(v == null ? "" : v).replace(/&/g, "&amp;").replace(/"/g, "&quot;");
      }
      function tpMd(raw) {
        var s = String(raw == null ? "" : raw);
        s = s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
        s = s.replace(/\*\*([^*\n]+)\*\*/g, "<strong>$1</strong>");
        s = s.replace(/__([^_\n]+)__/g, "<strong>$1</strong>");
        s = s.replace(/\*([^*\n]+)\*/g, "<em>$1</em>");
        s = s.replace(/(^|[^\w])_([^_\n]+)_(?!\w)/g, "$1<em>$2</em>");
        var lines = s.split(/\n/);
        var out = [];
        var inUl = false;
        var inOl = false;
        function closeLists() {
          if (inUl) { out.push("</ul>"); inUl = false; }
          if (inOl) { out.push("</ol>"); inOl = false; }
        }
        for (var i = 0; i < lines.length; i++) {
          var line = lines[i];
          var bm = line.match(/^\s*[-*•]\s+(.+)$/);
          var nm = line.match(/^\s*(\d+)[.)]\s+(.+)$/);
          if (bm) {
            if (inOl) { out.push("</ol>"); inOl = false; }
            if (!inUl) { out.push("<ul>"); inUl = true; }
            out.push("<li>" + bm[1] + "</li>");
          } else if (nm) {
            if (inUl) { out.push("</ul>"); inUl = false; }
            if (!inOl) { out.push("<ol>"); inOl = true; }
            out.push("<li>" + nm[2] + "</li>");
          } else {
            closeLists();
            out.push(line);
            if (i < lines.length - 1) out.push("<br>");
          }
        }
        closeLists();
        return out.join("");
      }
      function tpFmtBar(targetSel) {
        return (
          '<div class="tp-fmt-bar" data-tp-fmt-for="' + tpAttr(targetSel) + '">' +
          '<button type="button" data-tp-fmt="bold" title="Bold (Ctrl+B)"><b>B</b></button>' +
          '<button type="button" data-tp-fmt="italic" title="Italic (Ctrl+I)"><i>I</i></button>' +
          '<button type="button" data-tp-fmt="bullet" title="Bullet list">• List</button>' +
          '<button type="button" data-tp-fmt="number" title="Numbered list">1. List</button>' +
          '<span class="tp-md-hint">Ctrl+B · Ctrl+I · or **bold** *italic* - bullets · 1. numbers</span>' +
          "</div>"
        );
      }
      function tpWrapSelection(ta, before, after) {
        if (!ta) return;
        var start = ta.selectionStart || 0;
        var end = ta.selectionEnd || 0;
        var val = ta.value || "";
        var selected = val.slice(start, end);
        var replacement = before + (selected || "text") + after;
        ta.value = val.slice(0, start) + replacement + val.slice(end);
        var innerStart = start + before.length;
        var innerEnd = innerStart + (selected || "text").length;
        ta.focus();
        try { ta.setSelectionRange(innerStart, innerEnd); } catch (e) {}
      }
      function tpToggleLinePrefix(ta, prefix) {
        if (!ta) return;
        var start = ta.selectionStart || 0;
        var end = ta.selectionEnd || 0;
        var val = ta.value || "";
        var lineStart = val.lastIndexOf("\n", Math.max(0, start - 1)) + 1;
        var lineEnd = val.indexOf("\n", end);
        if (lineEnd < 0) lineEnd = val.length;
        var block = val.slice(lineStart, lineEnd);
        var lines = block.split("\n");
        var allPrefixed = lines.every(function (ln) {
          return !ln.trim() || ln.indexOf(prefix) === 0;
        });
        var next = lines.map(function (ln) {
          if (!ln.trim()) return ln;
          if (allPrefixed) return ln.indexOf(prefix) === 0 ? ln.slice(prefix.length) : ln;
          return ln.indexOf(prefix) === 0 ? ln : prefix + ln;
        }).join("\n");
        ta.value = val.slice(0, lineStart) + next + val.slice(lineEnd);
        ta.focus();
        try { ta.setSelectionRange(lineStart, lineStart + next.length); } catch (e) {}
      }
      function tpApplyFormat(ta, kind) {
        if (!ta) return;
        if (kind === "bold") tpWrapSelection(ta, "**", "**");
        else if (kind === "italic") tpWrapSelection(ta, "*", "*");
        else if (kind === "bullet") tpToggleLinePrefix(ta, "- ");
        else if (kind === "number") tpToggleLinePrefix(ta, "1. ");
      }
      function tpBindFormatControls(root) {
        root = root || document;
        root.querySelectorAll("[data-tp-fmt-for]").forEach(function (bar) {
          if (bar.dataset.tpFmtBound) return;
          bar.dataset.tpFmtBound = "1";
          bar.addEventListener("click", function (e) {
            var btn = e.target.closest("[data-tp-fmt]");
            if (!btn) return;
            e.preventDefault();
            var sel = bar.getAttribute("data-tp-fmt-for");
            var ta = sel ? document.querySelector(sel) : null;
            tpApplyFormat(ta, btn.getAttribute("data-tp-fmt"));
          });
        });
        root.querySelectorAll("textarea.tp-notes").forEach(function (ta) {
          if (ta.dataset.tpFmtKeys) return;
          ta.dataset.tpFmtKeys = "1";
          ta.addEventListener("keydown", function (e) {
            var mod = e.ctrlKey || e.metaKey;
            if (!mod) return;
            var k = (e.key || "").toLowerCase();
            if (k === "b") { e.preventDefault(); tpApplyFormat(ta, "bold"); }
            else if (k === "i") { e.preventDefault(); tpApplyFormat(ta, "italic"); }
          });
        });
      }
      function tpEnsureWorkouts() {
        if (!tpData.workouts || typeof tpData.workouts !== "object") {
          tpData.workouts = { exercises: [], routines: [], session: null, log: {} };
        }
        if (!Array.isArray(tpData.workouts.exercises)) tpData.workouts.exercises = [];
        if (!Array.isArray(tpData.workouts.routines)) tpData.workouts.routines = [];
        if (!tpData.workouts.log || typeof tpData.workouts.log !== "object") tpData.workouts.log = {};
        return tpData.workouts;
      }

      function tpDefaultData() {
        return {
          habits: [
            { id: "h1", name: "Exercise / move body", streak: 0, best: 0, lastDone: "", log: {} },
            { id: "h2", name: "Read 20 minutes", streak: 0, best: 0, lastDone: "", log: {} },
            { id: "h3", name: "Drink enough water", streak: 0, best: 0, lastDone: "", log: {} },
            { id: "h4", name: "No doomscroll after 22:00", streak: 0, best: 0, lastDone: "", log: {} },
          ],
          dailyGoals: {},
          goals: { career: [], romantic: [], personal: [] },
          wishlist: [],
          bucket: [],
          romantic: [],
          workouts: { exercises: [], routines: [], session: null, log: {} },
          study: { course: { name: "", description: "" }, subjects: [] },
          morning: [
            { id: "m1", text: "Make bed" },
            { id: "m2", text: "Hydrate + light stretch" },
            { id: "m3", text: "Review top 3 priorities" },
            { id: "m4", text: "Affirmation (1 min)" },
          ],
          night: [
            { id: "n1", text: "Phone away 30 min before bed" },
            { id: "n2", text: "Plan tomorrow's top 3" },
            { id: "n3", text: "Journal / one gratitude" },
            { id: "n4", text: "Wind-down (no heavy screens)" },
          ],
          routineLog: {},
          pomodoro: { sessions: [], mode: "focus", focusMin: 25, shortMin: 5, longMin: 15 },
          affirmations: {
            custom: [
              "I am becoming the man I decided to be.",
              "Opportunities find me because I show up consistently.",
              "My relationship grows through presence, honesty, and care.",
              "I finish what matters.",
            ],
            lastIndex: 0,
            practiced: {},
            futureSelf: "",
          },
          reflections: {},
          focusByDay: {},
        };
      }

      let tpData = null;
      let tpView = "dash";
      let tpPomodoro = { running: false, endsAt: 0, left: 25 * 60, mode: "focus", timer: null };

      function tpLoad() {
        try {
          const raw = localStorage.getItem(TP_LS);
          if (raw) {
            tpData = Object.assign(tpDefaultData(), JSON.parse(raw));
            const d = tpDefaultData();
            tpData.habits = tpData.habits && tpData.habits.length ? tpData.habits : d.habits;
            tpData.morning = tpData.morning && tpData.morning.length ? tpData.morning : d.morning;
            tpData.night = tpData.night && tpData.night.length ? tpData.night : d.night;
            tpData.goals = Object.assign({ career: [], romantic: [], personal: [] }, tpData.goals || {});
            tpData.affirmations = Object.assign(d.affirmations, tpData.affirmations || {});
            tpData.pomodoro = Object.assign(d.pomodoro, tpData.pomodoro || {});
            var legacyStudy = Array.isArray(tpData.study) ? tpData.study : [];
            if (!tpData.study || Array.isArray(tpData.study)) tpData.study = { course: { name: "", description: "" }, subjects: legacyStudy };
            tpData.study.course = Object.assign({ name: "", description: "" }, tpData.study.course || {});
            tpData.study.subjects = tpData.study.subjects || [];
            tpEnsureWorkouts();
          } else tpData = tpDefaultData();
        } catch (e) { tpData = tpDefaultData(); }
      }
      function tpSave() {
        try { localStorage.setItem(TP_LS, JSON.stringify(tpData)); } catch (e) {}
        tpMaybeFirebaseSync();
      }
      function tpMaybeFirebaseSync() {
        try {
          if (typeof getSharedFirestore === "function") {
            const db = getSharedFirestore();
            if (db) {
              db.collection("thommyPersonal").doc("main").set(
                { data: tpData, updatedAt: firebase.firestore.FieldValue.serverTimestamp() },
                { merge: true },
              ).catch(function () {});
            }
          }
        } catch (e) {}
      }
      async function tpMaybeFirebaseLoad() {
        try {
          if (typeof getDb !== "function") return;
          const db = getSharedFirestore();
          if (!db) return;
          const snap = await db.collection("thommyPersonal").doc("main").get();
          if (snap.exists && snap.data() && snap.data().data) {
            const remote = snap.data().data;
            const rLen = (remote.pomodoro && remote.pomodoro.sessions && remote.pomodoro.sessions.length) || 0;
            const lLen = (tpData.pomodoro && tpData.pomodoro.sessions && tpData.pomodoro.sessions.length) || 0;
            if (rLen >= lLen) {
              tpData = Object.assign(tpDefaultData(), remote);
              try { localStorage.setItem(TP_LS, JSON.stringify(tpData)); } catch (e) {}
            }
          }
        } catch (e) {}
      }
      function tpIsUnlocked() {
        try { return sessionStorage.getItem(TP_UNLOCK) === "1"; } catch (e) { return false; }
      }
      function tpSetUnlocked() {
        try { sessionStorage.setItem(TP_UNLOCK, "1"); } catch (e) {}
      }
      function tpHabitMark(id, done) {
        const h = tpData.habits.find((x) => x.id === id);
        if (!h) return;
        const day = tpToday();
        h.log = h.log || {};
        if (done) {
          h.log[day] = true;
          let streak = 0;
          const d = new Date();
          for (let i = 0; i < 400; i++) {
            const key = d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0");
            if (h.log[key]) streak++;
            else break;
            d.setDate(d.getDate() - 1);
          }
          h.streak = streak;
          h.best = Math.max(h.best || 0, streak);
          h.lastDone = day;
        } else {
          delete h.log[day];
          h.streak = 0;
          h.lastDone = "";
        }
        tpSave();
      }
      function tpDayGoals() {
        // Fresh list every calendar day — goals from yesterday do not carry over
        const day = tpToday();
        if (!tpData.dailyGoals[day]) tpData.dailyGoals[day] = [];
        return tpData.dailyGoals[day];
      }
      function tpRoutineDoneToday(kind) {
        const day = tpToday();
        return (tpData.routineLog[day] && tpData.routineLog[day][kind]) || [];
      }
      function tpRoutineStats(kind) {
        const list = tpData[kind] || [];
        const done = tpRoutineDoneToday(kind);
        let n = 0;
        list.forEach(function (item) {
          if (done.indexOf(item.id) >= 0) n++;
        });
        return { done: n, total: list.length };
      }
      function tpFocusMinutes(rangeDays) {
        const out = [];
        const d = new Date();
        for (let i = rangeDays - 1; i >= 0; i--) {
          const dd = new Date(d);
          dd.setDate(d.getDate() - i);
          const key = dd.getFullYear() + "-" + String(dd.getMonth() + 1).padStart(2, "0") + "-" + String(dd.getDate()).padStart(2, "0");
          out.push({ date: key, min: tpData.focusByDay[key] || 0 });
        }
        return out;
      }
      function tpHabitsDoneToday() {
        const day = tpToday();
        return tpData.habits.filter((h) => h.log && h.log[day]).length;
      }
      function tpModeSeconds(mode) {
        if (mode === "short") return (tpData.pomodoro.shortMin || 5) * 60;
        if (mode === "long") return (tpData.pomodoro.longMin || 15) * 60;
        return (tpData.pomodoro.focusMin || 25) * 60;
      }
      function tpPomTick() {
        if (!tpPomodoro.running) return;
        const left = Math.max(0, Math.round((tpPomodoro.endsAt - Date.now()) / 1000));
        tpPomodoro.left = left;
        const disp = document.getElementById("tpTimerDisp");
        if (disp) {
          const m = Math.floor(left / 60);
          const s = left % 60;
          disp.textContent = String(m).padStart(2, "0") + ":" + String(s).padStart(2, "0");
        }
        if (left <= 0) tpPomComplete();
      }
      function tpPomStart() {
        tpPomodoro.running = true;
        tpPomodoro.endsAt = Date.now() + tpPomodoro.left * 1000;
        if (tpPomodoro.timer) clearInterval(tpPomodoro.timer);
        tpPomodoro.timer = setInterval(tpPomTick, 250);
      }
      function tpPomPause() {
        tpPomodoro.running = false;
        if (tpPomodoro.timer) clearInterval(tpPomodoro.timer);
        tpPomodoro.timer = null;
        tpPomodoro.left = Math.max(0, Math.round((tpPomodoro.endsAt - Date.now()) / 1000));
      }
      function tpPomStop() {
        tpPomodoro.running = false;
        if (tpPomodoro.timer) clearInterval(tpPomodoro.timer);
        tpPomodoro.timer = null;
      }
      function tpPomComplete() {
        tpPomStop();
        const mins = Math.round(tpModeSeconds(tpPomodoro.mode) / 60);
        if (tpPomodoro.mode === "focus") {
          const day = tpToday();
          tpData.focusByDay[day] = (tpData.focusByDay[day] || 0) + mins;
        }
        tpData.pomodoro.sessions = tpData.pomodoro.sessions || [];
        tpData.pomodoro.sessions.push({ mode: tpPomodoro.mode, minutes: mins, at: new Date().toISOString() });
        tpSave();
        tpPomodoro.left = tpModeSeconds(tpPomodoro.mode);
        if (typeof showToast === "function") showToast("Session complete · " + mins + "m", "updated");
        try { if (navigator.vibrate) navigator.vibrate(200); } catch (e) {}
        tpRender();
      }

      function tpRender() {
        const gate = document.getElementById("tpGate");
        const app = document.getElementById("tpApp");
        if (!gate || !app) return;
        if (!tpIsUnlocked()) {
          gate.hidden = false;
          app.hidden = true;
          return;
        }
        gate.hidden = true;
        app.hidden = false;
        document.querySelectorAll("#tpNav button").forEach((b) => {
          b.classList.toggle("active", b.dataset.tp === tpView);
        });
        const main = document.getElementById("tpMain");
        if (!main) return;
        if (tpView === "dash") main.innerHTML = tpViewDash();
        else if (tpView === "habits") main.innerHTML = tpViewHabits();
        else if (tpView === "analytics") main.innerHTML = tpViewAnalytics();
        else if (tpView === "pomodoro") main.innerHTML = tpViewPomodoro();
        else if (tpView === "morning") main.innerHTML = tpViewRoutine("morning");
        else if (tpView === "night") main.innerHTML = tpViewRoutine("night");
        else if (tpView === "affirm") main.innerHTML = tpViewAffirm();
        else if (tpView === "goals") main.innerHTML = tpViewGoals();
        else if (tpView === "wishlist") main.innerHTML = tpViewWishlist();
        else if (tpView === "bucket") main.innerHTML = tpViewBucket();
        else if (tpView === "romantic") main.innerHTML = tpViewRomantic();
        else if (tpView === "workout") main.innerHTML = tpViewWorkout();
        else if (tpView === "study") main.innerHTML = tpViewStudy();
        tpBindView();
      }

      function tpViewDash() {
        const goals = tpDayGoals();
        const doneG = goals.filter((g) => g.done).length;
        const habitsDone = tpHabitsDoneToday();
        const focusToday = tpData.focusByDay[tpToday()] || 0;
        const morn = tpRoutineStats("morning");
        const night = tpRoutineStats("night");
        const openGoals = ["career", "romantic", "personal"].reduce(
          (n, k) => n + (tpData.goals[k] || []).filter((g) => !g.done).length,
          0,
        );
        const topGoals = ["career", "romantic", "personal"]
          .flatMap((k) =>
            (tpData.goals[k] || [])
              .filter((g) => !g.done)
              .slice(0, 2)
              .map((g) => Object.assign({}, g, { cat: k })),
          )
          .slice(0, 4);
        const morningList = tpData.morning || [];
        const nightList = tpData.night || [];
        const mornDone = tpRoutineDoneToday("morning");
        const nightDone = tpRoutineDoneToday("night");
        return (
          '<div class="tp-grid-3">' +
          '<div class="tp-stat"><div class="n">' +
          habitsDone +
          "/" +
          tpData.habits.length +
          '</div><div class="l">Habits today</div></div>' +
          '<div class="tp-stat"><div class="n">' +
          doneG +
          "/" +
          (goals.length || 0) +
          '</div><div class="l">Daily goals</div></div>' +
          '<div class="tp-stat"><div class="n">' +
          focusToday +
          'm</div><div class="l">Focus today</div></div></div>' +
          '<div class="tp-grid-3" style="margin-top:12px">' +
          '<div class="tp-stat"><div class="n">' +
          morn.done +
          "/" +
          morn.total +
          '</div><div class="l">Morning routine</div></div>' +
          '<div class="tp-stat"><div class="n">' +
          night.done +
          "/" +
          night.total +
          '</div><div class="l">Night routine</div></div>' +
          '<div class="tp-stat"><div class="n">' +
          openGoals +
          '</div><div class="l">Open goals</div></div></div>' +
          '<div class="tp-card" style="margin-top:14px"><h3>Today\'s priorities</h3><p class="tp-sub">Daily goals for ' +
          tpToday() +
          " only · cleared after midnight</p><div>" +
          (goals.length
            ? goals
                .map(function (g) {
                  return (
                    '<label class="tp-check ' +
                    (g.done ? "done" : "") +
                    '"><input type="checkbox" data-tp-goal="' +
                    g.id +
                    '" ' +
                    (g.done ? "checked" : "") +
                    "><span>" +
                    g.text +
                    "</span></label>"
                  );
                })
                .join("")
            : '<p class="tp-empty">No goals for today — add some under Habits.</p>') +
          "</div></div>" +
          '<div class="tp-card"><h3>Habits snapshot</h3><p class="tp-sub">Items stay · checks reset every day · streaks keep going</p>' +
          tpData.habits
            .map(function (h) {
              var on = h.log && h.log[tpToday()];
              return (
                '<label class="tp-check ' +
                (on ? "done" : "") +
                '"><input type="checkbox" data-tp-habit="' +
                h.id +
                '" ' +
                (on ? "checked" : "") +
                "><div><span>" +
                h.name +
                '</span><div class="meta">🔥 ' +
                (h.streak || 0) +
                " day streak · best " +
                (h.best || 0) +
                "</div></div></label>"
              );
            })
            .join("") +
          "</div>" +
          '<div class="tp-card"><h3>Morning routine</h3><p class="tp-sub">Items stay · checks reset every day · ' +
          tpToday() +
          "</p>" +
          (morningList.length
            ? morningList
                .map(function (item) {
                  var on = mornDone.indexOf(item.id) >= 0;
                  return (
                    '<label class="tp-check ' +
                    (on ? "done" : "") +
                    '"><input type="checkbox" data-tp-routine="morning" data-id="' +
                    item.id +
                    '" ' +
                    (on ? "checked" : "") +
                    "><span>" +
                    item.text +
                    "</span></label>"
                  );
                })
                .join("")
            : '<p class="tp-empty">No morning steps yet — add them under Morning.</p>') +
          "</div>" +
          '<div class="tp-card"><h3>Night routine</h3><p class="tp-sub">Items stay · checks reset every day · ' +
          tpToday() +
          "</p>" +
          (nightList.length
            ? nightList
                .map(function (item) {
                  var on = nightDone.indexOf(item.id) >= 0;
                  return (
                    '<label class="tp-check ' +
                    (on ? "done" : "") +
                    '"><input type="checkbox" data-tp-routine="night" data-id="' +
                    item.id +
                    '" ' +
                    (on ? "checked" : "") +
                    "><span>" +
                    item.text +
                    "</span></label>"
                  );
                })
                .join("")
            : '<p class="tp-empty">No night steps yet — add them under Night.</p>') +
          "</div>" +
          '<div class="tp-card"><h3>Active goals (' +
          openGoals +
          " open)</h3>" +
          (topGoals.length
            ? topGoals
                .map(function (g) {
                  return (
                    '<div class="tp-item"><div class="tp-item-head"><strong>' +
                    g.title +
                    '</strong><span class="tp-tag">' +
                    g.cat +
                    '</span></div><div class="tp-progress"><i style="width:' +
                    Math.min(100, g.progress || 0) +
                    '%"></i></div><div class="meta" style="font-size:0.72rem;color:var(--ink-soft)">' +
                    (g.progress || 0) +
                    "%" +
                    (g.deadline ? " · due " + g.deadline : "") +
                    "</div></div>"
                  );
                })
                .join("")
            : '<p class="tp-empty">Add goals under Goals.</p>') +
          "</div>"
        );
      }

      function tpViewHabits() {
        var goals = tpDayGoals();
        return '<div class="tp-card"><h3>Daily goals</h3><p class="tp-sub">Only for today · list clears after midnight · '+tpToday()+'</p><div>' +
          (goals.map(function(g){ return '<label class="tp-check '+(g.done?'done':'')+'"><input type="checkbox" data-tp-goal="'+g.id+'" '+(g.done?'checked':'')+'><span style="flex:1">'+g.text+'</span><button type="button" class="tp-btn danger sm" data-tp-del-goal="'+g.id+'">✕</button></label>'; }).join('') || '<p class="tp-empty">No goals for today.</p>') +
          '</div><div class="tp-row"><input id="tpNewGoal" placeholder="Add a goal for today…"><button type="button" class="tp-btn" id="tpAddGoal">Add</button></div></div>' +
          '<div class="tp-card"><h3>Habits</h3><p class="tp-sub">Items stay · checks reset every day · streaks keep going</p>' +
          tpData.habits.map(function(h){ var on=h.log&&h.log[tpToday()]; return '<label class="tp-check '+(on?'done':'')+'"><input type="checkbox" data-tp-habit="'+h.id+'" '+(on?'checked':'')+'><div style="flex:1"><span>'+h.name+'</span><div class="meta">🔥 '+(h.streak||0)+' · best '+(h.best||0)+'</div></div><button type="button" class="tp-btn danger sm" data-tp-del-habit="'+h.id+'">✕</button></label>'; }).join('') +
          '<div class="tp-row"><input id="tpNewHabit" placeholder="New habit…"><button type="button" class="tp-btn" id="tpAddHabit">Add habit</button></div></div>';
      }

      function tpViewAnalytics() {
        var week = tpFocusMinutes(7);
        var month = tpFocusMinutes(30);
        var maxW = Math.max(1, ...week.map(function(x){ return x.min; }));
        var maxM = Math.max(1, ...month.map(function(x){ return x.min; }));
        var weekFocus = week.reduce(function(a,b){ return a+b.min; }, 0);
        var habitsWeek = tpData.habits.reduce(function(acc,h){ var n=0; week.forEach(function(d){ if(h.log&&h.log[d.date]) n++; }); return acc+n; }, 0);
        var goalsDoneWeek = week.reduce(function(acc,d){ var list=tpData.dailyGoals[d.date]||[]; return acc+list.filter(function(g){ return g.done; }).length; }, 0);
        var sessions = (tpData.pomodoro.sessions||[]).slice(-20).reverse();
        return '<div class="tp-grid-3"><div class="tp-stat"><div class="n">'+weekFocus+'m</div><div class="l">Focus this week</div></div><div class="tp-stat"><div class="n">'+habitsWeek+'</div><div class="l">Habit checks (7d)</div></div><div class="tp-stat"><div class="n">'+goalsDoneWeek+'</div><div class="l">Goals done (7d)</div></div></div>' +
          '<div class="tp-card" style="margin-top:14px"><h3>Focus — last 7 days</h3><div class="tp-bars">'+week.map(function(d){ return '<span title="'+d.date+': '+d.min+'m" style="height:'+Math.round((d.min/maxW)*100)+'%"></span>'; }).join('')+'</div></div>' +
          '<div class="tp-card"><h3>Focus — last 30 days</h3><div class="tp-bars">'+month.map(function(d){ return '<span title="'+d.date+': '+d.min+'m" style="height:'+Math.round((d.min/maxM)*100)+'%"></span>'; }).join('')+'</div></div>' +
          '<div class="tp-card"><h3>Recent Pomodoro sessions</h3>'+(sessions.length?sessions.map(function(s){ return '<div class="tp-item"><strong>'+s.mode+'</strong> · '+s.minutes+'m <span style="float:right;font-size:0.72rem;color:var(--ink-soft)">'+(s.at||'').slice(0,16)+'</span></div>'; }).join(''):'<p class="tp-empty">No sessions yet — start one in Focus.</p>')+'</div>';
      }

      function tpViewPomodoro() {
        var m = Math.floor(tpPomodoro.left / 60);
        var s = tpPomodoro.left % 60;
        var disp = String(m).padStart(2,"0")+":"+String(s).padStart(2,"0");
        return '<div class="tp-card tp-pomodoro"><h3>Focus center</h3><p class="tp-sub">Pomodoro · sessions feed your analytics</p><div class="tp-modes">' +
          '<button type="button" class="tp-btn outline '+(tpPomodoro.mode==="focus"?"active":"")+'" data-tp-mode="focus">Focus '+(tpData.pomodoro.focusMin||25)+'m</button>' +
          '<button type="button" class="tp-btn outline '+(tpPomodoro.mode==="short"?"active":"")+'" data-tp-mode="short">Short '+(tpData.pomodoro.shortMin||5)+'m</button>' +
          '<button type="button" class="tp-btn outline '+(tpPomodoro.mode==="long"?"active":"")+'" data-tp-mode="long">Long '+(tpData.pomodoro.longMin||15)+'m</button></div>' +
          '<div class="tp-timer" id="tpTimerDisp">'+disp+'</div><div class="tp-row" style="justify-content:center">' +
          '<button type="button" class="tp-btn" id="tpPomStart">'+(tpPomodoro.running?"Pause":"Start")+'</button>' +
          '<button type="button" class="tp-btn outline" id="tpPomReset">Reset</button></div></div>' +
          '<div class="tp-card"><h3>Total focus logged</h3><div class="tp-stat"><div class="n">'+Object.values(tpData.focusByDay).reduce(function(a,b){return a+(b||0);},0)+'m</div><div class="l">All time</div></div></div>';
      }

      function tpViewRoutine(kind) {
        var list = tpData[kind] || [];
        var day = tpToday();
        var log = (tpData.routineLog[day] && tpData.routineLog[day][kind]) || [];
        var title = kind === "morning" ? "Morning routine" : "Night routine";
        var sub = kind === "morning" ? "Start the day with intention · checks reset daily" : "Close the day & prepare tomorrow · checks reset daily";
        var html = '<div class="tp-card"><h3>'+title+'</h3><p class="tp-sub">'+sub+' · '+day+'</p>' +
          (list.map(function(item){ var on=log.indexOf(item.id)>=0; return '<label class="tp-check '+(on?'done':'')+'"><input type="checkbox" data-tp-routine="'+kind+'" data-id="'+item.id+'" '+(on?'checked':'')+'><span style="flex:1">'+item.text+'</span><button type="button" class="tp-btn danger sm" data-tp-del-routine="'+kind+'" data-id="'+item.id+'">✕</button></label>'; }).join('') || '<p class="tp-empty">Empty routine.</p>') +
          '<div class="tp-row"><input id="tpNewRoutine" placeholder="Add step…"><button type="button" class="tp-btn" id="tpAddRoutine" data-kind="'+kind+'">Add</button></div></div>';
        if (kind === "night") {
          html += '<div class="tp-card"><h3>Daily reflection</h3><p class="tp-sub">What went well? What will you improve?</p>' +
            tpFmtBar("#tpReflection") +
            '<textarea id="tpReflection" class="tp-notes" placeholder="Write a few lines… **bold** *italic* - bullets">'+(tpData.reflections[day]||'')+'</textarea>' +
            (tpData.reflections[day] ? '<div class="meta tp-md" style="margin-top:10px;font-size:0.9rem;color:var(--ink-soft)">'+tpMd(tpData.reflections[day])+'</div>' : '') +
            '<div class="tp-row"><button type="button" class="tp-btn" id="tpSaveReflection">Save reflection</button></div></div>';
        }
        return html;
      }

      function tpViewAffirm() {
        var list = tpData.affirmations.custom || [];
        var idx = (tpData.affirmations.lastIndex || 0) % (list.length || 1);
        var text = list[idx] || "I grow a little every day.";
        var practiced = !!(tpData.affirmations.practiced && tpData.affirmations.practiced[tpToday()]);
        return '<div class="tp-card"><h3>Today\'s affirmation</h3><p class="tp-sub">'+(practiced?"Practiced today ✓":"Read it slowly. Feel it as true.")+'</p>' +
          '<div class="tp-affirm" id="tpAffirmText">'+text+'</div><div class="tp-row" style="justify-content:center">' +
          '<button type="button" class="tp-btn outline" id="tpAffirmNext">Another</button>' +
          '<button type="button" class="tp-btn" id="tpAffirmPractice">'+(practiced?"Practiced":"Mark practiced")+'</button>' +
          '<button type="button" class="tp-btn outline" id="tpAffirmApi">Fetch online</button></div></div>' +
          '<div class="tp-card"><h3>Future self</h3><p class="tp-sub">Who are you becoming?</p>' +
          tpFmtBar("#tpFutureSelf") +
          '<textarea id="tpFutureSelf" class="tp-notes" placeholder="Describe your future self… **bold** *italic* - bullets">'+(tpData.affirmations.futureSelf||'')+'</textarea>' +
          (tpData.affirmations.futureSelf ? '<div class="meta tp-md" style="margin-top:10px;font-size:0.92rem;color:var(--ink)">' + tpMd(tpData.affirmations.futureSelf) + '</div>' : '') +
          '<div class="tp-row"><button type="button" class="tp-btn" id="tpSaveFutureSelf">Save</button></div></div>' +
          '<div class="tp-card"><h3>Your affirmations</h3>' +
          list.map(function(t,i){ return '<div class="tp-item"><div class="tp-item-head"><span>'+t+'</span><button type="button" class="tp-btn danger sm" data-tp-del-affirm="'+i+'">✕</button></div></div>'; }).join('') +
          '<div class="tp-row"><input id="tpNewAffirm" placeholder="Add affirmation…"><button type="button" class="tp-btn" id="tpAddAffirm">Add</button></div></div>';
      }

      function tpViewGoals() {
        return ["career","romantic","personal"].map(function(cat){
          var items = tpData.goals[cat] || [];
          return '<div class="tp-card"><h3>'+cat.charAt(0).toUpperCase()+cat.slice(1)+' goals</h3>' +
            (items.map(function(g){ return '<div class="tp-item"><div class="tp-item-head"><strong>'+g.title+'</strong><span>'+(g.done?'<span class="tp-tag done">done</span> ':'')+'<button type="button" class="tp-btn sm outline" data-tp-goal-prog="'+g.id+'" data-cat="'+cat+'">+10%</button> <button type="button" class="tp-btn danger sm" data-tp-del-gcat="'+cat+'" data-id="'+g.id+'">✕</button></span></div><div class="tp-progress"><i style="width:'+Math.min(100,g.progress||0)+'%"></i></div><div class="meta" style="font-size:0.72rem;color:var(--ink-soft)">'+(g.progress||0)+'%'+(g.deadline?' · '+g.deadline:'')+(g.milestone?' · '+g.milestone:'')+'</div></div>'; }).join('') || '<p class="tp-empty">No goals yet.</p>') +
            '<div class="tp-row"><input data-new-goal-title="'+cat+'" placeholder="Goal title…"><input data-new-goal-deadline="'+cat+'" type="date" style="flex:0.6"><input data-new-goal-ms="'+cat+'" placeholder="Next milestone…"><button type="button" class="tp-btn" data-tp-add-gcat="'+cat+'">Add</button></div></div>';
        }).join('');
      }

      function tpViewWishlist() {
        var pri = { high: "hi", medium: "mid", low: "lo" };
        return '<div class="tp-card"><h3>Wishlist</h3><p class="tp-sub">Things to buy or achieve</p>' +
          ((tpData.wishlist||[]).map(function(w){ return '<div class="tp-item"><div class="tp-item-head"><strong>'+w.title+'</strong><span><span class="tp-tag '+(pri[w.priority]||'mid')+'">'+(w.priority||'medium')+'</span> <span class="tp-tag '+(w.status==='got'?'done':'')+'">'+(w.status||'want')+'</span> <button type="button" class="tp-btn sm outline" data-tp-wish-status="'+w.id+'">Toggle</button> <button type="button" class="tp-btn danger sm" data-tp-del-wish="'+w.id+'">✕</button></span></div>'+(w.notes?'<div class="meta tp-md" style="font-size:0.78rem;color:var(--ink-soft)">'+tpMd(w.notes)+'</div>':'')+(w.link?'<div class="meta" style="font-size:0.78rem"><a href="'+tpAttr(w.link)+'" target="_blank" rel="noopener" style="color:var(--sage)">'+w.link+'</a></div>':'')+'</div>'; }).join('') || '<p class="tp-empty">Wishlist is empty.</p>') +
          '<div class="tp-row"><input id="tpWishTitle" placeholder="Item…"><select id="tpWishPri"><option value="high">High</option><option value="medium" selected>Medium</option><option value="low">Low</option></select><input id="tpWishLink" placeholder="Link (optional)"></div>' +
          tpFmtBar("#tpWishNotes") +
          '<textarea id="tpWishNotes" class="tp-notes" placeholder="Notes (optional)… **bold** *italic* - bullets"></textarea>' +
          '<div class="tp-row"><button type="button" class="tp-btn" id="tpAddWish">Add</button></div></div>';
      }

      function tpViewBucket() {
        return '<div class="tp-card"><h3>Life bucket list</h3><p class="tp-sub">Experiences you want — separate from the shared couple list</p>' +
          ((tpData.bucket||[]).map(function(b){ return '<label class="tp-check '+(b.done?'done':'')+'"><input type="checkbox" data-tp-bucket="'+b.id+'" '+(b.done?'checked':'')+'><div style="flex:1"><span>'+b.title+'</span>'+(b.done&&b.dateDone?'<div class="meta">Done '+b.dateDone+'</div>':'')+'</div><button type="button" class="tp-btn danger sm" data-tp-del-bucket="'+b.id+'">✕</button></label>'; }).join('') || '<p class="tp-empty">Add experiences you want in this lifetime.</p>') +
          '<div class="tp-row"><input id="tpBucketTitle" placeholder="Experience…"><button type="button" class="tp-btn" id="tpAddBucket">Add</button></div></div>';
      }

      function tpViewRomantic() {
        return '<div class="tp-card"><h3>Romantic life</h3><p class="tp-sub">Date ideas, surprises, plans, memories to create</p>' +
          ((tpData.romantic||[]).map(function(r){ return '<div class="tp-item"><div class="tp-item-head"><strong>'+r.title+'</strong><span><span class="tp-tag">'+(r.type||'idea')+'</span> <span class="tp-tag '+(r.status==='done'?'done':'')+'">'+(r.status||'idea')+'</span> <button type="button" class="tp-btn sm outline" data-tp-rom-status="'+r.id+'">Cycle</button> <button type="button" class="tp-btn danger sm" data-tp-del-rom="'+r.id+'">✕</button></span></div>'+(r.notes?'<div class="meta tp-md" style="font-size:0.78rem;color:var(--ink-soft)">'+tpMd(r.notes)+'</div>':'')+'</div>'; }).join('') || '<p class="tp-empty">Start collecting romantic ideas.</p>') +
          '<div class="tp-row"><input id="tpRomTitle" placeholder="Title…"><select id="tpRomType"><option value="date">Date</option><option value="surprise">Surprise</option><option value="plan">Plan</option><option value="memory">Memory</option><option value="goal">Goal</option></select></div>' +
          tpFmtBar("#tpRomNotes") +
          '<textarea id="tpRomNotes" class="tp-notes" placeholder="Notes… **bold** *italic* - bullets"></textarea>' +
          '<div class="tp-row"><button type="button" class="tp-btn" id="tpAddRom">Add</button></div></div>';
      }

function tpViewWorkout() {
        var w = tpEnsureWorkouts();
        var day = tpToday();
        var dayLog = w.log[day] || {};
        var session = w.session;
        var html = "";

        // Active session
        if (session && session.routineId) {
          var routine = (w.routines || []).find(function (r) { return r.id === session.routineId; });
          var rname = routine ? routine.name : "Workout";
          html += '<div class="tp-card"><h3>Session · ' + rname + '</h3>';
          html += '<p class="tp-sub">Check exercises as you finish · adjust reps · ' + day + "</p>";
          var doneCount = 0;
          var total = (session.exerciseIds || []).length;
          (session.exerciseIds || []).forEach(function (eid) {
            var ex = (w.exercises || []).find(function (e) { return e.id === eid; });
            if (!ex) return;
            var done = !!(session.done && session.done[eid]);
            if (done) doneCount++;
            var reps = (session.reps && session.reps[eid] != null) ? session.reps[eid] : (ex.targetReps || 10);
            html += '<div class="tp-item">';
            html += '<div class="tp-item-head">';
            html += '<label class="tp-check ' + (done ? "done" : "") + '" style="flex:1;margin:0">';
            html += '<input type="checkbox" data-tp-session-ex="' + eid + '" ' + (done ? "checked" : "") + ">";
            html += "<span><strong>" + ex.name + "</strong>";
            html += '<div class="meta">' + (ex.targetSets || 3) + " sets · target " + (ex.targetReps || 10) + " " + (ex.unit || "reps") + "</div>";
            html += "</span></label>";
            html += '<span class="tp-reps">';
            html += '<button type="button" data-tp-session-reps="' + eid + '" data-dir="-1">−</button>';
            html += "<span>" + reps + "</span>";
            html += '<button type="button" data-tp-session-reps="' + eid + '" data-dir="1">+</button>';
            html += "</span></div>";
            if (ex.description) html += '<div class="meta tp-md" style="font-size:0.78rem;color:var(--ink-soft);margin-top:6px">' + tpMd(ex.description) + "</div>";
            html += "</div>";
          });
          html += '<p class="tp-sub">' + doneCount + " / " + total + " done</p>";
          html += '<div class="tp-row"><button type="button" class="tp-btn" id="tpFinishSession">Finish workout</button>';
          html += '<button type="button" class="tp-btn outline" id="tpCancelSession">Cancel</button></div></div>';
        }

        // Routines
        html += '<div class="tp-card"><h3>Workout routines</h3><p class="tp-sub">Group exercises into a routine and run it</p>';
        if (!(w.routines || []).length) {
          html += '<p class="tp-empty">No routines yet — create one below.</p>';
        } else {
          (w.routines || []).forEach(function (r) {
            var doneToday = !!(dayLog.routines && dayLog.routines[r.id]);
            var names = (r.exerciseIds || []).map(function (eid) {
              var ex = (w.exercises || []).find(function (e) { return e.id === eid; });
              return ex ? ex.name : null;
            }).filter(Boolean);
            html += '<div class="tp-item">';
            html += '<div class="tp-item-head"><strong>' + r.name + "</strong><span>";
            if (doneToday) html += '<span class="tp-tag done">done today</span> ';
            html += '<button type="button" class="tp-btn sm" data-tp-start-routine="' + r.id + '">Start</button> ';
            html += '<button type="button" class="tp-btn danger sm" data-tp-del-routine="' + r.id + '">✕</button>';
            html += "</span></div>";
            if (r.description) html += '<div class="meta tp-md" style="font-size:0.78rem;color:var(--ink-soft)">' + tpMd(r.description) + "</div>";
            html += '<div class="meta" style="font-size:0.72rem;color:var(--ink-soft)">' + (names.length ? names.join(" · ") : "No exercises linked") + "</div>";
            html += "</div>";
          });
        }
        // New routine form
        html += '<div style="margin-top:12px;padding-top:12px;border-top:1px solid rgba(43,38,34,0.08)">';
        html += '<p class="tp-sub">New routine</p>';
        html += '<div class="tp-row"><input id="tpRoutineName" placeholder="Routine name (e.g. Push day)…"></div>';
        html += tpFmtBar("#tpRoutineDesc");
        html += '<textarea id="tpRoutineDesc" class="tp-notes" placeholder="Description (optional)…"></textarea>';
        var exOpts = (w.exercises || []).map(function (e) {
          return '<label style="display:flex;align-items:center;gap:8px;margin:4px 0;font-size:0.86rem"><input type="checkbox" data-tp-routine-ex="' + e.id + '"> ' + e.name + "</label>";
        }).join("");
        html += exOpts ? ('<div style="margin:8px 0">' + exOpts + "</div>") : '<p class="tp-empty">Add exercises first, then attach them here.</p>';
        html += '<div class="tp-row"><button type="button" class="tp-btn" id="tpAddRoutineWo">Add routine</button></div>';
        html += "</div></div>";

        // Exercises library
        html += '<div class="tp-card"><h3>Exercises</h3><p class="tp-sub">CRUD library · bump target reps with + / −</p>';
        if (!(w.exercises || []).length) {
          html += '<p class="tp-empty">No exercises yet.</p>';
        } else {
          (w.exercises || []).forEach(function (ex) {
            html += '<div class="tp-item">';
            html += '<div class="tp-item-head"><strong>' + ex.name + "</strong><span>";
            html += '<span class="tp-reps" title="Target reps">';
            html += '<button type="button" data-tp-ex-reps="' + ex.id + '" data-dir="-1">−</button>';
            html += "<span>" + (ex.targetReps || 10) + "</span>";
            html += '<button type="button" data-tp-ex-reps="' + ex.id + '" data-dir="1">+</button>';
            html += "</span> ";
            html += '<button type="button" class="tp-btn danger sm" data-tp-del-ex="' + ex.id + '">✕</button>';
            html += "</span></div>";
            html += '<div class="meta" style="font-size:0.72rem;color:var(--ink-soft)">' + (ex.targetSets || 3) + " sets · " + (ex.targetReps || 10) + " " + (ex.unit || "reps");
            if (ex.muscle) html += " · " + ex.muscle;
            html += "</div>";
            if (ex.description) html += '<div class="meta tp-md" style="font-size:0.78rem;color:var(--ink-soft);margin-top:4px">' + tpMd(ex.description) + "</div>";
            // inline edit
            html += '<div class="tp-row" style="margin-top:8px"><input data-edit-ex-name="' + ex.id + '" placeholder="Name" value="' + tpAttr(ex.name) + '">';
            html += '<input data-edit-ex-sets="' + ex.id + '" type="number" min="1" style="max-width:70px" value="' + (ex.targetSets || 3) + '" title="Sets">';
            html += '<input data-edit-ex-muscle="' + ex.id + '" placeholder="Muscle group" value="' + tpAttr(ex.muscle || "") + '">';
            html += '<button type="button" class="tp-btn outline sm" data-tp-save-ex="' + ex.id + '">Save</button></div>';
            html += tpFmtBar('[data-edit-ex-desc="' + ex.id + '"]');
            html += '<textarea data-edit-ex-desc="' + ex.id + '" class="tp-notes" placeholder="Description…">' + (ex.description || "") + "</textarea>";
            html += "</div>";
          });
        }
        html += '<div style="margin-top:12px;padding-top:12px;border-top:1px solid rgba(43,38,34,0.08)">';
        html += '<p class="tp-sub">New exercise</p>';
        html += '<div class="tp-row"><input id="tpExName" placeholder="Exercise name…">';
        html += '<input id="tpExSets" type="number" min="1" value="3" style="max-width:70px" title="Sets">';
        html += '<input id="tpExReps" type="number" min="1" value="10" style="max-width:70px" title="Reps">';
        html += '<input id="tpExMuscle" placeholder="Muscle (optional)"></div>';
        html += tpFmtBar("#tpExDesc");
        html += '<textarea id="tpExDesc" class="tp-notes" placeholder="Form cues, notes… **bold** *italic* - bullets"></textarea>';
        html += '<div class="tp-row"><button type="button" class="tp-btn" id="tpAddEx">Add exercise</button></div>';
        html += "</div></div>";

        return html;
      }

      function tpViewStudy() {
        var study = tpData.study || { course: { name: "", description: "" }, subjects: [] };
        var course = study.course || { name: "", description: "" };
        var subs = study.subjects || [];
        var html = '<div class="tp-card"><h3>Course</h3><p class="tp-sub">What you\'re studying overall</p>' +
          (course.name ? '<div class="tp-item"><strong>'+course.name+'</strong>'+(course.description?'<div class="meta tp-md" style="font-size:0.78rem;color:var(--ink-soft)">'+tpMd(course.description)+'</div>':'')+'</div>' : '<p class="tp-empty">No course set yet.</p>') +
          '<div class="tp-row"><input id="tpCourseName" placeholder="Course name…" value="'+tpAttr(course.name)+'"></div>' +
          tpFmtBar("#tpCourseDesc") +
          '<textarea id="tpCourseDesc" class="tp-notes" placeholder="Course description… **bold** *italic* - bullets">'+tpAttr(course.description)+'</textarea>' +
          '<div class="tp-row"><button type="button" class="tp-btn" id="tpSaveCourse">Save</button></div></div>';
        html += (subs.length ? subs.map(function(s){
          var portions = s.portions || [];
          var done = portions.filter(function(p){ return p.done; }).length;
          return '<div class="tp-card"><div class="tp-item-head"><h3>'+s.name+'</h3><button type="button" class="tp-btn danger sm" data-tp-del-subject="'+s.id+'">✕</button></div>' +
            (s.description ? '<div class="meta tp-md" style="font-size:0.85rem;color:var(--ink-soft);margin-bottom:8px">'+tpMd(s.description)+'</div>' : '') +
            '<p class="tp-sub">'+done+' / '+portions.length+' portions applied</p>' +
            (portions.length ? portions.map(function(p){ return '<label class="tp-check '+(p.done?'done':'')+'"><input type="checkbox" data-tp-portion="'+p.id+'" data-subject="'+s.id+'" '+(p.done?'checked':'')+'><span style="flex:1">'+p.text+'</span><button type="button" class="tp-btn danger sm" data-tp-del-portion="'+p.id+'" data-subject="'+s.id+'">✕</button></label>'; }).join('') : '<p class="tp-empty">No portions added yet.</p>') +
            '<div class="tp-row"><input data-new-portion="'+s.id+'" placeholder="Add a portion you\'re applying to…"><button type="button" class="tp-btn" data-tp-add-portion="'+s.id+'">Add</button></div>' +
            '<div class="tp-row"><input data-edit-subject-name="'+s.id+'" placeholder="Subject name…" value="'+tpAttr(s.name)+'"></div>' +
            tpFmtBar('[data-edit-subject-desc="'+s.id+'"]') +
            '<textarea data-edit-subject-desc="'+s.id+'" class="tp-notes" placeholder="Description… **bold** *italic* - bullets">'+tpAttr(s.description)+'</textarea>' +
            '<div class="tp-row"><button type="button" class="tp-btn outline sm" data-tp-save-subject="'+s.id+'">Save</button></div></div>';
        }).join('') : '<p class="tp-empty">No subjects yet — add one below.</p>');
        html += '<div class="tp-card"><h3>New subject</h3><p class="tp-sub">Add a subject you\'re studying</p>' +
          '<div class="tp-row"><input id="tpNewSubject" placeholder="Subject name…"></div>' +
          tpFmtBar("#tpNewSubjectDesc") +
          '<textarea id="tpNewSubjectDesc" class="tp-notes" placeholder="Description (optional)… **bold** *italic* - bullets"></textarea>' +
          '<div class="tp-row"><button type="button" class="tp-btn" id="tpAddSubject">Add subject</button></div></div>';
        return html;
      }

      function tpBindView() {
        tpBindFormatControls(document.getElementById("tpMain") || document);
        document.querySelectorAll("[data-tp-habit]").forEach(function(el){ el.addEventListener("change", function(){ tpHabitMark(el.getAttribute("data-tp-habit"), el.checked); tpRender(); }); });
        document.querySelectorAll("[data-tp-goal]").forEach(function(el){ el.addEventListener("change", function(){ var g=tpDayGoals().find(function(x){return x.id===el.getAttribute("data-tp-goal");}); if(g){ g.done=el.checked; tpSave(); tpRender(); } }); });
        var addGoal=document.getElementById("tpAddGoal");
        if(addGoal) addGoal.addEventListener("click", function(){ var t=((document.getElementById("tpNewGoal")||{}).value||"").trim(); if(!t) return; tpDayGoals().push({id:tpUid(),text:t,done:false}); tpSave(); tpRender(); });
        document.querySelectorAll("[data-tp-del-goal]").forEach(function(b){ b.addEventListener("click", function(e){ e.preventDefault(); var id=b.getAttribute("data-tp-del-goal"); tpData.dailyGoals[tpToday()]=tpDayGoals().filter(function(g){return g.id!==id;}); tpSave(); tpRender(); }); });
        var addHabit=document.getElementById("tpAddHabit");
        if(addHabit) addHabit.addEventListener("click", function(){ var t=((document.getElementById("tpNewHabit")||{}).value||"").trim(); if(!t) return; tpData.habits.push({id:tpUid(),name:t,streak:0,best:0,lastDone:"",log:{}}); tpSave(); tpRender(); });
        document.querySelectorAll("[data-tp-del-habit]").forEach(function(b){ b.addEventListener("click", function(e){ e.preventDefault(); tpData.habits=tpData.habits.filter(function(h){return h.id!==b.getAttribute("data-tp-del-habit");}); tpSave(); tpRender(); }); });
        document.querySelectorAll("[data-tp-routine]").forEach(function(el){ el.addEventListener("change", function(){ var kind=el.getAttribute("data-tp-routine"); var id=el.getAttribute("data-id"); var day=tpToday(); tpData.routineLog[day]=tpData.routineLog[day]||{morning:[],night:[]}; var arr=tpData.routineLog[day][kind]||[]; if(el.checked&&arr.indexOf(id)<0) arr.push(id); if(!el.checked) tpData.routineLog[day][kind]=arr.filter(function(x){return x!==id;}); else tpData.routineLog[day][kind]=arr; tpSave(); tpRender(); }); });
        var addR=document.getElementById("tpAddRoutine");
        if(addR) addR.addEventListener("click", function(){ var kind=addR.getAttribute("data-kind"); var t=((document.getElementById("tpNewRoutine")||{}).value||"").trim(); if(!t) return; tpData[kind].push({id:tpUid(),text:t}); tpSave(); tpRender(); });
        document.querySelectorAll("[data-tp-del-routine]").forEach(function(b){ b.addEventListener("click", function(e){ e.preventDefault(); var kind=b.getAttribute("data-tp-del-routine"); var id=b.getAttribute("data-id"); tpData[kind]=tpData[kind].filter(function(x){return x.id!==id;}); tpSave(); tpRender(); }); });
        var saveRef=document.getElementById("tpSaveReflection");
        if(saveRef) saveRef.addEventListener("click", function(){ tpData.reflections[tpToday()]=((document.getElementById("tpReflection")||{}).value)||""; tpSave(); if(typeof showToast==="function") showToast("Reflection saved","updated"); });
        document.querySelectorAll("[data-tp-mode]").forEach(function(b){ b.addEventListener("click", function(){ tpPomStop(); tpPomodoro.mode=b.getAttribute("data-tp-mode"); tpPomodoro.left=tpModeSeconds(tpPomodoro.mode); tpRender(); }); });
        var pomStart=document.getElementById("tpPomStart");
        if(pomStart) pomStart.addEventListener("click", function(){ if(tpPomodoro.running) tpPomPause(); else tpPomStart(); tpRender(); });
        var pomReset=document.getElementById("tpPomReset");
        if(pomReset) pomReset.addEventListener("click", function(){ tpPomStop(); tpPomodoro.left=tpModeSeconds(tpPomodoro.mode); tpRender(); });
        var affNext=document.getElementById("tpAffirmNext");
        if(affNext) affNext.addEventListener("click", function(){ var n=(tpData.affirmations.custom||[]).length||1; tpData.affirmations.lastIndex=((tpData.affirmations.lastIndex||0)+1)%n; tpSave(); tpRender(); });
        var affPr=document.getElementById("tpAffirmPractice");
        if(affPr) affPr.addEventListener("click", function(){ tpData.affirmations.practiced=tpData.affirmations.practiced||{}; tpData.affirmations.practiced[tpToday()]=true; tpSave(); tpRender(); });
        var affApi=document.getElementById("tpAffirmApi");
        if(affApi) affApi.addEventListener("click", async function(){ var el=document.getElementById("tpAffirmText"); try{ var text=null; try{ var r=await fetch("https://www.affirmations.dev/"); if(r.ok){ var j=await r.json(); text=j.affirmation; } }catch(e){} if(!text){ try{ var r2=await fetch("https://api.quotable.io/random?tags=inspirational"); if(r2.ok){ var j2=await r2.json(); text=j2.content; } }catch(e){} } if(text&&el) el.textContent=text; else if(typeof showToast==="function") showToast("Could not fetch affirmation","updated"); }catch(e){ if(typeof showToast==="function") showToast("Could not fetch affirmation","updated"); } });
        var addAff=document.getElementById("tpAddAffirm");
        if(addAff) addAff.addEventListener("click", function(){ var t=((document.getElementById("tpNewAffirm")||{}).value||"").trim(); if(!t) return; tpData.affirmations.custom.push(t); tpSave(); tpRender(); });
        document.querySelectorAll("[data-tp-del-affirm]").forEach(function(b){ b.addEventListener("click", function(){ tpData.affirmations.custom.splice(parseInt(b.getAttribute("data-tp-del-affirm"),10),1); tpSave(); tpRender(); }); });
        var saveFs=document.getElementById("tpSaveFutureSelf");
        if(saveFs) saveFs.addEventListener("click", function(){ tpData.affirmations.futureSelf=((document.getElementById("tpFutureSelf")||{}).value)||""; tpSave(); if(typeof showToast==="function") showToast("Saved","updated"); });
        document.querySelectorAll("[data-tp-add-gcat]").forEach(function(b){ b.addEventListener("click", function(){ var cat=b.getAttribute("data-tp-add-gcat"); var title=((document.querySelector('[data-new-goal-title="'+cat+'"]')||{}).value||"").trim(); var deadline=((document.querySelector('[data-new-goal-deadline="'+cat+'"]')||{}).value)||""; var milestone=((document.querySelector('[data-new-goal-ms="'+cat+'"]')||{}).value)||""; if(!title) return; tpData.goals[cat]=tpData.goals[cat]||[]; tpData.goals[cat].push({id:tpUid(),title:title,progress:0,deadline:deadline,milestone:milestone,done:false}); tpSave(); tpRender(); }); });
        document.querySelectorAll("[data-tp-goal-prog]").forEach(function(b){ b.addEventListener("click", function(){ var cat=b.getAttribute("data-cat"); var id=b.getAttribute("data-tp-goal-prog"); var g=(tpData.goals[cat]||[]).find(function(x){return x.id===id;}); if(!g) return; g.progress=Math.min(100,(g.progress||0)+10); if(g.progress>=100) g.done=true; tpSave(); tpRender(); }); });
        document.querySelectorAll("[data-tp-del-gcat]").forEach(function(b){ b.addEventListener("click", function(){ var cat=b.getAttribute("data-tp-del-gcat"); var id=b.getAttribute("data-id"); tpData.goals[cat]=(tpData.goals[cat]||[]).filter(function(x){return x.id!==id;}); tpSave(); tpRender(); }); });
        var addWish=document.getElementById("tpAddWish");
        if(addWish) addWish.addEventListener("click", function(){ var title=((document.getElementById("tpWishTitle")||{}).value||"").trim(); if(!title) return; tpData.wishlist.push({id:tpUid(),title:title,priority:((document.getElementById("tpWishPri")||{}).value)||"medium",link:((document.getElementById("tpWishLink")||{}).value||"").trim(),notes:((document.getElementById("tpWishNotes")||{}).value)||"",status:"want"}); tpSave(); tpRender(); });
        document.querySelectorAll("[data-tp-wish-status]").forEach(function(b){ b.addEventListener("click", function(){ var w=tpData.wishlist.find(function(x){return x.id===b.getAttribute("data-tp-wish-status");}); if(w){ w.status=w.status==="got"?"want":"got"; tpSave(); tpRender(); } }); });
        document.querySelectorAll("[data-tp-del-wish]").forEach(function(b){ b.addEventListener("click", function(){ tpData.wishlist=tpData.wishlist.filter(function(x){return x.id!==b.getAttribute("data-tp-del-wish");}); tpSave(); tpRender(); }); });
        var addBucket=document.getElementById("tpAddBucket");
        if(addBucket) addBucket.addEventListener("click", function(){ var title=((document.getElementById("tpBucketTitle")||{}).value||"").trim(); if(!title) return; tpData.bucket.push({id:tpUid(),title:title,done:false,dateDone:""}); tpSave(); tpRender(); });
        document.querySelectorAll("[data-tp-bucket]").forEach(function(el){ el.addEventListener("change", function(){ var b=tpData.bucket.find(function(x){return x.id===el.getAttribute("data-tp-bucket");}); if(b){ b.done=el.checked; b.dateDone=el.checked?tpToday():""; tpSave(); tpRender(); } }); });
        document.querySelectorAll("[data-tp-del-bucket]").forEach(function(b){ b.addEventListener("click", function(e){ e.preventDefault(); tpData.bucket=tpData.bucket.filter(function(x){return x.id!==b.getAttribute("data-tp-del-bucket");}); tpSave(); tpRender(); }); });
        var addRom=document.getElementById("tpAddRom");
        if(addRom) addRom.addEventListener("click", function(){ var title=((document.getElementById("tpRomTitle")||{}).value||"").trim(); if(!title) return; tpData.romantic.push({id:tpUid(),title:title,type:((document.getElementById("tpRomType")||{}).value)||"date",notes:((document.getElementById("tpRomNotes")||{}).value)||"",status:"idea"}); tpSave(); tpRender(); });
        document.querySelectorAll("[data-tp-rom-status]").forEach(function(b){ b.addEventListener("click", function(){ var r=tpData.romantic.find(function(x){return x.id===b.getAttribute("data-tp-rom-status");}); if(!r) return; var cycle=["idea","planned","done"]; r.status=cycle[(cycle.indexOf(r.status||"idea")+1)%cycle.length]; tpSave(); tpRender(); }); });
        document.querySelectorAll("[data-tp-del-rom]").forEach(function(b){ b.addEventListener("click", function(){ tpData.romantic=tpData.romantic.filter(function(x){return x.id!==b.getAttribute("data-tp-del-rom");}); tpSave(); tpRender(); }); });
        var addSubject=document.getElementById("tpAddSubject");
        if(addSubject) addSubject.addEventListener("click", function(){ var t=((document.getElementById("tpNewSubject")||{}).value||"").trim(); if(!t) return; var d=((document.getElementById("tpNewSubjectDesc")||{}).value||"").trim(); tpData.study=tpData.study||{course:{name:"",description:""},subjects:[]}; tpData.study.subjects=tpData.study.subjects||[]; tpData.study.subjects.push({id:tpUid(),name:t,description:d,portions:[]}); tpSave(); tpRender(); });
        document.querySelectorAll("[data-tp-save-subject]").forEach(function(b){ b.addEventListener("click", function(){ var sid=b.getAttribute("data-tp-save-subject"); var s=(tpData.study.subjects||[]).find(function(x){return x.id===sid;}); if(!s) return; var nameEl=document.querySelector('[data-edit-subject-name="'+sid+'"]'); var descEl=document.querySelector('[data-edit-subject-desc="'+sid+'"]'); var n=((nameEl||{}).value||"").trim(); if(n) s.name=n; s.description=((descEl||{}).value||"").trim(); tpSave(); tpRender(); }); });
        var saveCourse=document.getElementById("tpSaveCourse");
        if(saveCourse) saveCourse.addEventListener("click", function(){ var n=((document.getElementById("tpCourseName")||{}).value||"").trim(); var d=((document.getElementById("tpCourseDesc")||{}).value||"").trim(); tpData.study=tpData.study||{course:{name:"",description:""},subjects:[]}; tpData.study.course={name:n,description:d}; tpSave(); tpRender(); });
        document.querySelectorAll("[data-tp-del-subject]").forEach(function(b){ b.addEventListener("click", function(e){ e.preventDefault(); tpData.study.subjects=(tpData.study.subjects||[]).filter(function(x){return x.id!==b.getAttribute("data-tp-del-subject");}); tpSave(); tpRender(); }); });
        document.querySelectorAll("[data-tp-add-portion]").forEach(function(b){ b.addEventListener("click", function(){ var sid=b.getAttribute("data-tp-add-portion"); var input=document.querySelector('[data-new-portion="'+sid+'"]'); var t=((input||{}).value||"").trim(); if(!t) return; var s=(tpData.study.subjects||[]).find(function(x){return x.id===sid;}); if(!s) return; s.portions=s.portions||[]; s.portions.push({id:tpUid(),text:t,done:false}); tpSave(); tpRender(); }); });
        document.querySelectorAll("[data-tp-portion]").forEach(function(el){ el.addEventListener("change", function(){ var sid=el.getAttribute("data-subject"); var pid=el.getAttribute("data-tp-portion"); var s=(tpData.study.subjects||[]).find(function(x){return x.id===sid;}); if(!s) return; var p=(s.portions||[]).find(function(x){return x.id===pid;}); if(p){ p.done=el.checked; tpSave(); tpRender(); } }); });

        // ---- Workout handlers ----
        var addEx = document.getElementById("tpAddEx");
        if (addEx) addEx.addEventListener("click", function () {
          var name = ((document.getElementById("tpExName") || {}).value || "").trim();
          if (!name) return;
          var sets = parseInt(((document.getElementById("tpExSets") || {}).value) || "3", 10) || 3;
          var reps = parseInt(((document.getElementById("tpExReps") || {}).value) || "10", 10) || 10;
          var muscle = ((document.getElementById("tpExMuscle") || {}).value || "").trim();
          var desc = ((document.getElementById("tpExDesc") || {}).value || "").trim();
          var w = tpEnsureWorkouts();
          w.exercises.push({
            id: tpUid(),
            name: name,
            description: desc,
            targetSets: sets,
            targetReps: reps,
            unit: "reps",
            muscle: muscle,
          });
          tpSave();
          tpRender();
        });
        document.querySelectorAll("[data-tp-del-ex]").forEach(function (b) {
          b.addEventListener("click", function (e) {
            e.preventDefault();
            var id = b.getAttribute("data-tp-del-ex");
            var w = tpEnsureWorkouts();
            w.exercises = w.exercises.filter(function (x) { return x.id !== id; });
            w.routines.forEach(function (r) {
              r.exerciseIds = (r.exerciseIds || []).filter(function (eid) { return eid !== id; });
            });
            tpSave();
            tpRender();
          });
        });
        document.querySelectorAll("[data-tp-ex-reps]").forEach(function (b) {
          b.addEventListener("click", function () {
            var id = b.getAttribute("data-tp-ex-reps");
            var dir = parseInt(b.getAttribute("data-dir"), 10) || 0;
            var w = tpEnsureWorkouts();
            var ex = w.exercises.find(function (x) { return x.id === id; });
            if (!ex) return;
            ex.targetReps = Math.max(1, (ex.targetReps || 10) + dir);
            tpSave();
            tpRender();
          });
        });
        document.querySelectorAll("[data-tp-save-ex]").forEach(function (b) {
          b.addEventListener("click", function () {
            var id = b.getAttribute("data-tp-save-ex");
            var w = tpEnsureWorkouts();
            var ex = w.exercises.find(function (x) { return x.id === id; });
            if (!ex) return;
            var nameEl = document.querySelector('[data-edit-ex-name="' + id + '"]');
            var setsEl = document.querySelector('[data-edit-ex-sets="' + id + '"]');
            var muscleEl = document.querySelector('[data-edit-ex-muscle="' + id + '"]');
            var descEl = document.querySelector('[data-edit-ex-desc="' + id + '"]');
            var n = ((nameEl || {}).value || "").trim();
            if (n) ex.name = n;
            ex.targetSets = Math.max(1, parseInt(((setsEl || {}).value) || "3", 10) || 3);
            ex.muscle = ((muscleEl || {}).value || "").trim();
            ex.description = ((descEl || {}).value || "").trim();
            tpSave();
            if (typeof showToast === "function") showToast("Exercise saved", "updated");
            tpRender();
          });
        });
        var addRoutineWo = document.getElementById("tpAddRoutineWo");
        if (addRoutineWo) addRoutineWo.addEventListener("click", function () {
          var name = ((document.getElementById("tpRoutineName") || {}).value || "").trim();
          if (!name) return;
          var desc = ((document.getElementById("tpRoutineDesc") || {}).value || "").trim();
          var ids = [];
          document.querySelectorAll("[data-tp-routine-ex]:checked").forEach(function (cb) {
            ids.push(cb.getAttribute("data-tp-routine-ex"));
          });
          var w = tpEnsureWorkouts();
          w.routines.push({ id: tpUid(), name: name, description: desc, exerciseIds: ids });
          tpSave();
          tpRender();
        });
        document.querySelectorAll("[data-tp-del-routine]").forEach(function (b) {
          b.addEventListener("click", function (e) {
            e.preventDefault();
            var id = b.getAttribute("data-tp-del-routine");
            var w = tpEnsureWorkouts();
            w.routines = w.routines.filter(function (r) { return r.id !== id; });
            if (w.session && w.session.routineId === id) w.session = null;
            tpSave();
            tpRender();
          });
        });
        document.querySelectorAll("[data-tp-start-routine]").forEach(function (b) {
          b.addEventListener("click", function () {
            var id = b.getAttribute("data-tp-start-routine");
            var w = tpEnsureWorkouts();
            var r = w.routines.find(function (x) { return x.id === id; });
            if (!r) return;
            var reps = {};
            (r.exerciseIds || []).forEach(function (eid) {
              var ex = w.exercises.find(function (e) { return e.id === eid; });
              reps[eid] = ex ? (ex.targetReps || 10) : 10;
            });
            w.session = {
              routineId: id,
              exerciseIds: (r.exerciseIds || []).slice(),
              done: {},
              reps: reps,
              startedAt: new Date().toISOString(),
            };
            tpSave();
            tpRender();
          });
        });
        document.querySelectorAll("[data-tp-session-ex]").forEach(function (el) {
          el.addEventListener("change", function () {
            var w = tpEnsureWorkouts();
            if (!w.session) return;
            w.session.done = w.session.done || {};
            w.session.done[el.getAttribute("data-tp-session-ex")] = el.checked;
            tpSave();
            tpRender();
          });
        });
        document.querySelectorAll("[data-tp-session-reps]").forEach(function (b) {
          b.addEventListener("click", function () {
            var w = tpEnsureWorkouts();
            if (!w.session) return;
            var eid = b.getAttribute("data-tp-session-reps");
            var dir = parseInt(b.getAttribute("data-dir"), 10) || 0;
            w.session.reps = w.session.reps || {};
            w.session.reps[eid] = Math.max(1, (w.session.reps[eid] || 10) + dir);
            tpSave();
            tpRender();
          });
        });
        var finish = document.getElementById("tpFinishSession");
        if (finish) finish.addEventListener("click", function () {
          var w = tpEnsureWorkouts();
          if (!w.session) return;
          var day = tpToday();
          w.log[day] = w.log[day] || { routines: {}, exercises: {} };
          w.log[day].routines = w.log[day].routines || {};
          w.log[day].routines[w.session.routineId] = true;
          (w.session.exerciseIds || []).forEach(function (eid) {
            w.log[day].exercises = w.log[day].exercises || {};
            w.log[day].exercises[eid] = {
              reps: (w.session.reps && w.session.reps[eid]) || 0,
              done: !!(w.session.done && w.session.done[eid]),
            };
            if (w.session.done && w.session.done[eid]) {
              var ex = w.exercises.find(function (e) { return e.id === eid; });
              if (ex && w.session.reps && w.session.reps[eid] > (ex.targetReps || 0)) {
                ex.targetReps = w.session.reps[eid];
              }
            }
          });
          w.session = null;
          tpSave();
          if (typeof showToast === "function") showToast("Workout finished · nice work", "updated");
          tpRender();
        });
        var cancel = document.getElementById("tpCancelSession");
        if (cancel) cancel.addEventListener("click", function () {
          var w = tpEnsureWorkouts();
          w.session = null;
          tpSave();
          tpRender();
        });

      }

      function initThommyPersonal() {
        tpLoad();
        tpPomodoro.mode = "focus";
        tpPomodoro.left = tpModeSeconds("focus");
        // When the calendar day changes: daily goals clear; habits/routines uncheck
        var tpLastDayKey = tpToday();
        function tpCheckNewDay() {
          var now = tpToday();
          if (now === tpLastDayKey) return;
          tpLastDayKey = now;
          if (tpIsUnlocked()) {
            if (typeof showToast === "function")
              showToast(
                "New day — daily goals cleared · habits & routines unchecked",
                "updated",
              );
            tpRender();
          }
        }
        setInterval(tpCheckNewDay, 30000);
        document.addEventListener("visibilitychange", function () {
          if (document.visibilityState === "visible") tpCheckNewDay();
        });
        var unlockBtn = document.getElementById("tpUnlockBtn");
        if (unlockBtn) unlockBtn.addEventListener("click", function() {
          var v = ((document.getElementById("tpPassInput") || {}).value) || "";
          var err = document.getElementById("tpPassErr");
          if (v === TP_PASS) {
            tpSetUnlocked();
            if (err) err.textContent = "";
            tpMaybeFirebaseLoad().then(function(){ tpRender(); });
            tpRender();
          } else {
            if (err) err.textContent = "Wrong password";
          }
        });
        var passInput = document.getElementById("tpPassInput");
        if (passInput) passInput.addEventListener("keydown", function(e) {
          if (e.key === "Enter") unlockBtn && unlockBtn.click();
        });
        var nav = document.getElementById("tpNav");
        if (nav) nav.addEventListener("click", function(e) {
          var btn = e.target.closest("button[data-tp]");
          if (!btn) return;
          tpView = btn.dataset.tp;
          tpRender();
        });
      }
      initThommyPersonal();


      // Translate static labels and headings after the page has been rendered.
      translateStaticDOM();

      // Restore tab from URL AFTER all features are defined (prevents refresh freezes)
      (function initTabRouting() {
        try {
          const initial = tabFromHash();
          if (initial && initial !== "story") {
            switchTab(initial, { updateHash: false, scroll: false });
          } else if (initial === "story" && location.hash === "#story") {
            // already on story — ensure panel is active
            switchTab("story", { updateHash: false, scroll: false });
          }
        } catch (e) {
          console.warn("Tab restore failed:", e);
          try {
            switchTab("story", { updateHash: false, scroll: false });
          } catch (e2) {}
        }
        window.addEventListener("popstate", () => {
          try {
            switchTab(tabFromHash(), { updateHash: false, scroll: true });
          } catch (e) {}
        });
        window.addEventListener("hashchange", () => {
          try {
            const t = tabFromHash();
            if (t !== activeTab)
              switchTab(t, { updateHash: false, scroll: true });
          } catch (e) {}
        });
      })();
