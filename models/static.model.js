var mongoose = require('mongoose');
var staticSchema = mongoose.Schema({
    lam1: String,
    lam2:String,
    userId:String
   
   
});


module.exports = mongoose.model('static', staticSchema);
