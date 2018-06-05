var {Todo} = require('./models/todo');
var {User} = require('./models/user');


var newTodo = new Todo({
    text: 'cooked dinner',
    completed: 'false',
    completedAt: 1234
});

newTodo.save().then((result) => {
    console.log('saved todo', result);
}, (e) => {
    console.log('error', e);
});

var newUser = new User({
    email: 'haidardargaye@gmail.com'
});

newUser.save().then((result) => {
    console.log('saved user', result);
}, (e) => {
    console.log('error', e);
});