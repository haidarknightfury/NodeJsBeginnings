const express = require('express');
const bodyParser = require('body-parser');

var {Todo} = require('./models/todo');
var {User} = require('./models/user');


var app = express();

app.use(bodyParser.json());

app.post('/todos',(req,res)=>{
    console.log(req.body);
    var todo = new Todo({
        text:req.body.text
    });
    todo.save().then((result)=>{
        console.log('successfully saved the todo : ',todo);
        res.status(200).send(todo);
    },(e)=>{
        console.log('error in saving the todo');
        res.status(400).send(e);
    });
});

app.get('/todos',(req,res)=>{
    Todo.find({},(error,data)=>{
        if (error){
            return res.send(error);   
        }
    res.send(data);
    });
});

app.listen(3000, () => {
    console.log('started on port 3000');
});


module.exports = {
    app
}

// var newTodo = new Todo({
//     text: 'cooked dinner',
//     completed: 'false',
//     completedAt: 1234
// });

// newTodo.save().then((result) => {
//     console.log('saved todo', result);
// }, (e) => {
//     console.log('error', e);
// });

// var newUser = new User({
//     email: 'haidardargaye@gmail.com'
// });

// newUser.save().then((result) => {
//     console.log('saved user', result);
// }, (e) => {
//     console.log('error', e);
// });