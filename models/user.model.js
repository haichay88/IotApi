var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    userName: String,
    password: String,
    devices: [{
        name:String,
        seri:String,
        IsOn:String
    }]
});




module.exports = mongoose.model('user', userSchema);
