import styles from "./Suporte.module.css";
import { GoDependabot } from "react-icons/go";
import { CiUser } from "react-icons/ci";

function Suporte() {
  return (
    <section className={styles.container}>
      <aside className={styles.suporteInfo}>
        <h3>Suporte</h3>
        <div className={styles.row}></div>
        <div>
          <p>
            A aba de suporte do seu site Caça Discos é projetada para oferecer
            assistência rápida e eficaz aos nossos clientes. Aqui, os usuários
            podem encontrar respostas para suas perguntas, resolver problemas e
            obter informações sobre nossos produtos e serviços.
          </p>
        </div>
      </aside>

      <article className={styles.conversaBox}>
        <aside>
          <div className={styles.iconBotArea}>
            <GoDependabot className={styles.icon} />
          </div>
          <div className={styles.messageBot}>
            <p>
              Olá! Bem-vindo ao suporte da Caça Discos! Estamos aqui para ajudar
              você com qualquer dúvida ou questão que tenha sobre nossos
              produtos, pedidos ou serviços. Como podemos assisti-lo hoje?
            </p>
          </div>
        </aside>

        <div className={styles.userInputArea}>
          <input type="text" placeholder="Digite sua mensagem" />
          <div className={styles.iconUserArea}>
            <CiUser className={styles.icon} />
          </div>
        </div>
      </article>
    </section>
  );
}

export default Suporte;
