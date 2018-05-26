var db = require('./db');

module.exports.handleSignUp = (email, password) => {
    //check if email exists
    db.saveUser({
        email,
        password
    });
    //send welcome email
}