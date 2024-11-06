const jwt = require("jsonwebtoken");
const User = require("../models/User");

const getUserByToken = async (token) => {
  if (!token) {
    return res.status(401).json({ message: "Acesso negado!" });
  }
  const decoded = jwt.verify(token, "secret");
  const id_usuario = decoded.id;

  const usuario = await User.findOne({ where: { id: id_usuario } });
  return usuario;
};

module.exports = getUserByToken;
