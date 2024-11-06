/* eslint-disable react/prop-types */

import styles from "./DadosLeilao.module.css";

function DadosLeilao(props) {
  return (
    <div className={styles.descricaoContainer}>
      <span className={styles.titulo}>Dados do leilão</span>

      <section className={styles.statusArea}>
        <p>
          Status:
          <span className={styles.spanProp}>{props.status}</span>
        </p>
        <p>
          Leilão único:
          <span className={styles.spanProp}>{props.leilaoUnico}</span>
        </p>
        <p>
          Local: <span className={styles.spanProp}>{props.local}</span>
        </p>
      </section>

      <section>
        <span>Datas dos leilões</span>
        <div className={styles.dataLeilaoArea}>
          <p>
            1° Leilão: <span className={styles.spanProp}>{props.data}</span>
          </p>

          <p>
            Valor: <span className={styles.spanProp}>R$ {props.valor}</span>
          </p>
        </div>
      </section>
    </div>
  );
}

export default DadosLeilao;
