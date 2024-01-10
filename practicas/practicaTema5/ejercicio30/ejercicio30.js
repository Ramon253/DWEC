function escapeHTML(text) {
    let replacements = [[/&/g, "&amp"],[/"/g, "&quot"], [/</g, "&lt"], [/>/g, "&gt"]]
    replacements.forEach((element) =>{
        text = text.replace(element[0],element[1])
    })
    return text;
}

console.log(escapeHTML('<p> " hola & adios" </p>'))