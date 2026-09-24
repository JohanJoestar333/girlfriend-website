/* ================================================================
   APP — js/app.js
   ----------------------------------------------------------------
   All of the site's behaviour. This file is plain browser JavaScript
   (no build step) and shares one global scope with the other scripts.

   Load order (index.html):
     js/data/*.js   CONFIG, translations, quotes, quizzes, game decks
     js/app.js      this file
     js/enhancements.js, js/photobooth-studio.js, js/haptics.js, js/pwa.js

   Data from js/data/ used here: CONFIG, PT_TRANSLATIONS, PT_FIRST_DESC,
   FALLBACK_QUOTES, QUIZ_DATA, GAMES_META, GAMES_DATA, FUTURE_PHRASES.

   Sections — search for the name to jump to it:
     LANGUAGE + THEME          tr(), language toggle, dark mode
     PAGE POLISH               particles, header, reveal, parallax
     TABS + CHANGE TOASTS      routing, lazy sync, "while you were away"
     HOME                      hero, counters, TODAY widget, weather, moon
     ALBUM                     static + live photos, lightbox
     US / OPEN WHEN / SECRETS  favorites, firsts, letters, easter eggs
     BUCKET LIST               shared to-do list (Firebase)
     CUSTOM CONFIRM, TOASTS    shared dialog + notification helpers
     MOVIE NIGHTS              watchlist with TMDB search
     QUIZZES, MUSIC PLAYER     quiz flow; playlists + mini-player
     OUR MEMORIES              live photo uploads (Cloudinary)
     SHARED CALENDAR, DAY CARDS, BOUQUET
     OUR GAMES                 card-game flow (decks in js/data/games.js)
     THOMMY PERSONAL           private area behind its own passwords
     PHOTO BOOTH               WebRTC call + strip capture

   Firestore collections used: bucketlist, movies, musicsongs, memories,
   albums, calendar, daycards, moods, bouquets, thommyPersonal,
   photoboothCalls (+ callerCandidates / calleeCandidates).
   ================================================================ */

/* ================================================================
   LANGUAGE + THEME
   ----------------------------------------------------------------
   tr() translates a string when Portuguese is selected (data in
   js/data/translations.js). The language and theme choices are saved
   in localStorage.
   ================================================================ */

function currentLanguage() {
  return localStorage.getItem("gfLanguage") || "en";
}
function tr(text) {
  if (currentLanguage() !== "pt" || typeof text !== "string") return text;
  return PT_TRANSLATIONS[text] || text;
}
function translateStaticDOM() {
  if (currentLanguage() !== "pt") return;
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
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
  const metaTheme = document.querySelector('meta[name="theme-color"]');
  if (metaTheme)
    metaTheme.setAttribute("content", dark ? "#000000" : "#f2f6f3");
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
    btn.title = label;
    btn.setAttribute("aria-label", label);
    // Icon lives in its own span so it can flip independently of the
    // button (see .theme-icon-inner) instead of just snapping to the
    // new emoji.
    let inner = btn.querySelector(".theme-icon-inner");
    if (!inner) {
      btn.textContent = "";
      inner = document.createElement("span");
      inner.className = "theme-icon-inner";
      btn.appendChild(inner);
    }
    inner.textContent = icon;
  });
}
function toggleTheme() {
  const next = currentTheme() === "dark" ? "light" : "dark";
  localStorage.setItem("gfTheme", next);
  if (typeof prefersReducedMotion === "function" && prefersReducedMotion()) {
    applyTheme(next);
    return;
  }
  // Kick off the flip animation, then swap the emoji roughly at the
  // midpoint of the rotation so it doesn't look like it's dragging
  // the old icon around with it.
  ["themeToggle", "themeToggleMobile"].forEach((id) => {
    const btn = document.getElementById(id);
    if (btn) btn.classList.add("flipping");
  });
  setTimeout(() => {
    applyTheme(next);
    ["themeToggle", "themeToggleMobile"].forEach((id) => {
      const btn = document.getElementById(id);
      if (btn) btn.classList.remove("flipping");
    });
  }, 180);
}
applyTheme(currentTheme());
document.getElementById("themeToggle")?.addEventListener("click", toggleTheme);
document
  .getElementById("themeToggleMobile")
  ?.addEventListener("click", toggleTheme);

/* ================================================================
   PAGE POLISH — particles, header, scroll effects
   ----------------------------------------------------------------
   Small visual flourishes. Behaviour only; nothing here holds content.
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

// ---------- reduced-motion check (shared by the visual-flourish helpers below) ----------
function prefersReducedMotion() {
  try {
    return (
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    );
  } catch (e) {
    return false;
  }
}

// ---------- sliding active-tab indicator (desktop nav pill) ----------
(function initTabIndicator() {
  const nav = document.getElementById("tabsNav");
  const indicator = document.getElementById("tabIndicator");
  if (!nav || !indicator) return;

  function moveIndicator() {
    // Only direct children are the always-visible top-level tabs; the
    // "···" (More) menu holds its own nested .tab-btn elements that
    // can also carry .active while hidden, so they're deliberately
    // excluded here and handled via the active-section fallback below.
    let active = null;
    nav.querySelectorAll(":scope > .tab-btn").forEach((b) => {
      if (b.classList.contains("active")) active = b;
    });
    if (!active) {
      const moreBtn = document.getElementById("navMoreBtn");
      if (moreBtn && moreBtn.classList.contains("active-section")) {
        active = moreBtn;
      }
    }
    // Hide on mobile (nav.tabs is display:none there) or if nothing active yet
    if (!active || nav.offsetParent === null) {
      indicator.classList.remove("ready");
      return;
    }
    const navRect = nav.getBoundingClientRect();
    const btnRect = active.getBoundingClientRect();
    indicator.style.width = btnRect.width + "px";
    indicator.style.transform =
      "translateX(" + (btnRect.left - navRect.left) + "px)";
    indicator.classList.add("ready");
  }

  // Re-run whenever a tab becomes active (covers clicks, hash routing,
  // and language toggles that can change button widths)
  const obs = new MutationObserver(() => moveIndicator());
  nav.querySelectorAll(".tab-btn").forEach((btn) => {
    obs.observe(btn, { attributes: true, attributeFilter: ["class"] });
  });
  const moreBtn = document.getElementById("navMoreBtn");
  if (moreBtn) {
    obs.observe(moreBtn, { attributes: true, attributeFilter: ["class"] });
  }

  window.addEventListener("resize", moveIndicator);
  // Fonts/icons loading in can shift widths slightly after first paint
  window.addEventListener("load", moveIndicator);
  setTimeout(moveIndicator, 50);
  setTimeout(moveIndicator, 400);
})();

// ---------- cursor-following glow behind the hero photo ----------
(function initHeroCursorGlow() {
  const wrap = document.getElementById("heroPhotoWrap");
  const glow = document.getElementById("heroGlow");
  if (!wrap || !glow || prefersReducedMotion()) return;
  if (window.matchMedia && window.matchMedia("(hover: none)").matches) return; // skip on touch devices, no cursor to follow
  wrap.addEventListener("mousemove", (e) => {
    const r = wrap.getBoundingClientRect();
    const x = ((e.clientX - r.left) / r.width) * 100;
    const y = ((e.clientY - r.top) / r.height) * 100;
    wrap.style.setProperty("--mx", x + "%");
    wrap.style.setProperty("--my", y + "%");
  });
  wrap.addEventListener("mouseleave", () => {
    wrap.style.setProperty("--mx", "50%");
    wrap.style.setProperty("--my", "50%");
  });
})();

// ---------- skeleton loaders: show shimmer placeholders in synced lists
// until the first Firestore snapshot (or local fallback) fills them in.
// Each render*() function does wrap.innerHTML = "" before rebuilding,
// so these placeholders are simply overwritten by the real content —
// no extra loading-state bookkeeping needed. ----------
(function initSkeletonPlaceholders() {
  function seed(id, rowClass, count) {
    const el = document.getElementById(id);
    if (!el || !isFirebaseConfigured()) return;
    let html = "";
    for (let i = 0; i < count; i++) {
      html += '<div class="' + rowClass + ' skeleton-row"></div>';
    }
    el.innerHTML = html;
  }
  seed("bucketList", "bucket-item", 4);
  seed("musicTrackList", "music-track", 4);
  seed("daycardList", "daycard", 2);
})();

// ---------- header shrink + back-to-top, on scroll ----------
(function initScrollChrome() {
  const header = document.querySelector("header.site-header");
  const backToTop = document.getElementById("backToTop");
  let ticking = false;
  function update() {
    const y = window.scrollY || window.pageYOffset || 0;
    if (header) header.classList.toggle("is-scrolled", y > 20);
    if (backToTop) backToTop.classList.toggle("visible", y > 480);
    ticking = false;
  }
  window.addEventListener(
    "scroll",
    () => {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    },
    { passive: true },
  );
  update();
  if (backToTop) {
    backToTop.addEventListener("click", () => {
      try {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } catch (e) {
        window.scrollTo(0, 0);
      }
    });
  }
})();

// ---------- scroll-reveal: sections fade/slide in as they enter view ----------
(function initScrollReveal() {
  if (!("IntersectionObserver" in window)) return;
  const targets = document.querySelectorAll(
    ".tab-panel .section, .tab-panel .section-narrow",
  );
  if (!targets.length) return;
  targets.forEach((el) => el.classList.add("reveal-on-scroll"));
  if (prefersReducedMotion()) {
    targets.forEach((el) => el.classList.add("is-visible"));
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -60px 0px" },
  );
  targets.forEach((el) => io.observe(el));
})();

// ---------- hero parallax: the hero photo drifts gently as you scroll past it ----------
(function initHeroParallax() {
  const wrap = document.querySelector(".hero-photo-wrap");
  const hero = document.querySelector(".hero");
  if (!wrap || !hero || prefersReducedMotion()) return;
  let ticking = false;
  function update() {
    ticking = false;
    const rect = hero.getBoundingClientRect();
    if (rect.bottom < 0 || rect.top > window.innerHeight) return;
    const y = window.scrollY || window.pageYOffset || 0;
    wrap.style.transform = "translateY(" + Math.min(y * 0.22, 90) + "px)";
  }
  window.addEventListener(
    "scroll",
    function () {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    },
    { passive: true },
  );
  update();
})();

// ---------- tap heart-burst: a couple of little hearts pop from an element ----------
function spawnHeartBurst(originEl, count) {
  if (!originEl || prefersReducedMotion()) return;
  const rect =
    typeof originEl.getBoundingClientRect === "function"
      ? originEl.getBoundingClientRect()
      : null;
  if (!rect) return;
  const cx = rect.left + rect.width / 2;
  const cy = rect.top + rect.height / 2;
  const n = count || 4;
  for (let i = 0; i < n; i++) {
    const heart = document.createElement("div");
    heart.className = "heart-burst-particle";
    heart.textContent = "♥";
    const spreadX = (Math.random() - 0.5) * 60;
    const rot = (Math.random() - 0.5) * 40;
    heart.style.left = cx + "px";
    heart.style.top = cy + "px";
    heart.style.setProperty("--hb-x", spreadX + "px");
    heart.style.setProperty("--hb-rot", rot + "deg");
    heart.style.animationDelay = i * 60 + "ms";
    document.body.appendChild(heart);
    setTimeout(
      () => {
        if (heart.parentNode) heart.parentNode.removeChild(heart);
      },
      1300 + i * 60,
    );
  }
}

// ---------- nav / tabs + cross-device change toasts ----------
// Instead of sticky per-tab dots, we show a one-time toast whenever
// new items show up — either live while you're both on the site, or
// as a quick catch-up toast the next time you open it after new
// stuff was added while you were away.
//
// Cross-device memory uses localStorage keys:
//   gf_lastSeen_bucketlist  /  gf_lastSeen_music  / etc.
// Each stores a timestamp (ms). Changes are only eligible for a catch-up
// notification for 24 hours, then they expire and are never announced.
let activeTab = "story";
const tabDotTimers = {}; // unused now, kept so nothing else breaks
let selfWriteUntil = {}; // tab -> timestamp; suppresses a duplicate
// toast right after you create something yourself (you already get
// the "Added to the watchlist!" style toast for your own actions).

function markSelfWrite(tab) {
  selfWriteUntil[tab] = Date.now() + 5000;
}
function isSelfWriteWindow(tab) {
  return !!selfWriteUntil[tab] && Date.now() < selfWriteUntil[tab];
}

const CHANGE_TOAST_CONFIG = {
  bucketlist: {
    icon: "💌",
    en: (n) =>
      n === 1 ? "A Bucket List item changed" : n + " Bucket List items changed",
    pt: (n) =>
      n === 1
        ? "Um item da Lista de Desejos mudou"
        : n + " itens da Lista de Desejos mudaram",
  },
  movies: {
    icon: "🎬",
    en: (n) =>
      n === 1
        ? "A movie in the Watchlist changed"
        : n + " movies in the Watchlist changed",
    pt: (n) =>
      n === 1
        ? "Um filme na Lista de Filmes mudou"
        : n + " filmes na Lista de Filmes mudaram",
  },
  music: {
    icon: "🎵",
    en: (n) =>
      n === 1 ? "A playlist song changed" : n + " playlist songs changed",
    pt: (n) =>
      n === 1
        ? "Uma música da playlist mudou"
        : n + " músicas da playlist mudaram",
  },
  calendar: {
    icon: "📅",
    en: (n) =>
      n === 1 ? "A Calendar event changed" : n + " Calendar events changed",
    pt: (n) =>
      n === 1
        ? "Um evento do Calendário mudou"
        : n + " eventos do Calendário mudaram",
  },
  album: {
    icon: "📸",
    en: (n) =>
      n === 1 ? "An Album memory changed" : n + " Album memories changed",
    pt: (n) =>
      n === 1
        ? "Uma lembrança do Álbum mudou"
        : n + " lembranças do Álbum mudaram",
  },
  daycards: {
    icon: "🗓️",
    en: (n) => (n === 1 ? "New Day Card added" : n + " new Day Cards added"),
    pt: (n) =>
      n === 1
        ? "Novo Cartão do Dia adicionado"
        : n + " novos Cartões do Dia adicionados",
  },
  bouquet: {
    icon: "💐",
    en: (n) =>
      n === 1
        ? "A new bouquet is waiting for you"
        : n + " new bouquets are waiting for you",
    pt: (n) =>
      n === 1
        ? "Um novo buquê está esperando por você"
        : n + " novos buquês estão esperando por você",
  },
};

function itemTimeMs(value) {
  if (!value) return 0;
  if (typeof value.toMillis === "function") return value.toMillis();
  if (typeof value.seconds === "number") return value.seconds * 1000;
  if (typeof value === "number") return value;
  const parsed = Date.parse(value);
  return Number.isNaN(parsed) ? 0 : parsed;
}

function itemChangedMs(item) {
  if (!item) return 0;
  return Math.max(itemTimeMs(item.updatedAt), itemTimeMs(item.createdAt));
}

function getLastSeenMs(tab) {
  const raw = localStorage.getItem("gf_lastSeen_" + tab);
  if (raw === null || raw === "") return null;
  const n = parseInt(raw, 10);
  return Number.isFinite(n) ? n : null;
}

function markTabSeen(tab, items) {
  let max = Date.now();
  (items || []).forEach((it) => {
    const t = itemChangedMs(it);
    if (t > max) max = t;
  });
  localStorage.setItem("gf_lastSeen_" + tab, String(max));
}

const CHANGE_NOTIFICATION_TTL = 24 * 60 * 60 * 1000;
const CHANGE_TOAST_DURATION = 8000;

function refreshTabDotsFromData(tab, items) {
  const now = Date.now();
  const last = getLastSeenMs(tab);
  if (last === null) {
    markTabSeen(tab, items);
    return;
  }
  const unseen = (items || []).filter((it) => {
    const changed = itemChangedMs(it);
    return (
      changed > last && changed > 0 && now - changed <= CHANGE_NOTIFICATION_TTL
    );
  });
  if (unseen.length && !isSelfWriteWindow(tab)) {
    const cfg = CHANGE_TOAST_CONFIG[tab];
    if (cfg) {
      const message =
        currentLanguage() === "pt"
          ? cfg.pt(unseen.length)
          : cfg.en(unseen.length);
      showToast(
        cfg.icon + " " + message,
        "change-notification",
        CHANGE_TOAST_DURATION,
      );
    }
  }
  markTabSeen(tab, items);
}

function setTabDot(tab) {
  const dots = document.querySelectorAll(`.tab-dot[data-dot-for="${tab}"]`);
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
  document.querySelectorAll(`.tab-dot[data-dot-for="${tab}"]`).forEach((d) => {
    d.hidden = true;
    d.classList.remove("flash");
  });
}

// Tabs that live under the ··· "More" menu (add future ones here)
const MORE_TABS = ["bouquet", "photobooth", "calendar", "daycards", "games", "personal"];

// Valid tab ids — used for URL hash routing (#album, #music, #calendar, …)
const VALID_TABS = [
  "story",
  "album",
  "us",
  "openwhen",
  "bucketlist",
  "bouquet",
  "quizzes",
  "music",
  "photobooth",
  "personal",
  "calendar",
  "daycards",
  "games",
];

// ---- lazy per-tab Firestore sync ----
// Bucket List, Movies, Music, Memories and Albums don't feed the Today
// widget, so there's no reason to open a live Firestore connection to
// those collections until the person actually opens that tab. Before this,
// every one of those listeners started the instant the page loaded, which
// meant a full read of every collection even for a visit that only ever
// looked at the Today digest. Calendar, Day Cards, Bouquet and Mood stay
// eager below since the Today widget needs them right away.
const LAZY_TAB_SYNC = {};
function registerLazyTabSync(tab, startFn) {
  if (!LAZY_TAB_SYNC[tab]) LAZY_TAB_SYNC[tab] = [];
  LAZY_TAB_SYNC[tab].push({ started: false, start: startFn });
}
function ensureLazyTabSync(tab) {
  (LAZY_TAB_SYNC[tab] || []).forEach((entry) => {
    if (!entry.started) {
      entry.started = true;
      try {
        entry.start();
      } catch (e) {}
    }
  });
}

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
  const raw = (location.hash || "").replace(/^#/, "").trim().toLowerCase();
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

  const prevTab = activeTab;
  if (
    prevTab === "photobooth" &&
    name !== "photobooth" &&
    typeof pbOnLeaveTab === "function"
  ) {
    try {
      pbOnLeaveTab();
    } catch (e) {}
  }

  activeTab = name;
  ensureLazyTabSync(name);
  clearTabDot(name);
  if (typeof musicUpdateMiniVisibility === "function") {
    try {
      musicUpdateMiniVisibility();
    } catch (e) {}
  }
  // Opening a tab must not erase a pending catch-up notification.
  // Snapshot handlers update the checkpoint after checking for changes.
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
  if (name === "photobooth" && typeof pbOnEnterTab === "function") {
    try {
      pbOnEnterTab();
    } catch (e) {}
  }

  document
    .querySelectorAll(".tab-panel")
    .forEach((p) => p.classList.remove("active"));
  const panel = document.getElementById("tab-" + name);
  if (panel) panel.classList.add("active");
  // Belt-and-suspenders for scroll-reveal: some browsers don't
  // reliably re-check IntersectionObserver targets the instant a
  // hidden tab-panel (display:none) becomes visible. Force-reveal
  // anything already on screen right away so a freshly opened tab
  // never looks blank; IntersectionObserver still handles anything
  // further down as you scroll within the tab.
  if (panel) {
    window.requestAnimationFrame(function () {
      panel.querySelectorAll(".reveal-on-scroll").forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.top < window.innerHeight && r.bottom > 0) {
          el.classList.add("is-visible");
        }
      });
      // Same belt-and-suspenders for staggered lists (timeline,
      // favorites, fun facts), which use their own observer (see
      // initStaggerReveal) since each item needs an individual
      // stagger rather than one shared section-wide reveal.
      panel.querySelectorAll(".stagger-reveal-item").forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.top < window.innerHeight && r.bottom > 0) {
          el.classList.add("sr-in");
        }
      });
    });
  }
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
  if (name === "music" && typeof showMusicCopyrightBanner === "function") {
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
  .forEach((b) => b.addEventListener("click", () => switchTab(b.dataset.tab)));
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
document.getElementById("heroEyebrow").textContent = tr(CONFIG.hero.eyebrow);
document.getElementById("heroTitle").textContent = tr(CONFIG.hero.title);
document.getElementById("heroSubtitle").textContent = tr(CONFIG.hero.subtitle);
document.getElementById("heroMessage").textContent = tr(CONFIG.hero.message);
if (CONFIG.photos.hero) {
  document.getElementById("heroPhoto").outerHTML =
    `<img src="${CONFIG.photos.hero}" class="hero-photo" alt="Us">`;
}
if (CONFIG.photos.final) {
  document.getElementById("finalPhoto").outerHTML =
    `<img src="${CONFIG.photos.final}" style="width:100%; height:100%; object-fit:cover;" alt="Us">`;
}

// ---------- together counter ----------
// Counts each tile up from 0 to its real value the first time the
// page loads (a stat that "arrives" reads as designed, not just
// printed) — then every second after that it just updates in
// place like before, since re-tweening a seconds digit every
// single tick would be noise, not polish.
let togetherCounterAnimated = false;
const reducedMotionQuery =
  window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)");
function tweenCount(el, from, to, duration) {
  if (!el) return;
  const start = performance.now();
  const change = to - from;
  function step(now) {
    const t = Math.min(1, (now - start) / duration);
    const eased = 1 - Math.pow(1 - t, 3);
    el.textContent = Math.round(from + change * eased);
    if (t < 1) requestAnimationFrame(step);
    else el.textContent = to;
  }
  requestAnimationFrame(step);
}
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
    const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0).getDate();
    days += prevMonth;
    months--;
  }
  if (months < 0) {
    months += 12;
    years--;
  }

  const vals = {
    years: Math.max(0, years),
    months: Math.max(0, months),
    days: Math.max(0, days),
    hours: Math.max(0, hours),
    mins: Math.max(0, mins),
    secs: Math.max(0, secs),
  };
  const shouldTween =
    !togetherCounterAnimated &&
    !(reducedMotionQuery && reducedMotionQuery.matches);
  togetherCounterAnimated = true;
  Object.keys(vals).forEach((k) => {
    const el = document.getElementById("c-" + k);
    if (!el) return;
    if (shouldTween) tweenCount(el, 0, vals[k], 900);
    else el.textContent = vals[k];
  });
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
  tickIfChanged([rd, fd], d);
  tickIfChanged([rh, fh], pad(h));
  tickIfChanged([rm, fm], pad(m));
  tickIfChanged([rs, fs], pad(s));
}
// Pops a countdown digit with a little scale/color animation whenever
// its displayed value actually changes (not every second for every
// unit — just the ones that ticked over). Purely cosmetic, so any
// failure here is swallowed rather than breaking the countdown.
const _lastCountVals = new WeakMap();
function tickIfChanged(els, value) {
  try {
    els.forEach((el) => {
      if (!el) return;
      if (_lastCountVals.get(el) === value) return;
      _lastCountVals.set(el, value);
      el.classList.remove("tick");
      // eslint-disable-next-line no-unused-expressions
      void el.offsetWidth; // force reflow so the animation restarts
      el.classList.add("tick");
    });
  } catch (e) {}
}
setInterval(updateReunion, 1000);
updateReunion();

// ---------- Today widget (mood / calendar / day card) ----------
// Defined early; Firebase mood sync starts after getSharedFirestore exists.
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
// Start of today, local time — a mood set any time yesterday (or
// earlier) is stale once we've crossed into a new day, regardless
// of how many hours that actually was.
function startOfTodayMs() {
  const d = new Date();
  d.setHours(0, 0, 0, 0);
  return d.getTime();
}
function applyMoodExpiry(writeBack) {
  const cutoff = startOfTodayMs();
  ["me", "her"].forEach((who) => {
    const at = moodState[who + "At"] || 0;
    if (moodState[who] && at && at < cutoff) {
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
// Keep moods fresh even if the tab is left open across midnight —
// otherwise applyMoodExpiry only re-checks on the next render.
let moodMidnightTimer = null;
function scheduleMoodMidnightRefresh() {
  clearTimeout(moodMidnightTimer);
  const now = new Date();
  const nextMidnight = new Date(now);
  nextMidnight.setHours(24, 0, 0, 50);
  const delay = Math.max(1000, nextMidnight.getTime() - now.getTime());
  moodMidnightTimer = setTimeout(function () {
    applyMoodExpiry(true);
    renderTodayMoods();
    scheduleMoodMidnightRefresh();
  }, delay);
}
scheduleMoodMidnightRefresh();
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
  if (meM) meM.textContent = moodState.me ? moodLabel(moodState.me) : pickHint;
  if (herM)
    herM.textContent = moodState.her ? moodLabel(moodState.her) : pickHint;
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
          typeof calPersonLabel === "function" ? calPersonLabel(who) : who;
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
    Array.from(list.querySelectorAll(".today-cal-item")).forEach((row, i) => {
      const t = row.querySelector(".title");
      if (t) t.textContent = events[i].title || "";
    });
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
          typeof daycardIsFromToday === "function"
            ? daycardIsFromToday(c)
            : false,
        )
      : [];
  const sorted = list.slice().sort((a, b) => {
    const ta =
      typeof daycardTimeMs === "function" ? daycardTimeMs(a.createdAt) : 0;
    const tb =
      typeof daycardTimeMs === "function" ? daycardTimeMs(b.createdAt) : 0;
    return tb - ta;
  });
  const card = sorted[0];
  if (!card) {
    const pool = TODAY_NO_CARD_MSGS[isPt ? "pt" : "en"];
    const dayKey = tpToday();
    let seed = 0;
    for (let i = 0; i < dayKey.length; i++)
      seed = (seed * 31 + dayKey.charCodeAt(i)) >>> 0;
    const msg = pool[seed % pool.length];
    box.innerHTML = `<p class="today-empty">${msg}</p>
            <button type="button" class="today-link" data-go="daycards">${isPt ? "Escrever um" : "Write one"}</button>`;
  } else {
    const who = card.from === "her" ? "her" : "me";
    const name = who === "her" ? CONFIG.names.her : CONFIG.names.me;
    const text =
      (card.text || "").trim() ||
      (card.audioUrl ? (isPt ? "(áudio)" : "(audio)") : "");
    const hasAudio = !!(card.audioUrl && String(card.audioUrl).trim());
    const badge =
      typeof daycardRemainingLabel === "function"
        ? daycardRemainingLabel(card)
        : "";
    box.innerHTML = `<div class="today-daycard-meta">
              <span class="from ${who}"></span>
              ${badge ? `<span class="today-daycard-badge${card.saved ? " saved" : ""}"></span>` : ""}
            </div>
            <div class="txt"></div>
            ${hasAudio ? `<audio class="today-daycard-player" controls preload="metadata" src=""></audio>` : ""}
            <button type="button" class="today-link" data-go="daycards">${isPt ? "Ver cartões" : "See day cards"}</button>`;
    box.querySelector(".from").textContent = name;
    const badgeEl = box.querySelector(".today-daycard-badge");
    if (badgeEl) badgeEl.textContent = badge;
    box.querySelector(".txt").textContent = text;
    if (hasAudio) {
      const audioEl = box.querySelector(".today-daycard-player");
      if (audioEl) audioEl.src = card.audioUrl;
    }
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
      if (cap)
        cap.textContent = m.caption || (isPt ? "Uma lembrança" : "A memory");
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
      const title = (item.querySelector("title")?.textContent || "").trim();
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
        typeof AbortController !== "undefined" ? new AbortController() : null;
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
          typeof AbortController !== "undefined" ? new AbortController() : null;
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
  Array.from(box.querySelectorAll(".today-news-item")).forEach((el, i) => {
    const h = el.querySelector(".headline");
    const m = el.querySelector(".meta");
    if (h) h.textContent = items[i].title || "";
    if (m) m.textContent = metaLabel;
  });
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

// ---- Daily quote — 365 local quotes, one per calendar day ----
// No quote API is used here. Everything is bundled locally so this widget
// works offline and cannot create third-party quote/CORS console errors.
const QUOTE_CACHE_KEY = "gfDailyQuote_v2";
let quoteRefreshing = false;
let quoteMidnightTimer = null;

// FALLBACK_QUOTES (the 365 bundled quotes) lives in js/data/quotes.js.

function quoteTodayKey() {
  const d = new Date();
  return (
    d.getFullYear() +
    "-" +
    String(d.getMonth() + 1).padStart(2, "0") +
    "-" +
    String(d.getDate()).padStart(2, "0")
  );
}

function quoteDayIndex(date) {
  const d = date || new Date();
  const year = d.getFullYear();
  const month = d.getMonth();
  const day = d.getDate();

  // Use UTC calendar arithmetic so daylight-saving changes cannot shift the
  // selected quote. The site has 365 entries; on leap day (Feb 29), use
  // the Feb 28 entry, then continue normally from Mar 1.
  let dayOfYear = Math.floor(
    (Date.UTC(year, month, day) - Date.UTC(year, 0, 1)) / 86400000,
  );
  if (month > 1 && new Date(year, 1, 29).getMonth() === 1) dayOfYear -= 1;
  return Math.max(0, Math.min(FALLBACK_QUOTES.length - 1, dayOfYear));
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

function pickFallbackQuote(date) {
  return FALLBACK_QUOTES[quoteDayIndex(date || new Date())];
}

function getDailyLocalQuote() {
  const today = quoteTodayKey();
  const cached = readQuoteCache();
  if (cached && cached.date === today && cached.q) {
    return { ...cached, fromCache: true };
  }

  const fb = pickFallbackQuote();
  const payload = {
    q: fb.q,
    a: fb.a,
    date: today,
    dayIndex: quoteDayIndex(),
    source: "local",
  };
  writeQuoteCache(payload);
  return { ...payload, fromCache: false };
}

async function fetchDailyQuote(force) {
  // Kept async so the rest of the existing widget code stays unchanged.
  // There is deliberately no fetch() here.
  return getDailyLocalQuote();
}

function renderTodayQuoteItems(data) {
  const body = document.getElementById("todayQuoteBody");
  const author = document.getElementById("todayQuoteAuthor");
  const source = document.getElementById("todayQuoteSource");
  if (!body) return;
  const isPt = currentLanguage() === "pt";
  if (!data || !data.q) {
    body.innerHTML =
      '<p class="today-empty">' +
      (isPt
        ? "Não foi possível carregar a frase agora."
        : "Couldn\'t load a quote right now.") +
      "</p>";
    if (author) author.textContent = "";
    if (source) source.textContent = "";
    return;
  }
  body.textContent = "\u201c" + data.q + "\u201d";
  if (author) author.textContent = data.a ? "\u2014 " + data.a : "";
  if (source) {
    source.textContent = isPt
      ? "365 frases locais · muda à meia-noite"
      : "365 local quotes · changes at midnight";
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
    body.innerHTML =
      '<p class="today-empty">' +
      (isPt ? "A carregar a frase…" : "Loading quote…") +
      "</p>";
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
    renderTodayQuoteItems({
      q: fb.q,
      a: fb.a,
      date: quoteTodayKey(),
      source: "local",
      fallback: true,
    });
  } finally {
    quoteRefreshing = false;
    if (btn) btn.disabled = false;
  }
}

function scheduleQuoteMidnightRefresh() {
  if (quoteMidnightTimer) clearTimeout(quoteMidnightTimer);

  const now = new Date();
  const nextMidnight = new Date(now);
  nextMidnight.setHours(24, 0, 0, 25);
  const delay = Math.max(1000, nextMidnight.getTime() - now.getTime());

  quoteMidnightTimer = setTimeout(async function () {
    await renderTodayQuote(false);
    scheduleQuoteMidnightRefresh();
  }, delay);
}

document
  .getElementById("todayQuoteRefresh")
  ?.addEventListener("click", () => renderTodayQuote(false));
scheduleQuoteMidnightRefresh();

function renderTodayWidget() {
  renderTodayMoods();
  renderTodayCalendar();
  renderTodayDaycard();
  renderTodayNews();
  renderTodayQuote();
  renderTodayOnThisDay();
  if (typeof renderTodayBouquet === "function") renderTodayBouquet();
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
    a.addEventListener("click", () => setTimeout(() => setOpen(true), 50));
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
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) ** 2;
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
    <div class="feels">${tr("Feels like")} ${Math.round(cw.apparent_temperature)}° · ${cw.relative_humidity_2m}% ${currentLanguage() === "pt" ? "umidade" : "humidity"}</div>
    <div class="local-time">${currentLanguage() === "pt" ? "Hora local" : "Local time"} · ${formatWeatherLocalTime(cw.time)}</div>`;
  el.appendChild(buildWeatherForecastStrip(data));
}
function formatWeatherLocalTime(value) {
  if (!value) return "—";
  const match = String(value).match(/(?:T|\s)(\d{2}):(\d{2})/);
  if (match) return `${match[1]}:${match[2]}`;
  return String(value);
}

// A week-ahead strip (today + next 6 days) shown under the current
// conditions on each big weather card. Uses the "daily" fields from the
// same Open-Meteo response fetchWeather() already pulls in — no extra
// network request.
function buildWeatherForecastStrip(data) {
  const wrap = document.createElement("div");
  wrap.className = "weather-forecast";
  const daily = data && data.daily;
  if (!daily || !Array.isArray(daily.time)) return wrap;
  const locale = currentLanguage() === "pt" ? "pt-BR" : "en-US";
  daily.time.forEach((iso, i) => {
    const [y, m, d] = iso.split("-").map(Number);
    const dt = new Date(y, m - 1, d);
    const isToday = i === 0;
    const label = isToday
      ? tr("Today")
      : dt.toLocaleDateString(locale, { weekday: "short" });
    const kind = classifyWeather(daily.weather_code[i], true);
    const hi = Math.round(daily.temperature_2m_max[i]);
    const lo = Math.round(daily.temperature_2m_min[i]);
    const day = document.createElement("div");
    day.className = "weather-forecast-day" + (isToday ? " is-today" : "");
    day.innerHTML = `
      <div class="wf-label">${label}</div>
      <div class="wf-icon">${WEATHER_ICONS[kind]}</div>
      <div class="wf-hi">${hi}°</div>
      <div class="wf-lo">${lo}°</div>`;
    wrap.appendChild(day);
  });
  return wrap;
}

// Compact side-by-side summary shown in the "Today" panel, so both of
// you can glance at each other's weather without leaving that tab. Fed
// by the same fetchWeather() calls as the big cards below — see fetchWeather().
function renderTodayWeatherMini(who, cityName, data) {
  const row = document.getElementById(
    who === "me" ? "todayWeatherMe" : "todayWeatherHer",
  );
  if (!row) return;
  if (!data || !data.current) {
    row.innerHTML = `<span class="today-weather-mini-name">${cityName}</span><span class="today-weather-mini-na">${tr("Weather unavailable right now.")}</span>`;
    return;
  }
  const cw = data.current;
  const kind = classifyWeather(cw.weather_code, cw.is_day);
  row.innerHTML = `
    <span class="today-weather-mini-name">${cityName}</span>
    <span class="today-weather-mini-icon">${WEATHER_ICONS[kind]}</span>
    <span class="today-weather-mini-temp">${Math.round(cw.temperature_2m)}°</span>
    <span class="today-weather-mini-cond">${weatherLabel(kind)}</span>`;
}

async function fetchWeather(loc, el, who) {
  try {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${loc.lat}&longitude=${loc.lon}&timezone=auto&current=temperature_2m,apparent_temperature,relative_humidity_2m,weather_code,is_day&daily=weather_code,temperature_2m_max,temperature_2m_min&forecast_days=7`;
    const res = await fetch(url);
    const data = await res.json();
    renderWeatherCard(el, loc.city, data);
    renderTodayWeatherMini(who, loc.city, data);
  } catch (e) {
    renderWeatherCard(el, loc.city, null);
    renderTodayWeatherMini(who, loc.city, null);
  }
}
fetchWeather(CONFIG.myLocation, document.getElementById("myWeather"), "me");
fetchWeather(CONFIG.herLocation, document.getElementById("herWeather"), "her");
setInterval(
  () => {
    fetchWeather(CONFIG.myLocation, document.getElementById("myWeather"), "me");
    fetchWeather(
      CONFIG.herLocation,
      document.getElementById("herWeather"),
      "her",
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
  const illum = Math.round(((1 - Math.cos(phase * 2 * Math.PI)) / 2) * 100);
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
// Which album names are collapsed. renderAlbum() rebuilds the whole
// #albumWrap from scratch on every change (new photo, language
// toggle, Firebase sync, ...), so the open/closed state has to live
// out here rather than on the DOM nodes, or it would reset every time.
// Every album starts collapsed the first time we ever see its name —
// whether that's on the very first render or one added later (a
// brand-new album someone just created, or one synced in from
// Firebase) — so opening the tab (or creating an album) never kicks
// off a burst of image loads, and never leaves a fresh album sitting
// open by accident.
let collapsedAlbums = new Set();
let seenAlbumNames = new Set();
function isAlbumCollapsed(name) {
  return collapsedAlbums.has(name);
}
// Marks each name as collapsed the first time it's ever encountered;
// names we've already seen (including ones the person toggled open)
// are left alone.
function seedCollapsedAlbums(names) {
  (names || []).forEach((name) => {
    if (seenAlbumNames.has(name)) return;
    seenAlbumNames.add(name);
    collapsedAlbums.add(name);
  });
}
function toggleAlbumCollapsed(catEl, name) {
  const collapsed = collapsedAlbums.has(name);
  if (collapsed) collapsedAlbums.delete(name);
  else collapsedAlbums.add(name);
  catEl.classList.toggle("collapsed", !collapsed);
  const btn = catEl.querySelector(".album-collapse-toggle");
  if (btn) btn.setAttribute("aria-expanded", String(collapsed));
}
// Adds the click-to-expand header treatment to an album section.
// `head` is the element holding the <h3> (and, for custom albums,
// the delete button); `masonry` is the grid that gets shown/hidden.
function makeAlbumCollapsible(catEl, head, name) {
  catEl.classList.add("album-collapsible");
  if (isAlbumCollapsed(name)) catEl.classList.add("collapsed");
  const toggle = document.createElement("button");
  toggle.type = "button";
  toggle.className = "album-collapse-toggle";
  toggle.setAttribute("aria-expanded", String(!isAlbumCollapsed(name)));
  toggle.setAttribute(
    "aria-label",
    currentLanguage() === "pt" ? "Mostrar/ocultar álbum" : "Show/hide album",
  );
  toggle.innerHTML = '<span class="album-collapse-chevron">▾</span>';
  toggle.addEventListener("click", () => toggleAlbumCollapsed(catEl, name));
  head.appendChild(toggle);
  // The title itself is also clickable, for a bigger tap target —
  // the delete button (if any) has its own listener and is a
  // sibling of the title, not inside it, so it's unaffected.
  const h3 = head.querySelector("h3");
  if (h3) {
    h3.style.cursor = "pointer";
    h3.addEventListener("click", () => toggleAlbumCollapsed(catEl, name));
  }
}

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
  const custom = getCustomAlbumNames().filter((n) => !staticNames.includes(n));
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
  const clean = String(src).split("?")[0].split("#")[0].trim().toLowerCase();
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
  fig.addEventListener("click", (e) => openLightbox(idx, e.currentTarget));
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
  fig.addEventListener("click", (e) => openLightbox(idx, e.currentTarget));
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
  allPhotos = [];
  const seen = { full: new Set(), files: new Set(), paths: new Set() };
  const staticNames = getStaticAlbumNames();

  // Seed every album as collapsed the first time we ever see it —
  // including a brand-new album created just now — so nothing is
  // expanded (and no photos in it start loading) until the person
  // opens it. Albums already seen keep whatever open/closed state
  // the person left them in.
  const UNSORTED_KEY = "__unsorted__";
  seedCollapsedAlbums(
    [
      ...staticNames,
      ...getCustomAlbumNames().filter((n) => !staticNames.includes(n)),
      UNSORTED_KEY,
    ].filter(Boolean),
  );

  albumWrap.innerHTML = "";

  // 1) Built-in CONFIG albums
  (CONFIG.album || []).forEach((cat) => {
    const catEl = document.createElement("div");
    catEl.className = "album-cat";
    const head = document.createElement("div");
    head.className = "album-cat-head";
    const h3 = document.createElement("h3");
    h3.textContent = tr(cat.category);
    head.appendChild(h3);
    catEl.appendChild(head);
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
    makeAlbumCollapsible(catEl, head, cat.category);
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
      del.title = currentLanguage() === "pt" ? "Apagar álbum" : "Delete album";
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
      makeAlbumCollapsible(catEl, head, alb.name);
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
    const head = document.createElement("div");
    head.className = "album-cat-head";
    const h3 = document.createElement("h3");
    h3.textContent =
      currentLanguage() === "pt"
        ? "Sem álbum (escolha um ao reenviar)"
        : "Unsorted (pick an album next time)";
    head.appendChild(h3);
    catEl.appendChild(head);
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
      makeAlbumCollapsible(catEl, head, UNSORTED_KEY);
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
        markSelfWrite("album");
      })
      .catch(() => {
        customAlbums.push({ id: "local-" + Date.now(), ...payload });
        if (input) input.value = "";
        if (status) status.textContent = "";
        showToast(isPt ? "Álbum criado." : "Album created.", "created");
        markSelfWrite("album");
        renderAlbum();
      });
  } else {
    customAlbums.push({ id: "local-" + Date.now(), ...payload });
    if (input) input.value = "";
    if (status) status.textContent = "";
    showToast(isPt ? "Álbum criado." : "Album created.", "created");
    markSelfWrite("album");
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
let lbOpenIndex = 0;
let lbOriginEl = null;

// Shared-element (FLIP) open: the thumbnail visually grows into
// the lightbox instead of the lightbox just popping into place.
function flipLightboxOpen(originEl) {
  const lb = document.getElementById("lightbox");
  const img = document.getElementById("lbImg");
  if (!originEl || prefersReducedMotion()) {
    lb.classList.add("open");
    return;
  }
  const firstRect = originEl.getBoundingClientRect();
  lb.classList.add("open");
  requestAnimationFrame(() => {
    const lastRect = img.getBoundingClientRect();
    const dx = firstRect.left - lastRect.left;
    const dy = firstRect.top - lastRect.top;
    const sx = firstRect.width / lastRect.width;
    const sy = firstRect.height / lastRect.height;
    img.style.transformOrigin = "top left";
    img.style.transition = "none";
    img.style.transform = `translate(${dx}px, ${dy}px) scale(${sx}, ${sy})`;
    img.style.opacity = "0.5";
    void img.offsetHeight; // force reflow before animating
    requestAnimationFrame(() => {
      img.style.transition = "";
      img.style.transform = "translate(0, 0) scale(1, 1)";
      img.style.opacity = "1";
    });
  });
}

// Reverse of the above: shrink back down into the thumbnail it
// came from, but only when we're still looking at that same
// photo — if the person paged with prev/next, there's no single
// thumbnail to shrink into, so it just fades out normally.
function flipLightboxClose() {
  const lb = document.getElementById("lightbox");
  const img = document.getElementById("lbImg");
  const originEl = lbIndex === lbOpenIndex ? lbOriginEl : null;
  if (!originEl || prefersReducedMotion()) {
    lb.classList.remove("open");
    img.style.transform = "";
    img.style.opacity = "";
    return;
  }
  const firstRect = originEl.getBoundingClientRect();
  const lastRect = img.getBoundingClientRect();
  const dx = firstRect.left - lastRect.left;
  const dy = firstRect.top - lastRect.top;
  const sx = firstRect.width / lastRect.width;
  const sy = firstRect.height / lastRect.height;
  img.style.transformOrigin = "top left";
  img.style.transform = `translate(${dx}px, ${dy}px) scale(${sx}, ${sy})`;
  img.style.opacity = "0.4";
  lb.classList.remove("open");
  // Wait past both the backdrop fade (300ms) and the image's
  // own shrink transition (420ms) before clearing the inline
  // styles, so nothing snaps visibly before it's fully hidden.
  setTimeout(() => {
    img.style.transition = "none";
    img.style.transform = "";
    img.style.opacity = "";
    void img.offsetHeight;
    img.style.transition = "";
  }, 450);
}

function closeLightbox() {
  flipLightboxClose();
}

function openLightbox(idx, originEl) {
  lbIndex = idx;
  lbOpenIndex = idx;
  lbOriginEl = originEl || null;
  renderLightbox();
  flipLightboxOpen(lbOriginEl);
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
  .addEventListener("click", () => closeLightbox());
document.getElementById("lightbox").addEventListener("click", (e) => {
  if (e.target.id === "lightbox") closeLightbox();
});
document.addEventListener("keydown", (e) => {
  if (
    e.key === "Escape" &&
    document.getElementById("lightbox").classList.contains("open")
  ) {
    closeLightbox();
  }
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
Object.entries(CONFIG.favorites).forEach(([k, v], i) => {
  const el = document.createElement("div");
  el.className = "fav-item stagger-reveal-item";
  el.style.setProperty("--sr-i", i);
  el.innerHTML = `<span class="k">${tr(k)}</span><span class="v">${tr(v)}</span>`;
  favGrid.appendChild(el);
});

// ---------- fun facts ----------
const factGrid = document.getElementById("factGrid");
CONFIG.funFacts.forEach((f, i) => {
  const el = document.createElement("div");
  el.className = "fact-card stagger-reveal-item";
  el.style.setProperty("--sr-i", i);
  el.textContent = tr(f);
  factGrid.appendChild(el);
});

// ---------- firsts timeline ----------
const timelineWrap = document.getElementById("timelineWrap");
CONFIG.firsts.forEach((f, i) => {
  const el = document.createElement("div");
  el.className = "tl-item stagger-reveal-item";
  el.style.setProperty("--sr-i", i);
  el.innerHTML = `<div class="tl-title">${tr(f.title)}</div><div class="tl-date">${f.date || "&nbsp;"}</div><div class="tl-desc">${currentLanguage() === "pt" ? PT_FIRST_DESC[f.title] || f.desc : f.desc}</div>`;
  timelineWrap.appendChild(el);
});
// A trailing "more to come" marker so the line doesn't just cut off
// after the last first — it fades out and pulses instead, hinting
// that more entries will be added over time.
if (CONFIG.firsts.length) {
  const more = document.createElement("div");
  more.className = "tl-item tl-more stagger-reveal-item";
  more.style.setProperty("--sr-i", CONFIG.firsts.length);
  more.innerHTML = `<div class="tl-more-text">${tr("More memories being made...")}</div>`;
  timelineWrap.appendChild(more);
}
initStaggerReveal();

// Reveals .stagger-reveal-item elements (timeline entries, favorites,
// fun facts) one by one as they scroll into view, instead of all at
// once with the rest of their section — each item's --sr-i custom
// property drives its transition-delay (see CSS), so this one
// observer covers every staggered list on the page.
function initStaggerReveal() {
  const items = document.querySelectorAll(".stagger-reveal-item:not(.sr-in)");
  if (!items.length) return;
  if (
    !("IntersectionObserver" in window) ||
    (typeof prefersReducedMotion === "function" && prefersReducedMotion())
  ) {
    items.forEach((el) => el.classList.add("sr-in"));
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("sr-in");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.3, rootMargin: "0px 0px -40px 0px" },
  );
  items.forEach((el) => io.observe(el));
}

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
    bodyEl.textContent = pt ? cfg.bodyPt || cfg.body || "" : cfg.body || "";
    bodyEl.scrollTop = 0;
  }

  function openBrandSecret() {
    fillSecretCard();
    overlay.classList.add("open");
    const pt = currentLanguage() === "pt";
    showToast(
      pt ? "Conseguiste encontrar isto? ✨" : "Did you really find this? ✨",
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
    cancelBtn.textContent = currentLanguage() === "pt" ? "Cancelar" : "Cancel";
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
      en: "A playlist song changed! 🎶",
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
  movieCreated: [
    {
      en: "Added to the watchlist! 🍿",
      pt: "Adicionado à lista de filmes! 🍿",
    },
    {
      en: "Queued up for movie night. 🎬",
      pt: "Na fila pra noite de cinema. 🎬",
    },
    {
      en: "New movie on the list — grab the popcorn eventually.",
      pt: "Novo filme na lista — a pipoca é só uma questão de tempo.",
    },
  ],
  movieWatched: [
    {
      en: "Marked as watched! Now rate it. ⭐",
      pt: "Marcado como assistido! Agora avaliem. ⭐",
    },
    {
      en: "Moved to Watched — how was it?",
      pt: "Movido para Assistidos — o que acharam?",
    },
  ],
  movieUpdated: [
    {
      en: "Back on the watchlist.",
      pt: "De volta pra lista de filmes.",
    },
    { en: "Movie updated.", pt: "Filme atualizado." },
  ],
  movieRated: [
    { en: "Rating saved! ⭐", pt: "Avaliação salva! ⭐" },
    {
      en: "Got it — noted your rating.",
      pt: "Prontinho — avaliação anotada.",
    },
  ],
  movieDeleted: [
    { en: "Removed from the movies list.", pt: "Removido da lista de filmes." },
    {
      en: "Gone — onto the next pick. 👋",
      pt: "Saiu — bora escolher outro. 👋",
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

function showToast(message, kind, durationMs) {
  const container = ensureToastContainer();
  const toast = document.createElement("div");
  toast.className = "toast " + (kind || "created");
  const icon = kind === "deleted" ? "🗑️" : kind === "updated" ? "✏️" : "✨";
  toast.innerHTML = `<span class="toast-icon">${icon}</span><span class="toast-text"></span>`;
  toast.querySelector(".toast-text").textContent = message;
  container.appendChild(toast);
  setTimeout(
    () => {
      toast.classList.add("leaving");
      setTimeout(() => toast.remove(), 320);
    },
    Number.isFinite(durationMs) ? durationMs : 3400,
  );
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
  // Suppress the incoming-change toast for a few seconds after you
  // create something yourself, since you already got the toast above.
  if (key === "bucketCreated") markSelfWrite("bucketlist");
  if (key === "movieCreated") markSelfWrite("movies");
  if (key === "songCreated") markSelfWrite("music");
  if (key === "calCreated") markSelfWrite("calendar");
  if (key === "memoryCreated") markSelfWrite("album");
  if (key === "daycardCreated") markSelfWrite("daycards");
}

function isMeteredTurnConfigured() {
  const t = CONFIG.meteredTurn;
  // Placeholders are split so the deploy step's sed (which is a global,
  // unscoped find/replace across the whole file) can't touch these
  // copies too. If it did, replacing the placeholder in CONFIG above
  // would also rewrite this comparison to check the value against
  // itself, making this always return false even when configured
  // correctly. See isTmdbConfigured() for the same pattern.
  const domainPlaceholder = "__METERED_TURN_DOMAIN" + "__";
  const apiKeyPlaceholder = "__METERED_TURN_API_KEY" + "__";
  return !!(
    t &&
    t.domain &&
    t.domain !== domainPlaceholder &&
    t.apiKey &&
    t.apiKey !== apiKeyPlaceholder
  );
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
    pill.textContent = tr("Synced — changes save for both of you.");
    pill.className = "bucket-sync-pill live";
  } else {
    pill.textContent = tr(
      "Not synced yet — changes only stay on this device.",
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
      const ao = typeof a.order === "number" ? a.order : 1000000 + a.__idx;
      const bo = typeof b.order === "number" ? b.order : 1000000 + b.__idx;
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
      check.addEventListener("click", (e) => {
        if (!item.done) spawnHeartBurst(e.currentTarget);
        toggleBucketItem(item);
      });

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
      editBtn.addEventListener("click", () => startEditBucketItem(item, row));

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
      calBtn.addEventListener("click", () => scheduleBucketOnCalendar(item));

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
        ? "Escolhe a data e grava o evento"
        : "Pick a date and save the event",
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
      .update({
        done: !item.done,
        updatedAt: firebase.firestore.FieldValue.serverTimestamp(),
      })
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
      .update({
        text: newText,
        updatedAt: firebase.firestore.FieldValue.serverTimestamp(),
      })
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
document.getElementById("bucketNewInput").addEventListener("keydown", (e) => {
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

function startBucketListSync() {
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
                createdAt: firebase.firestore.FieldValue.serverTimestamp(),
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
}
registerLazyTabSync("bucketlist", startBucketListSync);

/* ================================================================
   MOVIE NIGHTS — lives inside the Bucket List tab. Two lists ("To
   Watch" / "Watched") plus a TMDB-powered search box to add movies
   with poster/year, and a 5-star rating each of you can leave once a
   movie is marked watched. Same Firebase-or-local-only pattern as the
   Bucket List above: collection "movies" when CONFIG.firebase is set,
   otherwise everything just lives in this tab's memory.
   Each item looks like:
     { id, tmdbId, title, year, posterPath, status: "towatch"|"watched",
       ratings: { me, her }, createdAt, watchedAt }
   ================================================================ */
