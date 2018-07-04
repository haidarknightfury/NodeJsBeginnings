const express = require('express');
const bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');

const _ = require('lodash');

var {Todo} = require('./models/todo');
var {User} = require('./models/user');

const port = process.env.PORT || 3000;

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

app.delete('/todos/:id',(req,res)=>{
    var id = req.params.id;
     if (ObjectID.isValid(id)) {
         Todo.findByIdAndRemove(id).then((result) => {
             if (result)
                 res.send({ todo: result});
             else
                 res.status(404).send({
                     error: 'not found'
                 })
         }, (error) => {
             res.status(404).send(error)
         })
     } else {
         res.status(404).send({
             error: `${id} malformed`
         });
     }

});

app.patch('/todos/:id',(req,res)=>{
     var id = req.params.id;
     // pick only text and completed
     var body = _.pick(req.body,['text', 'completed']);
     if (!ObjectID.isValid(id)) {
      return res.status(404).send({error: `${id} malformed`});
     }

      if(_.isBoolean(body.completed) && body.completed){
          body.completedAt= new Date().getTime();
      }
      else{
          body.completed = false;
          body.completedAt = null;
      }
      Todo.findByIdAndUpdate(id,{$set:body},{new:true}).then((todo) => {
        if (!todo){
            res.status(404).send({error:'not found'})
        }   
        res.send({todo});
        }).catch((error) => {
             res.status(404).send(error)
        })
});



app.listen(port, () => {
    console.log(`started at port ${port}`);
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