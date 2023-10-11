const express = require('express');
const mongoose = require('mongoose');
const validator = require('validator');
const morgan = require('morgan');
const bodyParser = require('body-parser');

require('dotenv').config();
require('./connection')

const PORT = process.env.PORT || 3000;
const app = express();

app.use(bodyParser.json());
app.use(morgan('dev'));

//import routes
const userRoutes = require('./routes/userRoutes');
const questionRoutes = require('./routes/questionRoutes');
const answerRoutes = require('./routes/answerRoutes');

//set routes
app.use('/user', userRoutes);
app.use('/question', questionRoutes);
app.use('/answer', answerRoutes);
app.use(express.json())


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

