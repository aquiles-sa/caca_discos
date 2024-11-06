import PropTypes from "prop-types";

import { Link } from "react-router-dom";

import styles from "./Header.module.css";
import { IoIosSearch } from "react-icons/io";
import { FaUser } from "react-icons/fa";

function Header({ isAuthenticated }) {
  return (
    <header className={styles.header}>
      <div>
        <h2>
          <Link className="pixelify-sans" to={"/"}>
            Caça discos
          </Link>
        </h2>
      </div>

      <div className={styles.searchBarArea}>
        <input type="search" placeholder="Procure um produto" />
        <div className={styles.searchIcon}>
          <IoIosSearch className={styles.icon} />
        </div>
      </div>

      <ul>
        {!isAuthenticated ? (
          <>
            <li>
              <Link to={"/login"}>Login</Link>
            </li>
            <li>
              <Link to={"/cadastro"}>Cadastro</Link>
            </li>
          </>
        ) : (
          <li className={styles.iconUser}>
            <FaUser />
            <p>Perfil</p>
          </li>
        )}
      </ul>
    </header>
  );
}

Header.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
};

export default Header;
