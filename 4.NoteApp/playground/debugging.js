var person = {
    name:'haidar',
    age:25,   
}
person.age=40;
debugger;
person.name= 'mike';
console.log(person);

// node -v v>8
// n - next , c - continue ,repl - inspect , debugger; - breakpoint
// node inspect app.js read --title = 'haidar'
// nodemon inspect app.js read --title ='haidar'
// node --inspect-brk app.js --title ='haidar' - chrome://inspect - open dedicated devTools
// nodemon --inspect-brk app.js --title="haidar"

