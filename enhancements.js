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
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
