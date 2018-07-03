const Mongoose = require('mongoose');

// tell mongoose to use JS promise
Mongoose.Promise = global.Promise;
Mongoose.connect(process.env.MONGODB_URI||'mongodb://localhost:27017/TodoApp');

module.exports = {
    Mongoose
};
