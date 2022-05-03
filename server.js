const mysql = require('mysql2');
const express = require('express');

const PORT = process.env.PORT || 3001;
const app = express();

// express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        // default MySQL username is 'root'
        user: 'root',
        password: ' ',
        database: 'election'
    },
    console.log('Connected to the election database.')
);

// default response for any other request (not found)
app.use((req, res) => {
    res.status(404).end();
});

db.query(`SELECT * FROM candidates`, (err, rows) => {
    console.log(rows);
});



app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});