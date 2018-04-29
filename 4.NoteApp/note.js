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
}

var saveNotes = (notes) => {
    FS.writeFileSync(note_file, JSON.stringify(notes));
}

var addNote = (title, body) => {
    var notes = [];
    var note = {
        title,
        body
    }
    notes = fetchNotes();;
    var duplicateNotes = notes.filter((note) => {
        return note.title == title;
    });

    if (duplicateNotes.length === 0) {
        notes.push(note);
        saveNotes(notes);
        return note;
    }
}

var getAll = () => {
    var notes = fetchNotes();
    console.log('notes', notes);
};

var read = (title) => {
    console.log(`retrieving note with title ${title}`);
    var notes = getAll();
}

var remove = (title) => {
    var notes = fetchNotes();
    // _.remove(notes,(note)=>{
    //     return note.title == title;
    // });
    var filteredNotes = notes.filter((note) => {
        return note.title !== title;
    });
    saveNotes(notes);
    return filteredNotes.length !== notes.length;
}

module.exports = {
    addNote: addNote,
    getAll,
    read,
    remove
}