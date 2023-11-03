const output = document.getElementById("output")
let answers = []
let types = ['number', 'number', 'string', 'string', 'boolean', 'boolean']
for (let i = 0; i < 6; i++) {
    const thisType = types[i]
    let answer = prompt(`Introduce ${thisType}`)

    switch (thisType) {
        case 'number': {
            answer = parseInt(answer)
            if (typeof answer !== "number" || isNaN(answer)) {
                answers = []
                i = -1
                alert("Incorrecto Introduce de nuevo los valores")
                break
            }

            answers.push(answer)
            break
        }
        case 'string' : {
            if (typeof answer !== "string") {
                answers = []
                i = -1
                alert("Incorrecto Introduce de nuevo los valores")
                break
            }
            answers.push(answer)
            break
        }
        case 'boolean' : {
            if (answer === "1") answer = true
            if (answer === "0") answer = false
            if (typeof answer !== "boolean") {
                answers = []
                i = -1
                alert("Incorrecto Introduce de nuevo los valores")
                break
            }
            answers.push(answer)
            break
        }
    }
}
console.log(answers)

let biggerStr = (answers[1].length >= answers[2].length) ? answers[1] : answers[2]
output.innerHTML += `El string mas largo es ${biggerStr} <br><br>`

output.innerHTML += `Booleans : <br>`
output.innerHTML += `    OR --> : ${answers[4] || answers[5]}<br>`
output.innerHTML += `    AND --> : ${answers[4] && answers[5]}<br>`

output.innerHTML += `Numbers : <br><br>`
output.innerHTML += `    SUM --> : ${answers[0] + answers[1]}<br>`
output.innerHTML += `    POW --> : ${answers[0] ** answers[1]}<br>`


let booleans = []
let strings = []
let numbers = []

for (const answer of answers) {
    switch (typeof answer) {
        case "number" : {
            numbers.push(answer)
            break
        }
        case "string": {
            strings.push(answer)
            break
        }
        case "boolean": {
            booleans.push(answer)
            break
        }
    }
}

if (!booleans[0]) {
    booleans[0] = booleans[1]
    booleans[1] = false
}

if (strings[1].length > strings[0].length) {
    let str = strings[1]
    strings[1] = strings[0]
    strings[0] = str
}
if (numbers[1] > numbers[0]) {
    let num = numbers[1]
    numbers[1] = numbers[0]
    numbers[0] = num
}

let finalArr = []

for (const boolean of booleans) finalArr.push(boolean)
for (const string of strings) finalArr.push(string)
for (const number of numbers) finalArr.push(number)

console.log(finalArr)

for (const finalArrElementKey in finalArr) {
    output.innerHTML += `<br> ${finalArrElementKey}: ${finalArr[finalArrElementKey]}`
}
