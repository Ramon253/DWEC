//Fetch a la API
//cuando llega la respuesta se ejecuta la funcion que introduzcas en el then
fetch('https://dogapi.dog/api/facts?number=5')
    //hay que usar .json() que dvuelve una promesa
     .then(res =>  res.json()) // === res => {return res.json()})
    //ya el json que llega como parametro es el json con toda la info, lo dentro de esto haz lo que quieras con la info
     .then(json => handler(json))


function handler(json){

    console.log(json)//esto vale
    //Con esto sacas las cosas como clave : valor
    //Sobre toodo es util usando el .innerHtml += `${jsonKey} : ${json[jsonKey]}`
    for (const jsonKey in json) {
        console.log(`${jsonKey} : ${json[jsonKey]}`)
    }
}


//Esto es lo mismo que usar fetch.then
async function miFetch(){
    console.log()
    // en vz de ejecutar en callback cuando llegue la request hace que no se ejecute nada mas dentro de esta funcion hasta llegue la request
     let res = await fetch('https://dogapi.dog/api/facts?number=5')
     let json = await res.json()
     handler(json)
 }
 miFetch()

//Ejemplo simple de convertir setTimeout con promesas
async function timeout(time) {
    return new Promise((resolve, reject) =>{
        if (time >= 5000) reject('No puedes hacer timeout de mas de 5 segundos');

        setTimeout(() => {
            resolve('Hola')
        }, time)
    })
}
