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

/*
let tablica = []
let x = -1
let date
function func(id, time) {
    if (x === -1 && !tablica.includes(id)) { // 1 klik
        x = id
        date = new Date().getTime()
        return
    }
    if (x !== -1 && !tablica.includes(id) && x === id) { // 2 klik
        document.getElementById(id).innerHTML = "<a class='wynik'>" + Math.round((new Date().getTime() - date) / 10) / 100 + " / " + time + "</a>";
        x = -1
        tablica.push(id)
    }
}
 */