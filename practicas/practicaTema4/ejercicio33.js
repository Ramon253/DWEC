const accents = [241, 250, 243, 237, 233, 225]

function toEsp(text) {
    text = text.toLowerCase().replaceAll(" ", "")
    text = [...text]
    text = text.filter((element) => {
        if (element.charCodeAt(0) < 97) return true;
        if (element.charCodeAt(0) > 122) {
            return !accents.includes(element.charCodeAt(0))
        }
        return false;
    })
    return text
}

console.log(toEsp("Hola que tal el año ??? aáá eçeççççèèè"))