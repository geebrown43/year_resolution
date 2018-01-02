// Update with your config settings.
require('dotenv').config()
const environment = process.env.NODE_ENV || 'development'
module.exports = {

  development: {
    client: 'pg',
    connection: {
      host: 'localhost',
      database: 'new-year'
    }
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
    
  }

};
