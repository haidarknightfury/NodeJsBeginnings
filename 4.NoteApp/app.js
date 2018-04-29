
const FS  = require('fs');

const Note = require('./note.js');
const _ = require('lodash');

console.log('starting app');
Note.getNotes();

var arr = [1,2,3,3,4,4,5,5];
console.log(_.uniq(arr));

var command = process.argv[2];
console.log('Command :',command);

switch(command){
    case 'add':
        console.log('Adding new note');
        break;
    case 'list':
        console.log('listing notes');
        break;
    case 'read':
        console.log('read note');
        break;
    case 'remove':
        console.log('remove note');
        break;
    default:
        console.log('not recognized')
}
