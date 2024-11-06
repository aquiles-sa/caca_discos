import PropTypes from "prop-types";
import Input from "../../form/Input";

import styles from "../../form/Form.module.css";
import secondStyles from "../../form/ForgotPassword.module.css";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import { FaFacebookF } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";

function Login({ onLogin }) {
  const navigate = useNavigate();

  const [usuario, setUsuario] = useState({});

  const handleLogin = (e) => {
    e.preventDefault();
    onLogin();
    navigate("/");
  };
  function handleChange(e) {
    setUsuario({ ...usuario, [e.target.name]: e.target.value });
  }

  return (
    <section className={styles.formPopUp}>
      <div className={styles.formBox}>
        <div className={secondStyles.formDetails}></div>
        <div className={styles.formContent}>
          <h2>Login</h2>
          <form onSubmit={handleLogin}>
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

            <div className={secondStyles.textoPolitica}>
              <div>
                <input type="checkbox" id="politica" />
                <label htmlFor="politica">Lembrar senha</label>
              </div>
              <div>
                <Link to={"./forgotPassword"}>Esqueci minha senha</Link>
              </div>
            </div>

            <Input type="submit" value="Entrar" />
          </form>

          <section className={secondStyles.loginWith}>
            <div className={secondStyles.row}></div>
            <span>Ou</span>
            <div className={secondStyles.row}></div>
          </section>

          <section className={secondStyles.loginIcons}>
            <FaGoogle className={secondStyles.icon} />
            <FaFacebookF className={secondStyles.icon} />
          </section>
        </div>
      </div>
    </section>
  );
}

Login.propTypes = {
  onLogin: PropTypes.func.isRequired,
};

export default Login;
