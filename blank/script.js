let audio = null; // something about it being global??? why is it null tho

function playSound(src) {

  if (!audio || audio.src !== location.href + src) {
    // !audio = if theres no audio
    // something about browser stuff

    if (audio) {
      audio.pause(); // stop already playing songs or something
    }

    audio = new Audio(src); // makes new audio instance
    audio.volume = 0.3; // self explanatory
  }

  if (!audio.paused) { // if audio ISNT paused/already playing, 
    audio.currentTime = 0; // set time back to 0
  }

  audio.play(); // if all those conditions arent met then play (most likely first instance)
}