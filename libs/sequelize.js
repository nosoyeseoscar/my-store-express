const { Sequelize} = require('sequelize')

const { config } = require('./../config/config.js')

/* Protegemos los datos sensibles con URI Encode */
const USER = encodeURIComponent(config.dbUser)
const PASSWORD = encodeURIComponent(config.dbPassword)
/*URI de conexión  */
const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`

const sequelize = new Sequelize(URI, {
  dialect: 'postgres',
  logging: console.log,
})

module.exports = sequelize
