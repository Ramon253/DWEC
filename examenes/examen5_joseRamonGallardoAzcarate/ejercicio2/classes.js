class Hotel {
    _name;
    _ubication;
    _stars;
    _pricePerRoom;
    _doubleRooms;
    _reservedRooms;
    ageRange;

    constructor(name, ubication, stars, pricePerRoom, doubleRooms, reservedRooms, ageRange) {
        this._name = name;
        this._ubication = ubication;
        this._stars = stars;
        this._pricePerRoom = pricePerRoom;
        this._doubleRooms = doubleRooms;
        this._reservedRooms = reservedRooms;
        this.ageRange = ageRange;
    }

    #compareDates(date1, date2) {
        //Compruebo las fechas asi en vez de restarlas y mirar los milisegundos de diferencia porque depende de la hora de la reserva
        //si se reserve en dias distintos la diferencia de ms puede ser inferior a la de 1 dia, por lo que esta forma no deberia de fallar y por ende ser mas precisa
        date1 = {
            date: date1.getDate(),
            month: date1.getMonth(),
            year: date1.getFullYear()
        }
        date2 = {
            date: date2.getDate(),
            month: date2.getMonth(),
            year: date2.getFullYear()
        }
        return ((date2.date === date1.date) && (date2.month === date1.month) && (date2.year === date1.year))
    }

    getFreeRooms(date) {
        let reservedRooms = 0;
        for (const reservedRoomsKey in this.reservedRooms) {
            //si son la misma fecha aumenta el numero de reserved rooms
            if (this.#compareDates(date, this._reservedRooms[reservedRoomsKey].date))
                reservedRooms++;
        }
        return this._doubleRooms - reservedRooms;
    }

    reserve(date, client) {
        let roomsLeft = this.getFreeRooms(date)
        if (client.age < this.ageRange[0] || client.age > this.ageRange[1]) {
            console.log({Error: "The age you have is not allowed"})
            return false;
        }
        if (roomsLeft === 0) {
            console.log({Error: "No rooms left on that date"})
            return false;
        }

        this._reservedRooms.push({date, client})
    }

    cancelReserve(date) {
        for (const reservedRoomsKey in this._reservedRooms) {
            if (this.#compareDates(date, this._reservedRooms[reservedRoomsKey].date)) {
                this._reservedRooms.splice(reservedRoomsKey, 1)
                return true
            }
            console.log({Error: "No reservation found on that date"})
            return false;
        }
    }

    getFinalPrice() {
        //son los porcentajes de aumento con cada estrella
        let stars = [0, 0.02, 0.05, 0.07, 0.1, 0.15]
        return this._pricePerRoom + (this._pricePerRoom * stars[this._stars])
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get ubication() {
        return this._ubication;
    }

    set ubication(value) {
        this._ubication = value;
    }

    get stars() {
        return this._stars;
    }

    set stars(value) {
        this._stars = value;
    }

    get pricePerRoom() {
        return this._pricePerRoom;
    }

    set pricePerRoom(value) {
        this._pricePerRoom = value;
    }

    get doubleRooms() {
        return this._doubleRooms;
    }

    set doubleRooms(value) {
        this._doubleRooms = value;
    }

    get reservedRooms() {
        return this._reservedRooms;
    }

    set reservedRooms(value) {
        this._reservedRooms = value;
    }
}

class Client {
    name;
    surname;
    dni;
    age;


    constructor(name, surname, dni, age) {
        this.name = name;
        this.surname = surname;
        this.dni = dni;
        this.age = age;
    }
}

class Entrepreneur {
    _hotels;
    _companyCode;

    #testCode(code) {
        const companyCodeRegex = /[A-Z][a-z]{2}-[1-9]{5}\.\//
        return (companyCodeRegex.test(code)) ? code : false
    }

    constructor(hotels, companyCode) {
        if (!this.#testCode(companyCode))
            return {Error: "Use a valid company code"}

        this._hotels = hotels;
        this._companyCode = companyCode;
    }
    checkHotel(name){
        for (const hotelsKey in this._hotels) {
            if (hotels[hotelsKey].name === name) return true
        }
        return false;
    }

    get hotels() {
        return this._hotels;
    }

    set hotels(value) {
        this._hotels = value;
    }

    get companyCode() {
        return this._companyCode;
    }

    set companyCode(code) {
        if (!this.#testCode(code)) {
            console.log({Error: "Use a valid company code"})
            return;
        }
        this._companyCode = value;
    }
}

let hotels = [
    new Hotel("Hotel1", "el pto santa maria", 3, 50, 10, [],[18, 25]),
    new Hotel("Hotel2", "el pto santa maria", 4, 70, 10, [], [26, 35]),
    new Hotel("Hotel3", "el pto santa maria", 5, 100, 20, [], [36, 80])
]

//Not valod
let empresario = new Entrepreneur(hotels, "Cad-123123./")
//valid
let mario = new Entrepreneur(hotels, "Cad-12323./")
console.log(empresario)
console.log(mario)
console.log(mario.hotels)
console.log(mario.checkHotel("EL pto"))
console.log(mario.checkHotel("Hotel1"))
let client = new Client("Pedro", "Gallardo", "45339253c",  28)
console.log(mario.hotels[1].reserve(new Date(), client))
console.log(mario.hotels[0].reserve(new Date(), client))
console.log(mario.hotels[1].getFreeRooms(new Date()))
console.log(mario.hotels[1].getFinalPrice())
console.log(mario.hotels[1].cancelReserve(new Date()))