const fs = require('fs')
const prompt = require('prompt-sync')

fs.mkdir('./adios', (err) =>{ if (err) console.error(err)})