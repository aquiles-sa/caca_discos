import styles from "./AdicionarProdutoEmpresa.module.css";

import Category from "../layout/Category";
import { useState } from "react";

function AdicionarProdutoEmpresa() {
  const [imagem, setImagem] = useState(null);

  function handleClick() {
    alert("O produto foi enviado com sucesso!");
  }

  const handleImagemChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImagem(URL.createObjectURL(file));
    }
  };
  return (
    <div className={styles.cadastrarLoteContainer}>
      <aside>
        <Category nameCategory="Adicionar produto" />
        <div className={styles.tituloArea}>
          <label htmlFor="tituloItem" className={styles.tituloLabel}>
            Título do produto
          </label>
          <input type="text" name="tituloItem" />
        </div>

        <div>
          <span className={styles.tituloLabel}>Condição</span>
          <section className={styles.condicaoOpcoes}>
            <div>
              <input type="checkbox" name="novo" />
              <label htmlFor="novo">Novo</label>
            </div>

            <div>
              <input type="checkbox" name="novo" />
              <label htmlFor="novo">Usado</label>
            </div>

            <div>
              <input type="checkbox" name="outro" />
              <label htmlFor="outro">Outro</label>
            </div>
            <input type="text" />
          </section>
        </div>

        <section className={styles.duasSecoes}>
          <div className={styles.content}>
            <label htmlFor="dimensao" className={styles.tituloLabel}>
              Dimensão
            </label>
            <input type="text" name="dimensao" />
          </div>

          <div className={styles.content}>
            <label htmlFor="peso" className={styles.tituloLabel}>
              Peso
            </label>
            <input type="text" name="peso" />
          </div>
        </section>

        <section className={styles.estimativaValorArea}>
          <label htmlFor="estimativaValor" className={styles.tituloLabel}>
            Preço
          </label>
          <input type="text" name="estimativaValor" />
        </section>

        <section className={styles.valorInicialArea}>
          <label htmlFor="valorInicial" className={styles.tituloLabel}>
            Valor inicial
          </label>
          <input type="text" name="valorInicial" />
        </section>

        <section className={styles.duasSecoes}>
          <div className={styles.content}>
            <label htmlFor="data" className={styles.tituloLabel}>
              Parcelas
            </label>
            <input type="text" name="data" />
          </div>

          <div className={styles.content}>
            <label htmlFor="hora" className={styles.tituloLabel}>
              Data
            </label>
            <input type="text" name="hora" />
          </div>
        </section>

        <div className={styles.aceitarTermoArea}>
          <input type="checkbox" />
          <p>Eu aceito os termos e condições e políticas de privacidade.</p>
        </div>

        <div>
          <button onClick={handleClick} className={styles.cadastrarLoteBtn}>
            Cadastrar
          </button>
        </div>
      </aside>

      <section className={styles.colocarFotoArea}>
        <label>Colocar Foto</label>
        <input type="file" onChange={handleImagemChange} />

        {imagem && (
          <div className={styles.visualizacaoImagem}>
            <h3>Pré-visualização da Imagem</h3>
            <div className={styles.row}></div>
            <img
              src={imagem}
              alt="Pré-visualização"
              style={{ width: "150px", height: "auto" }}
            />
          </div>
        )}
      </section>
    </div>
  );
}
export default AdicionarProdutoEmpresa;
