const audio = document.getElementById("audio");
const playpause = document.querySelector('.playpause');

playpause.addEventListener('click', () => {
    playpause.classList.toggle('paused');
    if (audio.paused) {audio.play();} else {audio.pause();}
});


const scrollingImage = document.querySelector(".scrolling-image");

let scrollX = 0;
let scrollY = 0;
let speed = 0.15;

function scroll() {
  scrollX -= speed;
  scrollY += speed;

  scrollingImage.style.backgroundPosition = `${scrollX}px ${scrollY}px`;

  scrollX = scrollX % Math.floor(scrollingImage.clientWidth/4);
  scrollY = scrollY % Math.floor(scrollingImage.clientWidth/4);
  
  requestAnimationFrame(scroll);
}

scroll();