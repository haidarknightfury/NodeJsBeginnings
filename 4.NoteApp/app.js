// 3rd party module
const FS  = require('fs');
const Yargs = require('yargs');
const _ = require('lodash');

const Note = require('./note.js');

// using input from user terminal
const argv= Yargs.argv;

// command is the first parameter
var command = argv._[0];

switch(command){
    case 'add':
        var note = Note.addNote(argv.title,argv.body);
        if(!note){
            console.log(`${argv.title} already exists`);
        }
        else{
            Note.logNote(note);
        }
        break;
    case 'list':
        Note.getAll();
        break;
    case 'read':
        var note = Note.getNote(argv.title);
        if(note){
            Note.logNote(note);
        }
        else{
            console.log(`no note with title ${argv.title}`);
        }
        break;
    case 'remove':
        var removed = Note.remove(argv.title);
        var message = removed?"note removed":"title not found";
        console.log(message);
        break;
    default:
        console.log(`${command} not recognised`);
}
