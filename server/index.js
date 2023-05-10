// ExpressJS Backend
const express = require('express');
const app = express();

// Add CORS headers
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

// Importa as configurações do banco de dados do arquivo config.json
const db = require('./config/config.json')[process.env.NODE_ENV || 'development'];

// Cria uma nova instância do Sequelize com as configurações do banco de dados
const sequelize = new Sequelize(db.database, db.username, db.password, db);

// Função assíncrona que tenta autenticar a conexão com o banco de dados
(async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection to the database has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})();

// Configura o servidor para receber e enviar dados no formato JSON
app.use(express.json());

// Configura a rota '/api/clients' para usar o arquivo de rotas client.js
app.use('/api/clients', require('./routes/client'));

// Middleware que trata erros e envia uma resposta de erro 500
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send('Internal Server Error');
});

// Inicia o servidor na porta 3000
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});