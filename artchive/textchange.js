const toggleImage = document.getElementById('textchangescript');
const thiscatsnameis = document.getElementById('whatthesigma');

const wgar = `you found a little secret!
                unfortunately, i havent thought about what i could
                put here just yet
                
                maybe a secret site! maybe just... more yapping
                
                most likely more yapping.
                
                probably will be a thank you letter and a 
                general credits section!`;

const lookhimupongoogle = wgar.replace(/\n/g, '<br>');


toggleImage.addEventListener('click', function() {

    if (thiscatsnameis.innerHTML === lookhimupongoogle) {
    }
    else {
        thiscatsnameis.innerHTML = lookhimupongoogle;
                    // gay po
    }

    // okay i remember i was trying to do a double toggle but fucking hell its
    // hard as shit so i just cut out the parts of it and i dont give a
    // single shit that the code is asscheeks because i am tired
    // future kommit will handle this
});


// im going to jump off the window (in minecraft)

