/* ══════════════════════════════════════════════
   BIRTHDAY PAGE — script.js
══════════════════════════════════════════════ */

// ── Config ──────────────────────────────────
const CANDLE_COUNT = 5;   // change to however many candles you want
const PHOTOS = [
  { src: "angry.png", caption: "Damn my baby angry with me" },
  { src: "cutie.png", caption: "Absolutely stunning my baby" },
  { src: "charmingeyes.png", caption: "THESE EYES SO PRETTYYY" },
  { src: "mfav.png", caption: "my fav fav favvvv" },
  { src: "sleep.png", caption: "hehe my sleeping princess" },
  { src: "firstoithink.png", caption: "Maile pako first pic" },
];
const YT_VIDEO_ID = "VIDEO_ID"; // ← REPLACE with real YouTube video ID

// ── DOM refs ────────────────────────────────
const stageIntro = document.getElementById("stage-intro");
const stageCake = document.getElementById("stage-cake");
const stageChoices = document.getElementById("stage-choices");
const btnIntro = document.getElementById("btn-intro");
const btnWish = document.getElementById("btn-wish");
const cakeWrap = document.getElementById("cake-wrap");
const candlesRow = document.getElementById("candles-row");
const music = document.getElementById("birthday-music");

const panelPhotos = document.getElementById("panel-photos");
const panelMessage = document.getElementById("panel-message");
const panelVideo = document.getElementById("panel-video");
const photoGrid = document.getElementById("photo-grid");

// ── Particles setup ─────────────────────────
const emojis = ["🌸", "💜", "✨", "🎀", "💕", "🌷", "⭐", "💫", "🎊", "🦋"];
const particlesEl = document.getElementById("particles");

function spawnParticles(count = 22) {
  for (let i = 0; i < count; i++) {
    const p = document.createElement("span");
    p.className = "particle";
    p.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    p.style.setProperty("--x", Math.random() * 100 + "vw");
    p.style.setProperty("--dur", (4 + Math.random() * 6) + "s");
    p.style.setProperty("--delay", (Math.random() * 8) + "s");
    particlesEl.appendChild(p);
  }
}
spawnParticles();

// ── Stage helpers ────────────────────────────
function showStage(el) {
  el.classList.remove("hidden");
  el.style.opacity = "0";
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      el.style.transition = "opacity 0.8s ease";
      el.style.opacity = "1";
    });
  });
}

function hideStage(el, cb) {
  el.style.transition = "opacity 0.7s ease";
  el.style.opacity = "0";
  setTimeout(() => {
    el.classList.add("hidden");
    if (cb) cb();
  }, 750);
}

// ── Candles ──────────────────────────────────
let candlesBlown = 0;

function buildCandles() {
  candlesRow.innerHTML = "";
  candlesBlown = 0;
  for (let i = 0; i < CANDLE_COUNT; i++) {
    const wrap = document.createElement("div");
    wrap.className = "candle";
    wrap.dataset.idx = i;

    const img = document.createElement("img");
    img.src = "light.png";
    img.alt = "candle";

    wrap.appendChild(img);
    candlesRow.appendChild(wrap);

    wrap.addEventListener("click", () => blowCandle(wrap, img));
  }
}

function blowCandle(wrap, img) {
  if (wrap.classList.contains("blown")) return;
  wrap.classList.add("blown");
  img.src = "darko.png";
  candlesBlown++;

  // little pop effect
  wrap.style.transform = "scale(0.85)";
  setTimeout(() => wrap.style.transform = "", 200);

  if (candlesBlown === CANDLE_COUNT) {
    setTimeout(allCandlesBlown, 600);
  }
}

function allCandlesBlown() {
  // Fade out cake stage elements then show choices
  const elements = stageCake.querySelectorAll(".cake-wrap, .main-btn");
  elements.forEach(el => {
    el.style.transition = "opacity 1s ease";
    el.style.opacity = "0";
  });
  setTimeout(() => {
    stageCake.classList.add("hidden");
    showStage(stageChoices);
  }, 1100);
}

// ── STAGE 1 → 2: Music + Cake ────────────────
btnIntro.addEventListener("click", () => {
  // Play music
  music.play().catch(() => { });

  hideStage(stageIntro, () => {
    // Build and show cake stage
    buildCandles();
    stageCake.classList.remove("hidden");
    stageCake.style.opacity = "1";

    // Slide cake in from top
    cakeWrap.classList.add("slide-in");
  });
});

// ── STAGE 3: Choice buttons ──────────────────
document.getElementById("btn-photos").addEventListener("click", () => openPanel(panelPhotos, initPhotos));
document.getElementById("btn-message").addEventListener("click", () => openPanel(panelMessage, initMessage));
document.getElementById("btn-video").addEventListener("click", () => openPanel(panelVideo, initVideo));

function openPanel(panel, initFn) {
  stageChoices.classList.add("hidden");
  panel.classList.remove("hidden");
  panel.scrollTop = 0;
  if (initFn) initFn();
}

function closePanel(panel) {
  panel.classList.add("hidden");
  showStage(stageChoices);
}

// back buttons
document.getElementById("back-photos").addEventListener("click", () => closePanel(panelPhotos));
document.getElementById("back-message").addEventListener("click", () => closePanel(panelMessage));
document.getElementById("back-video").addEventListener("click", () => {
  // Stop video
  const iframe = document.getElementById("yt-iframe");
  iframe.src = "";
  closePanel(panelVideo);
});

// ── Photo grid ───────────────────────────────
let photosInit = false;
function initPhotos() {
  if (photosInit) return;
  photosInit = true;
  photoGrid.innerHTML = "";
  PHOTOS.forEach((p, i) => {
    const card = document.createElement("div");
    card.className = "photo-card";

    const img = document.createElement("img");
    img.src = p.src;
    img.alt = p.caption;
    img.loading = "lazy";

    const cap = document.createElement("p");
    cap.className = "photo-caption";
    cap.textContent = p.caption;

    card.appendChild(img);
    card.appendChild(cap);
    photoGrid.appendChild(card);
  });
}

// ── Message scroll reveal ────────────────────
let messageInit = false;
function initMessage() {
  if (messageInit) return;
  messageInit = true;

  const paras = panelMessage.querySelectorAll(".message-text p");
  const scrollWrap = panelMessage.querySelector(".message-scroll-wrap");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, { root: panelMessage, rootMargin: "0px", threshold: 0.15 });

  // First paragraph visible right away
  paras.forEach((p, i) => {
    if (i === 0) {
      setTimeout(() => p.classList.add("visible"), 300);
    } else {
      observer.observe(p);
    }
  });
}

// ── Video ────────────────────────────────────
let videoInit = false;
function initVideo() {
  if (videoInit) return;
  videoInit = true;
  const iframe = document.getElementById("yt-iframe");
  iframe.src = `https://www.youtube.com/embed/${YT_VIDEO_ID}?autoplay=1`;
}