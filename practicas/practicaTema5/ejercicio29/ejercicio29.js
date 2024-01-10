let regex = /^(https:\/\/)[^ñ]+(.es)$/i
console.log(regex.test("https://urldeprueba.es"))
console.log(regex.test("https://urldepruebaespaña.es"))