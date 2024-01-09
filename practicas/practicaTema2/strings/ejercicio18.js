function findStr(str, subStr){
    let iterator = str.matchAll(subStr)
    let count = 0

    for (const resultElement of iterator) {
        count++
    }

    return count
}

let x = findStr("hola,23,dw,eewr,f,s,f,sf,e",",")
console.log(x)