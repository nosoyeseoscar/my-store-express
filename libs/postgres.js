const { Client } = require('pg')

async function getConnection() {
  /* const client = new Client({
    host: 'localhost',
    port: 5432,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  }) */

  const client = new Client({
    host: 'localhost',
    port: 5432,
    user: 'oscar',
    password: 'admin123',
    database: 'my-store-db',
  })

  await client.connect()
  return client
}

module.exports = getConnection

