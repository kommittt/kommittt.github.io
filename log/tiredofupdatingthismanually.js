function fetchEntries() {
    fetch(`https://opensheet.elk.sh/1oaDxrsvyP75GffEeSXAAOuJ4_HFnILKousYQm8a60yo/entries`)
    .then((res) => res.json())
    .then((data) => {
        let sortedInput = data.reverse();
        let logentries = document.getElementById("logentries");
        
        if (!logentries) return; 
        
        logentries.innerHTML = "";

        for (var i = 0; i < sortedInput.length; i++) {
            
            const entryNumber = sortedInput[i].number || "?";
            const entryTimestamp = sortedInput[i].Timestamp || "unknown date";
            const entryTitle = sortedInput[i].title || "untitled log";
            const entryEntryWow = sortedInput[i].entry || "no entry available.";
            const entryClass = sortedInput[i].class || "current";
            const entryCursor = `<span id="cursor">|</span>`;

            const div = document.createElement("div");
            
    if (entryClass === "pastlog") {
        div.innerHTML = `
            <details class="${entryClass}">
                <summary class="logtitle">ENTRY ${entryNumber} - ${entryTimestamp} || <u>${entryTitle}</u></summary>
                <div class="log-content">${entryEntryWow}</div>
            </details>
        `;
        
        logentries.appendChild(div);
    }
    else {
        div.innerHTML = `
        <main class="${entryClass}">
            <span class="logtitle">ENTRY ${entryNumber} - ${entryTimestamp} || <u>${entryTitle}</u></span>
            <div class="log-content">${entryEntryWow} ${entryCursor}</div>
            <hr>
        </main>
        `;
        
        logentries.appendChild(div);
        }
        }
    })
    .catch(err => console.error("error fetching entries. uhhh... :", err));
}

window.addEventListener("DOMContentLoaded", fetchEntries);