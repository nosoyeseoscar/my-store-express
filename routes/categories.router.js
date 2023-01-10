const express = require('express');
//const { faker } = require('@faker-js/faker');

const router = express.Router()

router.get('/categories/:categoryId/products/:productId',(req, res)=>{
  const {categoryId, productId} = req.params
  res.json({
    categoryId,
    productId,
    name: 'product 3',
    price: 300,
  })
})

module.exports = router
