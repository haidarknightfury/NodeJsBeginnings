const {mongoose} = require('../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const{ObjectID} = require('mongodb');


var id = '5b3283b9e8e879744ebc0e7d';

if(!ObjectID.isValid(id)){
    console.log(id,"not valid");
}

Todo.find({
    _id:id
}).then((todos)=>{
    console.log('Todos',todos);
});


Todo.findOne({
    _id: id
}).then((todo) => {
    console.log('Todo', todo);
});

Todo.findById(id).then((todo)=>{
    if(!todo){
        return console.log("not found");
    }
    console.log(todo);
}).catch((e)=>console.log(e));


