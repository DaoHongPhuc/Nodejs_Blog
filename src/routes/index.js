const express = require('express');
const router = express.Router();

const newsController = require('./../controller/NewsController');

function route(app) {
    app.use('/news', newsController.index);
}

module.exports = route;
