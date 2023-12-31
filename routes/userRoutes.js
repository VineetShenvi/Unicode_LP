const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const  isAuthenticated  = require("../middleware/auth.js");

//authentication routes
router.post('/signup', userController.signup);
router.post('/login',userController.login);

module.exports = router;