let response = 0
const inputMenu = `Inserte un numero
    1 --> Consultar codigo
    2 --> Borrar codigo
    3 --> Ver codigos
    4 --> Cambiar codigo
    5 --> Salir`

let codes = new Map()
codes.set(11500, "El puerto de santa maria").set(11401, "Jerez de la frontera").set(11520, "Rota").set(11510, "Muerto real").set(11001, "Cadiz")

while (response < 5) {
    response = prompt(inputMenu)
    switch (response) {
        case "1" : {
            let code = prompt("Inserta el codigo que quieres comprobar")
            if (codes.has(parseInt(code))) {
                alert("Tu codigo esta guardado")
                break
            }
            alert("Tu codigo no esta guardado")
            break
        }
        case "2" : {
            let code = prompt("Inserte el codigo que quieres eliminar")
            if (codes.delete(parseInt(code))) {
                alert("Se ha borrado el codigo con exito")
                break
            }
            alert("No se ha podido borrar")
            break
        }
        case "3" : {
            let allCodes = ``
            for (let code of codes.keys()) {
                allCodes += `${code} --> ${codes.get(code)} \n`
            }
            alert(allCodes)
            break
        }

        case "4" :{
            let oldCode = parseInt(prompt("Inserte el codigo a cambiar"))
            let newCode = parseInt(prompt("Inserte el nuevo codigo"))
            codes.set(newCode, codes.get(oldCode))
            codes.delete(oldCode)
            break
        }
    }
}
