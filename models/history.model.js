var mongoose = require('mongoose');

var historySchema = mongoose.Schema({
    t1: String,
    
});


module.exports = mongoose.model('history', historySchema);