const Product = require("../models/Product");
const getToken = require("../helpers/getToken");
const getUserByToken = require("../helpers/getUserByToken");
const { validate: isUUID } = require("uuid");

module.exports = class ProductController {
  static async criar(req, res) {
    const { nome, condicao, dimensao, peso, preco, dividir } = req.body;

    const imagens = req.files;

    if (!nome) {
      res.status(422).json({ message: "O nome é obrigatório!" });
      return;
    }

    if (!condicao) {
      res.status(422).json({ message: "A condição do produto é obrigatória!" });
      return;
    }

    if (!peso) {
      res.status(422).json({ message: "O peso é obrigatório!" });
      return;
    }

    if (!preco) {
      res.status(422).json({ message: "O preco é obrigatória!" });
      return;
    }

    if (imagens.length === 0) {
      res.status(422).json({ message: "A imagem é obrigatória!" });
      return;
    }

    imagens.map((imagem) => {
      produto.push(imagem.filename);
    });

    const token = getToken(req);
    const usuario = getUserByToken(token);

    const produto = new Product({
      nome,
      condicao,
      dimensao,
      peso,
      preco,
      dividir,
      imagens: [],
      usuario: {
        id: id,
        nome: usuario.nome,
        imagem: usuario.imagem,
        telefone: usuario.telefone,
      },
    });

    try {
      const novoProduto = await produto.save();
      return res
        .status(201)
        .json({ message: "Produto cadastrado com sucesso!", novoProduto });
    } catch (error) {
      res.status(500).json({ message: error });
    }
  }

  static async obterProdutos(req, res) {
    const produtos = await Product.findAll({
      order: [["createdAt", "DESC"]],
    });

    return res.status(200).json({ produtos });
  }

  static async obterProdutosUsuario(req, res) {
    const token = getToken(req);
    const usuario = await getUserByToken(token);

    const produtos = await Product.findAll({
      where: { id: usuario.id },
      order: [["createdAt", "DESC"]],
    });

    res.status(200).json({ produtos });
  }

  static async obterComprasUsuario(req, res) {
    const token = getToken(req);
    const usuario = await getUserByToken(token);

    const produtos = await Product.findAll({
      where: {
        comprador: {
          id: usuario.id,
        },
      },
      order: [["createdAt", "DESC"]],
    });

    res.status(200).json({
      produtos,
    });
  }

  static async obterProdutoPorId(req, res) {
    const id = req.params.id;

    if (!isUUID(id)) {
      res.status(422).json({ message: "ID inválido!" });
      return;
    }

    const produto = await Product.findByPk(id);

    if (!produto) {
      res.status(404).json({ message: "Produto não encontrado!" });
      return;
    }

    res.status(200).json({
      produto: produto,
    });
  }
};
