class Storage {

    static addFilmToStorage(newFilm) {
        let films = this.getFilmsFromStorage() //this===Storage
        films.push(newFilm)

        localStorage.setItem('films', JSON.stringify(films))

        /*
         [
            {title:"Assad",director:"asdsd",url:"www......"},
            {title:"Assad",director:"asdsd",url:"www......"}
         ]
         */
    }
    static getFilmsFromStorage() {
        let films;
        if (localStorage.getItem('films') === null) {
            films = []
        } else {
            films = JSON.parse(localStorage.getItem('films')) //string->to array
        }

        return films
    }
    static deleteItemFromStorage(el) {
        let films = this.getFilmsFromStorage();
        films.forEach(function(film, index) {
            if (film.name === el) {
                films.splice(index, 1)
            }
        })
        localStorage.setItem('films', JSON.stringify(films))
    }
    static deleteAllFromStorage() {

        localStorage.removeItem('films')
    }
}