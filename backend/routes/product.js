const express = require('express')
const router = express.Router();

const {getProducts} = require('../controllers/product')

router.route('/products').get(getProducts);

module.exports = router ;