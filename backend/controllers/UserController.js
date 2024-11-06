const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const createUserToken = require("../helpers/createUserToken");
const getToken = require("../helpers/getToken");
const getUserByToken = require("../helpers/getUserByToken");

module.exports = class UserController {
  static async register(req, res) {
    const { nome, email, telefone, senha, confirmarSenha } = req.body;

    if (!nome) {
      res.status(422).json({ message: "O nome é obrigatório." });
      return;
    }

    if (!email) {
      res.status(422).json({ message: "O email é obrigatório." });
      return;
    }

    if (!telefone) {
      res.status(422).json({ message: "O telefone é obrigatório." });
      return;
    }

    if (!senha) {
      res.status(422).json({ message: "A senha é obrigatória." });
      return;
    }

    if (!confirmarSenha) {
      res.status(422).json({ message: "A repetição da senha é obrigatória." });
      return;
    }

    if (senha !== confirmarSenha) {
      res.status(422).json({ message: "As senhas precisam ser iguais." });
      return;
    }

    const usuarioExistente = await User.findOne({ where: { email: email } });

    if (usuarioExistente) {
      res.status(422).json({ message: "Este email já está sendo utilizado." });
      return;
    }

    const salt = await bcrypt.genSalt(12);
    const senhaSalt = await bcrypt.hash(senha, salt);

    const usuario = new User({
      nome,
      email,
      telefone,
      senha: senhaSalt,
    });

    try {
      const novoUsuario = await usuario.save();
      await createUserToken(novoUsuario, req, res);
    } catch (error) {
      res.status(500).json({ message: error });
    }
  }

  static async login(req, res) {
    const { email, senha } = req.body;

    if (!email) {
      res.status(422).json({ message: "O email é obrigatório." });
      return;
    }

    if (!senha) {
      res.status(422).json({ message: "A senha é obrigatória." });
      return;
    }

    const usuarioExistente = await User.findOne({
      where: { email: email },
    });

    if (!usuarioExistente) {
      res
        .status(422)
        .json({ message: "Não há usuário cadastrado com este email." });
      return;
    }

    const verificarSenha = await bcrypt.compare(senha, usuarioExistente.senha);

    if (!verificarSenha) {
      res.status(422).json({ message: "Senha incorreta!" });
      return;
    }

    await createUserToken(usuarioExistente, req, res);
  }

  static async checarUsuario(req, res) {
    let usuarioAtual;

    if (req.headers.authorization) {
      const token = getToken(req);
      const decoded = jwt.verify(token, "secret");

      usuarioAtual = await User.findOne({ where: { id: decoded.id } });
      console.log(req.headers.authorization);
      console.log(usuarioAtual);

      if (usuarioAtual) {
        usuarioAtual.senha = undefined;
      }
    } else {
      usuarioAtual = null;
    }

    res.status(200).send({ usuarioAtual });
  }

  static async obterUsuario(req, res) {
    const id = req.params.id;
    const usuario = await User.findOne({ where: { id: id } });

    if (!usuario) {
      res.status(404).json({ message: "Usuário não encontrado." });
      return;
    }

    res.status(200).json({ usuario });
  }

  static async editarUsuario(req, res) {
    const id = req.params.id;

    const token = getToken(req);
    const usuario = getUserByToken(token);

    const { nome, email, telefone, senha, confirmarSenha } = req.body;

    if (req.file) {
      usuario.imagem = req.file.filename;
    }

    if (!nome) {
      res.status(422).json({ message: "O nome é obrigatório." });
      return;
    }

    usuario.nome = nome;

    if (!email) {
      res.status(422).json({ message: "O email é obrigatório." });
      return;
    }

    usuario.email = email;

    if (!telefone) {
      res.status(422).json({ message: "O telefone é obrigatório." });
      return;
    }

    usuario.telefone = telefone;

    if (!senha) {
      res.status(422).json({ message: "A senha é obrigatória." });
      return;
    }

    if (!confirmarSenha) {
      res.status(422).json({ message: "A repetição da senha é obrigatória." });
      return;
    }

    if (senha !== confirmarSenha) {
      res.status(422).json({ message: "As senhas precisam ser iguais." });
      return;
    } else if (senha === confirmarSenha && senha != null) {
      const salt = await bcrypt.genSalt(12);
      const senhaSalt = await bcrypt.hash(senha, salt);

      usuario.senha = senhaSalt;
    }

    try {
      const usuarioAtualizado = await User.update(usuario, {
        where: { id: id },
      });

      console.log(usuarioAtualizado);

      return res.status(200).json({
        message: "Usuário atualizado com sucesso!",
      });
    } catch (error) {
      res.status(500).json({ message: error });
    }

    const usuarioExistente = await User.findOne({
      where: { email: email },
    });

    if (usuario.email !== email && usuarioExistente) {
      res.status(422).json({ message: "Este email já está sendo utilizado." });
      return;
    }

    usuario.email = email;
  }
};
