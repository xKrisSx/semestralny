let time = [5, 10, 30, 45, 60]
let diff = ["Bardzo łatwy", "Łatwy", "Średni", "Trudny"]
let active
let accuracy
let points
let timer

function start() {
    active = true
    setInterval(stop, time[0] * 1000)
    newcircle(true)
}

function newcircle(first) {
    if (!active) {
        return
    }
    if (!first) {
        document.getElementById("circle").remove()
        document.getElementById("div").innerHTML += "<br>" + (new Date().getTime() - timer)
        timer = new Date().getTime()
    } else {
        timer = new Date().getTime()
    }

    let circle = document.createElement("div")
    circle.id = "circle"

    circle.style.borderRadius = "50%"
    let size
    switch (diff[1]) {
        case "Bardzo łatwy":
            size = 120
            break
        case "Łatwy":
            size = 90
            break
        case "Średni":
            size = 60
            break
        case "Trudny":
            size = 36
            break
        default:
            size = 100
    }
    circle.style.width = size + "px"
    circle.style.height = size + "px"

    circle.style.position = "fixed"
    if (first) {
        circle.style.top = "calc(50% - " + (size / 2) + "px)"
        circle.style.left = "calc(50% - " + (size / 2) + "px)"
    } else {
        circle.style.top = "calc(" + Number(Math.floor(Math.random() * 60) + 20) + "% - " + (size / 2) + "px)"
        circle.style.left = "calc(" + Number(Math.floor(Math.random() * 60) + 20) + "% - " + (size / 2) + "px)"
    }

    circle.style.backgroundColor = "#" +
        toHexadecimal(Math.floor(Math.random()) * 16) +
        toHexadecimal(Math.floor(Math.random()) * 16) +
        toHexadecimal(Math.floor(Math.random()) * 16) +
        toHexadecimal(Math.floor(Math.random()) * 16) +
        toHexadecimal(Math.floor(Math.random()) * 16) +
        toHexadecimal(Math.floor(Math.random()) * 16)
    circle.onclick = function () {
        newcircle(false)
    }

    document.getElementById("body").appendChild(circle)

}

function stop() {
    /*active = false*/
}