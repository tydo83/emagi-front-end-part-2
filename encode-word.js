const emojis = require('./emojis.js');

// string-building version
// Using A Boolean
const encodeWord = function(word) {
    let result = '';
    let found = false;
    for (const char of word) {
        for (const emoji of emojis) {
            if(emoji.letter === char.toLowerCase()) {
                result += emoji.symbol;
                found = true;
            }
        }
        if(found == false) {
            result += char;
        }    
    }
    return result;
}

module.exports = encodeWord;