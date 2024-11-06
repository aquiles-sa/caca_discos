import PropTypes from "prop-types";
import styles from "../pages/global.module.css";

function Category(props) {
  return <h1 className={styles.title}>{props.nameCategory}</h1>;
}

Category.propTypes = {
  nameCategory: PropTypes.string,
};

export default Category;
