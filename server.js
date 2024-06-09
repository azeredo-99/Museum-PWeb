const express = require('express');
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose();
const bodyParser = require('body-parser');

const app = express();
const db = new sqlite3.Database('./database/database.db');

app.use(cors());
app.use(bodyParser.json());


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

// Endpoint para registrar um novo usuário
app.post('/register', (req, res) => {
    const { nome, email, password } = req.body;

    db.get('SELECT * FROM Utilizador WHERE nome = ? OR email = ?', [nome, email], (err, row) => {
        if (err) {
            res.status(500).json({ message: 'error', error: err.message });
        } else if (row) {
            res.json({ message: 'error', error: 'Usuário ou email já existem' });
        } else {
            db.run('INSERT INTO Utilizador (nome, email, password) VALUES (?, ?, ?)', [nome, email, password], (err) => {
                if (err) {
                    res.status(500).json({ message: 'error', error: err.message });
                } else {
                    res.json({ message: 'success', data: 'Usuário registrado com sucesso' });
                }
            });
        }
    });
});

// Endpoint para login
app.post('/login', (req, res) => {
    const { nome, password } = req.body;

    db.get('SELECT * FROM Utilizador WHERE nome = ? AND password = ?', [nome, password], (err, row) => {
        if (err) {
            res.status(500).json({ message: 'error', error: err.message });
        } else if (row) {
            res.json({ message: 'success', data: 'Login bem-sucedido' });
        } else {
            res.json({ message: 'error', error: 'Nome de usuário ou senha inválidos' });
        }
    });
});


app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
