// hi

// google sheets link to be used for later
const sheetLink = 'https://opensheet.elk.sh/1WV2Vb9Qy7BXLrzxspbCfBCwo9vZmoG-13MEbNoKRhbw/Sheet1'
// search button stuff
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');

// this lowkey reminds me of python..
var tokipona = [];


// this gets the searchInput 
function startDigginInYoButtTwin() {
    const sanitizeSearch = searchInput.value.trim().toLowerCase();
    const noSpaces = sanitizeSearch.split(' ');
    const finalWord = noSpaces;

    var results = [];

    finalWord.forEach(word => {
        // item will be used to determine the sheets thing
        // .word is the column name in the sheets
        const foundWords = tokipona.filter(item => item.word === word);
        
        if (foundWords.length > 0) {
            results.push(...foundWords);
        }
    });
    
    if (results.length > 0) {
        document.getElementById('results-container').innerHTML = ' ';
        results.forEach(item => {
            const wordCards = document.createElement('div');
            wordCards.className = 'word-card';
            wordCards.innerHTML = `
                <div class="word-header">
                    <span class="wordtp">${item.word}</span>
                    <span class="frequency">${item.usage}</span>
                </div>
                <span class="definition">${item.definition}</span>
                <span class="extra">
                    <details>
                        <summary>ku translations:</summary>
                        ${item.extra || 'nothing here!'}
                    </details>
                </span>`;
            document.getElementById('results-container').appendChild(wordCards);
        });}
    else {
        document.getElementById('results-container').innerHTML = '<div class="results">no definition found for these words or text box is empty</div>';
    }
};



// search button thing input yeah keypress whatever the FUCK
searchButton.addEventListener('click', startDigginInYoButtTwin);
searchInput.addEventListener('keypress', function(event) {
    if (event.code === 'Enter') {
        startDigginInYoButtTwin();
    }
    if (event.code === "Space") {
        startDigginInYoButtTwin();
    }
    if (event.code === "Backspace") {
        startDigginInYoButtTwin();
    } // idk if this backspace thing is even working :(
    if (event.code === "Escape") {
        searchInput.value ('');
    }
});



// today i learned async "waits" so thats cool
async function helpp() {
    const response = await fetch(`${sheetLink}`);
    tokipona = await response.json();
        
    resultsContainer.innerHTML = '<div class="results"> </div>';
}
helpp();

