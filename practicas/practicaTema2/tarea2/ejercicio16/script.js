let form = document.getElementById("input")
let output = document.getElementById("output")
form.addEventListener("submit",(e) => {
    e.preventDefault()
    //La funcion parseInt pasa de string a int
    let num1 = parseInt(document.getElementById("number1").value)
    let num2 = parseInt(document.getElementById("number2").value)

    output.innerHTML = "La suma es "

    if (num1 === num2){
        output.innerHTML += 3 * (num1 + num2)
        return
    }

    output.innerHTML += num1 + num2
})
