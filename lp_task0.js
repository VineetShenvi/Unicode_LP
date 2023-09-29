const express = require('express');
const mongoose = require('mongoose');
const validator = require('validator');
const morgan = require('morgan');
const bodyParser = require('body-parser');
require('dotenv').config();

const userRoutes = require('./routes/userRoutes');
const questionRoutes = require('./routes/questionRoutes');
const answerRoutes = require('./routes/answerRoutes');

const PORT = process.env.PORT || 3000;
const MONGODB_URL= process.env.MONGODB_URL;
console.log(MONGODB_URL);
const app = express();


app.use(bodyParser.json());
app.use(morgan('dev'));

mongoose.connect(MONGODB_URL, {
    useNewUrlParser: true,//bestest faster route shortcut types
    useUnifiedTopology: true
  }).then(() =>{
      console.log('connected to mongodb');
  })
  .catch(error => {
      console.error('error',error);
  });

  app.use('/user', userRoutes);
  app.use('/question',questionRoutes);
  app.use('/answer',answerRoutes);

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
