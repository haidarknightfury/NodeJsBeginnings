// Loading configurations from environment file
const result = require('dotenv').config()
console.log(result);

let environment = {
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password : process.env.DB_PASS
}
console.log(environment);