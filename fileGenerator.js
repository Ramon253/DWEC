const fs = require('fs')
const prompt = require('prompt-sync')();
const html = require('./htmlSample')
const colorsFile = require('./colors')
const colors = colorsFile.getColors();


const showMenu = () => {
    const inputMenu = `${colors.FgRed} \r[#]:${colors.FgWhite}`
    const menuText =
        `___________.__.__             ________                                   __                
\\_   _____/|__|  |   ____    /  _____/  ____   ____   ________________ _/  |_  ___________ 
 |    __)  |  |  | _/ __ \\  /   \\  ____/ __ \\ /    \\_/ __ \\_  __ \\__  \\\\   __\\/  _ \\_  __ \\
 |     \\   |  |  |_\\  ___/  \\    \\_\\  \\  ___/|   |  \\  ___/|  | \\// __ \\|  | (  <_> )  | \\/
 \\___  /   |__|____/\\___  >  \\______  /\\___  >___|  /\\___  >__|  (____  /__|  \\____/|__|   
     \\/                 \\/          \\/     \\/     \\/     \\/           \\/                   
----------------------------------------------------------------------------------------------`
    const options = ['HTML', 'JS', 'PHP', 'HTML and JS', 'HTML and CSS', 'QUIT']
    console.log(colors.FgCyan)
    console.log(menuText)

    let cont = 1
    console.log(colors.FgRed + colors.Underscore + '\tOPTIONS' + colors.Reset)
    for (let option of options) {
        console.log(`${colors.FgRed}\r\t # ${colors.FgBlue}${cont++} -->${colors.Reset} ${option}`)
    }

    console.log(''.padStart(10 + menuText.length, ''))
    let firstAnswer = prompt(inputMenu)
    if (parseInt(firstAnswer) >= 6) return -1

    let ownDir = false
    if (firstAnswer > 1) {
        console.log(`${colors.FgRed}\r #:${colors.FgGreen} Want to create directory foreach pair?`)
        ownDir = prompt(inputMenu).trim().toLowerCase() === 'y'
    }

    console.log(`${colors.FgRed}\r #:${colors.FgGreen} Number of files`)
    let fileNumber = prompt(inputMenu)

    console.log(`${colors.FgRed}\r #:${colors.FgGreen} Name of the files`)
    let fileName = prompt(inputMenu)

    console.log(`${colors.FgRed}\r #:${colors.FgGreen} Path`)
    let path = prompt(inputMenu)

    let i = 0
    if (path.trim().toLowerCase() === 'cd'|| path.trim().toLowerCase() === 'ls') {
        path = './'
        do {
            let dirs = getDirs(path)
            showDirMenu(dirs)
            let dir = prompt(inputMenu + path)

            if (isNaN(parseInt(dir))){
                path = dir
                break
            }

            dir = parseInt(dir)
            if (dir-2 >= dirs.length){
                console.log('# Inserta bien la ruta')
                continue
            }
            if (dir === 0) break
            if (dir === 1) {
                path += '../'
                continue
            }

            dir -= 2
            path += dirs[dir]
            path +=  '/'
        }while (parseInt(path) !== 0)
        path += prompt(inputMenu + path)
    }

    return {
        'firstAnswer': firstAnswer,
        'fileNumber': fileNumber,
        'fileName': fileName,
        'path': path,
        'ownDir': ownDir
    }
}

const mkdriCb = (err) => {
    if (err) console.error(err)
    console.log("Archivo creado con exito")
}
const createFiles = (answers) => {
    let firstAnswer = answers.firstAnswer
    let fileNumber = answers.fileNumber
    let fileName = answers.fileName
    let path = answers.path
    let ownDir = answers.ownDir

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
            if (!ownDir) {
                for (let i = 1; i <= fileNumber; i++) {
                    let dirPath = `${path}/${fileName}${i}`
                    fs.writeFile(`${dirPath}` + '.php', '', mkdriCb)
                }
                break
            }

            for (let i = 1; i <= fileNumber; i++) {
                let dirPath = `${path}/${fileName}${i}`
                let htmlSample = html.getHtml(fileName, i)

                fs.exists(dirPath, (err) => {
                    if (!err) {
                        fs.mkdir(`${dirPath}`, mkdriCb)
                        fs.writeFile(`${dirPath}/${fileName}${i}` + '.php', '', mkdriCb)
                        fs.writeFile(`${dirPath}/index` + '.php', htmlSample, mkdriCb)
                    }
                })
            }
            break
        }
        case '4' : {
            if (!ownDir) {
                for (let i = 1; i <= fileNumber; i++) {
                    let dirPath = `${path}/${fileName}${i}`
                    let htmlSample = html.getHtml(fileName, i, true)
                    fs.writeFile(`${dirPath}` + '.js', '', mkdriCb)
                    fs.writeFile(`${dirPath}` + '.html', htmlSample, mkdriCb)
                }
                break
            }
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
        case '5' : {
            if (!ownDir) {
                for (let i = 1; i <= fileNumber; i++) {
                    let dirPath = `${path}/${fileName}${i}`
                    let htmlSample = html.getHtml(fileName, i, false, true)
                    fs.writeFile(`${dirPath}` + '.css', '', mkdriCb)
                    fs.writeFile(`${dirPath}` + '.html', htmlSample, mkdriCb)
                }
                break
            }

            for (let i = 1; i <= fileNumber; i++) {
                let dirPath = `${path}/${fileName}${i}`
                let htmlSample = html.getHtml(fileName, i, false, true)

                fs.exists(dirPath, (err) => {
                    if (!err) {
                        fs.mkdir(`${dirPath}`, mkdriCb)
                        fs.writeFile(`${dirPath}/${fileName}${i}` + '.css', '', mkdriCb)
                        fs.writeFile(`${dirPath}/index` + '.html', htmlSample, mkdriCb)
                    }
                })
            }
            break

        }
    }
}
const showDirMenu = (dirs) =>{
    let biggestDir = 0

    dirs.forEach((dir)=>{biggestDir =(biggestDir > dir.length)?biggestDir:dir.length})
    console.log(colors.FgCyan)
    console.clear()
    console.log(''.padStart(biggestDir+ 20, '-'))
    console.log(`\t\t  Directories`)
    console.log(''.padStart(biggestDir+ 20, '-'))

    let i = 0
    console.log(`${colors.FgRed}\t#${colors.FgBlue} ${i++} -->${colors.FgRed} ./`)
    console.log(`${colors.FgRed}\r\t#${colors.FgBlue} ${i++} -->${colors.FgRed} ../`)
    dirs.forEach(file => console.log(`${colors.FgRed}\r\t#${colors.FgBlue} ${i++} -->${colors.FgGreen} ${file}`))
}
const getDirs = (curDir) => {
    let dirs = fs.readdirSync(curDir)

    for (let i = 0; i < dirs.length; i++) {
        if (dirs[i].charAt(0) === '.') {
            dirs.splice(i--, 1)
            continue
        }
        if (dirs[i].charAt(dirs[i].length - 5) === '.') {
            dirs.splice(i--, 1)
            continue
        }
        if (dirs[i].charAt(dirs[i].length - 4) === '.') {
            dirs.splice(i--, 1)
            continue
        }
        if (dirs[i].charAt(dirs[i].length - 3) === '.') {
            dirs.splice(i--, 1)
        }
    }
    return dirs
}

let answers = 0
while (answers !== -1) {
    answers = showMenu()
    if (answers === -1) break
    createFiles(answers)
    console.clear()
}



