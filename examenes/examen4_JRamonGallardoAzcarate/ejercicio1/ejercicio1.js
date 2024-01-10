/*Esta funcion se encarga de que el usuario nos pase con el prompt las palabras*/
function getWordsFromUser() {
    let words = [];
    let numWords = prompt("Cuantas palabras va a introducir? (minimo 8)")
    /*Si se indican menos de 8 palabras o no es munerico se tomara 8 palabras como base*/
    if (isNaN(numWords) || numWords < 8){
        numWords = 8;
    }

    /*Pido cada palabra y la meto al array con la funcion .trim()*/
    for (let i = 0; i < numWords; i++) {
        let word = prompt("Introduce las palabras de minimo 6 caracteres");
        word = word.trim().toUpperCase();
        //si la palabra es invalida la pide de nuevo
        if (!checkWord(word)) {
            i--;
            alert("Palabra invalida introducerla de nuevo")
            continue;
        }
        words.push(word)
    }
    return words;
}

//Funcion para comprobar que se han introducido palabras correctas
const checkWord = (word) => {
    //compruebo que tenga 6 chars
    if (word.length < 6) return false
    //compruebo que no tenga espacios (los de los lados los he eliminado con la func trim())
    return (word.indexOf(" ") === -1)
}

/*Funcion que inicia el juego y tendra la logica del juego*/
const startGame = () => {
    let words = getWordsFromUser()

    console.log(words)
    //Busco un numero aleatorio del 0 al numero de palabras para obtener una palabra aleatoria
    let word = Math.floor(Math.random() * words.length)
    word = words[word]

    //Pido la palabra, le quito los espacios y lo pongo en mayusculas
    let userWord;
    let cont = -1;
    let hint = ""
    let hasWon;
    do {
        //Si es la primera iteracion no hay pista
        if (cont === -1) {
            userWord = prompt(`Intnenta adivinar la palabra`).toUpperCase().trim();
            cont++;
            continue;
        }
        //Si es la ultima iteracion y pierde
        if (cont === word.length - 1) {
            alert(`La palabra es ${word}, has Perdido `)
            return false
        }

        //logica del juego

        hint += word[cont];
        let userWord = prompt(`Intnenta adivinar la palabra Pista : ${hint}`).toUpperCase().trim();
        hasWon = word === userWord
        //si ha ganado saca por pantalla
        if (hasWon) {
            alert(`Enhorabuena has ganado, la palabra era ${word}`)
        }
        cont++;
    } while (!hasWon)
    //aqui solo llegua si gana el usuario
    return true;
}

startGame()