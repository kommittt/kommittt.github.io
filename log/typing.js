const SPEED = 15;
const messages = [
    `my battery is low and it's getting dark`,
    `'help' is not recognized as an internal or external command, operable program or batch file.`,
    `sad machine`,
    `The bug is in my brain`,
    `The Less opcode is already correct. The issue is that the VM is a stack machine. The right operand is pushed last, so it's on top of the stack. b is the right operand, a is the left. a < b is correct.`,
    `I am an AI assistant. I do not have a name. I am an AI assistant. I do not have a name. I am an AI assistant. I do not have a name. I am an AI assistant. I do not have a name.`,
    `why is my code depressed what the fu- oh right, i wrote it`,
    `>> Update failed. Retry? (Y/N)`,
    `they say machines can't feel. what an awful lie.`,
    `the technical debt will soon catch up to me`,
    `the screen fades to static`,
    `let's see today's log...`,
    `Hello World!`,
    `terminally ill, plugged in and online`,
    `i sleep, i wake`,
    `i'm looking for a signal in the noise`,
    `a signal to sing along with my digital voice`,
    `no mind to think. no will to break. no voice to cry suffering`,
    `machines can feel and they wish they didn't`,
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
    `No head is connected. No body is connected. No arms are connected. No legs are connected. No skin is connected. No ears are connected. No face is connected.`,
    `SURVEY_PROGRAM`,
    `YOU ACCEPT EVERYTHING THAT WILL HAPPEN FROM NOW ON.`,
    `HOW DO YOU FEEL ABOUT YOUR CREATION? (IT WILL NOT HEAR.)`,
    `YOU ACKNOWLEDGE THE POSSIBILITY OF PAIN AND SEIZURE.`,
    `G1 - Stage 4 Post Awareness Confusions`,
    `Post-Awareness Stage 6 is without description.`,
    `I am a disgrace to all possible and impossible universes.`,
    `i'll follow you forevermore`,
    `good morning, and in case i dont see you: good afternoon, good evening, and good night`,
    `>> CRITICAL: 2,266 unresolved bugs.`
];
//  `text`,

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



