let form = document.getElementById("input")

form.addEventListener("submit", (e) => {
    e.preventDefault()
    let num1 = parseInt(document.getElementById("num1").value)
    let num2 = parseInt(document.getElementById("num2").value)
    let num3 = document.getElementById("num3").value
    let num4 = document.getElementById("num4").value

    document.getElementById("output").innerHTML = `La suma de los dos primeros numeros es ${num1 + num2} </br> El producto de los dos ultimos numeros es ${num3 * num4}`
})