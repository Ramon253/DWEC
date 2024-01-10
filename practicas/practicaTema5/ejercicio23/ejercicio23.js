class Club {
    _yearFounded;
    _numPartners;
    _stadiumName;
    _city;
    _winnersList = [];

    constructor(yearFounded, numPartners, stadiumName, city, winnersList) {
        this._yearFounded = yearFounded;
        this._numPartners = numPartners;
        this._stadiumName = stadiumName;
        this._city = city;
        this._winnersList.push(winnersList);
    }
    seeClub(){
        console.log(this)
    }
    get yearFounded() {
        return this._yearFounded;
    }

    set yearFounded(value) {
        this._yearFounded = value;
    }

    get numPartners() {
        return this._numPartners;
    }

    set numPartners(value) {
        this._numPartners = value;
    }

    get stadiumName() {
        return this._stadiumName;
    }

    set stadiumName(value) {
        this._stadiumName = value;
    }

    get city() {
        return this._city;
    }

    set city(value) {
        this._city = value;
    }

    get winnersList() {
        return this._winnersList;
    }

    set winnersList(value) {
        this._winnersList.push(value) ;
    }
}
//0 params
let myClub = new Club();
myClub.seeClub()
myClub.city = "El puerto de santa Maria"
myClub.seeClub()

//1 param
myClub = new Club(2001)
myClub.seeClub()
myClub.numPartners = 12
myClub.seeClub()

//2 param
myClub = new Club(2001 , 12)
myClub.seeClub()
myClub.numPartners = 15
myClub.seeClub()

//3 param
myClub = new Club(2001 , 12, "miEstadio")
myClub.seeClub()
myClub.stadiumName = "tuEstadio"
myClub.seeClub()

//4 param
myClub = new Club(2001 , 12, "miEstadio", "Cadiz")
myClub.seeClub()
myClub.city = "Rota"
myClub.seeClub()

//5 param
myClub = new Club(2001 , 12, "miEstadio", "Cadiz",{name: "Copa del rey", year: 2015})
myClub.seeClub()
myClub.winnersList = {name: "Copa europa", year: 2000}
myClub.seeClub()