import Product from "../layout/Product";
import styles from "./Home.module.css";
import { Link } from "react-router-dom";
import { FaRegStarHalf } from "react-icons/fa";
import { IoMdArrowDropright } from "react-icons/io";
import { IoMdArrowDropleft } from "react-icons/io";

import data from "../../data";

const limiteExibicaoMusica = data["musicas"].slice(0, 3);
const limiteExibicaoFilmes = data["filmes"].slice(0, 3);
const limiteExibicaoJogos = data["jogos"].slice(0, 3);

function Home() {
  return (
    <section className={styles.homeContainer}>
      <div className={styles.promoSection}>
        <div className={styles.imageOverlay}>
          <div className={styles.tituloArea}>
            <span className={styles.tituloBanner}>Caça Discos</span>
            <p>
              Descubra relíquias que contam histórias. Venha caçar seu disco
              favorito!
            </p>
          </div>
        </div>
      </div>

      <section className={styles.topConteudos}>
        <span className={styles.tituloTopConteudos}>Top conteúdos</span>

        <article>
          <div className={styles.boxCategoria1}>
            <div className={styles.boxOverlay}>
              <span className={styles.tituloCategoriaBox}>Músicas</span>
            </div>
          </div>

          <div className={styles.boxCategoria2}>
            <div className={styles.boxOverlay}>
              <span className={styles.tituloCategoriaBox}>Jogos</span>
            </div>
          </div>
          <div className={styles.boxCategoria3}>
            <div className={styles.boxOverlay}>
              <span className={styles.tituloCategoriaBox}>Filmes</span>
            </div>
          </div>
        </article>
      </section>

      <section className={styles.categoryTargetContent}>
        <aside className={styles.photoCategorySection1}>
          <div className={styles.photoCategoryOverlay}>
            <div className={styles.infoCategoryArea}>
              <span>Músicas</span>
              <Link className={styles.linkCategoria} to={"/musicas"}>
                Veja mais
              </Link>
            </div>
          </div>
        </aside>
        <article className={styles.productsCategory}>
          {limiteExibicaoMusica.map((produto, index) => {
            return (
              <Product
                img={produto.imagem}
                nomeProduto={produto.titulo}
                price={produto.price}
                key={index}
                id={produto.id}
              />
            );
          })}
        </article>
      </section>

      <section className={styles.entrarComoVendedor}>
        <div className={styles.overlayEntrarComoVendedor}>
          <p>Possui uma locadora? Venda seus produtos!</p>
          <div>
            <Link to={"/cadastroEmpresa"} className={styles.entreVendedor}>
              Entre como vendedor
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.categoryTargetContent}>
        <aside className={styles.photoCategorySection2}>
          <div className={styles.photoCategoryOverlay}>
            <div className={styles.infoCategoryArea}>
              <span>Filmes</span>
              <Link className={styles.linkCategoria} to={"/musicas"}>
                Veja mais
              </Link>
            </div>
          </div>
        </aside>
        <article className={styles.productsCategory}>
          {limiteExibicaoFilmes.map((produto, index) => {
            return (
              <Product
                img={produto.imagem}
                nomeProduto={produto.titulo}
                price={produto.price}
                key={index}
                id={produto.id}
              />
            );
          })}
        </article>
      </section>

      <section className={styles.categoryTargetContent3}>
        <aside className={styles.photoCategorySection3}>
          <div className={styles.photoCategoryOverlay}>
            <div className={styles.infoCategoryArea}>
              <span>Jogos</span>
              <Link className={styles.linkCategoria} to={"/musicas"}>
                Veja mais
              </Link>
            </div>
          </div>
        </aside>
        <article className={styles.productsCategory}>
          {limiteExibicaoJogos.map((produto, index) => {
            return (
              <Product
                img={produto.imagem}
                nomeProduto={produto.titulo}
                price={produto.price}
                key={index}
                id={produto.id}
              />
            );
          })}
        </article>
      </section>

      <section className={styles.bannerEmAlta}>
        <div className={styles.overlayBanner}>
          <div>
            <span className={styles.textBanner}>
              <FaRegStarHalf />
              Em alta
            </span>
          </div>
        </div>
      </section>

      <section className={styles.emAltaProdutos}>
        <div>
          <IoMdArrowDropleft className={styles.arrows} />
        </div>
        {limiteExibicaoJogos.map((produto, index) => {
          return (
            <Product
              img={produto.imagem}
              nomeProduto={produto.titulo}
              price={produto.price}
              key={index}
              id={produto.id}
            />
          );
        })}
        <div>
          <IoMdArrowDropright className={styles.arrows} />
        </div>
      </section>

      <section className={styles.bannerPlanos}>
        <div className={styles.overlayBannerPlanos}>
          <div>
            <span className={styles.maiorTexto}>
              Consulte os nossos planos e ganhe benefícios exclusivos!
            </span>
            <p>
              Nossos planos foram feitos com enorme planejamento e cuidado para
              atender vantagens e ofertas positivas para suas preferências
            </p>
            <span className={styles.verPlanosBtn}>
              <Link to={"/planos"} className={styles.text}>
                Ver planos
              </Link>
            </span>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Home;
