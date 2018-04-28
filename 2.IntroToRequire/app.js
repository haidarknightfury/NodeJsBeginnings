console.log('starting app');
const FS = require('fs');
const OS = require('os');
const Notes = require('./notes.js');

var username = OS.userInfo().username;
var message = `Hello ${username} and you are ${Notes.age}`;

//console.log(Notes.addNote());
console.log(Notes.add(5,6));

FS.appendFile('greetings.txt',message);

FS.appendFile('greetings.txt',message, function(err){
    if(err){
        console.log('unable to write to file');
    }
});

FS.appendFileSync('greetings.txt',message);
