const { DataTypes } = require("sequelize");
const db = require("../db/conn");

const User = db.define(
  "User",
  {
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true,
    },
    telefone: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true,
    },
    senha: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true,
    },
    imagem: {
      type: DataTypes.STRING,
    },
  },
  { timestamps: true }
);

module.exports = User;
