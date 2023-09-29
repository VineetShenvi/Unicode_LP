const Question = require('../models/questionModel');

// ask questions
const askquestion = async(req,res) => {
    try{
        const{ questionText , category  } = req.body;
        const userId = req.userId;
        // new question
        const question = new Question({ questionText , category , user : userId});
        await question.save();

        res.status(201).json({ message : 'succesful'});   
    }catch (error) {
        res.status(500).json({error : 'server error'})
    }
};

//get QS
const getquestionId = async (req, res) => {
    try {
      const { questionId } = req.params;
  
      // Implement the logic to find the question by its ID in the database
      const question = await Question.findById(questionId);
  
      if (!question) {
        return res.status(404).json({ error: 'Question not found' });
      }
  
      res.status(200).json({ question });
    } catch (error) {
      res.status(500).json({ error: 'Server error' });
    }
  };

  module.exports = {
    askquestion,
    getquestionId

  };