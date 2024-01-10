//funcion encargada de pedir la base y el exponente
const getBaseExponent = () => {
    let base = parseInt (prompt("Introduce la base de la potencia"));
    let exponent ;
    do {
        exponent = parseInt(prompt("Introduce el exponente (debe ser positivo)"))
        console.log(exponent)
    } while (exponent <= 0)

    return {base, exponent}
}

const power = (base, exponent) =>{
    //si el exponente es 0
    if (exponent === 0) return 1;
    //logica de la funcion
    return base * power(base, exponent-1)
}

let userInput = getBaseExponent()
alert(power(userInput.base, userInput.exponent))
