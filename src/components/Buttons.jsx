import Button from "./Button";
import styles from "./Buttons.module.css";

const btns = [
  "AC",
  "+/-",
  "%",
  "÷",
  7,
  8,
  9,
  "x",
  4,
  5,
  6,
  "-",
  1,
  2,
  3,
  "+",
  0,
  ".",
  "=",
];

const Buttons = ({
  numClick,
  resetClick,
  reverseClick,
  persentClick,
  signClick,
  equalClick,
  dotClick,
  sign,
}) => {
  return (
    <div className={styles.btns}>
      {btns.map((btn, index) => (
        <Button
          key={index}
          className={`btn ${
            index < 3
              ? "lightBtn"
              : (index + 1) % 4 === 0 || index === 18
              ? "orangeBtn"
              : "darkBtn"
          } ${index === 16 ? "wideBtn" : ""} ${
            btn === sign ? "orangeBtnReverse" : ""
          } `}
          btnName={btn}
          onClick={
            typeof btn === "number"
              ? numClick
              : btn === "+/-"
              ? reverseClick
              : btn === "%"
              ? persentClick
              : btn === "."
              ? dotClick
              : btn === "AC"
              ? resetClick
              : btn === "="
              ? equalClick
              : signClick
          }
        />
      ))}
    </div>
  );
};

export default Buttons;
