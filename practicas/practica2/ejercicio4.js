/*Apartado A*/
/*-------------------------------------*/
function a(arr){
    let sum = 0

    for (let number of arr) {
        sum += number
    }
    return sum
}
/*-------------------------------------*/
/*-------------Apartado B--------------*/
function getMonthName(month, year){
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    /*La el constructor de date pide como parametros en este
    * orden "año","mes", "dia", el mes lo toma de 0 a 11, si ponemos 0 como
    * el dia hace que la fecha tome como dia el ultimo dia del mes anterior, y
    * como queremos que como parametro noviembre por ejemplo sea el mes 11 si ponemos
    * 11 (que seria diciembre) el -1 en el dia toma el mes enterior y asi tambien tenemos
    * el numero de dias de cada mes*/
    let date = new Date(year, month,0)
    return `${months[date.getMonth()]} Tiene ${date.getDate()} dias`
}

console.log(getMonthName(12, 2022))
/*-------------------------------------*/