const TMDB_IMG_BASE = "https://image.tmdb.org/t/p/w200";
let movieDb = null;
let movieSyncLive = false;
let movieItems = [];
let movieUnsub = null;

function isTmdbConfigured() {
  const token = CONFIG.tmdb && CONFIG.tmdb.accessToken;
  const placeholder = "__TMDB_ACCESS_TOKEN" + "__"; // split so the deploy step's sed can't touch this copy
  return !!token && token !== placeholder;
}

async function searchTmdbMovies(query) {
  if (!isTmdbConfigured() || !query.trim()) return [];
  const lang = currentLanguage() === "pt" ? "pt-BR" : "en-US";
  const token = String(CONFIG.tmdb.accessToken || "").trim();
  const url =
    "https://api.themoviedb.org/3/search/movie?query=" +
    encodeURIComponent(query.trim()) +
    "&language=" +
    lang +
    "&include_adult=false";
  try {
    const res = await fetch(url, {
      headers: {
        Authorization: "Bearer " + token,
        accept: "application/json",
      },
    });
    if (!res.ok) {
      const body = await res.text().catch(() => "");
      console.error("TMDB search failed:", res.status, body.slice(0, 300));
      return [];
    }
    const data = await res.json();
    return (data.results || []).slice(0, 8).map((m) => ({
      tmdbId: m.id,
      title: m.title || m.name || "",
      year: (m.release_date || "").slice(0, 4) || null,
      posterPath: m.poster_path || null,
    }));
  } catch (e) {
    console.error("TMDB search request failed:", e);
    return [];
  }
}

function setMoviesSyncPill() {
  const pill = document.getElementById("moviesSyncPill");
  if (!pill) return;
  if (movieSyncLive) {
    pill.textContent = tr("Synced — changes save for both of you.");
    pill.className = "bucket-sync-pill live";
  } else {
    pill.textContent = tr(
      "Not synced yet — changes only stay on this device.",
    );
    pill.className = "bucket-sync-pill local";
  }
}

function itemCreatedMs(item) {
  const value = item && item.createdAt;
  if (value && typeof value.toMillis === "function") return value.toMillis();
  if (value && typeof value.toDate === "function")
    return value.toDate().getTime();
  const n = Number(value);
  return Number.isFinite(n) ? n : 0;
}

function getMoviesByStatus(status) {
  return movieItems
    .filter((m) => (m.status || "towatch") === status)
    .sort((a, b) => {
      if (status === "watched") {
        const aw = a.watchedAt
          ? typeof a.watchedAt.toMillis === "function"
            ? a.watchedAt.toMillis()
            : Number(a.watchedAt) || 0
          : 0;
        const bw = b.watchedAt
          ? typeof b.watchedAt.toMillis === "function"
            ? b.watchedAt.toMillis()
            : Number(b.watchedAt) || 0
          : 0;
        if (bw !== aw) return bw - aw;
      }
      return itemCreatedMs(b) - itemCreatedMs(a);
    });
}

function renderMovieLists() {
  const toWatch = getMoviesByStatus("towatch");
  const watched = getMoviesByStatus("watched");
  const twCount = document.getElementById("movieToWatchCount");
  const wCount = document.getElementById("movieWatchedCount");
  if (twCount)
    twCount.textContent = toWatch.length ? `(${toWatch.length})` : "";
  if (wCount) wCount.textContent = watched.length ? `(${watched.length})` : "";
  renderMovieListInto("movieToWatchList", toWatch, "towatch");
  renderMovieListInto("movieWatchedList", watched, "watched");
}

function renderMovieListInto(containerId, items, status) {
  const wrap = document.getElementById(containerId);
  if (!wrap) return;
  wrap.innerHTML = "";
  if (!items.length) {
    const p = document.createElement("p");
    p.className = "movie-empty";
    p.textContent =
      status === "towatch"
        ? tr("Nothing queued up yet — search for a movie above.")
        : tr("Nothing watched yet — move something over once you've seen it.");
    wrap.appendChild(p);
    return;
  }
  items.forEach((item) => wrap.appendChild(buildMovieCard(item, status)));
}

function buildMovieCard(item, status) {
  const row = document.createElement("div");
  row.className = "movie-card";

  const poster = document.createElement("div");
  poster.className = "movie-poster";
  if (item.posterPath) {
    const img = document.createElement("img");
    img.src = TMDB_IMG_BASE + item.posterPath;
    img.alt = "";
    poster.appendChild(img);
  } else {
    poster.textContent = "🎬";
  }
  row.appendChild(poster);

  const body = document.createElement("div");
  body.className = "movie-body";
  const title = document.createElement("div");
  title.className = "movie-title";
  title.textContent = item.title;
  body.appendChild(title);
  if (item.year) {
    const year = document.createElement("div");
    year.className = "movie-year";
    year.textContent = item.year;
    body.appendChild(year);
  }
  if (status === "watched") body.appendChild(buildRatingsWidget(item));
  row.appendChild(body);

  const actions = document.createElement("div");
  actions.className = "movie-actions";
  const toggleBtn = document.createElement("button");
  toggleBtn.type = "button";
  toggleBtn.className = "movie-icon-btn";
  if (status === "towatch") {
    toggleBtn.title = tr("Mark as watched");
    toggleBtn.innerHTML =
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M2.5 12s3.5-6 9.5-6 9.5 6 9.5 6-3.5 6-9.5 6-9.5-6-9.5-6Z"/><circle cx="12" cy="12" r="2.5"/></svg>';
    toggleBtn.addEventListener("click", () => setMovieStatus(item, "watched"));
  } else {
    toggleBtn.title = tr("Move back to watchlist");
    toggleBtn.innerHTML =
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 6 3 12l6 6"/><path d="M4 12h11a5 5 0 0 1 5 5v1"/></svg>';
    toggleBtn.addEventListener("click", () => setMovieStatus(item, "towatch"));
  }
  actions.appendChild(toggleBtn);

  const delBtn = document.createElement("button");
  delBtn.type = "button";
  delBtn.className = "movie-icon-btn delete";
  delBtn.title = tr("Remove");
  delBtn.innerHTML =
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h16"/><path d="M9 7V4h6v3"/><path d="M7 7l1 13h8l1-13"/><path d="M10 11v5M14 11v5"/></svg>';
  delBtn.addEventListener("click", () => deleteMovie(item));
  actions.appendChild(delBtn);

  row.appendChild(actions);
  return row;
}

function buildRatingsWidget(item) {
  const wrap = document.createElement("div");
  wrap.className = "movie-rate-wrap";
  ["me", "her"].forEach((who) => {
    const line = document.createElement("div");
    line.className = "movie-rate-row";
    const label = document.createElement("span");
    label.className = "movie-rate-name";
    label.textContent = who === "me" ? CONFIG.names.me : CONFIG.names.her;
    line.appendChild(label);

    const stars = document.createElement("span");
    stars.className = "movie-stars";
    const current = (item.ratings && item.ratings[who]) || 0;
    for (let i = 1; i <= 5; i++) {
      const s = document.createElement("button");
      s.type = "button";
      s.className = "movie-star" + (i <= current ? " filled" : "");
      s.textContent = "★";
      s.addEventListener("click", () =>
        rateMovie(item, who, i === current ? 0 : i),
      );
      stars.appendChild(s);
    }
    line.appendChild(stars);
    wrap.appendChild(line);
  });
  const meR = (item.ratings && item.ratings.me) || 0;
  const herR = (item.ratings && item.ratings.her) || 0;
  if (meR && herR) {
    const avg = document.createElement("div");
    avg.className = "movie-rate-avg";
    avg.textContent = `${tr("Average")}: ${((meR + herR) / 2).toFixed(1)} / 5`;
    wrap.appendChild(avg);
  }
  return wrap;
}

function addMovieDoc(payload) {
  const base = {
    tmdbId: payload.tmdbId || null,
    title: payload.title,
    year: payload.year || null,
    posterPath: payload.posterPath || null,
    status: "towatch",
    ratings: { me: null, her: null },
  };
  if (movieSyncLive && movieDb) {
    movieDb
      .collection("movies")
      .add({
        ...base,
        watchedAt: null,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      })
      .then(() => notify("movieCreated"))
      .catch(() => {});
  } else {
    movieItems.push({
      id: "local-" + Date.now() + "-" + Math.random().toString(36).slice(2),
      ...base,
      watchedAt: null,
      createdAt: Date.now(),
    });
    renderMovieLists();
    notify("movieCreated");
  }
}

function setMovieStatus(item, status) {
  const patch = {
    status,
    watchedAt:
      status === "watched"
        ? movieSyncLive
          ? firebase.firestore.FieldValue.serverTimestamp()
          : Date.now()
        : null,
  };
  if (movieSyncLive && movieDb) {
    movieDb
      .collection("movies")
      .doc(item.id)
      .update({
        ...patch,
        updatedAt: firebase.firestore.FieldValue.serverTimestamp(),
      })
      .then(() =>
        notify(status === "watched" ? "movieWatched" : "movieUpdated"),
      )
      .catch(() => {});
  } else {
    const local = movieItems.find((m) => m.id === item.id);
    if (local) Object.assign(local, patch);
    renderMovieLists();
    notify(status === "watched" ? "movieWatched" : "movieUpdated");
  }
}

function rateMovie(item, who, value) {
  const ratings = { ...(item.ratings || {}), [who]: value || null };
  if (movieSyncLive && movieDb) {
    movieDb
      .collection("movies")
      .doc(item.id)
      .update({
        ratings,
        updatedAt: firebase.firestore.FieldValue.serverTimestamp(),
      })
      .then(() => notify("movieRated"))
      .catch(() => {});
  } else {
    const local = movieItems.find((m) => m.id === item.id);
    if (local) local.ratings = ratings;
    renderMovieLists();
    notify("movieRated");
  }
}

async function deleteMovie(item) {
  const msg =
    currentLanguage() === "pt"
      ? `Tem certeza que quer apagar "${item.title}"?`
      : `Are you sure you want to delete "${item.title}"?`;
  const ok = await customConfirm(msg);
  if (!ok) return;

  if (movieSyncLive && movieDb) {
    movieDb
      .collection("movies")
      .doc(item.id)
      .delete()
      .then(() => notify("movieDeleted"))
      .catch(() => {});
  } else {
    movieItems = movieItems.filter((m) => m.id !== item.id);
    renderMovieLists();
    notify("movieDeleted");
  }
}

async function handleMovieSearch() {
  const input = document.getElementById("movieSearchInput");
  const resultsWrap = document.getElementById("movieSearchResults");
  const query = (input.value || "").trim();
  if (!query) return;

  if (!isTmdbConfigured()) {
    console.error(
      "TMDB is not configured. Check the TMDB_ACCESS_TOKEN GitHub secret, that GitHub Pages is set to deploy via GitHub Actions (not a branch), and re-run the deploy.",
    );
    if (resultsWrap) {
      resultsWrap.hidden = false;
      resultsWrap.innerHTML = "";
      const p = document.createElement("p");
      p.className = "movie-search-empty";
      p.textContent =
        "Movie search is not connected yet. Please check the TMDB_ACCESS_TOKEN GitHub secret and that Pages deploys via GitHub Actions.";
      resultsWrap.appendChild(p);
    }
    return;
  }

  const btn = document.getElementById("movieSearchBtn");
  if (btn) btn.disabled = true;
  const requestId = ++movieSearchRequest;
  const results = await searchTmdbMovies(query);
  if (btn) btn.disabled = false;
  if (requestId !== movieSearchRequest) return;
  renderMovieSearchResults(results);
}

function renderMovieSearchResults(results) {
  const wrap = document.getElementById("movieSearchResults");
  if (!wrap) return;
  wrap.hidden = false;
  wrap.innerHTML = "";
  if (!results.length) {
    const p = document.createElement("p");
    p.className = "movie-search-empty";
    p.textContent = tr("No movies found — try a different title.");
    wrap.appendChild(p);
    return;
  }
  results.forEach((r) => {
    const card = document.createElement("div");
    card.className = "movie-search-item";

    const poster = document.createElement("div");
    poster.className = "movie-search-poster";
    if (r.posterPath) {
      const img = document.createElement("img");
      img.src = TMDB_IMG_BASE + r.posterPath;
      img.alt = "";
      poster.appendChild(img);
    } else {
      poster.textContent = "🎬";
    }
    card.appendChild(poster);

    const info = document.createElement("div");
    info.className = "movie-search-info";
    const title = document.createElement("div");
    title.className = "movie-search-title";
    title.textContent = r.title;
    info.appendChild(title);
    if (r.year) {
      const year = document.createElement("div");
      year.className = "movie-search-year";
      year.textContent = r.year;
      info.appendChild(year);
    }
    card.appendChild(info);

    const addBtn = document.createElement("button");
    addBtn.type = "button";
    addBtn.className = "movie-add-btn";
    addBtn.textContent = tr("+ Add");
    addBtn.addEventListener("click", () => {
      // Invalidate any in-flight search so an older response cannot
      // repopulate the suggestions after a movie is added.
      movieSearchRequest++;
      clearTimeout(movieSearchTimer);
      addMovieDoc(r);
      wrap.hidden = true;
      wrap.innerHTML = "";
      const input = document.getElementById("movieSearchInput");
      if (input) input.value = "";
    });
    card.appendChild(addBtn);

    wrap.appendChild(card);
  });
}

let movieSearchTimer = null;
let movieSearchRequest = 0;

document
  .getElementById("movieSearchBtn")
  ?.addEventListener("click", handleMovieSearch);

document.getElementById("movieSearchInput")?.addEventListener("input", (e) => {
  const query = (e.target.value || "").trim();
  const wrap = document.getElementById("movieSearchResults");
  clearTimeout(movieSearchTimer);

  if (query.length < 2) {
    if (wrap) {
      wrap.hidden = true;
      wrap.innerHTML = "";
    }
    return;
  }

  movieSearchTimer = setTimeout(async () => {
    const requestId = ++movieSearchRequest;
    const results = await searchTmdbMovies(query);
    if (requestId !== movieSearchRequest) return;
    renderMovieSearchResults(results);
  }, 250);
});

document
  .getElementById("movieSearchInput")
  ?.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleMovieSearch();
    }
  });
document.querySelectorAll("#movieSubtabs .movie-subtab-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    document
      .querySelectorAll("#movieSubtabs .movie-subtab-btn")
      .forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    const which = btn.dataset.movieTab;
    const twList = document.getElementById("movieToWatchList");
    const wList = document.getElementById("movieWatchedList");
    if (twList) twList.hidden = which !== "towatch";
    if (wList) wList.hidden = which !== "watched";
  });
});

function startMovieSync() {
  const db = getSharedFirestore();
  if (db) {
    try {
      movieDb = db;
      movieSyncLive = true;
      setMoviesSyncPill();

      const col = movieDb.collection("movies");
      movieUnsub = col.orderBy("createdAt", "asc").onSnapshot(
        (snapshot) => {
          movieItems = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          renderMovieLists();
          refreshTabDotsFromData("movies", movieItems);
        },
        () => {
          movieSyncLive = false;
          setMoviesSyncPill();
          movieItems = JSON.parse(JSON.stringify(CONFIG.movieList || [])).map(
            (it, i) => ({
              id: "local-" + i,
              ratings: { me: null, her: null },
              status: "towatch",
              ...it,
            }),
          );
          renderMovieLists();
        },
      );

      col
        .limit(1)
        .get()
        .then((snap) => {
          if (snap.empty && CONFIG.movieList && CONFIG.movieList.length) {
            CONFIG.movieList.forEach((m) => {
              col.add({
                tmdbId: m.tmdbId || null,
                title: m.title,
                year: m.year || null,
                posterPath: m.posterPath || null,
                status: m.status || "towatch",
                ratings: m.ratings || { me: null, her: null },
                watchedAt: null,
                createdAt: firebase.firestore.FieldValue.serverTimestamp(),
              });
            });
          }
        })
        .catch(() => {});
    } catch (e) {
      movieSyncLive = false;
      setMoviesSyncPill();
      movieItems = JSON.parse(JSON.stringify(CONFIG.movieList || [])).map(
        (it, i) => ({
          id: "local-" + i,
          ratings: { me: null, her: null },
          status: "towatch",
          ...it,
        }),
      );
      renderMovieLists();
    }
  } else {
    movieSyncLive = false;
    setMoviesSyncPill();
    movieItems = JSON.parse(JSON.stringify(CONFIG.movieList || [])).map(
      (it, i) => ({
        id: "local-" + i,
        ratings: { me: null, her: null },
        status: "towatch",
        ...it,
      }),
    );
    renderMovieLists();
  }
}
registerLazyTabSync("bucketlist", startMovieSync);

document.getElementById("footerNames").textContent =
  `${CONFIG.names.me} ♥ ${CONFIG.names.her}`;
document.getElementById("footerYear").textContent = new Date().getFullYear();

