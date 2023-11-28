let getDiagonal = (matrix) => {
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (i === j) continue
            matrix[i][j] = 0
        }
    }
    return matrix
}
console.table(getDiagonal([
    [1,23,32],
    [3,34,435],
    [57,46,1]
]))