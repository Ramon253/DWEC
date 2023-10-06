let form = document.getElementById("input")
let farToCel = false
let enun = document.getElementById("enun");
let output = document.getElementById("output")
form.addEventListener("submit", (e) => {
    e.preventDefault()
    //Esto es eñ h2 por el que voy a sacar los datos
    let temp = parseFloat(document.getElementById("temperature").value)

    if (farToCel) {
        output.innerHTML = `${((temp - 32) / 9) * 5} ºC`
        return
    }
    output.innerHTML = `${((temp/5)*9)+32} ºF`
})

function change() {
    if (!farToCel) {
        farToCel = true
        enun.innerHTML = "F to C"
        return
    }
    farToCel = false
    enun.innerHTML = "C to F"
}