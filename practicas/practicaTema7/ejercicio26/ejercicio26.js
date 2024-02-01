let deck = document.querySelectorAll('#deck > div')

deck.forEach((element) => {
    element.addEventListener('dragstart', ev => moveElement(element, ev))
    element.addEventListener('dragover', ev => {
        console.log('Adios')
    })
    element.addEventListener('drop', () => {

    })
})

function startGame(deck) {

}

function moveElement(element, ev) {
    console.log('Hola')
}