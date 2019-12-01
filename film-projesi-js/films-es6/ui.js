class UI {


    static addFilmToUi(newFilm) {
        let filmList = document.querySelector('#films')
        filmList.innerHTML += ` <tr>
                                <td><img src="${newFilm.url}" class="img-fluid img-thumbnail"></td>
                                <td>${newFilm.name}</td>
                                <td>${newFilm.director}</td>
                                <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
                            </tr> `
    }
    static clearInput(el1, el2, el3) {
        el1.value = " ";
        el2.value = " "
        el3.value = " "

    }
    static displayMessages(message, type) {
        let part_1 = document.querySelectorAll('.card-body')[0];
        part_1.innerHTML += `<div class="alert alert-${type}" role="alert">
            ${message}
        </div>`
        setTimeout(() => {
            document.querySelector('.alert').remove()
        }, 1000);
    }
    static loadAllFilms(films) {
        // let filmList = document.querySelector('#films')
        films.forEach(val => {
            this.addFilmToUi(val)
        });
    }
    static deleteItemFromUi(element) {
        element.parentElement.parentElement.remove()
    }
    static deleteAllFromUi() {
        let filmList = document.querySelector('#films')
        while (filmList.firstElementChild) {
            filmList.firstElementChild.remove()
        }
    }
}