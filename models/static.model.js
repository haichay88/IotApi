var mongoose = require('mongoose');
var staticSchema = mongoose.Schema({
    lam1: String,
    lam2:String,
    lam3:String,
    lam4:String,
    userId:String
   
   
});


module.exports = mongoose.model('static', staticSchema);
