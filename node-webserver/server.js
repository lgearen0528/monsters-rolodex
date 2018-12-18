const express = require('express');

//create express app
let app = express();

//routing
app.get('/', (req, res) => {
  // res.send('<h1>Hello Express!</h1>');
  res.send({
    name:'Liem',
    likes:[
      'apples',
      'hiking',
      'ribs'
    ]
  });
});

app.get('/about', (req, res) =>{
  res.send('<h1>About Page</h1>');
});

app.get('/bad', (req, res) => {
  res.send({
    errorMessage: 'Error handling request!'
  })
});
//go to localhost:3000
app.listen(3000);
