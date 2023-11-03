const fs = require('fs')
const prompt = require('prompt-sync')();
const html = require('./htmlSample')
const mkdriCb = (err) => {
    if (err) console.error(err)
    console.log("Archivo creado con exito")
}

const showMenu = () => {
    const inputMenu = '[#]: '
    const menuText = 'HTML y JS'
    console.log(''.padStart(20 + menuText.length, '#'))
    console.log('#' + ''.padStart(9, ' ') + menuText + ''.padStart(9, ' ') + '#')
    console.log(''.padStart(20 + menuText.length, '#'))

    console.log(' # 1 --> HTML')
    console.log(' # 2 --> JS')
    console.log(' # 3 --> HTML y JS')
    console.log(' # 4 --> SALIR')

    console.log(''.padStart(10 + menuText.length, '-'))
    let fileType = prompt(inputMenu)
    if (fileType >= 4) return -1

    console.log('# Numero de archivos')
    let fileNumber = prompt('[#]: ')

    console.log('# Nombre de la tarea')
    let fileName = prompt(inputMenu)

    console.log('# Ruta')
    let path = prompt(inputMenu)

    return {
        'fileType': fileType,
        'fileNumber': fileNumber,
        'fileName': fileName,
        'path': path
    }
}

const createFiles = (answers) => {
    let fileType = answers.fileType
    let fileNumber = answers.fileNumber
    let fileName = answers.fileName
    let path = answers.path

    try {
        if (!fs.existsSync(path)){
            fs.mkdir(path,mkdriCb)
        }
    }catch (e) {
        console.error(e)
    }

    switch (fileType) {
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

                try {
                    fs.exists(dirPath, (err) => {
                        if (!err) {
                            fs.mkdir(`${dirPath}`, mkdriCb)
                            fs.writeFile(`${dirPath}/${fileName}${i}` + '.js', '', mkdriCb)
                            fs.writeFile(`${dirPath}/index` + '.html', htmlSample, mkdriCb)
                        }
                    })
                } catch (err) {
                    console.error(err)
                }
            }
            break
        }
    }
}

let answers
while (answers !== -1){
    answers = showMenu()
    if (answers === -1) break
    createFiles(answers)
    console.clear()
}
