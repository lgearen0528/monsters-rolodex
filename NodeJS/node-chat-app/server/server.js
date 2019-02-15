const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');
const {generateMessage, generateLocationMessage} = require('./utils/message.js');
const {isRealString} = require('./utils/validation.js');
const {Users} = require('./utils/users.js');
const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
let app = express();
//http Server
let server = http.createServer(app)
let io = socketIO(server);
let users = new Users();

app.use(express.static(publicPath));

io.on('connection', (socket) => {
  console.log('New user connected');

  socket.on('disconnect', () => {
    console.log('User was disconnected');
    let user = users.removeUser(socket.id);
    if(user){
      io.to(user.room).emit('updateUserList', users.getUserList(user.room));
      io.to(user.room).emit('newMessage', generateMessage('Admin', `${user.name} has left`));
    }
  });

  socket.on('join', (params, callback) => {
    if (!isRealString(params.name) || !isRealString(params.room)){
      return callback('Name and room name are required');
    }
    socket.join(params.room);
    users.removeUser(socket.id);
    users.addUser(socket.id, params.name, params.room);
    io.to(params.room).emit('updateUserList', users.getUserList(params.room));

    //socket.leave(params.room);

    //io.emit -> emits to every user connected => io.to(params.room).emit() -> sends to specific room
    //socket.broadcast.emit -> sends to everyone connected except current user => socket.broadcast.to(params.room).emit() sends to everyone in room but current user
    //socket.emit -> sends to one user

    //socket emit from admin, text welcome to the chat app
    socket.emit('newMessage', generateMessage('Admin', 'Welcome to the chat app!'));
    socket.broadcast.to(params.room).emit('newMessage', generateMessage('Admin', `${params.name} has joined`));
    //socket broadcast emit from admin text new user joined

    callback();
  });
  socket.on('createMessage', (message, callback) => {
      let user = users.getUser(socket.id);
      if(user && isRealString(message.text)){
        io.to(user.room).emit('newMessage', generateMessage(user.name, message.text));
      }
      callback('This is from the server.');
  });
  socket.on('createLocationMessage', (coords) => {
    let user = users.getUser(socket.id);
    if(user){
        io.to(user.room).emit('newLocationMessage', generateLocationMessage(user.name, coords.latitude, coords.longitude));
    }
  });

});


server.listen(port, () => {
  console.log('Server is up on ' + port);
});
module.exports={app};
