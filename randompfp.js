function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; // The maximum is exclusive and the minimum is inclusive
  }
  
  document.write('<img src="images/randompfps/' + getRandomInt(1, 18) + '.png">')