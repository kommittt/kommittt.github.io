let audio = null; 
function playSound(src) {

  if (!audio || audio.src !== location.href + src) {

    if (audio) {
      audio.pause();
    }

    audio = new Audio(src);
    audio.volume = 0.3;
  }

  if (!audio.paused) {
    audio.currentTime = 0;
  }

  audio.play();
}

// wanted to put a randomiser here like the splash texts, but im too lazy again...

