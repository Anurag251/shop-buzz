import React from "react";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import ReactDOM from "react-dom";
import App from "./App";
import { store, persistor } from "./redux/store";

import "./index.css";
import "./styles/styles.sass";
import "./styles/responsive.sass";
import "./styles/mobile.sass";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <PersistGate persistor={persistor}>
        <ScrollToTop smooth />
        <App />
      </PersistGate>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
