const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('error while connecting to database', err);
  }

  // find returns a mongodb cursor
   db.collection('todos').find().toArray().then((docs)=>{
      console.log(JSON.stringify(docs, undefined, 2));
   },(err)=>{ 
      console.log(err);
   });

  // find returns a mongodb cursor
  db.collection('todos').find({completed:'false'}).toArray().then((docs) => {
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log(err);
  });

  console.log('find by id');
  //find by id 5b137932c19dc9255419494e
  db.collection('todos').find({_id: new ObjectID('5b137932c19dc9255419494e')}).toArray().then((docs) => {
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log(err);
  });

  // count
  db.collection('todos').find().count().then((count) => {
    console.log(`todos count ${count}`);
  }, (err) => {
    console.log(err);
  });

  db.close();
});