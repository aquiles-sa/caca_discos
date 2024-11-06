/* eslint-disable react/prop-types */
import { useCart } from "react-use-cart";
import styles from "../pages/Carrinho.module.css";

function FavoritosProps(props) {
  const { isEmpty, items, removeItem } = useCart();

  if (isEmpty) {
    return <h1 className={styles.empty}>Seu carrinho está vazio.</h1>;
  }

  return (
    <section className={styles.container}>
      {items.map((item, index) => {
        return (
          <div className={styles.carrinhoContent} key={index}>
            <h2>{item.categoria}</h2>

            <div className={styles.row}></div>

            <div className={styles.carrinhoInfo}>
              <img src={item.imagem} alt="imagem" style={{ width: "150px" }} />
              <div className={styles.content}>
                <span className={styles.sendedProduct}>{props.entregue}</span>
                <span className={styles.titulo}>{item.titulo}</span>
                <span className={styles.devolucaoInfo}>{props.devolucao}</span>
              </div>
            </div>

            <div className={styles.row}></div>

            <div className={styles.dataRemoverArea}>
              <span>{props.data}</span>
              <button onClick={() => removeItem(item.id)}>Remover</button>
            </div>
          </div>
        );
      })}
    </section>
  );
}

export default FavoritosProps;
