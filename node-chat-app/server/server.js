const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
let app = express();
//http Server
let server = http.createServer(app)
let io = socketIO(server);


app.use(express.static(publicPath));

io.on('connection', (socket) => {
  console.log('New user connected');

  // socket.emit('newEmail', {
  //   from: 'missy@hello.com',
  //   text: 'Hey. What is going on?',
  //   createdAt: 123
  // });
  // socket.on('createEmail', (newEmail) => {
  //   console.log('createEmail', newEmail);
  // });
  socket.on('disconnect', () => {
    console.log('User was disconnected');
  });

  socket.emit('newMessage', {
    from: 'Liem',
    text: 'foo bar zee doo.',
    createdAt: 12233
  });
  socket.on('createMessage', (message) => {
      console.log('createMessage', message);
  });


});


server.listen(port, () => {
  console.log('Server is up on ' + port);
});
