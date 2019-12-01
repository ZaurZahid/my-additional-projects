let form = document.querySelector('#film-form')
let titleE = document.querySelector('#title')
let directorE = document.querySelector('#director')
let urlE = document.querySelector('#url');
let secondCardBody = document.querySelectorAll('.card-body')[1]
let clear = document.querySelector('#clear-films')

const ui = new UI()
const storage = new Storage()

eventListeners();

function eventListeners() {
    form.addEventListener('submit', addFilm);
    document.addEventListener('DOMContentLoaded', function() {
        let films = storage.getFilmsFromStorage();
        ui.loadAllFilms(films) //ui da filmleri yukle
    })
    secondCardBody.addEventListener('click', deleteItem)
    clear.addEventListener('click', clearAllFilms)
}

function addFilm(e) {
    const title = titleE.value
    const director = directorE.value
    const url = urlE.value

    if (title === "" || director == "" || url === "") {
        ui.displayMessages('Fill all of them pls', 'danger')
    } else {
        const newFilm = new Film(title, director, url)
        ui.addFilmToUi(newFilm);
        storage.addFilmToStorage(newFilm)
        ui.displayMessages('U added film)', 'success')
    }
    ui.clearInput(titleE, directorE, urlE)

    e.preventDefault()
}

function deleteItem(e) {

    if (e.target.id == 'delete-film') {
        ui.deleteItemFromUi(e.target);
        storage.deleteItemFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent)
        ui.displayMessages('You deleted item', 'primary')
    }
}

function clearAllFilms(e) {
    if (confirm('Do you want delete all films?')) {
        ui.deleteAllFromUi();
        storage.deleteAllFromStorage()
        ui.displayMessages('You deleted all items', 'success')
    }
}