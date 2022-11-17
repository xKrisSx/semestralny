let time =[5,10,15,30];
let clicks = 0;
let active = false
function choose(){

}
function start(){
    alert("a")
    active = true
    setInterval(stop, 5000)

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
}