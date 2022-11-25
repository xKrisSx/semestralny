let time =[5,10,15,30];
let clicks = 0;
let active = false
let x = 0;
function choose(n){
    x = n;
}
function start(){
    active = true
    setInterval(stop, time[x] * 1000)

}
function clickd() {
    if (!active) {
        return
    } else {
        clicks++;
        document.getElementById("wypisz").innerHTML = "ilosc kliknięć:" + clicks;
    }
}

function stop(){
    active = false
    document.getElementById("many").innerHTML = "wynik kliknięć na sekunde:" + clicks/ time[x];
}