/* ================================================================
   QUIZZES  (question data: js/data/quizzes.js)
   ================================================================ */

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
      msgs.correct[lang][Math.floor(Math.random() * msgs.correct[lang].length)];
    if (q.correctSpecial) msg = qText(q.correctSpecial);
    fb.textContent = msg;
    fb.className = "quiz-feedback show ok";

    const streakMsgs = msgs.streak[lang];
    if (streakMsgs[quizState.streak]) {
      document.getElementById("quizStreak").textContent =
        streakMsgs[quizState.streak];
    }
  } else {
    quizState.streak = 0;
    let msg =
      msgs.wrong[lang][Math.floor(Math.random() * msgs.wrong[lang].length)];
    if (
      q.wrongSpecial &&
      (q.wrongSpecialIdx === undefined || q.wrongSpecialIdx === choice)
    ) {
      msg = qText(q.wrongSpecial);
    }
    fb.textContent = msg;
    fb.className = "quiz-feedback show bad";
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
  document.getElementById("quizFinalScore").textContent = score + "/" + total;
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
    // Perfect score already gets its own title + review line in
    // the result screen above — no extra toast popup needed.
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
document.getElementById("quizQuitBtn").addEventListener("click", quitQuiz);
document.getElementById("quizHomeBtn").addEventListener("click", quitQuiz);
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
    pill.textContent = tr("Synced — songs save for both of you.");
    pill.className = "music-sync-pill live";
  } else {
    pill.textContent = tr(
      "Not synced yet — songs only stay on this device.",
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
      const ao = typeof a.order === "number" ? a.order : 1000000 + a.__idx;
      const bo = typeof b.order === "number" ? b.order : 1000000 + b.__idx;
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
  const dismissed = sessionStorage.getItem("musicCopyrightDismissed") === "1";
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
    if (heading) heading.textContent = pt ? "Editar música" : "Edit song";
    if (btn) btn.textContent = pt ? "Salvar" : "Save";
    if (cancel) cancel.style.display = "";
  } else {
    if (heading)
      heading.textContent = pt ? "Adicionar música" : "Add a song";
    if (btn) btn.textContent = pt ? "Adicionar" : "Add song";
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
    const label =
      currentLanguage() === "pt" ? pl.labelPt || pl.label : pl.label;
    btn.innerHTML = `<span class="pl-icon" aria-hidden="true">📼</span>${label}`;
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
    const trackNum = String(i + 1).padStart(2, "0");
    const playIndicator = isActive
      ? '<span class="eq-bars" aria-hidden="true"><span></span><span></span><span></span></span>'
      : "▶";
    row.innerHTML = `
      <span class="track-num">${trackNum}</span>
      <span class="track-info" style="cursor:pointer;">
        <div class="track-title">${song.title}</div>
        <div class="track-artist">${song.artist || ""} · ${srcLabel}</div>
      </span>
      <span class="track-play" style="cursor:pointer;">${playIndicator}</span>
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
  const m = s.match(/(?:youtu\.be\/|v=|embed\/|shorts\/)([a-zA-Z0-9_-]{11})/);
  return m ? m[1] : s;
}

// ---- Lazy-loaded platform APIs, so we only pull in the YouTube /
// SoundCloud player scripts once a track from that platform is
// actually played, not on every page load. ----
let _ytApiPromise = null;
function loadYouTubeAPI() {
  if (window.YT && window.YT.Player) return Promise.resolve(window.YT);
  if (_ytApiPromise) return _ytApiPromise;
  _ytApiPromise = new Promise(function (resolve) {
    const prevCb = window.onYouTubeIframeAPIReady;
    window.onYouTubeIframeAPIReady = function () {
      if (typeof prevCb === "function") prevCb();
      resolve(window.YT);
    };
    const s = document.createElement("script");
    s.src = "https://www.youtube.com/iframe_api";
    document.head.appendChild(s);
  });
  return _ytApiPromise;
}
let _scApiPromise = null;
function loadSoundCloudAPI() {
  if (window.SC && window.SC.Widget) return Promise.resolve(window.SC);
  if (_scApiPromise) return _scApiPromise;
  _scApiPromise = new Promise(function (resolve) {
    const s = document.createElement("script");
    s.src = "https://w.soundcloud.com/player/api.js";
    s.onload = function () {
      resolve(window.SC);
    };
    document.head.appendChild(s);
  });
  return _scApiPromise;
}

// ---- Unified playback control, regardless of platform. Only one
// of ytPlayer/scWidget is ever alive at a time — starting a new
// track always tears down whichever one was active first, so we
// never end up with two players fighting over the mini bar. ----
let ytPlayer = null;
let scWidget = null;
let musicIsPlaying = false;
let musicMiniCollapsed = false;
let musicPlayGeneration = 0; // guards against a stale async init
// (e.g. slow YT API load) resurrecting
// a player after the track changed again

function musicTeardownPlayer() {
  if (ytPlayer) {
    try {
      ytPlayer.destroy();
    } catch (e) {}
    ytPlayer = null;
  }
  if (scWidget) {
    try {
      scWidget.unbind(SC.Widget.Events.PLAY);
      scWidget.unbind(SC.Widget.Events.PAUSE);
      scWidget.unbind(SC.Widget.Events.FINISH);
    } catch (e) {}
    scWidget = null;
  }
}

function musicSetPlaying(isPlaying) {
  musicIsPlaying = isPlaying;
  const btn = document.getElementById("musicMiniPlayBtn");
  if (btn) btn.textContent = isPlaying ? "⏸" : "▶";
  const bar = document.getElementById("musicMiniPlayer");
  if (bar) bar.classList.toggle("is-playing", isPlaying);
  musicUpdateMiniVisibility();
}

function musicInitYouTubePlayer(videoId, gen) {
  loadYouTubeAPI().then(function (YTns) {
    if (gen !== musicPlayGeneration) return; // track changed again meanwhile
    const target = document.getElementById("musicEmbedYT");
    if (!target) return;
    ytPlayer = new YTns.Player("musicEmbedYT", {
      videoId: videoId,
      playerVars: { rel: 0, modestbranding: 1, playsinline: 1 },
      events: {
        onReady: function (e) {
          e.target.playVideo();
        },
        onStateChange: function (e) {
          if (e.data === YTns.PlayerState.PLAYING) musicSetPlaying(true);
          else if (e.data === YTns.PlayerState.PAUSED) musicSetPlaying(false);
          else if (e.data === YTns.PlayerState.ENDED) {
            musicSetPlaying(false);
            musicPlayNext();
          }
        },
      },
    });
  });
}

function musicInitSoundCloudPlayer(iframeEl, gen) {
  loadSoundCloudAPI().then(function (SCns) {
    if (gen !== musicPlayGeneration || !iframeEl.isConnected) return;
    scWidget = SCns.Widget(iframeEl);
    scWidget.bind(SCns.Widget.Events.PLAY, function () {
      musicSetPlaying(true);
    });
    scWidget.bind(SCns.Widget.Events.PAUSE, function () {
      musicSetPlaying(false);
    });
    scWidget.bind(SCns.Widget.Events.FINISH, function () {
      musicSetPlaying(false);
      musicPlayNext();
    });
  });
}

function musicToggleMiniPlayPause() {
  if (ytPlayer) {
    const state = ytPlayer.getPlayerState();
    if (state === 1) ytPlayer.pauseVideo();
    else ytPlayer.playVideo();
  } else if (scWidget) {
    scWidget.isPaused(function (paused) {
      if (paused) scWidget.play();
      else scWidget.pause();
    });
  }
}

function musicPlayNext() {
  const songs = getSongsForPlaylist(musicState.playlistId);
  if (!songs.length) return;
  playMusicTrack((musicState.trackIdx + 1) % songs.length);
}
function musicPlayPrev() {
  const songs = getSongsForPlaylist(musicState.playlistId);
  if (!songs.length) return;
  playMusicTrack((musicState.trackIdx - 1 + songs.length) % songs.length);
}

// Stops playback entirely (the actual "✕" on the mini bar) — as
// opposed to minimizing, which leaves the track playing and just
// tucks the bar away behind the reopen nub.
function musicStopPlayback() {
  musicPlayGeneration++;
  musicTeardownPlayer();
  musicIsPlaying = false;
  musicMiniCollapsed = false;
  musicState.currentSongId = null;
  musicState.trackIdx = -1; // so the track list's "nothing selected"
  // fallback doesn't re-highlight the last
  // track as if it were still playing
  const wrap = document.getElementById("musicPlayerWrap");
  if (wrap) wrap.style.display = "none";
  const embed = document.getElementById("musicEmbed");
  if (embed) embed.innerHTML = "";
  musicUpdateMiniVisibility();
  if (typeof renderMusicTracks === "function") renderMusicTracks();
}

// Keeps the mini title/artist/cover in sync with whatever's
// actually loaded in the full player.
function musicSyncMiniPlayer(song, thumbUrl) {
  const titleEl = document.getElementById("musicMiniTitle");
  const artistEl = document.getElementById("musicMiniArtist");
  const coverEl = document.getElementById("musicMiniCover");
  if (titleEl) titleEl.textContent = song.title;
  if (artistEl) artistEl.textContent = song.artist || "";
  if (coverEl) {
    coverEl.classList.toggle("has-art", !!thumbUrl);
    coverEl.style.backgroundImage = thumbUrl ? `url("${thumbUrl}")` : "none";
  }
}

// Decides whether the full mini bar, the small reopen nub, or
// neither should be visible right now: nothing shows unless a
// track is actually loaded, nothing shows while the person is
// looking at the full player on the Music tab itself (it would
// just be a redundant second player), and otherwise it's either
// the full bar or — if they minimized it — just the nub.
function musicUpdateMiniVisibility() {
  const bar = document.getElementById("musicMiniPlayer");
  const nub = document.getElementById("musicMiniNub");
  if (!bar || !nub) return;
  const hasTrack = !!musicState.currentSongId;
  const relevant = hasTrack && activeTab !== "music";
  if (!relevant) {
    bar.hidden = true;
    nub.hidden = true;
    return;
  }
  bar.hidden = musicMiniCollapsed;
  nub.hidden = !musicMiniCollapsed;
}

(function initMusicMiniPlayer() {
  const playBtn = document.getElementById("musicMiniPlayBtn");
  const prevBtn = document.getElementById("musicMiniPrevBtn");
  const nextBtn = document.getElementById("musicMiniNextBtn");
  const stopBtn = document.getElementById("musicMiniStopBtn");
  const collapseBtn = document.getElementById("musicMiniCollapseBtn");
  const nub = document.getElementById("musicMiniNub");
  if (playBtn) playBtn.addEventListener("click", musicToggleMiniPlayPause);
  if (prevBtn) prevBtn.addEventListener("click", musicPlayPrev);
  if (nextBtn) nextBtn.addEventListener("click", musicPlayNext);
  if (stopBtn) stopBtn.addEventListener("click", musicStopPlayback);
  if (collapseBtn) {
    collapseBtn.addEventListener("click", function () {
      musicMiniCollapsed = true;
      musicUpdateMiniVisibility();
    });
  }
  if (nub) {
    nub.addEventListener("click", function () {
      musicMiniCollapsed = false;
      musicUpdateMiniVisibility();
    });
  }
})();

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

  musicPlayGeneration++;
  const gen = musicPlayGeneration;
  musicTeardownPlayer();

  if (source === "soundcloud") {
    const scUrl = song.soundcloudUrl || song.youtubeId || "";
    const playerUrl =
      "https://w.soundcloud.com/player/?url=" +
      encodeURIComponent(scUrl) +
      "&color=%234F6F52&auto_play=true&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false";
    embed.classList.add("soundcloud");
    // No loading="lazy" here: unlike the initial pick made from the
    // visible Music tab, "next"/"prev" from the floating mini player
    // can create this iframe while the Music tab panel is
    // display:none — a lazy iframe never loads in that case, since
    // the browser only fetches it once it's actually visible on
    // screen, so playback would silently never start.
    embed.innerHTML = `<iframe id="musicEmbedFrame" scrolling="no" frameborder="no" allow="autoplay" src="${playerUrl}" title="${song.title}"></iframe>`;
    musicInitSoundCloudPlayer(document.getElementById("musicEmbedFrame"), gen);
    const openLink = document.getElementById("musicOpenLink");
    openLink.href = scUrl.startsWith("http")
      ? scUrl
      : "https://soundcloud.com/" + scUrl;
    openLink.title =
      currentLanguage() === "pt" ? "Abrir no SoundCloud" : "Open on SoundCloud";
  } else {
    const videoId = extractYoutubeId(song.youtubeId);
    embed.classList.remove("soundcloud");
    // A nested target div (rather than handing the YouTube API our
    // own #musicEmbed element directly) keeps the outer .music-embed
    // wrapper — and its sizing/background CSS — intact, since the
    // API fully replaces whatever element it's given with its iframe.
    embed.innerHTML = `<div id="musicEmbedYT"></div>`;
    musicInitYouTubePlayer(videoId, gen);
    const openLink = document.getElementById("musicOpenLink");
    openLink.href = "https://www.youtube.com/watch?v=" + videoId;
    openLink.title =
      currentLanguage() === "pt" ? "Abrir no YouTube" : "Open on YouTube";
  }

  // Cover art: real YouTube thumbnail when we have a video id,
  // otherwise a decorative spinning-disc placeholder (mainly
  // for SoundCloud, which has no simple public thumbnail URL).
  const cover = document.getElementById("musicCoverArt");
  const thumbUrl =
    source !== "soundcloud"
      ? `https://img.youtube.com/vi/${extractYoutubeId(song.youtubeId)}/hqdefault.jpg`
      : "";
  if (cover) {
    cover.innerHTML = thumbUrl
      ? `<img src="${thumbUrl}" alt="" loading="lazy">`
      : '<div class="music-cover-disc"></div>';
    cover.classList.toggle("has-art", !!thumbUrl);
  }
  // Same ambient-glow trick as the movie posters — the chassis
  // picks up a soft wash of the cover art's own colour instead
  // of staying a flat block.
  if (thumbUrl) {
    wrap.style.setProperty("--ambient", `url("${thumbUrl}")`);
    wrap.classList.add("has-ambient");
  } else {
    wrap.classList.remove("has-ambient");
  }

  document.getElementById("musicNowLabelText").textContent = tr("Now playing");
  const titleEl = document.getElementById("musicNowTitle");
  titleEl.textContent = song.title;
  document.getElementById("musicNowArtist").textContent = song.artist || "";
  const desc =
    currentLanguage() === "pt"
      ? song.descriptionPt || song.description || ""
      : song.description || "";
  const descEl = document.getElementById("musicNowDesc");
  descEl.textContent = desc;
  descEl.style.display = desc ? "" : "none";
  // LCD-style ticker: only scrolls if the title actually
  // overflows its row, and only when motion is allowed.
  titleEl.classList.remove("marquee");
  titleEl.style.removeProperty("--marquee-distance");
  const wantsMotion =
    !window.matchMedia ||
    !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (wantsMotion) {
    requestAnimationFrame(() => {
      const overflow = titleEl.scrollWidth - titleEl.clientWidth;
      if (overflow > 4) {
        titleEl.style.setProperty("--marquee-distance", `-${overflow + 18}px`);
        titleEl.classList.add("marquee");
      }
    });
  }
  document
    .getElementById("musicOpenLink")
    .setAttribute("aria-label", document.getElementById("musicOpenLink").title);
  renderMusicTracks();

  // Sync the floating mini bar's title/artist/cover so it's ready
  // to show the moment the person navigates to another tab.
  musicSyncMiniPlayer(song, thumbUrl);
  musicUpdateMiniVisibility();
}

function collectMusicFormPayload() {
  const playlistId =
    document.getElementById("musicAddPlaylist")?.value || musicState.playlistId;
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
  const ytLink = (document.getElementById("musicAddLink")?.value || "").trim();
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
        .update({
          ...payload,
          updatedAt: firebase.firestore.FieldValue.serverTimestamp(),
        })
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
      const idx = musicSongs.findIndex((s) => s.id === musicState.editingId);
      if (idx >= 0) musicSongs[idx] = { ...musicSongs[idx], ...payload };
      clearMusicAddForm();
      setMusicFormMode(false);
      notify("songUpdated");
      if (musicState.playlistId === payload.playlistId) {
        renderMusicTracks();
        const songs = getSongsForPlaylist(payload.playlistId);
        const playIdx = songs.findIndex(
          (s) => s.id === musicState.editingId || s.title === payload.title,
        );
        if (playIdx >= 0) playMusicTrack(playIdx);
      }
    }
    return;
  }

  // ADD — new songs go to the top of their playlist's order (lower
  // "order" values sort first — see getSongsForPlaylist above).
  const existingInPl = getSongsForPlaylist(payload.playlistId);
  const minOrder = existingInPl.reduce(
    (min, s) => Math.min(min, typeof s.order === "number" ? s.order : 0),
    0,
  );
  const orderedPayload = { ...payload, order: minOrder - 1 };

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
      // New song now sorts first, not last.
      playMusicTrack(0);
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
  document.getElementById("musicAddDescEn").value = song.description || "";
  document.getElementById("musicAddDescPt").value = song.descriptionPt || "";
  const source = song.source || "youtube";
  document.querySelectorAll('input[name="musicSource"]').forEach((r) => {
    r.checked = r.value === source;
  });
  updateMusicSourceFields();
  document.getElementById("musicAddLink").value = song.youtubeId || "";
  document.getElementById("musicAddScLink").value = song.soundcloudUrl || "";
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

function startMusicSync() {
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
                createdAt: firebase.firestore.FieldValue.serverTimestamp(),
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
}
musicSongs = seedMusicFromConfig();
initMusic();
registerLazyTabSync("music", startMusicSync);

/* ================================================================
   OUR MEMORIES — live photo uploads
   ----------------------------------------------------------------
   Firestore ("memories") stores the caption, date and URL as text; the
   image itself lives on Cloudinary's free tier, since Firebase Storage
   now requires a paid plan. Photos are resized in the browser first.
   ================================================================ */
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
        ? "Sincronizado — visível para os dois"
        : "Synced — visible to both of you";
    pill.className = "bucket-sync-pill live";
  } else {
    pill.textContent =
      currentLanguage() === "pt"
        ? "Ainda não sincronizado (só neste aparelho)"
        : "Not synced yet (this device only)";
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
  const okMime = !mime || (mime.startsWith("image/") && !mime.includes("webp"));
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
    if (title) title.textContent = isPt ? "Editar foto" : "Edit photo";
    if (btn) btn.textContent = isPt ? "Salvar" : "Save";
    if (cancel) cancel.style.display = "";
    if (photoLabel)
      photoLabel.textContent = isPt
        ? "Nova foto (opcional)"
        : "New photo (optional)";
  } else {
    if (title)
      title.textContent = isPt ? "Adicionar uma foto" : "Add a photo";
    if (btn) btn.textContent = isPt ? "Adicionar" : "Add Memory";
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
    statusEl.textContent = isPt ? "Escolha um álbum." : "Choose an album.";
    return;
  }
  if (file && !isCloudinaryConfigured()) {
    statusEl.textContent = isPt
      ? "Configure o Cloudinary primeiro (veja docs/cloudinary-setup.md)."
      : "Cloudinary isn't set up yet (see docs/cloudinary-setup.md).";
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
          .update({
            ...payload,
            updatedAt: firebase.firestore.FieldValue.serverTimestamp(),
          });
      } else {
        const idx = memoriesItems.findIndex((x) => x.id === memoryEditingId);
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

document.getElementById("memoryUploadBtn").addEventListener("click", addMemory);
document
  .getElementById("memoryCancelEditBtn")
  ?.addEventListener("click", clearMemoryForm);

fillMemoryAlbumSelect();
setMemoriesSyncPill();
renderMemories();
function startMemoriesSync() {
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
}
registerLazyTabSync("album", startMemoriesSync);

// Custom album folders (collection "albums") — same Firestore app as memories
function startAlbumsSync() {
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
}
registerLazyTabSync("album", startAlbumsSync);

/* ================================================================
   SHARED CALENDAR
   ----------------------------------------------------------------
   Month view plus events for each person, synced through the
   "calendar" collection. Events can repeat daily, weekly, monthly or
   yearly. Change notifications use the same last-seen system as the
   Bucket List and Music.
   ================================================================ */
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
        ? "Sincronizado — a agenda dos dois aparece aqui"
        : "Synced — both of your schedules show up here";
    pill.className = "bucket-sync-pill cal-sync-pill live";
  } else {
    pill.textContent =
      currentLanguage() === "pt"
        ? "Ainda não sincronizado (só neste aparelho)"
        : "Not synced yet (this device only)";
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
  if (repeat === "yearly") {
    // Same month/day every year (skip Feb 29 in non-leap years)
    return dm === sm && dd === sd;
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
      ev.marker === "star" || ev.marker === "heart" || ev.marker === "square"
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
    kind === "deleted" ? "deleted" : kind === "updated" ? "updated" : "created";
  showToast(messages[kind] || messages.created, toastKind);
  if (kind === "created") markSelfWrite("calendar");
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
  const daysInMonth = new Date(calState.year, calState.month + 1, 0).getDate();
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
      (marker === "star"
        ? " ★"
        : marker === "heart"
          ? " ♥"
          : marker === "square"
            ? " ■"
            : "");
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
      ev.marker === "star" || ev.marker === "heart" || ev.marker === "square"
        ? ev.marker
        : "circle";
    let timeStr = "";
    if (ev.startTime && ev.endTime) timeStr = ev.startTime + " – " + ev.endTime;
    else if (ev.startTime) timeStr = ev.startTime;
    else if (ev.endTime) timeStr = "– " + ev.endTime;
    const markChar =
      marker === "star"
        ? "★ "
        : marker === "heart"
          ? "♥ "
          : marker === "square"
            ? "■ "
            : "";
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
    if (ev.notes) row.querySelector(".cal-event-notes").textContent = ev.notes;
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
    if (heading) heading.textContent = tr("Edit event");
    if (btn) btn.textContent = tr("Save event");
    if (cancel) cancel.style.display = "";
  } else {
    if (heading) heading.textContent = tr("Add to the calendar");
    if (btn) btn.textContent = tr("Add event");
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
  ["calTitle", "calStart", "calEnd", "calNotes", "calRepeatUntil"].forEach(
    (id) => {
      const el = document.getElementById(id);
      if (el) el.value = "";
    },
  );
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
  document.getElementById("calPerson").value = calNormalizePerson(ev.person);
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
      ev.marker === "star" || ev.marker === "heart" || ev.marker === "square"
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
  const startTime = (document.getElementById("calStart")?.value || "").trim();
  const endTime = (document.getElementById("calEnd")?.value || "").trim();
  const notes = (document.getElementById("calNotes")?.value || "").trim();
  const repeat = document.getElementById("calRepeat")?.value || "none";
  const repeatUntil = (
    document.getElementById("calRepeatUntil")?.value || ""
  ).trim();
  const rawMarker = document.getElementById("calMarker")?.value || "circle";
  const marker =
    rawMarker === "star" || rawMarker === "heart" || rawMarker === "square"
      ? rawMarker
      : "circle";
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
      isPt ? "Escreve o que é o evento." : "Please enter what the event is.",
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
        .update({
          ...payload,
          updatedAt: firebase.firestore.FieldValue.serverTimestamp(),
        })
        .then(() => finishCalWrite("updated", payload.date))
        .catch(() => {
          const idx = calEvents.findIndex((e) => e.id === editingId);
          if (idx >= 0) calEvents[idx] = { ...calEvents[idx], ...payload };
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

  if (calSyncLive && calDb && ev.id && !String(ev.id).startsWith("local-")) {
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
    const bothLabel = currentLanguage() === "pt" ? "Os dois" : "Both of us";
    personSel.innerHTML = `
      <option value="me">${meName}</option>
      <option value="her">${herName}</option>
      <option value="both">${bothLabel}</option>
    `;
  }
  const filterBoth = document.getElementById("calFilterBoth");
  if (filterBoth) {
    filterBoth.textContent = currentLanguage() === "pt" ? "Os dois" : "Both";
  }

  document.getElementById("calPrevMonth")?.addEventListener("click", () => {
    calState.month--;
    if (calState.month < 0) {
      calState.month = 11;
      calState.year--;
    }
    renderCalendar();
  });
  document.getElementById("calNextMonth")?.addEventListener("click", () => {
    calState.month++;
    if (calState.month > 11) {
      calState.month = 0;
      calState.year++;
    }
    renderCalendar();
  });
  document.querySelectorAll("#calFilters .cal-filter-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      calState.filter = btn.dataset.filter || "all";
      document
        .querySelectorAll("#calFilters .cal-filter-btn")
        .forEach((b) => b.classList.toggle("active", b === btn));
      renderCalendar();
    });
  });
  document.getElementById("calAddBtn")?.addEventListener("click", saveCalEvent);
  document
    .getElementById("calCancelEditBtn")
    ?.addEventListener("click", clearCalForm);

  // Link a bucket-list item → fill title if empty
  document.getElementById("calBucketLink")?.addEventListener("change", () => {
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
  calState.selected = calDateKey(t.getFullYear(), t.getMonth(), t.getDate());
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
          if (typeof renderTodayWidget === "function") renderTodayWidget();
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

/* ================================================================
   DAY CARDS
   ----------------------------------------------------------------
   Short notes to each other (optionally with a voice recording). They
   expire after 24 hours unless saved. Read aloud with the browser's
   text-to-speech. Firestore collection: "daycards".
   ================================================================ */
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
  if (daycardMediaRecorder && daycardMediaRecorder.state === "recording") {
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
        btn.textContent = isPt ? "Gravar" : "Record";
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
      if (daycardMediaRecorder && daycardMediaRecorder.state === "recording") {
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
        ? "Sincronizado — os dois veem os cartões"
        : "Synced — both of you see the cards";
    pill.className = "bucket-sync-pill live";
  } else {
    pill.textContent =
      currentLanguage() === "pt"
        ? "Ainda não sincronizado (só neste aparelho)"
        : "Not synced yet (this device only)";
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

function daycardIsFromToday(card) {
  if (!card) return false;
  const ms =
    typeof daycardTimeMs === "function" ? daycardTimeMs(card.createdAt) : 0;
  if (!ms) return false;
  const d = new Date(ms);
  const now = new Date();
  return (
    d.getFullYear() === now.getFullYear() &&
    d.getMonth() === now.getMonth() &&
    d.getDate() === now.getDate()
  );
}
const TODAY_NO_CARD_MSGS = {
  en: [
    "No day card from today yet. Write something to your partner — don't forget about them! 💌",
    "Silence today? Your partner is somewhere wondering if you still remember their existence. Fix that. 😅",
    "No card today. This is your sign to say something sweet before you get distracted again.",
    "Nothing written today... yet. A tiny message now beats a big apology later.",
    "Today's card is empty. Your person deserves at least one sentence about them today.",
    "You haven't written today's card. Yes, this message is judging you a little. Go fix it.",
  ],
  pt: [
    "Ainda sem cartão hoje. Escreve algo pro seu par — não esquece dele(a)! 💌",
    "Silêncio hoje? Seu par tá em algum lugar se perguntando se você ainda lembra que ele(a) existe. Resolve isso. 😅",
    "Sem cartão hoje. Essa é a deixa pra mandar algo fofo antes de se distrair de novo.",
    "Nada escrito hoje... ainda. Uma mensagem pequena agora vale mais que um pedido de desculpas grande depois.",
    "O cartão de hoje tá vazio. Sua pessoa merece pelo menos uma frase sobre ela hoje.",
    "Você ainda não escreveu o cartão de hoje. Sim, essa mensagem tá te julgando um pouquinho. Vai lá resolver.",
  ],
};
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
  if (h > 0) return isPt ? `Expira em ${h}h ${m}m` : `Expires in ${h}h ${m}m`;
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
    .sort((a, b) => daycardTimeMs(b.createdAt) - daycardTimeMs(a.createdAt));
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
        speakBtn.addEventListener("click", () => speakDaycard(card.text || ""));
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
      setDaycardAudioStatus(isPt ? "A enviar áudio…" : "Uploading audio…");
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
    if (btn) spawnHeartBurst(btn, 5);
    markSelfWrite("daycards");
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
      .update({
        saved: true,
        expiresAt: null,
        updatedAt: firebase.firestore.FieldValue.serverTimestamp(),
      })
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
      .update({
        saved: false,
        expiresAt: newExpiry,
        updatedAt: firebase.firestore.FieldValue.serverTimestamp(),
      })
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
    recBtn.textContent = currentLanguage() === "pt" ? "Gravar" : "Record";
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
          if (typeof renderTodayWidget === "function") renderTodayWidget();
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

/* ================================================================
   BOUQUET
   ----------------------------------------------------------------
   A digital bouquet arranged on a notebook page, like stickers in the
   photo booth. Pick one wrap, add as many flowers and bows as you like,
   then drag / resize / rotate / reorder them on a canvas. Stays fresh
   for a week, then wilts and deletes itself — or is replaced the moment
   a new one is made. Can be saved as a PNG (with or without the page).

   Firestore: "bouquets" (kept to at most one live document). Items store
   flower ids and 0..1 positions, not image paths. The current bouquet
   also appears in the Today widget on the home page.
   Art lives in assets/stickers/ (flower-*, bouquet-wrap-*, *-bow).
   ================================================================ */
const BOUQUET_FLOWERS = [
  { id: "white-pink-lily", label: "White & Pink Lily", src: "assets/stickers/flower-white-pink-lily.png" },
  { id: "bright-pink-hibiscus", label: "Bright Pink Hibiscus", src: "assets/stickers/flower-bright-pink-hibiscus.png" },
  { id: "pale-pink-orchid", label: "Pale Pink Orchid", src: "assets/stickers/flower-pale-pink-orchid.png" },
  { id: "blue-periwinkle", label: "Blue Periwinkle", src: "assets/stickers/flower-blue-periwinkle.png" },
  { id: "green-gerbera-daisy", label: "Green Gerbera Daisy", src: "assets/stickers/flower-green-gerbera-daisy-1.png" },
  { id: "iridescent-bloom", label: "Iridescent Bloom", src: "assets/stickers/flower-iridescent-glass.png" },
  { id: "leopard-print-lily", label: "Leopard Print Lily", src: "assets/stickers/flower-leopard-print-lily.png" },
  { id: "purple-cornflower", label: "Purple Cornflower", src: "assets/stickers/flower-purple-cornflower.png" },
  { id: "cream-lily", label: "Cream Lily", src: "assets/stickers/flower-cream-lily.png" },
  { id: "cream-plumeria", label: "Cream Plumeria", src: "assets/stickers/flower-cream-plumeria.png" },
  { id: "dark-red-lily", label: "Dark Red Lily", src: "assets/stickers/flower-dark-red-lily.png" },
  { id: "golden-lily", label: "Golden Lily", src: "assets/stickers/flower-golden-lily.png" },
];
// Backgrounds already removed — these are transparent PNGs now, so the wrap
// sits right on the notebook page instead of showing a white box.
const BOUQUET_WRAPS = [
  { id: "kraft", label: "Kraft Wrap", src: "assets/stickers/bouquet-wrap-beige.png" },
  { id: "white", label: "White Wrap", src: "assets/stickers/bouquet-wrap-white.png" },
  { id: "black", label: "Black Wrap", src: "assets/stickers/bouquet-wrap-black.png" },
  { id: "pink", label: "Pink Wrap", src: "assets/stickers/bouquet-wrap-pink.png" },
  { id: "newspaper", label: "Newspaper Wrap", src: "assets/stickers/bouquet-wrap-newspaper.png" },
];
// Bows sit in the same palette as the flowers — same drag/resize/rotate
// behavior, just a different picture. bouquetFlowerById() looks them up
// alongside BOUQUET_FLOWERS so the drawing code needs no changes.
const BOUQUET_BOWS = [
  { id: "brown-satin-bow", label: "Brown Satin Bow", src: "assets/stickers/brown-satin-bow.png" },
  { id: "blue-striped-bow", label: "Blue Striped Bow", src: "assets/stickers/blue-striped-bow.png" },
  { id: "green-plaid-bow", label: "Green Plaid Bow", src: "assets/stickers/green-plaid-bow.png" },
];
const BOUQUET_LIFETIME_MS = 7 * 24 * 60 * 60 * 1000; // saved for a week, then it deletes itself
const BOUQUET_STAGE_W = 600;
const BOUQUET_STAGE_H = 720;

let bouquetDb = null;
let bouquetSyncLive = false;
let bouquets = []; // Firestore docs, newest first — kept to at most one live entry
let bouquetItems = []; // builder state: [{ uid, flowerId, x, y, scale, rot, behindWrap }] x/y are 0..1 fractions of the stage
let bouquetWrapChoice = BOUQUET_WRAPS[0].id; // exactly one wrap, always
let bouquetSelectedUid = null;
let bouquetDragUid = null;
let bouquetDragOffset = { x: 0, y: 0 };
let bouquetDragMoved = false;
let bouquetUidSeq = 1;
let bouquetRafPending = false;
const bouquetImgCache = {};
let bouquetImagesLoaded = false;
let bouquetImagesLoading = false;
const bouquetImagesWaiters = [];
let bouquetBuilderBgCanvas = null; // offscreen cache: notebook + wrap only, redrawn just on wrap change

function bouquetFlowerById(id) {
  return (
    BOUQUET_FLOWERS.find((f) => f.id === id) ||
    BOUQUET_BOWS.find((f) => f.id === id) ||
    null
  );
}
function bouquetWrapById(id) {
  return BOUQUET_WRAPS.find((w) => w.id === id) || BOUQUET_WRAPS[0];
}

function bouquetComputeWeekEnd(fromMs) {
  return (fromMs || Date.now()) + BOUQUET_LIFETIME_MS;
}

function bouquetIsWilted(b) {
  if (!b) return false;
  const end = b.weekEnd || bouquetComputeWeekEnd(itemTimeMs(b.createdAt));
  return Date.now() > end;
}

function bouquetRemainingLabel(b) {
  const isPt = currentLanguage() === "pt";
  if (bouquetIsWilted(b)) return "🥀 " + (isPt ? "Murcho" : "Wilted");
  const end = b.weekEnd || bouquetComputeWeekEnd(itemTimeMs(b.createdAt));
  const left = end - Date.now();
  const days = Math.floor(left / 86400000);
  const hours = Math.floor((left % 86400000) / 3600000);
  if (days > 0)
    return isPt
      ? `Fresco por mais ${days}d ${hours}h`
      : `Fresh for ${days}d ${hours}h more`;
  const mins = Math.floor((left % 3600000) / 60000);
  if (hours > 0)
    return isPt
      ? `Fresco por mais ${hours}h ${mins}m`
      : `Fresh for ${hours}h ${mins}m more`;
  return isPt
    ? `Murchando em ${Math.max(0, mins)}m`
    : `Wilting in ${Math.max(0, mins)}m`;
}

function bouquetSetSyncPill() {
  const pill = document.getElementById("bouquetSyncPill");
  if (!pill) return;
  if (bouquetSyncLive) {
    pill.textContent =
      currentLanguage() === "pt"
        ? "Sincronizado — os dois veem o buquê"
        : "Synced — both of you see the bouquet";
    pill.className = "bucket-sync-pill live";
  } else {
    pill.textContent =
      currentLanguage() === "pt"
        ? "Ainda não sincronizado (só neste aparelho)"
        : "Not synced yet (this device only)";
    pill.className = "bucket-sync-pill local";
  }
}

// ---- image preloading, done lazily the first time a bouquet is actually
// drawn (tab opened, builder opened, or the Today card needs it) instead of
// blocking page load with 17 images nobody may look at yet ----
function bouquetEnsureImages(cb) {
  if (bouquetImagesLoaded) {
    if (cb) cb();
    return;
  }
  if (cb) bouquetImagesWaiters.push(cb);
  if (bouquetImagesLoading) return;
  bouquetImagesLoading = true;
  const all = BOUQUET_FLOWERS.concat(BOUQUET_WRAPS, BOUQUET_BOWS);
  let remaining = all.length;
  const done = () => {
    remaining -= 1;
    if (remaining <= 0) {
      bouquetImagesLoaded = true;
      bouquetImagesLoading = false;
      const waiters = bouquetImagesWaiters.splice(0);
      waiters.forEach((fn) => fn());
    }
  };
  if (!remaining) {
    bouquetImagesLoaded = true;
    bouquetImagesLoading = false;
    return;
  }
  all.forEach((d) => {
    if (bouquetImgCache[d.src]) {
      done();
      return;
    }
    const img = new Image();
    img.onload = done;
    img.onerror = done;
    img.src = d.src;
    bouquetImgCache[d.src] = img;
  });
}

// ---- notebook-paper background, matching the photo booth's Notebook backdrop ----
function bouquetPaintNotebook(ctx, W, H) {
  ctx.fillStyle = "#fbf8f1";
  ctx.fillRect(0, 0, W, H);
  ctx.strokeStyle = "rgba(110,160,200,0.4)";
  ctx.lineWidth = 1;
  ctx.beginPath();
  for (let y = 36; y < H; y += 36) {
    ctx.moveTo(0, y + 0.5);
    ctx.lineTo(W, y + 0.5);
  }
  ctx.stroke();
  ctx.strokeStyle = "rgba(235,120,120,0.55)";
  ctx.beginPath();
  ctx.moveTo(44.5, 0);
  ctx.lineTo(44.5, H);
  ctx.stroke();
}

function bouquetDrawWrap(ctx, W, H, wrapId) {
  const wrap = bouquetWrapById(wrapId);
  const wrapImg = wrap && bouquetImgCache[wrap.src];
  if (wrapImg && wrapImg.complete && wrapImg.naturalWidth) {
    const wW = W * 0.72;
    const wH = wW * (wrapImg.naturalHeight / wrapImg.naturalWidth);
    ctx.drawImage(wrapImg, (W - wW) / 2, H - wH - H * 0.03, wW, wH);
  }
}

function bouquetDrawItem(ctx, W, H, it, selected) {
  const f = bouquetFlowerById(it.flowerId);
  const img = f && bouquetImgCache[f.src];
  if (!img || !img.complete || !img.naturalWidth) return;
  const bW = W * 0.34 * (it.scale || 1);
  const bH = bW * (img.naturalHeight / img.naturalWidth);
  ctx.save();
  ctx.translate((it.x || 0.5) * W, (it.y || 0.4) * H);
  ctx.rotate(((it.rot || 0) * Math.PI) / 180);
  ctx.drawImage(img, -bW / 2, -bH / 2, bW, bH);
  if (selected) {
    ctx.strokeStyle = "rgba(201,166,107,0.95)";
    ctx.lineWidth = 2;
    ctx.setLineDash([6, 4]);
    ctx.strokeRect(-bW / 2 - 5, -bH / 2 - 5, bW + 10, bH + 10);
  }
  ctx.restore();
}

// Ground-truth full render — background + wrap + every item, from scratch.
// Used for the current-bouquet card, the Today widget and PNG export, none
// of which redraw more than a few times a minute. Items flagged
// `behindWrap` are drawn before the wrap image (tucked stems), everything
// else is drawn on top of it, front-to-back order within each group taken
// straight from the items array (last = frontmost).
function bouquetDrawScene(ctx, W, H, wrapId, items, opts) {
  opts = opts || {};
  ctx.clearRect(0, 0, W, H);
  if (opts.withBackground !== false) bouquetPaintNotebook(ctx, W, H);
  (items || [])
    .filter((it) => it.behindWrap)
    .forEach((it) => {
      bouquetDrawItem(ctx, W, H, it, opts.selectedUid && opts.selectedUid === it.uid);
    });
  bouquetDrawWrap(ctx, W, H, wrapId);
  (items || [])
    .filter((it) => !it.behindWrap)
    .forEach((it) => {
      bouquetDrawItem(ctx, W, H, it, opts.selectedUid && opts.selectedUid === it.uid);
    });
}

// ---- the interactive builder stage: the notebook paper is cached to an
// offscreen canvas so dragging a flower only costs one cheap blit plus the
// items and wrap themselves, instead of repainting the notebook lines
// every frame ----
function bouquetRebuildBuilderBg() {
  if (!bouquetBuilderBgCanvas) {
    bouquetBuilderBgCanvas = document.createElement("canvas");
    bouquetBuilderBgCanvas.width = BOUQUET_STAGE_W;
    bouquetBuilderBgCanvas.height = BOUQUET_STAGE_H;
  }
  const ctx = bouquetBuilderBgCanvas.getContext("2d");
  ctx.clearRect(0, 0, BOUQUET_STAGE_W, BOUQUET_STAGE_H);
  bouquetPaintNotebook(ctx, BOUQUET_STAGE_W, BOUQUET_STAGE_H);
}

function bouquetRenderBuilderStage() {
  const canvas = document.getElementById("bouquetStage");
  if (!canvas || canvas.hidden || canvas.closest("[hidden]")) return;
  if (!bouquetImagesLoaded) {
    bouquetEnsureImages(() => {
      bouquetRebuildBuilderBg();
      bouquetRenderBuilderStage();
    });
    return;
  }
  if (!bouquetBuilderBgCanvas) bouquetRebuildBuilderBg();
  const ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, BOUQUET_STAGE_W, BOUQUET_STAGE_H);
  ctx.drawImage(bouquetBuilderBgCanvas, 0, 0);
  bouquetItems
    .filter((it) => it.behindWrap)
    .forEach((it) => {
      bouquetDrawItem(ctx, BOUQUET_STAGE_W, BOUQUET_STAGE_H, it, it.uid === bouquetSelectedUid);
    });
  bouquetDrawWrap(ctx, BOUQUET_STAGE_W, BOUQUET_STAGE_H, bouquetWrapChoice);
  bouquetItems
    .filter((it) => !it.behindWrap)
    .forEach((it) => {
      bouquetDrawItem(ctx, BOUQUET_STAGE_W, BOUQUET_STAGE_H, it, it.uid === bouquetSelectedUid);
    });
}

function bouquetRequestBuilderRender() {
  if (bouquetRafPending) return;
  bouquetRafPending = true;
  requestAnimationFrame(() => {
    bouquetRafPending = false;
    bouquetRenderBuilderStage();
  });
}

function bouquetRenderToolbar() {
  const bar = document.getElementById("bouquetItemToolbar");
  if (!bar) return;
  const it = bouquetItems.find((x) => x.uid === bouquetSelectedUid);
  bar.hidden = !it;
  const behindBtn = document.getElementById("bouquetBehindWrapBtn");
  if (behindBtn) {
    const isBehind = !!(it && it.behindWrap);
    behindBtn.classList.toggle("active", isBehind);
    const isPt = currentLanguage() === "pt";
    behindBtn.title = isBehind
      ? isPt
        ? "Trazer para a frente do embrulho"
        : "Bring in front of wrap"
      : isPt
        ? "Esconder atrás do embrulho"
        : "Tuck behind wrap";
  }
}

function renderBouquetPaletteCounts() {
  const label = document.getElementById("bouquetCountLabel");
  if (!label) return;
  const n = bouquetItems.length;
  const isPt = currentLanguage() === "pt";
  label.textContent = isPt
    ? n === 1
      ? "1 flor adicionada"
      : `${n} flores adicionadas`
    : n === 1
      ? "1 bloom added"
      : `${n} blooms added`;
}

function bouquetAddFlower(flowerId) {
  const uid = "f" + bouquetUidSeq++;
  bouquetItems.push({
    uid,
    flowerId,
    x: 0.5 + (Math.random() - 0.5) * 0.34,
    y: 0.36 + (Math.random() - 0.5) * 0.18,
    scale: 1,
    rot: (Math.random() - 0.5) * 20,
  });
  bouquetSelectedUid = uid;
  bouquetRenderBuilderStage();
  bouquetRenderToolbar();
  renderBouquetPaletteCounts();
}

function renderBouquetPalette() {
  const pal = document.getElementById("bouquetPalette");
  if (!pal) return;
  pal.innerHTML = "";
  BOUQUET_FLOWERS.forEach((f) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "bouquet-flower-btn";
    btn.innerHTML = `<img src="${f.src}" alt="" loading="lazy"><span>${tr(f.label)}</span>`;
    btn.addEventListener("click", () => bouquetAddFlower(f.id));
    pal.appendChild(btn);
  });
  const bowLabel = document.createElement("div");
  bowLabel.className = "bouquet-palette-divider";
  bowLabel.textContent = tr("Bows");
  pal.appendChild(bowLabel);
  BOUQUET_BOWS.forEach((f) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "bouquet-flower-btn";
    btn.innerHTML = `<img src="${f.src}" alt="" loading="lazy"><span>${tr(f.label)}</span>`;
    btn.addEventListener("click", () => bouquetAddFlower(f.id));
    pal.appendChild(btn);
  });
  renderBouquetPaletteCounts();
}

function renderBouquetWrapSwatches() {
  const wrap = document.getElementById("bouquetWrapSwatches");
  if (!wrap) return;
  wrap.innerHTML = "";
  BOUQUET_WRAPS.forEach((w) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className =
      "bouquet-wrap-swatch" + (bouquetWrapChoice === w.id ? " active" : "");
    btn.innerHTML = `<img src="${w.src}" alt="" loading="lazy">`;
    btn.title = tr(w.label);
    btn.addEventListener("click", () => {
      bouquetWrapChoice = w.id;
      renderBouquetWrapSwatches();
      bouquetRebuildBuilderBg();
      bouquetRenderBuilderStage();
    });
    wrap.appendChild(btn);
  });
}

function bouquetAdjustSelected(prop, delta) {
  const it = bouquetItems.find((x) => x.uid === bouquetSelectedUid);
  if (!it) return;
  if (prop === "scale") it.scale = Math.min(1.8, Math.max(0.5, (it.scale || 1) + delta));
  if (prop === "rot") it.rot = ((it.rot || 0) + delta + 360) % 360;
  bouquetRenderBuilderStage();
}

// ---- layering: manual front/back order among flowers, plus tucking a
// flower behind the paper wrap entirely (drawn before the wrap image) ----
function bouquetReorderSelected(dir) {
  const idx = bouquetItems.findIndex((x) => x.uid === bouquetSelectedUid);
  if (idx === -1) return;
  const [it] = bouquetItems.splice(idx, 1);
  if (dir === "front") bouquetItems.push(it);
  else bouquetItems.unshift(it);
  bouquetRenderBuilderStage();
}

function bouquetToggleBehindWrap() {
  const it = bouquetItems.find((x) => x.uid === bouquetSelectedUid);
  if (!it) return;
  it.behindWrap = !it.behindWrap;
  bouquetRenderBuilderStage();
  bouquetRenderToolbar();
}

function bouquetRemoveSelected() {
  bouquetItems = bouquetItems.filter((x) => x.uid !== bouquetSelectedUid);
  bouquetSelectedUid = null;
  bouquetRenderBuilderStage();
  bouquetRenderToolbar();
  renderBouquetPaletteCounts();
}

// ---- drag to arrange, straight on the canvas — like a sticker in the photo booth ----
function bouquetEventToStage(canvas, evt) {
  const rect = canvas.getBoundingClientRect();
  return {
    x: (evt.clientX - rect.left) / rect.width,
    y: (evt.clientY - rect.top) / rect.height,
  };
}

function bouquetHitTest(pt) {
  const px = pt.x * BOUQUET_STAGE_W;
  const py = pt.y * BOUQUET_STAGE_H;
  for (let i = bouquetItems.length - 1; i >= 0; i--) {
    const it = bouquetItems[i];
    const ix = it.x * BOUQUET_STAGE_W;
    const iy = it.y * BOUQUET_STAGE_H;
    // Kept tighter than the flower's drawn size (0.34 wide) so overlapping
    // blooms are each easy to grab individually instead of one big blob
    // of shared hit area.
    const half = (BOUQUET_STAGE_W * 0.15 * (it.scale || 1)) / 2 + 3;
    if (Math.abs(px - ix) <= half && Math.abs(py - iy) <= half) return it;
  }
  return null;
}

function bouquetStagePointerDown(evt) {
  const canvas = evt.currentTarget;
  const pt = bouquetEventToStage(canvas, evt);
  const hit = bouquetHitTest(pt);
  bouquetDragMoved = false;
  if (hit) {
    bouquetSelectedUid = hit.uid;
    bouquetDragUid = hit.uid;
    bouquetDragOffset = { x: pt.x - hit.x, y: pt.y - hit.y };
    try {
      canvas.setPointerCapture(evt.pointerId);
    } catch (e) {}
    evt.preventDefault();
  } else {
    bouquetSelectedUid = null;
  }
  bouquetRenderBuilderStage();
  bouquetRenderToolbar();
}

function bouquetStagePointerMove(evt) {
  if (!bouquetDragUid) return;
  const canvas = evt.currentTarget;
  const pt = bouquetEventToStage(canvas, evt);
  const it = bouquetItems.find((x) => x.uid === bouquetDragUid);
  if (!it) return;
  bouquetDragMoved = true;
  it.x = Math.min(0.95, Math.max(0.05, pt.x - bouquetDragOffset.x));
  it.y = Math.min(0.95, Math.max(0.05, pt.y - bouquetDragOffset.y));
  bouquetRequestBuilderRender();
  evt.preventDefault();
}

function bouquetStagePointerUp() {
  bouquetDragUid = null;
}

// ---- save the finished bouquet to the device, with or without the notebook page ----
function bouquetDownload(b, withBackground) {
  bouquetEnsureImages(() => {
    const scale = 2;
    const off = document.createElement("canvas");
    off.width = BOUQUET_STAGE_W * scale;
    off.height = BOUQUET_STAGE_H * scale;
    const ctx = off.getContext("2d");
    ctx.scale(scale, scale);
    bouquetDrawScene(ctx, BOUQUET_STAGE_W, BOUQUET_STAGE_H, b.wrap, b.items || [], {
      withBackground,
    });
    off.toBlob((blob) => {
      if (!blob) return;
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "bouquet" + (withBackground ? "" : "-no-background") + ".png";
      document.body.appendChild(a);
      a.click();
      a.remove();
      setTimeout(() => URL.revokeObjectURL(url), 4000);
    }, "image/png");
  });
}

function renderBouquetCurrent() {
  const wrapEl = document.getElementById("bouquetCurrent");
  const emptyEl = document.getElementById("bouquetEmpty");
  const canvas = document.getElementById("bouquetCurrentStage");
  const fromEl = document.getElementById("bouquetCurrentFrom");
  const countdownEl = document.getElementById("bouquetCountdown");
  const noteEl = document.getElementById("bouquetCurrentNote");
  const delBtn = document.getElementById("bouquetDeleteBtn");
  const saveBgBtn = document.getElementById("bouquetSaveBgBtn");
  const saveNoBgBtn = document.getElementById("bouquetSaveNoBgBtn");
  if (!wrapEl || !canvas) return;
  const current = bouquets[0];
  if (!current) {
    wrapEl.hidden = true;
    if (emptyEl) emptyEl.hidden = false;
    renderTodayBouquet();
    return;
  }
  wrapEl.hidden = false;
  if (emptyEl) emptyEl.hidden = true;
  bouquetEnsureImages(() => {
    bouquetDrawScene(canvas.getContext("2d"), BOUQUET_STAGE_W, BOUQUET_STAGE_H, current.wrap, current.items || [], {
      withBackground: true,
    });
  });
  const wilted = bouquetIsWilted(current);
  canvas.classList.toggle("wilted", wilted);
  const who = current.from === "her" ? "her" : "me";
  if (fromEl)
    fromEl.textContent =
      (currentLanguage() === "pt" ? "De " : "From ") +
      (who === "her" ? CONFIG.names.her : CONFIG.names.me);
  if (countdownEl) {
    countdownEl.textContent = bouquetRemainingLabel(current);
    countdownEl.classList.toggle("wilted", wilted);
  }
  const hasNote = !!(current.note && String(current.note).trim());
  if (noteEl) {
    noteEl.hidden = !hasNote;
    if (hasNote) noteEl.textContent = current.note;
  }
  if (delBtn) {
    delBtn.hidden = false;
    delBtn.textContent = tr("Delete");
    delBtn.onclick = () => deleteBouquet(current);
  }
  if (saveBgBtn) saveBgBtn.onclick = () => bouquetDownload(current, true);
  if (saveNoBgBtn) saveNoBgBtn.onclick = () => bouquetDownload(current, false);
  renderTodayBouquet();
}

// ---- small bouquet card on the Today widget ----
function renderTodayBouquet() {
  const box = document.getElementById("todayBouquetBody");
  if (!box) return;
  const isPt = currentLanguage() === "pt";
  const current = bouquets[0];
  if (!current) {
    box.innerHTML = `<p class="today-empty">${isPt ? "Ainda sem buquê" : "No bouquet yet"}</p>
            <button type="button" class="today-link" data-go="bouquet">${isPt ? "Montar um" : "Build one"}</button>`;
  } else {
    const wilted = bouquetIsWilted(current);
    box.innerHTML = `<canvas class="today-bouquet-stage${wilted ? " wilted" : ""}" width="${BOUQUET_STAGE_W}" height="${BOUQUET_STAGE_H}"></canvas>
            <p class="today-bouquet-countdown"></p>
            <button type="button" class="today-link" data-go="bouquet">${isPt ? "Ver buquê" : "See bouquet"}</button>`;
    box.querySelector(".today-bouquet-countdown").textContent = bouquetRemainingLabel(current);
    const canvas = box.querySelector("canvas");
    bouquetEnsureImages(() => {
      bouquetDrawScene(canvas.getContext("2d"), BOUQUET_STAGE_W, BOUQUET_STAGE_H, current.wrap, current.items || [], {
        withBackground: true,
      });
    });
  }
  box.querySelectorAll("[data-go]").forEach((btn) => {
    btn.addEventListener("click", () =>
      switchTab(btn.dataset.go, { updateHash: true, scroll: true }),
    );
  });
}

// deletes any doc older than its week, straight out of the database
function bouquetPurgeExpired() {
  const now = Date.now();
  const expired = bouquets.filter(
    (b) => (b.weekEnd || bouquetComputeWeekEnd(itemTimeMs(b.createdAt))) < now,
  );
  if (!expired.length) return;
  if (bouquetSyncLive && bouquetDb) {
    expired.forEach((b) => {
      if (b.id && !String(b.id).startsWith("local-")) {
        bouquetDb.collection("bouquets").doc(b.id).delete().catch(() => {});
      }
    });
  }
  bouquets = bouquets.filter((b) => expired.indexOf(b) === -1);
}

// ---- collapsible "Build a bouquet" panel — closable, and images/canvas
// only spin up the first time it's actually opened ----
function bouquetSetBuilderOpen(open) {
  const btn = document.getElementById("bouquetBuildToggle");
  const panel = document.getElementById("bouquetForm");
  const hint = document.getElementById("bouquetBuildHint");
  if (!btn || !panel) return;
  const isPt = currentLanguage() === "pt";
  btn.setAttribute("aria-expanded", open ? "true" : "false");
  panel.hidden = !open;
  if (hint) hint.textContent = open ? (isPt ? "Toque para fechar" : "Tap to close") : (isPt ? "Toque para abrir" : "Tap to open");
  if (open) {
    bouquetEnsureImages(() => {
      bouquetRebuildBuilderBg();
      bouquetRenderBuilderStage();
    });
  }
}

function initBouquetBuildToggle() {
  const btn = document.getElementById("bouquetBuildToggle");
  if (!btn) return;
  btn.addEventListener("click", () => {
    bouquetSetBuilderOpen(btn.getAttribute("aria-expanded") !== "true");
  });
  bouquetSetBuilderOpen(false);
}

async function sendBouquet() {
  const btn = document.getElementById("bouquetSendBtn");
  const fromSel = document.getElementById("bouquetFrom");
  const noteEl = document.getElementById("bouquetNote");
  const isPt = currentLanguage() === "pt";
  if (!bouquetItems.length) {
    showToast(
      isPt ? "Adicione ao menos uma flor." : "Add at least one flower.",
      "updated",
    );
    return;
  }
  const from = fromSel && fromSel.value === "her" ? "her" : "me";
  const note = (noteEl && noteEl.value ? noteEl.value : "").trim();
  const now = Date.now();
  const payload = {
    items: bouquetItems.map((it) => ({
      flowerId: it.flowerId,
      x: it.x,
      y: it.y,
      scale: it.scale || 1,
      rot: it.rot || 0,
      behindWrap: !!it.behindWrap,
    })),
    wrap: bouquetWrapChoice,
    note,
    from,
    createdAt: now,
    weekEnd: bouquetComputeWeekEnd(now),
  };
  if (btn) btn.disabled = true;
  const previous = bouquets.slice(); // a new bouquet always replaces the old one

  function afterSend() {
    bouquetItems = [];
    bouquetSelectedUid = null;
    bouquetWrapChoice = BOUQUET_WRAPS[0].id;
    if (noteEl) noteEl.value = "";
    renderBouquetWrapSwatches();
    bouquetRebuildBuilderBg();
    bouquetRenderBuilderStage();
    bouquetRenderToolbar();
    renderBouquetPaletteCounts();
    if (btn) btn.disabled = false;
    showToast(isPt ? "Buquê criado." : "Bouquet created.", "created");
    if (btn) spawnHeartBurst(btn, 6);
    markSelfWrite("bouquet");
    bouquetSetBuilderOpen(false);
  }

  if (bouquetSyncLive && bouquetDb) {
    Promise.all(
      previous
        .filter((b) => b.id && !String(b.id).startsWith("local-"))
        .map((b) => bouquetDb.collection("bouquets").doc(b.id).delete().catch(() => {})),
    )
      .then(() =>
        bouquetDb.collection("bouquets").add({
          ...payload,
          createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        }),
      )
      .then(() => afterSend())
      .catch(() => {
        bouquets = [{ id: "local-" + now, ...payload }];
        afterSend();
        renderBouquetCurrent();
      });
  } else {
    bouquets = [{ id: "local-" + now, ...payload }];
    afterSend();
    renderBouquetCurrent();
  }
}

async function deleteBouquet(b) {
  if (!b) return;
  const isPt = currentLanguage() === "pt";
  const ok = await customConfirm(
    isPt ? "Apagar este buquê?" : "Delete this bouquet?",
  );
  if (!ok) return;
  if (
    bouquetSyncLive &&
    bouquetDb &&
    b.id &&
    !String(b.id).startsWith("local-")
  ) {
    bouquetDb
      .collection("bouquets")
      .doc(b.id)
      .delete()
      .then(() => {
        showToast(isPt ? "Buquê apagado." : "Bouquet deleted.", "deleted");
      })
      .catch(() => {
        bouquets = bouquets.filter((x) => x.id !== b.id);
        showToast(isPt ? "Buquê apagado." : "Bouquet deleted.", "deleted");
        renderBouquetCurrent();
      });
  } else {
    bouquets = bouquets.filter((x) => x.id !== b.id);
    showToast(isPt ? "Buquê apagado." : "Bouquet deleted.", "deleted");
    renderBouquetCurrent();
  }
}

function initBouquetUI() {
  const fromSel = document.getElementById("bouquetFrom");
  if (fromSel) {
    fromSel.innerHTML = `
            <option value="me">${currentLanguage() === "pt" ? "De" : "From"} ${CONFIG.names.me}</option>
            <option value="her">${currentLanguage() === "pt" ? "De" : "From"} ${CONFIG.names.her}</option>
          `;
  }
  renderBouquetPalette();
  renderBouquetWrapSwatches();
  initBouquetBuildToggle();
  const stage = document.getElementById("bouquetStage");
  if (stage) {
    stage.addEventListener("pointerdown", bouquetStagePointerDown);
    stage.addEventListener("pointermove", bouquetStagePointerMove);
    stage.addEventListener("pointerup", bouquetStagePointerUp);
    stage.addEventListener("pointercancel", bouquetStagePointerUp);
  }
  document
    .getElementById("bouquetClearBtn")
    ?.addEventListener("click", () => {
      bouquetItems = [];
      bouquetSelectedUid = null;
      bouquetRenderBuilderStage();
      bouquetRenderToolbar();
      renderBouquetPaletteCounts();
    });
  document
    .getElementById("bouquetSendBtn")
    ?.addEventListener("click", sendBouquet);
  document
    .getElementById("bouquetBiggerBtn")
    ?.addEventListener("click", () => bouquetAdjustSelected("scale", 0.12));
  document
    .getElementById("bouquetSmallerBtn")
    ?.addEventListener("click", () => bouquetAdjustSelected("scale", -0.12));
  document
    .getElementById("bouquetRotLeftBtn")
    ?.addEventListener("click", () => bouquetAdjustSelected("rot", -12));
  document
    .getElementById("bouquetRotRightBtn")
    ?.addEventListener("click", () => bouquetAdjustSelected("rot", 12));
  document
    .getElementById("bouquetRemoveBtn")
    ?.addEventListener("click", bouquetRemoveSelected);
  document
    .getElementById("bouquetToBackBtn")
    ?.addEventListener("click", () => bouquetReorderSelected("back"));
  document
    .getElementById("bouquetToFrontBtn")
    ?.addEventListener("click", () => bouquetReorderSelected("front"));
  document
    .getElementById("bouquetBehindWrapBtn")
    ?.addEventListener("click", bouquetToggleBehindWrap);
  renderBouquetCurrent();
  setInterval(() => {
    bouquetPurgeExpired();
    if (activeTab === "bouquet") renderBouquetCurrent();
  }, 60000);
}

(function initBouquetSync() {
  initBouquetUI();
  const db = getSharedFirestore();
  if (db) {
    try {
      bouquetDb = db;
      bouquetSyncLive = true;
      bouquetSetSyncPill();
      bouquetDb.collection("bouquets").onSnapshot(
        (snapshot) => {
          let next = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          next.sort((a, b) => itemTimeMs(b.createdAt) - itemTimeMs(a.createdAt));
          bouquets = next;
          bouquetPurgeExpired();
          renderBouquetCurrent();
          refreshTabDotsFromData("bouquet", bouquets);
        },
        () => {
          bouquetSyncLive = false;
          bouquetSetSyncPill();
          renderBouquetCurrent();
        },
      );
    } catch (e) {
      bouquetSyncLive = false;
      bouquetSetSyncPill();
      renderBouquetCurrent();
    }
  } else {
    bouquetSyncLive = false;
    bouquetSetSyncPill();
    renderBouquetCurrent();
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

/* ================================================================
   OUR GAMES — five couples' card decks
   ----------------------------------------------------------------
   Lobby, turns, reveal / predict / match mechanics and stats. The decks
   themselves (GAMES_META, GAMES_DATA, FUTURE_PHRASES) are in
   js/data/games.js.
   ================================================================ */

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
    (c) =>
      !categories || categories.length === 0 || categories.includes(c.category),
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
  else
    joined =
      phrases.slice(0, -1).join(", ") + ", and " + phrases[phrases.length - 1];
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
  session: {
    matches: 0,
    disasters: 0,
    predictCorrect: 0,
    predictTotal: 0,
    categories: [],
    cardsSeen: 0,
  },
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
  grid
    .querySelectorAll(".games-tile")
    .forEach((t) =>
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
  const cats = Array.from(
    new Set((GAMES_DATA[gameId] || []).map((c) => c.category)),
  );
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
      roundsBox
        .querySelectorAll(".games-chip")
        .forEach((b) => b.classList.remove("active"));
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
  gState.session = {
    matches: 0,
    disasters: 0,
    predictCorrect: 0,
    predictTotal: 0,
    categories: [],
    cardsSeen: 0,
  };
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
      ? tr("Card") +
        " " +
        (gState.roundsPlayed + 1) +
        " " +
        tr("of") +
        " " +
        gState.maxRounds
      : tr("Card") + " " + (gState.roundsPlayed + 1) + " · " + tr("Endless");
  document.getElementById("gamesProgressLabel").textContent = label;
  const pct =
    gState.maxRounds > 0
      ? Math.min(
          100,
          Math.round((gState.roundsPlayed / gState.maxRounds) * 100),
        )
      : 100;
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

  document
    .getElementById("cardSkipBtn")
    ?.addEventListener("click", () => goNextGameCard(false));
  document
    .getElementById("cardNextBtn")
    ?.addEventListener("click", () => goNextGameCard(true));
  document.getElementById("cardEndBtn")?.addEventListener("click", endGame);
  document
    .getElementById("gamesExitBtn")
    ?.addEventListener("click", () => showGamesView("hub"));
  document
    .querySelectorAll("[data-games-back]")
    .forEach((b) => b.addEventListener("click", () => showGamesView("hub")));
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

/* ================================================================
   THOMMY PERSONAL — private area
   ----------------------------------------------------------------
   A separate area with its own password (and a second one for Notes).
   The passwords are placeholders here; the deploy workflow fills them
   from the TP_PASSWORD secret (TP_NOTES_PASSWORD and TP_OLD_PASSWORD
   are optional extras; see the deploy workflow).
   Like the site gate, this is a casual lock, not real security.
   Data: Firestore doc thommyPersonal/main, or local-only without Firebase.
   ================================================================ */
const TP_PASSWORD = "__TP_PASSWORD__";
const TP_NOTES_PASSWORD = "__TP_NOTES_PASSWORD__";
const TP_OLD_PASSWORD = "__TP_OLD_PASSWORD__"; // retired password — typing this triggers a joke, not access
const TP_LS = "thommyPersonal_v1";
const TP_UNLOCK = "thommyPersonalUnlocked";
const TP_NOTES_UNLOCK = "thommyPersonalNotesUnlocked";

function tpToday() {
  const d = new Date();
  return (
    d.getFullYear() +
    "-" +
    String(d.getMonth() + 1).padStart(2, "0") +
    "-" +
    String(d.getDate()).padStart(2, "0")
  );
}
// Key for "this week" — the Monday that starts it — so goals reset every
// Monday instead of every midnight.
function tpWeekKey() {
  const d = new Date();
  const day = d.getDay(); // 0 = Sun .. 6 = Sat
  const diffToMonday = day === 0 ? 6 : day - 1;
  const monday = new Date(d);
  monday.setDate(d.getDate() - diffToMonday);
  return (
    monday.getFullYear() +
    "-" +
    String(monday.getMonth() + 1).padStart(2, "0") +
    "-" +
    String(monday.getDate()).padStart(2, "0")
  );
}
function tpUid() {
  return (
    "tp_" + Date.now().toString(36) + Math.random().toString(36).slice(2, 7)
  );
}
function tpAttr(v) {
  return String(v == null ? "" : v)
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;");
}
function tpMd(raw) {
  var s = String(raw == null ? "" : raw);
  s = s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  s = s.replace(/\*\*([^*\n]+)\*\*/g, "<strong>$1</strong>");
  s = s.replace(/__([^_\n]+)__/g, "<strong>$1</strong>");
  s = s.replace(/\*([^*\n]+)\*/g, "<em>$1</em>");
  s = s.replace(/(^|[^\w])_([^_\n]+)_(?!\w)/g, "$1<em>$2</em>");
  s = s.replace(
    /\[([^\]\n]+)\]\((https?:\/\/[^\s)]+|mailto:[^\s)]+)\)/g,
    function (m, label, url) {
      return (
        '<a href="' +
        tpAttr(url) +
        '" target="_blank" rel="noopener noreferrer">' +
        label +
        "</a>"
      );
    },
  );
  var lines = s.split(/\n/);
  var out = [];
  var inUl = false;
  var inOl = false;
  function closeLists() {
    if (inUl) {
      out.push("</ul>");
      inUl = false;
    }
    if (inOl) {
      out.push("</ol>");
      inOl = false;
    }
  }
  for (var i = 0; i < lines.length; i++) {
    var line = lines[i];
    var bm = line.match(/^\s*[-*•]\s+(.+)$/);
    var nm = line.match(/^\s*(\d+)[.)]\s+(.+)$/);
    if (bm) {
      if (inOl) {
        out.push("</ol>");
        inOl = false;
      }
      if (!inUl) {
        out.push("<ul>");
        inUl = true;
      }
      out.push("<li>" + bm[1] + "</li>");
    } else if (nm) {
      if (inUl) {
        out.push("</ul>");
        inUl = false;
      }
      if (!inOl) {
        out.push("<ol>");
        inOl = true;
      }
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
    '<div class="tp-fmt-bar" data-tp-fmt-for="' +
    tpAttr(targetSel) +
    '">' +
    '<button type="button" data-tp-fmt="bold" title="Bold (Ctrl+B)"><b>B</b></button>' +
    '<button type="button" data-tp-fmt="italic" title="Italic (Ctrl+I)"><i>I</i></button>' +
    '<button type="button" data-tp-fmt="bullet" title="Bullet list">• List</button>' +
    '<button type="button" data-tp-fmt="number" title="Numbered list">1. List</button>' +
    '<button type="button" data-tp-fmt="link" title="Add link (Ctrl+K)">🔗 Href</button>' +
    '<span class="tp-md-hint">Ctrl+B · Ctrl+I · Ctrl+K · or **bold** *italic* - bullets · 1. numbers · [text](url) link</span>' +
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
  try {
    ta.setSelectionRange(innerStart, innerEnd);
  } catch (e) {}
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
  var next = lines
    .map(function (ln) {
      if (!ln.trim()) return ln;
      if (allPrefixed)
        return ln.indexOf(prefix) === 0 ? ln.slice(prefix.length) : ln;
      return ln.indexOf(prefix) === 0 ? ln : prefix + ln;
    })
    .join("\n");
  ta.value = val.slice(0, lineStart) + next + val.slice(lineEnd);
  ta.focus();
  try {
    ta.setSelectionRange(lineStart, lineStart + next.length);
  } catch (e) {}
}
function tpInsertLink(ta) {
  if (!ta) return;
  var start = ta.selectionStart || 0;
  var end = ta.selectionEnd || 0;
  var val = ta.value || "";
  var selected = val.slice(start, end) || "link text";
  var url = window.prompt("Link URL (e.g. https://example.com)", "https://");
  if (url === null) return;
  url = url.trim();
  if (!url) return;
  if (!/^https?:\/\//i.test(url) && !/^mailto:/i.test(url))
    url = "https://" + url;
  var replacement = "[" + selected + "](" + url + ")";
  ta.value = val.slice(0, start) + replacement + val.slice(end);
  var caret = start + replacement.length;
  ta.focus();
  try {
    ta.setSelectionRange(caret, caret);
  } catch (e) {}
}
function tpApplyFormat(ta, kind) {
  if (!ta) return;
  if (kind === "bold") tpWrapSelection(ta, "**", "**");
  else if (kind === "italic") tpWrapSelection(ta, "*", "*");
  else if (kind === "bullet") tpToggleLinePrefix(ta, "- ");
  else if (kind === "number") tpToggleLinePrefix(ta, "1. ");
  else if (kind === "link") tpInsertLink(ta);
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
      if (k === "b") {
        e.preventDefault();
        tpApplyFormat(ta, "bold");
      } else if (k === "i") {
        e.preventDefault();
        tpApplyFormat(ta, "italic");
      } else if (k === "k") {
        e.preventDefault();
        tpApplyFormat(ta, "link");
      }
    });
  });
}
function tpEnsureWorkouts() {
  if (!tpData.workouts || typeof tpData.workouts !== "object") {
    tpData.workouts = { exercises: [], routines: [], session: null, log: {} };
  }
  if (!Array.isArray(tpData.workouts.exercises)) tpData.workouts.exercises = [];
  if (!Array.isArray(tpData.workouts.routines)) tpData.workouts.routines = [];
  if (!tpData.workouts.log || typeof tpData.workouts.log !== "object")
    tpData.workouts.log = {};
  return tpData.workouts;
}

