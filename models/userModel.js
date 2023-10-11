const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
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



//hash password
userSchema.pre('save',async function(next) 
{
    if(!this.isModified('password'))
    return next();
    try{
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
        next();
    } catch(error) {
        next(error);
    }
});

userSchema.methods.comparePassword = async function(password){
    try{
        return await bcrypt.compare(password, this.password);
    }catch(error){
        throw error;
    }
};

module.exports = mongoose.model('User', userSchema);