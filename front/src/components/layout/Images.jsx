import styles from "./Images.module.css";

import image1 from "../../assets/images/pexels-tima-miroshnichenko-6827183.jpg";
import image2 from "../../assets/images/pexels-kevinbidwell-1373100.jpg";
import image3 from "../../assets/images/pexels-caleboquendo-3162044.jpg";
import image4 from "../../assets/images/pexelsCadastro.jpg";

function Images() {
  return (
    <section>
      <div className={styles.imagesSection}>
        <img src={image1} alt="imagem" />
        <img src={image2} alt="imagem" />
        <img src={image3} alt="imagem" />
        <img src={image4} alt="imagem" />
      </div>
    </section>
  );
}

export default Images;
