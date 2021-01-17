const express = require('express');
const router = express.Router();
const products = require('./products');
const users = require('./users');
const config = require('./config');

router.use(products.config.ENDPOINT, products.route);
router.use(users.config.ENDPOINT, users.route);
module.exports = {
        config,
        route:router
};