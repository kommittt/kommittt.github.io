function copy(btn) {
    const src = btn.closest('.audiofile').dataset.src;
    navigator.clipboard.writeText(src);
    // thank you so much https://github.com/macedeveloper <3
    // no prob :3  ~macedev

//    const textContent = "successfully copied:\n" + event.target.textContent + "\nto clipboard!";
//    alert(textContent);
    // alert is bad but man it's the easiest way to do this
    // the old one is cooler but i scrapped it because it interfered with the copy thing

    btn.textContent = `copied!`;
    setTimeout(function() {
        if (btn) {
        btn.textContent = `copy`;
    }}, 1000);
}

let aud = null;
let butt = null; 

function playsample(button) {
    const container = button.closest('.audiofile').dataset.preview; // changed from dataset.src

    if (butt === button) {
        aud.pause();
        aud.currentTime = 0;
        button.textContent = '▶';
        aud = null;
        butt = null;
        return;
    }

    if (aud) {
        aud.pause();
        aud.currentTime = 0;
        butt.textContent = '▶';
    }

    aud = new Audio(container);
    butt = button;
    button.textContent = '⏹';
    aud.play();

    aud.addEventListener('ended', () => {
        button.textContent = '▶';
        aud = null;
        butt = null;
    });
}
