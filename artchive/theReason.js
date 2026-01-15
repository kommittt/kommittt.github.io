function avoicefromthedigitalvoid() {
    var aMessageRecieved = [
        `Let's pretend a little longer`,
        `But for now, I'll just bring the sea to you`,
        `Then I felt you on my shoulder, and you weren't suffering anymore`,
        `I told you to forget me, but you stayed by my side`,
        `It can get better`,
        `Life has its ups and downs`,
        `There are people who care about you`,
        `Stay for them`,
        `There's still time to change`,
        `You're someone's reason they're happy`,
        `People care about you more than you think`,
        `You'll be forgiven`,
        `Everyone makes mistakes`,
        `It'll pass`,
        `It's only temporary`,
        `You yourself create the meaning for your life`,
        `They'll be sad`,
        `They're going to miss you`,
        `You've come this far. Hold on for a little longer.`,
        `Keep going`,
        `You bring comfort to other people`,
        `If a moment is all we are, then make it count`,
        `You've made a difference to someone`,
        `They'll notice`,
        `You don't have to be perfect`, 
    ];
    //  `message`,

    const aTelephoneRings = document.getElementById("answer");

    if (Math.random() < 0.20) {
        var theReason = Math.floor(Math.random() * aMessageRecieved.length);
        document.getElementById("answer").innerHTML = aMessageRecieved[theReason];
    }

    aTelephoneRings.addEventListener("click", function() {
        var theReason = Math.floor(Math.random()  * aMessageRecieved.length);
        document.getElementById("answer").innerHTML = aMessageRecieved[theReason];
    });
}

avoicefromthedigitalvoid();