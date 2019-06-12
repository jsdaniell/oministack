const express = require('express');

const routes = new express.Router();

routes.get('/', (req, res) => {
    res.send('Hello');
})

module.exports = routes;