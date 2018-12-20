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

  //access collection & find
  //print as array with promises
  // db.collection('Todos')
  //   .find({
  //     _id: new ObjectID('5c1bf40e40cb2432c4b137db')
  //   })
  //   .toArray().then((docs) => {
  //     console.log('Todos');
  //     console.log(JSON.stringify(docs, undefined, 2));
  //   }, (err) => {
  //     console.log('Unable to fetch todos', err);
  //   });

  // db.collection('Todos')
  //   .find()
  //   .count().then((count) => {
  //     console.log('Todos count: ', count);
  //   }, (err) => {
  //     console.log('Unable to fetch todos', err);
  //   });

  //query for only my Users in db
  db.collection('Users')
    .find({name: 'Liem'}).
    toArray().then((docs) => {
      console.log(docs);
      console.log('My todos');
      console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
      console.log('Unable to fetch my users');
    });

  //client.close();
});
