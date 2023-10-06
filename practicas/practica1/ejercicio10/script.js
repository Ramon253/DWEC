let form = document.getElementById("input")

form.addEventListener("submit", (e) => {
    e.preventDefault()
    //Esto es eñ h2 por el que voy a sacar los datos
    let input = document.getElementById("num").value

    let operatotPos = input.indexOf('*')

    if (input.includes('/')) {
      operatotPos = input.indexOf('/')
    }

    let num1 = parseFloat(input.substring(0, operatotPos - 1))
    let num2 = parseFloat(input.substring(operatotPos + 1, input.length))

    let output = document.getElementById("output")

    if (input.includes('/')) {
        output.innerHTML = num1 / num2
        return;
    }
    output.innerHTML = num1 * num2
})