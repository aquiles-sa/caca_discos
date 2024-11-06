import styles from "./Container.module.css";

// eslint-disable-next-line react/prop-types
function Container({ children }) {
  return <main className={styles.container}>{children}</main>;
}

export default Container;
