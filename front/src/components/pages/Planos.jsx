import PlanosProps from "../layout/PlanosProps";
import styles from "./Planos.module.css";

import { IoMdArrowDropright } from "react-icons/io";
import { IoMdArrowDropleft } from "react-icons/io";

function Planos() {
  return (
    <section className={styles.planosContainer}>
      <span className={styles.tituloContainer}>Assinaturas mensais</span>

      <article className={styles.planosArea}>
        <div>
          <IoMdArrowDropleft className={styles.iconArrowPlano} />
        </div>
        <PlanosProps
          nomePlano="simples"
          nomeBeneficio="Box temática surpresa"
          descricaoBeneficio="Caixa temática surpresa com produtos relacionados ao tema do mês (ex: rap, country, pop, MPB, etc.). Inclui CD/Vinil e algum outro artigo."
          precoPlano="100,00"
        />

        <PlanosProps
          nomePlano="premium"
          nomeBeneficio="Box temática premium"
          descricaoBeneficio="Caixa temática surpresa com produtos relacionados ao tema do mês (ex: rap, country, pop, MPB, etc.). Inclui CD/Vinil e mais artigos como camisetas, fotocards, etc."
          precoPlano="150,00"
        />
        <div>
          <IoMdArrowDropright className={styles.iconArrowPlano} />
        </div>
      </article>
    </section>
  );
}

export default Planos;
