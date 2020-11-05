const translateWord = require('./translate-word.js');
const encodeWord = require('./encode-word.js');

const command = process.argv[2];
const words = process.argv.slice(3);

const translation = words.map(translateWord);
const encoding = words.map(encodeWord);

switch(command) {
    case 'translate':
        console.log(translation.join(' '));
        break;
    case 'encode':
        console.log(encoding.join(' '));
        break;
    default:
        console.log('You have to type either translate or encode after main.js to change your sentence.');    
        break; // you don't need it logically, but it's a good habit.
    }






