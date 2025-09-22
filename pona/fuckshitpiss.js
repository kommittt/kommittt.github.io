// hi

// google sheets link to be used for later
const sheetLink = 'https://opensheet.elk.sh/1WV2Vb9Qy7BXLrzxspbCfBCwo9vZmoG-13MEbNoKRhbw/Sheet1'

// Link to the JSON object containing words
const linkuLink = 'https://api.linku.la/v1/words?lang=en'

// Link to my local copy of the JSON
const localLink = './definitions-backup.json'

// search button stuff
const searchInput = document.getElementById('search-input');

const toggleView = document.getElementById('viewmode');

// this lowkey reminds me of python..
var tokipona = {};
var currentViewStyle = 'card';

// is the current data loaded from the linku API?
var didLoadLinku = false;

// is the current data loaded from the saved backup?
var didLoadBackup = false;

// this gets the searchInput 
function startDigginInYoButtTwin() {
    const sanitizeSearch = searchInput.value.trim().toLowerCase();
    const removePunc = sanitizeSearch.replace(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g, '');
    const noSpaces = removePunc.split(' ');
    const finalWords = noSpaces.filter(word => word.length > 0);
    
    if (finalWords.length > 0) {
        document.getElementById('results-container').innerHTML = ' ';

        finalWords.forEach(word => {
            if (tokipona[word] === undefined) {
                document.getElementById('results-container').appendChild(makeUnknownCard(word));
            } else {
                document.getElementById('results-container').appendChild(makeWordCard(tokipona[word]));
            }
        });

        if (currentViewStyle === 'card') {
            document.getElementById('body').classList = ['card-mode'];
        } else {
            document.getElementById('body').classList = ['list-mode'];
            document.body.querySelectorAll('details')
            .forEach((e) => {(e.hasAttribute('open')) ?
                e.removeAttribute('open') : e.setAttribute('open',true);
                console.log(e.hasAttribute('open'))
            })
        }
    } else {
        document.getElementById('results-container').innerHTML = `
        <div class="results">
            o pana e toki sina tawa poki sewi...
        </div>`;
    }
}

function makeUnknownCard(word) {
    const newCard = document.createElement('div');
    newCard.className = 'word-card';
    newCard.innerHTML = `
        <div class="word-header">
            <span class="wordtp"> <span class="sitelen">seme seme</span> ${word}</span>
        </div>
        <span class="definition">unknown word, maybe proper name or experimental</span>`;

    return newCard;
}

function makeWordCard(item) {
    const newCard = document.createElement('div');
    console.log(item);
    newCard.className = 'word-card';

    var ku_data = "";
    for (const [key, value] of Object.entries(item.ku_data || {}).sort((a,b) => b[1] - a[1])) {
        ku_data += `<span style="margin-right: 0.5rem">${key}<sup>${value}</sup></span> `;
    }

    if (ku_data === "") {
        ku_data = "no ku data available!"
    } else {
        ku_data = `<details id="expand">
            <summary>ku data: ${Object.keys(item.ku_data).length} definitions</summary>
            ${ku_data}
        </details>`
    }

    newCard.innerHTML = `
        <div class="word-header">
            <span class="wordtp"> <span class="sitelen">${item.word}</span> ${item.word}</span>
            <span class="frequency-${item.usage_category}">${item.usage_category}</span>
        </div>
        <span class="definition">${item.translations.en.definition || 'definition unknown'}</span>
        <span class="extra">
            ${ku_data}
        </span>`;

    return newCard;
}

toggleView.addEventListener('click', viewmodeToggle);

function viewmodeToggle() {
    if (currentViewStyle === 'card') {
        toggleView.innerHTML = 'list view'; 
        currentViewStyle = 'list';
    } else {
        toggleView.innerHTML = 'card view';
        currentViewStyle = 'card';
    }

    startDigginInYoButtTwin();
}



// search button thing input yeah keypress whatever the FUCK
searchInput.addEventListener('input', function(event) {
    startDigginInYoButtTwin();
});


// loads dictionary from the linku.la source
async function load_linku() {
    try {
        const response = await fetch(linkuLink);
        tokipona = await response.json();
        didLoadLinku = true;
        didLoadBackup = false;
        $('#viewing-backup').hide();
    }
    catch (e) {
        if (didLoadBackup) {
            // no big deal, just log the error
            console.error("error loading words from Linku", e);
        } else {
            // backup load hasn't succeeded yet either, so alert the user
            alert("error loading words, pls refresh :( -->" + e)
        }
    }

    startDigginInYoButtTwin();
}

// loads dictionary from local backup
async function load_backup() {
    try {
        const backup_tokipona = await import(localLink, { with: { type: "json" } });;
        if (didLoadLinku) {
            // already have authoritative source, ignore backup
        } else {
            tokipona = backup_tokipona.default;
            didLoadBackup = true;
            $('#viewing-backup').show();
        }
    }
    catch (e) {
        if (didLoadLinku) {
            // no big deal, just log the error
            console.error("error loading words from backup", e);
        } else {
            // linku load hasn't succeeded yet either, so alert the user
            alert("error loading words, pls refresh :( -->" + e)
        }
    }

    startDigginInYoButtTwin();
}

// today i learned async "waits" so thats cool
async function helpp() {
    $('#loading').show();
    
    try {
        await Promise.all([load_linku(), load_backup()]);
    }
    catch (e) {
        alert("error loading words, pls refresh :( -->" + e)
        console.error(e)
    }
    finally {
        $('#loading').hide()
    }
}
helpp();

