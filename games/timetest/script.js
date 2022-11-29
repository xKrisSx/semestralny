let active = false;
let wlacz = true;
let active1 = false;
let wlacz1 = true;
let active2 = false;
let wlacz2 = true;
let d
let a
let d1
let a1
let d2
let a2
let wynik1
let wynik2
let wynik3
let active3 = false;
let wlacz3 = true;
let active4 = false;
let wlacz4 = true;
let active5 = false;
let wlacz5 = true;
let d3
let a3
let d4
let a4
let d5
let a5
let wynik4
let wynik5
let wynik6
let wynik7
let d6
let a6
let active6 = false;
let wlacz6 = true;

function idz() {
        if(!wlacz){ //
                return
        }
        if(!active){
                d = new Date()
                d.getTime();
                active = true;
        } else {
                a = new Date()
                 a.getTime();
                 wynik1 = a - d;
                 wlacz = false;
                 document.getElementById("wynik1").innerHTML = wynik1;
        }
}
function idz1() {
        if(!wlacz1){ //
                return
        }
        if(!active1){
                d1 = new Date()
                d1.getTime();
                active1 = true;
        } else {
                a1 = new Date()
                a1.getTime();
                wynik2 = a1 - d1;
                wlacz1 = false;
                document.getElementById("wynik2").innerHTML = wynik2;
        }
}
function idz2() {
        if(!wlacz2){ //
                return
        }
        if(!active2){
                d2 = new Date()
                d2.getTime();
                active2 = true;
        } else {
                a2 = new Date()
                a2.getTime();
                wynik3 = a2 - d2;
                wlacz2 = false;
                document.getElementById("wynik3").innerHTML = wynik3;
        }
}
function idz3() {
        if(!wlacz3){ //
                return
        }
        if(!active3){
                d3 = new Date()
                d3.getTime();
                active3 = true;
        } else {
                a3 = new Date()
                a3.getTime();
                wynik4 = a3 - d3;
                wlacz3 = false;
                document.getElementById("wynik4").innerHTML = wynik4;
        }
}
function idz4() {
        if(!wlacz4){ //
                return
        }
        if(!active4){
                d4 = new Date()
                d4.getTime();
                active4 = true;
        } else {
                a4 = new Date()
                a4.getTime();
                wynik5 = a4 - d4;
                wlacz4 = false;
                document.getElementById("wynik5").innerHTML = wynik5;
        }
}
function idz5() {
        if(!wlacz5){ //
                return
        }
        if(!active5){
                d5 = new Date()
                d5.getTime();
                active5 = true;
        } else {
                a5 = new Date()
                a5.getTime();
                wynik6 = a5 - d5;
                wlacz5 = false;
                document.getElementById("wynik6").innerHTML = wynik6;
        }
}
function idz6() {
        if(!wlacz6){ //
                return
        }
        if(!active6){
                d6 = new Date()
                d6.getTime();
                active6 = true;
        } else {
                a6 = new Date()
                a6.getTime();
                wynik7 = a6 - d6;
                wlacz6 = false;
                document.getElementById("wynik7").innerHTML = wynik7;
        }
}





