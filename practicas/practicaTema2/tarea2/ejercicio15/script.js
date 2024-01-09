let form = document.getElementById("input")
let output = document.getElementById("output")
form.addEventListener("submit", (e) => {
    e.preventDefault()
    let num = document.getElementById("number").value
    num = parseFloat(num)

    if (num > 13){
        output.innerHTML = "La diferencia es de " + 2 * Math.abs(13 - num)
        return
    }
    output.innerHTML = Math.abs(13 - num)
})
