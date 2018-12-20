//MongoClient needed to work with actual MongoDB Server
//const MongoClient = require('mongodb').MongoClient;

//mongo client destructuring
const {MongoClient, ObjectID} = require('mongodb'); //Pulling ObjectID allows to create new IDs

//ES6 Object destructuring example
// let user = {name: 'Liem', age: 22};
// let {name} = user;
// console.log(name);


//connect to server and corresponding db
MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
  if(err){
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Successfully connected to MongoDB server');
  const db = client.db('TodoApp');
  //insert Todo
  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, result) => {
  //   if(err){
  //     return console.log('Unable to insert Todo.', err);
  //   }
  //
  //   console.log(JSON.stringify(result.ops), undefined, 2); //ops stores all documents added to db
  // });

  //Insert new doc into Users(name, age, location)
  // db.collection('Users').insertOne({
  //   name: 'Liem',
  //   age: 22,
  //   location: 'Davenport'
  // }, (err, result) =>{
  //   if(err){
  //     return console.log('Unable to insert user', err);
  //   }
  //   //console.log(JSON.stringify(result.ops, undefined, 2));
  //   console.log(result.ops[0]._id.getTimestamp());
  // });
  client.close();
});
