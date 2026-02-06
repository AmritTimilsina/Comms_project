
const container = document.querySelector(".begin");
const text = document.querySelector(".h1prev");
const idfkatp = document.querySelector(".idfkatp");

const answers_no = [
  "lala",
  "k aai",
  "aangaaaaaaaa",
  "maya nagarne malai",
  "HUSSSSSSSSSSSSSSS",
  "malai maya ta kaha",
  "haina chainna ma",
  "feri try garna tya",
  "Huss tani no tani",
  "eh lw bye"

];

setTimeout(() => {
  text.remove();

}, 11000);

const textos = ['I love you so so sooooooo much my puntu mayalu babyyyyy 𓆩♡𓆪 ', '<img src = "rose.jpg" class="hi">',
  'Mero baby ko malai dherai dherai yad auxaa ;-;',
  'baby I really need hugs and kissies k dinus na aunu ;-; 𓆩♡𓆪',
  'mero mutu ko pyaro tukra i love you so so sooo much puntu 𓆩♡𓆪',
  'i rlly rlly want to marry hjr and have a family with hjr kk babyyyyy 𓆩♡𓆪',
  'ma sangai bihe garnus hai oki baby 𓆩♡𓆪',
  'aba hjr ma sanga khushi hununxa vanne aasgarxu haina ma baby so yaaaa please marry me yaa 𓆩♡𓆪',
  'baby mero valentine bandinu vaisakyo so mero wife pani bandinus hai baby 𓆩♡𓆪',
  'Puntu maile vid ma ali badhi bole hola hai baby maaf gardinus hai puntu 𓆩♡𓆪 ;-;',
  'ani k baby hamro 2 ta vantyangvuntyung huda pani hjr nia mero first baby hununxa haiiii 𓆩♡𓆪 heehehhehehe',
  'ahhahaha aba hjr have to send me kissies and huggies photo for my reeward 𓆩♡𓆪 hehe',
  'maile aba sake samma gareko hai naramro vaye ni maaf gardinus hai baby 𓆩♡𓆪 ;-;',
  'thank you for being in my life hai baby khushi banaidinu vako ma hehe 𓆩♡𓆪',
  'ig hjr lai maile kei ta garaunu parxa cuz valentine ma mero gift eheheh 𓆩♡𓆪',
  'I love you my sanu baby my cutie patootie princess pie 𓆩♡𓆪 ehhe',
  'halllooooo my cutie pieeeeeeeee my lovely wifeyyyy 𓆩♡𓆪',
  'hehehehh mero pyaro bebe maile naramro banaye ni thikai mandinus hai 𓆩♡𓆪 ;-;',
  'malai kaile nachodhnus hai puntu sadhai maya garirakhnu 𓆩♡𓆪 hehe'
];

function spawnLetter() {

  const bg = document.createElement("div");
  bg.className = "letter-bg";

  const box = document.createElement("div");
  box.className = "letter-box";
  let MY_SECRET_TEXT = textos[Math.floor(Math.random() * textos.length)];

  box.innerHTML = `
    <h3>💌 Puntu lai msg hru</h3>

    <div style="margin:10px 0">${MY_SECRET_TEXT}</div>
    <button class="close-let">Close</button>
  `;

  document.body.appendChild(bg);
  document.body.appendChild(box);

  setTimeout(() => box.classList.add("show"), 20);

  function kill() {
    bg.remove();
    box.remove();
  }

  bg.onclick = kill;
  box.querySelector(".close-let").onclick = kill;
}

