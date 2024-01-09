const form = document.getElementById("input")
const output = document.getElementById("output")

function isPalindromo(phrase) {
    phrase = phrase.replace(/ /g, "")
    phrase = phrase.toLowerCase()
    const length = phrase.length
    let firstHalf
    let secondHalf

    if (length % 2 === 0) {
        firstHalf = phrase.slice(0, length / 2)
        secondHalf = phrase.slice(length / 2)
    } else {
        firstHalf = phrase.slice(0, length / 2)
        secondHalf = phrase.slice((length / 2) + 1)
    }
    secondHalf = secondHalf.split("")
    secondHalf = secondHalf.reverse()
    secondHalf = secondHalf.join("")

    return firstHalf === secondHalf
}

form.addEventListener("submit", (e) => {
    e.preventDefault()
    let phrase = document.getElementById("phrase").value
    if (isPalindromo(phrase)){
        output.innerHTML = "La frase es un palindromo"
        return
    }
    output.innerHTML = "No es un palindromo"
})
