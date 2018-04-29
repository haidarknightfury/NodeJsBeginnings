var obj = {
    name:'Haidar'
}
var stringObj = JSON.stringify(obj);
console.log(typeof(stringObj));
console.log(stringObj);


var personString = '{"name":"haidar","age":27}';
var personObj = JSON.parse(personString);
console.log(typeof(personObj));
console.log(personObj);

const fs = require('fs');
var originalNote = {
    title:'some title',
    body:'some body'
}
fs.writeFileSync('note.json',JSON.stringify(originalNote));

var noteString = fs.readFileSync('note.json');
var noteObj = JSON.parse(noteString);
console.log(typeof(noteObj));
console.log(`note is ${noteObj.title} and body is ${noteObj.body}`);
