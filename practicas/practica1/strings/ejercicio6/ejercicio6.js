let form = document.getElementById("input")
let output = document.getElementById("output")

form.addEventListener("submit",(e) => {
    e.preventDefault()
    let email =  document.getElementById("email").value
    /*
    * Hay 3 formas de hacer el ejercicio
    * */
    //Forma 1 y facil

    output.innerHTML =` ${email.substring(0,3)}...@${email.split('@').pop()}`

    /*
    let lastPart = ''
    let firstPart = ''
    let startEnd = false
    let cont = 0

    Forma 2 usnado forof
        for (let emailKey of email) {
            if (cont < 3)
                firstPart += emailKey
            if (emailKey == '@')
                startEnd = true
            if (startEnd)
                lastPart += emailKey
            cont++
        }

        forma 3 usando for in
        for (let emailKey in email) {
            if (emailKey < 3)
                firstPart += email.charAt(emailKey)
            if (email.charAt(emailKey) == '@')
                startEnd = true
            if (startEnd)
                lastPart += email.charAt(emailKey)
        }

        output.innerHTML = firstPart + "..." + lastPart*/
})

