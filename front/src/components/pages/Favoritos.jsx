import styles from "./Favoritos.module.css";
import FavoritosProps from "../layout/CarrinhoProps";
import { useCart } from "react-use-cart";

function Favoritos() {
  const { isEmpty } = useCart();

  if (isEmpty) {
    return <h1>Lista de favoritos vazia.</h1>;
  }
  return (
    <div>
      <section className={styles.container}>
        <FavoritosProps
          categoria="Musica"
          entregue="Favorito"
          devolucao="Veja o produto"
          data="Hoje"
        />
      </section>
    </div>
  );
}
export default Favoritos;
