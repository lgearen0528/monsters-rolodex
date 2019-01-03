const {ObjectID} = require('mongodb');
let express = require('express');
let bodyParser = require('body-parser');

let {mongoose} = require('./db/mongoose.js');
let {Todo} = require('./models/Todo.js');
let {User} = require('./models/User.js');

let app = express();

app.use(bodyParser.json());

//challenge GET /todos/{id}

app.get('/todos/:id', (req, res) => {
  let id = req.params.id;
  //validate ID using isValid
    //stop operation if invalid, give 404, send empty body
  if(!ObjectID.isValid(id)){
    return res.status(404).send();
  }
  Todo.findById(id).then((todo) => {
    if (!todo){
      return res.status(404).send();
    }
    res.status(404).send(todo);
  }).catch((e) => {
    res.status(400).send();
  });
  //find by id to grab matching document
    //Successful
      //if todo - send it back
      //if no todo - send back 404 with empty body
    //error
      //400 - and send empty body back
  // res.send(id);
});


app.listen(3000, () =>{
  console.log('Started on port 3000');
});
//post for resource creation
app.post('/todos', (req, res) => {
  let todo = new Todo({
    text: req.body.text
  });
  todo.save().then((doc) =>{
    res.send(doc);
  }, (e) =>{
    res.status(400).send(e);
  })
});
//get all todos
app.get('/todos', (req, res) => {
  Todo.find().then((todos) => {
    res.send({todos});
  }, (e) => {
    res.status(400).send(e);
  });
});






//export for testing
module.exports = {app};




//basic objects
//set up a TODO model

// //create new todo with model above
// let newTodo = new Todo({
//   text: 'Something to do'
// });
// newTodo.save().then((doc) => {
//   console.log('Successfully added Todo', doc);
// }, (e) => {
//   console.log('Unable to add Todo', e);
// });


// let newUser = new User({
//   email: ' liam.g.7777@gmail.com   '
// });
// newUser.save().then((doc) => {
//   console.log('Added new User', doc);
// }, (e) => {
//   console.log('Unable to add new User', e);
// });
