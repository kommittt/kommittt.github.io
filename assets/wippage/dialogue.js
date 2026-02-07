function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const ranNum = getRandomInt(1, 22);
const path = '/assets/wippage/stuff/' + ranNum + '.gif';
const htmllol = '<img style="margin-top: 20px; max-width: 50%;" src="'

// this reminds me of python so much
// i need to like... remember that so i have an easier time coding

document.getElementById("raydialogue").innerHTML = htmllol + path + '">';