
fetch('https://dogapi.dog/api/facts?number=5')
     .then(res =>  res.json())
     .then(json => {
         console.log(json)
         console.log('hola')
     })

 async function miFetch(){
     let res = await fetch('https://dogapi.dog/api/facts?number=5')
     let json = await res.json()
     console.log(json)
     console.log('hola')
 }
 miFetch()
async function timeout(time) {
    return new Promise((resolve, reject) =>{
        if (time >= 5000) reject('No puedes hacer timeout de mas de 5 segundos');

        setTimeout(() => {
            resolve('Hola')
        }, time)
    })
}
