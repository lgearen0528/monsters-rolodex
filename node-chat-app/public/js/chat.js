let socket = io();

//This method automatically scrolls user for new messages
//unless user is scrolled up or looking at older messages
function scrollToBottom(){
  //selectors
  let messages = jQuery('#messages');
  let newMessage = messages.children('li:last-child');
  //Heights for scrolling functionality
  let clientHeight = messages.prop('clientHeight');
  let scrollHeight = messages.prop('scrollHeight');
  let scrollTop = messages.prop('scrollTop');
  let newMessageHeight = newMessage.innerHeight();
  let lastMessageHeight = newMessage.prev().innerHeight();

  if (clientHeight + scrollTop + newMessageHeight + lastMessageHeight >= scrollHeight){
    messages.scrollTop(scrollHeight);
  }
}
//User connects or joins room
socket.on('connect', function () {
  console.log('Connected to server.');
  let params = jQuery.deparam(window.location.search);

  socket.emit('join', params, function (err) {
    if (err){
      alert(err);
      window.location.href = '/';
    } else {
      console.log('No error');
    }
  });
});

//user disconnects or leaves room
socket.on('disconnect', function (){
  console.log('Disconnected from server.')
});

socket.on('updateUserList', function(users){
  let ol = jQuery('<ol></ol>');

  users.forEach(function (user){
    ol.append(jQuery('<li></li>').text(user));
  });
  jQuery('#users').html(ol);
});

//new message submitted to server, displays it with timestamp
socket.on('newMessage', function(message){
  let formattedTime = moment(message.createdAt).format('h:mm a');
  let template = jQuery('#message-template').html();
  let html = Mustache.render(template, {
    text: message.text,
    from: message.from,
    createdAt: formattedTime
  });
  appendAndScroll(html);
});

//when user submits message, textbox is cleared after sent to server
jQuery('#message-form').on('submit', function (e) {
  e.preventDefault();
  let messageTextbox = jQuery('[name=message]');
  socket.emit('createMessage', {
    text: messageTextbox.val()
  }, function () {
    messageTextbox.val('');
  });
});
//user 'sends location'
socket.on('newLocationMessage', function (message) {
  let formattedTime = moment(message.createdAt).format('h:mm a');
  let template = jQuery('#location-message-template').html();
  let html = Mustache.render(template, {
    from: message.from,
    createdAt: formattedTime,
    url: message.url
  });
  appendAndScroll(html);
});
let locationButton = jQuery('#send-location');
locationButton.on('click', function(){
  if (!navigator.geolocation){
    return alert('geolocation not supported by your browser.')
  }
  locationButton.attr('disabled', 'disabled').text('Sending location...');
  navigator.geolocation.getCurrentPosition(function(position){
    locationButton.removeAttr('disabled').text('Send location');
    socket.emit('createLocationMessage', {
      latitude: position.coords.latitude,
      longitude: position.coords.longitude
    });
  }, function() {
    alert('Unable to fetch location.');

  });
});

function appendAndScroll(html){
  jQuery('#messages').append(html);
  scrollToBottom();
};
