var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    userName: String,
    password: String,
    fullName:String,
    devices: [{
        name:String,
        seri:String,
        channel:Number,
        channelCode:String,
        isRepeat:Boolean,
        repeatTime:Number,
        isSetTime:Boolean,
        setTime:String
        
    }]
});




module.exports = mongoose.model('user', userSchema);
