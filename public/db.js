const {Client} = require('pg')

const client = new Client({
    host: "localhost",
    user: "rhongomyniad",
    password: "!0wPwrM0de",
    port: "5432",
    database:"wismo"
})

module.exports = client;