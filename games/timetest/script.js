let tablica1 = [true, false, true, false];
let x = 0;
let y = 0;
let z = 0;
let date = 0;
let n = 1;
let wynik = 0;
function funkcja(){
    y = tablica1[n]
    z = tablica1[n+1]
    if(!y){
        alert("b")
        wynik = new Date() - date;
        document.getElementById("dwa").innerHTML = wynik;
        alert("e")
    } else if(!z) {
        alert("a")
        date = new Date();

        document.getElementById("jeden").innerHTML = date;
        alert("c")
        tablica1.splice(2,1,"true")
        alert("d")
    }


}