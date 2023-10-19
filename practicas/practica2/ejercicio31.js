function higherNum(num1, num2, num3) {
    let higher = (num1 > num2) ? num1 : num2
    return (higher > num3) ? higher : num3
}

console.log(higherNum(1,3,220))

/*Apartado B*/
function remove(arr, element) {
    arr.splice(arr.indexOf(element),1)
    return arr
}

console.log(remove([1,2,2433,21,12,"Hola"],"Hola"))