const router = require('express').Router();
const productController = require('./controller');


router.get('/product', productController.index)
router.get('/product?search', productController.index)
router.get('/product/:id', productController.view)
router.post('/product', productController.store)
router.put('/product/:id', productController.update)
router.delete('/product/:id', productController.destroy)

module.exports = router;