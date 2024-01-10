class Computer {
    _processor;
    _graphic;
    _motherboard;
    _ram;
    _storage;

    constructor(processor, graphic, motherboard, ram, storage) {
        this._processor = processor;
        this._graphic = graphic;
        this._motherboard = motherboard;
        this._ram = ram;
        this._storage = storage;
    }


    get processor() {
        return this._processor;
    }

    set processor(value) {
        this._processor = value;
    }

    get graphic() {
        return this._graphic;
    }

    set graphic(value) {
        this._graphic = value;
    }

    get motherboard() {
        return this._motherboard;
    }

    set motherboard(value) {
        this._motherboard = value;
    }

    get ram() {
        return this._ram;
    }

    set ram(value) {
        this._ram = value;
    }

    get storage() {
        return this._storage;
    }

    set storage(value) {
        this._storage.push(value);
    }
}

let myPc = new Computer("ryzen 5 3600", "rx 5600 xt", "b550 ds3h", 16,[{capacity : 500, technology : "nvme"},{capacity: 2000, technology: "hdd"}] );
console.log(myPc);
myPc.storage = {capacity: 1000, technology: "nvme"}
console.log(myPc)