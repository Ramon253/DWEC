function insert(text,addition, char = 1){
    let resultText1 = text.substring(0,char - 1)
    let resultText2 = text.substring(char-1)

    return `${resultText1} ${addition} ${resultText2}`
}

console.log(insert("Hola que tal estas", "Tu",3))