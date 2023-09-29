const mongoose = require('mongoose');

const answerSchema = new mongoose.Schema({
    answerText: {
        type: String,
        required: true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    question: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Question',
    },
});

module.exports = mongoose.model('Answer', answerSchema);