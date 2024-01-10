let dateHandler = {
    dateDiff: function (date1, date2) {
        //La diferencia esta en milisegundos asi que lo divido en 1000 para pasar  segundos 3600 para horas y 24 para dias
        return Math.round(((Math.abs(date1 - date2) / 1000) / 3600) / 24)
    },
    maxDate: function (date1, date2) {
        return (date1 - date2 <= 0) ? date2 : date1;
    },
    testDate : function (date){
        return !isNaN(new Date(date))
    },
    yesterdayDate : function (date) {
        let result = new Date(date);
        result.setDate(result.getDate() -1)
        return result;
    },
    tomorrowDate : function (date) {
        let result = new Date(date);
        result.setDate(result.getDate() +1)
        return result;
    }
}

const d = new Date("2023-01-10");
let diff = dateHandler.dateDiff(d, new Date())
let maxDate = dateHandler.maxDate(d, new Date())

console.log(diff)
console.log(maxDate)

console.log(dateHandler.testDate("2023-01-10"))
console.log(dateHandler.testDate("25-25-25"))

console.log(dateHandler.yesterdayDate(d))
console.log(dateHandler.tomorrowDate(d))
