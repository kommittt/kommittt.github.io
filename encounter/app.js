// Only executes while your tile is active
// Only ES5 is supported, limited subset of APIs - DOM, localStorage, XMLHttpRequest, Canvas.
console.log("Hello world!");



var isDust = false;
var selectSound = new Audio('confirm.mp3');
selectSound.volume = 0.8;

// im putting too much effort on this but idc this shit is cool 

function diebru() {
    selectSound.play();

    var kommitimg = document.getElementById("kommitimg");
    var textbox = document.getElementById("textbox");
    var music = document.getElementById("anticipation");

    if (isDust) {
        textbox.innerHTML = `
            <ul>
                <li style="color: #ff0000;">Worthless.</li>
            </ul>`;
        setTimeout(function() {
            textbox.innerHTML = `
                <ul>
                    <li>The wind howled, carrying a faint, almost<br>imperceptible scent of metal.</li>
                </ul>`;
        }, 2000);
        
        return;
    }
    isDust = true;
    

    var fightSound = new Audio('attack.mp3');
    fightSound.volume = 0.8;
    fightSound.play();
    
    if (kommitimg) {
        kommitimg.style.opacity = "0.8";
        kommitimg.style.filter = "grayscale(100%)";
    }
    
    if (textbox) {
        textbox.innerHTML = `
        <ul>
            <li>Fighting...</li>
        </ul>`;
    }

    setTimeout(function() {
        var dustSound = new Audio('death.mp3');
        dustSound.volume = 0.6;
        dustSound.play();

        kommitimg.style.opacity = "0";

        if (music) {
            music.pause();
            music.currentTime = 0;
        }
        if (textbox) {
        textbox.innerHTML = `
        <ul>
            <li>YOU WON!</li>
            <li>You earned 50 XP and 25 gold.</li>
        </ul>`;
        }
    }, 2000);
}

function patpat() {
    selectSound.play();

    var textbox = document.getElementById("textbox");
    if (!textbox) return;

    if (isDust) {
        textbox.innerHTML = `
            <ul>
                <li style="font-size: small; color: #888888;">But nobody came.</li>
            </ul>`;
        
        setTimeout(function() {
            textbox.innerHTML = `
                <ul>
                    <li>You kick the dust left behind.</li>
                    <li>It scatters in the wind.</li>
                </ul>`;
        }, 2000);
        return;
    }

    textbox.innerHTML = `
        <ul>
            <li>You pet the enemy.</li>
            <li>He likes it!</li>
        </ul>`;

    const asdfasa = document.getElementById('squish');
    const audio = document.getElementById('squeak');

    var squeakSound = new Audio('squeak.mp3');
    squeakSound.volume = 0.5;
    squeakSound.play();

    asdfasa.classList.remove('patpat-active');
    void asdfasa.offsetWidth;
    asdfasa.classList.add('patpat-active');

    setTimeout(function() {
        if (textbox) {
        textbox.innerHTML = `
            <ul>
                <li> kommit is looking for a way out of here.</li>
            </ul>`;
        }}, 2000);
}

function item() {
    selectSound.play();

    var textbox = document.getElementById("textbox");
    if (!textbox) return;

    textbox.innerHTML = `
    <ul>
        <li>You ate the Popato Chisps.</li>
    </ul>`;
    setTimeout(function() {
        var healSound = new Audio('heal.mp3');
        healSound.volume = 0.8;
        healSound.play();

        if (isDust) {
            textbox.innerHTML = `
            <ul>
                <li>You ate the Popato Chisps.</li>
                <li>...You recovered 13 HP.</li>
            </ul>`;
        } else {
            textbox.innerHTML = `
            <ul>
                <li>You ate the Popato Chisps.</li>
                <li>You recovered 13 HP!</li>
            </ul>`;   
        }
    }, 500);

    if (isDust) {
        setTimeout(function() {
            if (textbox) {
                textbox.innerHTML = `
                <ul>
                    <li>You glance at his diamond pickaxe...</li>
                    <li>Your lone reflection stares back at you.</li>
                </ul>`;
            }}, 2000);
        return;
    }

    setTimeout(function() {
        if (!isDust) {
            textbox.innerHTML = `
            <ul>
                <li>Smells like copper and gears.</li>
            </ul>`;
        }
    }, 2000);
}

function spare(event) {
    selectSound.play();
    
    var footstepSound = new Audio('leaving.mp3');
    var textbox = document.getElementById("textbox");
    if (!textbox) return;

    textbox.innerHTML = `
    <ul>
        <li style="color: #ffff00;">Spare</li>
        <li>Flee</li>
    </ul>`;

    if (!isDust) {
        setTimeout(function() {
            textbox.innerHTML = `
                <ul>
                    <li>kommit is sparing you.</li>
                </ul>`;
        }, 2000);
    }

    if (isDust) {
        setTimeout(function() {
            footstepSound.play();

            var main = document.querySelector('html');
            if (main) {
                main.classList.add('fadeout');
            }}, 3000);

        if (event) event.preventDefault();

        var textbox = document.getElementById("textbox");
        if (textbox) {
            textbox.innerHTML = `
            <ul>
                <li>...Nothing left to do here.</li>
                <li>You begin to slowly walk away.</li>
            </ul>`;
        }
        return false;
    }
    return true;
}