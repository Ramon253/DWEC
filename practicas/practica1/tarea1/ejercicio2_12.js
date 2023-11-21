let cont = 0
for (let i = 0; i < 100; i++) {
    if (i%7 === 0){
        console.log(` ${i} `)
        cont++
    }
}
console.log("Entre el 0 y 100 el 7 tiene " + cont + " multiplos")