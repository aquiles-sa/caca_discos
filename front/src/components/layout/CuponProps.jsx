/* eslint-disable react/prop-types */
import styles from "../pages/Cupons.module.css";
import { IoIosTimer } from "react-icons/io";
import { useState } from "react";

function CuponProps(props) {
  const [aplicado, setAplicado] = useState(false);

  function handleClick() {
    setAplicado(!aplicado);
  }

  return (
    <section className={styles.cuponContent}>
      <h2>{props.nomeCupom}</h2>

      <div className={styles.row}></div>
      <div className={styles.categoryArea}>
        <i className={styles.icon}>{props.icon}</i>
        <div className={styles.categoryInfo}>
          <span className={styles.title}>{props.categoria}</span>
          <span>Compra mínima: R$ {props.compraMinima}</span>
          <span>Limite de R$ {props.valorLimite}</span>
        </div>
      </div>
      <div className={styles.bottomArea}>
        <div className={styles.vencimento}>
          <IoIosTimer />
          <span>{props.vencimento}</span>
        </div>
        <button onClick={handleClick}>
          {aplicado ? "Aplicado" : "Aplicar"}
        </button>
      </div>
    </section>
  );
}

export default CuponProps;
