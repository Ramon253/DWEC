function paintPattern(size) {
    if (size % 2 === 0) size++
    let half = parseInt(size/2)


    for (let i = 0; i < half; i++) {
        let line = "x"
        line = line.padStart(i  +1, " ")
        line = line.padEnd(size-i -1, " ")
        line += "x"
        console.log(line)
    }
    console.log("x".padStart(half +1))
    for (let i = half; i > 0; i--) {
        let line = "x"
        line = line.padStart(i , " ")
        line = line.padEnd(size-i, " ")
        line += "x"
        console.log(line)
    }
}

paintPattern(11)