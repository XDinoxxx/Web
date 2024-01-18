const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'db_project',
    password: '1703',
    port: 5432,
  });

  const { Sequelize, DataTypes } = require('sequelize');
  const sequelize = new Sequelize('postgres://postgres:1703@localhost:5432/db_project');

  module.exports = sequelize;