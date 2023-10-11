let date = new Date()

//le sumo 1 porque el mes lo cuenta desde 0 y no 1
let month = date.getMonth() + 1
let remainingMonth = 12 - month

let day = date.getDate()

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
