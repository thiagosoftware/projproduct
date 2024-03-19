const { Router } = require("express")
const productController = require('../controllers/productController')

const router = Router()

router.get('/products', productController.getAllProducts)
router.get('/products/:id', productController.getProductsById)
router.get('/products', productController.createProduct)
router.get('/products/:id', productController.updateProduct)
router.get('/products/:id', productController.deleteProduct)

module.exports = router