let time =[5,10,15,30];
let click = 0;
let x = 0;
function wybór(){

}

function klikać(){
    click++;
    document.getElementById("wypisz").innerHTML = "ilosc kliknięć:" + click;
}
let timer = setInterval(wybór(),time[x] * 1000)
clearInterval(timer)
