const sqlite3 = require('sqlite3').verbose();
const fs = require('fs');

// Ler ficheiros SQL
const criarDBSQL = fs.readFileSync('criarDB.sql', 'utf8');
const inserirDadosSQL = fs.readFileSync('inserir_dados.sql', 'utf8');

// Abrir a base de dados (será criada se não existir)
const db = new sqlite3.Database('./database.db', (err) => {
    if (err) {
      console.error('Erro ao abrir a base de dados:', err.message);
    } else {
      console.log('Base de dados SQLite conectada.');
    }
});

// Executar os comandos SQL para criar a base de dados e inserir os dados
db.serialize(() => {
    // Criar tabelas
    db.exec(`${criarDBSQL}`, (err) => {
        if (err) {
            console.error(`Erro ao criar tabelas: ${err.message}`);
            throw err;
        }
        console.log('Tabelas criadas com sucesso.');
    });
});

db.serialize(() => {
    // Inserir dados
    db.exec(`${inserirDadosSQL}`, (err) => {
        if (err) {
            console.error(`Erro ao inserir dados: ${err.message}`);
            throw err;
        }
        console.log('Dados inseridos com sucesso.');
    });
});

// Fechar a conexão com a base de dados
db.close((err) => {
    if (err) {
        console.error(err.message);
        throw err;
    }
    console.log('Conexão com a base de dados fechada.');
});
