const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');
const {generateMessage, generateLocationMessage} = require('./utils/message.js');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
let app = express();
//http Server
let server = http.createServer(app)
let io = socketIO(server);


app.use(express.static(publicPath));

io.on('connection', (socket) => {
  console.log('New user connected');

  //socket emit from admin, text welcome to the chat app
  socket.emit('newMessage', generateMessage('Admin', 'Welcome to the chat app!'));
  socket.broadcast.emit('newMessage', generateMessage('Admin', 'New user joined'));
  //socket broadcast emit from admin text new user joined

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

  // socket.emit('newMessage', {
  //   from: 'Liem',
  //   text: 'foo bar zee doo.',
  //   createdAt: 12233
  // });
  socket.on('createMessage', (message, callback) => {
      console.log('createMessage', message);

      io.emit('newMessage', generateMessage(message.from, message.text));
      callback('This is from the server.');
      // socket.broadcast.emit('newMessage', {
      //   from: message.from,
      //   text: message.text,
      //   createdAt: new Date().getTime()
      // });
  });
  socket.on('createLocationMessage', (coords) => {
    io.emit('newLocationMessage', generateLocationMessage('Admin', coords.latitude, coords.longitude));
  });

});


server.listen(port, () => {
  console.log('Server is up on ' + port);
});
module.exports={app};
