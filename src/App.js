import { useState } from "react";
import Buttons from "./components/Buttons.jsx";
import Input from "./components/Input";
import "./App.css";

function App() {
  const [calc, setCalc] = useState({});

  const { sign, num, res } = calc;

  const math = (num, res, sign) => {
    if (parseFloat(num) === 0 && sign === "÷") {
      return "Error";
    }
    return sign === "+"
      ? res + num
      : sign === "-"
      ? res - num
      : sign === "×"
      ? res * num
      : res / num;
  };

  const numClickHandler = (event) => {
    const btnNum = event.target.innerHTML;
    setCalc({
      ...calc,
      num: num
        ? parseFloat(num.toString() + btnNum)
        : num === 0 && btnNum === "0"
        ? "0"
        : parseFloat(btnNum),
    });
  };

  const resetClickHandler = () => {
    setCalc({});
  };

  const reverseClickHandler = () => {
    setCalc({
      ...calc,
      num: num ? -num : num,
      res: res && !num ? -res : res,
    });
  };

  const persentClickHandler = () => {
    setCalc({
      ...calc,
      num: num ? num / 100 : num,
      res: res && !num ? res / 100 : res,
    });
  };

  const equalClickHandler = () => {
    setCalc({
      sign: "",
      num: 0,
      res: math(parseFloat(num), parseFloat(res), sign),
    });
  };

  const signClickHandler = (event) => {
    setCalc({
      ...calc,
      sign: event.target.innerHTML,
      num: 0,
      res:
        parseFloat(res) || parseFloat(res) === 0
          ? math(num, res, sign)
          : parseFloat(num),
    });
  };

  const dotClickHandler = () => {
    setCalc({
      ...calc,
      num: num ? num.toString() + "." : num,
      res: res && !num ? res.toString() + "." : res,
    });
  };

  return (
    <div className="App">
      <h1 className="header">iCalc</h1>
      <div className="calc">
        <Input res={res} num={num} />
        <Buttons
          numClick={numClickHandler}
          resetClick={resetClickHandler}
          reverseClick={reverseClickHandler}
          persentClick={persentClickHandler}
          signClick={signClickHandler}
          equalClick={equalClickHandler}
          dotClick={dotClickHandler}
        />
      </div>
    </div>
  );
}

export default App;
