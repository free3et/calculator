import { useEffect } from "react";
import { useResultValidation } from "../useResultValidation/useResultValidation";
import { useLocalStorageInputs } from "../LoggerService/LoggerService";

export const Result = ({ result, number1, number2 }) => {
  let inputValues = {
    number1,
    number2,
    resultValue: result,
  };

  useEffect(() => useLocalStorageInputs(inputValues), [result]);

  useResultValidation(number1, number2, result);

  return (
    <>
      <div className="result">
        Result: {result !== "Infinity" ? result : " "}
      </div>
    </>
  );
};
