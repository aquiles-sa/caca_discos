/* eslint-disable react/prop-types */

import styles from "./DadosVendedor.module.css";

function DadosVendedor(props) {
  return (
    <div className={styles.content}>
      <span className={styles.titulo}>Dados do vendedor</span>

      <div className={styles.informacoes}>
        <p>
          Nome: <span className={styles.targetInfo}>{props.nomeVendedor}</span>
        </p>
        <p>
          <span className={styles.targetInfo}>{props.depositorio}</span>
        </p>
        <p>
          Contato: <span className={styles.targetInfo}>{props.contato}</span>
        </p>
        <p>
          Cidade: <span className={styles.targetInfo}>{props.cidade}</span>
        </p>
        <p>
          Endereço: <span className={styles.targetInfo}>{props.endereco}</span>
        </p>
        <p>
          <span className={styles.targetInfo}>{props.visitacao}</span>
        </p>
        <p>
          Retirada: <span className={styles.targetInfo}>{props.retirada}</span>
        </p>
      </div>
    </div>
  );
}

export default DadosVendedor;
