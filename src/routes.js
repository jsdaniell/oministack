const express = require('express');
const PostController = require('./controllers/PostController');
const uploadConfig = require('./config/upload')
const multer = require('multer');

const routes = new express.Router();
const upload = multer(uploadConfig);

routes.post('/posts', upload.single('image'), PostController.store);

module.exports = routes;