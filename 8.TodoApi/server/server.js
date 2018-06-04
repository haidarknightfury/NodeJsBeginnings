const Mongoose = require('mongoose');

// tell mongoose to use JS promise
Mongoose.Promise = global.Promise;
Mongoose.connect('mongodb://localhost:27017/TodoApp');

// mongoose automatically pluralise to know which collections to use
// mongoose validators
var Todo = Mongoose.model('Todo',{
    text:{
        type:String,
        required:true,
        minlength: 5,
        trim:true
    },
    completed:{
        type:Boolean
    },
    completedAt:{
        type:Number
    }
});

var newTodo = new Todo({
    text:'cooked dinner',
    completed:'false',
    completedAt:1234
});

newTodo.save().then((result)=>{
    console.log('saved todo',result);
},(e)=>{
    console.log('error',e);
});