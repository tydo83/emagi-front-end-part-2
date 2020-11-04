const translateWord = require('./translate-word.js');
const encodeWord = require('./encode-word.js');


const words = process.argv.slice(2);
// const translation = words.map(translateWord)
// console.log(translation.join(' '));
const encoding = words.map(encodeWord);
console.log(encoding.join(' '));

