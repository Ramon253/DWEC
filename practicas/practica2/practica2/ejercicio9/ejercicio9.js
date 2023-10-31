let form = document.getElementById("input")
let output = document.getElementById("output")

function dniLetter(number) {
    const letters = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
    return letters[number % 23]
}

form.addEventListener("submit", (e) => {
    e.preventDefault()
    let letter = document.getElementById("letter").value
    const number = parseInt(document.getElementById("dni").value)

    if (number < 0){
        output.innerHTML = "Introduce un numero positivo"
        return
    }
    if (number < 10000000){
        output.innerHTML = "EL dni no es valido, introduce un numero adecuado"
    }
    console.log(letter)
    if (letter !== dniLetter(number)){
        output.innerHTML = `La letra no coincide Su DNI es ${number} ${dniLetter(number)}`
        return;
    }

    output.innerHTML = `Su DNI es ${number} ${dniLetter(number)}`
})