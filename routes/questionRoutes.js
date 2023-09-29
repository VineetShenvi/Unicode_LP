const express = require('express');
const router = express.Router();
const questionController = require('../controllers/questionController');

// Define question routes here
router.post('/askquestion', questionController.askquestion);
router.get('/:questionId', questionController.getquestionId);

module.exports = router;