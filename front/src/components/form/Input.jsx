/* eslint-disable react/prop-types */
import styles from "./Input.module.css";

function Input({ type, text, name, handleOnChange, value, multiple }) {
  return (
    <div className={styles.inputField}>
      <input
        type={type}
        name={name}
        id={name}
        onChange={handleOnChange}
        value={value}
        required
        {...(multiple ? { multiple } : "")}
      />
      <label htmlFor={name}>{text}</label>
    </div>
  );
}

export default Input;
