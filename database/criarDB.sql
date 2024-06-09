--Script para criar a base de dados
-- Cria a tabela Utilizador

CREATE TABLE Utilizador (
    pk_id_user INT IDENTITY(1,1) PRIMARY KEY,
    nome NVARCHAR(100) NOT NULL,
    data_nasc DATE NOT NULL,
    email NVARCHAR(100) NOT NULL UNIQUE,
    password NVARCHAR(100) NOT NULL
);


-- Cria a tabela Museu
CREATE TABLE Museu (
    pk_id_museu INT IDENTITY(1,1) PRIMARY KEY,
    nome NVARCHAR(100) NOT NULL,
    localizacao NVARCHAR(200) NOT NULL,
    descricao NVARCHAR(5000) NOT NULL,
    fk_id_bilhetes INT NULL,
	pagina NVARCHAR(100) NOT NULL,
    imagem NVARCHAR(200) NOT NULL
);

-- Cria a tabela Bilhetes
CREATE TABLE Bilhetes (
    pk_id_bilhete INT IDENTITY(1,1) PRIMARY KEY,
    tipo NVARCHAR(50) NOT NULL,
    data DATE NOT NULL,
    fk_id_museu INT NOT NULL,
	fk_id_utilizador INT NOT NULL,
    preco DECIMAL(10, 2) NOT NULL,
    CONSTRAINT FK_Bilhetes_Utilizador FOREIGN KEY (fk_id_utilizador) REFERENCES Utilizador(pk_id_user),
    CONSTRAINT FK_Bilhetes_Museu FOREIGN KEY (fk_id_museu) REFERENCES Museu(pk_id_museu)
);


-- Cria a tabela Compras
CREATE TABLE Compras (
    pk_id_compra INT IDENTITY(1,1) PRIMARY KEY,
    fk_id_bilhete INT NOT NULL,
    fk_id_user INT NOT NULL,
    total DECIMAL(10, 2) NOT NULL,
    CONSTRAINT FK_Compras_Utilizador FOREIGN KEY (fk_id_user) REFERENCES Utilizador(pk_id_user),
    CONSTRAINT FK_Compras_Bilhetes FOREIGN KEY (fk_id_bilhete) REFERENCES Bilhetes(pk_id_bilhete)
);