var mongoose = require('mongoose');

var channelSchema = mongoose.Schema({
    channelId: String,
    title: String,
    imgUrl: String
});




module.exports = mongoose.model('Channel', channelSchema);
