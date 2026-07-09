function getTheCat() {
    let path = window.location.pathname;
    let filename = path.substring(path.lastIndexOf('/') + 1); // "deltarune.html"
    let pageName = filename.replace('.html', ''); // "deltarune"
    return pageName;
}

const alltheCats = [
    "generic-sounds", "sgm", "breaks", "undertale", "deltarune", "earthbound", "genesisf2", 
    "mother-3", "pizza-tower", "ultrakill", "mario64", "super-mario-world", "super-mario-maker-2",
    "banjo-kazooie", "baldi", "roblox2009", "aceattorney1", "pvz", "minecraft", "mario-kart-ds",
    "megaman-x", "megaman-zero", "user-submitted", "plok", "real_cd", "etcomposer", "msm",
    /* 
    "touhou",  "kirby-super-star", "megaman-zx", "megaman-zxa",
     "pokemonbnw", "sprunki",
    */
    "work-in-progress"
];

function renderEntries(nosortingfuckyou, container) {
    container.innerHTML = "";

    for (var i = 0; i < nosortingfuckyou.length; i++) {

        const sheettitle = nosortingfuckyou[i].title || "";
        const sheetlink = nosortingfuckyou[i].link || "";
        const sheettags = nosortingfuckyou[i].tags || "";
        const sheetcredit = nosortingfuckyou[i].credit || "";
        const sheetmultiplesamples = nosortingfuckyou[i].multiple || "";

        const div = document.createElement("div");
        div.id = "hi";

        if (sheettitle === "" && sheetlink === "") {
            div.innerHTML = `
            <hr> <br>
            i am a separator <small>and i am trying my best</small>
            <br><br>
            ${sheettags}
            <br>
            <br> <hr>
            `;
        } else {

            if (sheetcredit === "") {
                div.innerHTML = `
                    <div class="audiofile" data-src="${sheetlink}" data-preview="${sheetmultiplesamples || sheetlink}">
                        ${sheettitle}<br>
                        <span class="tags" title="tags" id="searchtags">${sheettags}</span>
                        <div class="buttcontain">
                            <button onclick="playsample(this)" class="audioplay">▶</button>
                            <button class="audiocopy" onclick="copy(this)">copy</button>
                        </div>
                    </div>
                `;
            } else {
                div.innerHTML = `
                    <div class="audiofile" data-src="${sheetlink}" data-preview="${sheetmultiplesamples || sheetlink}">
                        ${sheettitle}<br>
                        <span class="submitter">submitted by: ${sheetcredit}</span>
                        <span class="tags" title="tags" id="searchtags">${sheettags}</span>
                        <div class="buttcontain">
                            <button onclick="playsample(this)" class="audioplay">▶</button>
                            <button class="audiocopy" onclick="copy(this)">copy</button>
                        </div>
                    </div>
                `;
            }

        }

        container.appendChild(div);
    }
}

function fetchEntries() {
    const category = getTheCat();
    let sampleentries = document.getElementById("sampleentries");
    if (!sampleentries) return;

    if (category === "all-samples") {
        fetchAllCategories(sampleentries);
        return;
    }

    if (category === "work-in-progress") {
        return;
    }

    fetch(`https://opensheet.elk.sh/1pIOYV7i-djf7_yyaQMV_fitIpNcbKlkmBAcn-TYkd68/${category}`)
        .then((res) => res.json())
        .then((data) => renderEntries(data, sampleentries))
        .catch(err => console.error("error fetching samples or category. uhhh... :", err));
}

function fetchAllCategories(sampleentries) {
    const fetches = alltheCats.map(cat =>
        fetch(`https://opensheet.elk.sh/1pIOYV7i-djf7_yyaQMV_fitIpNcbKlkmBAcn-TYkd68/${cat}`)
            .then(res => res.json())
            .then(data => data.map(entry => ({ ...entry, category: cat })))
            .catch(err => {
                console.error(`error fetching category "${cat}":`, err);
                return [];
            })
    );

    Promise.all(fetches).then(results => {
        const allEntries = results.flat();
        renderEntries(allEntries, sampleentries);
    });
}

window.addEventListener("DOMContentLoaded", fetchEntries);