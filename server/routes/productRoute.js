const express = require('express');
const { addProduct, getProduct, updateProduct } = require('../controllers/productController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();
router.post('/addProduct', authMiddleware,addProduct);
router.get('/getProduct', authMiddleware, getProduct);
router.put('/updateProduct', authMiddleware, updateProduct);

module.exports = router;