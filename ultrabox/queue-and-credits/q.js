function fetchEntries() {
    fetch(`https://opensheet.elk.sh/1pIOYV7i-djf7_yyaQMV_fitIpNcbKlkmBAcn-TYkd68/queue`)
    .then((res) => res.json())
    .then((data) => {
        let sortedInput = data.reverse();
        let queueentries = document.getElementById("queueentries");
        
        if (!queueentries) return; 
        
        queueentries.innerHTML = "";

        for (var i = 0; i < sortedInput.length; i++) {
            
            const who = sortedInput[i].from || "";
            const what = sortedInput[i].request || "unknown";
            const when = sortedInput[i].status || "unknown";

            const div = document.createElement("div");
            
    if (who === "") {
        div.innerHTML = `
            <span class="queuetext"> <span class="col">${what}</span> -- status: ${when}</span>
        `;
        
        queueentries.appendChild(div);
    }
    else {
        div.innerHTML = `
            <span class="queuetext"> <span class="col">${what}</span> requested by <u>${who}</u> -- status: ${when}</span>
        `;
        
        queueentries.appendChild(div);
        }
        }
    })
    .catch(err => console.error("error fetching entries. uhhh... :", err));
}

window.addEventListener("DOMContentLoaded", fetchEntries);