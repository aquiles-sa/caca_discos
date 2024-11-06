import styles from "./CadastroEmpresa.module.css";
import Input from "../form/Input";

import { useContext, useState } from "react";

import { Context } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";

function CadastroEmpresa() {
  const navigate = useNavigate();

  const [usuario, setUsuario] = useState({});
  const { register } = useContext(Context);

  function handleChange(e) {
    setUsuario({ ...usuario, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    await register(usuario);
    navigate("/homeEmpresarial");
  }

  return (
    <section className={styles.formPopUp}>
      <div className={styles.formBox}>
        <div className={styles.formDetails}></div>
        <div className={styles.formContent}>
          <h2>Cadastro Empresarial</h2>
          <form onSubmit={handleSubmit}>
            <Input
              text="Nome da empresa"
              type="text"
              name="nomeEmpresa"
              handleOnChange={handleChange}
            />
            <Input
              text="CNPJ"
              type="text"
              name="cnpj"
              handleOnChange={handleChange}
            />
            <Input
              text="Endereco"
              type="text"
              name="endereco"
              handleOnChange={handleChange}
            />
            <Input
              text="Telefone"
              type="text"
              name="telefoneEmpresa"
              handleOnChange={handleChange}
            />
            <Input
              text="Inscrição estadual"
              type="text"
              name="inscricaoEstadual"
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
              name="senhaEmpresarial"
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
export default CadastroEmpresa;