function aftero() {
  let opacity = 1;
  const fadeInterval = setInterval(() => {
    opacity -= 0.05;
    container.style.opacity = opacity;

    if (opacity <= 0) {
      clearInterval(fadeInterval);
      container.remove();
    }
  }, 120);  // Fades out over 1 second (50ms * 20 steps)
  setTimeout(() => {
    idfkatp.innerHTML = `<div class="rose">
    <h1 class="h1after" style="left: 10px;">Firstly,<br>
    </h1>
    <h1 class="h1after" style="top: 30%; left:5%;">HAPPYY ROSE DAY MY CUTIE PIEEEE</h1><br>

    <button class="sui drop-btn" id="btn1" style=" left: 10%;">Drop roses</button>
    <button class="sui drop-btn" id="btn2" style=" left: 40%;">Drop my msg hehe</button>
    <button class="sui drop-btn" id="btn3" style=" left: 70%;">Drop my fav flower</button>
    <img class="topto" src="img/rosered.png" alt="hi">
    <img class="lefto" src="img/yellow rose.png" alt="hi">
    <img class="righto" src="img/pinkrose.png" alt="hi">
  </div>`

    const itemLists = {
      btn1: ['<img class = "ohmyworks" src="img/boquet.png">'],
      btn2: ['<img class= "ohmyworks2" src="img/mail.png">'],
      btn3: ['<img class = "ohmyworks" src="img/fav.png">']
    };

    const messages = {
      btn1: 'Happy rose day my cutie',
      btn2: 'K xa hola',
      btn3: 'MY GORGEOUS PRINCESS'
    };



    // Function to create and drop an item
    function dropItem(buttonId) {



      let moved = false;
      // Get random item from the specific list
      const items = itemLists[buttonId];
      const randomItem = items[0];


      // Create item element
      const item = document.createElement('div');
      item.className = 'falling-item';
      item.innerHTML = randomItem;
      item.dataset.buttonId = buttonId;

      // Random horizontal position
      const randomX = Math.random() * (window.innerWidth - 100);
      item.style.left = randomX + 'px';

      document.body.appendChild(item);

      // Animate falling with slight rotation
      let pos = -150;
      let rotation = 0;
      const fallSpeed = 1 + Math.random() * 2; // Random speed

      const fallInterval = setInterval(() => {
        pos += fallSpeed;
        rotation += 0.5;
        item.style.top = pos + 'px';
        item.style.transform = `rotate(${rotation}deg)`;

        if (pos >= window.innerHeight) {
          clearInterval(fallInterval);
          item.remove();
        }
      }, 10);

      // Make draggable
      let isDragging = false;
      let offsetX, offsetY;

      item.addEventListener('mousedown', (e) => {
        moved = false;
        isDragging = true;
        clearInterval(fallInterval); // Stop falling when grabbed
        offsetX = e.clientX - item.offsetLeft;
        offsetY = e.clientY - item.offsetTop;
        item.style.transform = 'scale(1.2)';
      });

      document.addEventListener('mousemove', (e) => {
        moved = true;
        if (isDragging && item.parentElement) {
          item.style.left = (e.clientX - offsetX) + 'px';
          item.style.top = (e.clientY - offsetY) + 'px';
        }
      });

      document.addEventListener('mouseup', () => {
        if (isDragging) {
          isDragging = false;
          item.style.transform = 'scale(1)';
        }
      });

      // Make clickable
      item.addEventListener('click', (e) => {
        if (moved) return;
        if (!isDragging) {
          if (item.dataset.buttonId === "btn2") {

            spawnLetter();
            return;
          }

          const msg = messages[item.dataset.buttonId];

          // Create floating message
          const floatMsg = document.createElement('div');
          floatMsg.textContent = msg;
          floatMsg.style.cssText = `
            position: absolute;
            left: ${e.clientX}px;
            top: ${e.clientY}px;
            background: rgba(255, 255, 255, 0.95);
            padding: 10px 20px;
            border-radius: 8px;
            font-weight: bold;
            color: #333;
            pointer-events: none;
            z-index: 9999;
            box-shadow: 0 4px 8px rgba(0,0,0,0.2);
          `;
          document.body.appendChild(floatMsg);

          // Animate message up and fade out
          let msgY = e.clientY;
          let opacity = 1;
          const msgInterval = setInterval(() => {
            msgY -= 2;
            opacity -= 0.02;
            floatMsg.style.top = msgY + 'px';
            floatMsg.style.opacity = opacity;

            if (opacity <= 0) {
              clearInterval(msgInterval);
              floatMsg.remove();
            }
          }, 20);
        }
      });
    }

    // Add click listeners to all three buttons
    document.getElementById('btn1').addEventListener('click', () => dropItem('btn1'));
    document.getElementById('btn2').addEventListener('click', () => dropItem('btn2'));
    document.getElementById('btn3').addEventListener('click', () => dropItem('btn3'));

  }
    , 3500)

}

