function matrixDiff(matrix1, matrix2){
    let matrixResult = [[],[],[],[]]
    for (let i = 0; i <matrix1.length; i++) {
        for (let j = 0; j < matrix1[0].length; j++) {
            if (matrix1[i][j] === matrix2[i][j])  continue
            matrixResult[i][j] = 0
        }
    }
    return matrixResult
}

let matrix1 = [
    [1441,3243,4,21],
    [34,25,455,455],
    [3,543424,234,2],
    [4,545,5,54]
]
let matrix2 = [
    [1441,3243,4,21],
    [34,25,5,455],
    [3,543424,234,2],
    [4,545,5,54]
]
console.log(matrixDiff(matrix1, matrix2))