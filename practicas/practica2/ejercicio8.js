/*Apartado A*/
/*------------------------------------------------------*/
function dateDiff(date1, date2){
    date1 = new Date(date1).getTime()
    date2 = new Date(date2).getTime()

    let dateDiff = date1 - date2

    return dateDiff/(1000*60*60*24)
}

console.log(dateDiff("2022-1-2","2020-1-01"))
/*------------------------------------------------------*/
/*Apartado B*/
/*Esta funcion la he hecho en el ejercicio 6, solo es para ahorar codigo*/
function higherNum(nums) {
    let higher = 0
    for (let number of nums) {
        higher = (higher > number) ? higher : number
    }
    return higher
}

function mostRepeted(arr){
    let seenElements = []
    let timesSeen = []

    for (let arrElement of arr) {
        if (seenElements.includes(arrElement)){
            timesSeen[seenElements.indexOf(arrElement)] ++
            continue
        }
        seenElements.push(arrElement)
        timesSeen[seenElements.length -1] = 1
    }
    return seenElements[timesSeen.indexOf(higherNum(timesSeen))]
}
let x =  mostRepeted([ 1,23,54,23,524,23,"Hola", "Hola"])
console.log(x)
/*------------------------------------------------------*/