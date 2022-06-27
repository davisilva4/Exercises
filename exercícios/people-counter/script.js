let countEl = document.getElementById('count-el');

let count = 0;

let previousCounts = document.getElementById('previous-counts');


function increment(){
    count += 1 
    countEl.innerText = count
}

function reset(){
    count = 0
    countEl.innerText = count 
}

function saveCount(){
    let countStr = ` ${count} - `
    previousCounts.innerText += countStr
}