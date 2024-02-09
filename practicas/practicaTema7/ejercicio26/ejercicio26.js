let deck = document.querySelectorAll('#deck > div');
let colorsShowed = 0;
let matchedPairs = 0;
let colors = ['#FF5733', '#33FF68', '#3361FF', '#B733FF', '#FFFF33', '#33FFFF', '#FF33B7', '#FF3333', '#33FFAA', '#B73333', '#33B7FF', '#FF33FF', '#33FF33', '#3333FF', '#FFB733', '#FF5733', '#33FF68', '#3361FF', '#B733FF', '#FFFF33', '#33FFFF', '#FF33B7', '#FF3333', '#33FFAA', '#B73333', '#33B7FF', '#FF33FF', '#33FF33', '#3333FF', '#FFB733'];
let time = 0;
let timer = setInterval(() => {
    time++
}, 1000)

function setColors(colors) {
    deck.forEach(element => {
        let color = Math.floor(Math.random() * colors.length)
        element.innerHTML += '<span> ' + colors[color] + ' </span>';
        colors.splice(color, 1)
    })
}

function getColor(element) {

    if (colorsShowed >= 1) {
        restartColors()
        colorsShowed = 0
    }
    let span = element.children[0]
    element.style.background = span.innerText
    colorsShowed++
}

function restartColors() {
    deck.forEach(element => {
        if (element.className !== 'matched')
            element.style.background = 'black'
    })
}


let i = 0
let onDragElementId
deck.forEach(element => element.id = i++ + '')
deck.forEach((element) => {
    element.addEventListener('dragstart', ev => onDragElementId = element.id)
    element.addEventListener('dragover', ev => {
        ev.preventDefault()
    })
    element.addEventListener('drop', (ev) => {
        ev.preventDefault()
        if (onDragElementId === element.id) return

        let targetElement = document.getElementById(onDragElementId)
        let targetColor = targetElement.children[0].innerText

        let elementColor = element.children[0].innerText
        if (targetColor === elementColor) {
            console.log('Matched')

            targetElement.style.background = targetColor
            element.style.background = elementColor

            targetElement.className = 'matched'
            element.className = 'matched'

            element.draggable = false
            targetElement.draggable = false

            matchedPairs++
            if (matchedPairs === 15) {
                clearInterval(timer)
                let seconds = (time % 3600) % 60
                let minutes = ((time - seconds) % 3600) / 60
                let hours = (time - seconds - minutes * 60)/3600
                document.getElementById('deck').innerHTML =
                    `<h1>Has ganado</h1>` +
                    `<h2>Tiempo tardado : ${hours}:${minutes}:${seconds}</h2>`
            }
        }
    })
})

setColors(colors)



