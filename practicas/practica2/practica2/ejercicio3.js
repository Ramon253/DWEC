function deleteRepeted(arr) {
    //Sis usamos sort sin mas hara un sort como si fuesran string
    arr.sort((a, b) => (a - b))
    for (let i = 0; i < arr.length; i++) {
        while (arr[i] === arr[i + 1]) {
            arr.splice(i + 1, 1)
        }
    }
    return arr
}

console.log(deleteRepeted([1, 1, 1, 1, 332, 31, 31, 23, 131, 32, 1]))

