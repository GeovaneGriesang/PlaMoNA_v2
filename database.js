const mysql = require('mysql');

const connection = mysql.createConnection({
  host: process.env.BD_HOST,
  port: process.env.BD_PORT,
  user: process.env.BD_USER,
  password: process.env.BD_PASS,
  database: process.env.BD_DATA,
});

connection.connect((error) => {
  if (error) {
    console.error('Erro ao conectar ao banco de dados:', error);
  } else {
    console.log('Conexão bem-sucedida com o banco de dados.');
  }
});

module.exports = connection;