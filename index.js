let count = 0;
let entryEl = document.getElementById("entry-el");
let saveEl = document.getElementById("save-el");
console.log(saveEl);

function countPeopleEntering() {
    count  = count += 1;
    entryEl.textContent = count;
}


function saveCount() {
    saveEl.textContent += count + " - ";
    entryEl.textContent = 0;
    count = 0;
    
}

