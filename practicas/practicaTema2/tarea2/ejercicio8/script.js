let form = document.getElementById("input")

form.addEventListener("submit",(e) => {
    e.preventDefault()
    let inputNum = document.getElementById("num").value
    let output = document.getElementById("output")

    if (inputNum > 10 || inputNum < 1 ){
        output.innerHTML = "El numero debe estar entre 1 y 10"
        return
    }
    //Esto parece innecerario pero hace que inputNum sea de tipo numerico, de esa
    //Foma se puede comprobar su valor con === en vez de ==
    inputNum = Math.round(inputNum)
    let randNum = Math.floor(Math.random()*10 + 1)
    console.log(randNum)

    if (randNum === inputNum){
        output.innerHTML = "Felicidades ganaste"
        return;
    }
    output.innerHTML =  "No coincide"
    return;
})
