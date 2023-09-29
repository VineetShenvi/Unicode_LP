const mongoose = require('mongoose');

//question schema 
const questionSchema = new mongoose.Schema({
    questionText:{
        type: String,
        required: true,
    },
    category:{
        type: String,
        required: true,
    },
   user : {
    type:mongoose.Schema.Types.ObjectId,
    ref: 'User',
   } 
});

module.exports = mongoose.model('Question',questionSchema);