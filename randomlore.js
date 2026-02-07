


function yowch() {
    var ranNumber = Math.floor(Math.random() * loreData.length);
    var pfpImage = loreData[ranNumber];

    const pfpContainer = document.getElementById('randompfp');
    
    if (pfpImage.image === 10) {
        pfpContainer.innerHTML = `<img class="pfp" src="randompfps/${pfpImage.image}.gif">`;
    }
    else if (pfpImage.image === 22) {
        pfpContainer.innerHTML = `<img class="pfp" src="randompfps/${pfpImage.image}.gif">`;
    }
    else if (pfpImage.image === 35) {
        pfpContainer.innerHTML = `<img class="pfp" src="randompfps/${pfpImage.image}.gif">`;
    }
    else if (pfpImage.image === 46) {
        pfpContainer.innerHTML = `<img class="pfp" src="randompfps/${pfpImage.image}.gif">`;
    }

    else {
        pfpContainer.innerHTML = `<img class="pfp" src="randompfps/${pfpImage.image}.png">`;
    }


    const loreContainer = document.getElementById('randomlore'); 

    var characterTitle = `<span class="theguy">${pfpImage.char}</span><br>`;

    var factNum = `<span class="numberthing">oc fun fact id: ${pfpImage.image}/${loreData.length}</span><br><br>`;

    if (pfpImage.char === ``) {
        loreContainer.innerHTML = pfpImage.yap;
    }
    else {
        loreContainer.innerHTML = characterTitle + factNum + pfpImage.yap;
    }
}

