// 3rd party module
const FS = require('fs');
const Yargs = require('yargs');
const _ = require('lodash');

const Note = require('./note.js');

// using input from user terminal

const titleOption = {
    describe: 'Title of the note',
    demand: true,
    alias: 't'
};

const bodyOption = {
    body: {
        describe: 'Body of the note',
        demand: true,
        alias: 'b'
    }
};
const argv = Yargs.command('add', 'Add a note', {
        title: titleOption,
        body: bodyOption
    })
    .command('list', 'List content of notes')
    .command('read', 'Read a note', {
        title:titleOption,
        body:bodyOption
    })
    .command('remove','Remove a note',{
        title:titleOption
    })
    .help('help')
    .argv;

// command is the first parameter
var command = argv._[0];

switch (command) {
    case 'add':
        var note = Note.addNote(argv.title, argv.body);
        if (!note) {
            console.log(`${argv.title} already exists`);
        } else {
            Note.logNote(note);
        }
        break;
    case 'list':
        var allNotes = Note.getAll();
        console.log(`printing ${allNotes.length} notes`);
        allNotes.forEach((note) => {
            Note.logNote(note);
        });
        break;
    case 'read':
        var note = Note.getNote(argv.title);
        if (note) {
            Note.logNote(note);
        } else {
            console.log(`no note with title ${argv.title}`);
        }
        break;
    case 'remove':
        var removed = Note.remove(argv.title);
        var message = removed ? "note removed" : "title not found";
        console.log(message);
        break;
    default:
        console.log(`${command} not recognised`);
}