const { DataTypes } = require("sequelize");
const db = require("../db/conn");

const User = require("./User");

const Product = db.define(
  "Product",
  {
    nome: {
      type: DataTypes.STRING,
      required: true,
    },
    condicao: {
      type: DataTypes.STRING,
      required: true,
    },
    dimensao: {
      type: DataTypes.STRING,
      required: true,
    },
    peso: {
      type: DataTypes.STRING,
      required: true,
    },
    preco: {
      type: DataTypes.STRING,
      required: true,
    },
    dividir: {
      type: DataTypes.STRING,
    },
    imagens: {
      type: DataTypes.JSON,
      allowNull: false,
      required: true,
    },

    usuario: DataTypes.JSON,
    comprador: DataTypes.JSON,
  },
  { timestamps: true }
);

Product.belongsTo(User);
User.hasMany(Product);

module.exports = Product;