function tpDefaultData() {
  return {
    habits: [
      {
        id: "h1",
        name: "Exercise / move body",
        streak: 0,
        best: 0,
        lastDone: "",
        log: {},
      },
      {
        id: "h2",
        name: "Read 20 minutes",
        streak: 0,
        best: 0,
        lastDone: "",
        log: {},
      },
      {
        id: "h3",
        name: "Drink enough water",
        streak: 0,
        best: 0,
        lastDone: "",
        log: {},
      },
      {
        id: "h4",
        name: "No doomscroll after 22:00",
        streak: 0,
        best: 0,
        lastDone: "",
        log: {},
      },
    ],
    dailyGoals: {},
    weeklyGoals: {},
    goals: { career: [], personal: [] },
    wishlist: [],
    recurringBuys: [],
    bucket: [],
    romantic: [],
    workouts: { exercises: [], routines: [], session: null, log: {} },
    study: { courses: [] },
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
    pomodoro: { sessions: [], minutes: 25 },
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
    notes: "",
  };
}

let tpData = null;
let tpView = "dash";
let tpRomTermFilter = "all";
// Wishlist / recurring-buys filter state — persists across renders
// within the session (not saved), same pattern as tpRomTermFilter.
let tpWishFilters = { status: "all", for: "all", priority: "all" };
let tpRecFilters = { status: "all", for: "all", priority: "all" };
let tpEditMode = {};
let tpPomodoro = {
  running: false,
  endsAt: 0,
  left: 25 * 60,
  timer: null,
  activeTab: "timer",
};
let tpStopwatch = { running: false, startedAt: 0, elapsed: 0, timer: null };
function tpIsEdit(key) {
  return !!tpEditMode[key];
}
function tpEditToggleHtml(key) {
  var on = tpIsEdit(key);
  return (
    '<button type="button" class="tp-btn sm ' +
    (on ? "" : "outline") +
    ' tp-edit-toggle" data-tp-edit-toggle="' +
    key +
    '">' +
    (on ? "Done" : "Edit") +
    "</button>"
  );
}
function tpCardHead(title, sub, key) {
  return (
    '<div class="tp-item-head"><div><h3>' +
    title +
    "</h3>" +
    (sub ? '<p class="tp-sub">' + sub + "</p>" : "") +
    "</div>" +
    tpEditToggleHtml(key) +
    "</div>"
  );
}

function tpLoad() {
  try {
    const raw = localStorage.getItem(TP_LS);
    if (raw) {
      tpData = Object.assign(tpDefaultData(), JSON.parse(raw));
      const d = tpDefaultData();
      tpData.habits =
        tpData.habits && tpData.habits.length ? tpData.habits : d.habits;
      tpData.morning =
        tpData.morning && tpData.morning.length ? tpData.morning : d.morning;
      tpData.night =
        tpData.night && tpData.night.length ? tpData.night : d.night;
      tpData.goals = Object.assign(
        { career: [], personal: [] },
        tpData.goals || {},
      );
      if (!Array.isArray(tpData.wishlist)) tpData.wishlist = [];
      if (!Array.isArray(tpData.recurringBuys)) tpData.recurringBuys = [];
      if (!tpData.weeklyGoals || typeof tpData.weeklyGoals !== "object")
        tpData.weeklyGoals = {};
      tpData.affirmations = Object.assign(
        d.affirmations,
        tpData.affirmations || {},
      );
      tpData.pomodoro = Object.assign(d.pomodoro, tpData.pomodoro || {});
      if (typeof tpData.notes !== "string") tpData.notes = "";
      var legacyStudy = Array.isArray(tpData.study) ? tpData.study : [];
      if (!tpData.study || Array.isArray(tpData.study))
        tpData.study = { courses: [] };
      if (!Array.isArray(tpData.study.courses)) {
        var legacyCourse = tpData.study.course || null;
        tpData.study.courses =
          legacyCourse && (legacyCourse.name || legacyCourse.description)
            ? [
                Object.assign(
                  { id: "course-main", name: "", description: "" },
                  legacyCourse,
                ),
              ]
            : [];
      }
      tpData.study.courses = tpData.study.courses.map(function (c, i) {
        return Object.assign(
          {
            id: c.id || (i === 0 ? "course-main" : tpUid()),
            name: "",
            description: "",
          },
          c,
        );
      });
      tpData.study.subjects = tpData.study.subjects || [];
      tpEnsureWorkouts();
    } else tpData = tpDefaultData();
  } catch (e) {
    tpData = tpDefaultData();
  }
}
function tpSave() {
  try {
    localStorage.setItem(TP_LS, JSON.stringify(tpData));
  } catch (e) {}
  tpMaybeFirebaseSync();
}
function tpMaybeFirebaseSync() {
  try {
    if (typeof getSharedFirestore === "function") {
      const db = getSharedFirestore();
      if (db) {
        db.collection("thommyPersonal")
          .doc("main")
          .set(
            {
              data: tpData,
              updatedAt: firebase.firestore.FieldValue.serverTimestamp(),
            },
            { merge: true },
          )
          .catch(function () {});
      }
    }
  } catch (e) {}
}
async function tpMaybeFirebaseLoad() {
  try {
    if (typeof getSharedFirestore !== "function") return;
    const db = getSharedFirestore();
    if (!db) return;
    const snap = await db.collection("thommyPersonal").doc("main").get();
    if (snap.exists && snap.data() && snap.data().data) {
      const remote = snap.data().data;
      const rLen =
        (remote.pomodoro &&
          remote.pomodoro.sessions &&
          remote.pomodoro.sessions.length) ||
        0;
      const lLen =
        (tpData.pomodoro &&
          tpData.pomodoro.sessions &&
          tpData.pomodoro.sessions.length) ||
        0;
      if (rLen >= lLen) {
        tpData = Object.assign(tpDefaultData(), remote);
        try {
          localStorage.setItem(TP_LS, JSON.stringify(tpData));
        } catch (e) {}
      }
    }
  } catch (e) {}
}
// ---- Wrong-password gag: fake "deleting the website" crash, then reveal ----
function tpRunCrashGag(isOldPassword) {
  var overlay = document.getElementById("tpCrashOverlay");
  var linesEl = document.getElementById("tpCrashLines");
  var revealEl = document.getElementById("tpCrashReveal");
  var revealText = document.getElementById("tpCrashRevealText");
  var closeBtn = document.getElementById("tpCrashCloseBtn");
  if (!overlay || !linesEl || !revealEl || !revealText) return;

  linesEl.innerHTML = "";
  revealEl.classList.remove("show");
  overlay.classList.add("show");

  var script = [
    { text: "$ rm -rf /girlfriend-website --confirm" },
    { text: "Deleting photos/ ... 100%", cls: "dim", delay: 750 },
    { text: "Deleting playlists/ ... 100%", cls: "dim", delay: 650 },
    { text: "Deleting bucketlist collection ... 100%", cls: "dim", delay: 650 },
    { text: "Deleting thommyPersonal/main ... 100%", cls: "dim", delay: 650 },
    { text: "Purging Firestore project ... 100%", cls: "dim", delay: 800 },
    { text: "This action cannot be undone.", cls: "err", delay: 950 },
    { text: "Website deleted.", cls: "err", delay: 1100 },
  ];

  var cursor = document.createElement("span");
  cursor.className = "tp-crash-cursor";
  linesEl.appendChild(cursor);

  var i = 0;
  function nextLine() {
    if (i >= script.length) {
      setTimeout(showReveal, 1400);
      return;
    }
    var step = script[i];
    var div = document.createElement("div");
    div.className = "tp-crash-line" + (step.cls ? " " + step.cls : "");
    div.textContent = step.text;
    linesEl.insertBefore(div, cursor);
    i++;
    setTimeout(nextLine, step.delay || 500);
  }
  setTimeout(nextLine, 500);

  function showReveal() {
    overlay.classList.add("tp-crash-screenshake");
    setTimeout(function () {
      overlay.classList.remove("tp-crash-screenshake");
    }, 400);
    var message = isOldPassword
      ? "Relax, nothing's deleted 😏 that's just last season's password. Try again."
      : "Relax, nothing's deleted. Wrong password though — try again.";
    revealText.innerHTML = "";
    revealText.appendChild(document.createTextNode(message));
    var revealCursor = document.createElement("span");
    revealCursor.className = "tp-crash-cursor";
    revealText.appendChild(revealCursor);
    revealEl.classList.add("show");
  }

  if (closeBtn && !closeBtn._tpBound) {
    closeBtn._tpBound = true;
    closeBtn.addEventListener("click", function () {
      overlay.classList.remove("show");
      revealEl.classList.remove("show");
      var input = document.getElementById("tpPassInput");
      if (input) {
        input.value = "";
        input.focus();
      }
    });
  }
}
function tpIsUnlocked() {
  try {
    return sessionStorage.getItem(TP_UNLOCK) === "1";
  } catch (e) {
    return false;
  }
}
function tpSetUnlocked() {
  try {
    sessionStorage.setItem(TP_UNLOCK, "1");
  } catch (e) {}
}
function tpNotesIsUnlocked() {
  try {
    return sessionStorage.getItem(TP_NOTES_UNLOCK) === "1";
  } catch (e) {
    return false;
  }
}
function tpNotesSetUnlocked() {
  try {
    sessionStorage.setItem(TP_NOTES_UNLOCK, "1");
  } catch (e) {}
}
function tpNotesUnlockHtml() {
  return '<div class="tp-card tp-notes-lock"><div class="eyebrow">Private notes</div><h3>Notes are locked</h3><p class="tp-sub">Enter the notes password to open your private writing space.</p><div class="tp-password-wrap"><input type="password" id="tpNotesPassInput" placeholder="••••••" autocomplete="off" /><span class="tp-password-hint" tabindex="0" aria-label="Hint">?<span class="tp-password-hint-bubble">Hint: Ipdad password</span></span></div><div class="tp-err" id="tpNotesPassErr"></div><button type="button" class="tp-btn" id="tpNotesUnlockBtn">Unlock notes</button></div>';
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
      const key =
        d.getFullYear() +
        "-" +
        String(d.getMonth() + 1).padStart(2, "0") +
        "-" +
        String(d.getDate()).padStart(2, "0");
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
function tpWeekGoals() {
  // Fresh list every calendar week (Monday reset) — goals from last week do
  // not carry over.
  const wk = tpWeekKey();
  if (!tpData.weeklyGoals[wk]) tpData.weeklyGoals[wk] = [];
  return tpData.weeklyGoals[wk];
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
    const key =
      dd.getFullYear() +
      "-" +
      String(dd.getMonth() + 1).padStart(2, "0") +
      "-" +
      String(dd.getDate()).padStart(2, "0");
    out.push({ date: key, min: tpData.focusByDay[key] || 0 });
  }
  return out;
}
function tpHabitsDoneToday() {
  const day = tpToday();
  return tpData.habits.filter((h) => h.log && h.log[day]).length;
}
function tpTimerSeconds() {
  return (tpData.pomodoro.minutes || 25) * 60;
}
let tpAudioCtx = null;
let tpAlarmActive = false;
let tpAlarmTimer = null;
function tpGetAudioCtx() {
  try {
    if (!tpAudioCtx) {
      const Ctx = window.AudioContext || window.webkitAudioContext;
      if (!Ctx) return null;
      tpAudioCtx = new Ctx();
    }
    if (tpAudioCtx.state === "suspended") tpAudioCtx.resume();
    return tpAudioCtx;
  } catch (e) {
    return null;
  }
}
function tpPlayAlertSound() {
  const ctx = tpGetAudioCtx();
  if (!ctx) return;
  try {
    const now = ctx.currentTime;
    function beep(startTime, freq, dur) {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "sine";
      osc.frequency.value = freq;
      gain.gain.setValueAtTime(0.0001, startTime);
      gain.gain.exponentialRampToValueAtTime(0.35, startTime + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.0001, startTime + dur);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(startTime);
      osc.stop(startTime + dur + 0.03);
    }
    beep(now, 880, 0.18);
    beep(now + 0.24, 880, 0.18);
    beep(now + 0.48, 1046, 0.32);
  } catch (e) {}
}
function tpStartAlarm() {
  tpStopAlarm();
  tpAlarmActive = true;
  tpPlayAlertSound();
  tpAlarmTimer = setInterval(function () {
    if (tpAlarmActive) tpPlayAlertSound();
  }, 1200);
  tpRender();
}
function tpStopAlarm() {
  tpAlarmActive = false;
  if (tpAlarmTimer) clearInterval(tpAlarmTimer);
  tpAlarmTimer = null;
}
function tpPomTick() {
  if (!tpPomodoro.running) return;
  const left = Math.max(0, Math.round((tpPomodoro.endsAt - Date.now()) / 1000));
  tpPomodoro.left = left;
  const disp = document.getElementById("tpTimerDisp");
  if (disp) {
    const m = Math.floor(left / 60);
    const s = left % 60;
    disp.textContent =
      String(m).padStart(2, "0") + ":" + String(s).padStart(2, "0");
  }
  if (left <= 0) tpPomComplete();
}
function tpPomStart() {
  tpGetAudioCtx();
  tpPomodoro.running = true;
  tpPomodoro.endsAt = Date.now() + tpPomodoro.left * 1000;
  if (tpPomodoro.timer) clearInterval(tpPomodoro.timer);
  tpPomodoro.timer = setInterval(tpPomTick, 250);
}
function tpPomPause() {
  tpPomodoro.running = false;
  if (tpPomodoro.timer) clearInterval(tpPomodoro.timer);
  tpPomodoro.timer = null;
  tpPomodoro.left = Math.max(
    0,
    Math.round((tpPomodoro.endsAt - Date.now()) / 1000),
  );
}
function tpPomStop() {
  tpStopAlarm();
  tpPomodoro.running = false;
  if (tpPomodoro.timer) clearInterval(tpPomodoro.timer);
  tpPomodoro.timer = null;
}
function tpPomComplete() {
  tpPomodoro.running = false;
  if (tpPomodoro.timer) clearInterval(tpPomodoro.timer);
  tpPomodoro.timer = null;
  const mins = Math.round(tpTimerSeconds() / 60);
  const day = tpToday();
  tpData.focusByDay[day] = (tpData.focusByDay[day] || 0) + mins;
  tpData.pomodoro.sessions = tpData.pomodoro.sessions || [];
  tpData.pomodoro.sessions.push({
    mode: "timer",
    minutes: mins,
    at: new Date().toISOString(),
  });
  tpSave();
  tpPomodoro.left = tpTimerSeconds();
  if (typeof showToast === "function")
    showToast("Timer complete · " + mins + "m", "updated");
  tpStartAlarm();
  try {
    if (navigator.vibrate) navigator.vibrate([300, 150, 300, 150, 500]);
  } catch (e) {}
  tpRender();
}
function tpSwTick() {
  if (!tpStopwatch.running) return;
  const disp = document.getElementById("tpSwDisp");
  if (disp) {
    const cur =
      tpStopwatch.elapsed + (Date.now() - tpStopwatch.startedAt) / 1000;
    const m = Math.floor(cur / 60);
    const s = Math.floor(cur % 60);
    disp.textContent =
      String(m).padStart(2, "0") + ":" + String(s).padStart(2, "0");
  }
}
function tpSwStart() {
  tpStopwatch.running = true;
  tpStopwatch.startedAt = Date.now();
  if (tpStopwatch.timer) clearInterval(tpStopwatch.timer);
  tpStopwatch.timer = setInterval(tpSwTick, 250);
}
function tpSwPause() {
  if (tpStopwatch.running) {
    tpStopwatch.elapsed += (Date.now() - tpStopwatch.startedAt) / 1000;
  }
  tpStopwatch.running = false;
  if (tpStopwatch.timer) clearInterval(tpStopwatch.timer);
  tpStopwatch.timer = null;
}
function tpSwReset() {
  if (tpStopwatch.running) {
    tpStopwatch.elapsed += (Date.now() - tpStopwatch.startedAt) / 1000;
  }
  tpSwPause();
  const mins = Math.round(tpStopwatch.elapsed / 60);
  if (mins > 0) {
    const day = tpToday();
    tpData.focusByDay[day] = (tpData.focusByDay[day] || 0) + mins;
    tpData.pomodoro.sessions = tpData.pomodoro.sessions || [];
    tpData.pomodoro.sessions.push({
      mode: "stopwatch",
      minutes: mins,
      at: new Date().toISOString(),
    });
    tpSave();
    if (typeof showToast === "function")
      showToast("Session logged · " + mins + "m", "updated");
  }
  tpStopwatch.elapsed = 0;
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
  else if (tpView === "notes") main.innerHTML = tpViewNotes();
  tpBindView();
}

