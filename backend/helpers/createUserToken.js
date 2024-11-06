const jwt = require("jsonwebtoken");

const createUserToken = async (usuario, req, res) => {
  const token = jwt.sign(
    {
      name: usuario.name,
      id: usuario.id,
    },
    "secret"
  );

  res.status(200).json({
    message: "Você está autenticado!",
    token,
    id: usuario.id,
  });
};

module.exports = createUserToken;
