/* credit to https://drawbox.nekoweb.org
  
fih
	      /`·.¸
	     /¸...¸`:·
	 ¸.·´  ¸   `·.¸.·´)
	: © ):´;      ¸  {
	 `·.¸ `·  ¸.·´\`·¸)
	     `\\´´\¸.·´  
*/

const GOOGLE_FORM_ID = "1FAIpQLScVE3vjyJ7j_2vwfwYDlSslCppTGIpGLbIsXizcdti6uebCzg";
const ENTRY_ID = "entry.563184429";
const ENTRY_USERNAME = "entry.1172647798";
const GOOGLE_SHEET_ID = "1tHjyE2s0p_jJYj0ND7iL6rg6pUmIOGsTtLb8quEhQic";
const DISPLAY_IMAGES = true;

/* 
https://docs.google.com/forms/d/e/1FAIpQLScVE3vjyJ7j_2vwfwYDlSslCppTGIpGLbIsXizcdti6uebCzg/viewform?usp=pp_url&entry.1172647798=username&entry.563184429=link
https://docs.google.com/spreadsheets/d/1tHjyE2s0p_jJYj0ND7iL6rg6pUmIOGsTtLb8quEhQic/edit?resourcekey&gid=1527964479#gid=1527964479
*/

const CLIENT_ID = "b4fb95e0edc434c";
const GOOGLE_SHEET_URL = "https://docs.google.com/spreadsheets/d/" + GOOGLE_SHEET_ID + "/export?format=csv";
const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/" + GOOGLE_FORM_ID + "/formResponse";

let canvas = document.getElementById("drawboxcanvas");
let context = canvas.getContext("2d");
context.fillStyle = "white";
context.fillRect(0, 0, canvas.width, canvas.height);

let restore_array = [];
let start_index = -1;
let stroke_color = "black";
let stroke_width = "3";
let is_drawing = false;

let stroke_opacity = 1.0;
let current_brush = "normal";
let previous_color = stroke_color;
let is_erasing = false;

let username = "anonymous";

function start(event) {
    is_drawing = true;
    context.beginPath();
    context.moveTo(getX(event), getY(event));
    event.preventDefault();
}

function draw(event) {
    if (!is_drawing) return;
    context.lineTo(getX(event), getY(event));
    context.globalCompositeOperation = "source-over";
    context.strokeStyle = is_erasing ? "white" : stroke_color;
    context.lineWidth = stroke_width;
    context.lineCap = is_erasing ? "round" : get_cap();
    context.lineJoin = is_erasing ? "round" : (current_brush === "watercolor" ? "miter" : "round");
    context.globalAlpha = is_erasing ? 1.0 : get_alpha();
    context.stroke();
    event.preventDefault();
}

function stop(event) {
    if (!is_drawing) return;
    context.stroke();
    context.closePath();
    is_drawing = false;
    restore_array.push(context.getImageData(0, 0, canvas.width, canvas.height));
    start_index++;
    event.preventDefault();
}

function getX(event) {
    return event.pageX ? event.pageX - canvas.offsetLeft : event.targetTouches[0].pageX - canvas.offsetLeft;
}
function getY(event) {
    return event.pageY ? event.pageY - canvas.offsetTop : event.targetTouches[0].pageY - canvas.offsetTop;
}

function change_opacity(value) {
    stroke_opacity = parseFloat(value);
}

function change_color(element) {
    stroke_color = element.style.background;
}

function set_brush(type) {
    current_brush = type;
}
function toggle_eraser(on) {
    is_erasing = on;
}

function get_cap() {
    return current_brush === "watercolor" ? "square" : "round";
}

function get_alpha() {
    return current_brush === "watercolor" ? 0.05 : 1.0;
}

canvas.addEventListener("touchstart", start, false);
canvas.addEventListener("touchmove", draw, false);
canvas.addEventListener("touchend", stop, false);
canvas.addEventListener("mousedown", start, false);
canvas.addEventListener("mousemove", draw, false);
canvas.addEventListener("mouseup", stop, false);
canvas.addEventListener("mouseout", stop, false);

function Restore() {
    if (start_index <= 0) {
        Clear();
    } else {
        start_index--;
        restore_array.pop();
        context.putImageData(restore_array[start_index], 0, 0);
    }
}

