export const useResultValidation = (number1, number2) => {
  switch (true) {
    case isNaN(number1) || isNaN(number2):
      throw new Error("It's not a number (NAN)!");
    case number1 == "00" || number2 == "00":
      throw new Error("You cannot enter 00!");
    case +number2 === 0:
      throw new Error("You cannot divide by 0!");
    case String(number1).length > 15 || String(number2).length > 10:
      throw new Error("The number is tooooo big");
    case number2 === "":
      return;
    default:
      console.clear();
      return number1 && number2;
  }
};
