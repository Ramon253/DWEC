let form = document.getElementById("input")
let output = document.getElementById("output")

form.addEventListener("submit",(e) => {
    e.preventDefault()
    let varName = document.getElementById("varName").value
    let varValue = document.getElementById("varValue").value

    this[varName] = varValue

    output.innerHTML = `${varName} = ${varValue}`
})

