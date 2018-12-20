let db = require('./db.js');

module.exports.handleSignup = (email, password) =>{
  //Check if email already exists
  //save the user to db
  //send welcome email
  db.saveUser({
    //ES6 syntax
    email, password   //old syntax => {email: email, password:password}
  });
};
