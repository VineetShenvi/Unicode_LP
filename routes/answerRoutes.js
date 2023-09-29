const express = require('express');
const router = express.Router();
const answerController = require('../controllers/answerController');

//  new answer
router.post('/', answerController.createAnswer);


// router.get('/question/:questionId', answerController.getAnswersForQuestion);

module.exports = router;