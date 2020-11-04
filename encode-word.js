const emojis = require('./emojis.js');


// string-building version
const encodeWord = function(word) {
    let result = '';
    for (const char of word) {
        for (const emoji of emojis) {
            if (emoji.letter === char.toLowerCase()) {
                result += emoji.symbol;
            }
        }
    }

    return result;
}

// mapping version
const encodeWordAlt = function(word) {
    const letters = word.split('');
    const encodedLetters = letters.map(function(letter) {
        for (const emoji of emojis) {
            if (emoji.letter === letter) {
                return emoji.symbol;
            }
        }

        return letter;
    })

    return encodedLetters.join('');
}

// mapping with no intermediate variables verson.
const encodeWordAlt2 = function(word) {
    return word.split('').map(function(letter) {
        for (const emoji of emojis) {
            if (emoji.letter === letter) {
                return emoji.symbol;
            }
        }

        return letter;
    }).join('');
}

module.exports = encodeWord;