function tpViewDash() {
  const goals = tpWeekGoals();
  const doneG = goals.filter((g) => g.done).length;
  const habitsDone = tpHabitsDoneToday();
  const focusToday = tpData.focusByDay[tpToday()] || 0;
  const morn = tpRoutineStats("morning");
  const night = tpRoutineStats("night");
  const openGoals = ["career", "personal"].reduce(
    (n, k) => n + (tpData.goals[k] || []).filter((g) => !g.done).length,
    0,
  );
  const topGoals = ["career", "personal"]
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
    '</div><div class="l">Weekly goals</div></div>' +
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
    '<div class="tp-card" style="margin-top:14px"><h3>This week\'s priorities</h3><p class="tp-sub">Goals for the week of ' +
    tpWeekKey() +
    " · cleared every Monday</p><div>" +
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
      : '<p class="tp-empty">No goals for this week — add some under Habits.</p>') +
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

// ---- Thommy Personal edit modal ----
var tpEditState = null;

function tpEditField(label, type, value, key, extra) {
  var id = "tpEdit_" + key;
  var safe = tpAttr(value == null ? "" : String(value));
  if (type === "textarea") {
    return (
      '<div class="tp-edit-field"><label for="' +
      id +
      '">' +
      label +
      '</label><textarea id="' +
      id +
      '" data-edit-key="' +
      key +
      '" ' +
      (extra || "") +
      ">" +
      safe +
      "</textarea></div>"
    );
  }
  if (type === "select") {
    // `extra` is a raw string of <option> tags with no "selected"
    // baked in, so without this every dropdown silently reopened on
    // whatever its first option was — never what was actually saved
    // (e.g. a "Got, High priority, Gift" wishlist item would reopen
    // showing "Want, High priority, For me"). Mark whichever option
    // matches the current value as selected before rendering it.
    var optsHtml = extra || "";
    if (value != null) {
      var marker = 'value="' + String(value).replace(/"/g, "&quot;") + '"';
      var idx = optsHtml.indexOf(marker);
      if (idx !== -1) {
        var closeAt = optsHtml.indexOf(">", idx);
        if (
          closeAt !== -1 &&
          optsHtml.indexOf("selected", idx) !== closeAt + 1
        ) {
          optsHtml =
            optsHtml.slice(0, closeAt) + " selected" + optsHtml.slice(closeAt);
        }
      }
    }
    return (
      '<div class="tp-edit-field"><label for="' +
      id +
      '">' +
      label +
      '</label><select id="' +
      id +
      '" data-edit-key="' +
      key +
      '">' +
      optsHtml +
      "</select></div>"
    );
  }
  return (
    '<div class="tp-edit-field"><label for="' +
    id +
    '">' +
    label +
    '</label><input id="' +
    id +
    '" type="' +
    type +
    '" value="' +
    safe +
    '" data-edit-key="' +
    key +
    '" ' +
    (extra || "") +
    "></div>"
  );
}

function tpOpenEdit(type, id, meta) {
  tpEditState = { type: type, id: id, meta: meta || {} };
  var body = document.getElementById("tpEditBody");
  var title = document.getElementById("tpEditTitle");
  var modal = document.getElementById("tpEditModal");
  if (!body || !title || !modal) return;
  var html = "";
  var obj, cat;

  if (type === "dailyGoal") {
    obj = tpWeekGoals().find(function (x) {
      return x.id === id;
    });
    if (!obj) return;
    title.textContent = "Edit this week's goal";
    html = tpEditField("Goal", "text", obj.text, "text");
  } else if (type === "habit") {
    obj = tpData.habits.find(function (x) {
      return x.id === id;
    });
    if (!obj) return;
    title.textContent = "Edit habit";
    html = tpEditField("Habit", "text", obj.name, "name");
  } else if (type === "routineStep") {
    cat = meta.kind;
    obj = (tpData[cat] || []).find(function (x) {
      return x.id === id;
    });
    if (!obj) return;
    title.textContent =
      "Edit " + (cat === "morning" ? "morning" : "night") + " routine step";
    html = tpEditField("Step", "text", obj.text, "text");
  } else if (type === "affirmation") {
    obj = (tpData.affirmations.custom || [])[parseInt(id, 10)];
    if (obj == null) return;
    title.textContent = "Edit affirmation";
    html = tpEditField("Affirmation", "textarea", obj, "text");
  } else if (type === "futureSelf") {
    title.textContent = "Edit future self";
    html = tpEditField(
      "Who are you becoming?",
      "textarea",
      tpData.affirmations.futureSelf || "",
      "text",
    );
  } else if (type === "goal") {
    cat = meta.cat;
    obj = (tpData.goals[cat] || []).find(function (x) {
      return x.id === id;
    });
    if (!obj) return;
    title.textContent = "Edit " + cat + " goal";
    html =
      tpEditField("Goal", "text", obj.title, "title") +
      tpEditField("Deadline", "date", obj.deadline || "", "deadline") +
      tpEditField("Next milestone", "text", obj.milestone || "", "milestone");
  } else if (type === "wishlist") {
    obj = (tpData.wishlist || []).find(function (x) {
      return x.id === id;
    });
    if (!obj) return;
    title.textContent = "Edit wishlist item";
    html =
      tpEditField("Item", "text", obj.title, "title") +
      tpEditField(
        "For",
        "select",
        obj.for || "me",
        "for",
        '<option value="me">For me</option><option value="gift">Gift</option>',
      ) +
      tpEditField(
        "Priority",
        "select",
        obj.priority || "medium",
        "priority",
        '<option value="high">High</option><option value="medium">Medium</option><option value="low">Low</option>',
      ) +
      tpEditField(
        "Status",
        "select",
        obj.status === "got" ? "got" : "want",
        "status",
        '<option value="want">Want</option><option value="got">Got</option>',
      ) +
      tpEditField(
        "Link",
        "url",
        obj.link || "",
        "link",
        'placeholder="https://…"',
      ) +
      tpEditField("Notes", "textarea", obj.notes || "", "notes");
  } else if (type === "recurringBuy") {
    obj = (tpData.recurringBuys || []).find(function (x) {
      return x.id === id;
    });
    if (!obj) return;
    title.textContent = "Edit recurring buy";
    html =
      tpEditField("Item", "text", obj.title, "title") +
      tpEditField(
        "For",
        "select",
        obj.for || "me",
        "for",
        '<option value="me">For me</option><option value="gift">Gift</option>',
      ) +
      tpEditField(
        "Frequency",
        "select",
        obj.frequency || "monthly",
        "frequency",
        '<option value="weekly">Weekly</option><option value="monthly">Monthly</option><option value="every3months">Every 3 months</option><option value="every6months">Every 6 months</option><option value="yearly">Yearly</option><option value="asneeded">As needed</option>',
      ) +
      tpEditField(
        "Priority",
        "select",
        obj.priority || "medium",
        "priority",
        '<option value="high">High</option><option value="medium">Medium</option><option value="low">Low</option>',
      ) +
      tpEditField(
        "Status",
        "select",
        obj.status === "got" ? "got" : "want",
        "status",
        '<option value="want">Want</option><option value="got">Got</option>',
      ) +
      tpEditField(
        "Link",
        "url",
        obj.link || "",
        "link",
        'placeholder="https://…"',
      ) +
      tpEditField("Notes", "textarea", obj.notes || "", "notes");
  } else if (type === "bucket") {
    obj = (tpData.bucket || []).find(function (x) {
      return x.id === id;
    });
    if (!obj) return;
    title.textContent = "Edit bucket list item";
    html = tpEditField("Experience", "text", obj.title, "title");
  } else if (type === "romantic") {
    obj = (tpData.romantic || []).find(function (x) {
      return x.id === id;
    });
    if (!obj) return;
    title.textContent = "Edit romantic idea";
    html =
      tpEditField("Title", "text", obj.title, "title") +
      tpEditField(
        "Type",
        "select",
        obj.type || "date",
        "type",
        '<option value="date">Date</option><option value="surprise">Surprise</option><option value="plan">Plan</option><option value="memory">Memory</option><option value="goal">Goal</option>',
      ) +
      tpEditField(
        "Term",
        "select",
        obj.term || "short",
        "term",
        '<option value="short">Short-term</option><option value="mid">Mid-term</option><option value="long">Long-term</option>',
      ) +
      tpEditField(
        "Status",
        "select",
        obj.status || "idea",
        "status",
        '<option value="idea">Idea</option><option value="planned">Planned</option><option value="done">Done</option>',
      ) +
      tpEditField("Notes", "textarea", obj.notes || "", "notes");
  } else if (type === "exercise") {
    obj = tpEnsureWorkouts().exercises.find(function (x) {
      return x.id === id;
    });
    if (!obj) return;
    title.textContent = "Edit exercise";
    html =
      tpEditField("Exercise name", "text", obj.name, "name") +
      tpEditField("Sets", "number", obj.targetSets || 3, "sets", 'min="1"') +
      tpEditField(
        "Target reps",
        "number",
        obj.targetReps || 10,
        "reps",
        'min="1"',
      ) +
      tpEditField("Muscle group", "text", obj.muscle || "", "muscle") +
      tpEditField(
        "Description / form cues",
        "textarea",
        obj.description || "",
        "description",
      );
  } else if (type === "workoutRoutine") {
    obj = tpEnsureWorkouts().routines.find(function (x) {
      return x.id === id;
    });
    if (!obj) return;
    title.textContent = "Edit workout routine";
    var checks = tpEnsureWorkouts()
      .exercises.map(function (e) {
        return (
          '<label class="tp-edit-check"><input type="checkbox" data-edit-exercise-id="' +
          e.id +
          '" ' +
          ((obj.exerciseIds || []).indexOf(e.id) >= 0 ? "checked" : "") +
          "> " +
          tpAttr(e.name) +
          "</label>"
        );
      })
      .join("");
    html =
      tpEditField("Routine name", "text", obj.name, "name") +
      tpEditField(
        "Description",
        "textarea",
        obj.description || "",
        "description",
      ) +
      '<div class="tp-edit-field"><label>Exercises in this routine</label><div class="tp-edit-checks">' +
      (checks || '<span class="meta">Add exercises first.</span>') +
      "</div></div>";
  } else if (type === "course") {
    obj = ((tpData.study && tpData.study.courses) || []).find(function (x) {
      return x.id === id;
    });
    if (!obj) return;
    title.textContent = "Edit course";
    html =
      tpEditField("Course name", "text", obj.name || "", "name") +
      tpEditField(
        "Description",
        "textarea",
        obj.description || "",
        "description",
      );
  } else if (type === "subject") {
    obj = (tpData.study.subjects || []).find(function (x) {
      return x.id === id;
    });
    if (!obj) return;
    title.textContent = "Edit subject";
    html =
      tpEditField("Subject name", "text", obj.name, "name") +
      tpEditField(
        "Description",
        "textarea",
        obj.description || "",
        "description",
      );
  } else if (type === "portion") {
    obj = null;
    var ss = (tpData.study.subjects || []).find(function (x) {
      return x.id === meta.subjectId;
    });
    if (ss)
      obj = (ss.portions || []).find(function (x) {
        return x.id === id;
      });
    if (!obj) return;
    title.textContent = "Edit portion";
    html = tpEditField("Portion", "text", obj.text, "text");
  }

  body.innerHTML = html;
  modal.classList.add("open");
  var first = body.querySelector("input,select,textarea");
  if (first)
    setTimeout(function () {
      first.focus();
    }, 0);
}

function tpCloseEdit() {
  tpEditState = null;
  var modal = document.getElementById("tpEditModal");
  if (modal) modal.classList.remove("open");
}

function tpSaveEdit() {
  if (!tpEditState) return;
  var state = tpEditState,
    body = document.getElementById("tpEditBody");
  function val(key) {
    var el = body.querySelector('[data-edit-key="' + key + '"]');
    return el ? el.value : "";
  }
  var obj, cat, w;
  if (state.type === "dailyGoal") {
    obj = tpWeekGoals().find(function (x) {
      return x.id === state.id;
    });
    if (obj && val("text").trim()) obj.text = val("text").trim();
  } else if (state.type === "habit") {
    obj = tpData.habits.find(function (x) {
      return x.id === state.id;
    });
    if (obj && val("name").trim()) obj.name = val("name").trim();
  } else if (state.type === "routineStep") {
    cat = state.meta.kind;
    obj = (tpData[cat] || []).find(function (x) {
      return x.id === state.id;
    });
    if (obj && val("text").trim()) obj.text = val("text").trim();
  } else if (state.type === "affirmation") {
    var ai = parseInt(state.id, 10);
    if (tpData.affirmations.custom[ai] !== undefined && val("text").trim())
      tpData.affirmations.custom[ai] = val("text").trim();
  } else if (state.type === "futureSelf") {
    tpData.affirmations.futureSelf = val("text");
  } else if (state.type === "goal") {
    cat = state.meta.cat;
    obj = (tpData.goals[cat] || []).find(function (x) {
      return x.id === state.id;
    });
    if (obj) {
      if (val("title").trim()) obj.title = val("title").trim();
      obj.deadline = val("deadline");
      obj.milestone = val("milestone").trim();
    }
  } else if (state.type === "wishlist") {
    obj = (tpData.wishlist || []).find(function (x) {
      return x.id === state.id;
    });
    if (obj) {
      if (val("title").trim()) obj.title = val("title").trim();
      obj.for = val("for") || "me";
      obj.priority = val("priority") || "medium";
      obj.status = val("status") || "want";
      obj.link = val("link").trim();
      obj.notes = val("notes");
    }
  } else if (state.type === "recurringBuy") {
    obj = (tpData.recurringBuys || []).find(function (x) {
      return x.id === state.id;
    });
    if (obj) {
      if (val("title").trim()) obj.title = val("title").trim();
      obj.for = val("for") || "me";
      obj.frequency = val("frequency") || "monthly";
      obj.priority = val("priority") || "medium";
      obj.status = val("status") || "want";
      obj.link = val("link").trim();
      obj.notes = val("notes");
    }
  } else if (state.type === "bucket") {
    obj = (tpData.bucket || []).find(function (x) {
      return x.id === state.id;
    });
    if (obj && val("title").trim()) obj.title = val("title").trim();
  } else if (state.type === "romantic") {
    obj = (tpData.romantic || []).find(function (x) {
      return x.id === state.id;
    });
    if (obj) {
      if (val("title").trim()) obj.title = val("title").trim();
      obj.type = val("type") || "date";
      obj.term = val("term") || "short";
      obj.status = val("status") || "idea";
      obj.notes = val("notes");
    }
  } else if (state.type === "exercise") {
    w = tpEnsureWorkouts();
    obj = w.exercises.find(function (x) {
      return x.id === state.id;
    });
    if (obj) {
      if (val("name").trim()) obj.name = val("name").trim();
      obj.targetSets = Math.max(1, parseInt(val("sets"), 10) || 3);
      obj.targetReps = Math.max(1, parseInt(val("reps"), 10) || 10);
      obj.muscle = val("muscle").trim();
      obj.description = val("description");
    }
  } else if (state.type === "workoutRoutine") {
    w = tpEnsureWorkouts();
    obj = w.routines.find(function (x) {
      return x.id === state.id;
    });
    if (obj) {
      if (val("name").trim()) obj.name = val("name").trim();
      obj.description = val("description");
      obj.exerciseIds = Array.from(
        body.querySelectorAll("[data-edit-exercise-id]:checked"),
      ).map(function (x) {
        return x.getAttribute("data-edit-exercise-id");
      });
    }
  } else if (state.type === "course") {
    tpData.study = tpData.study || { courses: [] };
    tpData.study.courses = tpData.study.courses || [];
    obj = tpData.study.courses.find(function (x) {
      return x.id === state.id;
    });
    if (obj) {
      obj.name = val("name").trim();
      obj.description = val("description");
    }
  } else if (state.type === "subject") {
    obj = (tpData.study.subjects || []).find(function (x) {
      return x.id === state.id;
    });
    if (obj) {
      if (val("name").trim()) obj.name = val("name").trim();
      obj.description = val("description");
      obj.courseId = "main";
    }
  } else if (state.type === "portion") {
    var sub = (tpData.study.subjects || []).find(function (x) {
      return x.id === state.meta.subjectId;
    });
    obj =
      sub &&
      (sub.portions || []).find(function (x) {
        return x.id === state.id;
      });
    if (obj && val("text").trim()) obj.text = val("text").trim();
  }
  tpSave();
  tpCloseEdit();
  tpRender();
}

function tpViewHabits() {
  var goals = tpWeekGoals();
  var edit = tpIsEdit("habits");
  return (
    '<div class="tp-card">' +
    tpCardHead(
      "Weekly goals",
      "For the week of " + tpWeekKey() + " · clears every Monday",
      "habits",
    ) +
    "<div>" +
    (goals
      .map(function (g) {
        return (
          '<label class="tp-check ' +
          (g.done ? "done" : "") +
          '"><input type="checkbox" data-tp-goal="' +
          g.id +
          '" ' +
          (g.done ? "checked" : "") +
          '><span style="flex:1">' +
          g.text +
          "</span>" +
          (edit
            ? '<button type="button" class="tp-btn outline sm" data-tp-edit="dailyGoal" data-id="' +
              g.id +
              '">Edit</button><button type="button" class="tp-btn danger sm" data-tp-del-goal="' +
              g.id +
              '">✕</button>'
            : "") +
          "</label>"
        );
      })
      .join("") || '<p class="tp-empty">No goals for this week.</p>') +
    "</div>" +
    (edit
      ? '<div class="tp-row"><input id="tpNewGoal" placeholder="Add a goal for this week…"><button type="button" class="tp-btn" id="tpAddGoal">Add</button></div>'
      : "") +
    "</div>" +
    '<div class="tp-card"><h3>Habits</h3><p class="tp-sub">Items stay · checks reset every day · streaks keep going</p>' +
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
          '><div style="flex:1"><span>' +
          h.name +
          '</span><div class="meta">🔥 ' +
          (h.streak || 0) +
          " · best " +
          (h.best || 0) +
          "</div></div>" +
          (edit
            ? '<button type="button" class="tp-btn outline sm" data-tp-edit="habit" data-id="' +
              h.id +
              '">Edit</button><button type="button" class="tp-btn danger sm" data-tp-del-habit="' +
              h.id +
              '">✕</button>'
            : "") +
          "</label>"
        );
      })
      .join("") +
    (edit
      ? '<div class="tp-row"><input id="tpNewHabit" placeholder="New habit…"><button type="button" class="tp-btn" id="tpAddHabit">Add habit</button></div>'
      : "") +
    "</div>"
  );
}

function tpWeekDayKeys() {
  var out = [];
  var d0 = new Date();
  for (var i = 6; i >= 0; i--) {
    var dd = new Date(d0);
    dd.setDate(d0.getDate() - i);
    var key =
      dd.getFullYear() +
      "-" +
      String(dd.getMonth() + 1).padStart(2, "0") +
      "-" +
      String(dd.getDate()).padStart(2, "0");
    out.push({
      date: key,
      label: dd.toLocaleDateString(undefined, { weekday: "short" }),
    });
  }
  return out;
}
function tpBarsHtml(items, max, unit) {
  return items
    .map(function (d) {
      var value = d.n + " " + unit + (d.n === 1 ? "" : "s");
      return (
        '<span data-tp-bar-day="' +
        tpAttr(d.label + " · " + d.date) +
        '" data-tp-bar-value="' +
        tpAttr(value) +
        '" style="height:' +
        Math.round((d.n / max) * 100) +
        '%"></span>'
      );
    })
    .join("");
}
function tpViewAnalytics() {
  var days = tpWeekDayKeys();
  var habitsByDay = days.map(function (d) {
    var n = tpData.habits.reduce(function (acc, h) {
      return acc + (h.log && h.log[d.date] ? 1 : 0);
    }, 0);
    return { date: d.date, label: d.label, n: n };
  });
  var weekGoals = tpWeekGoals();
  var goalsDoneWeek = weekGoals.filter(function (g) {
    return g.done;
  }).length;
  var habitsWeek = habitsByDay.reduce(function (a, b) {
    return a + b.n;
  }, 0);
  var bestStreak = tpData.habits.reduce(function (m, h) {
    return Math.max(m, h.best || 0);
  }, 0);
  var maxH = Math.max(
    1,
    ...habitsByDay.map(function (x) {
      return x.n;
    }),
  );
  var sessions = (tpData.pomodoro.sessions || []).slice(-20).reverse();
  return (
    '<div class="tp-grid-3"><div class="tp-stat"><div class="n">' +
    habitsWeek +
    '</div><div class="l">Habit checks (7d)</div></div><div class="tp-stat"><div class="n">' +
    goalsDoneWeek +
    "/" +
    weekGoals.length +
    '</div><div class="l">Goals done (this week)</div></div><div class="tp-stat"><div class="n">' +
    bestStreak +
    '</div><div class="l">Best habit streak</div></div></div>' +
    '<div class="tp-card" style="margin-top:14px"><h3>Habits completed — last 7 days</h3><div class="tp-bars">' +
    tpBarsHtml(habitsByDay, maxH, "habit") +
    "</div></div>" +
    '<div class="tp-card"><h3>Recent focus sessions</h3>' +
    (sessions.length
      ? sessions
          .map(function (s) {
            return (
              '<div class="tp-item"><strong>' +
              (s.mode === "stopwatch" ? "Stopwatch" : "Timer") +
              "</strong> · " +
              s.minutes +
              'm <span style="float:right;font-size:0.72rem;color:var(--ink-soft)">' +
              (s.at || "").slice(0, 16) +
              "</span></div>"
            );
          })
          .join("")
      : '<p class="tp-empty">No sessions yet — start one in Focus.</p>') +
    "</div>"
  );
}

function tpViewPomodoro() {
  var tab = tpPomodoro.activeTab || "timer";
  var m = Math.floor(tpPomodoro.left / 60);
  var s = tpPomodoro.left % 60;
  var dispT = String(m).padStart(2, "0") + ":" + String(s).padStart(2, "0");
  var curSw =
    tpStopwatch.elapsed +
    (tpStopwatch.running ? (Date.now() - tpStopwatch.startedAt) / 1000 : 0);
  var mS = Math.floor(curSw / 60),
    sS = Math.floor(curSw % 60);
  var dispS = String(mS).padStart(2, "0") + ":" + String(sS).padStart(2, "0");
  var tabsHtml =
    '<div class="tp-modes">' +
    '<button type="button" class="tp-btn outline ' +
    (tab === "timer" ? "active" : "") +
    '" data-tp-focus-tab="timer">Timer</button>' +
    '<button type="button" class="tp-btn outline ' +
    (tab === "stopwatch" ? "active" : "") +
    '" data-tp-focus-tab="stopwatch">Stopwatch</button>' +
    "</div>";
  var bodyHtml;
  if (tab === "stopwatch") {
    bodyHtml =
      '<h3>Stopwatch</h3><p class="tp-sub">Track time with no set limit · resetting logs it</p>' +
      '<div class="tp-timer" id="tpSwDisp">' +
      dispS +
      '</div><div class="tp-row" style="justify-content:center">' +
      '<button type="button" class="tp-btn" id="tpSwStart">' +
      (tpStopwatch.running ? "Pause" : "Start") +
      "</button>" +
      '<button type="button" class="tp-btn outline" id="tpSwReset">Reset</button></div>';
  } else {
    bodyHtml =
      '<h3>Timer</h3><p class="tp-sub">Set a duration and focus</p>' +
      (!tpPomodoro.running
        ? '<div class="tp-row" style="justify-content:center;align-items:center;gap:8px"><input id="tpTimerMins" type="number" min="1" max="180" value="' +
          (tpData.pomodoro.minutes || 25) +
          '" style="max-width:90px;text-align:center"><span class="tp-sub" style="margin:0">minutes</span></div>'
        : "") +
      '<div class="tp-timer" id="tpTimerDisp">' +
      dispT +
      '</div><div class="tp-row" style="justify-content:center">' +
      '<button type="button" class="tp-btn" id="tpPomStart">' +
      (tpPomodoro.running ? "Pause" : "Start") +
      "</button>" +
      '<button type="button" class="tp-btn outline" id="tpPomReset">Reset</button>' +
      (tpAlarmActive
        ? '<button type="button" class="tp-btn outline" id="tpPomStopAlarm">Stop ringing</button>'
        : "") +
      "</div>" +
      '<p class="tp-sub" style="margin-top:14px;font-size:0.78rem;line-height:1.5">' +
      "<strong>Timer sound not working on MacBook?</strong> Go to Safari &gt; Settings for This Website in the menu bar and ensure auto-play and sound permissions are allowed." +
      "</p>";
  }
  return (
    '<div class="tp-card tp-pomodoro">' +
    tabsHtml +
    bodyHtml +
    "</div>" +
    '<div class="tp-card"><h3>Total focus logged</h3><div class="tp-stat"><div class="n">' +
    Object.values(tpData.focusByDay).reduce(function (a, b) {
      return a + (b || 0);
    }, 0) +
    'm</div><div class="l">All time</div></div></div>'
  );
}

function tpViewRoutine(kind) {
  var list = tpData[kind] || [];
  var day = tpToday();
  var log = (tpData.routineLog[day] && tpData.routineLog[day][kind]) || [];
  var title = kind === "morning" ? "Morning routine" : "Night routine";
  var sub =
    kind === "morning"
      ? "Start the day with intention · checks reset daily"
      : "Close the day & prepare tomorrow · checks reset daily";
  var edit = tpIsEdit(kind);
  var html =
    '<div class="tp-card">' +
    tpCardHead(title, sub + " · " + day, kind) +
    (list
      .map(function (item) {
        var on = log.indexOf(item.id) >= 0;
        return (
          '<label class="tp-check ' +
          (on ? "done" : "") +
          '"><input type="checkbox" data-tp-routine="' +
          kind +
          '" data-id="' +
          item.id +
          '" ' +
          (on ? "checked" : "") +
          '><span style="flex:1">' +
          item.text +
          "</span>" +
          (edit
            ? '<button type="button" class="tp-btn outline sm" data-tp-edit="routineStep" data-id="' +
              item.id +
              '" data-kind="' +
              kind +
              '">Edit</button><button type="button" class="tp-btn danger sm" data-tp-del-routine="' +
              kind +
              '" data-id="' +
              item.id +
              '">✕</button>'
            : "") +
          "</label>"
        );
      })
      .join("") || '<p class="tp-empty">Empty routine.</p>') +
    (edit
      ? '<div class="tp-row"><input id="tpNewRoutine" placeholder="Add step…"><button type="button" class="tp-btn" id="tpAddRoutine" data-kind="' +
        kind +
        '">Add</button></div>'
      : "") +
    "</div>";
  if (kind === "night") {
    html +=
      '<div class="tp-card"><h3>Daily reflection</h3><p class="tp-sub">What went well? What will you improve?</p>' +
      tpFmtBar("#tpReflection") +
      '<textarea id="tpReflection" class="tp-notes" placeholder="Write a few lines… **bold** *italic* - bullets">' +
      (tpData.reflections[day] || "") +
      "</textarea>" +
      (tpData.reflections[day]
        ? '<div class="meta tp-md" style="margin-top:10px;font-size:0.9rem;color:var(--ink-soft)">' +
          tpMd(tpData.reflections[day]) +
          "</div>"
        : "") +
      '<div class="tp-row"><button type="button" class="tp-btn" id="tpSaveReflection">Save reflection</button></div></div>';
  }
  return html;
}

function tpViewAffirm() {
  var list = tpData.affirmations.custom || [];
  var idx = (tpData.affirmations.lastIndex || 0) % (list.length || 1);
  var text = list[idx] || "I grow a little every day.";
  var practiced = !!(
    tpData.affirmations.practiced && tpData.affirmations.practiced[tpToday()]
  );
  return (
    '<div class="tp-card"><h3>Today\'s affirmation</h3><p class="tp-sub">' +
    (practiced ? "Practiced today ✓" : "Read it slowly. Feel it as true.") +
    "</p>" +
    '<div class="tp-affirm" id="tpAffirmText">' +
    text +
    '</div><div class="tp-row" style="justify-content:center">' +
    '<button type="button" class="tp-btn outline" id="tpAffirmNext">Another</button><button type="button" class="tp-btn" id="tpAffirmPractice">' +
    (practiced ? "Practiced" : "Mark practiced") +
    "</button></div></div>" +
    '<div class="tp-card"><div class="tp-item-head"><div><h3>Future self</h3><p class="tp-sub">Who are you becoming?</p></div><button type="button" class="tp-btn outline sm" data-tp-edit="futureSelf" data-id="main">Edit</button></div>' +
    (tpData.affirmations.futureSelf
      ? '<div class="meta tp-md" style="margin-top:10px;font-size:0.92rem;color:var(--ink)">' +
        tpMd(tpData.affirmations.futureSelf) +
        "</div>"
      : '<p class="tp-empty">Write a vision for your future self.</p>') +
    "</div>" +
    '<div class="tp-card">' +
    tpCardHead("Your affirmations", "", "affirm") +
    list
      .map(function (t, i) {
        return (
          '<div class="tp-item"><div class="tp-item-head"><span>' +
          t +
          "</span>" +
          (tpIsEdit("affirm")
            ? '<span><button type="button" class="tp-btn outline sm" data-tp-edit="affirmation" data-id="' +
              i +
              '">Edit</button><button type="button" class="tp-btn danger sm" data-tp-del-affirm="' +
              i +
              '">✕</button></span>'
            : "") +
          "</div></div>"
        );
      })
      .join("") +
    (tpIsEdit("affirm")
      ? '<div class="tp-row"><input id="tpNewAffirm" placeholder="Add affirmation…"><button type="button" class="tp-btn" id="tpAddAffirm">Add</button></div>'
      : "") +
    "</div>"
  );
}

function tpViewGoals() {
  var edit = tpIsEdit("goals");
  return (
    '<div class="tp-card" style="padding-bottom:10px"><div class="tp-item-head"><div><h3>Goals</h3><p class="tp-sub">Career &amp; personal — one toggle edits both</p></div>' +
    tpEditToggleHtml("goals") +
    "</div></div>" +
    ["career", "personal"]
      .map(function (cat) {
        var items = tpData.goals[cat] || [];
        return (
          '<div class="tp-card"><h3>' +
          cat.charAt(0).toUpperCase() +
          cat.slice(1) +
          " goals</h3>" +
          (items
            .map(function (g) {
              return (
                '<div class="tp-item"><div class="tp-item-head"><strong>' +
                g.title +
                "</strong><span>" +
                (g.done ? '<span class="tp-tag done">Done</span> ' : "") +
                '<button type="button" class="tp-btn sm outline" data-tp-goal-prog="' +
                g.id +
                '" data-cat="' +
                cat +
                '">+10%</button>' +
                (edit
                  ? ' <button type="button" class="tp-btn sm outline" data-tp-edit="goal" data-id="' +
                    g.id +
                    '" data-cat="' +
                    cat +
                    '">Edit</button> <button type="button" class="tp-btn danger sm" data-tp-del-gcat="' +
                    cat +
                    '" data-id="' +
                    g.id +
                    '">✕</button>'
                  : "") +
                '</span></div><div class="tp-progress"><i style="width:' +
                Math.min(100, g.progress || 0) +
                '%"></i></div><div class="meta" style="font-size:0.72rem;color:var(--ink-soft)">' +
                (g.progress || 0) +
                "%" +
                (g.deadline ? " · " + g.deadline : "") +
                (g.milestone ? " · " + g.milestone : "") +
                "</div></div>"
              );
            })
            .join("") || '<p class="tp-empty">No goals yet.</p>') +
          (edit
            ? '<div class="tp-row"><input data-new-goal-title="' +
              cat +
              '" placeholder="Goal title…"><input data-new-goal-deadline="' +
              cat +
              '" type="date" style="flex:0.6"><input data-new-goal-ms="' +
              cat +
              '" placeholder="Next milestone…"><button type="button" class="tp-btn" data-tp-add-gcat="' +
              cat +
              '">Add</button></div>'
            : "") +
          "</div>"
        );
      })
      .join("")
  );
}

// Small icon+label pairs shared by the wishlist and recurring-buys
// cards, so "Gift"/"High priority"/"Got" etc. all get a quick visual
// cue instead of relying on badge color alone.
function tpWishForLabel(isGift) {
  return isGift ? "Gift" : "For me";
}
function tpWishPriLabel(p) {
  return p === "high" ? "High" : p === "low" ? "Low" : "Medium";
}
function tpWishStatusLabel(isGot) {
  return isGot ? "Got" : "Want";
}
// Wraps a saved link in markup that can't blow out the card's width —
// long unbroken URLs need an explicit break hint, not just a wrapping
// container, or they push the whole item past the edge of the page.
function tpWishLinkHtml(link) {
  if (!link) return "";
  return (
    '<div class="meta tp-wish-link" style="font-size:0.78rem"><a href="' +
    tpAttr(link) +
    '" target="_blank" rel="noopener" style="color:var(--sage)">' +
    link +
    "</a></div>"
  );
}

// Applies the Status / For / Priority filters, then sorts so
// "Got" items sink to the bottom — the list opens showing what's
// still outstanding first, with completed items still visible
// (just faded, per .tp-item-got) rather than hidden away.
function tpFilterAndSortWishItems(list, filters) {
  var f = filters || {};
  return (list || [])
    .filter(function (w) {
      var status = w.status === "got" ? "got" : "want";
      var forVal = w.for === "gift" ? "gift" : "me";
      var pri = w.priority || "medium";
      if (f.status && f.status !== "all" && f.status !== status) return false;
      if (f.for && f.for !== "all" && f.for !== forVal) return false;
      if (f.priority && f.priority !== "all" && f.priority !== pri)
        return false;
      return true;
    })
    .map(function (w, i) {
      return { item: w, i: i };
    })
    .sort(function (a, b) {
      var ag = a.item.status === "got" ? 1 : 0;
      var bg = b.item.status === "got" ? 1 : 0;
      return ag - bg || a.i - b.i; // stable: keep original order within each group
    })
    .map(function (x) {
      return x.item;
    });
}

// Renders the compact filter bar shown above the wishlist / recurring
// buys list — three small dropdowns plus a "showing X of Y" count
// and a clear-filters link that only appears once something's set.
function tpWishFilterBarHtml(idPrefix, filters, totalCount, shownCount) {
  var f = filters || {};
  var active =
    (f.status && f.status !== "all") ||
    (f.for && f.for !== "all") ||
    (f.priority && f.priority !== "all");
  return (
    '<div class="tp-filter-bar">' +
    '<label class="tp-filter-field"><span>Status</span><select id="' +
    idPrefix +
    'FilterStatus"><option value="all"' +
    (f.status === "all" || !f.status ? " selected" : "") +
    '>All</option><option value="want"' +
    (f.status === "want" ? " selected" : "") +
    '>Want</option><option value="got"' +
    (f.status === "got" ? " selected" : "") +
    ">Got</option></select></label>" +
    '<label class="tp-filter-field"><span>For</span><select id="' +
    idPrefix +
    'FilterFor"><option value="all"' +
    (f.for === "all" || !f.for ? " selected" : "") +
    '>All</option><option value="me"' +
    (f.for === "me" ? " selected" : "") +
    '>For me</option><option value="gift"' +
    (f.for === "gift" ? " selected" : "") +
    ">Gift</option></select></label>" +
    '<label class="tp-filter-field"><span>Priority</span><select id="' +
    idPrefix +
    'FilterPri"><option value="all"' +
    (f.priority === "all" || !f.priority ? " selected" : "") +
    '>All</option><option value="high"' +
    (f.priority === "high" ? " selected" : "") +
    '>High</option><option value="medium"' +
    (f.priority === "medium" ? " selected" : "") +
    '>Medium</option><option value="low"' +
    (f.priority === "low" ? " selected" : "") +
    ">Low</option></select></label>" +
    '<div class="tp-filter-meta"><span>Showing ' +
    shownCount +
    " of " +
    totalCount +
    "</span>" +
    (active
      ? ' <button type="button" class="tp-filter-clear" data-tp-filter-clear="' +
        idPrefix +
        '">Clear filters</button>'
      : "") +
    "</div>" +
    "</div>"
  );
}

