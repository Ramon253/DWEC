let form = document.getElementById("form")

function prueba() {
    console.log("%cHola", "color:red")
}

form.addEventListener("submit", (e) => {
    e.preventDefault()
    let htmlResult = document.getElementById("resultado")
    let name = document.getElementById("name").value
    let age = document.getElementById("age").value
    let answer = `${name} tiene ${age} años por lo que es un `

    if (age <= 12) {
        htmlResult.innerHTML = answer + "niño"
        return
    }

    if (age <= 17) {
        htmlResult.innerHTML = answer + "adolescente"
        return;
    }

    if (age <= 64) {
        htmlResult.innerHTML = answer + "trabajador"
        return;
    }

    if (age > 140) {
        htmlResult.innerHTML = "Usted esta muerto"
        return;
    }

    htmlResult.innerHTML = answer + "jubilado"
})