import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./Redux/store";
import App from "./AppC";

import { TransactionsProvider } from "./context/TransactionContext";
import "./index.css";

ReactDOM.render(
  <Provider store={store}>
    <TransactionsProvider>
      <App />
    </TransactionsProvider>
  </Provider>,
  document.getElementById("root"),
);