var loreData = [
        /* kommit */
    {image: 1, char: `kommit`, yap: `kommit's eyes can glow (and also change colour), as you can see here
                    <br> it usually happens when he's focused, experiencing heightened emotions, or just to show off!<br><br>
                    although not useful for him, he can turn his eyes into a flashlight, lighting up wherever he looks. convenient!`},
    {image: 2, char: `kommit`, yap: `he really, REALLY likes silly billy.`},
    {image: 3, char: `kommit`, yap: `he naturally emits electrical signals and can charge wireless devices around him
                                    <br> that's why his earphones never seem to run out of battery :o`},
    {image: 4, char: `kommit`, yap: `in case it wasn't obvious, he is not human :p`},
    {image: 5, char: `kommit`, yap: `unfortunately, being an android means you can be more susceptible to corruption...`},
    {image: 6, char: `kommit`, yap: `the elytra is his favourite piece of armour! he also loves having a mending shield with a custom banner`},
    {image: 7, char: `kommit`, yap: `he used to have a blue mouth in his older designs. now its normal!`},
    {image: 8, char: `kommit`, yap: `he loves flower crowns :)`},
    {image: 9, char: `kommit`, yap: `despite having perfect eyesight, he decided to wear glasses because "it looked cool"`},
    {image: 10, char: `kommit`, yap: `this guy is absolutely horrible at staying nonchalant </3`}, /* gif */
    {image: 11, char: `the trio`, yap: `it's them!! to ray's dismay, he slept in and missed the group picture`}, /* trio */

        /* ray */
    {image: 12, char: `ray`, yap: `do protogens have mouths? in ray's case, absolutely`},
    {image: 13, char: `ray`, yap: `it's every protogen's favourite treat - a RAMburger! too bad it's really expensive nowadays...`},
    {image: 14, char: `ray`, yap: `ray can change his ear display to show his status. he mostly uses it to indicate when he's resting`},
    {image: 15, char: `ray`, yap: `this guy is too shy for his own good and hesitates on every social encounter`},
    {image: 16, char: `ray`, yap: `we don't know if he's really that stupid or if its his processors lagging behind. probably both`},
    {image: 17, char: `ray`, yap: `ray grows a lot of fur in colder seasons and turns into a living plushie every six months
                                    <br>... and also an walking ad for vaccuums due to how much he sheds`},
    {image: 18, char: `ray`, yap: `he prefers not to show his nose on his visor! he says it makes him look cuter, but i think it just makes him look more stupid`},
    {image: 19, char: `ray`, yap: `in his old design, he had wing ear fins! now he changed it for a vent to help him when he overheats`},
    {image: 20, char: `ray`, yap: `his ear vent fin can rotate and it sometimes acts like a second pair of ears`},
    {image: 21, char: `ray`, yap: `he's not a full-on mechanical protogen, and has biological parts!`},
    {image: 22, char: `ray`, yap: `ray's limbs are detachable!`}, /* gif */
    {image: 23, char: `ray`, yap: `ray used to have a wifi icon as his symbol! it has now since changed into a comet`},

        /* regret */
    {image: 24, char: ``, yap: `I am regret incarnate.`},

        /* crt */
    {image: 25, char: `cr tv (crt)`, yap: `crt has a mouth and his other eye! he just prefers not to display it to conserve energy`},
    {image: 26, char: `cr tv (crt)`, yap: `years ago, crt used to be a show host and often wears a ribbon alongside a floating top hat!
                                            he has since retired and now lives casually`},
    {image: 27, char: `cr tv (crt)`, yap: `his favourite game is ultrakill and... powerwash simulator? duality of man<br> 
                                            i wonder if he enjoys cleaning all that mess... i bet he loves layer 7's secret level!`},
    {image: 28, char: `cr tv (crt)`, yap: `his favourite game is ultrakill and... powerwash simulator? duality of man<br> 
                                            i wonder if he enjoys cleaning all that mess... i bet he loves layer 7's secret level!`},
    {image: 29, char: `cr tv (crt)`, yap: `crt never had a "human" name! while his other friends (like mailbox being called matt)
                                            have a human name, he prefers being called crt!`},
    {image: 30, char: `cr tv (crt)`, yap: `despite being a television, he is pretty waterproof! as long as the water doesnt drip inside`},
    {image: 31, char: `cr tv (crt)`, yap: `crt actually has some ports behind him. he likes covering them with tape though`},
    {image: 32, char: `cr tv (crt)`, yap: `this guy can display anything on his screens! as long as you dont mind the pixels bleeding and some scanlines.`},
    {image: 33, char: `cr tv (crt)`, yap: `his voice is pretty distorted and bitcrushed, but he can still sing damn well`},
    {image: 34, char: `cr tv (crt)`, yap: `when crt was created, he used to have a tail that got removed shortly after. now its back and canon again
                                            <br> his tail can connect to any socket and he'll recieve a burst of energy`},
    {image: 35, char: `cr tv (crt)`, yap: `look at him go`}, /* gif */

        /* komi */
    {image: 36, char: `komi`, yap: `komi never had a wife, he just loves wearing shitty shirts`},
    {image: 37, char: `komi`, yap: `here you can see that komi's horns are pretty long.. thats cause they can be shortened down since they regrow!`},
    {image: 38, char: `komi`, yap: `his fur gets real messed up sometimes (and he loves it)`},
    {image: 39, char: `komi`, yap: `he's hopeless`},
    {image: 40, char: `komi`, yap: `his greed sickens me he does not need two apples`},
    {image: 41, char: `komi`, yap: `he likes wearing ribbons! makes him look fancier`},
    {image: 42, char: `komi`, yap: `komi likes keeping his horns short and not pointy so they dont poke anyone`},
    {image: 43, char: `komi`, yap: `don't worry about it he just gets cold easily`},
    {image: 44, char: `komi`, yap: `he likes biting on cardboard`},
    {image: 45, char: `komi`, yap: `his favourite album is nurture by porter robinson!`},
    {image: 46, char: `komi`, yap: `komi is jumpy. very jumpy. don't scare him unless you want to have a hole in your ceiling`}, /* gif */

]

/* 
{image: NUMBER, char: `kommit`, yap: `TEXTTEXTTEXTICANTSTOPYAPPING`},
*/

yowch()