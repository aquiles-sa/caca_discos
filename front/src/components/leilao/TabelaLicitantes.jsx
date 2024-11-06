/* eslint-disable react/prop-types */
import styles from "./TabelaLicitantes.module.css";

function TabelaLicitantes(props) {
  return (
    <div className={styles.tableContainer}>
      <table>
        <thead>
          <tr>
            <th>Oferta</th>
            <th>Data</th>
            <th>Valor</th>
            <th>Licitante</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{props.numeroOferta}</td>
            <td>{props.dataOferta}</td>
            <td>{props.valorOferta}</td>
            <td>{props.licitante}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
export default TabelaLicitantes;
