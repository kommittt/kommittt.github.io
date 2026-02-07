function ranSong() {
    var songs = [
        `<iframe style="border-radius:2px" src="https://open.spotify.com/embed/track/4B1IAbu6zWWZS1K0SvwJh1" width="70%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
        `<iframe style="border-radius:2px" src="https://open.spotify.com/embed/track/3R8U6Yjmo1tJxKcNyiiOWH" width="70%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
        `<iframe style="border-radius:2px" src="https://open.spotify.com/embed/track/0pwwlYd08AHcDWHyAe9FW0" width="70%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
        `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/1Ko8sSzAzNILeNI2SfdQE4" width="70%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
        `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/7eMEN37TY5YcYvSel1Ya4k" width="70%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
        `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/6v8fX5yXd15H3xSyvVvJ5e" width="70%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
        `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/2qEdhXi9KANaoPji89PsNP" width="70%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
        `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/5FEEojMjRlR6kBcn0IhCxf" width="70%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
        `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/7JGkl7TSwWcVlwtDuoHDLj" width="70%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
        `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/3tYkJIIG6zWg8mRL9swbJH" width="70%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
        `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/4KGGeE7RJsgLNZmnxGFlOj" width="70%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
        `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/3zSBsvj6MWavRKfPE51395" width="70%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
        `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/0z1o5L7HJx562xZSATcIpY" width="70%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
        `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/4QmUNyVcpvJrNkAhlaeXMx" width="70%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
        `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/3WBRfkOozHEsG0hbrBzwlm" width="70%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
        `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/60r7bteIELWhpNifE9FkRM" width="70%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
        `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/5qzGqhLV6fHbXpSdqqal6w" width="70%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
        `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/2I3SfDBpiBZjAqYm547JF3" width="70%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
        `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/7C4SULfBFfwFht9C9IJEy0" width="70%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
        `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/6xySRMWyGJU9YnMWFVJTVR" width="70%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
        `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/3RbXsEvzhiRPB84veA6ZNS" width="70%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
        `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/3q2U4RiY38JMehY2uPXLAJ" width="70%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
        `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/1HEfXDxLCuIAOvNkYMK9pC" width="70%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
        `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/4wCOELRxn0Cf8bSawHyqF1" width="70%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
        `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/7MM64fwSwOPTJRcjnHIKeG" width="70%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
        `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/6e506KvflNlRCANInfn6hW" width="70%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
        `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/7nAWp00pWa2afVrutHXmIG" width="70%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
        `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/25iCmqjIUm39rp6NXZshGQ" width="70%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
        `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/1PSKMHBHkR0nbxMWNauF9r" width="70%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
        `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/1iSM6H04gmnUKe6bYXGvbX" width="70%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
        `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/4MJ8lGPRg2s1MIQ8ZGGH9M" width="70%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
        `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/4B59CsEpwMFAOQXu7snoJF" width="70%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
        `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/1HEfXDxLCuIAOvNkYMK9pC" width="70%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
        `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/3y2Q1f0WWVxKkvRRJdbAAx" width="70%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
        `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/2I3SfDBpiBZjAqYm547JF3" width="70%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
        `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/3h4udV3uJIxLwYTerVRf7z" width="70%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,

    ];
    // `<iframe style="border-radius:12px" src="SPOTIFYSHARESONGLINKPASTEITHERE" width="70%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
    // `song`,

    // list so far so i can keep track:
    // eld unknown, battle hym of the soul, making day, beneath the mask, silly billy, lagtrain, rolling girl, art of war,
    // ferris wheel, deeper, falling behind, exit music, 19, plane to catch, everything goes on, making day,
    // i heard this song in a dream, blurry memory, 2. something, RS5, windowkiller, nostalgia lobby, menu, where did you fall,
    // snarky, pebie, tears in the rain, innocence, moogcity, windowbreaker, precipice, shop nico
    //
    //
    //


    var rSongs = Math.floor(Math.random() * songs.length);
        
    document.getElementById("randomsong").innerHTML = songs[rSongs];

    const clickSplash = document.getElementById("randomsong");

    clickSplash.addEventListener("click", function() {
        var rSongs = Math.floor(Math.random() * songs.length);
        document.getElementById("randomsong").innerHTML = songs[rSongs];
    });
    // yes i know its a copy paste, no i will not write original code


    // help
    document.addEventListener('DOMContentLoaded', function() {
        songNumba();
    });

    function songNumba() {
        const countElement = document.getElementById('icantcount');
        countElement.textContent = songs.length;

        const today = new Date();
        const dateString = today.toLocaleDateString('en-GB');
        document.getElementById('update').textContent = dateString;
    }


}

ranSong();
// yes i know its a copy paste, no i will not write original code (and yes, i copied it again)