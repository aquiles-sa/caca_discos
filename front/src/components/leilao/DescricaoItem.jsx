/* eslint-disable react/prop-types */
import styles from "./DescricaoItem.module.css";

function DescricaoItem(props) {
  return (
    <section className={styles.descricaoContainer}>
      <div className={styles.descricaoTitulo}>
        <span>Descrição do item</span>
      </div>

      <div className={styles.infoArea}>
        <p>
          Título: <span>{props.titulo}</span>
        </p>
        <p>
          Formato: <span>{props.formato}</span>
        </p>
        <p>
          Data de lançamento: <span>{props.dataLancamento}</span>
        </p>
        <p>
          Producao: <span>{props.producao}</span>
        </p>
        <p>
          Recepção crítica: <span>{props.critica}</span>
        </p>
        <p>
          Temática: <span>{props.tematica}</span>
        </p>
      </div>
    </section>
  );
}
export default DescricaoItem;
