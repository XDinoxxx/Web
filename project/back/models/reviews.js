const {DataTypes} = require('sequelize');
const sequelize = require("../database/connect");

const Reviews = sequelize.define('Reviews', {
    client_id: DataTypes.INTEGER,
    petsitter_id: DataTypes.INTEGER,
    review_text: DataTypes.TEXT,
    date_revocation: DataTypes.DATE,
  }, {
    timestamps: false,
  });

  module.exports = Reviews;