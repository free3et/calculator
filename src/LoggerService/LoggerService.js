function useLocalStorageInputs(data) {
  let localStorageValuesArr = JSON.parse(localStorage.getItem("result")) || [];

  localStorageValuesArr.push(data);
  localStorage.setItem("result", JSON.stringify(localStorageValuesArr));
}

export { useLocalStorageInputs };

function useErrorsLocalStorage(errorMessage, errorInfo) {
  let { componentStack } = errorInfo;
  let errorInformation = componentStack.replace("\n", "").split("    ");
  errorInformation.splice(0, 1);

  let errorValues = {
    message: errorMessage,
    errorInfo: errorInformation,
    date: new Date().toLocaleString(),
  };
  let localStorageErrorArr = JSON.parse(localStorage.getItem("Errors")) || [];

  localStorageErrorArr.push(errorValues);
  localStorage.setItem("Errors", JSON.stringify(localStorageErrorArr));
}

export { useErrorsLocalStorage };
