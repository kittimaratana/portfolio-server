require("dotenv").config();

//connect setup
const environment = process.env.NODE_ENV || 'development';
const knexConfig = {
  development: {
    client: "mysql2",
    connection: {
      database: process.env.DB_LOCAL_DBNAME,
      user: process.env.DB_LOCAL_USER,
      password: process.env.DB_LOCAL_PASSWORD,
      charset: "utf8",
    },
    migrations: {
      directory: __dirname + '/migrations',
    },
    seeds: {
      directory: __dirname + '/seeds',
    }
  },
  production: {
    client: 'pg',
    connection: {
      connectionString: process.env.DATABASE_URL,
      ssl: {
        rejectUnauthorized: false
      }
    },
    migrations: {
      directory: __dirname + '/migrations',
    },
    seeds: {
      directory: __dirname + '/seeds',
    }
  }
};

module.exports = knexConfig[environment];