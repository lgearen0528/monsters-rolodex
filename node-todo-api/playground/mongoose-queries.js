const {ObjectID} = require('mongodb');
const {Todo} = require('./../server/models/Todo');
const {User} = require('./../server/models/User');

// let id = '5c2e4f5f0d16ea36b4566b5411';

// if (!ObjectID.isValid(id)){
//   console.log('Id not valid!');
// }
// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//   if(!todo){
//     return console.log('Id not found');
//   }
//   console.log('Todo by id', todo);
// }).catch((e) => {
//   console.log(e);
// });

//challenge: query user db

//let newId = '5c2d06dfe6c97245a0790aa1';
// if (!ObjectID.isValid(newId)) {
//   console.log('invalid user id');
// }


User.findById('5c2e55dbc32abb097678a2f9').then((user) => {
  if(!user){
    return console.log('User not found');
  }
  console.log(JSON.stringify(user, undefined, 2));
}, (e) => {
  console.log(e);
});
