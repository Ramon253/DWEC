let form = document.getElementById("input")

form.addEventListener("submit",(e) =>{
    e.preventDefault()
    let name = document.getElementById("name").value
    let email = document.getElementById("email").value

    document.getElementById("output").innerHTML = `El email de ${name} es ${email}`
})