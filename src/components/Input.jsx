import styles from "./Input.module.css";

const Input = ({ res = 0, num = 0 }) => {
  return <div className={styles.input}>{num ? num : res}</div>;
};

export default Input;
