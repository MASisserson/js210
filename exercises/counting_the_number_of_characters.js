let readlineSync = require('readline-sync');

phrase = readlineSync.question('Please enter a phrase: ');
no_space_phrase = phrase.replace(RegExp(' ', 'g'), '')
console.log(`There are ${no_space_phrase.length} characters in "${phrase}".`)
