class UI {
    constructor() {
        this.img = document.getElementById('outputImage'),
            this.lang = document.getElementById('outputLanguage'),
            this.word = document.getElementById('outputWord'),
            this.list = document.getElementById('language')
    }
    changeUI = function() {
        this.img.src = `images/${this.list.value}.png`
        this.lang.innerHTML = this.list.options[this.list.selectedIndex].textContent
    }
    displayTranslate = function(word) {
        this.word.textContent = word
    }
}