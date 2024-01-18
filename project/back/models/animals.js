const {DataTypes} = require("sequelize");
const sequelize = require("../database/connect");

const Animals = sequelize.define('Animals', {
    name: DataTypes.STRING,
    type: DataTypes.STRING,
    breed: DataTypes.STRING,
    age: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
  }, {
    timestamps: false,
  });

  module.exports = Animals;