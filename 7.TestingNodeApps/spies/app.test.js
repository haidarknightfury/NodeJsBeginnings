const expect = require('expect');

// library to mock a module
var rewire = require('rewire');
var app = rewire('./app');

// use rewire library
// to mock data calls
//app.__get__
//app.__set__

describe('App', () => {

    // create mock db
    var db = {
        saveUser: expect.createSpy()
    };
    // mock the db with new db object
    app.__set__('db', db);

    it('shoud call the spy directly', () => {
        var spy = expect.createSpy();
        spy('Andrew', 25);
        expect(spy).toHaveBeenCalled();
        expect(spy).toHaveBeenCalledWith('Andrew', 25);
    });

    it('should call saveUser with user object', () => {
        var email = 'haidardargaye@gmail.com';
        var password = '1234';
        app.handleSignUp(email, password);
        expect(db.saveUser).toHaveBeenCalled();
        expect(db.saveUser).toHaveBeenCalledWith({
            email,
            password
        });
    });
})