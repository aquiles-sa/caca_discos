const router = require("express").Router();
const UserController = require("../controllers/UserController");

const verifyToken = require("../helpers/verifyToken");
const { imageUpload } = require("../helpers/imageUpload");

router.post("/register", UserController.register);
router.post("/login", UserController.login);
router.get("/usuario", UserController.checarUsuario);
router.get("/:id", UserController.obterUsuario);
router.patch(
  "/editar/:id",
  verifyToken,
  imageUpload.single("image"),
  UserController.editarUsuario
);

module.exports = router;
