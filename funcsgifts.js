const back = document.getElementById("Back");
const bgmusic = document.querySelector(".bgMusic");
const giftItems = document.querySelectorAll(".itemgifts");

back.addEventListener("click", () => {
  window.location.href = "index.html";
});

// Gift navigation + sparkles
giftItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    const giftPage = item.dataset.gift;
    if (giftPage) window.location.href = `gifts/${giftPage}`
  });

  item.addEventListener("mouseenter", () => {
    createSparkles(item);
  });
});


// Music
document.body.addEventListener("click", () => {
  bgmusic.volume = 0.1;
  bgmusic.play().catch(e => console.log("Audio autoplay prevented"));
});

// Petals (your original improved)
function createPetal() {
  const petal = document.createElement('div');
  petal.className = 'petal';
  petal.style.left = Math.random() * 100 + 'vw';
  const duration = 10 + Math.random() * 6;
  petal.style.animationDuration = duration + 's';
  petal.style.animationDelay = Math.random() * 2 + 's';
  const size = 10 + Math.random() * 8;
  petal.style.width = size + 'px';
  petal.style.height = size + 'px';
  const colors = ['#f7b3b3', '#ffc8dd', '#dfbdc9', '#ffd6e8', '#ebb0ce', '#ff9ade'];
  petal.style.background = colors[Math.floor(Math.random() * colors.length)];
  document.body.appendChild(petal);
  setTimeout(() => petal.remove(), (duration + 3) * 1000);
}

// Staggered petal start
for (let i = 0; i < 12; i++) {
  setTimeout(() => createPetal(), i * 180);
}
setInterval(createPetal, 700);


(function ($) {

  var musicPlaying = false;

  const audioElem = document.getElementById("musicplayer");
  audioElem.volume = 0.2;
  async function playAudio() {

    if (musicPlaying) return;
    audioElem.volume = 0.2;
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

