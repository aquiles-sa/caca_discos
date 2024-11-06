import Category from "../layout/Category";
import Product from "../layout/Product";
import styles from "../pages/global.module.css";
import data from "../../data";
import FilterAside from "./FilterAside";

function Musicas() {
  return (
    <div>
      <Category nameCategory="Músicas" />

      <section className={styles.container}>
        <aside className={styles.filterAside}>
          <FilterAside
            tituloPlataforma="Gênero"
            nomePlataforma1="Sertanejo"
            nomePlataforma2="Rap"
            nomePlataforma3="Trap"
            nomePlataforma4="Country"
            nomePlataforma5="MPB"
            nomePlataforma6="Pop"
            nomeTitulo2="Artistas"
            nome2Titulo1="Nacionais"
            nome2Titulo2="Internacionais"
            nome2Titulo3="Premiados"
          />
        </aside>

        <article className={styles.productsArea}>
          {data.musicas.map((item, index) => {
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

export default Musicas;
