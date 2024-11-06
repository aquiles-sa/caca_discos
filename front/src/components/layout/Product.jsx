/* eslint-disable react/prop-types */
import { CiHeart } from "react-icons/ci";
import { FaCartPlus } from "react-icons/fa";
import { useCart } from "react-use-cart";
import { Link } from "react-router-dom";

import styles from "./Product.module.css";

function Product(props) {
  const { addItem } = useCart();

  return (
    <section>
      <div className={styles.productBox}>
        <section className={styles.favCart}>
          <button
            className={styles.heartArea}
            onClick={() => addItem(props.item)}
          >
            <CiHeart className={styles.heart} />
          </button>
          <button
            className={styles.cartArea}
            onClick={() => addItem(props.item)}
          >
            <FaCartPlus className={styles.cart} />
          </button>
        </section>
        <section className={styles.productInfo}>
          <img src={props.img} alt="imagem do produto" />
          <span className={styles.title}>{props.nomeProduto}</span>
          <span className={styles.price}>R$ {props.price}</span>
        </section>

        <Link to={`/produto/${props.id}`}>
          <button className={styles.btn}>Ver Detalhes</button>
        </Link>
      </div>
    </section>
  );
}

export default Product;