function Clear() {
    context.fillStyle = "white";
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.fillRect(0, 0, canvas.width, canvas.height);
    restore_array = [];
    start_index = -1;
}

context.drawImage = function() {
	console.warn("noo >:(");
};

document.getElementById("submit").addEventListener("click", async function () {
    const submitButton = document.getElementById("submit");
    const statusText = document.getElementById("status");

    submitButton.disabled = true;
    statusText.textContent = "Uploading...";

    const imageData = canvas.toDataURL("image/png");
    const blob = await (await fetch(imageData)).blob();
    const formData = new FormData();
    formData.append("image", blob, "drawing.png");

    try {
        const response = await fetch("https://api.imgur.com/3/image", {
        method: "POST",
        headers: { Authorization: `Client-ID ${CLIENT_ID}` },
        body: formData,
        });

        const data = await response.json();
        if (!data.success) throw new Error("Imgur upload failed");

        const imageUrl = data.data.link;
        console.log("Uploaded image URL:", imageUrl);

        const googleFormData = new FormData();
        googleFormData.append(ENTRY_ID, imageUrl);
        googleFormData.append(ENTRY_USERNAME, username);

        await fetch(GOOGLE_FORM_URL, {
        method: "POST",
        body: googleFormData,
        mode: "no-cors",
        });

        statusText.textContent = "upload successful!";
        alert("image uploaded and submitted successfully :]");
        location.reload();
    } catch (error) {
        console.error(error);
        statusText.textContent = "error uploading image...";
        alert("error uploading image or submitting to Google Form.");
    } finally {
        submitButton.disabled = false;
    }
});

async function fetchImages() {
    if (!DISPLAY_IMAGES) {
        console.log("image display is disabled.");
        return;
    }

    try {
        const response = await fetch(GOOGLE_SHEET_URL);
        const csvText = await response.text();
        const rows = csvText.split("\n").slice(1);

        const gallery = document.getElementById("gallery");
        gallery.innerHTML = "";
        rows.reverse().forEach((row) => {
        const columns = row.split(",");
        if (columns.length < 2) return;

        const timestamp = columns[0].trim();
        const imgUrl = columns[1].trim().replace(/"/g, "");
        const author =columns[2].trim().replace(/"/g, "");
        const baseComment = columns[3].trim().replace(/"/g, "");
        const comment = baseComment ? `<b>kommit's comment:</b><br>${baseComment}` : "";

        if (imgUrl.startsWith("http")) {
            const div = document.createElement("div");
            div.classList.add("image-container");

            div.innerHTML = `
            <div class="window">
                <div class="title-bar">
                    <div class="title-bar-text" style="font-size: smaller;">by ${author}</div>
                    <div class="title-bar-controls">
                    <button aria-label="Close"></button>
                    </div>
                </div>
                <div class="window-body" >
                    <p>submitted on: ${timestamp}</p>
                    <img src="${imgUrl}" alt="drawing" referrerpolicy="no-referrer">
                    <p>${comment}</p>
                </div>
            </div>
                `;
            gallery.appendChild(div);
        }
        });
    } catch (error) {
        console.error("error fetching images:", error);
        document.getElementById("gallery").textContent = "failed to load images :(";
    }
}

fetchImages();

function setActiveButton(btn) {
    document.querySelectorAll('button').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
}

/* keybinds i guess */
function keyPressHandler(e) {
    var evtobj = window.event ? window.event : e;

    if (evtobj.ctrlKey && evtobj.keyCode == 90) { /* undo */
        setActiveButton(document.getElementById('buttundo'));
        Restore();
    }
    if (evtobj.keyCode == 69) { /* erase */
        toggle_eraser(true);
        setActiveButton(document.getElementById('butteraser'));
    }
    if (evtobj.keyCode == 66) { /* brush */
        toggle_eraser(false);
        setActiveButton(document.getElementById('buttpencil'));
    }
    if (evtobj.keyCode == 87) { /* watercolor */
        toggle_eraser(false);
        set_brush('watercolor');
        setActiveButton(document.getElementById('buttwatercolor'));
    }
    if (evtobj.keyCode == 46) { /* delete */
        setActiveButton(document.getElementById('buttdelete'));
        Clear();
    }
}
window.addEventListener('keydown', keyPressHandler);

