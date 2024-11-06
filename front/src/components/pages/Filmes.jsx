import Category from "../layout/Category";
import Product from "../layout/Product";
import styles from "../pages/global.module.css";
import data from "../../data";
import FilterAside from "./FilterAside";

function Filmes() {
  return (
    <div>
      <Category nameCategory="Filmes" />

      <section className={styles.container}>
        <aside className={styles.filterAside}>
          <FilterAside
            tituloPlataforma="Gêneros"
            nomePlataforma1="Terror"
            nomePlataforma2="Ação e aventura"
            nomePlataforma3="Sci-Fi"
            nomePlataforma4="Drama"
            nomePlataforma5="Romance"
            nomePlataforma6="Desenhos"
            nomeTitulo2="Destques"
            nome2Titulo1="Clássicos 2000"
            nome2Titulo2="Blue Ray"
            nome2Titulo3="Premiados"
          />
        </aside>

        <article className={styles.productsArea}>
          {data.filmes.map((item, index) => {
            return (
              <Product
                img={item.imagem}
                nomeProduto={item.titulo}
                price={item.price}
                item={item}
                key={index}
                id={item.id}
              />
            );
          })}
          <div className={styles.circlesArea}>
            <div className={styles.circle}></div>
            <div className={styles.circle}></div>
            <div className={styles.circle}></div>
            <div className={styles.circle}></div>
          </div>
        </article>
      </section>
    </div>
  );
}

export default Filmes;
