const express = require('express');
const UserService = require('../services/user.services');
//const { faker } = require('@faker-js/faker');

const router = express.Router()
const service = new UserService()

/* router.get('/', (req, res) => {
  const { limit, offset } = req.query
  if (limit && offset) {
    res.json({
      limit,
      offset
    });
  } else {
    res.send('No hay parametros');
  }
}) */

router.get('/', async (req, res, next) => {
  try {
    const users = await service.find()
    res.json(users)
  } catch (error) {
    next(error)
  }
})

module.exports = router
