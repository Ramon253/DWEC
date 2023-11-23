function calc(...numbers) {
    if (numbers.length < 4) return "Introduce al menos 4 parametros "
    let sum = numbers.reduce((acc, actualValue) => {
        return acc + actualValue;
    })

    return {
        "sum": sum,
        "avg": sum / numbers.length,
        "mult": numbers[0] * numbers.pop(),
        "div" : numbers[1] / numbers.pop()
    }
}

console.table(calc(10, 21, 3, 2, 223, 2, 32))