const getWordReverse = function (word){
    //separo en un array
    let wordToArr = word.split("")

    let result = ""
    //lo recorro y agrego a otro string con .pop hasta que se elimine el arra opriginal
    while (wordToArr.length !== 0){
        result += wordToArr.pop()
    }
    return result
}

alert(getWordReverse(prompt("Introduce una palablra")))