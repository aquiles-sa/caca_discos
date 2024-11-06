import CaixaCompra from "../compra/CaixaCompra";
import styles from "./EscolherFormaEntrega.module.css";
import { Link } from "react-router-dom";

function EscolherFormaEntrega() {
  return (
    <div className={styles.formaEntregaContainer}>
      <aside className={styles.asideContent}>
        <div>
          <span>Escolha a forma de entrega</span>
        </div>

        <CaixaCompra
          tituloCaixa="Enviar no endereço desejado"
          valorCaixa="19,90"
          endereco="R. Jardim Santo Antônio - Brotas
Salvador - BA"
          link="Editar ou escolher outro endereço"
        />

        <CaixaCompra
          tituloCaixa="Retirada em uma agência de correio"
          valorCaixa="29,90"
          endereco="Endereço: Av. Dom João VI, 1050 - Brotas, Salvador - BA, 40285-970"
          link="Selecionar outra agência de correios"
        />

        <div>
          <Link className={styles.prosseguirBtn} to="/finalizarCompra">
            Prosseguir
          </Link>
        </div>
      </aside>

      <section>
        <div>
          <span className={styles.resumoTitulo}>Resumo</span>
        </div>

        <article className={styles.resumoArea}>
          <div>
            <span>Valor do produto</span>
            <span className={styles.preco}>R$329,90</span>
          </div>

          <div>
            <span>Valor do frete</span>
            <span className={styles.preco}>R$19,90</span>
          </div>

          <div className={styles.row}></div>

          <div>
            <span>Valor do produto</span>
            <span className={styles.preco}>R$349,80</span>
          </div>
        </article>
      </section>
    </div>
  );
}

export default EscolherFormaEntrega;
