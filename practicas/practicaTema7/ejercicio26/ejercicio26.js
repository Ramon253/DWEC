let deck = document.querySelectorAll('#deck > div')
let colorsShowed = 0
let onDragElement = ''
let colors = [
    '#FF5733',
    '#33FF68',
    '#3361FF',
    '#B733FF',
    '#FFFF33',
    '#33FFFF',
    '#FF33B7',
    '#FF3333',
    '#33FFAA',
    '#B73333',
    '#33B7FF',
    '#FF33FF',
    '#33FF33',
    '#3333FF',
    '#FFB733',
    '#FF5733',
    '#33FF68',
    '#3361FF',
    '#B733FF',
    '#FFFF33',
    '#33FFFF',
    '#FF33B7',
    '#FF3333',
    '#33FFAA',
    '#B73333',
    '#33B7FF',
    '#FF33FF',
    '#33FF33',
    '#3333FF',
    '#FFB733'
]

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
deck.forEach(element => element.id = i++ + '')
deck.forEach((element) => {

    element.addEventListener('dragstart', ev => onDragElement = element.id)
    element.addEventListener('dragover', ev => {
        ev.preventDefault()
    })
    element.addEventListener('drop', (ev) => {
        ev.preventDefault()

        let targetElement = document.getElementById(onDragElement)
        let targetColor = targetElement.children[0].innerText
        let elementColor = element.children[0].innerText

        if (onDragElement === element.id) return
        if (targetColor === elementColor) {
            console.log('Matched')
            targetElement.style.background = targetColor
            element.style.background = elementColor
            targetElement.className  = 'matched'
            element.className  = 'matched'
            element.draggable = false
            targetElement.draggable = false
        }
    })
})

setColors(colors)



