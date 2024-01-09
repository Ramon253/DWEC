let form = document.getElementById("input")

form.addEventListener("submit", (e) =>{
    e.preventDefault()
    let grade1 = parseInt(document.getElementById("grade1").value)
    let grade2 = parseInt(document.getElementById("grade2").value)
    let grade3 = parseInt(document.getElementById("grade3").value)

    let avg = (grade1 + grade2 + grade3)/3

    if (avg >= 7){
        document.getElementById("output").innerHTML  = `Promocionado con un ${avg} de media`
        return
    }
    document.getElementById("output").innerHTML = `No has sido promocionado lo siento`
})