const mongoose = require('mongoose');
var passportLocalMongoose = require('passport-local-mongoose');


const userSchema = mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    username: {
        type: String
    },
    aadharNo:{
        type:Number
    },
    mobileNo:{
        type:Number
    },
    password:{
        type:String
    },
    confirmPassword:{
        type:String
    },
    DOB:{
        type:Date
    }

   
});

userSchema.plugin(passportLocalMongoose);

const User = mongoose.model('User', userSchema);

module.exports = User;