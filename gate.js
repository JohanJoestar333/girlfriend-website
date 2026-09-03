      (function () {
        var GATE_PASSWORD = "211200";
        var GATE_STORAGE_KEY = "site-unlocked-v1";

        var html = document.documentElement;
        var alreadyUnlocked = false;
        try {
          alreadyUnlocked = localStorage.getItem(GATE_STORAGE_KEY) === "true";
        } catch (e) {}

        var gate = document.getElementById("passwordGate");
        var input = document.getElementById("gatePasswordInput");
        var btn = document.getElementById("gateUnlockBtn");
        var errorEl = document.getElementById("gateError");
        var card = document.getElementById("gateCard");

        if (alreadyUnlocked) {
          gate.style.display = "none";
        } else {
          html.classList.add("gate-locked");

          for (var i = 0; i < 14; i++) {
            var p = document.createElement("div");
            p.className = "gate-particle";
            p.textContent = "♥";
            p.style.left = Math.random() * 100 + "vw";
            p.style.fontSize = 10 + Math.random() * 10 + "px";
            p.style.animationDuration = 12 + Math.random() * 10 + "s";
            p.style.animationDelay = Math.random() * 10 + "s";
            gate.appendChild(p);
          }

          input.focus();

          function tryUnlock() {
            if (input.value === GATE_PASSWORD) {
              try {
                localStorage.setItem(GATE_STORAGE_KEY, "true");
              } catch (e) {}
              gate.style.transition = "opacity 0.5s ease";
              gate.style.opacity = "0";
              setTimeout(function () {
                gate.style.display = "none";
                html.classList.remove("gate-locked");
              }, 500);
            } else {
              errorEl.textContent = "Not quite — try again ♥";
              card.classList.remove("shake");
              void card.offsetWidth;
              card.classList.add("shake");
              input.value = "";
              input.focus();
            }
          }

          btn.addEventListener("click", tryUnlock);
          input.addEventListener("keydown", function (e) {
            if (e.key === "Enter") tryUnlock();
          });
        }
      })();
