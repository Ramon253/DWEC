const multTable = (num) => {
    let result = []
    for (let i = 0; i <= 10; i++) {
        result.push(num * i)
    }
    return result
}

console.table(multTable(5))