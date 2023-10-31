let form = document.getElementById("input")
let output = document.getElementById("output")

function dniLetter(number) {
    const letters = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
    return letters[number % 23]
}

form.addEventListener("submit", (e) => {
    e.preventDefault()
    const number = parseInt(document.getElementById("dni").value)
    output.innerHTML = dniLetter(number)
})