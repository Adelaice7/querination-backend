const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require("body-parser");
const mongoose = require('mongoose');

const questionsRoutes = require('./api/routes/questions');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/questions', questionsRoutes);

//TODO connect to MongoDB Atlas database
// mongoose.connect()

app.use((req, res, next) => {
    const error = new Error('Not found');
    error.status(404);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});

module.exports = app;
