const { Sequelize} = require('sequelize')

const { config } = require('./../config/config.js')

const setupModels = require('./../db/models')

/* Protegemos los datos sensibles con URI Encode */
const USER = encodeURIComponent(config.dbUser)
//const MYSQL_USER = encodeURIComponent(config.mysqlUser)
const PASSWORD = encodeURIComponent(config.dbPassword)
/*URI de conexión  */
const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`
//const URI = `mysql://${MYSQL_USER}:${PASSWORD}@${config.dbHost}:${config.mysqlPort}/${config.dbName}`


const sequelize = new Sequelize(URI, {
  dialect: 'postgres',
  logging: console.log,

})

/* const sequelize = new Sequelize(URI, {
  dialect: 'mysql',
  logging: console.log,

}) */

/* const sequelize = new Sequelize(  config.dbName, config.mysqlUser, config.dbPassword, {
  host:config.dbHost,
  dialect: 'mysql'
}); */

setupModels(sequelize)

//sequelize.sync()

module.exports = sequelize
