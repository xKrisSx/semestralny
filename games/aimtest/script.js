let time = [10, 30, 60]
let timeIndex = 0
let diff = ["Łatwy", "Średni", "Trudny"]
let diffIndex = 0
let active = false
let times = []
let timer

function start() {
    active = true
    newcircle(true)
}

function changeTime(time) {
    timeIndex = time
    document.getElementsByClassName("timeButton active")[0].classList.remove("active")
    document.getElementsByClassName("timeButton")[time].classList.add("active")
}

function changeDiff(diff) {
    diffIndex = diff
    document.getElementsByClassName("diffButton active")[0].classList.remove("active")
    document.getElementsByClassName("diffButton")[diff].classList.add("active")
}

function newcircle(first) {
    if (!active) {
        return
    }
    if (!first) {
        document.getElementById("circle").remove()
        /*document.getElementById("div").innerHTML += "<br>" + (new Date().getTime() - timer)*/
        timer = new Date().getTime()
    } else {
        setTimeout(stop, time[timeIndex] * 1000)
        timer = new Date().getTime()
    }

    let circle = document.createElement("div")
    circle.classList.add("circle")
    circle.id = "circle"

    circle.style.borderRadius = "50%"
    let size
    switch (diff[diffIndex]) {
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

    /*circle.style.backgroundColor = "#777"*/
    circle.onclick = function() {
        times.push(new Date().getTime() - timer)
        newcircle(false)
    }

    document.getElementById("body").appendChild(circle)

}

function stop() {
    active = false
    document.getElementById("circle").remove()
    let average = 0;times.forEach(n => {average += n});average /= times.length
    document.getElementById("box").innerHTML = "Koniec czasu<br>Ilość trafień: " + times.length + "; średni czas: " + Math.round(average) + "ms" // do wyśrodkowania xd
}