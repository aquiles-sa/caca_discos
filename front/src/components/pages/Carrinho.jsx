import { useCart } from "react-use-cart";
import styles from "./Carrinho.module.css";
import CarrinhoProps from "../layout/CarrinhoProps";

function Carrinho() {
  const { isEmpty } = useCart();

  if (isEmpty) {
    return <h1>Seu carrinho está vazio.</h1>;
  }

  return (
    <section className={styles.container}>
      <CarrinhoProps
        categoria="Musica"
        entregue="No carrinho"
        devolucao="Veja o produto"
        data="Hoje"
      />
    </section>
  );
}

export default Carrinho;
