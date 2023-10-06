let form = document.getElementById("input")
let output = document.getElementById("output")
form.addEventListener("submit",(e) => {
    e.preventDefault()
    let fileName = document.getElementById("fileName").value

    //La funcion split trocea un string en trozos separados por el indicador dado (en este caso el .)
    //y la fumcion pop saca y elimina el ultimo elemento de un array el cual es la extension
    output.innerHTML = "La extension del archivo es ." +  fileName.split('.').pop()
})
