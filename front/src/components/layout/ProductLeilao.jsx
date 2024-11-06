import PropTypes from "prop-types";
import styles from "./ProductLeilao.module.css";

function ProductLeilao(props) {
  return (
    <div className={styles.produto}>
      <span className={styles.titulo}>{props.titulo}</span>

      <div className={styles.row}></div>

      <img src={props.imagem} alt={props.titulo} />

      <span className={styles.status}>{props.status}</span>
      <div className={styles.precoDataArea}>
        <span className={styles.preco}>R$ {props.preco}</span>
        <span className={styles.data}>{props.data}</span>
      </div>
    </div>
  );
}

ProductLeilao.propTypes = {
  titulo: PropTypes.string.isRequired,
  imagem: PropTypes.string.isRequired,
  preco: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  data: PropTypes.string.isRequired,
};

export default ProductLeilao;
