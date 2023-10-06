let date = new Date()

let month = date.getMonth() + 1
let remainingMonth = 12 - month

let day = date.getDay() + 1
let remainingDays = 25 - day

console.log(remainingDays)
let output = document.getElementById("output")
if (remainingMonth === 0){
    if (remainingDays < 0){
        remainingDays = 31 + remainingDays
        output.innerHTML = "Quedan 11 meses y " + remainingDays +  " dias para navidad"
    }else {
        output.innerHTML = `Quedan ${remainingDays} dias para navidad `
    }
}else {
    if (remainingDays < 0){
        remainingMonth --
        remainingDays = 31 + remainingDays
    }
    output.innerHTML = `Quedan ${remainingMonth} meses y ${remainingDays} dias para navidad`
}
