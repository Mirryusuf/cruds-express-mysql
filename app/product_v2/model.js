const sequelize = require('../../config/sequelize');
const { Sequelize, DataTypes } = require('sequelize');

const Product = sequelize.define('Product', {
  // Model attributes are defined here
  nama: {
    type: DataTypes.STRING,
    allowNull: false
  },
  stock: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  harga: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  status: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  }
});

module.exports = Product;