function higherNum(nums) {
    let higher = 0
    for (let number of nums) {
        higher = (higher > number) ? higher : number
    }
    return higher
}

let x = higherNum([1,2,2,13,131,555,312,52,])
console.log(x)