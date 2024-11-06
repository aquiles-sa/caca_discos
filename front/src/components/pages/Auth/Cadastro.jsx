import PropTypes from "prop-types";
import Input from "../../form/Input";

import styles from "../../form/Form.module.css";
import { useContext, useState } from "react";

import { Context } from "../../../context/UserContext";
import { useNavigate } from "react-router-dom";

function Cadastro() {
  const navigate = useNavigate();

  const [usuario, setUsuario] = useState({});
  const { register } = useContext(Context);

  function handleChange(e) {
    setUsuario({ ...usuario, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    await register(usuario);
    navigate("/login");
  }

  return (
    <section className={styles.formPopUp}>
      <div className={styles.formBox}>
        <div className={styles.formDetails}></div>
        <div className={styles.formContent}>
          <h2>Cadastro</h2>
          <form onSubmit={handleSubmit}>
            <Input
              text="Nome"
              type="text"
              name="nome"
              handleOnChange={handleChange}
            />
            <Input
              text="Telefone"
              type="text"
              name="telefone"
              handleOnChange={handleChange}
            />
            <Input
              text="Email"
              type="email"
              name="email"
              handleOnChange={handleChange}
            />
            <Input
              text="Senha"
              type="password"
              name="senha"
              handleOnChange={handleChange}
            />
            <Input
              text="Confirmação de senha"
              type="password"
              name="confirmarSenha"
              handleOnChange={handleChange}
            />

            <div className={styles.textoPolitica}>
              <input type="checkbox" id="politica" />
              <label htmlFor="politica">
                Aceito os <a href="#">termos e condições de privacidade</a>
              </label>
            </div>

            <Input type="submit" value="Cadastrar" />
          </form>
        </div>
      </div>
    </section>
  );
}

Cadastro.propTypes = {
  onLogin: PropTypes.func.isRequired,
};

export default Cadastro;
