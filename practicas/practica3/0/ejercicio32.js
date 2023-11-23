function shareLetter(word1, word2) {
    word1 = word1.toLowerCase().replaceAll(' ', '')
    word2 = word2.toLowerCase().replaceAll(' ', '')

    word1 = [...word1]
    word2 = [...word2]
    word1.sort()
    word2.sort()
    console.log(word1)
    console.log(word2)

    return word1.every((element, index) => element === word2[index])
}

console.log(shareLetter("   Hola       ", " a   l   h o"))