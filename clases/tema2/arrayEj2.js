let arrayEj2 = []
let cont = 0

while (cont < 10){
    arrayEj2.push(Math.round(Math.random()) === 0)
    cont++
}
cont = 0

while (cont < arrayEj2.length){
    if (arrayEj2[cont])
        console.log(cont)
    cont ++
}
console.log("\n\n")
/*Forma sin whiles como for*/

let lastIndex  = -1

while (arrayEj2.includes(true)){
    if (lastIndex === arrayEj2.lastIndexOf(true)){
        arrayEj2.pop()
        continue
    }
    lastIndex = arrayEj2.lastIndexOf(true)
    arrayEj2.pop()
    console.log(lastIndex)
}