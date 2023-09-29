const Answer = require('../models/answerModel');
const Question = require('../models/questionModel'); // Import the Question model if not already imported.

// Create a new answer
exports.createAnswer = async (req, res) => {
    try {
        const { answerText, questionId } = req.body;
        const userId = req.userId; 

        // Check if the question exists
        const question = await Question.findById(questionId);

        if (!question) {
            return res.status(404).json({ error: 'Question not found' });
        }

        // Create a new answer
        const answer = new Answer({ answerText, user: userId, question: questionId });
        await answer.save();

        res.status(201).json({ message: 'Answer posted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};