const express = require('express');
const bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');

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
    Todo.find({},(error,todos)=>{
        if (error){
            return res.status(400).send(error);   
        }
    res.send({todos});
    });
});

//GET /todos/1
app.get('/todos/:id',(req,res)=>{
    var id = req.params.id;
    if (ObjectID.isValid(id)){
        Todo.findOne({
            _id: id
        }).then((result)=>{
            if(result)
                res.send({todo:result});
            else
                res.status(404).send({error:'not found'})
        },(error)=>{res.status(404).send(error)})
    }
    else{
        res.status(404).send({error:`${id} malformed`});
    }
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