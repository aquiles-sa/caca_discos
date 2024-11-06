/* eslint-disable react/prop-types */
import { useState } from "react";
import styles from "./FilterAside.module.css";

function FilterAside(props) {
  const [isFilterVisible] = useState(true);

  const [outerwear, setOuterwear] = useState([]);
  const [season, setSeason] = useState([]);
  const [price, setPrice] = useState(0);

  const handleCheckboxChange = (event, setFilter) => {
    const { value, checked } = event.target;
    setFilter((prev) =>
      checked ? [...prev, value] : prev.filter((item) => item !== value)
    );
  };

  const applyFilters = () => {
    console.log("Filtros aplicados:", { outerwear, season, price });
  };

  return (
    <aside className={styles.filterAside}>
      <button className={styles.filterToggle}>
        {isFilterVisible ? "Filtros" : "Mostrar filtros"}
      </button>

      {isFilterVisible && (
        <>
          <div className={styles.filterSection}>
            <h3>{props.tituloPlataforma}</h3>
            <label>
              <input
                type="checkbox"
                value="Windbreaker"
                onChange={(e) => handleCheckboxChange(e, setOuterwear)}
              />{" "}
              {props.nomePlataforma1}
            </label>
            <label>
              <input
                type="checkbox"
                value="Jumpsuit"
                onChange={(e) => handleCheckboxChange(e, setOuterwear)}
              />{" "}
              {props.nomePlataforma2}
            </label>
            <label>
              <input
                type="checkbox"
                value="Jacket"
                onChange={(e) => handleCheckboxChange(e, setOuterwear)}
              />{" "}
              {props.nomePlataforma3}
            </label>
            <label>
              <input
                type="checkbox"
                value="Coat"
                onChange={(e) => handleCheckboxChange(e, setOuterwear)}
              />{" "}
              {props.nomePlataforma4}
            </label>
          </div>

          <div className={styles.filterSection}>
            <h3>{props.nomeTitulo2}</h3>
            <label>
              <input
                type="checkbox"
                value="Spring"
                onChange={(e) => handleCheckboxChange(e, setSeason)}
              />{" "}
              {props.nome2Titulo1}
            </label>
            <label>
              <input
                type="checkbox"
                value="Summer"
                onChange={(e) => handleCheckboxChange(e, setSeason)}
              />{" "}
              {props.nome2Titulo2}
            </label>
            <label>
              <input
                type="checkbox"
                value="Autumn"
                onChange={(e) => handleCheckboxChange(e, setSeason)}
              />{" "}
              {props.nome2Titulo3}
            </label>
            <label>
              <input
                type="checkbox"
                value="Winter"
                onChange={(e) => handleCheckboxChange(e, setSeason)}
              />{" "}
              {props.nome2Titulo4}
            </label>
          </div>

          <div className={styles.filterSection}>
            <h3>PREÇO</h3>
            <input
              type="range"
              min="0"
              max="5000"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
            <p>Preço: R$ {price}</p>
          </div>

          <button className={styles.filterApply} onClick={applyFilters}>
            Aplicar
          </button>
        </>
      )}
    </aside>
  );
}

export default FilterAside;
