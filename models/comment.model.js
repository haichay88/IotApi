var mongoose = require('mongoose');

var commentSchema = mongoose.Schema({
    authorProfileImageUrl: String,
    authorDisplayName: String,
    textDisplay: String,
    replies: [{
        authorProfileImageUrl: String,
        authorDisplayName: String,
        textDisplay: String,
    }]
});


module.exports = mongoose.model('Comment', commentSchema);