function whatthefuck() {

    var songs = [   /* i dont think its in order but oh well */
        `4B1IAbu6zWWZS1K0SvwJh1`, /* eld unknown */
        `3R8U6Yjmo1tJxKcNyiiOWH`, /* battle hym of the soul */
        `0pwwlYd08AHcDWHyAe9FW0`, /* making day */
        `1Ko8sSzAzNILeNI2SfdQE4`, /* beneath the mask */
        `7eMEN37TY5YcYvSel1Ya4k`, /* silly billy */
        `6v8fX5yXd15H3xSyvVvJ5e`, /* lagtrain */
        `2qEdhXi9KANaoPji89PsNP`, /* rolling girl */
        `5FEEojMjRlR6kBcn0IhCxf`, /* art of war */
        `7JGkl7TSwWcVlwtDuoHDLj`, /* ferris wheel */
        `3tYkJIIG6zWg8mRL9swbJH`, /* deeper */
        `4KGGeE7RJsgLNZmnxGFlOj`, /* falling behind */
        `3zSBsvj6MWavRKfPE51395`, /* exit music */
        `0z1o5L7HJx562xZSATcIpY`, /* 19 */
        `4QmUNyVcpvJrNkAhlaeXMx`, /* plane to catch */
        `3WBRfkOozHEsG0hbrBzwlm`, /* everything goes on */
        `60r7bteIELWhpNifE9FkRM`, /* making day */
        `5qzGqhLV6fHbXpSdqqal6w`, /* i heard this song in a dream */
        `2I3SfDBpiBZjAqYm547JF3`, /* blurry memory */
        `7C4SULfBFfwFht9C9IJEy0`, /* meow */
        `6xySRMWyGJU9YnMWFVJTVR`, /* belle */
        `3RbXsEvzhiRPB84veA6ZNS`, /* why as soon as we get close... */
        `3q2U4RiY38JMehY2uPXLAJ`, /* 9,03 */
        `1HEfXDxLCuIAOvNkYMK9pC`, /* moogcity */
        `4wCOELRxn0Cf8bSawHyqF1`, /* RS5 */
        `7MM64fwSwOPTJRcjnHIKeG`, /* windowkiller */
        `6e506KvflNlRCANInfn6hW`, /* nostalgia lobby */
        `7nAWp00pWa2afVrutHXmIG`, /* menu */
        `25iCmqjIUm39rp6NXZshGQ`, /* where did you fall */
        `1PSKMHBHkR0nbxMWNauF9r`, /* snarky */
        `1iSM6H04gmnUKe6bYXGvbX`, /* pebie */
        `4MJ8lGPRg2s1MIQ8ZGGH9M`, /* tears in the rain */
        `4B59CsEpwMFAOQXu7snoJF`, /* innocence */
        `3y2Q1f0WWVxKkvRRJdbAAx`, /* windowbreaker */
        `2I3SfDBpiBZjAqYm547JF3`, /* precipice */
        `3h4udV3uJIxLwYTerVRf7z`, /* nicopatty shop */

    ];
    /* `tracknumberspotidyidthing` */

    const ranSongContainer = document.getElementById("randomsong");
    const songNumContainer = document.getElementById('icantcount');

    var rSongs = Math.floor(Math.random() * songs.length);
    const clickSplash = document.getElementById("randomsong");

    var fuckingHell = songs[rSongs];
        
    ranSongContainer.innerHTML = `<iframe sandbox="allow-scripts allow-same-origin allow-forms allow-popups" referrerpolicy="no-referrer" credentialless style="border-radius:12px" src="https://open.spotify.com/embed/track/${fuckingHell}" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`;
    songNumContainer.innerHTML = `i dont update this often, but there are currently ${songs.length} songs in here!`

    clickSplash.addEventListener("click", function() {
        var rSongs = Math.floor(Math.random() * songs.length);
        ranSongContainer.innerHTML = songs[rSongs];
    });
}
