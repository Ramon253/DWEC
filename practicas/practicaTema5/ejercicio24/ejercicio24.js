class Film {
    _name;
    _releaseYear;
    _duration;
    _genre;
    _bestActors;
    _url;
    _director;


    constructor(film) {
        this._name = film.name;
        this._releaseYear = film.releaseYear;
        this._duration = film.duration;
        this._genre = film.genre;
        this._bestActors = film.bestActors;
        this._url = film.url;
        this._director = film.director;
    }


    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get releaseYear() {
        return this._releaseYear;
    }

    set releaseYear(value) {
        this._releaseYear = value;
    }

    get duration() {
        return this._duration;
    }

    set duration(value) {
        this._duration = value;
    }

    get genre() {
        return this._genre;
    }

    set genre(value) {
        this._genre = value;
    }

    get bestActors() {
        return this._bestActors;
    }

    set bestActors(value) {
        this._bestActors = value;
    }

    get url() {
        return this._url;
    }

    set url(value) {
        this._url = value;
    }

    get director() {
        return this._director;
    }

    set director(value) {
        this._director = value;
    }
}

let tesis = new Film({
    name: "Tesis",
    releaseYear: 1996,
    duration : 125,
    genre : "Horror/thriller",
    url: "https://es.wikipedia.org/wiki/Tesis_(pel%C3%ADcula)",
    director : "Alejandro Amenábar",
    bestActors: ["Eduardo Noriega", "Ana Torrent", "Fele Martinez", "Xabier Elorriaga", "Miguel Picazo", "Nieves Herranz"]
})
console.log(tesis)