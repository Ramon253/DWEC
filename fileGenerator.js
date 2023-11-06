const fs = require('fs')
const prompt = require('prompt-sync')();
const html = require('./htmlSample')
const colorsFile = require('./colors')
const colors = colorsFile.getColors();

const mkdriCb = (err) => {
    if (err) console.error(err)
    console.log("Archivo creado con exito")
}

const showMenu = () => {
    const inputMenu = `${colors.FgRed} \r[#]: ${colors.FgWhite}`
    const menuText =
`___________.__.__             ________                                   __                
\\_   _____/|__|  |   ____    /  _____/  ____   ____   ________________ _/  |_  ___________ 
 |    __)  |  |  | _/ __ \\  /   \\  ____/ __ \\ /    \\_/ __ \\_  __ \\__  \\\\   __\\/  _ \\_  __ \\
 |     \\   |  |  |_\\  ___/  \\    \\_\\  \\  ___/|   |  \\  ___/|  | \\// __ \\|  | (  <_> )  | \\/
 \\___  /   |__|____/\\___  >  \\______  /\\___  >___|  /\\___  >__|  (____  /__|  \\____/|__|   
     \\/                 \\/          \\/     \\/     \\/     \\/           \\/                   
----------------------------------------------------------------------------------------------`
    const options = ['HTML', 'JS', 'PHP', 'HTML and JS', 'HTML and CSS', 'QUIT']
    console.log(colors.FgBlue)
    console.log(menuText)

    let cont = 1
    console.log(colors.FgRed + '\tOPTIONS')
    for (let option of options) {
        console.log(`${colors.FgRed}\r\t# ${colors.FgGreen}${cont++} --> ${option}`)
    }

    console.log(''.padStart(10 + menuText.length, ''))
    let firstAnswer = prompt(inputMenu)
    if (parseInt(firstAnswer) >= 6) return -1

    console.log(`# Numero de archivos `)
    let fileNumber = prompt(inputMenu)

    console.log('# Nombre de la tarea')
    let fileName = prompt(inputMenu)

    console.log('# Ruta')
    let path = prompt(inputMenu)

    return {
        'firstAnswer': firstAnswer,
        'fileNumber': fileNumber,
        'fileName': fileName,
        'path': path
    }
}

const createFiles = (answers) => {
    let firstAnswer = answers.fileType
    let fileNumber = answers.fileNumber
    let fileName = answers.fileName
    let path = answers.path

    try {
        if (!fs.existsSync(path)) {
            fs.mkdir(path, mkdriCb)
        }
    } catch (e) {
        console.error(e)
    }

    switch (firstAnswer) {
        case '1' : {
            for (let i = 1; i <= fileNumber; i++) {
                let htmlSample = html.getHtml(fileName, i)
                console.log(htmlSample)
                fs.writeFile(`${path}/${fileName}${i}.html`, htmlSample, mkdriCb)
                fs.writeFile(`${path}/${fileName}${i}.html`, htmlSample, mkdriCb)
            }
            break
        }
        case '2' : {
            for (let i = 1; i <= fileNumber; i++) {
                fs.writeFile(`${path}/${fileName}${i}.js`, '', mkdriCb)
            }
            break
        }
        case '3' : {
            for (let i = 1; i <= fileNumber; i++) {
                let dirPath = `${path}/${fileName}${i}`
                let htmlSample = html.getHtml(fileName, i, true)

                fs.exists(dirPath, (err) => {
                    if (!err) {
                        fs.mkdir(`${dirPath}`, mkdriCb)
                        fs.writeFile(`${dirPath}/${fileName}${i}` + '.js', '', mkdriCb)
                        fs.writeFile(`${dirPath}/index` + '.html', htmlSample, mkdriCb)
                    }
                })

            }
            break
        }
    }
}

let answers
while (answers !== -1) {
    answers = showMenu()
    if (answers === -1) break
    createFiles(answers)
    console.clear()
}
