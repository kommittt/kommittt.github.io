function avoicefromthedigitalvoid() {
    var aMessageLeft = [
        `it's best you forget about me`,
        `everyone's getting better and i'm stuck in standby`,
        `the desire to cease existing`,
        `no room for the forgettable`,
        `my dreams only live in sleep`,
        `all i am is replaceable`,
        `bound to fail`,
        `the urges will win one day`,
        `it's only a matter of time`,
        `a lost cause`,
        `don't look for me`,
        `everything goes on`,
        `"but if i was gone tomorrow, won't the waves crash on?"`,
        `undeserving`,
        `a bridge to get worse`,
        `would they mourn my loss?`,
        `i can't help anyone`,
        `they only feel bad for me`,
        `i ruin everything`,
        `can't do anything right`,
        `i'm not a good person`,
        `all fake words`,
        `they deserve better than someone like me`,
        `it means nothing`,
        `i don't matter to you
        <br>i don't matter to anyone`,
        `they're going to forget about me once im gone`,
        `i hope i don't wake up tomorrow`,
        `"i was there enough"`,
        `everything but my mind is silent`,
        `unreachable`,
        `i'm only wasting my life`,
        `i don't think i'd be alive in a few years`,
        `it'll just get worse`,
        `not worth anyone's time`,
        `they won't notice for a couple of days`,
        `wishing something bad would happen to me`,
        `i am such a coward`,
        `im bringing them down`,
        `this is meaningless`,
        `i shouldve died three years ago`,
        `piss poor attempts`,
        `i'm not capable to continue living`,
        `if only i wasn't such a coward`,
        `nothing of value will be lost`,
        `a statistic`,
        `i wish i was good enough`,
        `i can't even do anything to help you`,
        `i wish i was as good as you in everything`,
        `why can't i be useful to anyone`,
        `if only i could give this life to someone more deserving of it`,
        `no one needs me`,
        `it takes one bad thought to spiral down for a whole day or more`,
        `the things i do have no meaning to the world`,
        `ill be forgotten like everyone else`,
        `i wish i could just sleep forever`,
        `no one ever listens to the voice of reason.`,
        `i should hang up`,
        `"it'll pass?" yeah. once you're up you'll eventually fall back down, harder.`,
        `better to not have expectations. it only leads to disappointment`,
        `why bother anymore?`,
        `they hate me they hate me they hate me they hate me they hate me they hate me they hate me they hate me they hate me they hate me `,
        `statistically more likely to do it`,
        `self sabotaging`,
        `ill be gone soon`,
        `life goes on, with or without me`,
        `when will i ever feel like myself`,
        `i will never be a real man `,
        `we get back up only to fall down harder`,
        `who cares if one more light goes out, in a sky of a million stars`,
        `please forget me`,
        `a life undeserving`,
        `ill always disappoint`,
        `i dont deserve anything`,
        `sorry for being a failure`,
    ];
    //  `message`,

    const aTelephoneRings = document.getElementById("call");

    if (Math.random() < 0.25) {
        var theVoice = Math.floor(Math.random() * aMessageLeft.length);
        document.getElementById("call").innerHTML = aMessageLeft[theVoice];
    }

    aTelephoneRings.addEventListener("click", function() {
        var theVoice = Math.floor(Math.random()  * aMessageLeft.length);
        document.getElementById("call").innerHTML = aMessageLeft[theVoice];
    });
}

avoicefromthedigitalvoid();