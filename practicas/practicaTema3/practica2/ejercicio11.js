
function infoStr(str){
    if (str ===  str.toUpperCase())
        return "esta formado por mayusculas solo"

    if (str === str.toLowerCase())
        return "esta formado por minusculas solo"

    return "esta formado por mayusculas y minusculas"
}

console.log(infoStr("prueba con minuslculas solo"))
console.log(infoStr("PRUEBA CON MAYUSCULAS SOLO"))
console.log(infoStr("PRUEBA CON MAYUSCULAS y minusculas"))