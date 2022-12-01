import styles from "./Input.module.css";

const Input = ({ res = "0", num }) => {
  if (num && num.length > 10) {
    num = (+num).toPrecision(7);
  }
  if (res.length > 10) {
    res = (+res).toPrecision(7);
  }
  return (
    <div
      className={styles.input}
      style={(num || res).length > 9 ? { fontSize: "40px" } : {}}
    >
      {num ? num : res}
    </div>
  );
};

export default Input;
