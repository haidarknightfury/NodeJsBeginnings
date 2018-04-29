
const FS  = require('fs');
const Yargs = require('yargs');

const Note = require('./note.js');
const _ = require('lodash');

const argv= Yargs.argv;

console.log('process argv',process.argv);
console.log('yarns argv',argv);

console.log('starting app');
Note.getNotes();

var arr = [1,2,3,3,4,4,5,5];
console.log(_.uniq(arr));

var command = argv._[0];
console.log('Command :',command);

switch(command){
    case 'add':
        console.log('Adding new note');
        Note.addNote(argv.title,argv.body);
        break;
    case 'list':
        console.log('listing notes');
        Note.getAll();
        break;
    case 'read':
        console.log('read note');
        Note.read(argv.title);
        break;
    case 'remove':
        console.log('remove note');
        Note.remove(argv.title);
        break;
    default:
        console.log('not recognized')
}
