const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'your_password',
    database: 'your_database'
});

db.connect();

exports.register = (username) => {
    return new Promise((resolve, reject) => {
        const query = 'INSERT INTO users (username) VALUES (?)';

        db.query(query, username, (error, results) => {
            if (error) {
                reject(error);
            } else {
                resolve(results);
            }
        });
    });
};