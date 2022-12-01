import { useState } from "react";
import Buttons from "./components/Buttons.jsx";
import Input from "./components/Input";
import "./App.css";

function App() {
  const [calc, setCalc] = useState({});

  const { sign, num, res } = calc;

  const math = (sign, num, res) => {
    if (sign === "÷" && num === 0) {
      return "Error";
    }
    if (num === "Error" || res === "Error") {
      return "Error";
    }
    return (
      sign === "+"
        ? res + num
        : sign === "-"
        ? res - num
        : sign === "x"
        ? res * num
        : res / num
    ).toString();
  };

  const numClickHandler = (event) => {
    if (!num || num.toString().length < 9) {
      const btnNum = event.target.innerHTML;
      setCalc({
        ...calc,
        num: num ? parseFloat(num + btnNum).toString() : btnNum,
      });
    }
  };

  const signClickHandler = (event) => {
    if (num && res) {
      return setCalc({
        sign: event.target.innerHTML,
        res: res ? math(sign, +num, +res) : num ? num : "0",
      });
    }
    if (num || res) {
      return setCalc({
        sign: event.target.innerHTML,
        res: res ? res : num,
      });
    }
  };

  const equalClickHandler = () => {
    if (num && res) {
      setCalc({
        res: math(sign, +num, +res),
      });
    }
  };

  const resetClickHandler = () => {
    setCalc({});
  };

  const reverseClickHandler = () => {
    if (num) {
      return setCalc({
        ...calc,
        num: (-num).toString(),
      });
    }
    if (res) {
      setCalc({
        ...calc,
        res: (-res).toString(),
      });
    }
  };

  const persentClickHandler = () => {
    if (num) {
      return setCalc({
        ...calc,
        num: (+num / 100).toString(),
      });
    }
    if (res) {
      setCalc({
        ...calc,
        res: (+res / 100).toString(),
      });
    }
  };

  const dotClickHandler = () => {
    if (num && !num.includes(".")) {
      return setCalc({
        ...calc,
        num: num + ".",
      });
    }
    if (res && !res.includes(".")) {
      return setCalc({
        ...calc,
        res: res + ".",
      });
    }
  };

  console.log(calc);

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
          sign={calc.sign}
        />
      </div>
    </div>
  );
}

export default App;
