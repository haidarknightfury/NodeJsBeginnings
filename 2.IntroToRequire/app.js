console.log('starting app');
const FS = require('fs');
const OS = require('os');

var username = OS.userInfo().username;
var message = `Hello ${username}`;

FS.appendFile('greetings.txt',message);

FS.appendFile('greetings.txt',message, function(err){
    if(err){
        console.log('unable to write to file');
    }
});

FS.appendFileSync('greetings.txt',message);
