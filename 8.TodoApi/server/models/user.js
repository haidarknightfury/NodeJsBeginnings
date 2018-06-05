const {Mongoose} = require('../db/mongoose');

var User = Mongoose.model('user', {
    email: {
        type: String,
        required: true,
        trim: true,
        minlength: 1
    }
});

module.exports = {
    User
}