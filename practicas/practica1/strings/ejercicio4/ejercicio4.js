let form = document.getElementById("input")
let output = document.getElementById("output")

form.addEventListener("submit", (e) => {
    e.preventDefault()
    let text = document.getElementById("str").value
    let numChars = parseInt(document.getElementById("numChars").value)
    let startChar = parseInt(document.getElementById("startingChar").value)

    if (isNaN(startChar)){
        startChar = 0
    }
    let result =""
    let charsCounted = 0
    //Forma facil
/*    output.innerHTML = text.substring(startChar, numChars + startChar)*/

    /*Forma Bucles*/
    for (const char in text) {
        if (startChar > char)
            continue
        if (numChars <= charsCounted)
            break
        result += text.charAt(parseInt(char))
        charsCounted ++
    }

    output.innerHTML = result
})
