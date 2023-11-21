let form = document.getElementById("input")

form.addEventListener("submit", (e)=>{
    e.preventDefault()
    let side = document.getElementById("side").value *  4

    document.getElementById("output").innerHTML =`El perimetro del cuadrado es ${side}`
})