// A quick little celebration burst — a few glyphs popping out and
// fading near the button that was just clicked. Purely decorative
// and self-cleaning; skipped entirely if the person prefers
// reduced motion (the CSS animation is disabled in that case, so
// this just creates and removes an invisible node).
function tpCelebrate(el) {
  if (!el) return;
  var rect = el.getBoundingClientRect();
  var cx = rect.left + rect.width / 2;
  var cy = rect.top + rect.height / 2;
  var glyphs = ["✨", "🎉", "💚"];
  glyphs.forEach(function (g, i) {
    var span = document.createElement("span");
    span.className = "tp-celebrate-pop";
    span.textContent = g;
    var spread = (i - 1) * 16;
    span.style.left = cx + spread + "px";
    span.style.top = cy + "px";
    span.style.animationDelay = i * 0.05 + "s";
    document.body.appendChild(span);
    setTimeout(function () {
      span.remove();
    }, 900);
  });
}

// Romantic-life type/status labels — same "icon + word" treatment
// as the wishlist tags, for visual consistency across the app.
function tpRomTypeLabel(t) {
  var map = {
    date: "Date",
    surprise: "Surprise",
    plan: "Plan",
    memory: "Memory",
    goal: "Goal",
  };
  return map[t] || map.date;
}
function tpRomStatusLabel(status) {
  return status === "done"
    ? "Done"
    : status === "planned"
      ? "Planned"
      : "Idea";
}

function tpViewWishlist() {
  var pri = { high: "hi", medium: "mid", low: "lo" };
  var edit = tpIsEdit("wishlist");
  var recEdit = tpIsEdit("recurringBuys");
  var freq = {
    weekly: "Weekly",
    monthly: "Monthly",
    every3months: "Every 3 months",
    every6months: "Every 6 months",
    yearly: "Yearly",
    asneeded: "As needed",
  };

  var wishAll = tpData.wishlist || [];
  var wishShown = tpFilterAndSortWishItems(wishAll, tpWishFilters);
  var wishHtml =
    wishShown
      .map(function (w) {
        var got = w.status === "got";
        return (
          '<div class="tp-item' +
          (got ? " tp-item-got" : "") +
          '"><div class="tp-item-head"><strong>' +
          w.title +
          '</strong><span><span class="tp-tag ' +
          (w.for === "gift" ? "wish-gift" : "wish-me") +
          '">' +
          tpWishForLabel(w.for === "gift") +
          '</span> <span class="tp-tag ' +
          (pri[w.priority] || "mid") +
          '">' +
          tpWishPriLabel(w.priority) +
          '</span> <button type="button" class="tp-tag tp-tag-btn ' +
          (got ? "wish-got" : "wish-want") +
          '" data-tp-wish-status="' +
          w.id +
          '" title="Click to mark as ' +
          (got ? "Want" : "Got") +
          '">' +
          tpWishStatusLabel(got) +
          "</button>" +
          (edit
            ? ' <button type="button" class="tp-btn sm outline" data-tp-edit="wishlist" data-id="' +
              w.id +
              '">Edit</button> <button type="button" class="tp-btn danger sm" data-tp-del-wish="' +
              w.id +
              '">✕</button>'
            : "") +
          "</span></div>" +
          (w.notes
            ? '<div class="meta tp-md" style="font-size:0.78rem;color:var(--ink-soft)">' +
              tpMd(w.notes) +
              "</div>"
            : "") +
          tpWishLinkHtml(w.link) +
          "</div>"
        );
      })
      .join("") ||
    (wishAll.length
      ? '<p class="tp-empty">Nothing matches these filters.</p>'
      : '<p class="tp-empty">Wishlist is empty.</p>');

  var recAll = tpData.recurringBuys || [];
  var recShown = tpFilterAndSortWishItems(recAll, tpRecFilters);
  var recHtml =
    recShown
      .map(function (w) {
        var got = w.status === "got";
        return (
          '<div class="tp-item' +
          (got ? " tp-item-got" : "") +
          '"><div class="tp-item-head"><strong>' +
          w.title +
          '</strong><span><span class="tp-tag ' +
          (w.for === "gift" ? "wish-gift" : "wish-me") +
          '">' +
          tpWishForLabel(w.for === "gift") +
          '</span> <span class="tp-tag">' +
          (freq[w.frequency] || "Monthly") +
          '</span> <span class="tp-tag ' +
          (pri[w.priority] || "mid") +
          '">' +
          tpWishPriLabel(w.priority) +
          '</span> <button type="button" class="tp-tag tp-tag-btn ' +
          (got ? "wish-got" : "wish-want") +
          '" data-tp-rec-status="' +
          w.id +
          '" title="Click to mark as ' +
          (got ? "Want" : "Got") +
          '">' +
          tpWishStatusLabel(got) +
          "</button>" +
          (recEdit
            ? ' <button type="button" class="tp-btn sm outline" data-tp-edit="recurringBuy" data-id="' +
              w.id +
              '">Edit</button> <button type="button" class="tp-btn danger sm" data-tp-del-recurring="' +
              w.id +
              '">✕</button>'
            : "") +
          "</span></div>" +
          (w.notes
            ? '<div class="meta tp-md" style="font-size:0.78rem;color:var(--ink-soft)">' +
              tpMd(w.notes) +
              "</div>"
            : "") +
          tpWishLinkHtml(w.link) +
          "</div>"
        );
      })
      .join("") ||
    (recAll.length
      ? '<p class="tp-empty">Nothing matches these filters.</p>'
      : '<p class="tp-empty">No recurring buys yet.</p>');

  return (
    '<div class="tp-card">' +
    tpCardHead("Wishlist", "Things to buy or achieve", "wishlist") +
    (wishAll.length
      ? tpWishFilterBarHtml(
          "tpWish",
          tpWishFilters,
          wishAll.length,
          wishShown.length,
        )
      : "") +
    wishHtml +
    (edit
      ? '<div class="tp-add-form"><p class="tp-add-form-title"><span aria-hidden="true">✚</span> Add a wishlist item</p>' +
        '<div class="tp-row">' +
        '<label class="tp-add-field"><span>Item</span><input id="tpWishTitle" placeholder="Item…"></label>' +
        '<label class="tp-add-field"><span>For</span><select id="tpWishFor"><option value="me" selected>For me</option><option value="gift">Gift</option></select></label>' +
        '<label class="tp-add-field"><span>Priority</span><select id="tpWishPri"><option value="high">High</option><option value="medium" selected>Medium</option><option value="low">Low</option></select></label>' +
        '<label class="tp-add-field"><span>Status</span><select id="tpWishStatus"><option value="want" selected>Want</option><option value="got">Got</option></select></label>' +
        "</div>" +
        '<div class="tp-row"><label class="tp-add-field" style="flex:1 1 220px"><span>Link (optional)</span><input id="tpWishLink" placeholder="https://…"></label></div>' +
        tpFmtBar("#tpWishNotes") +
        '<textarea id="tpWishNotes" class="tp-notes" placeholder="Notes (optional)… **bold** *italic* - bullets"></textarea>' +
        '<div class="tp-row"><button type="button" class="tp-btn" id="tpAddWish">Add</button></div></div>'
      : "") +
    "</div>" +
    '<div class="tp-card" style="margin-top:16px">' +
    tpCardHead("Recurring Buys", "Things you buy regularly", "recurringBuys") +
    (recAll.length
      ? tpWishFilterBarHtml(
          "tpRec",
          tpRecFilters,
          recAll.length,
          recShown.length,
        )
      : "") +
    recHtml +
    (recEdit
      ? '<div class="tp-add-form"><p class="tp-add-form-title"><span aria-hidden="true">✚</span> Add a recurring buy</p>' +
        '<div class="tp-row">' +
        '<label class="tp-add-field"><span>Item</span><input id="tpRecTitle" placeholder="Item…"></label>' +
        '<label class="tp-add-field"><span>For</span><select id="tpRecFor"><option value="me" selected>For me</option><option value="gift">Gift</option></select></label>' +
        '<label class="tp-add-field"><span>Frequency</span><select id="tpRecFreq"><option value="weekly">Weekly</option><option value="monthly" selected>Monthly</option><option value="every3months">Every 3 months</option><option value="every6months">Every 6 months</option><option value="yearly">Yearly</option><option value="asneeded">As needed</option></select></label>' +
        '<label class="tp-add-field"><span>Priority</span><select id="tpRecPri"><option value="high">High</option><option value="medium" selected>Medium</option><option value="low">Low</option></select></label>' +
        '<label class="tp-add-field"><span>Status</span><select id="tpRecStatus"><option value="want" selected>Want</option><option value="got">Got</option></select></label>' +
        "</div>" +
        '<div class="tp-row"><label class="tp-add-field" style="flex:1 1 220px"><span>Link (optional)</span><input id="tpRecLink" placeholder="https://…"></label></div>' +
        tpFmtBar("#tpRecNotes") +
        '<textarea id="tpRecNotes" class="tp-notes" placeholder="Notes (optional)… **bold** *italic* - bullets"></textarea>' +
        '<div class="tp-row"><button type="button" class="tp-btn" id="tpAddRecurring">Add</button></div></div>'
      : "") +
    "</div>"
  );
}

function tpViewBucket() {
  var edit = tpIsEdit("bucket");
  return (
    '<div class="tp-card">' +
    tpCardHead(
      "Life bucket list",
      "Experiences you want — separate from the shared couple list",
      "bucket",
    ) +
    ((tpData.bucket || [])
      .map(function (b) {
        return (
          '<label class="tp-check ' +
          (b.done ? "done" : "") +
          '"><input type="checkbox" data-tp-bucket="' +
          b.id +
          '" ' +
          (b.done ? "checked" : "") +
          '><div style="flex:1"><span>' +
          b.title +
          "</span>" +
          (b.done && b.dateDone
            ? '<div class="meta">Done ' + b.dateDone + "</div>"
            : "") +
          "</div>" +
          (edit
            ? '<button type="button" class="tp-btn outline sm" data-tp-edit="bucket" data-id="' +
              b.id +
              '">Edit</button><button type="button" class="tp-btn danger sm" data-tp-del-bucket="' +
              b.id +
              '">✕</button>'
            : "") +
          "</label>"
        );
      })
      .join("") ||
      '<p class="tp-empty">Add experiences you want in this lifetime.</p>') +
    (edit
      ? '<div class="tp-row"><input id="tpBucketTitle" placeholder="Experience…"><button type="button" class="tp-btn" id="tpAddBucket">Add</button></div>'
      : "") +
    "</div>"
  );
}

function tpViewRomantic() {
  var termLabels = { short: "Short-term", mid: "Mid-term", long: "Long-term" };
  var filt = tpRomTermFilter || "all";
  var edit = tpIsEdit("romantic");
  var items = (tpData.romantic || []).filter(function (r) {
    return filt === "all" || (r.term || "short") === filt;
  });
  return (
    '<div class="tp-card">' +
    tpCardHead(
      "Romantic life",
      "Date ideas, surprises, plans, memories to create",
      "romantic",
    ) +
    '<div class="tp-row" style="margin-bottom:8px">' +
    ["all", "short", "mid", "long"]
      .map(function (t) {
        return (
          '<button type="button" class="tp-btn sm ' +
          (filt === t ? "" : "outline") +
          '" data-tp-rom-term-filter="' +
          t +
          '">' +
          (t === "all" ? "All" : termLabels[t]) +
          "</button>"
        );
      })
      .join("") +
    "</div>" +
    (items
      .map(function (r) {
        return (
          '<div class="tp-item"><div class="tp-item-head"><strong>' +
          r.title +
          '</strong><span><span class="tp-tag">' +
          tpRomTypeLabel(r.type) +
          '</span> <span class="tp-tag">' +
          termLabels[r.term || "short"] +
          '</span> <button type="button" class="tp-tag tp-tag-btn ' +
          (r.status === "done"
            ? "rom-done"
            : r.status === "planned"
              ? "rom-planned"
              : "rom-idea") +
          '" data-tp-rom-status="' +
          r.id +
          '" title="Click to advance status">' +
          tpRomStatusLabel(r.status) +
          "</button>" +
          (edit
            ? ' <button type="button" class="tp-btn sm outline" data-tp-edit="romantic" data-id="' +
              r.id +
              '">Edit</button> <button type="button" class="tp-btn danger sm" data-tp-del-rom="' +
              r.id +
              '">✕</button>'
            : "") +
          "</span></div>" +
          (r.notes
            ? '<div class="meta tp-md" style="font-size:0.78rem;color:var(--ink-soft)">' +
              tpMd(r.notes) +
              "</div>"
            : "") +
          "</div>"
        );
      })
      .join("") || '<p class="tp-empty">Start collecting romantic ideas.</p>') +
    (edit
      ? '<div class="tp-row"><input id="tpRomTitle" placeholder="Title…"><select id="tpRomType"><option value="date">Date</option><option value="surprise">Surprise</option><option value="plan">Plan</option><option value="memory">Memory</option><option value="goal">Goal</option></select><select id="tpRomTerm"><option value="short" selected>Short-term</option><option value="mid">Mid-term</option><option value="long">Long-term</option></select><select id="tpRomStatus"><option value="idea" selected>Idea</option><option value="planned">Planned</option><option value="done">Done</option></select></div>' +
        tpFmtBar("#tpRomNotes") +
        '<textarea id="tpRomNotes" class="tp-notes" placeholder="Notes… **bold** *italic* - bullets"></textarea>' +
        '<div class="tp-row"><button type="button" class="tp-btn" id="tpAddRom">Add</button></div>'
      : "") +
    "</div>"
  );
}

function tpViewWorkout() {
  var w = tpEnsureWorkouts();
  var day = tpToday();
  var dayLog = w.log[day] || {};
  var session = w.session;
  var html = "";

  // Active session
  if (session && session.routineId) {
    var routine = (w.routines || []).find(function (r) {
      return r.id === session.routineId;
    });
    var rname = routine ? routine.name : "Workout";
    html += '<div class="tp-card"><h3>Session · ' + rname + "</h3>";
    html +=
      '<p class="tp-sub">Check exercises as you finish · adjust reps · ' +
      day +
      "</p>";
    var doneCount = 0;
    var total = (session.exerciseIds || []).length;
    (session.exerciseIds || []).forEach(function (eid) {
      var ex = (w.exercises || []).find(function (e) {
        return e.id === eid;
      });
      if (!ex) return;
      var done = !!(session.done && session.done[eid]);
      if (done) doneCount++;
      var reps =
        session.reps && session.reps[eid] != null
          ? session.reps[eid]
          : ex.targetReps || 10;
      html += '<div class="tp-item">';
      html += '<div class="tp-item-head">';
      html +=
        '<label class="tp-check ' +
        (done ? "done" : "") +
        '" style="flex:1;margin:0">';
      html +=
        '<input type="checkbox" data-tp-session-ex="' +
        eid +
        '" ' +
        (done ? "checked" : "") +
        ">";
      html += "<span><strong>" + ex.name + "</strong>";
      html +=
        '<div class="meta">' +
        (ex.targetSets || 3) +
        " sets · target " +
        (ex.targetReps || 10) +
        " " +
        (ex.unit || "reps") +
        "</div>";
      html += "</span></label>";
      html += '<span class="tp-reps">';
      html +=
        '<button type="button" data-tp-session-reps="' +
        eid +
        '" data-dir="-1">−</button>';
      html += "<span>" + reps + "</span>";
      html +=
        '<button type="button" data-tp-session-reps="' +
        eid +
        '" data-dir="1">+</button>';
      html += "</span></div>";
      if (ex.description)
        html +=
          '<div class="meta tp-md" style="font-size:0.78rem;color:var(--ink-soft);margin-top:6px">' +
          tpMd(ex.description) +
          "</div>";
      html += "</div>";
    });
    html += '<p class="tp-sub">' + doneCount + " / " + total + " done</p>";
    html +=
      '<div class="tp-row"><button type="button" class="tp-btn" id="tpFinishSession">Finish workout</button>';
    html +=
      '<button type="button" class="tp-btn outline" id="tpCancelSession">Cancel</button></div></div>';
  }

  // Routines
  var wEdit = tpIsEdit("workout");
  html +=
    '<div class="tp-card">' +
    tpCardHead(
      "Workout routines",
      "Group exercises into a routine and run it",
      "workout",
    );
  if (!(w.routines || []).length) {
    html +=
      '<p class="tp-empty">No routines yet' +
      (wEdit ? " — create one below." : ".") +
      "</p>";
  } else {
    (w.routines || []).forEach(function (r) {
      var doneToday = !!(dayLog.routines && dayLog.routines[r.id]);
      var names = (r.exerciseIds || [])
        .map(function (eid) {
          var ex = (w.exercises || []).find(function (e) {
            return e.id === eid;
          });
          return ex ? ex.name : null;
        })
        .filter(Boolean);
      html += '<div class="tp-item">';
      html += '<div class="tp-item-head"><strong>' + r.name + "</strong><span>";
      if (doneToday) html += '<span class="tp-tag done">✅ Done today</span> ';
      html +=
        '<button type="button" class="tp-btn sm" data-tp-start-routine="' +
        r.id +
        '">Start</button> ';
      if (wEdit) {
        html +=
          '<button type="button" class="tp-btn outline sm" data-tp-edit="workoutRoutine" data-id="' +
          r.id +
          '">Edit</button> ';
        html +=
          '<button type="button" class="tp-btn danger sm" data-tp-del-routine="' +
          r.id +
          '">✕</button>';
      }
      html += "</span></div>";
      if (r.description)
        html +=
          '<div class="meta tp-md" style="font-size:0.78rem;color:var(--ink-soft)">' +
          tpMd(r.description) +
          "</div>";
      html +=
        '<div class="meta" style="font-size:0.72rem;color:var(--ink-soft)">' +
        (names.length ? names.join(" · ") : "No exercises linked") +
        "</div>";
      html += "</div>";
    });
  }
  // New routine form
  if (wEdit) {
    html +=
      '<div style="margin-top:12px;padding-top:12px;border-top:1px solid rgba(43,38,34,0.08)">';
    html += '<p class="tp-sub">New routine</p>';
    html +=
      '<div class="tp-row"><input id="tpRoutineName" placeholder="Routine name (e.g. Push day)…"></div>';
    html += tpFmtBar("#tpRoutineDesc");
    html +=
      '<textarea id="tpRoutineDesc" class="tp-notes" placeholder="Description (optional)…"></textarea>';
    var exOpts = (w.exercises || [])
      .map(function (e) {
        return (
          '<label style="display:flex;align-items:center;gap:8px;margin:4px 0;font-size:0.86rem"><input type="checkbox" data-tp-routine-ex="' +
          e.id +
          '"> ' +
          e.name +
          "</label>"
        );
      })
      .join("");
    html += exOpts
      ? '<div style="margin:8px 0">' + exOpts + "</div>"
      : '<p class="tp-empty">Add exercises first, then attach them here.</p>';
    html +=
      '<div class="tp-row"><button type="button" class="tp-btn" id="tpAddRoutineWo">Add routine</button></div>';
    html += "</div>";
  }
  html += "</div>";

  // Exercises library
  html +=
    '<div class="tp-card"><h3>Exercises</h3><p class="tp-sub">Bump target reps with + / −' +
    (wEdit ? " · CRUD library" : "") +
    "</p>";
  if (!(w.exercises || []).length) {
    html += '<p class="tp-empty">No exercises yet.</p>';
  } else {
    (w.exercises || []).forEach(function (ex) {
      html += '<div class="tp-item">';
      html +=
        '<div class="tp-item-head"><strong>' + ex.name + "</strong><span>";
      html += '<span class="tp-reps" title="Target reps">';
      html +=
        '<button type="button" data-tp-ex-reps="' +
        ex.id +
        '" data-dir="-1">−</button>';
      html += "<span>" + (ex.targetReps || 10) + "</span>";
      html +=
        '<button type="button" data-tp-ex-reps="' +
        ex.id +
        '" data-dir="1">+</button>';
      html += "</span> ";
      if (wEdit)
        html +=
          '<button type="button" class="tp-btn danger sm" data-tp-del-ex="' +
          ex.id +
          '">✕</button>';
      html += "</span></div>";
      html +=
        '<div class="meta" style="font-size:0.72rem;color:var(--ink-soft)">' +
        (ex.targetSets || 3) +
        " sets · " +
        (ex.targetReps || 10) +
        " " +
        (ex.unit || "reps");
      if (ex.muscle) html += " · " + ex.muscle;
      html += "</div>";
      if (ex.description)
        html +=
          '<div class="meta tp-md" style="font-size:0.78rem;color:var(--ink-soft);margin-top:4px">' +
          tpMd(ex.description) +
          "</div>";
      if (wEdit) {
        html +=
          '<div class="tp-row" style="margin-top:8px"><button type="button" class="tp-btn outline sm" data-tp-edit="exercise" data-id="' +
          ex.id +
          '">Edit exercise</button>';
        var linked = (w.routines || [])
          .filter(function (r) {
            return (r.exerciseIds || []).indexOf(ex.id) >= 0;
          })
          .map(function (r) {
            return r.name;
          });
        html += linked.length
          ? '<span class="meta" style="align-self:center">In: ' +
            linked.join(" · ") +
            "</span>"
          : '<span class="meta" style="align-self:center">Not linked to a routine</span>';
        html += "</div>";
      }
      html += "</div>";
    });
  }
  if (wEdit) {
    html +=
      '<div style="margin-top:12px;padding-top:12px;border-top:1px solid rgba(43,38,34,0.08)">';
    html += '<p class="tp-sub">New exercise</p>';
    html +=
      '<div class="tp-row"><input id="tpExName" placeholder="Exercise name…">';
    html +=
      '<input id="tpExSets" type="number" min="1" value="3" style="max-width:70px" title="Sets">';
    html +=
      '<input id="tpExReps" type="number" min="1" value="10" style="max-width:70px" title="Reps">';
    html += '<input id="tpExMuscle" placeholder="Muscle (optional)"></div>';
    html += tpFmtBar("#tpExDesc");
    html +=
      '<textarea id="tpExDesc" class="tp-notes" placeholder="Form cues, notes… **bold** *italic* - bullets"></textarea>';
    html +=
      '<div class="tp-row"><button type="button" class="tp-btn" id="tpAddEx">Add exercise</button></div>';
    html += "</div>";
  }
  html += "</div>";

  return html;
}

function tpViewNotes() {
  if (!tpNotesIsUnlocked()) return tpNotesUnlockHtml();
  var val = tpData.notes || "";
  var edit = tpIsEdit("notes");
  return (
    '<div class="tp-card tp-notes-card">' +
    tpCardHead(
      "Notes",
      "A private space to scribble anything — ideas, plans, reminders, thoughts.",
      "notes",
    ) +
    (edit
      ? tpFmtBar("#tpBigNotes") +
        '<textarea id="tpBigNotes" class="tp-notes tp-big-notes" placeholder="Write anything here… **bold** *italic* - bullets · 1. numbered lists">' +
        tpAttr(val) +
        "</textarea>" +
        '<div class="tp-row"><button type="button" class="tp-btn" id="tpSaveBigNotes">Save notes</button><span class="tp-sub" id="tpNotesSaved" style="align-self:center;margin:0">Private · password protected</span></div>'
      : '<div class="tp-notes-view tp-md">' +
        (val
          ? tpMd(val)
          : '<span class="tp-notes-empty">No notes yet. Click Edit to start writing.</span>') +
        "</div>") +
    "</div>"
  );
}

function tpViewStudy() {
  var study = tpData.study || { courses: [] };
  var courses = Array.isArray(study.courses) ? study.courses : [];
  var edit = tpIsEdit("study");
  var html =
    '<div class="tp-card">' +
    tpCardHead("Courses", "Keep your courses organized here.", "study") +
    (courses.length
      ? courses
          .map(function (c) {
            return (
              '<div class="tp-item"><div class="tp-item-head"><div><strong>' +
              tpAttr(c.name || "Untitled course") +
              "</strong>" +
              (c.description
                ? '<div class="meta tp-md" style="font-size:0.78rem;color:var(--ink-soft);margin-top:5px">' +
                  tpMd(c.description) +
                  "</div>"
                : "") +
              "</div>" +
              (edit
                ? '<span><button type="button" class="tp-btn outline sm" data-tp-edit="course" data-id="' +
                  c.id +
                  '">Edit</button> <button type="button" class="tp-btn danger sm" data-tp-del-course="' +
                  c.id +
                  '">✕</button></span>'
                : "") +
              "</div></div>"
            );
          })
          .join("")
      : '<p class="tp-empty">No courses yet.</p>') +
    (edit
      ? '<div class="tp-row"><input id="tpNewCourseName" placeholder="Course name…"></div>' +
        tpFmtBar("#tpNewCourseDesc") +
        '<textarea id="tpNewCourseDesc" class="tp-notes" placeholder="Description (optional)… **bold** *italic* - bullets"></textarea>' +
        '<div class="tp-row"><button type="button" class="tp-btn" id="tpAddCourse">Add course</button></div>'
      : "") +
    "</div>";
  return html;
}

