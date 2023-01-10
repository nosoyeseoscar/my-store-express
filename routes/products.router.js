const express = require('express');
const { faker } = require('@faker-js/faker');

const router = express.Router()

router.get('/',(req, res)=>{
  const { size} = req.query
  const limit = size || 10
  const products = []
  for (let index = 0; index < limit; index++) {
    products.push({
      name: faker.commerce.product(),
      price: parseInt(faker.commerce.price(), 10),
      image: faker.image.imageUrl(),
    })

  }
  res.json(products)
})

router.get('/:id', ( req,res)=>{
  const {id} = req.params;
  res.json({
    id,
    name: 'producto 1',
    price: 100,
  })
})

router.post('/', (req, res)=>{
  const body = req.body
  res.json({
    message: 'created product',
    data: body
  })
})

module.exports = router
