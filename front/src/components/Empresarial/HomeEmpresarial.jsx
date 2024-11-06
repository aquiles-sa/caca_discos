import styles from "./HomeEmpresarial.module.css";
import imagemExemplo from "../../assets/images/musicas/20.png.webp";
import Category from "../layout/Category";
import { Link } from "react-router-dom";

function HomeEmpresarial() {
  return (
    <div className={styles.masterContainer}>
      <Category nameCategory="Minha loja" />

      <section className={styles.contentContainer}>
        <article className={styles.productStoreBox}>
          <div className={styles.imageBox}>
            <img src={imagemExemplo} width={"150px"} />
          </div>

          <div className={styles.productsInfo}>
            <span className={styles.productTitle}>
              Vinil Billie Eilish - When We All Fall Asleep, Where Do We Go?
            </span>
            <p className={styles.productDescription}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga
              provident rerum ex molestias voluptatibus nisi, exercitationem
              labore in mollitia id optio enim dignissimos. Laudantium nisi nam
              rem autem ad perferendis.
            </p>
            <div className={styles.btnProductArea}>
              <button className={styles.btnProduct}>Visualizar anúncio</button>
            </div>
          </div>
        </article>

        <div>
          <Link
            className={styles.btnProduct}
            to={"/adicionarProdutoEmpresarial"}
          >
            Adicionar produto
          </Link>
        </div>
      </section>

      <section className={styles.companyInfo}>
        <span>Dados empresariais</span>
        <div className={styles.companyInfoText}>
          <div>
            <p>
              Empresa: <span>ASAdisc</span>
            </p>
          </div>
          <div>
            <p>
              Endereço:
              <span>21, Rua Eduardo Assmar Acre, Brasil</span>
            </p>
          </div>
          <div>
            <p>
              Email: <span>cacadiscosbr@gmail.com</span>
            </p>
          </div>
          <div>
            <p>
              Telefone: <span>(68) 98984-8675</span>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomeEmpresarial;
