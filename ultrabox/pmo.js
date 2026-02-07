document.addEventListener("DOMContentLoaded", () => {
    fetch('/ultrabox/navisidebar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('testsidebar').innerHTML = data;
    });
});