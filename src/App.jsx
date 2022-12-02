import { Input } from "./Input/Input";
import { useState, useEffect } from "react";
import { Result } from "./Result/Result";
import "./App.css";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorFallback } from "./GenericErrorBoundaries/ErrorFallback";
import { useErrorsLocalStorage } from "./LoggerService/LoggerService";

document.addEventListener("error", (e) => {
  console.log(error);
});

function App() {
  const [number1, setNumber1] = useState(1);
  const [number2, setNumber2] = useState(1);
  const [result, setResult] = useState("");
  const [value, setValue] = useState(1);

  const onNumber1Change = (num) => {
    setNumber1(num);
  };

  const onNumber2Change = (num) => {
    setNumber2(num);
  };

  const devideTwoNumbers = (number1, number2) => {
    const devided = number1 / number2;
    setResult(
      Number.isInteger(devided)
        ? devided
        : devided / 1000 < 0.001
        ? devided.toFixed(10)
        : devided.toFixed(2)
    );
  };

  useEffect(() => onNumber1Change(number1), [number1]);
  useEffect(() => onNumber2Change(number2), [number2]);
  useEffect(() => devideTwoNumbers(number1, number2), [number1, number2]);

  return (
    <main className="App">
      <h2>Result of Division</h2>

      <Input onNumberChange={onNumber1Change} value={value} id="number1" />
      <Input onNumberChange={onNumber2Change} value={value} id="number2" />
      <ErrorBoundary
        FallbackComponent={ErrorFallback}
        onReset={() => {
          setNumber1(1), setNumber2(1), setValue(1);
        }}
        onError={(error, errorInfo) => {
          const errorMessage = error.message;
          useErrorsLocalStorage(errorMessage, errorInfo);
        }}
      >
        <Result result={result} number1={number1} number2={number2} />
      </ErrorBoundary>
    </main>
  );
}

export default App;
