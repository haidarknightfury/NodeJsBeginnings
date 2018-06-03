//var MongoClient = require('mongodb').MongoClient;
// destructuring obtaining the objects from mongodb
const {MongoClient, ObjectID} = require('mongodb');


var obj = new ObjectID();
console.log('objid',obj);

// OBJECT DESTRUCTURING - ES6
var user = {name:'haidar',age:15};
// destructuring user - obtain name in another variable
var {name} = user;
console.log(name);


/**
 * callback function for writting in database 
 * @param {*} err 
 * @param {*} result 
 */
function callback(err, result) {
  if (err) {
    return console.log(err);
  }
  //ops - array of all document inserted
  console.log(JSON.stringify(result.ops, undefined, 2));
  // get timestamp from id
  console.log(JSON.stringify(result.ops[0]._id.getTimestamp()));
}


// (err,client) callback in v3
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {

  // in v3 const db = client.db('TodoApp');
  if (err) {
    return console.log('error while connecting to database', err);
  }
  console.log(db.databaseName);

  // insert into todos collection
  db.collection('todos').insertOne({
    name: 'first todo',
    completed: 'false'
  }, callback);

  db.collection('users').insertOne({
    //_id:123,
    name: 'haidar',
    age: '24'
  }, callback);

  db.close();
  // client.close for v3
});