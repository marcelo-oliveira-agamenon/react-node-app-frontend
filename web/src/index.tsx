import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, pStore } from "./store/store";

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={pStore}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
