let colors = [['Naranja', "#F39C12"],["Lima","#C0F312"], ["Turquesa", "#12F3E5"],["Rosa","#F312AF" ], ["Rojo", "#F31212"]]

function changeColor(color) {
    let element = document.getElementById("mainElement")

    for (let colorsKey in colors) {
        if (colors[colorsKey][0] == color){
            element.style.backgroundColor = colors[colorsKey][1]
            return
        }
    }
}