setTimeout(() => {
  container.innerHTML = `<h1 class="h1after">Would you be my valentine?</h1>
        <div class="button-container">
            <button id="yesBtn">Yes</button>
            <button id="noBtn">No</button>
        </div>
        <p class="message" id="message"></p>
        <div class="noimg">
      <img class="imgo" alt="hi" src="img/1st.png">
    </div>`;
  initializeButton();
}, 11000);

function initializeButton() {
  const yesBtn = document.getElementById('yesBtn');
  const noBtn = document.getElementById('noBtn');
  const message = document.getElementById('message');
  const iogo = document.querySelector("imgo");
  let noClickCount = 0;
  let currentSize = 1;

  yesBtn.addEventListener('click', function () {
    message.textContent = 'Hehe okiii';
    message.style.display = 'block';
    noBtn.style.display = 'none';
    yesBtn.style.display = 'none'
    aftero();
  });

  noBtn.addEventListener('click', function () {
    noClickCount++;



    message.style.display = 'block';
    message.textContent = answers_no[Math.floor(Math.random() * 10)];
    // Shrink the button by 15% each time
    currentSize *= 0.85;
    noBtn.style.transform = `scale(${currentSize})`;

    // Check if button is too small to see (less than 1% of original size)
    if (currentSize < 0.1) {
      noBtn.style.display = 'none';
      message.textContent = 'La la feri try garum';
      message.style.display = 'block';
      return;
    }

    // Get viewport dimensions
    const maxX = window.innerWidth - noBtn.offsetWidth;
    const maxY = window.innerHeight - noBtn.offsetHeight;

    // Generate random position
    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    // Position the button absolutely
    noBtn.style.position = 'fixed';
    noBtn.style.left = randomX + 'px';
    noBtn.style.top = randomY + 'px';
  });



}

































































var canvas = document.getElementById("starfield")
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
var canvas = document.getElementById("starfield"),
  context = canvas.getContext("2d"),
  stars = 500,
  colorrange = [0, 60, 240];
for (var i = 0; i < stars; i++) {
  var x = Math.random() * canvas.offsetWidth;
  y = Math.random() * canvas.offsetHeight,
    radius = Math.random() * 1.2,
    hue = colorrange[getRandom(0, colorrange.length - 1)],
    sat = getRandom(50, 100);
  context.beginPath();
  context.arc(x, y, radius, 0, 360);
  context.fillStyle = "hsl(" + hue + ", " + sat + "%, 88%)";
  context.fill();
}



var baseFrame = context.getImageData(0, 0, window.innerWidth, window.innerHeight);


context.putImageData(baseFrame, 0, 0);



// Source - https://stackoverflow.com/a/78945008
// Posted by andre santos, modified by community. See post 'Timeline' for change history
// Retrieved 2026-02-06, License - CC BY-SA 4.0

(function ($) {

  var musicPlaying = false;

  const audioElem = document.getElementById("musicplayer");

  async function playAudio() {

    if (musicPlaying) return;

    let startPlayPromise = audioElem.play();

    if (startPlayPromise !== undefined) {
      await startPlayPromise
        .catch((error) => {

          musicPlaying = false;

          toggleModal();
        });
    }
    else {
      musicPlaying = false;

      toggleModal();
    }

  }

  function stopAudio() {
    if (musicPlaying) {
      musicPlaying = false;

      audioElem.pause()
    }
  }

  audioElem.addEventListener("play", (event) => {

    musicPlaying = true;

  });

  audioElem.addEventListener("canplaythrough", (event) => {

    if (!musicPlaying) {
      toggleModal();
    }

  });

  /*
  
  Modal
  
  */
  function toggleModal() {
    $('#modal1').modal('toggle');
  }

  $('#close-modal').click(function () {
    stopAudio();

    toggleModal();
  });

  $("#nav-music-start").on("click", function (event) {
    playAudio();

    toggleModal();
  });

})(jQuery);
