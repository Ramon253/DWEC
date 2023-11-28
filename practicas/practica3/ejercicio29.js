function sortNumbers(numbers) {
    numbers.sort((a, b) => {
        let aPos = 0
        let bPos = 0

        if (a === b) return 0
        if (a % 10 === 0) aPos++;
        if (b % 10 === 0) bPos++;

        if (bPos === aPos) return b - a

        return bPos - aPos
    })
    return numbers
}

console.table(sortNumbers([1,29,20,21,54,10,60,66, 80, 90]))