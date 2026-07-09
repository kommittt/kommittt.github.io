/*
fuck me

https://medium.com/@cgustin/tutorial-simple-search-filter-with-vanilla-javascript-fdd15b7640bf
*/

function searchSamples(e) {
    e.preventDefault();
    
    const items = document.querySelectorAll("#hi");
    const searchTerm = e.target.value.trim().toLowerCase();
    
    items.forEach(item => {
        item.style.display = 'revert';
        
        if (!item.innerText.toLowerCase().includes(searchTerm)) {
        item.style.display = 'none';
        }
    })
}