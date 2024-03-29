let add = 100
let points = 0
let time = 3
let accuracy = 0
let hit = 0
let n = 0
let play = false

function restart() {
    add = 100
    points = 0
    accuracy = 0
    hit = 0
    n = 0
}
function start() {
    if (play) {return}
    play = true
    document.getElementById("info").innerHTML = ""
    restart()
    load()
    setTimeout(stop, time * 1000)
}

function stop() {
    play = false
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            document.getElementById("circle" + i + j).remove()
        }
    }
    document.getElementById("info").innerHTML = "Koniec czasu; punkty: " + points + "; celność: " + accuracy + "%"
}

function load() {
    if (!play) {return}
    /*document.getElementById("add").innerText = add*/
    let cswitch = Math.random() > 0.5
    let r, g, b
    if (cswitch) {
        r = Math.floor(Math.random() * 255) - add
        g = Math.floor(Math.random() * 255) - add
        b = Math.floor(Math.random() * 255) - add
    } else {
        r = 255 - Math.floor(Math.random() * 255) + add
        g = 255 - Math.floor(Math.random() * 255) + add
        b = 255 - Math.floor(Math.random() * 255) + add
    }

    let x = Math.floor(Math.random() * 5)
    let y = Math.floor(Math.random() * 5)
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            let circle = document.createElement("div")
            circle.id = "circle" + i + j
            circle.classList.add("circle")

            let size = 100
            circle.style.width = size + "px"
            circle.style.height = size + "px"

            circle.style.position = "fixed"
            circle.style.top = "calc(50% - " + (270 - i * 110) + "px)"
            circle.style.left = "calc(50% - " + (270 - j * 110) + "px)"

            if (i === x && j === y) {
                if (cswitch) {
                    circle.style.backgroundColor = "rgb(" + (r + add) + "," + (g + add) + "," + (b + add) + ")"
                } else {
                    circle.style.backgroundColor = "rgb(" + (r - add) + "," + (g - add) + "," + (b - add) + ")"
                }
                circle.classList.add("true")
                circle.onclick = function() {
                    decrease(true)
                }
            } else {
                circle.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")"
                circle.classList.add("false")
                circle.onclick = function() {
                    decrease(false)
                }
            }
            document.getElementById("body").appendChild(circle)
        }
    }
}
function decrease (bool) {
    if (!play) {return}
    n++
    if (bool) {
        points += 5 + ((100 - add) / 4) + (Math.round(n / 10) + 1)
        hit++
    }
    accuracy = (hit / n) * 100
    points = Math.round(points * (accuracy === 0 ? 1 : accuracy)) / 100
    add -= add <= 8 ? 0 : add < 33 ? 1 : add < 66 ? 2 : 3
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            document.getElementById("circle" + i + j).remove()
        }
    }
    /*document.getElementById("amogus").innerText = "Celność: " + Math.round(accuracy * 10) / 10 + "%"
    document.getElementById("amogus2").innerText = "Punkty: " + points*/
    load()
}