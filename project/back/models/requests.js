const {DataTypes} = require('sequelize');
const sequelize = require("../database/connect");

const Requests = sequelize.define('Requests', {
    client_id: DataTypes.INTEGER,
    petsitter_id: DataTypes.INTEGER,
    service_type: DataTypes.STRING,
    start_time: DataTypes.DATE,
    end_time: DataTypes.DATE,
    animal_id: DataTypes.INTEGER,
  }, {
    timestamps: false,
  });

  module.exports = Requests;