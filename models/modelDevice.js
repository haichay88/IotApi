var mongoose = require('mongoose');

var modelDeviceSchema = mongoose.Schema({
    seriNumber: String,
    channelInput: Number,
    channelAnalog: Number,
    createdDate:Date,

    
});


module.exports = mongoose.model('modelDevice', modelDeviceSchema);