const router = require('express').Router();
const multer  = require('multer');
const upload = multer({ dest: 'uploads' });
const productController = require('./controller');

router.get('/product', productController.index)
router.get('/product/:id', productController.view)
router.get('/product?search', productController.index)
router.post('/product', productController.store)
router.put('/product', productController.update)
router.delete('/product/:id', productController.destroy)
// router.post('/product', upload.single('image'), productController.store)

// express.get('/category', (req, res) => {
//     res.json({
//         status: "succesfully",
//         message: "category page"
//     })
// })

// express.get('/:category/:tag', (req, res) => {
//     const { category, tag } = req.params;
//     res.json({
//         category,
//         tag
//     })
// })

module.exports = router;