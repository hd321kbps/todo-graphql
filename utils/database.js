const process = require('process');
const Sequelize = require('sequelize');

const DB_NAME = process.env.DB_NAME || 'node-todo';
const USERNAME = process.env.DB_USERNAME || 'root';
const PASSWORD = process.env.DB_PASSWORD || '';

const sequelize = new Sequelize(DB_NAME, USERNAME, PASSWORD, {
  host: 'localhost',
  dialect: 'mariadb',
  // Показывать ли SQL запросы
  logging: false
});

module.exports = sequelize;
