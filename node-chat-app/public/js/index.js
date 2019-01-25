var socket = io();

socket.on('connect', function () {
  console.log('connected to server');


  // socket.emit('createEmail', {
  //   to:'liem@example.com',
  //   text:'hey this is missy'
  // });
  socket.emit('createMessage', {
    from: 'missy',
    text: 'Hi there!'
  });
});

socket.on('disconnect', function (){
  console.log('Disconnected from server.')
});

// socket.on('newEmail', function (email){
//   console.log('New email', email);
// });

socket.on('newMessage', function(message){
  console.log('newMessage', message);
});
