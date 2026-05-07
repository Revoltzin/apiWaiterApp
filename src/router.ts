import { Router } from 'express'
import multer from 'multer'

import { listCategories } from './app/useCases/category/listCategories.js'
import { createCategory } from './app/useCases/category/createCategory.js'
import { listProducts } from './app/useCases/products/listProducts.js'
import { createProduct } from './app/useCases/products/createProduct.js'

export const router = Router()

// List categories

router.get('/categories', listCategories)

// Create category

router.post('/categories', createCategory)

// list products

router.get('/products', listProducts)

// Create product

router.post('/products', createProduct)

// get products by category

router.get('/categories/:categoryId/products', (req, res) => {
    res.send('OK')
})

// List orders

router.get('/orders', (req, res) => {
    res.send('OK')
})

// Create order

router.post('/orders', (req, res) => {
    res.send('OK')
})

// change order status

router.patch('/orders/:orderId', (req, res) => {
    res.send('OK')
})

// Delete / Cancel order

router.delete('/orders/:orderId', (req, res) => {
    res.send('OK')
})
