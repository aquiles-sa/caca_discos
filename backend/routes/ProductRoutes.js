const router = require("express").Router();
const ProductController = require("../controllers/ProductController");

const verifyToken = require("../helpers/verifyToken");
const { imageUpload } = require("../helpers/imageUpload");

router.post(
  "/criar",
  verifyToken,
  imageUpload.array("images"),
  ProductController.criar
);

router.get("/", ProductController.obterProdutos);
router.get(
  "/meusProdutos",
  verifyToken,
  ProductController.obterProdutosUsuario
);
router.get(
  "/minhasCompras",
  verifyToken,
  ProductController.obterComprasUsuario
);

router.get("/:id", ProductController.obterProdutoPorId);

module.exports = router;
