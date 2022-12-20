let times = []
let date1
let date2
let state = 0
let timeout

function start() {
    document.getElementById("start").remove()
    func0()
}

function restart() {
    times = []
    func0()
}

function action() {
    switch (state) {
        case 0:
            break
        case 1:
            func3()
            clearTimeout(timeout)
            break
        case 2:
            date2 = new Date().getTime()
            times.push(date2 - date1)
            func4()
            break;
        case 3:
            restart()
            break
    }
}

function func0() {
    if (times.length === 5) { end(); return }
    state = 0
    write("text", "Przygotuj się.")
    document.getElementById("box").style.backgroundColor = "rgba(0,0,128,0.5)"
    setTimeout(function a() {
        document.getElementById("box").style.backgroundColor = "rgba(64,0,196,0.5)"
        write("text", "Przygotuj się..")
    }, 1000)
    setTimeout(function a() {
        document.getElementById("box").style.backgroundColor = "rgba(128,0,255,0.5)"
        write("text", "Przygotuj się...")
    }, 2000)
    setTimeout(func1, 3000)
}

function func1() {
    state = 1
    write("text", "Kliknij, gdy pole stanie się zielone")
    document.getElementById("box").style.backgroundColor = "rgba(255,0,0,0.5)"
    timeout = setTimeout(function f() {
        func2(false)
    }, (1000 + Math.random() * 4000))
}

function func2() {
    state = 2
    write("text", "Kliknij!")
    document.getElementById("box").style.backgroundColor = "rgba(0,255,0,0.5)"
    date1 = new Date().getTime()
}

function func3() {
    state = 0
    write("text", "Za wcześnie!")
    document.getElementById("box").style.backgroundColor = "rgba(0,0,128,0.5)"
    setTimeout(func0, 1500)
}
function func4() {
    state = 0
    write("text", "Dobrze! (" + times[times.length - 1] + "ms), "+ times.length + "/5")
    document.getElementById("box").style.backgroundColor = "rgba(0,0,128,0.5)"
    setTimeout(func0, 1500)
}

function end() {
    state = 3
    let average = 0;times.forEach(n => {average += n});average /= times.length
    write("text", "Średni czas reakcji: " + average + "ms<br>Kliknij, aby zrestartować")
}

function write(id, string) {
    document.getElementById(id).innerHTML = string
}