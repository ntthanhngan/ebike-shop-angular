const express = require('express');

const productsController = require('../controllers/product');

const router = express.Router();

router.get('/', productsController.getAllProducts);
router.get('/details/:id', productsController.getProductById);
router.get('/paginate', productsController.paginateProduct);

router.post('/', productsController.postProducts);
router.post('/search', productsController.searchProduct);

router.put('/', productsController.putProduct);

router.delete('/:id', productsController.deleteProduct);

module.exports = router;