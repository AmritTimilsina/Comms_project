const text = document.getElementById("typingText");

let spanh, spanm, spans, spansec;
let timer;

// ✅ Fixed: Feb 20, 2026 at 11:59 AM (month is 0-indexed, so 1 = February)
const target = new Date(2026, 1, 20, 11, 59, 0);

function updateTimer() {
  const now = new Date();
  const diff = target - now;

  if (diff <= 0) {
    console.log("🎉 TIME'S UP 🎉");
    clearInterval(timer);
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  spanh.textContent = days;
  spanm.textContent = hours;
  spans.textContent = minutes;
  spansec.textContent = seconds;
}

const times = document.querySelector(".times");
const lock = document.querySelector(".lock");
text.addEventListener("animationend", (e) => {
  if (e.animationName !== "typing") return;

  setTimeout(() => {


    times.innerHTML = `
      <div class="h"><span class="top">Days</span><span class="bottom"></span></div>
      <div class="m"><span class="top">Hours</span><span class="bottom"></span></div>
      <div class="s"><span class="top">Minutes</span><span class="bottom"></span></div>
      <div class="lolz"></div>
    `;

    lock.innerHTML = `<button type="button" class="locki">UNLOCK</button>`;

    document.body.appendChild(times);

    spanh = times.querySelector(".h .bottom");
    spanm = times.querySelector(".m .bottom");
    spans = times.querySelector(".s .bottom");
    spansec = times.querySelector(".lolz");

    updateTimer();
    timer = setInterval(updateTimer, 1000); // ✅ Update every second

  }, 0);
});