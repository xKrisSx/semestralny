let tablica = [];
let tablica2 =[];
let x = 50 , y;
function load() {
    for (let i = 0; i < 25; i++) {
        tablica[i] = Math.floor(Math.random() * 25) + 26;
        document.getElementById(i).innerHTML = tablica[i];
        document.getElementById(i).style.opacity = 1;
        document.getElementById(i).style.borderColor = "#18d771";
        for (let j = 0; j < i; j++) {
            if (tablica[j] === tablica[i]) {
                i--
            }
        }
    }
for (let i = 0; i < 25; i++) {
    tablica2[i] = Math.floor(Math.random() * 25) + 1;
    for (let j = 0; j < i; j++) {
        if (tablica2[j] === tablica2[i]) {
            i--
        }
    }
}
}
load()

function klikniecie(a){
    if(x === 50){
        y = new Date().getTime();
    }
    let b = Number(document.getElementById(a).innerText);
    if(b === x) {
        x--;
        if (b - 25 > 0) {
            document.getElementById(a).innerHTML = tablica2[a];
            document.getElementById(a).style.borderColor = "yellow";
        }else{
            document.getElementById(a).style.opacity = 0;
        }
    }
    if (x === 0){
        let c = new Date().getTime();
        c -= y;
        document.getElementById("wynik").innerHTML = Math.round(c/10)/100+" sekund";
    }
}
