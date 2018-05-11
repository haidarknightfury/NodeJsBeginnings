const FS = require('fs');
const note_file = 'notes.json';
const _ = require('lodash');

var fetchNotes = () => {
    var notes = [];
    try {
        return JSON.parse(FS.readFileSync(note_file));
    } catch (err) {
        return [];
    }
};

var saveNotes = (notes) => {
    FS.writeFileSync(note_file, JSON.stringify(notes));
};

var addNote = (title, body) => {
    var notes = [];
    var note = {
        title,
        body
    };
    notes = fetchNotes();
    var duplicateNotes = notes.filter((note) => {
        return note.title == title;
    });

    if (duplicateNotes.length === 0) {
        notes.push(note);
        saveNotes(notes);
        return note;
    }
};

var getAll = () => {
    return fetchNotes();
};

var getNote = (title) => {
    console.log(`retrieving note with title ${title}`);
    var notes = fetchNotes();
    var filteredNotes = notes.filter(function (_note) {
        return _note.title == title;
    });
    return filteredNotes[0];
};

var remove = (title) => {
    var notes = fetchNotes();
    var filteredNotes = notes.filter((note) => {
        return note.title !== title;
    });
    saveNotes(notes);
    return filteredNotes.length !== notes.length;
};

var logNote = (note) => {
    console.log('--');
    debugger;
    console.log(note.title);
    console.log(note.body);
};

module.exports = {
    addNote: addNote,
    getAll:getAll,
    getNote:getNote,
    remove:remove,
    logNote
}