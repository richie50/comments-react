import "./index.css";

import App from "./App";
import AppThemeProvider from "./theming/theme";
import { Provider } from "react-redux";
import React from "react";
import ReactDOM from "react-dom";
import configureAppStore from "./redux/store";

// import * as serviceWorker from "./serviceWorker";
const store = configureAppStore();
console.log(store);

ReactDOM.render(
  <Provider store={store}>
    <AppThemeProvider>
      <App />
    </AppThemeProvider>
  </Provider>,
  document.querySelector("#root")
);
//serviceWorker.unregister();
