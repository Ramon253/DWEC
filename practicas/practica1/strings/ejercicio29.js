function locate(str, substr){
    return str.includes(substr)
}

console.log(locate("Hola mundo", "mun"))
console.log(locate("Hola mundo", "Mun"))