const Mongoose = require('mongoose');

// tell mongoose to use JS promise
Mongoose.Promise = global.Promise;
Mongoose.connect(process.env.MONGODB_URI);

//process.env.NODE_ENV === 'test';

module.exports = {
    Mongoose
};
