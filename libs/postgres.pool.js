const { Pool } = require('pg')
const { config } = require('./../config/config')

/* Protegemos los datos sensibles con URI Encode */
const USER = encodeURIComponent(config.dbUser)
const PASSWORD = encodeURIComponent(config.dbPassword)
/*URI de conexión  */
const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`

/* const pool = new Pool({
  host: 'localhost',
  port: 5432,
  user: 'oscar',
  password: 'admin123',
  database: 'my-store-db',
}) */

const pool  = new Pool({ connectionString: URI})

module.exports = pool

