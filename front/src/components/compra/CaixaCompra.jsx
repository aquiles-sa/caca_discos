/* eslint-disable react/prop-types */
import styles from "./CaixaCompra.module.css";

function CaixaCompra(props) {
  return (
    <div className={styles.contentBox}>
      <div className={styles.tituloCaixaArea}>
        <span>{props.tituloCaixa}</span>
        <p>R$ {props.valorCaixa}</p>
      </div>
      <div className={styles.enderecoArea}>
        <p>{props.endereco}</p>
      </div>

      <div className={styles.row}></div>
      <div>
        <a href="#">{props.link}</a>
      </div>
    </div>
  );
}

export default CaixaCompra;
