import { useEffect, useState } from "react";

export const useInputValidation = (number1, number2, error) => {
  /*  const isCommaInNumber = (num) => {
    //return !isNaN(parseFloat(num)) && isFinite(num);
    //return String(num).replace(/[,]/g, ".");
  }; */

  /*
  if (!isCommaInNumber(number1) || !isCommaInNumber(number1)) {
    throw new Error("It's not a number (NAN)!");
  } */

  if (isNaN(number1) || isNaN(number2)) {
    throw new Error("It's not a number (NAN)!");
  }

  if (number1 == " " || number2 == " ") {
    throw new Error("Do not cheat. You entered the symbol of white space!");
  }

  if (number1 == null || number2 == null) {
    throw new Error("The number is null");
  }

  if (String(number1).length > 10 || String(number2).length > 10) {
    throw new Error("The number is tooooo big");
  }
};
