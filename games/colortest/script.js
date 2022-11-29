let add = 100

function load() {
    document.getElementById("add").innerText = add
    let r = Math.floor(Math.random() * 255 - add)
    let g = Math.floor(Math.random() * 255 - add)
    let b = Math.floor(Math.random() * 255 - add)
    let x = Math.floor(Math.random() * 5)
    let y = Math.floor(Math.random() * 5)
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            let circle = document.createElement("div")
            circle.id = "circle" + i + j

            let size = 100
            circle.style.width = size + "px"
            circle.style.height = size + "px"

            circle.style.position = "fixed"
            circle.style.top = 250 + (i * 100 + i * 10) + "px"
            circle.style.left = 250 + (j * 100 + j * 10) + "px"

            if (i === x && j === y) {
                circle.style.backgroundColor = "rgb(" + (r + add) + "," + (g + add) + "," + (b + add) + ")"
                circle.classList.add("active")
            } else {
                circle.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")"
            }

            document.getElementById("body").appendChild(circle)
        }
    }
}
function decrease () {
    add -= 2
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            document.getElementById("circle" + i + j).remove()
        }
    }
    load()
}