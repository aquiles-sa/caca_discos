import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";
import { FaRegBell } from "react-icons/fa";

function NavBar() {
  return (
    <nav className={styles.navigationContainer}>
      <ul>
        <li className={styles.currentPage}>
          <Link to={"/"}>Início</Link>
        </li>
        <li>
          <Link to={"/musicas"}>Musicas</Link>
        </li>
        <li>
          <Link to={"/filmes"}>Filmes</Link>
        </li>
        <li>
          <Link to={"/jogos"}>Jogos</Link>
        </li>
        <li>
          <Link to={"/planos"}>Planos</Link>
        </li>
        <li>
          <Link to={"/cupons"}>Cupons</Link>
        </li>
        <li>
          <Link to={"/leiloes"}>Leilões</Link>
        </li>
        <li>
          <Link to={"/suporte"}>Suporte</Link>
        </li>

        <li>
          <Link to={"/carrinho"}>Carrinho</Link>
        </li>
        <li>
          <Link to={"/favoritos"}>Favoritos</Link>
        </li>
      </ul>

      <FaRegBell className={styles.icon} />
    </nav>
  );
}

export default NavBar;
