/* eslint-disable react/prop-types */
import styles from "./Comentario.module.css";
import { MdOutlineStar } from "react-icons/md";
import { FaUser } from "react-icons/fa";

function Comentario(props) {
  return (
    <section className={styles.contentBox}>
      <div className={styles.starsArea}>
        <MdOutlineStar className={styles.icon} />
        <MdOutlineStar className={styles.icon} />
        <MdOutlineStar className={styles.icon} />
        <MdOutlineStar className={styles.icon} />
        <MdOutlineStar className={styles.icon} />
      </div>

      <div className={styles.textsArea}>
        <span>{props.destaque}</span>
        <p>{props.textoDescritivo}</p>
      </div>
      <div className={styles.profileArea}>
        <FaUser className={styles.icon} />
        <div className={styles.nameArea}>
          <span className={styles.name}>{props.nomePerfil}</span>
          <span className={styles.date}>{props.dataComentario}</span>
        </div>
      </div>
    </section>
  );
}

export default Comentario;
