let moment = require('moment');
//Jan 1st, 1970 00:00:10 am
let date = moment();
date.add(1, 'years').subtract(9, 'month');
console.log(date.format('MMM Do, YYYY'));

// let date = new Date();
// let months = ['Jan']
// console.log(date.getMonth());


//challenge:
//10:35 am
//6:01 am
// date.add(10, 'hour')
console.log(date.format('h:mm a'));

let someTimestamp = moment().valueOf();
console.log(someTimestamp);

let createdAt = 1234;
let date2 = moment(createdAt);
console.log(date2.format('MMM Do, YYYY....h:mm a'));
