var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    userName: String,
    password: String,
    deivices: {
        name:String,
        seri:String,

    }
});




module.exports = mongoose.model('user', userSchema);
