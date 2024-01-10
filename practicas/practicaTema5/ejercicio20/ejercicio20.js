class Classroom {
    _number;
    _size;
    _tables;
    _board;

    constructor(size, number, tables, board) {
        this._size = size;
        this._number = number;
        this._tables = tables;
        this._board = board;
    }

    getMaterial() {
        return {
            tables: this._tables,
            board: this._board
        }
    }


    get board() {
        return this._board;
    }

    set board(value) {
        this._board = value;
    }

    get size() {
        return this._size;
    }

    set size(value) {
        this._size = value;
    }

    get number() {
        return this._number;
    }

    set number(value) {
        this._number = value;
    }

    get tables() {
        return this._tables;
    }

    set tables(value) {
        this._tables = value;
    }
}

class Music extends Classroom {
    _instruments;
    _speakers;

    constructor(size, number, tables, board, instruments, speakers) {
        super(size, number, tables, board);
        this._instruments = instruments;
        this._speakers = speakers;
        this._size = size;
        this._number = number;
        this._tables = tables;
        this._board = board;
    }

    getMaterial() {
        let materials = super.getMaterial();
        materials.instruments = this._instruments;
        materials.speakers = this._speakers

        return materials;
    }

    get size() {
        return this._size;
    }

    set size(value) {
        this._size = value;
    }

    get number() {
        return this._number;
    }

    set number(value) {
        this._number = value;
    }

    get tables() {
        return this._tables;
    }

    set tables(value) {
        this._tables = value;
    }

    get board() {
        return this._board;
    }

    set board(value) {
        this._board = value;
    }

    get instruments() {
        return this._instruments;
    }

    set instruments(value) {
        this._instruments = value;
    }

    get speakers() {
        return this._speakers;
    }

    set speakers(value) {
        this._speakers = value;
    }
}

class Technology extends Classroom {
    _workbench
    _tools

    constructor(size, number, tables, board, workbench, tools) {
        super(size, number, tables, board);
        this._workbench = workbench;
        this._tools = tools;
        this._size = size;
        this._number = number;
        this._tables = tables;
        this._board = board;
    }

    getMaterial() {
        let material = super.getMaterial();
        material.workbench = this._workbench;
        material.tools = this._tools;

        return material;
    }

    get size() {
        return this._size;
    }

    set size(value) {
        this._size = value;
    }

    get number() {
        return this._number;
    }

    set number(value) {
        this._number = value;
    }

    get tables() {
        return this._tables;
    }

    set tables(value) {
        this._tables = value;
    }

    get board() {
        return this._board;
    }

    set board(value) {
        this._board = value;
    }

    get workbench() {
        return this._workbench;
    }

    set workbench(value) {
        this._workbench = value;
    }

    get tools() {
        return this._tools;
    }

    set tools(value) {
        this._tools = value;
    }
}

let myMusicClass = new Music(30,112, 10, "Smart board", "piano", "'marca de altavoces'")
console.log(myMusicClass)
console.log(myMusicClass.getMaterial())