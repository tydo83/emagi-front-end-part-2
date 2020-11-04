const emojis = require('./emojis.js');


const translateWord = function(word) {
    for (const emoji of emojis) {
        if (emoji.name === word.toLowerCase()) {
            return emoji.symbol;
        }
    }

    return word;
}


module.exports = translateWord;
