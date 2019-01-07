const {ObjectID} = require('mongodb');
const {Todo} = require('./../server/models/Todo');
const {User} = require('./../server/models/User');

// //Todo.remove({})
// Todo.remove({}).then((result) => {
//   console.log(result);
// });

//findOneAndRemove
//findByIdandRemove

Todo.findByIdAndRemove('5c339c9fc32abb097678bcc8').then((todo) => {
  console.log(todo);
});
