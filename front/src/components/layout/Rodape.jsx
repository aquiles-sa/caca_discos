import styles from "./Rodape.module.css";
import { Link } from "react-router-dom";

import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineLocalPhone } from "react-icons/md";
import { MdOutlineMail } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

function Rodape() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <section>
          <h2 className={styles.logo}>
            <Link className={styles.pixelify} to={"/"}>
              Caça discos
            </Link>
          </h2>
        </section>

        <section className={styles.infoContent}>
          <div className={styles.infoArea}>
            <FaLocationDot />
            <span>21, Rua Eduardo Assmar Acre, Brasil</span>
          </div>
          <div className={styles.infoArea}>
            <MdOutlineLocalPhone />
            <span>(68) 98984-8675</span>
          </div>
          <div className={styles.infoArea}>
            <MdOutlineMail />
            <span>cacadiscosbr@gmail.com</span>
          </div>
        </section>

        <section className={styles.aboutUs}>
          <span>Sobre a empresa</span>
          <p>
            Na Caça Discos, valorizamos a qualidade e a autenticidade dos
            produtos. Nossa missão é conectar pessoas com suas memórias e
            paixões, oferecendo um atendimento excepcional e uma experiência de
            compra fácil e segura. Explore nosso acervo e redescubra a magia dos
            discos, jogos e filmes que definiram gerações!
          </p>

          <div className={styles.iconsArea}>
            <FaFacebookF className={styles.icon} />
            <FaInstagram className={styles.icon} />
            <FaTwitter className={styles.icon} />
          </div>
        </section>
      </div>
    </footer>
  );
}

export default Rodape;
