let form = document.querySelector('#film-form')
let titleE = document.querySelector('#title')
let directorE = document.querySelector('#director')
let urlE = document.querySelector('#url');
let secondCardBody = document.querySelectorAll('.card-body')[1]
let clear = document.querySelector('#clear-films')


eventListeners();

function eventListeners() {
    form.addEventListener('submit', addFilm);
    document.addEventListener('DOMContentLoaded', function() {
        let films = Storage.getFilmsFromStorage();
        UI.loadAllFilms(films) //ui da filmleri yukle
    })
    secondCardBody.addEventListener('click', deleteItem)
    clear.addEventListener('click', clearAllFilms)
}

function addFilm(e) {
    const title = titleE.value
    const director = directorE.value
    const url = urlE.value

    if (title === "" || director == "" || url === "") {
        UI.displayMessages('Fill all of them pls', 'danger')
    } else {
        const newFilm = new Film(title, director, url)
        UI.addFilmToUi(newFilm);
        Storage.addFilmToStorage(newFilm)
        UI.displayMessages('U added film)', 'success')
    }
    UI.clearInput(titleE, directorE, urlE)

    e.preventDefault()
}

function deleteItem(e) {

    if (e.target.id == 'delete-film') {
        UI.deleteItemFromUi(e.target);
        Storage.deleteItemFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent)
        UI.displayMessages('You deleted item', 'primary')
    }
}

function clearAllFilms(e) {
    if (confirm('Do you want delete all films?')) {
        UI.deleteAllFromUi();
        Storage.deleteAllFromStorage()
        UI.displayMessages('You deleted all items', 'success')
    }
}