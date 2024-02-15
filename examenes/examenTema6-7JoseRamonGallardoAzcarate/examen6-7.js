let values = [1, 2, 3, 4, 5, 6, 7, 10, 11, 12]
let types = ["bastos", "copas", "espadas", "oros"]
let deck = []
let yourPoints = 0
let banksPoints = 0
let winner = ''
let isMatchOver = false

//Cada posicion del array equivale a su posicion en el array de types
//es decir deck[1] serian las cartas de copas
for (let type of types) {
    deck.push(values)
}

//Funcion que devuelve una carta y la quita de la baraja
function getCard(target) {
    //carta aleatoria
    let type = Math.floor(Math.random() * 4)
    let number = Math.floor(Math.random() * deck[type].length)

    //saco por pantalla para comodidad y debuggeo
    console.log(number)
    console.log(deck[type][number] + ': ' + types[type])

    //Si el target es user la carta cuenta para el usuario si no para la banca
    let id = target === 'user' ? 'myCard' : 'banksCard'
    document.getElementById(id).innerHTML = `<h1>La carta es </h1> <h2>${deck[type][number]} de ${types[type]} </h2>`
    document.getElementById(id + 's').innerHTML += `<li>${deck[type][number]} de ${types[type]}</li>`

    addPoint(target, deck[type][number])
    deck[type] = deleteCard(type, number)
    console.log(deck)
}

//Usando array.splice me estaba mutando el resto de arrays, asi que he hecho una funcion para eliminar cartas de la baraja
function deleteCard(type, number) {
    let result = []
    for (let i = 0; i < deck[type].length; i++) {
        if (i === number) continue
        result.push(deck[type][i])
    }
    return result
}

//Settea todo lo que pasa cuando se gana
function setWin(message, id, points) {
    document.getElementById('output').innerHTML = message
    document.getElementById(id).innerHTML = `<h2>${points}</h2>`
    document.getElementById('buttons').innerHTML = ''
    isMatchOver = true;
    document.cookie = `winner=${winner};max-age:60*5`
    putMedal(winner)
}

//Añade la medalla al ganador
function putMedal(winner) {
    let id = (winner === 'user') ? 0 : 1
    let medalDiv = document.getElementsByClassName('medal')
    console.log(medalDiv)
    medalDiv[id].innerHTML = `<img src="assets/cartas/medalla.jpg"  alt="Medalla">`
}

//sumo el valor de cada carta y miro si ha ganado

function addPoint(target, number) {
    //Miro si tomo los puntos de la banca o del user
    let points = (target === 'user') ? yourPoints : banksPoints;
    //Miro el valor de la carta y le asigno su respectivo valor
    let value = (number >= 10) ? 0.5 : number
    //Setteo el id del elemento en el que apareceran las puntuaciones
    let id = target === 'user' ? 'myPunctuation' : 'banksPoints'

    points += value
    if (points === 7.5) {
        let message = target === 'user' ? `<h1>Has ganado</h1>` : `<h1>La banca ha ganado</h1>`;
        winner = target
        setWin(message, id, points)
        return
    }

    if (points > 7.5) {
        let message = target === 'user' ? `<h2>Has perdido</h2>` : `<h2>La banca ha perdido</h2>`
        winner = target === 'user' ? 'bank' : 'user';
        setWin(message, id, points)
        return;
    }

    if (target === 'user') yourPoints = points;
    else banksPoints = points;

    document.getElementById(id).innerHTML = `<h2>${points}</h2>`
}

//Funcion para plantarse
function stop() {
    while (yourPoints >= banksPoints) {
        getCard('bank')
        if (isMatchOver) break
    }
    if (!isMatchOver) {
        document.getElementById('output').innerHTML = `<h1>Has perdido</h1>`
        document.getElementById('buttons').innerHTML = ''
    }
}

//Le doy algo de uso a la cookie
let lastWinner = document.cookie.split(';', 1)
if (lastWinner[0] !== ''){document.getElementById('lastWinner').innerHTML = `<h1>Ultimo ganador : ${lastWinner[0].split('=')[1]}</h1>`}
document.addEventListener('keypress', ev => {
    if (ev.key.toLowerCase() === 'f') location.reload()
})