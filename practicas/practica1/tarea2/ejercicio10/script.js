let form = document.getElementById("input")

form.addEventListener("submit", (e) => {
    e.preventDefault()
    //Esto es eñ h2 por el que voy a sacar los datos
    let input = document.getElementById("num").value
    let output = document.getElementById("output")

    let operatotPos = input.indexOf('*')
    if (!input.includes('/') && !input.includes('*')){
        output.innerHTML = "Solo divisiones y multiplicaciones con / o *"
        return;
    }
    if (input.includes('/')) {
        operatotPos = input.indexOf('/')

    }
    let num1 = parseFloat(input.substring(0, operatotPos - 1))

    let num2 = parseFloat(input.substring(operatotPos + 1, input.length))

    if (input.includes('/')) {
        output.innerHTML = num1 / num2
        return;
    }

    output.innerHTML = num1 * num2
})