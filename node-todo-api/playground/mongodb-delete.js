//MongoClient needed to work with actual MongoDB Server
//const MongoClient = require('mongodb').MongoClient;

//mongo client destructuring
const {MongoClient, ObjectID} = require('mongodb'); //Pulling ObjectID allows to create new IDs


//connect to server and corresponding db
MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
  if(err){
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Successfully connected to MongoDB server');
  const db = client.db('TodoApp');

  //deleteMany
  // db.collection('Todos').deleteMany({text:'Eat lunch'}).then((result) =>{
  //   console.log(result);
  // });
  //deleteOne
  // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // });
  //findOneAndDelete -> deletes and returns specified
  // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
  //   console.log(result);
  // });

//delete duplicate Users
// db.collection('Users').deleteMany({name:'Liem'}).then((result) => {
//   console.log(result);
// });
// //delete one by unique id
db.collection('Users').findOneAndDelete({_id: new ObjectID("5c1bf63382d0980b98010549")}).then((results) =>{
  console.log(JSON.stringify(results, undefined, 2));
});

  //client.close();
});
