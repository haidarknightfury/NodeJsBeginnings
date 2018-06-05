const {Mongoose} = require('../db/mongoose');

// mongoose automatically pluralise to know which collections to use
// mongoose validators
var Todo = Mongoose.model('Todo', {
    text: {
        type: String,
        required: true,
        minlength: 5,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    completedAt: {
        type: Number,
        default: null
    }
});

module.exports = {
    Todo
}