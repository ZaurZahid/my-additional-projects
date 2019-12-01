function Storage() {

}
Storage.prototype.addFilmToStorage = function(newFilm) {
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
Storage.prototype.getFilmsFromStorage = function() {
    let films;
    if (localStorage.getItem('films') === null) {
        films = []
    } else {
        films = JSON.parse(localStorage.getItem('films')) //string->to array
    }

    return films
}
Storage.prototype.deleteItemFromStorage = function(el) {
    let films = this.getFilmsFromStorage();
    films.forEach(function(film, index) {
        if (film.name === el) {
            films.splice(index, 1)
        }
    })
    localStorage.setItem('films', JSON.stringify(films))
}
Storage.prototype.deleteAllFromStorage = function() {

    localStorage.removeItem('films')
}