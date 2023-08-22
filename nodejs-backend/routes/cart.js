const express = require('express');

const cartController = require('../controllers/cart');

const router = express.Router();

router.get('/:id', cartController.getCartByAccId);

router.post('/', cartController.postCart);

router.put('/', cartController.putCart);

router.delete('/:id', cartController.deleteCart);

module.exports = router;