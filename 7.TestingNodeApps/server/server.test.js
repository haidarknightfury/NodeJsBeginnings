var request = require('supertest');
const expect = require('expect');

var app = require('./server').app;

describe('Server', ()=>{
    // done must be passed because asyn process
    it("should return hello world", (done) => {
        request(app)
            .get('/')
            .expect(200)
            .expect('hello world')
            // pass done to end the test
            .end(done);
    });

    // done must be passed because asyn process
    it("should return error", (done) => {
        request(app)
            .get('/home')
            .expect(404)
            .expect('content-type', 'application/json; charset=utf-8')
            .expect({
                error: 'page not found',
                name: 'home'
            })
            .expect((res) => {
                expect(res.body).toInclude({
                    error: 'page not found'
                })
            })
            .end(done);
    });

    describe('User',()=>{
        it("should return users", (done) => {
            request(app)
                .get('/users')
                .expect((res) => {
                    expect(res.body).toInclude({
                        name: 'haidar',
                        age: '20'
                    });
                })
                .end(done);
        });
    });
    
});
