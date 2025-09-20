// hi

// google sheets link to be used for later
const sheetLink = 'https://opensheet.elk.sh/1WV2Vb9Qy7BXLrzxspbCfBCwo9vZmoG-13MEbNoKRhbw/Sheet1'
// search button stuff
const searchInput = document.getElementById('search-input');

const toggleView = document.getElementById('viewmode');

// this lowkey reminds me of python..
var tokipona = [];
var viewActive = false;


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
                    <span class="wordtp"> <span class="sitelen">${item.word}</span> ${item.word}</span>
                    <span class="frequency-${item.usage}">${item.usage}</span>
                </div>
                <span class="definition">${item.definition}</span>
                <span class="extra">
                    <details id="expand">
                        <summary>ku data:</summary>
                        ${item.extra || 'no ku data available!'}
                    </details>
                </span>`;
            
            document.getElementById('results-container').appendChild(wordCards);
        });

        if (viewActive) {
            $('.word-card').removeAttr('style').removeClass().css({
                'background': '',
                'padding': '',
                'margin-bottom': '',
                'border': '',
                'border-style': '',
                'border-width': '',
                'border-radius': ''
            });
            $('.wordtp').removeAttr('style').removeClass().css({
                'margin-bottom': '5px',
                'font-size': 'large',
                'font-weight': 'bold',
                'color': '#ffffff'
            });
            $('.sitelen').removeAttr('style').removeClass().css({
                'font-family': 'nishiki',
                'font-style': 'normal',
                'font-weight': 'normal',
                'font-size': 'large',
                'color': '#ffffff',
                'padding-right': '5px'
            });
            $('.extra').removeAttr('style').removeClass().css({
                'margin-top': '10px',
                'padding': '10px',
                'font-style': 'italic',
                'color': '#b0b0b0',
                'font-size': 'smaller'
            });

        } else {
            $('.word-card').removeAttr('style').removeClass().css({
                'background': '#19191c',
                'padding': '20px',
                'margin-bottom': '10px',
                'border': '#333339',
                'border-style': 'solid',
                'border-width': '2px',
                'border-radius': '10px',
                'font-size': ''
            });
            $('.wordtp').removeAttr('style').removeClass().css({
                'margin-bottom': '5px',
                'font-size': 'x-large',
                'font-weight': 'bold',
                'color': '#ffffff'
            });
            $('.sitelen').removeAttr('style').removeClass().css({
                'font-family': 'nishiki',
                'font-style': 'normal',
                'font-weight': 'normal',
                'font-size': 'xx-large',
                'color': '#ffffff',
                'padding-right': '5px'
            });
            $('.extra').removeAttr('style').removeClass().css({
                'margin-top': '10px',
                'padding': '10px',
                'font-style': 'italic',
                'color': '#b0b0b0',
                'font-size': 'small'
            });
            document.body.querySelectorAll('details')
            .forEach((e) => {(e.hasAttribute('open')) ?
                e.removeAttribute('open') : e.setAttribute('open',true);
                console.log(e.hasAttribute('open'))
            })
        }
    } else {
        document.getElementById('results-container').innerHTML = `
        <div class="results">
            no definition found for these words (obscure/sandbox words are not included) or text box is empty
        </div>`;
    }
}
toggleView.addEventListener('click', viewmodeToggle);

function viewmodeToggle() {
    if (viewActive === false) {
        toggleView.innerHTML = 'list view'; 
        viewActive = true;
    } else {
        toggleView.innerHTML = 'card view';
        viewActive = false;
    }

    startDigginInYoButtTwin();
}



// search button thing input yeah keypress whatever the FUCK
searchInput.addEventListener('input', function(event) {
    startDigginInYoButtTwin();
});


// today i learned async "waits" so thats cool
async function helpp() {
    const response = await fetch(`${sheetLink}`);
    tokipona = await response.json();
        
    resultsContainer.innerHTML = '<div class="results"> </div>';
}
helpp();

