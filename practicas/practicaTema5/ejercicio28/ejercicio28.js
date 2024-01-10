let regex = /^[0 1][0-9]|2[0-3]:[0-5][0-9]/
console.log(regex.test("22:15"))
console.log(regex.test("24:15"))
console.log(regex.test("20:65"))