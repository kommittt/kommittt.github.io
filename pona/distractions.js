const startupAudio = document.getElementById("startup");
const pspToggle = document.getElementById("fx-toggle");
const body = document.getElementById("body");
const input = document.getElementById("search-input");

let nostalgiaOn = true;

pspToggle.addEventListener("click", (e) => {
    e.preventDefault();

    nostalgiaOn = !nostalgiaOn;

    if (!nostalgiaOn) {
        if (startupAudio) {
            startupAudio.pause();
            startupAudio.currentTime = 0;
        }

        document.querySelectorAll(".nostalgia").forEach(el => {
            el.style.display = "none";
            el.style.animationPlayState = "paused";
        });

        input.onkeydown = null;

        pspToggle.textContent = "< enable distractions >";

        } else {
        if (startupAudio) {
            startupAudio.play();
        }

        document.querySelectorAll(".nostalgia").forEach(el => {
            el.style.display = "";
            el.style.animationPlayState = "running";
        });

        input.onkeydown = typing;

        pspToggle.textContent = "[ disable distractions ]";
    }
});
