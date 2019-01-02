let mongoose = require('mongoose');
//configure to use promises
mongoose.Promise = global.Promise;
//connect to local mongodb
mongoose.connect('mongodb://localhost:27017/TodoApp');

module.exports = {mongoose};
