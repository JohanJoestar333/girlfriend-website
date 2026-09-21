/* ============================================================
   ENHANCEMENTS — enhancements.js
   ------------------------------------------------------------
   Everything added on top of the original app.js: scroll panes
   for the Bucket List / Movie lists, plus the premium visual
   polish pass (constellation progress, filters, movie ambient
   light, spin-the-reel, reading progress). Paired with
   enhancements.css.

   Purely additive — reads and observes the DOM app.js produces,
   never modifies or replaces its functions. Load AFTER app.js.

   SECTION 1 — scroll panes (was scroll-pane.js)
   SECTION 2 — premium polish (was premium.js)
   ============================================================ */


(function () {
  "use strict";

  var PANES = [
    { id: "bucketList", label: "Bucket list" },
    { id: "movieToWatchList", label: "Movies to watch" },
    { id: "movieWatchedList", label: "Movies we've watched" },
  ];

  var FADE = 36; // keep in sync with --fade-size in scroll-pane.css

  function reducedMotion() {
    return (
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    );
  }

  function build(list, label) {
    if (!list || list.closest(".scroll-pane")) return null;

    var pane = document.createElement("div");
    pane.className = "scroll-pane";

    var scroller = document.createElement("div");
    scroller.className = "scroll-pane-scroller";
    scroller.tabIndex = 0;
    scroller.setAttribute("role", "region");
    scroller.setAttribute("aria-label", label);

    var foot = document.createElement("div");
    foot.className = "scroll-pane-foot";

    var rail = document.createElement("div");
    rail.className = "scroll-pane-rail";
    rail.setAttribute("aria-hidden", "true");

    var toggle = document.createElement("button");
    toggle.type = "button";
    toggle.className = "scroll-pane-toggle";
    toggle.textContent = "Show all";
    toggle.setAttribute("aria-expanded", "false");

    foot.appendChild(rail);
    foot.appendChild(toggle);

    // Slot the wrapper in where the list currently sits, then move
    // the list inside it. The list node itself is never replaced.
    list.parentNode.insertBefore(pane, list);
    scroller.appendChild(list);
    pane.appendChild(scroller);
    pane.appendChild(foot);

    function refresh() {
      var max = scroller.scrollHeight - scroller.clientHeight;
      var scrollable = max > 4 && !pane.classList.contains("expanded");
      pane.classList.toggle("is-scrollable", scrollable);
      if (!scrollable) {
        pane.style.setProperty("--fade-top", "0px");
        pane.style.setProperty("--fade-bottom", "0px");
        return;
      }
      var top = Math.min(scroller.scrollTop, FADE);
      var bottom = Math.min(max - scroller.scrollTop, FADE);
      pane.style.setProperty("--fade-top", top + "px");
      pane.style.setProperty("--fade-bottom", bottom + "px");
      pane.style.setProperty(
        "--pane-progress",
        max > 0 ? (scroller.scrollTop / max).toFixed(4) : 0,
      );
    }

    var ticking = false;
    scroller.addEventListener(
      "scroll",
      function () {
        if (ticking) return;
        ticking = true;
        requestAnimationFrame(function () {
          ticking = false;
          refresh();
        });
      },
      { passive: true },
    );

    toggle.addEventListener("click", function () {
      var expanded = pane.classList.toggle("expanded");
      toggle.textContent = expanded ? "Collapse" : "Show all";
      toggle.setAttribute("aria-expanded", String(expanded));

      if (!expanded) {
        // Collapsing can leave the top of the pane above the
        // viewport; bring it back into view.
        scroller.scrollTop = 0;
        var box = pane.getBoundingClientRect();
        if (box.top < 0) {
          pane.scrollIntoView({
            block: "start",
            behavior: reducedMotion() ? "auto" : "smooth",
          });
        }
      }
      // Wait for the max-height transition before remeasuring.
      setTimeout(refresh, reducedMotion() ? 0 : 520);
      refresh();
    });

    // Items are added and removed by app.js (and by Firebase
    // syncing from the other device), so remeasure on any change.
    if ("MutationObserver" in window) {
      new MutationObserver(refresh).observe(list, {
        childList: true,
        subtree: true,
      });

      // The movie sub-tabs toggle the [hidden] attribute on the
      // list itself. Mirror that onto the wrapper, otherwise an
      // empty pane stays on screen for the inactive tab.
      new MutationObserver(function () {
        var isHidden = list.hasAttribute("hidden");
        pane.hidden = isHidden;
        if (!isHidden) {
          scroller.scrollTop = 0;
          refresh();
        }
      }).observe(list, { attributes: true, attributeFilter: ["hidden"] });

      pane.hidden = list.hasAttribute("hidden");
    }

    if ("ResizeObserver" in window) {
      new ResizeObserver(refresh).observe(list);
    }
    window.addEventListener("resize", refresh, { passive: true });

    refresh();
    return pane;
  }

  // Albums used to get this same inner-scroll treatment, but they now use
  // a simple collapse/expand per album (see app.js renderAlbum() and the
  // .album-collapsible rules in enhancements.css) with a plain, un-scrolled
  // grid instead — so there's no album wrapping here anymore.

  function init() {
    PANES.forEach(function (cfg) {
      build(document.getElementById(cfg.id), cfg.label);
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();


/* ============================================================
   SECTION 2 — PREMIUM POLISH
   ============================================================ */

(function () {
  "use strict";

  var PT = function () {
    try {
      return localStorage.getItem("gfLanguage") === "pt";
    } catch (e) {
      return false;
    }
  };
  var reduced =
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- 1. reading progress -------------------------- */
  function readingProgress() {
    var bar = document.createElement("div");
    bar.id = "readingProgress";
    bar.setAttribute("aria-hidden", "true");
    var fill = document.createElement("i");
    bar.appendChild(fill);
    document.body.appendChild(bar);

    var ticking = false;
    function update() {
      var doc = document.documentElement;
      var max = doc.scrollHeight - window.innerHeight;
      var pct = max > 40 ? (doc.scrollTop / max) * 100 : 0;
      fill.style.width = pct.toFixed(2) + "%";
    }
    window.addEventListener(
      "scroll",
      function () {
        if (ticking) return;
        ticking = true;
        requestAnimationFrame(function () {
          ticking = false;
          update();
        });
      },
      { passive: true },
    );
    window.addEventListener("resize", update, { passive: true });
    update();
  }

  /* ---------- 2. subsection titles ------------------------- */
  function subsectionTitles() {
    var panel = document.getElementById("tab-us");
    if (!panel) return;
    panel.querySelectorAll("h3").forEach(function (h) {
      h.classList.add("subsection-title");
      h.removeAttribute("style");
    });
  }

  /* ---------- 3. bucket list constellation ----------------- */
  var SKY_NS = "http://www.w3.org/2000/svg";

  function constellation() {
    var host = document.getElementById("bucketProgress");
    var list = document.getElementById("bucketList");
    if (!host || !list) return;

    var sky = document.createElement("div");
    sky.className = "bucket-sky";
    var svg = document.createElementNS(SKY_NS, "svg");
    svg.setAttribute("class", "bucket-sky-svg");
    svg.setAttribute("preserveAspectRatio", "none");
    var thread = document.createElementNS(SKY_NS, "path");
    thread.setAttribute("class", "bucket-sky-thread");
    thread.setAttribute("vector-effect", "non-scaling-stroke");
    svg.appendChild(thread);
    var label = document.createElement("p");
    label.className = "bucket-sky-label";
    sky.appendChild(svg);
    sky.appendChild(label);
    host.insertBefore(sky, host.firstChild);

    // Deterministic jitter so the sky doesn't reshuffle on every
    // render — the same item always keeps the same star.
    function jitter(i) {
      var s = Math.sin(i * 12.9898) * 43758.5453;
      return s - Math.floor(s);
    }

    function draw() {
      var items = list.querySelectorAll(".bucket-item");
      var total = items.length;
      if (!total) return;
      var done = list.querySelectorAll(".bucket-item.done").length;

      var w = svg.clientWidth || sky.clientWidth || 600;
      var h = 74;
      svg.setAttribute("viewBox", "0 0 " + w + " " + h);

      // Clear previous stars, keep the thread.
      svg.querySelectorAll("circle").forEach(function (c) {
        c.remove();
      });

      var padX = 14;
      var span = Math.max(w - padX * 2, 10);
      var pts = [];
      for (var i = 0; i < total; i++) {
        var x = padX + (total === 1 ? span / 2 : (span * i) / (total - 1));
        var y = 16 + jitter(i) * (h - 32);
        pts.push([x, y]);
        var c = document.createElementNS(SKY_NS, "circle");
        c.setAttribute("cx", x.toFixed(1));
        c.setAttribute("cy", y.toFixed(1));
        c.setAttribute("r", (i < done ? 2.8 : 1.8).toFixed(1));
        c.setAttribute("class", "bucket-star" + (i < done ? " lit" : ""));
        svg.appendChild(c);
      }

      var d = pts
        .map(function (p, i) {
          return (i ? "L" : "M") + p[0].toFixed(1) + " " + p[1].toFixed(1);
        })
        .join(" ");
      thread.setAttribute("d", d);

      var len = 0;
      try {
        len = thread.getTotalLength();
      } catch (e) {
        len = span;
      }
      // Reveal the thread up to however far along the list we are.
      var lit = total > 1 ? Math.max(done - 1, 0) / (total - 1) : done ? 1 : 0;
      thread.style.setProperty("--thread-len", len);
      thread.style.setProperty("--thread-off", len * (1 - lit));

      var src = document.getElementById("bucketProgressLabel");
      var text = src && src.textContent ? src.textContent : "";
      label.textContent =
        text || done + (PT() ? " de " : " of ") + total;
    }

    if ("MutationObserver" in window) {
      new MutationObserver(draw).observe(list, {
        childList: true,
        subtree: true,
        attributes: true,
        attributeFilter: ["class"],
      });
    }
    window.addEventListener("resize", draw, { passive: true });
    if ("ResizeObserver" in window) {
      // The Bucket List tab starts hidden, so the SVG has no width
      // at boot — redraw the moment it actually gets one.
      new ResizeObserver(draw).observe(sky);
    }
    draw();
  }

  /* ---------- 4. bucket list filters ----------------------- */
  function filters() {
    var list = document.getElementById("bucketList");
    if (!list) return;
    var pane = list.closest(".scroll-pane") || list;

    var bar = document.createElement("div");
    bar.className = "bucket-filters";
    bar.setAttribute("role", "group");

    var defs = [
      { key: "all", en: "Everything", pt: "Tudo" },
      { key: "todo", en: "Still to do", pt: "Ainda falta" },
      { key: "done", en: "Done", pt: "Feito" },
    ];
    var buttons = {};
    defs.forEach(function (d) {
      var b = document.createElement("button");
      b.type = "button";
      b.className = "bucket-filter" + (d.key === "all" ? " active" : "");
      b.dataset.filter = d.key;
      b.setAttribute("aria-pressed", d.key === "all" ? "true" : "false");
      bar.appendChild(b);
      buttons[d.key] = b;
      b.addEventListener("click", function () {
        apply(d.key);
      });
    });
    pane.parentNode.insertBefore(bar, pane);

    var current = "all";
    function apply(key) {
      current = key;
      list.classList.remove("filter-todo", "filter-done");
      if (key !== "all") list.classList.add("filter-" + key);
      Object.keys(buttons).forEach(function (k) {
        buttons[k].classList.toggle("active", k === key);
        buttons[k].setAttribute("aria-pressed", String(k === key));
      });
    }

    function relabel() {
      var pt = PT();
      var total = list.querySelectorAll(".bucket-item").length;
      var done = list.querySelectorAll(".bucket-item.done").length;
      var counts = { all: total, todo: total - done, done: done };
      defs.forEach(function (d) {
        buttons[d.key].innerHTML =
          (pt ? d.pt : d.en) +
          '<span class="n">' +
          counts[d.key] +
          "</span>";
      });
      // Nothing to filter on an empty or brand-new list.
      bar.style.display = total ? "flex" : "none";
      // If the active filter just emptied out, fall back to all.
      if (current !== "all" && counts[current] === 0) apply("all");
    }

    if ("MutationObserver" in window) {
      new MutationObserver(relabel).observe(list, {
        childList: true,
        subtree: true,
        attributes: true,
        attributeFilter: ["class"],
      });
    }
    relabel();
  }

  /* ---------- 5. movies: ambient light --------------------- */
  function ambient() {
    ["movieToWatchList", "movieWatchedList"].forEach(function (id) {
      var list = document.getElementById(id);
      if (!list) return;

      function paint() {
        list.querySelectorAll(".movie-card").forEach(function (card) {
          var img = card.querySelector(".movie-poster img");
          if (!img || !img.src) {
            card.classList.remove("has-ambient");
            return;
          }
          card.style.setProperty("--ambient", 'url("' + img.src + '")');
          card.classList.add("has-ambient");
        });
      }

      if ("MutationObserver" in window) {
        new MutationObserver(paint).observe(list, {
          childList: true,
          subtree: true,
        });
      }
      paint();
    });
  }

  /* ---------- 6. movies: spin the reel --------------------- */
  function reel() {
    var subtabs = document.getElementById("movieSubtabs");
    var list = document.getElementById("movieToWatchList");
    if (!subtabs || !list) return;

    var btn = document.createElement("button");
    btn.type = "button";
    btn.className = "movie-reel-btn";
    function relabel() {
      btn.innerHTML =
        '<span class="reel" aria-hidden="true">🎞️</span>' +
        (PT() ? "Escolher por nós" : "Pick one for us");
    }
    relabel();
    subtabs.appendChild(btn);

    btn.addEventListener("click", function () {
      // Make sure the watchlist is the visible sub-tab first.
      var towatch = subtabs.querySelector('[data-movie-tab="towatch"]');
      if (towatch && !towatch.classList.contains("active")) towatch.click();

      relabel();

      setTimeout(
        function () {
          var cards = list.querySelectorAll(".movie-card");
          if (!cards.length) return;
          var pick = cards[Math.floor(Math.random() * cards.length)];

          cards.forEach(function (c) {
            c.classList.remove("is-picked");
          });
          // Reflow so the animation restarts on a repeat pick.
          void pick.offsetWidth;
          pick.classList.add("is-picked");
          pick.scrollIntoView({
            block: "nearest",
            behavior: reduced ? "auto" : "smooth",
          });
          setTimeout(function () {
            pick.classList.remove("is-picked");
          }, 2600);
        },
        reduced ? 0 : 1250,
      );

      if (!reduced) {
        btn.classList.add("spinning");
        setTimeout(function () {
          btn.classList.remove("spinning");
        }, 1250);
      }
    });
  }

  /* ---------- 7. today widget: replay-able opening moment ---- */
  function todayOpenAnimation() {
    var panel = document.getElementById("todayPanel");
    if (!panel) return;

    function play() {
      if (reduced) return;
      panel.classList.remove("tp-opening");
      // Force reflow so the animation restarts if it's opened,
      // closed, and reopened in quick succession.
      void panel.offsetWidth;
      panel.classList.add("tp-opening");
    }

    if ("MutationObserver" in window) {
      new MutationObserver(function () {
        if (!panel.hidden) play();
      }).observe(panel, { attributes: true, attributeFilter: ["hidden"] });
    }
    if (!panel.hidden) play();
  }

  /* ---------- 8. stagger-reveal for a few more static grids ---
     Favorites / fun facts / the firsts timeline already get this
     treatment straight from app.js. These four are just as static
     but were missed, so we tag them the same way here, reusing
     the existing .stagger-reveal-item / .sr-in classes and CSS
     already defined for the others — nothing new to style. */
  function extraGridStagger() {
    var selectors = ["#missGrid", "#littleGrid", "#betterBlock", "#owGrid"];
    var items = [];

    selectors.forEach(function (sel) {
      var host = document.querySelector(sel);
      if (!host) return;
      Array.prototype.forEach.call(host.children, function (el, i) {
        if (el.classList.contains("stagger-reveal-item")) return;
        el.classList.add("stagger-reveal-item");
        el.style.setProperty("--sr-i", i);
        items.push(el);
      });
    });
    if (!items.length) return;

    if (!("IntersectionObserver" in window) || reduced) {
      items.forEach(function (el) {
        el.classList.add("sr-in");
      });
      return;
    }
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("sr-in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.25, rootMargin: "0px 0px -40px 0px" },
    );
    items.forEach(function (el) {
      io.observe(el);
    });
  }

  /* ---------- Thommy Personal polish ------------------------
     Sliding highlight behind the active sub-nav button (mirrors
     the header's .tab-indicator), a soft fade+slide each time
     #tpMain's content is swapped, and a one-time shimmer veil
     the first time the dashboard is unlocked in a session. All
     purely additive — reads the DOM app.js produces, never
     touches tpRender() or the view HTML itself. */
  function tpPolish() {
    var nav = document.getElementById("tpNav");
    var main = document.getElementById("tpMain");
    var app = document.getElementById("tpApp");
    var panel = document.getElementById("tab-personal");
    if (!nav || !main || !app || nav.dataset.polished) return;
    nav.dataset.polished = "1";

    var indicator = document.createElement("div");
    indicator.className = "tp-nav-indicator";
    indicator.setAttribute("aria-hidden", "true");
    nav.insertBefore(indicator, nav.firstChild);

    var lastActive = null;
    function moveIndicator(instant) {
      var active = nav.querySelector("button.active");
      if (lastActive && lastActive !== active) {
        // plain inline style, not a class — doesn't feed back into the
        // classList-watching MutationObserver below
        lastActive.style.background = "";
      }
      if (!active || active.offsetParent === null) {
        indicator.style.opacity = "0";
        lastActive = null;
        return;
      }
      if (instant) indicator.style.transition = "none";
      var navBox = nav.getBoundingClientRect();
      var box = active.getBoundingClientRect();
      indicator.style.width = box.width + "px";
      indicator.style.height = box.height + "px";
      indicator.style.transform =
        "translate(" +
        (box.left - navBox.left) +
        "px," +
        (box.top - navBox.top) +
        "px)";
      indicator.style.opacity = "1";
      active.style.background = "transparent";
      lastActive = active;
      if (instant) {
        void indicator.offsetWidth; // reflow, then restore transition
        indicator.style.transition = "";
      }
    }

    nav.addEventListener("click", function (e) {
      if (e.target.closest("button")) {
        requestAnimationFrame(function () {
          moveIndicator(false);
        });
      }
    });

    var resizeTimer = null;
    window.addEventListener(
      "resize",
      function () {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function () {
          moveIndicator(true);
        }, 120);
      },
      { passive: true },
    );

    // Re-measure whenever the nav's own active button changes (covers
    // keyboard/programmatic switches too, not just clicks) and whenever
    // the Personal tab itself becomes the visible tab — its layout is
    // display:none until then, so any earlier measurement was zero.
    if ("MutationObserver" in window) {
      new MutationObserver(function () {
        moveIndicator(true);
      }).observe(nav, {
        attributes: true,
        subtree: true,
        attributeFilter: ["class"],
      });
      if (panel) {
        new MutationObserver(function () {
          if (panel.classList.contains("active")) {
            requestAnimationFrame(function () {
              moveIndicator(true);
            });
          }
        }).observe(panel, { attributes: true, attributeFilter: ["class"] });
      }
    }

    // Fade+slide the content each time a new section renders into
    // #tpMain (Dashboard -> Habits -> Analytics -> …).
    if ("MutationObserver" in window) {
      new MutationObserver(function () {
        if (reduced) return;
        main.classList.remove("tp-swap-in");
        void main.offsetWidth;
        main.classList.add("tp-swap-in");
      }).observe(main, { childList: true });
    }

    // One-time shimmer veil right after unlocking, purely cosmetic
    // (the data is local and renders instantly — this just gives the
    // dashboard the same "just loaded" feel the synced lists get from
    // their skeleton rows elsewhere on the site).
    var veilShown = false;
    function maybeShowBootVeil() {
      if (veilShown || app.hidden || reduced) return;
      veilShown = true;
      main.style.position = main.style.position || "relative";
      var veil = document.createElement("div");
      veil.className = "tp-boot-veil";
      veil.innerHTML =
        '<div class="tp-stat skeleton-row"></div>' +
        '<div class="tp-card skeleton-row" style="height:120px"></div>' +
        '<div class="tp-card skeleton-row" style="height:160px"></div>';
      main.appendChild(veil);
      setTimeout(function () {
        veil.classList.add("fade-out");
        setTimeout(function () {
          veil.remove();
        }, 260);
      }, 320);
    }
    if ("MutationObserver" in window) {
      new MutationObserver(function () {
        maybeShowBootVeil();
      }).observe(app, { attributes: true, attributeFilter: ["hidden"] });
    }

    requestAnimationFrame(function () {
      moveIndicator(true);
    });
  }

  /* ---------- boot ----------------------------------------- */
  function init() {
    readingProgress();
    subsectionTitles();
    constellation();
    filters();
    ambient();
    reel();
    todayOpenAnimation();
    extraGridStagger();
    tpPolish();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();


/* ============================================================
   SECTION 4 — HAPTICS
   ------------------------------------------------------------
   Short vibration pulses on the taps that matter most on mobile:
   checking something off, and adding something new. Delegated
   listeners so this doesn't need touching every existing wiring
   line for the tp-tracker checkboxes (which get re-attached on
   every tpRender() call). navigator.vibrate silently no-ops on
   desktop/iOS Safari, so no extra feature detection needed beyond
   the try/catch.
   ============================================================ */

(function () {
  "use strict";

  function tap(ms) {
    try {
      if (navigator.vibrate) navigator.vibrate(ms);
    } catch (e) {}
  }

  // Checking off a habit, a daily goal, a routine step, a bucket
  // item, or a study portion in the personal tracker.
  document.addEventListener("change", function (e) {
    var t = e.target;
    if (!t || t.tagName !== "INPUT" || t.type !== "checkbox") return;
    if (
      t.hasAttribute("data-tp-habit") ||
      t.hasAttribute("data-tp-goal") ||
      t.hasAttribute("data-tp-routine") ||
      t.hasAttribute("data-tp-bucket") ||
      t.hasAttribute("data-tp-portion") ||
      t.hasAttribute("data-tp-routine-ex")
    ) {
      tap(t.checked ? 12 : 8);
    }
  });

  // Marking the shared bucket list done, and the handful of
  // "add new thing" buttons across the site.
  document.addEventListener("click", function (e) {
    var el = e.target.closest(
      [
        ".bucket-check",
        "#bucketAddBtn",
        "#newAlbumBtn",
        "#tpAddHabit",
        "#tpAddGoal",
        "#tpAddAffirm",
      ].join(","),
    );
    if (el) tap(12);
  });
})();


/* ============================================================
   SECTION 5 — COLLAPSIBLE ADD FORMS
   ------------------------------------------------------------
   The "Add a song / Add to the calendar / Add a photo / New
   album" forms default to closed (see enhancements.css) behind
   a small toggle button, instead of always sitting open on the
   page. Tapping the toggle opens or closes the form.

   app.js reveals these same forms itself when there's a good
   reason to (editing an existing song/event/photo, or scheduling
   a bucket-list item onto the calendar) by scrolling to them —
   every one of those call sites ends in
   `document.getElementById(<formId>)?.scrollIntoView(...)`.
   Rather than editing each of those spots in app.js, this wraps
   scrollIntoView once so that scrolling to one of our forms
   opens it first. Purely additive; every other scrollIntoView
   call on the page passes straight through unchanged.
   ============================================================ */

(function () {
  "use strict";

  var FORMS = [
    { id: "musicAddForm", label: "+ Add a song", labelPt: "+ Adicionar uma música" },
    { id: "calAddForm", label: "+ Add to the calendar", labelPt: "+ Adicionar ao calendário" },
    { id: "memoryUploadForm", label: "+ Add a photo", labelPt: "+ Adicionar uma foto" },
    { id: "albumCreateForm", label: "+ New album", labelPt: "+ Novo álbum" },
  ];

  var closeLabel = "Close";
  var closeLabelPt = "Fechar";

  function isPt() {
    try {
      return localStorage.getItem("gfLanguage") === "pt";
    } catch (e) {
      return false;
    }
  }

  function setLabel(btn, entry, open) {
    if (open) {
      btn.textContent = isPt() ? closeLabelPt : closeLabel;
    } else {
      btn.textContent = isPt() ? entry.labelPt : entry.label;
    }
  }

  function expand(entry) {
    var form = entry.form;
    if (form.classList.contains("add-form-open")) return;
    form.classList.add("add-form-open");
    form.style.maxHeight = form.scrollHeight + "px";
    setLabel(entry.toggle, entry, true);
    entry.toggle.classList.add("is-open");
    entry.toggle.setAttribute("aria-expanded", "true");
    var onEnd = function (e) {
      if (e.target !== form || e.propertyName !== "max-height") return;
      form.removeEventListener("transitionend", onEnd);
      if (form.classList.contains("add-form-open")) form.style.maxHeight = "none";
    };
    form.addEventListener("transitionend", onEnd);
  }

  function collapse(entry) {
    var form = entry.form;
    if (!form.classList.contains("add-form-open")) return;
    // Snapshot the current rendered height as a px value (it may
    // currently be "none") so there's something to transition
    // down from, then drop it to 0 on the next frame.
    form.style.maxHeight = form.scrollHeight + "px";
    void form.offsetHeight; // force reflow so the browser registers that value first
    requestAnimationFrame(function () {
      form.classList.remove("add-form-open");
      form.style.maxHeight = "0px";
    });
    setLabel(entry.toggle, entry, false);
    entry.toggle.classList.remove("is-open");
    entry.toggle.setAttribute("aria-expanded", "false");
  }

  function toggle(entry) {
    if (entry.form.classList.contains("add-form-open")) collapse(entry);
    else expand(entry);
  }

  function setup(entry) {
    var form = document.getElementById(entry.id);
    if (!form || form.hasAttribute("data-collapsible-ready")) return;
    form.setAttribute("data-collapsible-ready", "1");
    entry.form = form;

    var btn = document.createElement("button");
    btn.type = "button";
    btn.className = "add-form-toggle";
    btn.setAttribute("aria-expanded", "false");
    setLabel(btn, entry, false);
    btn.addEventListener("click", function () {
      toggle(entry);
    });
    form.parentNode.insertBefore(btn, form);
    entry.toggle = btn;
  }

  function findEntry(el) {
    for (var i = 0; i < FORMS.length; i++) {
      var f = FORMS[i].form;
      if (f && (f === el || f.contains(el))) return FORMS[i];
    }
    return null;
  }

  // Auto-open whenever app.js scrolls one of these forms into
  // view (editing an item, or scheduling a bucket item onto the
  // calendar) — see header note above.
  var nativeScrollIntoView = Element.prototype.scrollIntoView;
  if (!Element.prototype._addFormScrollPatched) {
    Element.prototype.scrollIntoView = function () {
      var entry = findEntry(this);
      if (entry && entry.form) expand(entry);
      return nativeScrollIntoView.apply(this, arguments);
    };
    Element.prototype._addFormScrollPatched = true;
  }

  // The Cancel buttons that appear mid-edit close the panel back
  // up too, on top of whatever app.js already resets.
  document.addEventListener("click", function (e) {
    var el = e.target.closest(
      "#musicCancelEditBtn, #calCancelEditBtn, #memoryCancelEditBtn",
    );
    if (!el) return;
    var mapping = {
      musicCancelEditBtn: "musicAddForm",
      calCancelEditBtn: "calAddForm",
      memoryCancelEditBtn: "memoryUploadForm",
    };
    var entry = findEntry(document.getElementById(mapping[el.id]));
    if (entry) collapse(entry);
  });

  function init() {
    FORMS.forEach(setup);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();

/* ---- Music: keep the playing song in view inside the scrollable playlist ----
   The playlist now scrolls inside its own box (see modern.css). When the
   active track changes (tap a song, Next, autoplay) this nudges only the
   playlist's own scroll, never the page, so the current song stays visible. */
(function () {
  "use strict";
  var list = document.getElementById("musicTrackList");
  if (!list || !window.MutationObserver) return;
  var lastKey = null;
  var timer = null;
  var reduce =
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function follow() {
    try {
      var rows = list.querySelectorAll(".music-track");
      var active = list.querySelector(".music-track.active");
      if (!active) {
        lastKey = null;
        return;
      }
      var idx = Array.prototype.indexOf.call(rows, active);
      var key = idx + "|" + (active.textContent || "").slice(0, 40);
      if (key === lastKey) return;
      lastKey = key;
      var top = active.offsetTop;
      var bottom = top + active.offsetHeight;
      if (top >= list.scrollTop && bottom <= list.scrollTop + list.clientHeight) return;
      var target = top - (list.clientHeight - active.offsetHeight) / 2;
      list.scrollTo({ top: Math.max(0, target), behavior: reduce ? "auto" : "smooth" });
    } catch (e) {
      /* never let a scroll nicety break the player */
    }
  }

  new MutationObserver(function () {
    clearTimeout(timer);
    timer = setTimeout(follow, 60);
  }).observe(list, {
    childList: true,
    subtree: true,
    attributes: true,
    attributeFilter: ["class"],
  });
})();
