const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");

const app = express();
app.use(cors());
app.use(express.json());

// conexão com banco
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "cadastro"
});

// rota de cadastro
app.post("/pessoas", (req, res) => {
  const { nome, cpf, cidade, telefone } = req.body;

  const sql = "INSERT INTO pessoas (nome, cpf, cidade, telefone) VALUES (?, ?, ?, ?)";

  db.query(sql, [nome, cpf, cidade, telefone], (err) => {
    if (err) {
      return res.status(500).json({ mensagem: "Erro ao cadastrar" });
    }

    res.json({ mensagem: "Pessoa cadastrada com sucesso!" });
  });
});

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});