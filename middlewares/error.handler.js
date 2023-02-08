const { ValidationError } = require("sequelize");
const boom = require('@hapi/boom')

function logErrors (err, req, res, next){
  console.log('logErrors');
  console.error(err)
  next(err)
}

function errorHandler (err, req, res, next){
  console.log('errorHandler');
  res.status(500).json({
    message: err.message,
    stack: err.stack
  })
  next(err)
}

function boomErrorHandler (err, req, res, next) {
  console.log('Boom Error Handler');
  if (err.isBoom){
    const {output} = err
    res.status(output.statusCode).json(output.payload)
  }
  next(err)
}

function ormErrorHandler(err, req, res, next){
  if (err instanceof ValidationError){
    boomErrorHandler(boom.badRequest(err.message), req, res,next)
  }
  next(err)
}

module.exports = {logErrors, errorHandler, boomErrorHandler, ormErrorHandler}
