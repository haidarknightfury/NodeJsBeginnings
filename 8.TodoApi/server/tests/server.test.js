const request = require('supertest');
const expect = require('expect');

const {app} = require('./../server');
const {Todo}= require('./../models/todo');

const {ObjectId} = require('mongodb');



const todos = [{_id:new ObjectId(),text:'first test todo'}, {_id:new ObjectId(),text:'second test todo',completed:true,completedAt:13146846}];

// move to test case after done is called
beforeEach((done)=>{
  Todo.remove({}).then(()=>{
        return Todo.insertMany(todos); 
  }).then(()=>done());
});



describe('POST /todos',()=>{
    it('should create a new todo',(done)=>{
        var text = 'first test todo';

        request(app)
            .post('/todos')
            .send({text})
            .expect(200)
            .expect((res)=>{
                expect(res.body.text).toBe(text)
            })
            .end((err,res)=>{
                if(err){
                    return done(err);
                }
                Todo.find().then((todos)=>{
                    expect(todos.length).toBe(3);
                    expect(todos[0].text).toBe(text);
                    done();
                }).catch((e)=>done(e));
            })
    });

    it('should not create todo with error',(done)=>{
        var text = '';

        request(app)
            .post('/todos')
            .send({})
            .expect(400)
            .end((err,res)=>{
                if(err){
                    return done(err);
                }
                Todo.find().then((todos)=>{
                    expect(todos.length).toBe(2);
                    done();
                }).catch((e)=>{
                    done(e);
                });
            })
    })
});

describe('GET /todos',()=>{

    it('should get all the todos', (done)=>{
        request(app)
            .get('/todos')
            .expect(200)
            .expect((res)=>{
                    expect(res.body.todos.length).toBe(2);
                })
            .end(done);
            });
    }

);

describe('GET /todos:id',()=>{
    it('should return todo doc',(done)=>{
        request(app)
            .get(`/todos/${todos[0]._id.toHexString()}`)
            .expect(200)
            .expect((res)=>{
                expect(res.body.todo.text).toBe(todos[0].text)
            })
            .end(done);
    });

    it('should return 404',(done)=>{
        request(app)
            .get('/todos/123340')
            .expect(404)
            .expect((res)=>{
                expect(res.body.error).toBeTruthy()
            })
            .end(done);
    });

    it('should return 404 for no items',(done)=>{
        request(app)
            .get(`/todos/${new ObjectId}`)
            .expect(404)
            .end(done);
    });



    describe('GET /delete:id', () => {
                it('should delete todo doc', (done) => {

                    var hexId = todos[0]._id.toHexString();
                    request(app)
                        .delete(`/todos/${hexId}`)
                        .expect(200)
                        .expect((res) => {
                            expect(res.body.todo.text).toBe(todos[0].text)
                            expect(res.body.todo._id).toBe(hexId)
                        })
                        .end(done);
                });

                it('should return 404', (done) => {
                    request(app)
                        .get('/todos/123340')
                        .expect(404)
                        .expect((res) => {
                            expect(res.body.error).toBeTruthy()
                        })
                        .end(done);
                });

                it('should return 404 for no items', (done) => {
                    request(app)
                        .get(`/todos/${new ObjectId}`)
                        .expect(404)
                        .end(done);
                });
            });


        describe('PATCH /todos/:id',()=>{
            it('should update an todo',(done)=>{
                var hexId = todos[0]._id.toHexString();
                var text = 'new text';
                request(app)
                .patch(`/todos/${hexId}`)
                .send({
                    completed:true,
                    text
                })
                .expect(200)
                .expect((res)=>{
                    expect(res.body.todo.text).toBe(text);
                    expect(res.body.todo.completed).toBe(true);
                    expect(res.body.todo.completedAt).toBeGreaterThan(0);
                })
                .end(done);
            });

            it('should update an todo false', (done) => {
                var hexId = todos[1]._id.toHexString();
                request(app)
                    .patch(`/todos/${hexId}`)
                    .send({
                        completed: false,
                    })
                    .expect(200)
                    .expect((res) => {
                        expect(res.body.todo.completed).toBe(false);
                        expect(res.body.todo.completedAt).toBe(null);
                    })
                    .end(done);
            });



        });
});
