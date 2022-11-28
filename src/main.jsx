import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { GenericErrorBoundaries } from "./GenericErrorBoundaries/GenericErrorBoundaries";

ReactDOM.createRoot(document.getElementById("root")).render(
  //<React.StrictMode>
  <GenericErrorBoundaries>
    <App />
  </GenericErrorBoundaries>
  //</React.StrictMode>
);
