
const GOOGLE_FORM_ID = "1FAIpQLSftt57Lg0qjZLXmZ0BWtqrruRON3dliYnXkSg-LLNsmyDil1w";
const ENTRY_SAMPLETITLE = "entry.67144316";
const ENTRY_FILEGARDEN = "entry.2051242583";
const ENTRY_USERNAME = "entry.464818375";
const ENTRY_TAGS = "entry.1912312139";
const ENTRY_PREVIEW = "entry.1912312139";
const GOOGLE_SHEET_ID = "1pIOYV7i-djf7_yyaQMV_fitIpNcbKlkmBAcn-TYkd68";
const GOOGLE_SHEET_NAME = "user-submitted";

const GOOGLE_SHEET_URL = "https://docs.google.com/spreadsheets/d/" + GOOGLE_SHEET_ID + "/export?format=csv";
const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/" + GOOGLE_FORM_ID + "/formResponse";

/* html part */
function encodeHTML(str) {
    if (!str) return "";
    return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;');
}
function normalizeURL(url) {
    if (!url) return "";
    url = url.trim();
    if (!/^https?:\/\//i.test(url)) {
        url = "https://" + url;
    }
    return url;
}

const alloedhosters = ["https://file.garden/"];
/* raw.githubusercontent.com */

function fetchSampleEntries() {
    fetch(`https://opensheet.elk.sh/${GOOGLE_SHEET_ID}/${GOOGLE_SHEET_NAME}`)
    .then((res) => res.json())
    .then((data) => {
        let sortedInput = data.reverse();
        let sampleshtml = document.getElementById("sampleshtml");
        if (!sampleshtml) return;
        
        sampleshtml.innerHTML = "";

        for (var i = 0; i < sortedInput.length; i++) {
            let saniLink = encodeHTML(sortedInput[i].link || "no link provided").trim();
            if (!saniLink || !alloedhosters.some(prefix => saniLink.startsWith(prefix))) {
                console.warn(`skipping a row!! it has an invalid link. gotta check it out sometime`);
                continue;
            }

            let saniTitle = encodeHTML(sortedInput[i].title || "no title provided").replace(/[^\x00-\x7F]/g, "");
            let saniName = encodeHTML(sortedInput[i].credit || "anonymous").replace(/[^\x00-\x7F]/g, "");
            let saniTags = encodeHTML(sortedInput[i].tags || "user");
            let saniPreview = encodeHTML(sortedInput[i].preview || "");
            let multipleSamples = encodeHTML(sortedInput[i].multiple || "");
            

            if (saniPreview === "") {
                sampleshtml.innerHTML += `
                <div id="hi">
                    <div class="audiofile" data-src="${saniLink}" data-preview="${multipleSamples || saniLink}">
                        ${saniTitle}
                        <span class="submitter">submitted by: ${saniName}</span>
                        <span class="tags" title="tags">${saniTags}</span>

                        <div class="buttcontain">
                            <button onclick="playsample(this)" class="audioplay">▶</button>
                            <button class="audiocopy" onclick="copy(this)">copy</button>
                        </div>
                    </div>
                </div>`;
            }
            else {
                sampleshtml.innerHTML += `
                <div id="hi">
                    <div class="audiofile" data-src="${saniLink}" data-preview="${multipleSamples || saniLink}">
                        ${saniTitle}
                        <span class="submitter">submitted by: ${saniName}, <a href="${saniPreview}">preview</a></span>
                        <span class="tags" title="tags">${saniTags}</span>

                        <div class="buttcontain">
                            <button onclick="playsample(this)" class="audioplay">▶</button>
                            <button class="audiocopy" onclick="copy(this)">copy</button>
                        </div>
                    </div>
                </div>`;
            }
        }
    })
    .catch(err => console.error("error fetching samples. go tell kommit to snowgrave his closest friend now. (error):", err));
}

let isSubmitting = false;

function validate_text() {
    if (isSubmitting) return;

    let entryLinkField = document.getElementById("entry.2051242583");
    if (!entryLinkField) return;

    let links = entryLinkField.value
        .split("\n")
        .map(l => l.trim())
        .filter(l => l.length > 0);

    let allValid = links.every(link => alloedhosters.some(prefix => link.startsWith(prefix)));

    if (links.length === 0 || !allValid) {
        alert("your submission does not include an accepted link!\nit only currently allows from file.garden. please also include the https:// prefix!!\n\nexample:\nhttps://file.garden/\n\n(ill fix it sometime...)");
        return;
    }
    else {

        isSubmitting = true;

        var Gform = document.getElementById("gform");
        Gform.submit();
        Gform.reset();

        setTimeout(() => {
            isSubmitting = false;
            var submitbuttonform = document.getElementById("submitbuttonform");
            submitbuttonform.value = `submitted! please wait a few seconds and reload the page for it to show up`;
        }, 1000);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    fetchSampleEntries();
    
    var Gform = document.getElementById("gform");
    if (Gform) {
        Gform.addEventListener('submit', function(e) {
            e.preventDefault();
            validate_text();
        });
    }
});
