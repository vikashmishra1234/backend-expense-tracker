const mongoose = require('mongoose');

const signUpSchema = mongoose.Schema({
    Name:{
        type:String,
        required:true
    },
    Email:{
        type:String,
        required:true
    },
    Password:{
        type:String,
        required:true
    },
});

module.exports = mongoose.model('user',signUpSchema);