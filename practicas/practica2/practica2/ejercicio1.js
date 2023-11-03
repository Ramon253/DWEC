function fibonacci(size) {
    let sequence = [0, 1]

    for (let i = sequence.length; i < size; i++) {
        sequence[i] = sequence[i - 1] + sequence[i - 2]
    }
    return sequence
}



console.log(fibonacci(15))

