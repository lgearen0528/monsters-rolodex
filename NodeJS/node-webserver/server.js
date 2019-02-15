const express = require('express');
const hbs = require('hbs'); //template for dynamic pages
const fs = require('fs');

const port = process.env.PORT || 3000;
//create express app
let app = express();

hbs.registerPartials(__dirname + '/views/partials');

//middleware, configure express app
app.set('view engine', 'hbs');

app.use((req, res, next) => {
  let now = new Date().toString();
  let log = `${now}: ${req.method} ${req.url}`;
  console.log(log);
  fs.appendFile('server.log', log + '\n', (err) => {
    if(err){
      console.log('Unable to append to server.log');
    }
  });
  next();
});

// app.use((req, res, next) => {
//   res.render('maintenance.hbs');
// });
app.use(express.static(__dirname + '/public')); //need absolute paths

//helper functions
hbs.registerHelper('getCurrentYear', () =>{
  return new Date().getFullYear();
});

hbs.registerHelper('screamIt', (text) => {
  return text.toUpperCase();
});


//routing
app.get('/about', (req, res) =>{
  res.render('about.hbs', {
    pageTitle: 'About Page'
  });
});
app.get('/projects', (req, res) =>{
  res.render('projects.hbs', {
    pageTitle: 'Projects Page',
    welcomeMessage: 'Welcome to my prjects page'
  });
});
app.get('/', (req, res) => {
  res.render('home.hbs', {
    pageTitle: 'Home Page',
    welcomeMessage: 'Welcome to my site!'
  })
});

app.get('/bad', (req, res) => {
  res.send({
    errorMessage: 'Error handling request!'
  })
});
//go to localhost:3000, log message that it's up
app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
