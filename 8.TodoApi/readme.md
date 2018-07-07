// start the server with the path for the data
mongod.exe --dbpath /Users/Haidar/mongo-data

mongo.exe
db.Todos.insert({text:'create a todo'})
db.Todos.find()

// mongo db vocabulary

- table - collection
- row/record - called a document {...}
- column - field

in mongoDB - a document doesnt need to follow all the fields of one another

# Interacting with mongo from node

- node-mongo-native library
- driver 


# ID property

#MLab MongoDB - heroku plugins 
heroku create
heroku addons:create monogolab:sandbox
heroku config
    - mongoDB URI- to connect 
    - process.env.MONGODB_URI
git push heroku master 
heroku logs
heroku open - open the application
{{url}}/todos - postman