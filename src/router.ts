import path from 'node:path'

import { Router } from 'express'
import multer from 'multer'
import { fileURLToPath } from 'url'

import { listCategories } from './app/useCases/category/listCategories.js'
import { createCategory } from './app/useCases/category/createCategory.js'
import { listProducts } from './app/useCases/products/listProducts.js'
import { createProduct } from './app/useCases/products/createProduct.js'
import { listProductsByCategory } from './app/useCases/category/listProductsByCategory.js'
import { listOrders } from './app/useCases/orders/listOrders.js'
import { createOrder } from './app/useCases/orders/createOrder.js'

export const router = Router()

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, callback){
      callback(null, path.join(__dirname, '..', 'uploads'))
    },
    filename(req, file, callback) {
      callback(null, `${Date.now()}-${file.originalname}`)
    }
  }),
})

// List categories

router.get('/categories', listCategories)

// Create category

router.post('/categories', createCategory)

// list products

router.get('/products', listProducts)

// Create product

router.post('/products', upload.single('image'), createProduct)

// get products by category

router.get('/categories/:categoryId/products', listProductsByCategory)

// List orders

router.get('/orders', listOrders)

// Create order

router.post('/orders', createOrder)

// change order status

router.patch('/orders/:orderId', (req, res) => {
    res.send('OK')
})

// Delete / Cancel order

router.delete('/orders/:orderId', (req, res) => {
    res.send('OK')
})
