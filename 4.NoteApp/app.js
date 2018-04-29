// 3rd party module
const FS  = require('fs');
const Yargs = require('yargs');
const _ = require('lodash');

const Note = require('./note.js');

// using input from user terminal
const argv= Yargs.argv;

// console.log('process argv',process.argv);
// console.log('yarns argv',argv);
// console.log('starting app');

var command = argv._[0];
switch(command){
    case 'add':
        var note = Note.addNote(argv.title,argv.body);
        if(!note){
            console.log(`${argv.title} already exists`);
        }
        else{
            console.log(`${note.title} created`);
        }
        break;
    case 'list':
        Note.getAll();
        break;
    case 'read':
        console.log('read note');
        Note.read(argv.title);
        break;
    case 'remove':
        var removed = Note.remove(argv.title);
        var message = removed?"note removed":"title not found";
        console.log(message);
        break;
    default:
        console.log(`${command} not recognised`);
}
