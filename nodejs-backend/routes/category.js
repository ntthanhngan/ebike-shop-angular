const express = require('express');

const categoryController = require('../controllers/category');

const router = express.Router();

router.get('/', categoryController.getAllCategory)

module.exports = router;