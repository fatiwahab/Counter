// document.getElementById("counter_value");

let count = 0;

let totalVisitors = document.getElementById("counter_value");
let savedlist = document.getElementById("saved");

function NewVisitor(){
    count += 1;
    totalVisitors.innerText = count;
}

function ResetVisitorCount(){
    count = 0;
    totalVisitors.innerText = count;
}

function saveNow(){
    let save = count + " - "
savedlist.innerHTML += save;

}

function clearRecord(){
    count = 0;
    savedlist.innerHTML = count;
}