// Definir model "Client"
const Sequelize = require('sequelize');
const db = require('../config/config.json')[process.env.NODE_ENV || 'development'];

const sequelize = new Sequelize(db.database, db.username, db.password, db);

const Client = sequelize.define('client', {
  name: Sequelize.STRING,
  email: Sequelize.STRING,
  phone: Sequelize.STRING,
  address: Sequelize.STRING
});

module.exports = Client;
