// import styles from "./Leiloes.module.css";
import Category from "../layout/Category";
import ProductLeilao from "../layout/ProductLeilao";
import data from "../../data";
import styles from "./Leiloes.module.css";
import { Link } from "react-router-dom";

function Leiloes() {
  const cadaCategoria = [...data.musicas, ...data.filmes, ...data.jogos];
  const produtosEmbaralhados = cadaCategoria.sort(() => Math.random() - 0.5);
  const exibicao = produtosEmbaralhados.slice(0, 8);

  return (
    <main className={styles.containerLeiloes}>
      <Category nameCategory="Leilões" />

      <section className={styles.headerLeilao}>
        <div>
          <ul>
            <li>
              <a href="" id={styles.linkAtual}>
                Abertos
              </a>
            </li>
            <li>
              <a href="">Vendas diretas</a>
            </li>
            <li>
              <a href="">Fechados</a>
            </li>
            <li>
              <a href="">Mais visitados</a>
            </li>
          </ul>
        </div>
        <Link to="/cadastrarLote">Cadastre um lote</Link>
      </section>

      <section className={styles.produtosArea}>
        {exibicao.map((produto) => (
          // eslint-disable-next-line react/jsx-key
          <Link to={`/produtoLeilao/${produto.id}`}>
            <ProductLeilao
              key={produto.id}
              titulo={produto.titulo}
              imagem={produto.imagem}
              preco={produto.price}
              status={produto.status}
              data="21/08/2024"
            />
          </Link>
        ))}
      </section>
    </main>
  );
}

export default Leiloes;
