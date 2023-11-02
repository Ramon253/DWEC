let prueba = [null, NaN, 12, 2, 1, 212, "dksakdasdp", 0, false, "a", "na", "z", undefined, ""]

function cleanArray(arr) {
    for (let arrKey = 0; arrKey < arr.length; arrKey++) {
        switch (typeof arr[arrKey]) {

            case "object": {
                if (arr[arrKey] === null) {
                    arr.splice(arrKey, 1)
                    arrKey--
                }
                break
            }

            case "number": {
                if (arr[arrKey] === 0) {
                    arr.splice(arrKey, 1)
                    arrKey--
                    break
                }
                if (isNaN(arr[arrKey])) {
                    arr.splice(arrKey, 1)
                    arrKey--
                    break
                }
                break
            }

            case "string" : {
                if (arr[arrKey] === "") {
                    arr.splice(arrKey, 1)
                    arrKey--
                }
                break
            }

            case "boolean" : {
                if (!arr[arrKey]) {
                    arr.splice(arrKey, 1)
                    arrKey--
                }
                break
            }

            case "undefined" : {
                arr.splice(arrKey, 1)
                arrKey--
            }
        }
    }

    return arr
}

function cleanArray2(arr){
    let cleanedArr = []
    for (const arrElement of arr) {
        if (arrElement)
            cleanedArr.push(arrElement)
    }
    return cleanedArr
}

let prueba2 = cleanArray2(prueba)
for (const pruebaElement of prueba2) {
    console.log(pruebaElement)
}