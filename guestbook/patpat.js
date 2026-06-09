const asdfasa = document.getElementById('squish');
const audio = document.getElementById('pat');

asdfasa.addEventListener('click', () => {
    const randomPat = Math.floor(Math.random() * 3) + 1
    audio.src = `pat${randomPat}.mp3`;

    audio.load();
    audio.currentTime = 0;
    audio.volume = 0.2;
    audio.play();

    asdfasa.classList.remove('patpat-active');
    void asdfasa.offsetWidth;
    asdfasa.classList.add('patpat-active');
});