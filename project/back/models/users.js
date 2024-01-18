const {DataTypes} = require('sequelize');
const sequelize = require("../database/connect");

const Users = sequelize.define('Users', {
    login: DataTypes.STRING,
    password: DataTypes.STRING,
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    address: DataTypes.STRING,
    phone: DataTypes.STRING,
    role_id: DataTypes.INTEGER,
  }, {
    timestamps: false, 
  });

  module.exports = Users;