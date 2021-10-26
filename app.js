// document.getElementById("count").innerText = 5;

let count = 0;

let countEl = document.getElementById("count");
let saveEl = document.getElementById("save-el");

function increment()
{
    count += 1;
    countEl.innerText = count;
    // document.getElementById("count").innerText = count;
}


function save()
{
    let countStr = count + " - ";
    saveEl.innerText += countStr;
    countEl.innerText = 0;
    count = 0;
}
