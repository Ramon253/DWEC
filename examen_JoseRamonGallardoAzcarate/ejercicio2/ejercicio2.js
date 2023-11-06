const modules = new Map()
const output = document.getElementById("output")
modules.set(0,new Map().set("abreviation", "DAW").set("fullName", "Despliegue de aplicaciones web"))
modules.set(1,new Map().set("abreviation", "DIW").set("fullName", "Diseño de interfaces wen"))
modules.set(2,new Map().set("abreviation", "DWEC").set("fullName", "Desarrollo web de entorno  cliente"))
modules.set(3,new Map().set("abreviation", "DWES").set("fullName", "Desarrollo web de entorno servidor"))
console.log(modules)

output.innerText = `(A) Numero de elementos es ${modules.size} \n`
output.innerText += `\n(B) Contenido \n`
for (let i = 0; i < modules.size; i++) {
    output.innerText +=''.padStart(6,'  ') +  modules.get(i).get("abreviation") + " --> " + modules.get(i).get("fullName") + '\n'
}

output.innerText += `\n(C) Abreviaturas \n`
for (let i = 0; i < modules.size; i++) {
    output.innerText +=''.padStart(6,'  ') +  modules.get(i).get("abreviation")+'\n'
}

output.innerText += `\n(C) Nombre \n`
for (let i = 0; i < modules.size; i++) {
    output.innerText +=''.padStart(6,'  ') +  modules.get(i).get("fullName")+'\n'
}

for (let i = 0; i < modules.size; i++) {
    if (modules.get(i).get("abreviation") === "DAW") {
        modules.get(i).set("fullName", modules.get(i).get("fullName") + "2")
    }
}

output.innerText += `\n(D) Contenido despues de la primera actualizacion \n`
for (let i = 0; i < modules.size; i++) {
    output.innerText +=''.padStart(6,'  ') +  modules.get(i).get("abreviation") + " --> " + modules.get(i).get("fullName") + '\n'
}

output.innerText += `\n(E) Contenido despues de la segunda actualizacion \n`
for (let i = 0; i < modules.size; i++) {
    output.innerText +=''.padStart(6,'  ') +  modules.get(i).get("abreviation") + " --> " + modules.get(i).get("fullName") + '\n'
}

modules.set("0",null)
console.log(modules.delete("0"))
console.log(modules)