function tpBindChartTooltips() {
  var tip = document.getElementById("tpChartTooltip");
  if (!tip) return;
  function showTip(el) {
    var day = el.getAttribute("data-tp-bar-day");
    var val = el.getAttribute("data-tp-bar-value");
    if (!day && !val) return;
    tip.innerHTML = "";
    var strong = document.createElement("strong");
    strong.textContent = val || "";
    tip.appendChild(strong);
    tip.appendChild(document.createTextNode(day || ""));
    var r = el.getBoundingClientRect();
    tip.style.left = r.left + r.width / 2 + "px";
    tip.style.top = r.top - 8 + "px";
    tip.hidden = false;
    tip.classList.add("show");
  }
  function hideTip() {
    tip.classList.remove("show");
    tip.hidden = true;
  }
  document.querySelectorAll("[data-tp-bar-day]").forEach(function (el) {
    el.addEventListener("mouseenter", function () {
      showTip(el);
    });
    el.addEventListener("mousemove", function () {
      showTip(el);
    });
    el.addEventListener("mouseleave", hideTip);
    el.addEventListener(
      "touchstart",
      function (e) {
        e.preventDefault();
        showTip(el);
      },
      { passive: false },
    );
  });
  document.addEventListener(
    "touchstart",
    function (e) {
      if (!e.target.closest || !e.target.closest("[data-tp-bar-day]"))
        hideTip();
    },
    { passive: true },
  );
}
function tpBindView() {
  var notesUnlockBtn = document.getElementById("tpNotesUnlockBtn");
  if (notesUnlockBtn)
    notesUnlockBtn.addEventListener("click", function () {
      var input = document.getElementById("tpNotesPassInput");
      var err = document.getElementById("tpNotesPassErr");
      if (((input || {}).value || "") === TP_NOTES_PASSWORD) {
        tpNotesSetUnlocked();
        if (err) err.textContent = "";
        tpRender();
      } else {
        if (err) err.textContent = "Wrong password — try again.";
        if (input) {
          input.value = "";
          input.focus();
        }
      }
    });
  var notesPassInput = document.getElementById("tpNotesPassInput");
  if (notesPassInput)
    notesPassInput.addEventListener("keydown", function (e) {
      if (e.key === "Enter") notesUnlockBtn && notesUnlockBtn.click();
    });
  var saveNotes = document.getElementById("tpSaveBigNotes");
  if (saveNotes)
    saveNotes.addEventListener("click", function () {
      var ta = document.getElementById("tpBigNotes");
      tpData.notes = ta ? ta.value : "";
      tpSave();
      var saved = document.getElementById("tpNotesSaved");
      if (saved) {
        saved.textContent = "Saved · private · password protected";
        setTimeout(function () {
          if (saved) saved.textContent = "Private · password protected";
        }, 1800);
      }
    });
  tpBindChartTooltips();
  document.querySelectorAll("[data-tp-edit-toggle]").forEach(function (b) {
    b.addEventListener("click", function (e) {
      e.preventDefault();
      var k = b.getAttribute("data-tp-edit-toggle");
      tpEditMode[k] = !tpEditMode[k];
      tpRender();
    });
  });
  document.querySelectorAll("[data-tp-edit]").forEach(function (b) {
    b.addEventListener("click", function (e) {
      e.preventDefault();
      tpOpenEdit(b.getAttribute("data-tp-edit"), b.getAttribute("data-id"), {
        cat: b.getAttribute("data-cat") || "",
        kind: b.getAttribute("data-kind") || "",
        subjectId: b.getAttribute("data-subject") || "",
      });
    });
  });
  var editCancel = document.getElementById("tpEditCancel");
  var editSave = document.getElementById("tpEditSave");
  if (editCancel) editCancel.onclick = tpCloseEdit;
  if (editSave) editSave.onclick = tpSaveEdit;
  var editModal = document.getElementById("tpEditModal");
  if (editModal)
    editModal.onclick = function (e) {
      if (e.target === editModal) tpCloseEdit();
    };
  tpBindFormatControls(document.getElementById("tpMain") || document);
  document.querySelectorAll("[data-tp-habit]").forEach(function (el) {
    el.addEventListener("change", function () {
      tpHabitMark(el.getAttribute("data-tp-habit"), el.checked);
      tpRender();
    });
  });
  document.querySelectorAll("[data-tp-goal]").forEach(function (el) {
    el.addEventListener("change", function () {
      var g = tpWeekGoals().find(function (x) {
        return x.id === el.getAttribute("data-tp-goal");
      });
      if (g) {
        g.done = el.checked;
        tpSave();
        tpRender();
      }
    });
  });
  var addGoal = document.getElementById("tpAddGoal");
  if (addGoal)
    addGoal.addEventListener("click", function () {
      var t = ((document.getElementById("tpNewGoal") || {}).value || "").trim();
      if (!t) return;
      tpWeekGoals().push({ id: tpUid(), text: t, done: false });
      tpSave();
      tpRender();
    });
  document.querySelectorAll("[data-tp-del-goal]").forEach(function (b) {
    b.addEventListener("click", function (e) {
      e.preventDefault();
      var id = b.getAttribute("data-tp-del-goal");
      tpData.weeklyGoals[tpWeekKey()] = tpWeekGoals().filter(function (g) {
        return g.id !== id;
      });
      tpSave();
      tpRender();
    });
  });
  var addHabit = document.getElementById("tpAddHabit");
  if (addHabit)
    addHabit.addEventListener("click", function () {
      var t = (
        (document.getElementById("tpNewHabit") || {}).value || ""
      ).trim();
      if (!t) return;
      tpData.habits.push({
        id: tpUid(),
        name: t,
        streak: 0,
        best: 0,
        lastDone: "",
        log: {},
      });
      tpSave();
      tpRender();
    });
  document.querySelectorAll("[data-tp-del-habit]").forEach(function (b) {
    b.addEventListener("click", function (e) {
      e.preventDefault();
      tpData.habits = tpData.habits.filter(function (h) {
        return h.id !== b.getAttribute("data-tp-del-habit");
      });
      tpSave();
      tpRender();
    });
  });
  document.querySelectorAll("[data-tp-routine]").forEach(function (el) {
    el.addEventListener("change", function () {
      var kind = el.getAttribute("data-tp-routine");
      var id = el.getAttribute("data-id");
      var day = tpToday();
      tpData.routineLog[day] = tpData.routineLog[day] || {
        morning: [],
        night: [],
      };
      var arr = tpData.routineLog[day][kind] || [];
      if (el.checked && arr.indexOf(id) < 0) arr.push(id);
      if (!el.checked)
        tpData.routineLog[day][kind] = arr.filter(function (x) {
          return x !== id;
        });
      else tpData.routineLog[day][kind] = arr;
      tpSave();
      tpRender();
    });
  });
  var addR = document.getElementById("tpAddRoutine");
  if (addR)
    addR.addEventListener("click", function () {
      var kind = addR.getAttribute("data-kind");
      var t = (
        (document.getElementById("tpNewRoutine") || {}).value || ""
      ).trim();
      if (!t) return;
      tpData[kind].push({ id: tpUid(), text: t });
      tpSave();
      tpRender();
    });
  document.querySelectorAll("[data-tp-del-routine]").forEach(function (b) {
    b.addEventListener("click", function (e) {
      e.preventDefault();
      var kind = b.getAttribute("data-tp-del-routine");
      var id = b.getAttribute("data-id");
      tpData[kind] = tpData[kind].filter(function (x) {
        return x.id !== id;
      });
      tpSave();
      tpRender();
    });
  });
  var saveRef = document.getElementById("tpSaveReflection");
  if (saveRef)
    saveRef.addEventListener("click", function () {
      tpData.reflections[tpToday()] =
        (document.getElementById("tpReflection") || {}).value || "";
      tpSave();
      if (typeof showToast === "function")
        showToast("Reflection saved", "updated");
    });
  document.querySelectorAll("[data-tp-focus-tab]").forEach(function (b) {
    b.addEventListener("click", function () {
      tpGetAudioCtx();
      tpPomodoro.activeTab = b.getAttribute("data-tp-focus-tab");
      tpRender();
    });
  });
  var timerMins = document.getElementById("tpTimerMins");
  if (timerMins)
    timerMins.addEventListener("change", function () {
      var v = Math.max(1, Math.min(180, parseInt(this.value, 10) || 25));
      tpData.pomodoro.minutes = v;
      tpSave();
      if (!tpPomodoro.running) tpPomodoro.left = v * 60;
      tpRender();
    });
  var pomStart = document.getElementById("tpPomStart");
  if (pomStart)
    pomStart.addEventListener("click", function () {
      tpGetAudioCtx();
      if (tpPomodoro.running) tpPomPause();
      else tpPomStart();
      tpRender();
    });
  var pomReset = document.getElementById("tpPomReset");
  if (pomReset)
    pomReset.addEventListener("click", function () {
      tpGetAudioCtx();
      tpPomStop();
      tpPomodoro.left = tpTimerSeconds();
      tpRender();
    });
  var stopAlarm = document.getElementById("tpPomStopAlarm");
  if (stopAlarm)
    stopAlarm.addEventListener("click", function () {
      tpStopAlarm();
      tpRender();
    });
  var swStart = document.getElementById("tpSwStart");
  if (swStart)
    swStart.addEventListener("click", function () {
      if (tpStopwatch.running) tpSwPause();
      else tpSwStart();
      tpRender();
    });
  var swReset = document.getElementById("tpSwReset");
  if (swReset)
    swReset.addEventListener("click", function () {
      tpSwReset();
    });
  var affNext = document.getElementById("tpAffirmNext");
  if (affNext)
    affNext.addEventListener("click", function () {
      var n = (tpData.affirmations.custom || []).length || 1;
      tpData.affirmations.lastIndex =
        ((tpData.affirmations.lastIndex || 0) + 1) % n;
      tpSave();
      tpRender();
    });
  var affPr = document.getElementById("tpAffirmPractice");
  if (affPr)
    affPr.addEventListener("click", function () {
      tpData.affirmations.practiced = tpData.affirmations.practiced || {};
      tpData.affirmations.practiced[tpToday()] = true;
      tpSave();
      tpRender();
    });
  var addAff = document.getElementById("tpAddAffirm");
  if (addAff)
    addAff.addEventListener("click", function () {
      var t = (
        (document.getElementById("tpNewAffirm") || {}).value || ""
      ).trim();
      if (!t) return;
      tpData.affirmations.custom.push(t);
      tpSave();
      tpRender();
    });
  document.querySelectorAll("[data-tp-del-affirm]").forEach(function (b) {
    b.addEventListener("click", function () {
      tpData.affirmations.custom.splice(
        parseInt(b.getAttribute("data-tp-del-affirm"), 10),
        1,
      );
      tpSave();
      tpRender();
    });
  });
  document.querySelectorAll("[data-tp-add-gcat]").forEach(function (b) {
    b.addEventListener("click", function () {
      var cat = b.getAttribute("data-tp-add-gcat");
      var title = (
        (document.querySelector('[data-new-goal-title="' + cat + '"]') || {})
          .value || ""
      ).trim();
      var deadline =
        (document.querySelector('[data-new-goal-deadline="' + cat + '"]') || {})
          .value || "";
      var milestone =
        (document.querySelector('[data-new-goal-ms="' + cat + '"]') || {})
          .value || "";
      if (!title) return;
      tpData.goals[cat] = tpData.goals[cat] || [];
      tpData.goals[cat].push({
        id: tpUid(),
        title: title,
        progress: 0,
        deadline: deadline,
        milestone: milestone,
        done: false,
      });
      tpSave();
      tpRender();
    });
  });
  document.querySelectorAll("[data-tp-goal-prog]").forEach(function (b) {
    b.addEventListener("click", function () {
      var cat = b.getAttribute("data-cat");
      var id = b.getAttribute("data-tp-goal-prog");
      var g = (tpData.goals[cat] || []).find(function (x) {
        return x.id === id;
      });
      if (!g) return;
      g.progress = Math.min(100, (g.progress || 0) + 10);
      if (g.progress >= 100) g.done = true;
      tpSave();
      tpRender();
    });
  });
  document.querySelectorAll("[data-tp-del-gcat]").forEach(function (b) {
    b.addEventListener("click", function () {
      var cat = b.getAttribute("data-tp-del-gcat");
      var id = b.getAttribute("data-id");
      tpData.goals[cat] = (tpData.goals[cat] || []).filter(function (x) {
        return x.id !== id;
      });
      tpSave();
      tpRender();
    });
  });
  var addWish = document.getElementById("tpAddWish");
  if (addWish)
    addWish.addEventListener("click", function () {
      var title = (
        (document.getElementById("tpWishTitle") || {}).value || ""
      ).trim();
      if (!title) return;
      tpData.wishlist.push({
        id: tpUid(),
        title: title,
        for: (document.getElementById("tpWishFor") || {}).value || "me",
        priority:
          (document.getElementById("tpWishPri") || {}).value || "medium",
        link: (
          (document.getElementById("tpWishLink") || {}).value || ""
        ).trim(),
        notes: (document.getElementById("tpWishNotes") || {}).value || "",
        status: (document.getElementById("tpWishStatus") || {}).value || "want",
      });
      tpSave();
      tpRender();
    });
  var addRecurring = document.getElementById("tpAddRecurring");
  if (addRecurring)
    addRecurring.addEventListener("click", function () {
      var title = (
        (document.getElementById("tpRecTitle") || {}).value || ""
      ).trim();
      if (!title) return;
      tpData.recurringBuys.push({
        id: tpUid(),
        title: title,
        for: (document.getElementById("tpRecFor") || {}).value || "me",
        frequency:
          (document.getElementById("tpRecFreq") || {}).value || "monthly",
        priority: (document.getElementById("tpRecPri") || {}).value || "medium",
        link: ((document.getElementById("tpRecLink") || {}).value || "").trim(),
        notes: (document.getElementById("tpRecNotes") || {}).value || "",
        status: (document.getElementById("tpRecStatus") || {}).value || "want",
      });
      tpSave();
      tpRender();
    });
  document.querySelectorAll("[data-tp-del-recurring]").forEach(function (b) {
    b.addEventListener("click", function () {
      tpData.recurringBuys = tpData.recurringBuys.filter(function (x) {
        return x.id !== b.getAttribute("data-tp-del-recurring");
      });
      tpSave();
      tpRender();
    });
  });
  document.querySelectorAll("[data-tp-wish-status]").forEach(function (b) {
    b.addEventListener("click", function () {
      var w = tpData.wishlist.find(function (x) {
        return x.id === b.getAttribute("data-tp-wish-status");
      });
      if (w) {
        w.status = w.status === "got" ? "want" : "got";
        if (w.status === "got") tpCelebrate(b);
        tpSave();
        tpRender();
      }
    });
  });
  document.querySelectorAll("[data-tp-rec-status]").forEach(function (b) {
    b.addEventListener("click", function () {
      var w = tpData.recurringBuys.find(function (x) {
        return x.id === b.getAttribute("data-tp-rec-status");
      });
      if (w) {
        w.status = w.status === "got" ? "want" : "got";
        if (w.status === "got") tpCelebrate(b);
        tpSave();
        tpRender();
      }
    });
  });
  document.querySelectorAll("[data-tp-del-wish]").forEach(function (b) {
    b.addEventListener("click", function () {
      tpData.wishlist = tpData.wishlist.filter(function (x) {
        return x.id !== b.getAttribute("data-tp-del-wish");
      });
      tpSave();
      tpRender();
    });
  });
  // Wishlist / recurring-buys filter bars — each dropdown just
  // updates the matching filter-state field and re-renders; the
  // clear-filters link resets all three fields for that list back
  // to "all" at once.
  ["Status", "For", "Pri"].forEach(function (suffix) {
    var key = suffix === "Pri" ? "priority" : suffix.toLowerCase();
    var wishSel = document.getElementById("tpWishFilter" + suffix);
    if (wishSel)
      wishSel.addEventListener("change", function () {
        tpWishFilters[key] = wishSel.value;
        tpRender();
      });
    var recSel = document.getElementById("tpRecFilter" + suffix);
    if (recSel)
      recSel.addEventListener("change", function () {
        tpRecFilters[key] = recSel.value;
        tpRender();
      });
  });
  document.querySelectorAll("[data-tp-filter-clear]").forEach(function (b) {
    b.addEventListener("click", function () {
      var target =
        b.getAttribute("data-tp-filter-clear") === "tpRec"
          ? tpRecFilters
          : tpWishFilters;
      target.status = "all";
      target.for = "all";
      target.priority = "all";
      tpRender();
    });
  });
  var addBucket = document.getElementById("tpAddBucket");
  if (addBucket)
    addBucket.addEventListener("click", function () {
      var title = (
        (document.getElementById("tpBucketTitle") || {}).value || ""
      ).trim();
      if (!title) return;
      tpData.bucket.push({
        id: tpUid(),
        title: title,
        done: false,
        dateDone: "",
      });
      tpSave();
      tpRender();
    });
  document.querySelectorAll("[data-tp-bucket]").forEach(function (el) {
    el.addEventListener("change", function () {
      var b = tpData.bucket.find(function (x) {
        return x.id === el.getAttribute("data-tp-bucket");
      });
      if (b) {
        b.done = el.checked;
        b.dateDone = el.checked ? tpToday() : "";
        tpSave();
        tpRender();
      }
    });
  });
  document.querySelectorAll("[data-tp-del-bucket]").forEach(function (b) {
    b.addEventListener("click", function (e) {
      e.preventDefault();
      tpData.bucket = tpData.bucket.filter(function (x) {
        return x.id !== b.getAttribute("data-tp-del-bucket");
      });
      tpSave();
      tpRender();
    });
  });
  var addRom = document.getElementById("tpAddRom");
  if (addRom)
    addRom.addEventListener("click", function () {
      var title = (
        (document.getElementById("tpRomTitle") || {}).value || ""
      ).trim();
      if (!title) return;
      tpData.romantic.push({
        id: tpUid(),
        title: title,
        type: (document.getElementById("tpRomType") || {}).value || "date",
        term: (document.getElementById("tpRomTerm") || {}).value || "short",
        notes: (document.getElementById("tpRomNotes") || {}).value || "",
        status: (document.getElementById("tpRomStatus") || {}).value || "idea",
      });
      tpSave();
      tpRender();
    });
  document.querySelectorAll("[data-tp-rom-term-filter]").forEach(function (b) {
    b.addEventListener("click", function () {
      tpRomTermFilter = b.getAttribute("data-tp-rom-term-filter");
      tpRender();
    });
  });
  document.querySelectorAll("[data-tp-rom-status]").forEach(function (b) {
    b.addEventListener("click", function () {
      var r = tpData.romantic.find(function (x) {
        return x.id === b.getAttribute("data-tp-rom-status");
      });
      if (!r) return;
      var cycle = ["idea", "planned", "done"];
      r.status = cycle[(cycle.indexOf(r.status || "idea") + 1) % cycle.length];
      if (r.status === "done") tpCelebrate(b);
      tpSave();
      tpRender();
    });
  });
  document.querySelectorAll("[data-tp-del-rom]").forEach(function (b) {
    b.addEventListener("click", function () {
      tpData.romantic = tpData.romantic.filter(function (x) {
        return x.id !== b.getAttribute("data-tp-del-rom");
      });
      tpSave();
      tpRender();
    });
  });
  var addCourse = document.getElementById("tpAddCourse");
  if (addCourse)
    addCourse.addEventListener("click", function () {
      var name = (
        (document.getElementById("tpNewCourseName") || {}).value || ""
      ).trim();
      if (!name) return;
      tpData.study = tpData.study || { courses: [] };
      tpData.study.courses = tpData.study.courses || [];
      tpData.study.courses.push({
        id: tpUid(),
        name: name,
        description: (
          (document.getElementById("tpNewCourseDesc") || {}).value || ""
        ).trim(),
      });
      tpSave();
      tpRender();
    });
  document.querySelectorAll("[data-tp-del-course]").forEach(function (b) {
    b.addEventListener("click", function (e) {
      e.preventDefault();
      tpData.study = tpData.study || { courses: [] };
      tpData.study.courses = (tpData.study.courses || []).filter(function (c) {
        return c.id !== b.getAttribute("data-tp-del-course");
      });
      tpSave();
      tpRender();
    });
  });
  document.querySelectorAll("[data-tp-del-subject]").forEach(function (b) {
    b.addEventListener("click", function (e) {
      e.preventDefault();
      tpData.study.subjects = (tpData.study.subjects || []).filter(
        function (x) {
          return x.id !== b.getAttribute("data-tp-del-subject");
        },
      );
      tpSave();
      tpRender();
    });
  });
  document.querySelectorAll("[data-tp-add-portion]").forEach(function (b) {
    b.addEventListener("click", function () {
      var sid = b.getAttribute("data-tp-add-portion");
      var input = document.querySelector('[data-new-portion="' + sid + '"]');
      var t = ((input || {}).value || "").trim();
      if (!t) return;
      var s = (tpData.study.subjects || []).find(function (x) {
        return x.id === sid;
      });
      if (!s) return;
      s.portions = s.portions || [];
      s.portions.push({ id: tpUid(), text: t, done: false });
      tpSave();
      tpRender();
    });
  });
  document.querySelectorAll("[data-tp-portion]").forEach(function (el) {
    el.addEventListener("change", function () {
      var sid = el.getAttribute("data-subject");
      var pid = el.getAttribute("data-tp-portion");
      var s = (tpData.study.subjects || []).find(function (x) {
        return x.id === sid;
      });
      if (!s) return;
      var p = (s.portions || []).find(function (x) {
        return x.id === pid;
      });
      if (p) {
        p.done = el.checked;
        tpSave();
        tpRender();
      }
    });
  });

  // ---- Workout handlers ----
  var addEx = document.getElementById("tpAddEx");
  if (addEx)
    addEx.addEventListener("click", function () {
      var name = (
        (document.getElementById("tpExName") || {}).value || ""
      ).trim();
      if (!name) return;
      var sets =
        parseInt(
          (document.getElementById("tpExSets") || {}).value || "3",
          10,
        ) || 3;
      var reps =
        parseInt(
          (document.getElementById("tpExReps") || {}).value || "10",
          10,
        ) || 10;
      var muscle = (
        (document.getElementById("tpExMuscle") || {}).value || ""
      ).trim();
      var desc = (
        (document.getElementById("tpExDesc") || {}).value || ""
      ).trim();
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
      w.exercises = w.exercises.filter(function (x) {
        return x.id !== id;
      });
      w.routines.forEach(function (r) {
        r.exerciseIds = (r.exerciseIds || []).filter(function (eid) {
          return eid !== id;
        });
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
      var ex = w.exercises.find(function (x) {
        return x.id === id;
      });
      if (!ex) return;
      ex.targetReps = Math.max(1, (ex.targetReps || 10) + dir);
      tpSave();
      tpRender();
    });
  });
  var addRoutineWo = document.getElementById("tpAddRoutineWo");
  if (addRoutineWo)
    addRoutineWo.addEventListener("click", function () {
      var name = (
        (document.getElementById("tpRoutineName") || {}).value || ""
      ).trim();
      if (!name) return;
      var desc = (
        (document.getElementById("tpRoutineDesc") || {}).value || ""
      ).trim();
      var ids = [];
      document
        .querySelectorAll("[data-tp-routine-ex]:checked")
        .forEach(function (cb) {
          ids.push(cb.getAttribute("data-tp-routine-ex"));
        });
      var w = tpEnsureWorkouts();
      w.routines.push({
        id: tpUid(),
        name: name,
        description: desc,
        exerciseIds: ids,
      });
      tpSave();
      tpRender();
    });
  document.querySelectorAll("[data-tp-del-routine]").forEach(function (b) {
    b.addEventListener("click", function (e) {
      e.preventDefault();
      var id = b.getAttribute("data-tp-del-routine");
      var w = tpEnsureWorkouts();
      w.routines = w.routines.filter(function (r) {
        return r.id !== id;
      });
      if (w.session && w.session.routineId === id) w.session = null;
      tpSave();
      tpRender();
    });
  });
  document.querySelectorAll("[data-tp-start-routine]").forEach(function (b) {
    b.addEventListener("click", function () {
      var id = b.getAttribute("data-tp-start-routine");
      var w = tpEnsureWorkouts();
      var r = w.routines.find(function (x) {
        return x.id === id;
      });
      if (!r) return;
      var reps = {};
      (r.exerciseIds || []).forEach(function (eid) {
        var ex = w.exercises.find(function (e) {
          return e.id === eid;
        });
        reps[eid] = ex ? ex.targetReps || 10 : 10;
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
  if (finish)
    finish.addEventListener("click", function () {
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
          var ex = w.exercises.find(function (e) {
            return e.id === eid;
          });
          if (
            ex &&
            w.session.reps &&
            w.session.reps[eid] > (ex.targetReps || 0)
          ) {
            ex.targetReps = w.session.reps[eid];
          }
        }
      });
      w.session = null;
      tpSave();
      if (typeof showToast === "function")
        showToast("Workout finished · nice work", "updated");
      tpRender();
    });
  var cancel = document.getElementById("tpCancelSession");
  if (cancel)
    cancel.addEventListener("click", function () {
      var w = tpEnsureWorkouts();
      w.session = null;
      tpSave();
      tpRender();
    });
}

function initThommyPersonal() {
  tpLoad();
  tpPomodoro.left = tpTimerSeconds();
  // Daily bits (habits/routines) reset at midnight; goals now reset weekly
  // (every Monday) instead.
  var tpLastDayKey = tpToday();
  var tpLastWeekKey = tpWeekKey();
  function tpCheckNewDay() {
    var now = tpToday();
    var nowWeek = tpWeekKey();
    var dayChanged = now !== tpLastDayKey;
    var weekChanged = nowWeek !== tpLastWeekKey;
    if (!dayChanged && !weekChanged) return;
    tpLastDayKey = now;
    tpLastWeekKey = nowWeek;
    if (tpIsUnlocked()) {
      if (typeof showToast === "function")
        showToast(
          weekChanged
            ? "New week — weekly goals cleared · habits & routines unchecked"
            : "New day — habits & routines unchecked",
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
  if (unlockBtn)
    unlockBtn.addEventListener("click", function () {
      var v = (document.getElementById("tpPassInput") || {}).value || "";
      var err = document.getElementById("tpPassErr");
      if (v === TP_PASSWORD) {
        tpSetUnlocked();
        if (err) err.textContent = "";
        tpMaybeFirebaseLoad().then(function () {
          tpRender();
        });
        tpRender();
      } else if (v === TP_OLD_PASSWORD) {
        if (err) err.textContent = "";
        tpRunCrashGag(true);
      } else {
        if (err) err.textContent = "";
        tpRunCrashGag(false);
      }
    });
  var passInput = document.getElementById("tpPassInput");
  if (passInput)
    passInput.addEventListener("keydown", function (e) {
      if (e.key === "Enter") unlockBtn && unlockBtn.click();
    });
  var nav = document.getElementById("tpNav");
  if (nav)
    nav.addEventListener("click", function (e) {
      var btn = e.target.closest("button[data-tp]");
      if (!btn) return;
      tpView = btn.dataset.tp;
      tpRender();
    });
}
window.addEventListener("beforeunload", function () {
  tpStopAlarm();
});
initThommyPersonal();

/* ================================================================
   PHOTO BOOTH — live two-camera duo view (WebRTC)
   ----------------------------------------------------------------
   Signaling lives in Firestore only long enough to connect (collection
   "photoboothCalls" and its candidate sub-collections). Video goes
   browser-to-browser, or through the TURN relay when needed. Nothing
   from the camera is stored. The strip editor is js/photobooth-studio.js.
   ================================================================ */
(function () {
  const PB_STUN_SERVERS = [
    {
      urls: ["stun:stun.l.google.com:19302", "stun:stun1.l.google.com:19302"],
    },
  ];
  // Last-resort fallback TURN relay — a shared public credential
  // (openrelay.metered.ca) that anyone online can use. It has become
  // unreliable over time (it's a free shared resource, not something
  // dedicated to this site), so it's kept only as a fallback if you
  // haven't set up your own free TURN credentials in CONFIG.meteredTurn
  // above. Getting your own takes 5 minutes — see docs/turn-setup.md
  // — and fixes cross-network connections for good.
  const PB_FALLBACK_TURN_SERVERS = [
    {
      urls: "turn:openrelay.metered.ca:80",
      username: "openrelayproject",
      credential: "openrelayproject",
    },
    {
      urls: "turn:openrelay.metered.ca:443",
      username: "openrelayproject",
      credential: "openrelayproject",
    },
    {
      urls: "turn:openrelay.metered.ca:443?transport=tcp",
      username: "openrelayproject",
      credential: "openrelayproject",
    },
  ];
  // Cache fetched TURN credentials for a bit so we don't hit the
  // Metered API on every single connection attempt/retry.
  let pbIceServersCache = null;
  let pbIceServersCacheAt = 0;
  const PB_ICE_CACHE_MS = 20 * 60 * 1000; // 20 minutes

  async function pbGetIceServers() {
    if (
      pbIceServersCache &&
      Date.now() - pbIceServersCacheAt < PB_ICE_CACHE_MS
    ) {
      return pbIceServersCache;
    }
    if (isMeteredTurnConfigured()) {
      try {
        const url =
          "https://" +
          CONFIG.meteredTurn.domain +
          "/api/v1/turn/credentials?apiKey=" +
          encodeURIComponent(CONFIG.meteredTurn.apiKey);
        const ctrl =
          typeof AbortController !== "undefined" ? new AbortController() : null;
        const timer = ctrl ? setTimeout(() => ctrl.abort(), 6000) : null;
        const res = await fetch(url, ctrl ? { signal: ctrl.signal } : {});
        if (timer) clearTimeout(timer);
        const bodyText = await res.text();
        if (res.ok) {
          let servers = null;
          try {
            servers = JSON.parse(bodyText);
          } catch (parseError) {
            console.warn(
              "[photobooth] Metered TURN returned invalid JSON; falling back to shared relay",
              parseError,
            );
          }
          if (Array.isArray(servers) && servers.length) {
            const combined = PB_STUN_SERVERS.concat(servers);
            pbIceServersCache = combined;
            pbIceServersCacheAt = Date.now();
            console.info(
              "[photobooth] Metered TURN credentials loaded (" +
                servers.length +
                " ICE servers)",
            );
            return combined;
          }
        }
        // The body is useful for diagnosing 401/400 responses, but never
        // log the API key itself.
        let errorMessage = bodyText;
        try {
          const errorJson = JSON.parse(bodyText);
          errorMessage = errorJson.error || errorJson.message || bodyText;
        } catch (_) {}
        console.warn(
          "[photobooth] Metered TURN credential fetch failed (status " +
            res.status +
            "): " +
            errorMessage +
            ". Falling back to shared relay.",
        );
      } catch (e) {
        console.warn(
          "[photobooth] Metered TURN credential fetch errored, falling back to shared relay",
          e,
        );
      }
    }
    // Not configured, or the fetch above failed — fall back to the
    // shared public relay so the booth still has a chance of working
    // across networks instead of only failing silently.
    return PB_STUN_SERVERS.concat(PB_FALLBACK_TURN_SERVERS);
  }
  const PB_CALL_TTL_MS = 10 * 60 * 1000; // booth codes expire after 10 min
  const PB_SHOT_W = 300; // each half's captured width (px)
  const PB_SHOT_H = 400; // each half's captured height (px)
  const PB_SOLO_WAIT_MS = 20000; // offer the solo-mode nudge after this long alone

  const PB_FILTERS = [
    { id: "normal", en: "Normal", pt: "Normal", css: "none" },
    {
      id: "bw",
      en: "Black & White",
      pt: "Preto e branco",
      css: "grayscale(1) contrast(1.05)",
    },
    {
      id: "sepia",
      en: "Sepia",
      pt: "Sépia",
      css: "sepia(0.65) contrast(1.05) saturate(1.1)",
    },
    {
      id: "vintage",
      en: "Vintage",
      pt: "Vintage",
      css: "sepia(0.3) contrast(0.9) brightness(1.05) saturate(0.85)",
    },
    {
      id: "vivid",
      en: "Vivid",
      pt: "Vívido",
      css: "saturate(1.6) contrast(1.1)",
    },
    {
      id: "soft",
      en: "Soft",
      pt: "Suave",
      css: "brightness(1.08) contrast(0.92) saturate(0.95)",
    },
  ];

  // Patterns are pure shapes — no baked-in color. Background and
  // accent (pattern + frame) colors are chosen freely via <input
  // type="color"> so any RGB value works, not just a few presets.
  const PB_PATTERNS = {
    none: { en: "No pattern", pt: "Sem padrão" },
    dots: { en: "Polka Dot", pt: "Poá" },
    stars: { en: "Starry", pt: "Estrelado" },
    hearts: { en: "Hearts", pt: "Corações" },
  };

  let pbBgColor = "#ffffff";
  let pbAccentColor = "#111111";
  let pbPatternId = "none";
  let pbPolaroid = false;

  function pbSeededRandom(seed) {
    let s = seed | 0;
    return function () {
      s = (s + 0x6d2b79f5) | 0;
      let t = Math.imul(s ^ (s >>> 15), 1 | s);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }

  function pbColorLuminance(hex) {
    const c = String(hex || "#ffffff").replace("#", "");
    const full =
      c.length === 3
        ? c
            .split("")
            .map((ch) => ch + ch)
            .join("")
        : c;
    const r = parseInt(full.substring(0, 2), 16) || 0;
    const g = parseInt(full.substring(2, 4), 16) || 0;
    const b = parseInt(full.substring(4, 6), 16) || 0;
    return (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  }

  function pbAutoTextColor(bgHex) {
    return pbColorLuminance(bgHex) > 0.6 ? "#2b2622" : "#f4f1ea";
  }

  function pbDrawStarShape(ctx, cx, cy, outerR, innerR, rotation) {
    const spikes = 5;
    let rot = (Math.PI / 2) * 3 + rotation;
    const step = Math.PI / spikes;
    ctx.beginPath();
    ctx.moveTo(cx, cy - outerR);
    for (let i = 0; i < spikes; i++) {
      let x = cx + Math.cos(rot) * outerR;
      let y = cy + Math.sin(rot) * outerR;
      ctx.lineTo(x, y);
      rot += step;
      x = cx + Math.cos(rot) * innerR;
      y = cy + Math.sin(rot) * innerR;
      ctx.lineTo(x, y);
      rot += step;
    }
    ctx.closePath();
    ctx.fill();
  }

  function pbDrawHeartShape(ctx, cx, cy, size) {
    const top = cy - size * 0.35;
    ctx.beginPath();
    ctx.moveTo(cx, top + size * 0.3);
    ctx.bezierCurveTo(
      cx,
      top,
      cx - size / 2,
      top,
      cx - size / 2,
      top + size * 0.3,
    );
    ctx.bezierCurveTo(
      cx - size / 2,
      top + size * 0.65,
      cx,
      top + size * 0.8,
      cx,
      top + size,
    );
    ctx.bezierCurveTo(
      cx,
      top + size * 0.8,
      cx + size / 2,
      top + size * 0.65,
      cx + size / 2,
      top + size * 0.3,
    );
    ctx.bezierCurveTo(cx + size / 2, top, cx, top, cx, top + size * 0.3);
    ctx.closePath();
    ctx.fill();
  }

  // Full-canvas patterns, meant to peek through the padding/gaps
  // around the photos rather than sit on top of them.
  function pbPaintPattern(ctx, patternId, color, w, h) {
    if (patternId === "dots") {
      ctx.fillStyle = color;
      const spacing = 30;
      const r = 5.5;
      const rand = pbSeededRandom(Math.round(w * 13 + h * 17));
      for (let y = spacing / 2; y < h; y += spacing) {
        for (let x = spacing / 2; x < w; x += spacing) {
          const jx = (rand() - 0.5) * spacing * 0.4;
          const jy = (rand() - 0.5) * spacing * 0.4;
          ctx.beginPath();
          ctx.arc(x + jx, y + jy, r, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    } else if (patternId === "stars") {
      ctx.fillStyle = color;
      const rand = pbSeededRandom(Math.round(w * 31 + h * 7));
      const count = Math.max(18, Math.round((w * h) / 1400));
      for (let i = 0; i < count; i++) {
        const x = rand() * w;
        const y = rand() * h;
        const outerR = 4 + rand() * 5;
        pbDrawStarShape(ctx, x, y, outerR, outerR * 0.45, rand() * Math.PI * 2);
      }
    } else if (patternId === "hearts") {
      ctx.fillStyle = color;
      const spacing = 26;
      const size = 11;
      for (let y = spacing / 2; y < h; y += spacing) {
        for (let x = spacing / 2; x < w; x += spacing) {
          pbDrawHeartShape(ctx, x, y, size);
        }
      }
    }
  }

  function pbRenderPatternSwatch(canvas, patternId) {
    if (!canvas) return;
    const size = 104;
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = pbBgColor;
    ctx.fillRect(0, 0, size, size);
    pbPaintPattern(ctx, patternId, pbAccentColor, size, size);
  }

  function pbRenderAllSwatches() {
    const swatchWrap = pbEl("pbThemeSwatches");
    if (!swatchWrap) return;
    swatchWrap
      .querySelectorAll("canvas")
      .forEach((c) => pbRenderPatternSwatch(c, c.dataset.pattern));
  }

  let pbDb = null;
  let pbCallId = null; // generated/shared room code; never use one global room
  let pbPc = null;
  let pbDataChannel = null;
  let pbLocalStream = null;
  let pbUnsubCall = null;
  let pbUnsubCallerCands = null;
  let pbUnsubCalleeCands = null;
  let pbRole = null; // 'caller' | 'callee'
  let pbRoomMode = null; // 'create' | 'join' | 'solo'
  let pbConnected = false;
  let pbCameraOn = false;
  let pbSoloMode = false;
  let pbSoloTimer = null;
  let pbConnectWatchdogTimer = null; // auto-retry if the handshake stalls
  let pbRetryCount = 0;
  const PB_MAX_AUTO_RETRIES = 4;
  const PB_CONNECT_TIMEOUT_MS = 12000; // give up and retry if not connected by then

  let pbPoseCount = 4;
  let pbFilterId = "normal";
  let pbShots = []; // dataURLs, one per captured pose
  let pbShotImages = []; // decoded Image() objects matching pbShots
  let pbCountdownActive = false;

  let pbStripsUnsub = null;
  let pbStrips = [];

  function pbT(en, pt) {
    try {
      return currentLanguage() === "pt" ? pt : en;
    } catch (e) {
      return en;
    }
  }

  function pbEl(id) {
    return document.getElementById(id);
  }

  // What the strip editor (photobooth-studio.js) needs from the booth:
  // the captured shots, whether it was a solo session, translations,
  // and a way back to the start.
  window.PBStudioBridge = {
    getShots: function () {
      return pbShotImages;
    },
    isSolo: function () {
      return pbSoloMode;
    },
    stickerFiles: function () {
      return CONFIG.photoBoothStickers || [];
    },
    t: pbT,
    defaultCaption: function () {
      return CONFIG.names && CONFIG.names.me && CONFIG.names.her
        ? CONFIG.names.me + " ♥ " + CONFIG.names.her
        : "Photo Booth";
    },
    onNewBooth: function () {
      pbResetToSetup();
    },
  };

  // Solo mode only ever has one camera feed, so the "Partner" video
  // box is fully hidden (not just blank) and the remaining box is
  // centered — see the .pb-solo-active rules in css/style.css.
  function pbSetSoloVisualMode(isSolo) {
    const row = document.querySelector("#tab-photobooth .pb-video-row");
    if (row) row.classList.toggle("pb-solo-active", !!isSolo);
  }

  function pbSetSyncPill(state) {
    const pill = pbEl("pbSyncPill");
    if (!pill) return;
    if (state === "connected") {
      pill.textContent = pbT(
        "Connected — you're both live",
        "Conectados — os dois ao vivo",
      );
      pill.className = "bucket-sync-pill live";
    } else if (state === "waiting") {
      pill.textContent = pbT(
        "Waiting for your partner…",
        "A aguardar o seu par…",
      );
      pill.className = "bucket-sync-pill local";
    } else if (state === "solo") {
      pill.textContent = pbT(
        "Solo mode (no partner connected)",
        "Modo solo (sem par conectado)",
      );
      pill.className = "bucket-sync-pill local";
    } else if (state === "unavailable") {
      pill.textContent = pbT(
        "Firebase isn't configured — live mode unavailable",
        "Firebase não configurado — modo ao vivo indisponível",
      );
      pill.className = "bucket-sync-pill local";
    } else {
      pill.textContent = pbT(
        "Not connected yet — start the camera",
        "Ainda não conectado — ligue a câmera",
      );
      pill.className = "bucket-sync-pill local";
    }
  }

  // ---- visible diagnostics ----
  // Most failures here happen on a partner's phone with no way to open
  // devtools, so real errors (Firestore rules, ICE failures) get shown
  // directly in the status line instead of only going to console.warn.
  function pbShowIssue(text) {
    console.error("[photobooth]", text);
    const status = pbEl("pbRemoteStatus");
    if (status) {
      status.hidden = false;
      status.textContent = text;
    }
    pbSetSyncPill("waiting");
  }

  function pbFirestoreErrorText(e) {
    const code = e && e.code;
    if (code === "permission-denied") {
      return pbT(
        "Can't sync: Firestore security rules are blocking the photo booth (permission-denied). Check the rules for photoboothCalls in the Firebase console.",
        "Não é possível sincronizar: as regras de segurança do Firestore estão a bloquear a cabine (permission-denied). Verifica as regras de photoboothCalls no Firebase console.",
      );
    }
    return pbT(
      "Sync error: " +
        (code || (e && e.message) || "unknown") +
        ". Check the Firebase console/Firestore rules.",
      "Erro de sincronização: " +
        (code || (e && e.message) || "desconhecido") +
        ". Verifica o Firebase console/regras do Firestore.",
    );
  }

  // ---- small utilities ----
  function pbTimeMs(val) {
    if (!val) return 0;
    if (typeof val.toMillis === "function") return val.toMillis();
    if (typeof val.seconds === "number") return val.seconds * 1000;
    if (typeof val === "number") return val;
    const p = Date.parse(val);
    return Number.isNaN(p) ? 0 : p;
  }

  function pbLoadImage(dataUrl) {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve(img);
      img.onerror = reject;
      img.src = dataUrl;
    });
  }

  function pbCoverRect(video, dw, dh) {
    const vw = video.videoWidth || dw;
    const vh = video.videoHeight || dh;
    const targetRatio = dw / dh;
    const srcRatio = vw / vh;
    let sx, sy, sw, sh;
    if (srcRatio > targetRatio) {
      sh = vh;
      sw = vh * targetRatio;
      sx = (vw - sw) / 2;
      sy = 0;
    } else {
      sw = vw;
      sh = vw / targetRatio;
      sx = 0;
      sy = (vh - sh) / 2;
    }
    return { sx, sy, sw, sh };
  }

  function pbDrawVideoInto(ctx, video, dx, dy, dw, dh, mirror) {
    if (!video || !video.videoWidth) return;
    const r = pbCoverRect(video, dw, dh);
    ctx.save();
    if (mirror) {
      ctx.translate(dx + dw, dy);
      ctx.scale(-1, 1);
      ctx.drawImage(video, r.sx, r.sy, r.sw, r.sh, 0, 0, dw, dh);
    } else {
      ctx.drawImage(video, r.sx, r.sy, r.sw, r.sh, dx, dy, dw, dh);
    }
    ctx.restore();
  }

  function pbCurrentFilterCss() {
    const f = PB_FILTERS.find((x) => x.id === pbFilterId) || PB_FILTERS[0];
    return f.css;
  }

  // ---- static UI: filter dropdown + border swatches (safe to call anytime) ----
  function pbBuildStaticUI() {
    const filterSelect = pbEl("pbFilterSelect");
    if (filterSelect && !filterSelect.dataset.ready) {
      filterSelect.dataset.ready = "1";
      PB_FILTERS.forEach((f) => {
        const opt = document.createElement("option");
        opt.value = f.id;
        opt.textContent = pbT(f.en, f.pt);
        filterSelect.appendChild(opt);
      });
      filterSelect.addEventListener("change", () => {
        pbFilterId = filterSelect.value;
        pbApplyLivePreviewFilter();
        const stageSelect = pbEl("pbFilterSelectStage");
        if (stageSelect) stageSelect.value = pbFilterId;
      });
    }
    // Filter dropdown that lives on the live stage, so it can be changed
    // mid-shoot between poses without leaving the camera view.
    const stageFilterSelect = pbEl("pbFilterSelectStage");
    if (stageFilterSelect && !stageFilterSelect.dataset.ready) {
      stageFilterSelect.dataset.ready = "1";
      PB_FILTERS.forEach((f) => {
        const opt = document.createElement("option");
        opt.value = f.id;
        opt.textContent = pbT(f.en, f.pt);
        stageFilterSelect.appendChild(opt);
      });
      stageFilterSelect.value = pbFilterId;
      stageFilterSelect.addEventListener("change", () => {
        pbFilterId = stageFilterSelect.value;
        pbApplyLivePreviewFilter();
        const setupSelect = pbEl("pbFilterSelect");
        if (setupSelect) setupSelect.value = pbFilterId;
        pbSendMessage({ type: "filter", filter: pbFilterId });
      });
    }
    const swatchWrap = pbEl("pbThemeSwatches");
    if (swatchWrap && !swatchWrap.dataset.ready) {
      swatchWrap.dataset.ready = "1";
      Object.keys(PB_PATTERNS).forEach((id) => {
        const pattern = PB_PATTERNS[id];
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className =
          "pb-theme-swatch" + (id === pbPatternId ? " active" : "");
        btn.dataset.pattern = id;
        btn.title = pbT(pattern.en, pattern.pt);
        const canvas = document.createElement("canvas");
        canvas.dataset.pattern = id;
        btn.appendChild(canvas);
        btn.addEventListener("click", () => {
          pbPatternId = id;
          swatchWrap
            .querySelectorAll(".pb-theme-swatch")
            .forEach((s) =>
              s.classList.toggle("active", s.dataset.pattern === id),
            );
          pbUpdatePatternColorUI();
          pbRenderStripPreview();
        });
        swatchWrap.appendChild(btn);
      });
      pbRenderAllSwatches();
    }
    const bgColorInput = pbEl("pbBgColorInput");
    if (bgColorInput && !bgColorInput.dataset.ready) {
      bgColorInput.dataset.ready = "1";
      bgColorInput.value = pbBgColor;
      bgColorInput.addEventListener("input", () => {
        pbBgColor = bgColorInput.value;
        pbRenderAllSwatches();
        pbRenderStripPreview();
      });
    }
    const patternColorInput = pbEl("pbPatternColorInput");
    if (patternColorInput && !patternColorInput.dataset.ready) {
      patternColorInput.dataset.ready = "1";
      patternColorInput.value = pbAccentColor;
      patternColorInput.addEventListener("input", () => {
        pbAccentColor = patternColorInput.value;
        pbRenderAllSwatches();
        pbRenderStripPreview();
      });
    }
    const polaroidToggle = pbEl("pbPolaroidToggle");
    if (polaroidToggle && !polaroidToggle.dataset.ready) {
      polaroidToggle.dataset.ready = "1";
      polaroidToggle.checked = pbPolaroid;
      polaroidToggle.addEventListener("change", () => {
        pbPolaroid = polaroidToggle.checked;
        pbRenderStripPreview();
      });
    }
    pbUpdatePatternColorUI();
    const posesSelect = pbEl("pbPosesSelect");
    if (posesSelect && !posesSelect.dataset.ready) {
      posesSelect.dataset.ready = "1";
      posesSelect.value = String(pbPoseCount);
      posesSelect.addEventListener("change", async () => {
        pbPoseCount = parseInt(posesSelect.value, 10) || 4;
        if (pbRoomMode === "create" && pbCallId) {
          try {
            const db = pbGetDb();
            if (db)
              await db
                .collection("photoboothCalls")
                .doc(pbCallId)
                .set({ poseCount: pbPoseCount }, { merge: true });
          } catch (e) {
            console.warn("Could not sync booth pose count", e);
          }
        }
      });
    }
  }

  function pbApplyLivePreviewFilter() {
    const css = pbCurrentFilterCss();
    const lv = pbEl("pbLocalVideo");
    const rv = pbEl("pbRemoteVideo");
    if (lv) lv.style.filter = css === "none" ? "" : css;
    if (rv) rv.style.filter = css === "none" ? "" : css;
  }

  // ---- Firestore helpers ----
  function pbGetDb() {
    if (pbDb) return pbDb;
    if (typeof getSharedFirestore === "function") {
      pbDb = getSharedFirestore();
    }
    return pbDb;
  }

  async function pbClearSubcollection(colRef) {
    try {
      const snap = await colRef.get();
      const batch = colRef.firestore.batch();
      snap.docs.forEach((d) => batch.delete(d.ref));
      await batch.commit();
    } catch (e) {}
  }

  async function pbResetCallDoc(ref) {
    try {
      await pbClearSubcollection(ref.collection("callerCandidates"));
      await pbClearSubcollection(ref.collection("calleeCandidates"));
      await ref.set(
        {
          offer: null,
          answer: null,
          status: "waiting",
          poseCount: pbPoseCount,
          startedAt: firebase.firestore.FieldValue.serverTimestamp(),
        },
        { merge: true },
      );
    } catch (e) {}
  }

  async function pbNewPeerConnection() {
    const iceServers = await pbGetIceServers();
    const pc = new RTCPeerConnection({
      iceServers: iceServers,
      iceCandidatePoolSize: 4,
    });
    if (pbLocalStream) {
      pbLocalStream
        .getTracks()
        .forEach((track) => pc.addTrack(track, pbLocalStream));
    }
    let remoteStream = new MediaStream();
    pc.ontrack = (event) => {
      if (
        event.track &&
        !remoteStream.getTracks().some((t) => t.id === event.track.id)
      ) {
        remoteStream.addTrack(event.track);
      }
      const rv = pbEl("pbRemoteVideo");
      if (rv) {
        // Safari/mobile browsers can receive the WebRTC track but keep
        // the video element paused because autoplay policy treats the
        // remote stream differently. The booth is audio-free, so make
        // the element explicitly muted and retry playback when frames
        // become available.
        rv.muted = true;
        rv.autoplay = true;
        rv.playsInline = true;
        rv.srcObject = remoteStream;
        const playRemote = () => rv.play().catch(() => {});
        rv.onloadedmetadata = playRemote;
        rv.oncanplay = playRemote;
        playRemote();
      }
    };
    pc.onconnectionstatechange = () => {
      if (pc.connectionState === "connected") {
        pbConnected = true;
        pbClearConnectWatchdog();
        pbSetSyncPill("connected");
        pbUpdateTakeBtnEnabled();
        const rv = pbEl("pbRemoteVideo");
        if (rv) {
          rv.muted = true;
          rv.autoplay = true;
          rv.playsInline = true;
          rv.play().catch(() => {});
        }
        const status = pbEl("pbRemoteStatus");
        if (status) {
          status.hidden = false;
          status.textContent = pbT(
            "Connected — loading partner camera…",
            "Conectado — a carregar a câmara do seu par…",
          );
          setTimeout(() => {
            if (pbConnected && rv && !rv.videoWidth) {
              rv.play().catch(() => {});
            }
            if (pbConnected && rv && rv.videoWidth) status.hidden = true;
          }, 1200);
        }
      } else if (
        ["disconnected", "failed", "closed"].includes(pc.connectionState)
      ) {
        pbConnected = false;
        const status = pbEl("pbRemoteStatus");
        if (status) {
          status.hidden = false;
          status.textContent = pbT(
            "Partner disconnected or the connection failed. Waiting to reconnect…",
            "O seu par desligou-se ou a ligação falhou. A aguardar reconexão…",
          );
        }
        pbSetSyncPill("waiting");
        pbUpdateTakeBtnEnabled();
      }
    };
    pc.oniceconnectionstatechange = () => {
      if (
        ["failed", "disconnected"].includes(pc.iceConnectionState) &&
        !pbConnected
      ) {
        const status = pbEl("pbRemoteStatus");
        if (status) {
          status.hidden = false;
          status.textContent = pbT(
            "Trying to establish the camera connection…",
            "A tentar estabelecer a ligação das câmaras…",
          );
        }
      }
    };
    pc.onicecandidateerror = (event) => {
      console.warn(
        "Photo booth ICE candidate error",
        event && event.errorText,
        event,
      );
    };
    return pc;
  }

  // ---- connection watchdog ----
  // If a handshake stalls (stuck on "Waiting for partner…") for too
  // long — whether from a NAT/firewall issue or a leftover signaling
  // doc from a previous failed attempt — clean up and start fresh
  // automatically instead of leaving the couple stuck forever.
  function pbClearConnectWatchdog() {
    if (pbConnectWatchdogTimer) {
      clearTimeout(pbConnectWatchdogTimer);
      pbConnectWatchdogTimer = null;
    }
  }

  function pbCleanupSignaling() {
    if (pbPc) {
      try {
        pbPc.close();
      } catch (e) {}
      pbPc = null;
    }
    pbDataChannel = null;
    if (pbUnsubCall) {
      pbUnsubCall();
      pbUnsubCall = null;
    }
    if (pbUnsubCallerCands) {
      pbUnsubCallerCands();
      pbUnsubCallerCands = null;
    }
    if (pbUnsubCalleeCands) {
      pbUnsubCalleeCands();
      pbUnsubCalleeCands = null;
    }
  }

  function pbScheduleConnectWatchdog(ref) {
    pbClearConnectWatchdog();
    pbConnectWatchdogTimer = setTimeout(async () => {
      if (pbConnected || !pbCameraOn) return;
      // Only the host may recreate the offer. A guest must never become
      // the caller, because that can overwrite the host's signaling.
      if (pbRole === "caller") {
        if (pbRetryCount >= PB_MAX_AUTO_RETRIES) {
          pbShowIssue(
            pbT(
              "Still can't connect after several tries. If you're on different networks, this usually means the TURN relay server is unreachable/expired — not a Firestore or camera problem. See METERED_TURN_SETUP.md for how to set up your own free TURN relay.",
              "Continua sem conseguir ligar após várias tentativas. Se estiverem em redes diferentes, isto normalmente significa que o servidor de retransmissão TURN está inacessível/expirado — não é um problema de Firestore ou câmara. Ver METERED_TURN_SETUP.md para configurar o seu próprio servidor TURN gratuito.",
            ),
          );
          return;
        }
        pbRetryCount++;
        pbSetSyncPill("waiting");
        pbCleanupSignaling();
        try {
          await pbResetCallDoc(ref);
          await pbStartAsCaller(ref);
        } catch (e) {
          console.warn("Photo booth caller retry failed", e);
        }
      } else {
        const status = pbEl("pbRemoteStatus");
        if (status) {
          status.hidden = false;
          status.textContent = pbT(
            "Waiting for the booth host to connect…",
            "A aguardar que o anfitrião da cabine se ligue…",
          );
        }
        pbSetSyncPill("waiting");
      }
    }, PB_CONNECT_TIMEOUT_MS);
  }

  function pbSetupDataChannelHandlers(channel) {
    pbDataChannel = channel;
    channel.onopen = () => {
      if (pbRole === "caller") {
        pbSendMessage({
          type: "config",
          poses: pbPoseCount,
          filter: pbFilterId,
        });
      }
    };
    channel.onmessage = (event) => {
      let msg;
      try {
        msg = JSON.parse(event.data);
      } catch (e) {
        return;
      }
      pbHandleRemoteMessage(msg);
    };
  }

  function pbSendMessage(msg) {
    if (pbDataChannel && pbDataChannel.readyState === "open") {
      try {
        pbDataChannel.send(JSON.stringify(msg));
      } catch (e) {}
    }
  }

  function pbHandleRemoteMessage(msg) {
    if (!msg || !msg.type) return;
    if (msg.type === "config") {
      pbPoseCount = msg.poses || pbPoseCount;
      pbFilterId = msg.filter || pbFilterId;
      const posesSelect = pbEl("pbPosesSelect");
      if (posesSelect) posesSelect.value = String(pbPoseCount);
      const filterSelect = pbEl("pbFilterSelect");
      if (filterSelect) filterSelect.value = pbFilterId;
      const stageFilterSelect = pbEl("pbFilterSelectStage");
      if (stageFilterSelect) stageFilterSelect.value = pbFilterId;
      pbApplyLivePreviewFilter();
      pbUpdateShotCounter();
    } else if (msg.type === "filter") {
      pbFilterId = msg.filter || pbFilterId;
      const filterSelect = pbEl("pbFilterSelect");
      if (filterSelect) filterSelect.value = pbFilterId;
      const stageFilterSelect = pbEl("pbFilterSelectStage");
      if (stageFilterSelect) stageFilterSelect.value = pbFilterId;
      pbApplyLivePreviewFilter();
    } else if (msg.type === "countdown") {
      pbRunCountdown(msg.startAt, false);
    } else if (msg.type === "retake") {
      pbDoRetake(false);
    } else if (msg.type === "finish") {
      pbDoFinish(false);
    } else if (msg.type === "shotPhoto") {
      // The booth creator is the source of truth for the captured frame.
      // Sending the final composite keeps both screens' strips identical
      // instead of letting each browser capture slightly different frames.
      const index = Number(msg.index);
      if (!Number.isInteger(index) || index < 0 || !msg.dataUrl) return;
      (async () => {
        try {
          const img = await pbLoadImage(msg.dataUrl);
          if (index < pbShots.length) {
            pbShots[index] = msg.dataUrl;
            pbShotImages[index] = img;
          } else if (index === pbShots.length) {
            pbShots.push(msg.dataUrl);
            pbShotImages.push(img);
          } else {
            return;
          }
          pbRenderThumbs();
          pbUpdateShotCounter();
          if (!pbEl("pbPreviewStage").hidden) pbRenderStripPreview();
          const retakeBtn = pbEl("pbRetakeBtn");
          if (retakeBtn) retakeBtn.hidden = pbShots.length === 0;
          const finishBtn = pbEl("pbFinishBtn");
          if (finishBtn) finishBtn.hidden = pbShots.length === 0;
        } catch (e) {
          console.warn("Could not receive shared booth photo", e);
        }
      })();
    }
  }

  async function pbStartAsCaller(ref) {
    pbRole = "caller";
    pbPc = await pbNewPeerConnection();
    pbSetupDataChannelHandlers(pbPc.createDataChannel("pbSync"));

    const callerCands = ref.collection("callerCandidates");
    pbPc.onicecandidate = (event) => {
      if (event.candidate) {
        callerCands
          .add(event.candidate.toJSON())
          .catch((e) => pbShowIssue(pbFirestoreErrorText(e)));
      }
    };

    const offer = await pbPc.createOffer();
    await pbPc.setLocalDescription(offer);
    try {
      await ref.set(
        {
          offer: { type: offer.type, sdp: offer.sdp },
          poseCount: pbPoseCount,
          status: "connecting",
          expiresAt: Date.now() + PB_CALL_TTL_MS,
          startedAt: firebase.firestore.FieldValue.serverTimestamp(),
        },
        { merge: true },
      );
    } catch (e) {
      pbShowIssue(pbFirestoreErrorText(e));
      throw e;
    }

    pbUnsubCall = ref.onSnapshot(
      (snap) => {
        const data = snap.data();
        if (data && data.answer && pbPc && !pbPc.currentRemoteDescription) {
          pbPc
            .setRemoteDescription(new RTCSessionDescription(data.answer))
            .catch(() => {});
        }
      },
      (e) => pbShowIssue(pbFirestoreErrorText(e)),
    );
    pbUnsubCalleeCands = ref.collection("calleeCandidates").onSnapshot(
      (snap) => {
        snap.docChanges().forEach((change) => {
          if (change.type === "added" && pbPc) {
            pbPc
              .addIceCandidate(new RTCIceCandidate(change.doc.data()))
              .catch(() => {});
          }
        });
      },
      (e) => pbShowIssue(pbFirestoreErrorText(e)),
    );

    pbScheduleConnectWatchdog(ref);
    pbStartSoloTimer();
  }

  async function pbStartAsCallee(ref, offerData) {
    pbRole = "callee";
    pbPc = await pbNewPeerConnection();
    pbPc.ondatachannel = (event) => pbSetupDataChannelHandlers(event.channel);

    const calleeCands = ref.collection("calleeCandidates");
    pbPc.onicecandidate = (event) => {
      if (event.candidate) {
        calleeCands
          .add(event.candidate.toJSON())
          .catch((e) => pbShowIssue(pbFirestoreErrorText(e)));
      }
    };

    await pbPc.setRemoteDescription(new RTCSessionDescription(offerData));
    const answer = await pbPc.createAnswer();
    await pbPc.setLocalDescription(answer);
    try {
      await ref.update({
        answer: { type: answer.type, sdp: answer.sdp },
        status: "connecting",
      });
    } catch (e) {
      pbShowIssue(pbFirestoreErrorText(e));
      throw e;
    }

    pbUnsubCallerCands = ref.collection("callerCandidates").onSnapshot(
      (snap) => {
        snap.docChanges().forEach((change) => {
          if (change.type === "added" && pbPc) {
            pbPc
              .addIceCandidate(new RTCIceCandidate(change.doc.data()))
              .catch(() => {});
          }
        });
      },
      (e) => pbShowIssue(pbFirestoreErrorText(e)),
    );

    pbScheduleConnectWatchdog(ref);
    pbStartSoloTimer();
  }

  async function pbJoinCall() {
    if (pbSoloMode || pbRoomMode === "solo") return;
    const db = pbGetDb();
    if (!db || !pbCallId) {
      pbSetSyncPill(db ? "waiting" : "unavailable");
      return;
    }
    const ref = db.collection("photoboothCalls").doc(pbCallId);
    pbSetSyncPill("waiting");
    if (pbRoomMode === "create") {
      await pbResetCallDoc(ref);
      await pbStartAsCaller(ref);
      return;
    }
    // Guest listens for the host's offer. The host may not have started
    // their camera yet, so an offer is allowed to appear later.
    if (pbUnsubCall) pbUnsubCall();
    pbUnsubCall = ref.onSnapshot(
      async (snap) => {
        const data = snap.exists ? snap.data() : null;
        if (!data) return;
        if (data.expiresAt && Number(data.expiresAt) < Date.now()) return;
        if (
          data.answer ||
          pbRole === "callee" ||
          pbConnected ||
          !data.offer ||
          !pbCameraOn
        )
          return;
        try {
          await pbStartAsCallee(ref, data.offer);
        } catch (e) {
          pbShowIssue(pbFirestoreErrorText(e));
        }
      },
      (e) => pbShowIssue(pbFirestoreErrorText(e)),
    );
  }

  function pbStartSoloTimer(immediateHintOnly) {
    pbClearSoloTimer();
    if (pbSoloMode) return;
    pbSoloTimer = setTimeout(
      () => {
        const notice = pbEl("pbSoloNotice");
        if (notice && !pbConnected && !pbSoloMode) notice.hidden = false;
      },
      immediateHintOnly ? 0 : PB_SOLO_WAIT_MS,
    );
  }
  function pbClearSoloTimer() {
    if (pbSoloTimer) {
      clearTimeout(pbSoloTimer);
      pbSoloTimer = null;
    }
  }

  function pbMakeRoomCode() {
    const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
    let code = "";
    for (let i = 0; i < 6; i++)
      code += chars[Math.floor(Math.random() * chars.length)];
    return code;
  }

  function pbShowCameraSetup(mode) {
    pbRoomMode = mode;
    const gate = pbEl("pbRoomGate");
    const setup = pbEl("pbSetup");
    if (gate) gate.hidden = true;
    if (setup) setup.hidden = false;
    const err = pbEl("pbRoomError");
    if (err) err.textContent = "";
    pbSetSyncPill(mode === "solo" ? "solo" : "waiting");
    const posesSelect = pbEl("pbPosesSelect");
    if (posesSelect) {
      posesSelect.disabled = mode === "join";
      const field = posesSelect.closest(".pb-field");
      if (field) field.hidden = mode === "join";
    }
  }

  async function pbCreateRoom() {
    const db = pbGetDb();
    const err = pbEl("pbRoomError");
    if (!db) {
      if (err)
        err.textContent = pbT(
          "Shared booths need Firebase to be configured on the site.",
          "As cabines partilhadas precisam do Firebase configurado no site.",
        );
      return;
    }
    const btn = pbEl("pbCreateRoomBtn");
    if (btn) {
      btn.disabled = true;
      btn.textContent = pbT("Creating…", "A criar…");
    }
    try {
      let code = null;
      for (let i = 0; i < 8; i++) {
        const candidate = pbMakeRoomCode();
        const snap = await db
          .collection("photoboothCalls")
          .doc(candidate)
          .get();
        if (!snap.exists) {
          code = candidate;
          break;
        }
      }
      if (!code) throw new Error("Could not create a unique booth code");
      pbCallId = code;
      pbRoomMode = "create";
      // Create the room immediately. This is what makes random/nonexistent
      // codes invalid instead of merely accepting any six characters.
      await db
        .collection("photoboothCalls")
        .doc(code)
        .set({
          status: "waiting",
          poseCount: pbPoseCount,
          createdAt: firebase.firestore.FieldValue.serverTimestamp(),
          expiresAt: Date.now() + PB_CALL_TTL_MS,
          offer: null,
          answer: null,
        });
      pbEl("pbRoomChoice").hidden = true;
      pbEl("pbRoomCreated").hidden = false;
      pbEl("pbRoomCodeDisplay").textContent = code;
      pbSetSyncPill("waiting");
    } catch (e) {
      console.warn("Photo booth room creation failed", e);
      if (err)
        err.textContent = pbT(
          "Couldn't create a booth. Please try again.",
          "Não foi possível criar a cabine. Tenta novamente.",
        );
    } finally {
      if (btn) {
        btn.disabled = false;
        btn.textContent = pbT("Create a new booth", "Criar uma nova cabine");
      }
    }
  }

  async function pbJoinRoom() {
    const input = pbEl("pbRoomCodeInput");
    const code = String((input && input.value) || "")
      .trim()
      .toUpperCase()
      .replace(/[^A-Z0-9]/g, "");
    const err = pbEl("pbRoomError");
    if (code.length !== 6) {
      if (err)
        err.textContent = pbT(
          "Enter the 6-character booth code.",
          "Introduz o código de 6 caracteres.",
        );
      input && input.focus();
      return;
    }
    const db = pbGetDb();
    if (!db) {
      if (err)
        err.textContent = pbT(
          "Shared booths need Firebase to be configured on the site.",
          "As cabines partilhadas precisam do Firebase configurado no site.",
        );
      return;
    }
    const btn = pbEl("pbJoinRoomBtn");
    if (btn) {
      btn.disabled = true;
      btn.textContent = pbT("Checking…", "A verificar…");
    }
    try {
      const ref = db.collection("photoboothCalls").doc(code);
      const snap = await ref.get();
      if (!snap.exists) {
        if (err)
          err.textContent = pbT(
            "That booth doesn't exist. Ask the creator for the current code.",
            "Essa cabine não existe. Pede à pessoa que criou a cabine o código atual.",
          );
        return;
      }
      const data = snap.data() || {};
      if (data.expiresAt && Number(data.expiresAt) < Date.now()) {
        if (err)
          err.textContent = pbT(
            "That booth code has expired. Ask the creator for a new one.",
            "Esse código de cabine expirou. Pede à pessoa que criou a cabine um novo.",
          );
        return;
      }
      if (
        data.status &&
        data.status !== "waiting" &&
        data.status !== "connecting"
      ) {
        if (err)
          err.textContent = pbT(
            "That booth is no longer available.",
            "Essa cabine já não está disponível.",
          );
        return;
      }
      if (data.answer) {
        if (err)
          err.textContent = pbT(
            "That booth is already full.",
            "Essa cabine já está cheia.",
          );
        return;
      }
      // Guest inherits the host's pose count and cannot change it.
      pbPoseCount = [3, 4, 6].includes(Number(data.poseCount))
        ? Number(data.poseCount)
        : 4;
      pbCallId = code;
      pbRoomMode = "join";
      pbSoloMode = false;
      const posesSelect = pbEl("pbPosesSelect");
      if (posesSelect) {
        posesSelect.value = String(pbPoseCount);
        posesSelect.disabled = true;
      }

      // Valid join -> straight to camera. No guest settings screen.
      pbEl("pbRoomGate").hidden = true;
      pbEl("pbSetup").hidden = true;
      if (err) err.textContent = "";
      pbSetSyncPill("waiting");
      await pbStartCamera();
    } catch (e) {
      console.warn("Photo booth join validation failed", e);
      if (err)
        err.textContent = pbT(
          "Couldn't check that booth. Please try again.",
          "Não foi possível verificar essa cabine. Tenta novamente.",
        );
    } finally {
      if (btn) {
        btn.disabled = false;
        btn.textContent = pbT("Join booth", "Entrar na cabine");
      }
    }
  }

  function pbEnterSoloMode() {
    pbSoloMode = true;
    pbCallId = null;
    pbShowCameraSetup("solo");
    const notice = pbEl("pbSoloNotice");
    if (notice) notice.hidden = true;
    const status = pbEl("pbRemoteStatus");
    if (status) {
      status.hidden = false;
      status.textContent = pbT("Solo mode", "Modo solo");
    }
    pbSetSyncPill("solo");
    pbUpdateTakeBtnEnabled();
  }

  function pbUpdateTakeBtnEnabled() {
    const btn = pbEl("pbTakeBtn");
    if (!btn) return;
    btn.disabled =
      !(pbConnected || pbSoloMode) ||
      pbCountdownActive ||
      pbShots.length >= pbPoseCount;
  }

  // ---- camera ----
  async function pbStartCamera() {
    if (
      !navigator.mediaDevices ||
      !navigator.mediaDevices.getUserMedia ||
      (!pbSoloMode && !window.RTCPeerConnection)
    ) {
      const hint = pbEl("pbSetupHint");
      if (hint)
        hint.textContent = pbT(
          "This browser doesn't support live camera calls. Try a recent Chrome, Safari, or Firefox.",
          "Este navegador não suporta chamadas de câmara ao vivo. Tenta um Chrome, Safari ou Firefox recente.",
        );
      return;
    }
    const startBtn = pbEl("pbStartBtn");
    if (startBtn) {
      startBtn.disabled = true;
      startBtn.textContent = pbT("Asking for camera…", "A pedir a câmara…");
    }
    try {
      pbLocalStream = await navigator.mediaDevices.getUserMedia({
        video: {
          facingMode: "user",
          width: { ideal: 960 },
          height: { ideal: 1280 },
        },
        audio: false,
      });
    } catch (e) {
      const hint = pbEl("pbSetupHint");
      if (hint)
        hint.textContent = pbT(
          "Couldn't access your camera — check your browser's permission for this site and try again.",
          "Não foi possível aceder à câmara — verifica a permissão do navegador para este site e tenta de novo.",
        );
      if (startBtn) {
        startBtn.disabled = false;
        startBtn.textContent = pbT("Turn on camera", "Ligar a câmara");
      }
      return;
    }
    pbCameraOn = true;
    const lv = pbEl("pbLocalVideo");
    if (lv) lv.srcObject = pbLocalStream;
    pbApplyLivePreviewFilter();

    pbEl("pbSetup").hidden = true;
    pbEl("pbStage").hidden = false;
    pbSetSoloVisualMode(pbSoloMode);
    pbShots = [];
    pbShotImages = [];
    const stageFilterSelect = pbEl("pbFilterSelectStage");
    if (stageFilterSelect) stageFilterSelect.value = pbFilterId;
    pbUpdateShotCounter();
    pbRenderThumbs();

    pbJoinCall();
  }

  function pbStopCamera() {
    if (pbLocalStream) {
      pbLocalStream.getTracks().forEach((t) => t.stop());
      pbLocalStream = null;
    }
    if (pbPc) {
      try {
        pbPc.close();
      } catch (e) {}
      pbPc = null;
    }
    if (pbUnsubCall) {
      pbUnsubCall();
      pbUnsubCall = null;
    }
    if (pbUnsubCallerCands) {
      pbUnsubCallerCands();
      pbUnsubCallerCands = null;
    }
    if (pbUnsubCalleeCands) {
      pbUnsubCalleeCands();
      pbUnsubCalleeCands = null;
    }
    pbClearSoloTimer();
    pbClearConnectWatchdog();
    pbRetryCount = 0;
    pbDataChannel = null;
    pbConnected = false;
    pbCameraOn = false;
    pbSoloMode = false;
    pbSetSoloVisualMode(false);
    pbRole = null;
  }

  // ---- countdown + capture ----
  function pbRunCountdown(startAt, broadcast) {
    if (broadcast) pbSendMessage({ type: "countdown", startAt: startAt });
    pbCountdownActive = true;
    pbUpdateTakeBtnEnabled();
    const overlay = pbEl("pbCountdownOverlay");
    const num = pbEl("pbCountdownNum");
    if (overlay) overlay.hidden = false;

    let lastShown = null;
    function tick() {
      const remaining = Math.ceil((startAt - Date.now()) / 1000);
      if (remaining > 0) {
        if (num && remaining !== lastShown) {
          lastShown = remaining;
          num.textContent = String(remaining);
        }
        setTimeout(tick, 120);
      } else {
        if (overlay) overlay.hidden = true;
        pbFlashAndCapture();
      }
    }
    tick();
  }

  function pbApplyPixelFilter(ctx, width, height) {
    // Canvas capture does not inherit the CSS filter applied to <video>.
    // Apply the selected filter to the actual pixels so saved photos match
    // the live preview even in browsers with limited Canvas filter support.
    const filter = pbFilterId;
    if (filter === "normal") return;

    const imageData = ctx.getImageData(0, 0, width, height);
    const data = imageData.data;

    function clamp(v) {
      return Math.max(0, Math.min(255, v));
    }

    function contrast(v, amount) {
      return clamp((v - 128) * amount + 128);
    }

    for (let i = 0; i < data.length; i += 4) {
      let r = data[i];
      let g = data[i + 1];
      let b = data[i + 2];

      if (filter === "bw") {
        const y = 0.299 * r + 0.587 * g + 0.114 * b;
        r = g = b = contrast(y, 1.05);
      } else if (filter === "sepia") {
        const sr = r * 0.393 + g * 0.769 + b * 0.189;
        const sg = r * 0.349 + g * 0.686 + b * 0.168;
        const sb = r * 0.272 + g * 0.534 + b * 0.131;
        r = contrast(sr, 1.05);
        g = contrast(sg, 1.05);
        b = contrast(sb, 1.05);
        // Small saturation boost to match the UI preset.
        const gray = 0.299 * r + 0.587 * g + 0.114 * b;
        r = gray + (r - gray) * 1.1;
        g = gray + (g - gray) * 1.1;
        b = gray + (b - gray) * 1.1;
      } else if (filter === "vintage") {
        // Warm, slightly faded look.
        r *= 1.05;
        g *= 0.98;
        b *= 0.9;
        const gray = 0.299 * r + 0.587 * g + 0.114 * b;
        r = gray + (r - gray) * 0.85;
        g = gray + (g - gray) * 0.85;
        b = gray + (b - gray) * 0.85;
        r = contrast(r, 0.9);
        g = contrast(g, 0.9);
        b = contrast(b, 0.9);
        r = r * 1.05 + 128 * (1 - 1.05);
        g = g * 1.05 + 128 * (1 - 1.05);
        b = b * 1.05 + 128 * (1 - 1.05);
      } else if (filter === "vivid") {
        const gray = 0.299 * r + 0.587 * g + 0.114 * b;
        r = gray + (r - gray) * 1.6;
        g = gray + (g - gray) * 1.6;
        b = gray + (b - gray) * 1.6;
        r = contrast(r, 1.1);
        g = contrast(g, 1.1);
        b = contrast(b, 1.1);
      } else if (filter === "soft") {
        r = r * 1.08;
        g = g * 1.08;
        b = b * 1.08;
        r = contrast(r, 0.92);
        g = contrast(g, 0.92);
        b = contrast(b, 0.92);
        const gray = 0.299 * r + 0.587 * g + 0.114 * b;
        r = gray + (r - gray) * 0.95;
        g = gray + (g - gray) * 0.95;
        b = gray + (b - gray) * 0.95;
      }

      data[i] = clamp(r);
      data[i + 1] = clamp(g);
      data[i + 2] = clamp(b);
    }

    ctx.putImageData(imageData, 0, 0);
  }

  async function pbFlashAndCapture() {
    const flash = pbEl("pbFlash");
    if (flash) {
      flash.classList.remove("go");
      void flash.offsetWidth;
      flash.classList.add("go");
    }

    const canvas = pbEl("pbShotCanvas");
    const isSolo = pbSoloMode;
    const shotW = isSolo ? PB_SHOT_H : PB_SHOT_W * 2;
    const shotH = PB_SHOT_H;

    canvas.width = shotW;
    canvas.height = shotH;
    const ctx = canvas.getContext("2d");

    const localVideo = pbEl("pbLocalVideo");
    const remoteVideo = isSolo ? localVideo : pbEl("pbRemoteVideo");

    if (isSolo) {
      // Solo photos are a single square, not two half-width panels.
      pbDrawVideoInto(ctx, localVideo, 0, 0, shotW, shotH, true);
    } else {
      pbDrawVideoInto(ctx, localVideo, 0, 0, PB_SHOT_W, shotH, true);
      pbDrawVideoInto(ctx, remoteVideo, PB_SHOT_W, 0, PB_SHOT_W, shotH, false);
    }

    pbApplyPixelFilter(ctx, shotW, shotH);

    const dataUrl = canvas.toDataURL("image/jpeg", 0.85);
    try {
      const img = await pbLoadImage(dataUrl);
      const shotIndex = pbShots.length;
      pbShots.push(dataUrl);
      pbShotImages.push(img);
      // The room creator owns the canonical frame. JPEG quality is kept
      // modest so the DataChannel message remains small enough for
      // normal WebRTC transports.
      if (!isSolo && pbRole === "caller") {
        pbSendMessage({ type: "shotPhoto", index: shotIndex, dataUrl });
      }
    } catch (e) {}

    pbCountdownActive = false;
    pbRenderThumbs();
    pbUpdateShotCounter();
    pbUpdateTakeBtnEnabled();

    const retakeBtn = pbEl("pbRetakeBtn");
    if (retakeBtn) retakeBtn.hidden = pbShots.length === 0;
    const finishBtn = pbEl("pbFinishBtn");
    if (finishBtn) finishBtn.hidden = pbShots.length === 0;

    if (pbShots.length >= pbPoseCount) {
      setTimeout(() => pbGoToPreview(), 500);
    }
  }

  function pbUpdateShotCounter() {
    const el = pbEl("pbShotCounter");
    const shown = Math.min(pbShots.length + 1, pbPoseCount);
    if (el) {
      el.textContent = pbT(
        "Shot " + shown + " of " + pbPoseCount,
        "Foto " + shown + " de " + pbPoseCount,
      );
    }
    pbRenderShotDots();
  }

  // Small "•••" progress row above the shot counter — filled dots for
  // poses already captured, a highlighted dot for the one coming up.
  function pbRenderShotDots() {
    const wrap = pbEl("pbShotDots");
    if (!wrap) return;
    wrap.innerHTML = "";
    const done = pbShots.length;
    for (let i = 0; i < pbPoseCount; i++) {
      const dot = document.createElement("span");
      if (i < done) dot.className = "filled";
      else if (i === done) dot.className = "current";
      wrap.appendChild(dot);
    }
  }

  function pbRenderThumbs() {
    const row = pbEl("pbThumbsRow");
    if (!row) return;
    row.innerHTML = "";
    pbShots.forEach((src) => {
      const img = document.createElement("img");
      img.src = src;
      row.appendChild(img);
    });
  }

  function pbDoRetake(broadcast) {
    if (broadcast) pbSendMessage({ type: "retake" });
    if (pbShots.length === 0) return;
    pbShots.pop();
    pbShotImages.pop();
    pbRenderThumbs();
    pbUpdateShotCounter();
    const retakeBtn = pbEl("pbRetakeBtn");
    if (retakeBtn) retakeBtn.hidden = pbShots.length === 0;
    const finishBtn = pbEl("pbFinishBtn");
    if (finishBtn) finishBtn.hidden = pbShots.length === 0;
  }

  function pbDoFinish(broadcast) {
    if (broadcast) pbSendMessage({ type: "finish" });
    if (pbShots.length === 0) return;
    pbGoToPreview();
  }

  // ---- preview / strip assembly ----
  function pbGoToPreview() {
    pbEl("pbStage").hidden = true;
    pbEl("pbPreviewStage").hidden = false;
    pbBuildStaticUI();
    pbRenderStripPreview();
  }

  // Shows/hides + primes the color picker for the currently selected
  // border theme, if that theme has a customizable pattern.
  function pbUpdatePatternColorUI() {
    const row = pbEl("pbPatternColorRow");
    const label = pbEl("pbPatternColorLabel");
    if (!row) return;
    row.hidden = false;
    if (label) {
      label.textContent =
        pbPatternId === "none"
          ? pbT("Frame color", "Cor da moldura")
          : pbT("Pattern & frame color", "Cor do padrão e da moldura");
    }
  }

  function pbRenderStripPreview() {
    // The strip editor draws and edits the strip. If it didn't load,
    // fall through to the original preview below.
    if (window.PBStudio && window.PBStudio.refresh()) return;
    const canvas = pbEl("pbStripCanvas");
    if (!canvas || pbShotImages.length === 0) return;
    const pad = 18;
    const gap = 12;
    const displayW = 300;
    const shotDisplayW = pbSoloMode ? PB_SHOT_H : PB_SHOT_W * 2;
    const displayH = Math.round(displayW * (PB_SHOT_H / shotDisplayW));
    const caption = (pbEl("pbCaptionInput") || {}).value || "";
    const captionH = caption ? 46 : 20;

    canvas.width = displayW + pad * 2;
    canvas.height =
      pad +
      pbShotImages.length * displayH +
      (pbShotImages.length - 1) * gap +
      pad +
      captionH;
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = pbBgColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Pattern is painted first so it only shows through the padding
    // and gaps around the photos, like a scrapbook background —
    // not drawn on top of the photos themselves.
    pbPaintPattern(
      ctx,
      pbPatternId,
      pbAccentColor,
      canvas.width,
      canvas.height,
    );

    const frameWidth = pbPolaroid ? 0 : 2.5;
    let y = pad;
    pbShotImages.forEach((img) => {
      const bottomExtra = pbPolaroid ? 14 : 0;
      if (pbPolaroid) {
        ctx.fillStyle = pbBgColor;
        ctx.fillRect(pad - 2, y - 2, displayW + 4, displayH + 4);
      }
      ctx.drawImage(img, pad, y, displayW, displayH - bottomExtra);
      if (frameWidth) {
        ctx.strokeStyle = pbAccentColor;
        ctx.lineWidth = frameWidth;
        ctx.strokeRect(pad, y, displayW, displayH - bottomExtra);
      }
      y += displayH + gap;
    });

    const textColor = pbAutoTextColor(pbBgColor);
    ctx.fillStyle = textColor;
    ctx.font = "600 16px sans-serif";
    ctx.textAlign = "center";
    if (caption) {
      ctx.fillText(caption, canvas.width / 2, canvas.height - pad - 10);
    } else {
      ctx.font = "500 11px sans-serif";
      ctx.globalAlpha = 0.6;
      ctx.fillText(
        (CONFIG.names && CONFIG.names.me && CONFIG.names.her
          ? CONFIG.names.me + " ♥ " + CONFIG.names.her
          : "Photo Booth") +
          " · " +
          new Date().toLocaleDateString(),
        canvas.width / 2,
        canvas.height - 10,
      );
      ctx.globalAlpha = 1;
    }
  }

  function pbDownloadStrip() {
    const canvas = pbEl("pbStripCanvas");
    if (!canvas) return;
    canvas.toBlob((blob) => {
      if (!blob) return;
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "photobooth-strip-" + Date.now() + ".png";
      document.body.appendChild(a);
      a.click();
      a.remove();
      setTimeout(() => URL.revokeObjectURL(url), 4000);
    }, "image/png");
  }

  // Takes the whole booth back to the very start — camera off, setup
  // screen showing — rather than dropping the user back into a live
  // stage with the cameras already running.
  function pbResetToSetup() {
    if (window.PBStudio) window.PBStudio.reset();
    pbStopCamera();
    pbShots = [];
    pbShotImages = [];
    const retakeBtn = pbEl("pbRetakeBtn");
    if (retakeBtn) retakeBtn.hidden = true;
    const finishBtn = pbEl("pbFinishBtn");
    if (finishBtn) finishBtn.hidden = true;
    const gate = pbEl("pbRoomGate");
    const choice = pbEl("pbRoomChoice");
    const created = pbEl("pbRoomCreated");
    const setup = pbEl("pbSetup");
    const stage = pbEl("pbStage");
    const preview = pbEl("pbPreviewStage");
    if (preview) preview.hidden = true;
    if (stage) stage.hidden = true;
    if (setup) setup.hidden = true;
    if (gate) gate.hidden = false;
    if (choice) choice.hidden = false;
    if (created) created.hidden = true;
    const codeInput = pbEl("pbRoomCodeInput");
    if (codeInput) codeInput.value = "";
    pbCallId = null;
    pbRoomMode = null;
    const startBtn = pbEl("pbStartBtn");
    if (startBtn) {
      startBtn.disabled = false;
      startBtn.textContent = pbT("Turn on camera", "Ligar a câmara");
    }
    pbSetSyncPill(pbGetDb() ? "idle" : "unavailable");
    pbUpdateShotCounter();
    pbRenderThumbs();
    pbUpdateTakeBtnEnabled();
    const wrap = document.querySelector("#tab-photobooth .pb-wrap");
    if (wrap && typeof wrap.scrollIntoView === "function") {
      wrap.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  // Strips are intentionally never saved to the website.
  // The only persistent action is the final download to the user's device.

  // ---- wire up static buttons once ----
  function pbBindOnce() {
    if (window.__pbBound) return;
    window.__pbBound = true;
    const startBtn = pbEl("pbStartBtn");
    if (startBtn) startBtn.addEventListener("click", pbStartCamera);

    const createRoomBtn = pbEl("pbCreateRoomBtn");
    if (createRoomBtn) createRoomBtn.addEventListener("click", pbCreateRoom);
    const joinRoomBtn = pbEl("pbJoinRoomBtn");
    if (joinRoomBtn) joinRoomBtn.addEventListener("click", pbJoinRoom);
    const roomCodeInput = pbEl("pbRoomCodeInput");
    if (roomCodeInput)
      roomCodeInput.addEventListener("input", () => {
        roomCodeInput.value = roomCodeInput.value
          .toUpperCase()
          .replace(/[^A-Z0-9]/g, "")
          .slice(0, 6);
      });
    if (roomCodeInput)
      roomCodeInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter") pbJoinRoom();
      });
    const soloStartBtn = pbEl("pbSoloStartBtn");
    if (soloStartBtn) soloStartBtn.addEventListener("click", pbEnterSoloMode);
    const roomContinueBtn = pbEl("pbRoomContinueBtn");
    if (roomContinueBtn)
      roomContinueBtn.addEventListener("click", () =>
        pbShowCameraSetup("create"),
      );
    const roomBackBtn = pbEl("pbRoomBackBtn");
    if (roomBackBtn)
      roomBackBtn.addEventListener("click", () => {
        pbCallId = null;
        pbRoomMode = null;
        pbEl("pbRoomCreated").hidden = true;
        pbEl("pbRoomChoice").hidden = false;
        pbSetSyncPill("idle");
      });

    const takeBtn = pbEl("pbTakeBtn");
    if (takeBtn)
      takeBtn.addEventListener("click", () => {
        if (takeBtn.disabled || pbShots.length >= pbPoseCount) return;
        pbRunCountdown(Date.now() + 3300, true);
      });

    const retakeBtn = pbEl("pbRetakeBtn");
    if (retakeBtn) retakeBtn.addEventListener("click", () => pbDoRetake(true));

    const finishBtn = pbEl("pbFinishBtn");
    if (finishBtn) finishBtn.addEventListener("click", () => pbDoFinish(true));

    const soloBtn = pbEl("pbSoloBtn");
    if (soloBtn) soloBtn.addEventListener("click", pbEnterSoloMode);

    const downloadBtn = pbEl("pbDownloadBtn");
    if (downloadBtn) downloadBtn.addEventListener("click", pbDownloadStrip);

    const newStripBtn = pbEl("pbNewStripBtn");
    if (newStripBtn) newStripBtn.addEventListener("click", pbResetToSetup);

    const captionInput = pbEl("pbCaptionInput");
    if (captionInput)
      captionInput.addEventListener("input", pbRenderStripPreview);
  }

  // ---- tab lifecycle (called from switchTab) ----
  window.pbOnEnterTab = function () {
    pbBuildStaticUI();
    pbBindOnce();
    if (!pbCameraOn) {
      const gate = pbEl("pbRoomGate");
      const setup = pbEl("pbSetup");
      if (gate) gate.hidden = false;
      if (setup) setup.hidden = true;
      pbSetSyncPill(pbGetDb() ? "idle" : "unavailable");
    }
  };

  window.pbOnLeaveTab = function () {
    if (window.PBStudio) window.PBStudio.reset();
    pbStopCamera();
    const gate = pbEl("pbRoomGate");
    const setup = pbEl("pbSetup");
    const stage = pbEl("pbStage");
    const preview = pbEl("pbPreviewStage");
    if (gate) gate.hidden = false;
    if (setup) setup.hidden = true;
    if (stage) stage.hidden = true;
    if (preview) preview.hidden = true;
    pbCallId = null;
    pbRoomMode = null;
    const startBtn = pbEl("pbStartBtn");
    if (startBtn) {
      startBtn.disabled = false;
      startBtn.textContent = pbT("Turn on camera", "Ligar a câmara");
    }
  };

  window.addEventListener("pagehide", () => {
    try {
      pbStopCamera();
    } catch (e) {}
  });
})();

// Translate static labels and headings after the page has been rendered.
translateStaticDOM();

// Restore tab from URL AFTER all features are defined (prevents refresh freezes)
(function initTabRouting() {
  try {
    const initial = tabFromHash();
    switchTab(initial, { updateHash: false, scroll: false });
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
      if (t !== activeTab) switchTab(t, { updateHash: false, scroll: true });
    } catch (e) {}
  });
})();
