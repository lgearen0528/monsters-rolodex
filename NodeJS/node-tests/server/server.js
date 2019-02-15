const express = require('express');

let app = express();

app.get('/', (req, res) => {
  res.status(404).send({
    error: 'Page not found.',
    name: 'Todo App v1.0'
  });
});

app.get('/users', (req, res) =>{
  res.send([
    {
      name: 'Liem',
      age: 22
    }, {
      name: 'Missy',
      age: 27
    }, {
      name: 'Bob',
      age: 25
    }
  ]);
})

app.listen(3000);
module.exports.app = app;
