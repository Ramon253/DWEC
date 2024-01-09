function deleteUnrepeted(arr) {
    //Sis usamos sort sin mas hara un sort como si fuesran string
    arr.sort((a, b) => (a - b))
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === arr[i + 1]) continue
        if (arr[i] === arr[i - 1]) continue

        arr.splice(i, 1)
    }
    return arr
}

console.log(deleteUnrepeted([1, 1, 1, 1, 332, 31, 31, 23, 131, 32, 1]))

