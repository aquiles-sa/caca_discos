import Category from "../layout/Category";
import Product from "../layout/Product";
import styles from "../pages/global.module.css";
import data from "../../data";
import FilterAside from "./FilterAside";

function Jogos() {
  return (
    <div>
      <Category nameCategory="Jogos" />

      <section className={styles.container}>
        <aside className={styles.filterAside}>
          <FilterAside
            tituloPlataforma="Consoles"
            nomePlataforma1="Playstation 2"
            nomePlataforma2="Playstation 3"
            nomePlataforma3="Atari"
            nomePlataforma4="Mega drive"
            nomePlataforma5="Xbox 360"
            nomePlataforma6="Gameboy Advanced"
            nomeTitulo2="Gênero"
            nome2Titulo1="Ação"
            nome2Titulo2="Terror"
            nome2Titulo3="Puzzle"
            nome2Titulo4="Esportes"
          />
        </aside>

        <article className={styles.productsArea}>
          {data.jogos.map((item, index) => {
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

export default Jogos;
