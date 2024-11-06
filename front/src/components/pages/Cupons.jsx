import styles from "./Cupons.module.css";
import CuponProps from "../layout/CuponProps";
import { IoDiscOutline } from "react-icons/io5";

function Cupons() {
  return (
    <section className={styles.container}>
      <CuponProps
        nomeCupom="15% OFF Exclusivo para assinantes"
        icon={<IoDiscOutline />}
        categoria="Em produtos selecionados"
        compraMinima="100"
        valorLimite="200"
        vencimento="Vence em 25/11/2024"
      />
      <CuponProps
        nomeCupom="10% OFF para jogos"
        icon={<IoDiscOutline />}
        categoria="Em produtos selecionados"
        compraMinima="100"
        valorLimite="200"
        vencimento="Vence amanhã"
      />
      <CuponProps
        nomeCupom="15% OFF Exclusivo para assinantes"
        icon={<IoDiscOutline />}
        categoria="Em produtos selecionados"
        compraMinima="100"
        valorLimite="200"
        vencimento="Vence amanhã"
      />

      <button className={styles.checkMoreBtn}>Veja mais cupons</button>
    </section>
  );
}

export default Cupons;
