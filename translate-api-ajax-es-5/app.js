eventListeners()

function eventListeners() {
    document.querySelector('#translate-form').addEventListener('submit', translateWord)
    document.getElementById('language').onchange = function() {
        //ui part
        ui.changeUI()
    }
}

const ui = new UI()

function translateWord(e) {
    const translate = new Translate(document.getElementById('word').value, document.getElementById('language').value)
        // translate.changeParametrs(document.getElementById('word').value, document.getElementById('language').value) //if i cahnged word or lang first of all change in contructor then translate
    translate.translateWord(function(error, resp) {
        if (error) {
            console.log(error);
        } else {
            ui.displayTranslate(resp)
        }
    })
    e.preventDefault()
}