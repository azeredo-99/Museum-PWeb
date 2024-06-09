const express = require('express');
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose();

const app = express();
const db = new sqlite3.Database('./database/database.db');

app.use(cors()); 

app.get('/search', (req, res) => {
    const query = req.query.query;
    db.all(
        `SELECT * FROM Museu WHERE nome LIKE ?`,
        [`%${query}%`],
        (err, rows) => {
            if (err) {
                res.status(500).json({ message: 'error', error: err.message });
            } else {
                res.json({ message: 'success', data: rows });
            }
        }
    );
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
