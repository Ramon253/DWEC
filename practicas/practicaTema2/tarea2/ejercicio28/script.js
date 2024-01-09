let form = document.getElementById("input")
let output = document.getElementById("output")
form.addEventListener("submit", (e) => {
    e.preventDefault()
    let num1 = parseInt(document.getElementById("number1").value)
    let num2 = parseInt(document.getElementById("number2").value)

    if ((num1 >= 50 && num1 <=99)|| (num2 >= 50 && num2 <=99)){
        output.innerHTML = true
        return
    }
    output.innerHTML = false
})
