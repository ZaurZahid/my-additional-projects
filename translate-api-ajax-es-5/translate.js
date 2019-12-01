class Translate {
    constructor(word, lang) {
        this.word = word,
            this.lang = lang,
            this.apikey = "trnsl.1.1.20191201T102833Z.7fe98f78e5582f10.705ca98a64825e71f47c210430a5ada2c75a0dfa",
            this.xhr = new XMLHttpRequest()
    }
    translateWord = function(callback) {
            //ajax part
            const endpoint = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=${this.apikey}&text=${this.word}&lang=${this.lang}`
                // console.log(endpoint);
            this.xhr.open('GET', endpoint)
            this.xhr.onload = () => {
                if (this.xhr.status === 200) {
                    const json = JSON.parse(this.xhr.responseText)
                    const text = json.text[0]
                    callback(null, text)
                } else {
                    callback("There is a problem ", null)
                }
            }

            this.xhr.send()
        }
        //it is working too but now i dont need it
        // changeParametrs = function(newWord, newLang) { //if i change lang, change constructor , too
        //     this.word = newWord,
        //         this.lang = newLang
        // }
}