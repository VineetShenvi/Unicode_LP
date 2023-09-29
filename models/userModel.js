const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema({
    username : {
        type : String,
        unique : true,
        required : true,
    },
    mobile :{
        type : String,
        unique : true,
        required : true,
        validate:{
            validator: (value) => /^\d{10}$/.test(value),
            message:'Invalid mobile number ',
        }
    },
    email : {
        type : String,
        unique : true,
        required : true,
        lowercase:true,
        validate: {
            validator: (value) =>
        validator.isEmail(value),
    message: 'Invalid email',      
  }
    },
    password : {
        type : String,
        required :true,
        minlength: 6,
    },

});

module.exports = mongoose.model('User', userSchema);