import ReactDOM from "react-dom";
import { StrictMode } from "react";
import App from "./App";

const rootEl = document.getElementById("root");

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootEl
);
