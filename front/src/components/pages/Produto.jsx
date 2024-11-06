import { Link, useParams } from "react-router-dom";
import { CiHeart } from "react-icons/ci";
import { FaCartPlus } from "react-icons/fa";
import { IoMdArrowDropright } from "react-icons/io";

import data from "../../data";
import styles from "./Produto.module.css";
import Comentario from "../layout/Comentario";

function Produto() {
  const { id } = useParams();
  const idNumber = Number(id);

  function buscarProdutoPorId(idNumber) {
    for (const categoria in data) {
      const produto = data[categoria].filter((item) => item.id === idNumber)[0];
      if (produto) {
        return produto;
      }
    }
    return null;
  }

  const produto = buscarProdutoPorId(parseInt(idNumber));
  const produto2 = buscarProdutoPorId(parseInt(idNumber) + 1);
  const produto3 = buscarProdutoPorId(parseInt(idNumber) + 2);

  return (
    <div>
      <div className={styles.topContainer}>
        <aside>
          <div className={styles.productTargetBox}>
            <section className={styles.targetFavCart}>
              <button className={styles.targetHeartArea}>
                <CiHeart className={styles.targetHeart} />
              </button>
              <button className={styles.targetCartArea}>
                <FaCartPlus className={styles.targetCart} />
              </button>
            </section>
            <img src={produto.imagem} alt="imagem" />
          </div>

          <section className={styles.storeInfo}>
            <span>Produtos da loja</span>

            <div className={styles.otherProducts}>
              <div>
                <section className={styles.targetFavCart}>
                  <button className={styles.targetHeartArea}>
                    <CiHeart className={styles.targetHeart} />
                  </button>
                  <button className={styles.targetCartArea}>
                    <FaCartPlus className={styles.targetCart} />
                  </button>
                </section>
                <img src={produto2.imagem} alt="imagem" />
              </div>
              <div>
                <section className={styles.targetFavCart}>
                  <button className={styles.targetHeartArea}>
                    <CiHeart className={styles.targetHeart} />
                  </button>
                  <button className={styles.targetCartArea}>
                    <FaCartPlus className={styles.targetCart} />
                  </button>
                </section>
                <img src={produto3.imagem} alt="imagem" />
              </div>
            </div>
            <button className={styles.checkMoreBtn}>
              Ver todos os produtos
            </button>
          </section>
        </aside>
        <section className={styles.infoProduct}>
          <div className={styles.productTitleArea}>
            <h3>{produto.titulo}</h3>
            <span>Categoria: {produto.categoria}</span>
          </div>
          <div className={styles.priceArea}>
            <span className={styles.price}>R$ {produto.price}</span>
            <span>Parcele em até 12x</span>
            <a href="#">Veja os meios de pagamento</a>
          </div>
          <div className={styles.freteArea}>
            <span className={styles.freteTitle}>Frete</span>
            <span className={styles.digiteCep}>
              Digite o <span>cep</span>
            </span>
          </div>

          <div className={styles.quantidadeArea}>
            <label htmlFor="quantidade">Quantidade:</label>
            <select name="quantidade" id="quantidade">
              <option value="1">1</option>
              <option value="1">2</option>
              <option value="1">3</option>
              <option value="1">4</option>
              <option value="1">5</option>
            </select>
          </div>
          <div className={styles.addCupom}>
            <span>Adicione um cupom</span>
          </div>

          <div className={styles.descricaoArea}>
            <span>Descrição</span>
            <p>
              {produto.titulo} é o último álbum de estúdio da banda Linkin Park,
              lançado em 2017. Este disco marca uma mudança significativa no
              estilo musical do grupo, apresentando uma abordagem mais pop e
              eletrônica, em contraste com seu som característico de rock
              alternativo e nu metal.
            </p>
          </div>
          <div className={styles.btnArea}>
            <Link to={"/EscolherFormaEntrega"} className={styles.buyBtn}>
              Comprar agora
            </Link>
            <button className={styles.cartBtn}>Adicionar ao carrinho</button>
          </div>
        </section>
      </div>

      <section className={styles.bottomContainer}>
        <div>
          <span className={styles.title}>Avaliações e comentários</span>
        </div>
        <div className={styles.commentsArea}>
          <Comentario
            destaque="Qualidade de som impecável!"
            textoDescritivo="Qualidade de som ficou excelente! Recomendo com certeza!"
            nomePerfil="Captain Viridian"
            dataComentario="16/09/2024"
          />
          <Comentario
            destaque="Muito bom!"
            textoDescritivo="Veio dentro do prazo e sem defeitos! Loja muito prestativa e empática!"
            nomePerfil="Kakashi Hatake"
            dataComentario="21/08/2024"
          />
          <Comentario
            destaque="Simplesmente fantástico!"
            textoDescritivo="Produto de ótima qualidade e com um preço equivalente a condição."
            nomePerfil="Ippo Makunouchi"
            dataComentario="16/09/2024"
          />

          <div className={styles.arrowArea}>
            <IoMdArrowDropright className={styles.arrow} />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Produto;
