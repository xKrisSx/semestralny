let tablica1 = [true, false, true, false, true, false, true, false, true, false, true, false];
let x = 0;
let y = 0;
let z = 0;
let date;
let n;
let wynik = 0;
function funkcja(n,g,z){
    y = tablica1[n]
    z = tablica1[n + 1]
    if(!y){
        wynik = new Date().getTime() - date;
        document.getElementById(n).innerHTML = "<a class = wynik>"+Math.round(wynik/10)/100+" / "+g+"</a>";
        tablica1.splice(n + 1 ,1,true)
        tablica1.splice(n,1,true)

    } else if(!z) {
        date = new Date().getTime();
        tablica1.splice(n,1,false)
        document.getElementById(z).classList.add("cien");
    }


}