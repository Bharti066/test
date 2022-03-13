const mongoose = require('mongoose');
const userSchenma = new mongoose.Schema({
    email:{
        type:String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
})
let User = mongoose.model("User", userSchenma);
 
module.exports = User;
 