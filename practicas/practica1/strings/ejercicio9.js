let string = "Hola que tal este es un texto de ejemplo"

function toUpper(string) {
    words = string.split(" ")
    string = ""
    for (let word of words) {
        word = word.charAt(0).toUpperCase() + word.substring(1)
        string += word + " "
    }

    console.log(string)
}

toUpper(string);