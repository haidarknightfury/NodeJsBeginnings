const {
  MongoClient,
  ObjectID
} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('error while connecting to database', err);
  }


  //mongodb update operators
  db.collection('todos').findOneAndUpdate({
    completed: 'false'
  }, {
    $set: {
      completed: true
    }
  }, {
    // return modified object
    returnOriginal: false
  }).then((result) => {
    console.log(result); 
  });


    db.collection('users').findOneAndUpdate({
      name: 'haidar'
    }, {
      $inc: {
        age: 2
      }
    }, {
      // return modified object
      returnOriginal: false
    }).then((result) => {
      console.log(result);
    });

     db.collection('users').findOneAndUpdate({
       _id: new ObjectID('5b0ecbc260212c3180ecc9c5')
     }, {
       $inc: {
         age: 2
       }
     }, {
       // return modified object
       returnOriginal: false
     }).then((result) => {
       console.log(result);
     });



  db.close();
});