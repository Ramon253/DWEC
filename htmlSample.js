exports.getHtml = (fileName, fileNumber, script = false,css = false) => {
    let html = `<!Doctype html>
<html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta name="viewport"
    content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">`

    if (css){
        html += `<link rel="stylesheet" href="${fileName}${fileNumber}.css">`
    }

    html += `
<title>${fileName}${fileNumber}</title>
</head>
<body>`

    if (script){
        html += `<script src="${fileName}${fileNumber}.js"></script>`
    }
    return html+ `
</body>
</html>`
}

