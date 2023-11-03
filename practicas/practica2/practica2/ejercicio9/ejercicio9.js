const tiradas = []

function tirarDados() {
    let dice1 = Math.floor(Math.random() * 6) + 1
    let dice2 = Math.floor(Math.random() * 6) + 1
    tiradas.push(dice1)
    tiradas.push(dice2)

    tiradas.sort()
    console.log(tiradas)

    document.getElementById("diceOutput1").innerHTML = dice1
    document.getElementById("diceOutput2").innerHTML = dice2

    document.getElementById("maxDiceOutput").innerHTML = tiradas[tiradas.length-1]
    document.getElementById("minDiceOutput").innerHTML = tiradas[0]
}