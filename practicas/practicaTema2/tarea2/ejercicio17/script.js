let form = document.getElementById("input")
let output = document.getElementById("output")
form.addEventListener("submit", (e) => {
    e.preventDefault()
    let num = document.getElementById("number").value
    num = parseFloat(num)

    if (num > 19) {
        output.innerHTML = "La diferencia es de " + 3 * Math.abs(19 - num)
        return
    }
    output.innerHTML = "La diferencia es de " + Math.abs(19 - num)
})
