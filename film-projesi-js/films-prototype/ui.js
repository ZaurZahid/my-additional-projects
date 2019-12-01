function UI() {

}
UI.prototype.addFilmToUi = function(newFilm) {
    let filmList = document.querySelector('#films')
    filmList.innerHTML += ` <tr>
    <td><img src="${newFilm.url}" class="img-fluid img-thumbnail"></td>
    <td>${newFilm.name}</td>
    <td>${newFilm.director}</td>
    <td><a href="#" id = "delete-film" class = "btn btn-danger">Delete the film</a></td>
  </tr> `
}
UI.prototype.clearInput = function(el1, el2, el3) {
    el1.value = " ";
    el2.value = " "
    el3.value = " "

}
UI.prototype.displayMessages = function(message, type) {
    let part_1 = document.querySelectorAll('.card-body')[0];
    part_1.innerHTML += `<div class="alert alert-${type}" role="alert">
    ${message}
  </div>`
    setTimeout(() => {
        document.querySelector('.alert').remove()
    }, 1000);
}
UI.prototype.loadAllFilms = function(films) {
    // let filmList = document.querySelector('#films')
    films.forEach(val => {
        this.addFilmToUi(val)
    });
}
UI.prototype.deleteItemFromUi = function(element) {
    element.parentElement.parentElement.remove()
}
UI.prototype.deleteAllFromUi = function() {
    let filmList = document.querySelector('#films')
    while (filmList.firstElementChild) {
        filmList.firstElementChild.remove()
    }
}