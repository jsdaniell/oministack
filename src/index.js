const express = require('express');
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://jsdaniell:mo8826B92@cluster0-abgiq.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
});

const app = express();

const port = 3333;

app.use(require('./routes'));

app.listen(port);