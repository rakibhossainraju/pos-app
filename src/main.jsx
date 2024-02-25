import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { reduxStore } from "./redux-store/redux-store.js";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={reduxStore}>
      <App />
    </Provider>
  </React.StrictMode>,
);
