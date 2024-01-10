class Telephon {
    _number;
    _region;

    constructor(number, region) {
        this._number = number;
        this._region = region;
    }
}

class Mobile extends Telephon{
    _ram;
    _processor;

    constructor(number, region, ram, processor) {
        super(number, region);
        this._number = number;
        this._region = region;
        this._ram = ram;
        this._processor = processor;
    }


    get number() {
        return this._number;
    }

    set number(value) {
        this._number = value;
    }

    get region() {
        return this._region;
    }

    set region(value) {
        this._region = value;
    }

    get ram() {
        return this._ram;
    }

    set ram(value) {
        this._ram = value;
    }

    get processor() {
        return this._processor;
    }

    set processor(value) {
        this._processor = value;
    }
}
class Landline extends Telephon{
    _house;
    constructor(number, region, house) {
        super(number, region);
        this._number = number;
        this._region = region;
        this._house = house;
    }

    get number() {
        return this._number;
    }

    set number(value) {
        this._number = value;
    }

    get region() {
        return this._region;
    }

    set region(value) {
        this._region = value;
    }

    get house() {
        return this._house;
    }

    set house(value) {
        this._house = value;
    }
}

let myPhone = new Mobile(60148031,"esp",8,  "snappdragon 885");
let myLandline = new Landline(95605244, "esp", "avd de la libertad 3a")
console.log(myPhone)
console.log(myLandline)

myLandline.house = "avd del ejercito 4d"
myPhone.number =  666666666

console.log(myPhone)
console.log(myLandline)
