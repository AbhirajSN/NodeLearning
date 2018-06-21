var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    name:String,
    phone:Number,
    address: String,
    city: String,
    state: String,
    pincode: Number
});

module.exports = mongoose.model('user', userSchema);