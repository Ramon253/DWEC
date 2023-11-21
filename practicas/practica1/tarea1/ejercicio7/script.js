let form = document.getElementById("input")

const listen = (e) => {
    e.preventDefault()
    let password = document.getElementById("password").value

    let passwordConfirm = document.getElementById("passwordConfirm").value
    if (password === passwordConfirm){
        document.getElementById("output").innerHTML = "La contraseña es correcta"
        return
    }
    document.getElementById("output").innerHTML = "Repita la contraseña"
}
form.addEventListener("submit",listen)


