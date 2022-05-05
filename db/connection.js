const mysql = require('mysql2');

// connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        // default MySQL username is 'root'
        user: 'root',
        // add password
        password: ' ',
        database: 'election'
    },
    console.log('Connected to the election database.')
);

module.exports = db;
