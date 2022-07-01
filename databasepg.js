const {Client} = require('pg')

const client = new Client({
    host: "localhost",
    user: "rhongomyniad",
    password: "!0wPwrM0de",
    port: "5432",
    database:"wismo"
})

client.connect();

client.query(`SELECT * FROM orderinfo`, (err, res) =>
    {
        if(!err){
            console.log(res.rows)
        } else {
            console.log(err.message);
        }

        client.end();
    })