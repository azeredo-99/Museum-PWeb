const express = require('express');
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose();
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');

const app = express();
const db = new sqlite3.Database('./database/database.db');
const SECRET_KEY = 'your_secret_key'; // Substitua por uma chave secreta forte

app.use(cors());
app.use(bodyParser.json());

db.serialize(() => {
    db.run(`CREATE TABLE IF NOT EXISTS Visitas (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        data DATE DEFAULT (date('now'))
    )`);
});



app.get('/search', (req, res) => {
    const query = req.query.query;
    const sql = "SELECT * FROM Museu WHERE nome LIKE ?";
    const parametros = [`%${query}%`];
    db.all(sql, parametros, (err, rows) => {
        if (err) {
            res.status(500).json({ message: 'error', error: err.message });
        } else {
            res.json({ message: 'success', data: rows });
        }
    });
});

// Endpoint para registrar um novo usuário
app.post('/register', (req, res) => {
    const { username, email, password } = req.body;

    db.get('SELECT * FROM Utilizador WHERE username = ? OR email = ?', [username, email], (err, row) => {
        if (err) {
            res.status(500).json({ message: 'error', error: err.message });
        } else if (row) {
            res.json({ message: 'error', error: 'Usuário ou email já existem' });
        } else {
            db.run('INSERT INTO Utilizador (username, email, password) VALUES (?, ?, ?)', [username, email, password], (err) => {
                if (err) {
                    res.status(500).json({ message: 'error', error: err.message });
                } else {
                    res.json({ message: 'success', data: 'Usuário registrado com sucesso' });
                }
            });
        }
    });
});

// Middleware para verificar o token JWT
function authenticateToken(req, res, next) {
    const token = req.headers['authorization'];
    if (!token) return res.sendStatus(401);

    jwt.verify(token, SECRET_KEY, (err, user) => {
        if (err) return res.sendStatus(403);
        req.user = user;
        next();
    });
}

// Endpoint para obter histórico de compras
app.get('/purchase-history', authenticateToken, (req, res) => {
    const userId = req.user.id;
    db.all('SELECT * FROM Compras WHERE fk_id_user = ?', [userId], (err, rows) => {
        if (err) {
            res.status(500).json({ message: 'error', error: err.message });
        } else {
            res.json({ message: 'success', data: rows });
        }
    });
});




// Endpoint para login
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    db.get('SELECT * FROM Utilizador WHERE username = ? AND password = ?', [username, password], (err, row) => {
        if (err) {
            res.status(500).json({ message: 'error', error: err.message });
        } else if (row) {
            const token = jwt.sign({ id: row.id, username: row.username }, SECRET_KEY, { expiresIn: '1h' });
            console.log(token);
            res.json({ message: 'success', token });
        } else {
            res.json({ message: 'error', error: 'username de usuário ou senha inválidos' });
        }
    });
});




function getTablesData(callback) {
    let db2 = new sqlite3.Database('./database/database.db', (err) => {
        if (err) {
            console.error(err.message);
            callback(err);
            return;
        }
        console.log('Conectado à base de dados SQLite.');
    });

    const queries = [
        { name: 'Utilizador', query: 'SELECT * FROM Utilizador' },
        { name: 'Museu', query: 'SELECT * FROM Museu' },
        { name: 'Bilhetes', query: 'SELECT * FROM Bilhetes' },
        { name: 'Visitas', query: 'SELECT * FROM Visitas' }
    ];

    let results = {};

    let pending = queries.length;
    queries.forEach(({ name, query }) => {
        db2.all(query, [], (err, rows) => {
            if (err) {
                console.error(err.message);
                callback(err);
                return;
            }
            results[name] = rows;
            if (--pending === 0) {
                db2.close((err) => {
                    if (err) {
                        console.error(err.message);
                        callback(err);
                        return;
                    }
                    console.log('Conexão com a base de dados fechada.');
                    callback(null, results);
                });
            }
        });
    });
}

app.get('/dados', (req, res) => {
    getTablesData((err, results) => {
        if (err) {
            res.status(500).send('Erro ao obter dados da base de dados');
            return;
        }

        let html = '<!DOCTYPE html><html><head><title>Dados das Tabelas</title></head><body>';
        html += '<h1>Dados das Tabelas</h1>';

        for (let table in results) {
            html += `<h2>${table}</h2>`;
            html += '<table border="1"><tr>';
            for (let column in results[table][0]) {
                html += `<th>${column}</th>`;
            }
            html += '</tr>';

            results[table].forEach(row => {
                html += '<tr>';
                for (let column in row) {
                    html += `<td>${row[column]}</td>`;
                }
                html += '</tr>';
            });

            html += '</table>';
        }

        html += '</body></html>';
        res.send(html);
    });
});


app.get('/increment-visit', (req, res) => {
    db.run(`INSERT INTO Visitas (data) VALUES (date('now'))`, function(err) {
        if (err) {
            return res.status(500).json({ message: 'error', error: err.message });
        }
        res.json({ message: 'success' });
    });
});

app.get('/get-visits', (req, res) => {
    db.get(`SELECT COUNT(*) AS total FROM Visitas`, (err, row) => {
        if (err) {
            return res.status(500).json({ message: 'error', error: err.message });
        }
        res.json({ message: 'success', data: row.total });
    });
});

app.get('/get-visits-this-month', (req, res) => {
    db.get(`SELECT COUNT(*) AS total FROM Visitas WHERE strftime('%Y-%m', data) = strftime('%Y-%m', 'now')`, (err, row) => {
        if (err) {
            return res.status(500).json({ message: 'error', error: err.message });
        }
        res.json({ message: 'success', data: row.total });
    });
});


// Endpoint para obter dados dos museus
app.get('/get-museums', (req, res) => {
    const sql = "SELECT * FROM Museu";
    db.all(sql, [], (err, rows) => {
        if (err) {
            res.status(500).json({ message: 'error', error: err.message });
        } else {
            res.json({ message: 'success', data: rows });
        }
    });
});

// Endpoint para obter bilhetes de um museu específico
app.get('/get-tickets/:id_museu', (req, res) => {
    const museuId = req.params.id_museu;
    const sql = "SELECT * FROM Bilhetes WHERE fk_id_museu = ?";

    db.all(sql, [museuId], (err, rows) => {
        if (err) {
            res.status(500).json({ message: 'error', error: err.message });
        } else {
            res.json({ message: 'success', data: rows });
        }
    });
});

// Endpoint para obter dados de um museu específico e seus bilhetes
app.get('/get-museum/:id', (req, res) => {
    const museuId = req.params.id;
    const museuSql = "SELECT * FROM Museu WHERE pk_id_museu = ?";
    const bilhetesSql = "SELECT * FROM Bilhetes WHERE fk_id_museu = ?";

    db.get(museuSql, [museuId], (err, museuRow) => {
        if (err) {
            return res.status(500).json({ message: 'error', error: err.message });
        } else if (!museuRow) {
            return res.status(404).json({ message: 'error', error: 'Museu não encontrado' });
        } else {
            db.all(bilhetesSql, [museuId], (err, bilhetesRows) => {
                if (err) {
                    return res.status(500).json({ message: 'error', error: err.message });
                } else {
                    res.json({ message: 'success', data: { museu: museuRow, bilhetes: bilhetesRows } });
                }
            });
        }
    });
});


app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
