import { Input } from "./Input/Input";
import { useState, useEffect } from "react";
import { Result } from "./Result/Result";
import "./App.css";
import { useInputValidation } from "./useInputValidation/useInputValidation";

document.addEventListener("error", (e) => {
  console.log(error);
});

function App() {
  const [number1, setNumber1] = useState(1);
  const [number2, setNumber2] = useState(1);
  const [result, setResult] = useState("");

  const onNumber1Change = (num) => {
    setNumber1(num);
  };

  const onNumber2Change = (num) => {
    setNumber2(num);
  };

  useInputValidation(number1, number2);

  const addTwoNumbers = (number1, number2) => {
    setResult(number1 + number2);
  };

  /* const crash = () => {
    try {
      throwError();
    } catch (e) {
      setError(e);
      console.error(e);
    }
  }; */

  useEffect(() => onNumber1Change(number1), [number1]);
  useEffect(() => onNumber2Change(number2), [number2]);
  useEffect(() => addTwoNumbers(number1, number2), [number1, number2]);

  return (
    <main className="App">
      <Input onNumberChange={onNumber1Change} />
      <Input onNumberChange={onNumber2Change} />
      <Result result={result} />
    </main>
  );
}

export default App;
