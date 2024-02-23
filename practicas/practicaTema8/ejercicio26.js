let geoloc = {}

export function getLongitud ()
{
    let pos
    navigator.geolocation.getCurrentPosition(position => {
        pos = position.coords.longitude
        console.log(pos)
    })
}

export function getLatitude(){
    let pos
    navigator.geolocation.getCurrentPosition(position => {
        pos = position.coords.latitude
        console.log(pos)

    })
}

export function getAltitude(){
    let pos
    navigator.geolocation.getCurrentPosition(position => {
        pos = position.coords.altitude
        console.log(pos)
    })

}

export function askPermission(){
    //Solo con llamar a la funcion pide permisos as que lo unico que hago es llamarla
    navigator.geolocation.getCurrentPosition(() => {})
}