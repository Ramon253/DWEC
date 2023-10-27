function productArr(nums){
    let result = 1
    for (const num of nums) {
        result *= num
    }
    return result
}

console.log(productArr([2,352,354]))