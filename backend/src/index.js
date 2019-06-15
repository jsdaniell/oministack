const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');

const app = express();

const server = require('http').Server(app);
const io = require('socket.io')(server);

mongoose.connect('mongodb+srv://jsdaniell:mo8826B92@cluster0-abgiq.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
});

app.use((req, res, next) => {
    req.io = io;

    next();
})

app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads', 'resized')));

app.use(cors());

const port = 3333;

app.use(require('./routes'));

server.listen(port);