/* eslint-disable react/prop-types */
import styles from "./PlanosProps.module.css";

function PlanosProps(props) {
  return (
    <section className={styles.containerPlanos}>
      <div className={styles.boxPlano}>
        <div>
          <span className={styles.nomePlano}>Plano {props.nomePlano}</span>
        </div>
        <div className={styles.row}></div>
        <div className={styles.beneficiosArea}>
          <span>{props.nomeBeneficio}</span>
          <p>{props.descricaoBeneficio}</p>
        </div>
      </div>

      <div>
        <button className={styles.planoPrecoBtn}>R${props.precoPlano}</button>
      </div>
    </section>
  );
}

export default PlanosProps;
