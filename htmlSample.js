exports.getHtml = (fileName, fileNumber, script = false) => {
    const html = `<!Doctype html>
<html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta name="viewport"
    content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>${fileName}${fileNumber}</title>
</head>
<body>`
    let scriptTag = ""
    if (script){
        scriptTag += `<script src="${fileName}${fileNumber}.js"></script>`
    }

    return html + scriptTag +`
</body>
</html>`
}

