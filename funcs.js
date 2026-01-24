

const text = document.getElementById("typingText");
const sound = document.getElementById("clickSound");
const bg = document.querySelector(".bg");
const bgmusic = document.querySelector(".bgMusic");
let diff;
let spanh, spanm, spans, spansec;
let timer;

const target = new Date(2026, 1, 20, 11, 59, 0);

function updateTimer() {
  const now = new Date();
  diff = target - now;

  if (diff <= 0) {

    const reslock = document.querySelector(".resultlock");
    if (reslock) {
      reslock.innerHTML = `Thank you for the wait baby`;
      reslock.style.opacity = "1";
    }
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


  function createPetal() {
    const petal = document.createElement('div');
    petal.className = 'petal';


    petal.style.left = Math.random() * 100 + 'vw';


    const duration = 8 + Math.random() * 10;
    petal.style.animationDuration = duration + 's';

    petal.style.animationDelay = Math.random() * 3 + 's';


    const size = 12 + Math.random() * 8;
    petal.style.width = size + 'px';
    petal.style.height = size + 'px';

    const colors = ['#f7b3b3', '#ffc8dd', '#dfbdc9', '#ffd6e8', '#ebb0ce'];
    petal.style.background = colors[Math.floor(Math.random() * colors.length)];

    document.body.appendChild(petal);


    setTimeout(() => {
      petal.remove();
    }, (duration + 9) * 1000);
  }


  for (let i = 0; i < 20; i++) {
    setTimeout(() => createPetal(), i * 200);
  }


  setInterval(() => {
    createPetal();
  }, 1000);

  setTimeout(() => {
    times.innerHTML = `
      <div class="h"><span class="top">Days</span><span class="bottom"></span></div>
      <div class="m"><span class="top">Hours</span><span class="bottom"></span></div>
      <div class="s"><span class="top">Minutes</span><span class="bottom"></span></div>
      <div class="lolz"></div>
    `;

    lock.innerHTML = `<button type="button" class="locki" id="myBtn"><img class="piclock" src="assets/Images/New Project (6).png" alt="Locked for now"></button>`;

    document.body.appendChild(times);

    spanh = times.querySelector(".h .bottom");
    spanm = times.querySelector(".m .bottom");
    spans = times.querySelector(".s .bottom");
    spansec = times.querySelector(".lolz");

    updateTimer();
    timer = setInterval(updateTimer, 1000);

    const myBtn = document.getElementById("myBtn");
    const message = document.getElementById("message");

    myBtn.addEventListener("click", () => {
      sound.currentTime = 0; // restart sound
      sound.play();
      if (diff > 0) {

        message.textContent = `lol bih`; //Time xa ajhai puntu roknus
        message.style.opacity = "1";

        setTimeout(() => {
          message.style.opacity = "0";
        }, 3000);
      } else {
        message.textContent = "Thank you for the wait baby"; //Thank you for the wait baby
        message.style.opacity = "1";
      }
    });

  }, 0);
});


document.body.addEventListener("click", () => {
  bgmusic.volume = 0.2;
  bgmusic.play();
});









