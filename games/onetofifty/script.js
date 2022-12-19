let tablica = [];
let x = 50;
function load() {
    for (let i = 0; i < 25; i++) {
        tablica[i] = Math.floor(Math.random() * 25) + 26;
        document.getElementById(i).innerHTML = tablica[i];
        for (let j = 0; j < i; j++) {
            if (tablica[j] === tablica[i]) {
                i--
            }
        }
    }
}
load()

function klikniecie(a){
    let b = Number(document.getElementById(a).innerText);
    if(b === x) {
        x--;
        if (b - 25 > 0) {
            document.getElementById(a).innerHTML = b - 25;
            document.getElementById(a).style.backgroundColor = "yellow";
        }else{
            document.getElementById(a).style.backgroundColor = "black";
        }
    }
}
