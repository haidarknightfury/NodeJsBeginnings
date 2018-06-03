const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('error while connecting to database', err);
  }

  //find returns a mongodb cursor
   db.collection('todos').deleteMany({text:'eat lunch'}).then((result)=>{
    console.log(result); //n -number ok - all good
   });

   db.collection('todos').deleteOne({completed: 'false'}).then((result) => {
     console.log(result); //n -number ok - all good
   });

    //gets document back and delete it
    db.collection('todos').findOneAndDelete({completed: 'false'}).then((result) => {
      console.log(result); //n -number ok - all good
    });

   //deleteMany

   // deleteOne

   // find one and delete


  db.close();
});