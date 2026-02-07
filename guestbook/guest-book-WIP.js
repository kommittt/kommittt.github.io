function tConvert(time) { return time; }
function encodeHTML(str) {
    if (!str) return "";
    return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;');
}

function fetchGuestBook_Entries() {
    fetch(`https://opensheet.elk.sh/${Google_Form_ID}/${Google_Form_Name}`)
    .then((res) => res.json())
    .then((data) => {
        let sortedInput = data.reverse();
        let jsonContainer = document.getElementById("json");
        if (!jsonContainer) return;
        
        jsonContainer.innerHTML = "";

        for (var i = 0; i < sortedInput.length; i++) {
            var timestamp = sortedInput[i].Timestamp || "";
            var splitTime = timestamp.split(' ')[0] || "";
            var splitTime_1 = timestamp.split(' ').pop() || "";
            
            let ConvertedTime = tConvert(splitTime_1);
            let SantizeName = encodeHTML(sortedInput[i].Name || "Anonymous").replace(/[^\x00-\x7F]/g, "");
            let SanitizeWebsite = encodeHTML(sortedInput[i].Email || "");
            let SantizeResponses = encodeHTML(sortedInput[i].Guestbook_Entry || "").replace(/[^\x00-\x7F]/g, "");

            jsonContainer.innerHTML += `
            <div class="entry">
                <div class="entry-info">
                    <p>
                        <span class="author"> &lt;${SantizeName}&gt;</span>
                        <a class="website" target="_blank" href="${SanitizeWebsite}">${SanitizeWebsite}</a>
                        <span class="date">${splitTime}</span>
                        <span class="time">${ConvertedTime}</span>
                    </p>
                </div>
                <div class="entry-text">
                    <p>${SantizeResponses}</p>
                </div>
            </div>`;
        }
    })
    .catch(err => console.error("Error fetching guestbook:", err));
}

var swear_words_arr = ["nigger", "nigga", "niglet", "faggot", "retard", "tranny", "troon"];

function validate_text() {
    let swear_alert_arr = [];
    let entryField = document.getElementById("entry.1675800829");
    if (!entryField) return;

    let compare_text = entryField.value.toLowerCase();
    
    for (var i = 0; i < swear_words_arr.length; i++) {
        if (compare_text.includes(swear_words_arr[i])) {
            swear_alert_arr.push(swear_words_arr[i]);
        }
    }

    if (swear_alert_arr.length > 0) {
        alert("your message contains filtered words !!: " + swear_alert_arr.join(", "));
    } else {
        var Gform = document.getElementById("gform");
        Gform.submit(); 

        Gform.reset();

        setTimeout(() => {
            var sendFormContainer = document.getElementById("SendForm");
            sendFormContainer.innerHTML = `
                <div class="pagecontent" style="height:85%;">
                    <h2 style="color: #000000; ">entry submitted!</h2>
                    <p>thank you for signing my guestbook!</p>
                    <button class="form-button" onclick="location.reload()">write another?</button>
                </div>`;
        }, 100);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    fetchGuestBook_Entries();
    
    var Gform = document.getElementById("gform");
    if (Gform) {
        Gform.addEventListener('submit', function(e) {
            e.preventDefault();
            validate_text();
        });
    }
});

// unfortunately had to use ai for this js because i was getting sick and tired :/ sorry gang i aint smart at all and ill admit it
// maybe one day once i actually learned js properly ill recode with my own two hands but not now :')