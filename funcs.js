

const text = document.getElementById("typingText");
const sound = document.getElementById("clickSound");
const bg = document.querySelector(".bg");
const bgmusic = document.querySelector(".bgMusic");
let diff;
let spanh, spanm, spans, spansec;
let timer;
const grayscaler = document.querySelector(".grayscaler")
const blacktop = document.querySelector(".blackboxtop1")
const blackbottom = document.querySelector(".blackboxtop2")

const target = new Date(2026, 1, 6, 23, 43, 40);


function thirdo() {
  console.log("yay")
}

function secondo() {
  grayscaler.classList.add("grayscalerv")
  blackbottom.classList.add("suika2")
  blacktop.classList.add("suika1")

  blacktop.addEventListener("animationend", (e) => {
    if (e.animationName !== "blackst") return;

    const textie = document.createElement("div");
    textie.className = "textieafter";

    const typed = document.createElement("span");
    const caret = document.createElement("span");

    caret.className = "caret";
    caret.textContent = "|";

    textie.appendChild(typed);
    textie.appendChild(caret);
    document.body.appendChild(textie);

    // Auto-scroll variables
    let autoScrolling = true;
    let autoScrollInterval;

    // Detect manual scroll
    textie.addEventListener('wheel', () => {
      autoScrolling = false;
      clearInterval(autoScrollInterval);
    });

    textie.addEventListener('touchmove', () => {
      autoScrolling = false;
      clearInterval(autoScrollInterval);
    });

    // WAIT, then start typing
    setTimeout(() => {
      caret.style.display = "inline-block";

      const message = "Baby,re beir time.\n\nThank you for waiting.";
      let i = 0;

      const typer = setInterval(() => {
        typed.textContent += message[i];
        i++;

        // Auto-scroll as text appears (if not manually scrolled)
        if (autoScrolling && textie.scrollHeight > textie.clientHeight) {
          textie.scrollTop = textie.scrollHeight;
        }

        if (i === message.length) {
          clearInterval(typer);
          caret.style.display = "none";
          const btn = document.createElement("button");
          btn.id = "continueBtn";
          btn.className = "continueBtn";
          btn.textContent = "Continue";
          document.body.appendChild(btn);
          console.log('hi');



          btn.addEventListener("click", () => {
            grayscaler.classList.add("removere");
            blackbottom.classList.add("remover2");
            blacktop.classList.add("remover1");
            btn.classList.add("removered");
            document.querySelector(".textieafter").classList.add("removered");
            setTimeout(() => {
              document.querySelector(".grayscaler")?.remove();
              document.querySelector(".blackboxtop1")?.remove();
              document.querySelector(".blackboxtop2")?.remove();
              document.querySelector(".textieafter")?.remove();
              btn.remove();
            }, 3000);
            thirdo();
          });


          // Start auto-scrolling credits style after typing is done
          if (autoScrolling) {
            setTimeout(() => {
              autoScrollInterval = setInterval(() => {
                if (autoScrolling) {
                  textie.scrollTop += 1; // Slow scroll speed

                  // Stop when reached bottom
                  if (textie.scrollTop >= textie.scrollHeight - textie.clientHeight) {
                    clearInterval(autoScrollInterval);
                  }
                }
              }, 50); // Adjust for scroll speed
            }, 2000); // Wait 2 seconds before starting credits scroll
          }
        }
      }, 40);
    }, 300);
  });
}



function afterdone() {

  const allElements = document.body.querySelectorAll('*');

  allElements.forEach(el => {

    if (el.classList.contains('petal') ||
      el.classList.contains('bg') ||
      el.classList.contains('grayscaler') ||
      el.classList.contains('blackboxtop1') ||
      el.classList.contains('blackboxtop2') ||
      el.tagName === 'AUDIO') {
      return;
    }

    el.style.transition = "opacity 2.5s ease-out ";
    el.style.opacity = "0";
    el.style.pointerEvents = "none";
    setTimeout(() => {
      el.remove();
    }, 3000);
  });

  setTimeout(() => {
    setTimeout(() => {
      bgmusic.volume = 0.2;
      bgmusic.play();
    }, 1000);

    window.location.href = "gifts.html";
  }, 3200);
}

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


  for (let i = 0; i < 12; i++) {
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

        message.textContent = `Time xa ajhai puntu roknus`; //
        message.style.opacity = "1";

        setTimeout(() => {
          message.style.opacity = "0";
        }, 3000);
      } else {
        afterdone();
        message.textContent = "Thank you for the wait baby"; //Thank you for the wait baby
        message.style.opacity = "1";
      }
    });

  }, 0);
});


document.body.addEventListener("click", () => {
  bgmusic.volume = 0.7;
  bgmusic.play();
});








