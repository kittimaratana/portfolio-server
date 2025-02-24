require("dotenv").config();

//connect setup
const environment = process.env.NODE_ENV || 'development';

// Add more detailed logging
console.log('All environment variables:', process.env);
console.log('Current environment:', environment);
console.log('Database connection config:', {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_LOCAL_USER,
  database: process.env.DB_LOCAL_DBNAME,
  password: '***' // Don't log the actual password
});

const knexConfig = {
  development: {
    client: "mysql2",
    connection: {
      host: 'mysql',  // Hardcode to mysql container name
      port: 3306,
      user: 'root',
      password: 'cursor123',
      database: 'portfolio',
      charset: "utf8",
    },
    migrations: {
      directory: './migrations',
      loadExtensions: ['.js']
    },
    seeds: {
      directory: './seeds',
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