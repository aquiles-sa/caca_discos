import styles from "./EscolherFormaPagamento.module.css";
import { FaPix } from "react-icons/fa6";
import { CiCreditCard1 } from "react-icons/ci";
import { MdOutlineLineStyle } from "react-icons/md";

function EscolherFormaPagamento() {
  function handleClick() {
    alert("Pagamento realizado com sucesso!");
  }

  return (
    <div className={styles.allContainer}>
      <span className={styles.titleEscolherFormaPagamento}>
        Escolha a forma de pagamento
      </span>

      <aside className={styles.asideContainer}>
        <section className={styles.asideContentPagamento}>
          <div>
            <span>1 Compra</span>
          </div>

          <div className={styles.row}></div>

          <section className={styles.pagamentoContent}>
            <div className={styles.opcaoPagamento}>
              <div>
                <FaPix className={styles.pagamentoIcon} />
              </div>
              <p>Pix</p>
              <p>Aprovação imediata</p>
            </div>

            <div className={styles.opcaoPagamento}>
              <div>
                <CiCreditCard1 className={styles.pagamentoIcon} />
              </div>
              <p>Cartão de crédito/débito</p>
            </div>

            <div className={styles.opcaoPagamento}>
              <div>
                <MdOutlineLineStyle className={styles.pagamentoIcon} />
              </div>
              <p>Boleto</p>
            </div>
          </section>
          <div className={styles.row}></div>
          <div>
            <span className={styles.adicionarCartao}>Adicionar cartão</span>
          </div>
        </section>
      </aside>

      <div className={styles.presenteArea}>
        <input
          className={styles.inputPresente}
          type="checkbox"
          name="presente"
        />
        <label className={styles.labelPresente} htmlFor="presente">
          Presente
        </label>
      </div>

      <div>
        <button onClick={handleClick} className={styles.finalizarCompraBtn}>
          Finalizar compra
        </button>
      </div>

      <article className={styles.resumoContent}>
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
      </article>
    </div>
  );
}

export default EscolherFormaPagamento;
