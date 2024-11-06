const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("caca-discos", "root", "asasql10", {
  host: "localhost",
  dialect: "mysql",
});

try {
  sequelize.authenticate();
  console.log("Conectado com sucesso com Sequelize.");
} catch (error) {
  console.log(`Não foi possível conectar: ${error}`);
}

module.exports = sequelize;
