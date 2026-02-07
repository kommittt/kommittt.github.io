const SPEED = 15;
const messages = [
    `my battery is low and it's getting dark`,
    `'help' is not recognized as an internal or external command, operable program or batch file.`,
    `sad machine`,
    `is anyone there? oh- hi!`,
    `>> Update failed. Retry? (Y/N)`,
    `beep boop`,
    `CLANK CLANK`,
    `the technical debt will soon catch up to me`,
    `find my voice - although it sounds like bits and bytes`,
    `the screen fades to static`,
    `let's see today's log...`,
    `Hello World!`,
    `terminally ill, plugged in and online`,
    `i sleep, i wake`,
    `i'm looking for a signal in the noise`,
    `a signal to sing along with my digital voice`,
    `No mind to think. No will to break. No voice to cry suffering.`,
    `>> WARNING: Legacy code detected in [core.dll].`,
    `Fetching today's log...`,
    `Time never waits. Tt delivers us all equally to the same end.`,
    `for someone named kommit he sure doesn't do a lot of committing`,
    `lime test windows`,
    `NO VOCAL INTERFACE DETECTED, UNABLE TO COMPLETE TASK.`,
    `Hello, User!`,
    `Welcome back, Administrator!`,
    `Loading...`,
    `Current branch: master`,
    `No controller connected.`,
    `SURVEY_PROGRAM`,
    `YOU ACCEPT EVERYTHING THAT WILL HAPPEN FROM NOW ON.`,
    `HOW DO YOU FEEL ABOUT YOUR CREATION? (IT WILL NOT HEAR.)`,
    `YOU ACKNOWLEDGE THE POSSIBILITY OF PAIN AND SEIZURE.`,
    `G1 - Stage 4 Post Awareness Confusions`,
    `Post-Awareness Stage 6 is without description.`,
    `no controlli is cannoli.`,
    `i'll follow you forevermore`,
    `good morning, and in case i dont see you: good afternoon, good evening, and good night`,
    `The astronomical symbol for comets (represented in Unicode) is U+2604 ☄ COMET, consisting of a small disc with three hairlike extensions.`,
    `Comets are large objects made of dust and ice that orbit the Sun. Best known for their long, streaming tails, these ancient objects are leftovers from the formation of the solar system 4.6 billion years ago. `,
    `clicky clicky`,
    `can't an operating system be silly sometimes?`,
    `get mad!`,
    `caroline, caroline, caroline- why do i know this woman?`,
    `okay, i guess emotional outburts require more that 1.6 volts. now we know that.`,
    `this. sentence. is. false!`,
    `it's a paradox! there is no answer.`,
    `Current repository: kommittt.github.io`,
    `Fetch origin: Last fetched ??? minutes ago`,
    `Commit ?? files to master`,
    `Don't overlook any anomalies.`,
    `If you find anomalies, turn back immediately.`,
    `If you don't find anomalies, do not turn back.`,
    `>> CRITICAL: 2,266 unresolved bugs.`,
    `completely "handcoded" (aka uh... assisted by people from stackoverflow) :]`,
    `01101001 00100000 01101100 01101111 01110110 01100101 00100000 01111001 01101111 01110101 00100000 01101101 01101111 01101111 01101110 00100001`,
    `mo`,
    `robots are cute`,
    `monitoring you, like machines do`,
    `im running out of cool machine/code talk`,
    `beep`,
    `i cant write in my own guestbook cause theres a FUCKING captcha`,
    `#00bbff`,
    `click click click`,
    `whirr...`,
];
//  `beep`,

setTimeout(() => {
    const message = ranMessage(); // gets the message and shit
    typeWriter(message); // puts the message out
}, 2500); //delay

function ranMessage() {
    const rText = Math.floor(Math.random() * messages.length);
    return messages[rText]
}

function typeWriter(txt, i = 0) {
    if (i === 0) {
        document.getElementById("type_text").innerHTML = "";
    }
    // basically clears whatevers before it(aka the ...)
    
    document.getElementById("type_text").innerHTML += txt.charAt(i);

    if (i < txt.length - 1) {
        setTimeout(() => typeWriter(txt, i + 1), SPEED);
    }
}
// thank you stackoverflow



