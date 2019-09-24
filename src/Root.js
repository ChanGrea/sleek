import React from "react";

import { Provider } from "react-redux";
import configure from "store/configure";
import App from "./App";

const store = configure();

const Root = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default Root;
