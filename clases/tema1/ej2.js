let form = document.getElementById("form")

form.addEventListener("submit", (e) => {
    e.preventDefault()
    let weekDay = document.getElementById("weekDay").value
    let answer = document.getElementById("answer")

    if (weekDay.length !== 1) {
        answer.innerHTML = "inserte un dia de la semana solo con un letra ejem : L M X J V S D"
        document.getElementById("hidden").style.display = "none"
        return
    }
    weekDay = weekDay.toLowerCase()
    document.getElementById("hidden").style.display = "flex"
    switch (weekDay) {
        case 'l': {
            answer.innerHTML = ""
            document.getElementById("h1").innerHTML = "DAW"
            document.getElementById("h2").innerHTML = "DAW"
            document.getElementById("h3").innerHTML = "DAW"
            document.getElementById("h4").innerHTML = "DIW"
            document.getElementById("h5").innerHTML = "DIW"
            document.getElementById("h6").innerHTML = "EIE"
            break
        }
        case 'm' : {
            answer.innerHTML = ""
            document.getElementById("h1").innerHTML = "ING"
            document.getElementById("h2").innerHTML = "EIE"
            document.getElementById("h3").innerHTML = "DWEC"
            document.getElementById("h4").innerHTML = "DWEC"
            document.getElementById("h5").innerHTML = "DWES"
            document.getElementById("h6").innerHTML = "DWES"
            break
        }
        case 'x' : {
            answer.innerHTML = ""
            document.getElementById("h1").innerHTML = "EIE"
            document.getElementById("h2").innerHTML = "DWES"
            document.getElementById("h3").innerHTML = "DWES"
            document.getElementById("h4").innerHTML = "DWES"
            document.getElementById("h5").innerHTML = "DIW"
            document.getElementById("h6").innerHTML = "DIW"
            break
        }

        case 'j' : {
            answer.innerHTML = ""
            document.getElementById("h1").innerHTML = "DWEC"
            document.getElementById("h2").innerHTML = "DWEC"
            document.getElementById("h3").innerHTML = "DIW"
            document.getElementById("h4").innerHTML = "DIW"
            document.getElementById("h5").innerHTML = "ING"
            document.getElementById("h6").innerHTML = "EIE"
            break
        }

        case 'v' : {
            answer.innerHTML = ""
            document.getElementById("h1").innerHTML = "ING"
            document.getElementById("h2").innerHTML = "DWEC"
            document.getElementById("h3").innerHTML = "DWEC"
            document.getElementById("h4").innerHTML = "DWES"
            document.getElementById("h5").innerHTML = "DWES"
            document.getElementById("h6").innerHTML = "DWES"
            break
        }
        case 's' || 'd' : {
            document.getElementById("hidden").style.display = "none"
            answer.innerHTML = "Los sabados y domingos no hay clase"
            break
        }

        default : {
            answer.innerHTML = "inserte un dia de la semana solo con un letra ejem : L M X J V S D"
            document.getElementById("hidden").style.display = "none"
            break
        }
    }
})